"""Export verified metadata and bilingual README summaries for the static homepage."""
import hashlib
import json
import re
from pathlib import Path

from plot_paper_trends import ROOT, aggregate, read_snapshot


def read_summaries(path):
    text = path.read_text(encoding="utf-8")
    entries = re.findall(r"^- (?:🔥 )?\*\*\[(.*?)\]\((.*?)\)\*\*.*?\n  - (.*)", text, re.M)
    return {url.lower(): summary for _, url, summary in entries}


def build():
    latest = sorted((ROOT / "outputs").glob("jev-literature-????-??-??.json"))[-1]
    record, provenance = read_snapshot(latest)
    trends = aggregate(record, provenance)
    english = read_summaries(ROOT / "README.md")
    chinese = read_summaries(ROOT / "README.zh-CN.md")
    zh_names = ["基础方法与通用决策模型", "自然语言处理与信息检索", "多模态学习与感知",
                "具身智能与强化学习", "智能体与工作流自动化", "可信 AI 与安全",
                "科学、医疗与教育中的 AI", "网络、数据库与工程应用", "计算社会科学与人类决策"]
    domains = [{"id": item["anchor"], "en": item["name"], "zh": zh_names[i]}
               for i, item in enumerate(record["organization"]["domains"])]
    ids = {item["en"]: item["id"] for item in domains}
    dated = {row["id"]: row["publication_day_utc"] for row in trends.papers}
    papers = []
    for row in record["academic_records"]:
        if row["decision"] != "include":
            continue
        key = row["url"].lower()
        if key not in english or key not in chinese:
            raise ValueError(f"Missing bilingual README entry: {row['id']}")
        # Plain text only: do not expose source Markdown as executable HTML.
        clean = lambda value: re.sub(r"\[([^]]+)\]\([^)]+\)", r"\1", value).replace("**", "").replace("`", "")
        papers.append({"id": row["id"], "title": row["title"], "authors": row["authors"],
                       "domain": ids[row["category"]], "tier": row["tier"],
                       "date": dated.get(row["id"]), "year": row.get("publication_year", 2026),
                       "url": row["url"], "source": "ResearchGate" if row["id"].startswith("doi:") else "arXiv",
                       "summary": {"en": clean(english[key]), "zh": clean(chinese[key])}})
    output = {"title": "Awesome JEV Papers", "cutoff": record["verified_on"],
              "start": trends.dates[0].isoformat(), "repository": "https://github.com/Oscar-dzy/Awesome-jev-papers",
              "counts": record["counts"], "domains": domains, "papers": papers,
              "provenance": provenance + [{"file": name, "sha256": hashlib.sha256((ROOT / name).read_bytes()).hexdigest()}
                                           for name in ["README.md", "README.zh-CN.md"]],
              "method": {"date_basis": "arXiv v1 submission date in UTC; verified publication date otherwise",
                         "cutoff_timezone": "Asia/Shanghai", "unit": "One included academic work in one primary domain",
                         "excluded": "Technical sources are excluded from charts; undated papers are excluded from time-series only",
                         "coverage": "Current curated snapshot; recent dates may be incomplete due to announcement and indexing lag"}}
    path = ROOT / "docs" / "data.json"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Exported {len(papers)} papers in {len(domains)} domains to {path}")


if __name__ == "__main__":
    build()
