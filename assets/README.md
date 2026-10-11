# Assets

This directory contains repository-owned figures. The charts in `trends/` are original visualizations of the curated bibliographic metadata, not figures reproduced from linked papers.

## Paper growth figures

- `paper-growth-global.svg` / `.png`: daily first submissions and cumulative papers.
- `paper-growth-domains-daily.svg` / `.png`: daily counts in all nine research domains, with a common scale.
- `paper-growth-domains-cumulative.svg` / `.png`: cumulative counts in all nine research domains, with a common scale.
- `daily-paper-counts.csv`: exact daily and cumulative values, including zero-count dates, for each domain and the global total.
- `paper-trends.json`: source filenames and SHA-256 fingerprints, population rules, exclusions, domain totals, and paper-level membership.

The interactive website in `site/` is now the primary presentation linked from both READMEs. These optional SVG/PNG exports remain available for offline figures and reuse. English figure labels are shared between language versions, with translated captions and methodology in each README. The restrained blue/teal palette, white background, direct labels and separate panels remain readable without relying on category colors.

## Regenerate

Use Python 3.10+ and Matplotlib 3.7+ (below 4). From the repository root:

```bash
python -m pip install -r scripts/requirements.txt
python scripts/plot_paper_trends.py
python -m unittest discover -s scripts -p "test_*.py"
```

The generator selects the latest `outputs/jev-literature-YYYY-MM-DD.json` filename by default. To reproduce a specific snapshot or export elsewhere:

```bash
python scripts/plot_paper_trends.py --record outputs/jev-literature-2026-10-11.json --output-dir assets/trends
```

Generation is offline and does not modify the source records or README prose. An unchanged incremental verification record is resolved through its fingerprint-checked baseline. An increment that adds, removes or changes academic records must supply a complete `academic_records` snapshot before plotting; stale baseline data is never silently substituted. Update bilingual captions and source links when the population or verification cutoff changes.

## Counting rules

Only `decision: include` academic records enter the population. Each work belongs to one primary research domain and is counted once on its arXiv **v1 UTC submission date**, or its verified publication date for other sources. Revisions and repository discovery dates do not count as new papers. Year-only or undated records are excluded from the time series and listed explicitly in the metadata. Technical articles and reports are excluded.

The displayed window runs from the earliest dated paper to the verification cutoff's calendar date. Daily bins use UTC; the cutoff is recorded in Asia/Shanghai, so the last UTC day is not necessarily complete. Zeros mean no included dated record in this snapshot. Announcement/indexing lag and incomplete curation can affect recent dates. Cumulative curves reconstruct the publication history of the current collection; they do not measure when entries were added to this repository, and do not establish an exhaustive or exponential field-wide growth rate.
