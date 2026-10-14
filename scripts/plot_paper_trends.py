"""Build publication-date trends from a verified literature snapshot (offline)."""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import math
from collections import Counter
from dataclasses import dataclass
from datetime import date, datetime, timedelta, timezone
from itertools import accumulate
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BLUE = "#285F88"
TEAL = "#287E82"
INK = "#243746"
MUTED = "#647481"


@dataclass
class Trends:
    cutoff: date
    dates: list[date]
    daily: dict[str, list[int]]
    papers: list[dict]
    undated: list[dict]
    sources: list[dict]

    @property
    def total_daily(self) -> list[int]:
        return [sum(values[i] for values in self.daily.values())
                for i in range(len(self.dates))]


def read_snapshot(path: Path, seen: set[Path] | None = None) -> tuple[dict, list[dict]]:
    """Resolve unchanged incremental records, verifying the baseline fingerprint.

    Changed increments must provide a complete academic_records snapshot. Never
    silently use stale baseline rows if a later record reports a material change.
    """
    path = path.resolve()
    seen = set() if seen is None else seen
    if path in seen:
        raise ValueError("Cyclic baseline_record chain")
    seen.add(path)
    raw = path.read_bytes()
    record = json.loads(raw)
    provenance = [{"file": path.name, "sha256": hashlib.sha256(raw).hexdigest()}]
    if "academic_records" in record:
        return record, provenance
    if record.get("record_type") != "incremental_verification":
        raise ValueError(f"No academic snapshot in {path.name}")
    comparison = record.get("academic_comparison", {})
    required = {"added_ids", "removed_ids", "changed_records"}
    if not required.issubset(comparison) or any(comparison[key] for key in required):
        raise ValueError("Changed increments require a complete academic_records snapshot")
    baseline = (path.parent / record["baseline_record"]).resolve()
    actual_hash = hashlib.sha256(baseline.read_bytes()).hexdigest()
    if actual_hash != record.get("baseline_sha256"):
        raise ValueError("Baseline SHA-256 does not match the verification record")
    inherited, source_chain = read_snapshot(baseline, seen)
    inherited = {**inherited, **record}
    return inherited, provenance + source_chain


def publication_day(value: str) -> date:
    if len(value) == 10:
        return date.fromisoformat(value)
    stamp = datetime.fromisoformat(value.replace("Z", "+00:00"))
    if stamp.tzinfo is None:
        raise ValueError("Submission timestamps must contain a timezone")
    return stamp.astimezone(timezone.utc).date()


def aggregate(record: dict, sources: list[dict]) -> Trends:
    cutoff = date.fromisoformat(record["verified_on"])
    categories = [domain["name"] for domain in record["organization"]["domains"]]
    if len(set(categories)) != len(categories):
        raise ValueError("Duplicate research domains")
    counters = {name: Counter() for name in categories}
    papers, undated, identifiers = [], [], set()
    for row in record["academic_records"]:
        if row["decision"] != "include":
            continue
        if row["id"] in identifiers:
            raise ValueError(f"Duplicate academic identifier: {row['id']}")
        identifiers.add(row["id"])
        if row.get("category") not in counters:
            raise ValueError(f"Unknown research domain: {row.get('category')}")
        if not row.get("published"):
            undated.append(row)
            continue
        day = publication_day(row["published"])
        if day > cutoff:
            raise ValueError(f"Publication date after verification cutoff: {row['id']}")
        counters[row["category"]][day] += 1
        papers.append({**row, "publication_day_utc": day.isoformat()})
    if len(papers) + len(undated) != record["counts"]["academic_included"]:
        raise ValueError("Included academic total does not match verification counts")
    if not papers:
        raise ValueError("No included papers with a verified publication date")
    first = min(day for counter in counters.values() for day in counter)
    dates = [first + timedelta(days=i) for i in range((cutoff - first).days + 1)]
    daily = {name: [counter[day] for day in dates] for name, counter in counters.items()}
    return Trends(cutoff, dates, daily, papers, undated, sources)


def export_data(trends: Trends, destination: Path) -> None:
    with (destination / "daily-paper-counts.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.writer(handle, lineterminator="\n")
        writer.writerow(["date_utc", "research_domain", "daily_papers", "cumulative_papers"])
        for domain, values in {"All domains": trends.total_daily, **trends.daily}.items():
            for day, daily, cumulative in zip(trends.dates, values, accumulate(values)):
                writer.writerow([day.isoformat(), domain, daily, cumulative])
    metadata = {
        "verified_on": trends.cutoff.isoformat(),
        "date_basis": "arXiv v1 submission day in UTC; verified publication day for other papers",
        "population": "Included academic papers only, one primary domain per work",
        "interpretation": "Publication history of the current curated snapshot, not repository addition history or an exhaustive publication census",
        "zero_policy": "Zero means no dated included record in this snapshot, not proof of no publication; recent days may be incomplete",
        "sources": trends.sources,
        "dated_papers": len(trends.papers),
        "included_academic_papers": len(trends.papers) + len(trends.undated),
        "first_date_utc": trends.dates[0].isoformat(),
        "last_included_publication_day_utc": max(row["publication_day_utc"] for row in trends.papers),
        "display_end_date": trends.dates[-1].isoformat(),
        "domain_totals": {name: sum(values) for name, values in trends.daily.items()},
        "excluded_from_time_series": [{"id": row["id"], "title": row["title"],
                                       "reason": "Exact publication date unverified"}
                                      for row in trends.undated],
        "paper_membership": [{"id": row["id"], "date_utc": row["publication_day_utc"],
                              "research_domain": row["category"], "url": row["url"]}
                             for row in sorted(trends.papers, key=lambda row: (row["publication_day_utc"], row["id"]))],
    }
    (destination / "paper-trends.json").write_text(
        json.dumps(metadata, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def render(trends: Trends, destination: Path) -> None:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.dates as mdates
    import matplotlib.pyplot as plt
    from matplotlib.ticker import MaxNLocator

    plt.rcParams.update({
        "font.family": "DejaVu Sans", "font.size": 10,
        "text.color": INK, "axes.labelcolor": MUTED, "axes.edgecolor": "#BBC5CC",
        "xtick.color": MUTED, "ytick.color": MUTED,
        "axes.spines.top": False, "axes.spines.right": False,
        "axes.linewidth": 0.7, "grid.color": "#E4E9ED", "grid.linewidth": 0.65,
        "axes.axisbelow": True, "figure.facecolor": "white", "axes.facecolor": "white",
        "svg.fonttype": "path", "svg.hashsalt": "awesome-jev-paper-trends",
        "savefig.facecolor": "white", "pdf.fonttype": 42,
    })
    x = mdates.date2num(trends.dates)

    def format_axis(ax, compact=False):
        ax.set_xlim(x[0] - 0.65, x[-1] + 1.7)
        indices = sorted({round(i * (len(x) - 1) / (2 if compact else 5))
                          for i in range(3 if compact else 6)})
        ax.set_xticks([x[i] for i in indices])
        ax.xaxis.set_major_formatter(mdates.DateFormatter("%b %d"))
        ax.yaxis.set_major_locator(MaxNLocator(nbins=4, integer=True))
        ax.tick_params(length=3, width=0.7, labelsize=9 if compact else 10)
        ax.grid(axis="y")
        ax.spines["left"].set_visible(False)

    def heading(fig, title, subtitle):
        fig.text(0.075, 0.958, title, fontfamily="DejaVu Serif", fontsize=21, weight="bold")
        fig.text(0.075, 0.919, subtitle, fontsize=10.5, color=MUTED)

    def footer(fig):
        fig.text(0.075, 0.035,
                 f"Source: curated verification records | Cutoff: {trends.cutoff.isoformat()} (Asia/Shanghai) | Dates: UTC\n"
                 f"{len(trends.papers)} dated academic papers; {len(trends.undated)} undated excluded. Technical articles excluded. Recent days may be incomplete.",
                 fontsize=8, color=MUTED, linespacing=1.7)

    def save(fig, name):
        svg_path = destination / f"{name}.svg"
        fig.savefig(svg_path, metadata={"Date": None})
        # Matplotlib emits trailing spaces in multiline SVG paths.
        svg_path.write_text("\n".join(line.rstrip() for line in
                            svg_path.read_text(encoding="utf-8").splitlines()) + "\n",
                            encoding="utf-8")
        fig.savefig(destination / f"{name}.png", dpi=220)
        plt.close(fig)

    daily = trends.total_daily
    cumulative = list(accumulate(daily))
    fig, axes = plt.subplots(2, 1, figsize=(12, 7.4))
    fig.subplots_adjust(left=0.075, right=0.95, top=0.83, bottom=0.15, hspace=0.51)
    heading(fig, "Jev research: publication growth",
            "Included Jev / Jev-style academic papers · one work counted once · unsmoothed daily observations")
    for ax in axes:
        format_axis(ax)
        ax.set_ylabel("Papers", fontsize=10)
    axes[0].bar(x, daily, width=0.8, color=BLUE, linewidth=0)
    axes[0].set_ylim(0, max(daily) * 1.3)
    axes[0].set_title("A   Daily first submissions", loc="left", pad=12, fontsize=12, weight="bold")
    for day, value in zip(x, daily):
        if value:
            axes[0].text(day, value + max(daily) * 0.035, str(value), ha="center", fontsize=8, color=BLUE)
    axes[1].step(x, cumulative, where="mid", color=TEAL, linewidth=2)
    axes[1].fill_between(x, cumulative, step="mid", color=TEAL, alpha=0.085)
    axes[1].plot(x[-1], cumulative[-1], "o", color=TEAL, markersize=4)
    axes[1].annotate(str(cumulative[-1]), (x[-1], cumulative[-1]), xytext=(8, 0),
                     textcoords="offset points", va="center", color=TEAL, weight="bold", fontsize=12)
    axes[1].set_ylim(0, cumulative[-1] * 1.18)
    axes[1].set_title("B   Cumulative papers", loc="left", pad=12, fontsize=12, weight="bold")
    footer(fig)
    save(fig, "paper-growth-global")

    # Faceting preserves category identity without a crowded nine-color legend.
    import textwrap
    columns = 3
    rows = math.ceil(len(trends.daily) / columns)
    for mode in ("daily", "cumulative"):
        fig, grid = plt.subplots(rows, columns, figsize=(12, 2.6 * rows + 2.0), squeeze=False)
        fig.subplots_adjust(left=0.075, right=0.965, top=0.81, bottom=0.14, hspace=0.68, wspace=0.23)
        heading(fig, f"Jev research: {mode} papers by domain",
                "Primary research domains · common axes across all panels · "
                + ("bars show daily first submissions" if mode == "daily" else "steps show accumulated papers"))
        maximum = max(max(v) if mode == "daily" else sum(v) for v in trends.daily.values())
        for index, (ax, (domain, values)) in enumerate(zip(grid.flat, trends.daily.items())):
            series = values if mode == "daily" else list(accumulate(values))
            format_axis(ax, compact=True)
            ax.set_ylim(0, maximum * 1.2)
            color = BLUE if mode == "daily" else TEAL
            if mode == "daily":
                ax.bar(x, series, width=0.8, color=color, linewidth=0)
            else:
                ax.step(x, series, where="mid", color=color, linewidth=1.8)
                ax.fill_between(x, series, step="mid", color=color, alpha=0.08)
                ax.plot(x[-1], series[-1], "o", color=color, markersize=3.5)
            ax.set_title(f"{chr(65 + index)}   " + textwrap.fill(domain, width=34),
                         loc="left", fontsize=10, weight="bold", pad=26)
            ax.text(0, 1.055, f"n = {sum(values)} dated papers", transform=ax.transAxes,
                    fontsize=8.5, color=MUTED)
            if index % columns == 0:
                ax.set_ylabel("Papers", fontsize=9)
        for ax in list(grid.flat)[len(trends.daily):]:
            ax.set_visible(False)
        footer(fig)
        save(fig, f"paper-growth-domains-{mode}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--record", type=Path, help="Verification JSON (default: newest dated filename)")
    parser.add_argument("--output-dir", type=Path, default=ROOT / "assets" / "trends")
    args = parser.parse_args()
    candidates = sorted((ROOT / "outputs").glob("jev-literature-????-??-??.json"))
    if args.record is None and not candidates:
        parser.error("No literature verification record found")
    record, sources = read_snapshot(args.record or candidates[-1])
    trends = aggregate(record, sources)
    args.output_dir.mkdir(parents=True, exist_ok=True)
    export_data(trends, args.output_dir)
    render(trends, args.output_dir)
    print(f"Rendered 3 figures (SVG + PNG): {len(trends.papers)} dated papers, "
          f"{len(trends.undated)} undated excluded, {len(trends.daily)} domains.")
    print(f"Output: {args.output_dir.resolve()}")


if __name__ == "__main__":
    main()
