# Awesome JEV Papers · Research Atlas

A bilingual, responsive project homepage with interactive research statistics and a searchable academic-paper library. The frontend is framework-free HTML, CSS and ES modules: no npm installation, CDN, API keys or backend is needed. Charts are live SVG/HTML marks, not embedded images.

## 本地运行 / Local preview

From the repository root, with Python 3.10+:

```bash
python scripts/build_site_data.py
python -m http.server 8765 --bind 127.0.0.1 --directory site/dist
```

Open `http://127.0.0.1:8765/?lang=zh` or `?lang=en`. Serve over HTTP; opening `index.html` through `file://` cannot load the JSON/module assets reliably. The dataset is generated offline from the latest verified snapshot and the bilingual READMEs. It does not discover new papers automatically.

## Features / 功能

- English / 简体中文 switching, with browser-language default and locally saved preference.
- Global / per-domain daily and cumulative publication trends with exact daily data inspection.
- Domain, Tier A/B and date-window filters shared by all research charts and the library.
- Domain distribution, stacked research-role composition, domain-by-day heatmap and author-team histogram.
- Domain-bar and heatmap-cell drill-down, hover/focus tooltips, zero-filled date bins and empty states.
- Search across titles, authors and both summary languages; sorting, pagination, full summaries and primary-source links.
- CSV exports use the current filters and library search. Search does not change the charts.
- Responsive layout; wide plots scroll inside their cards. Keyboard-focusable chart marks, semantic controls and a skip link are provided.
- Scope and language are reflected in shareable query parameters. No analytics, cookies, third-party fonts or trackers are loaded.

## Statistical definitions / 统计口径

The source snapshot currently contains 124 included academic papers, including 123 dated arXiv records and one ResearchGate preprint with an unverified date. Academic records are counted once in their primary domain. The 13 technical articles/reports are not part of the research charts.

Time-series count arXiv **v1 dates in UTC**, not revision dates or repository addition dates. Cumulative counts reset to zero at the selected window's start and accumulate only the selected papers. The verification cutoff is recorded in Asia/Shanghai; its corresponding last UTC day may be incomplete. A zero cell means no included record, not proof of no publication.

Undated papers appear in full-window composition charts and the library; shortening the date window excludes them. The heatmap and growth plots always exclude undated papers. Tier A describes direct Jev / Jev-style research; Tier B describes an evaluation or explicit comparison. These are inclusion roles, not quality ratings. Team-size bins count credited authors per paper, not unique researchers, institutions or countries.

## Validation / 检查

Requires Node.js 18+ for the standard-library tests:

```bash
node --check site/dist/app.mjs
node --test site/test-metrics.mjs
python -m unittest discover -s scripts -p "test_*.py"
```

The tests cover global and domain totals, UTC dates, zero bins, combined filters, undated records, empty states, CSV quoting and language-dictionary parity. Data export fails if an included paper lacks a summary in either README. Source filenames and SHA-256 fingerprints are retained in `dist/data.json`.

## Structure / 目录

```text
site/
  dist/
    index.html       # homepage shell
    style.css        # responsive visual system
    app.mjs          # UI, interactive charts and paper explorer
    metrics.mjs      # pure filtering, aggregation and CSV logic
    i18n.mjs         # interface translations
    data.json        # generated metadata + bilingual summaries
    favicon.svg
    .nojekyll
  test-metrics.mjs
scripts/build_site_data.py
.github/workflows/pages.yml
```

## Deployment / 部署

网站由本仓库的 **GitHub Actions → GitHub Pages** 工作流发布，最终地址为：

- 中文：<https://oscar-dzy.github.io/Awesome-jev-papers/?lang=zh>
- English: <https://oscar-dzy.github.io/Awesome-jev-papers/?lang=en>

首次启用：

1. 在仓库 [Settings → Pages](https://github.com/Oscar-dzy/Awesome-jev-papers/settings/pages) 的 **Build and deployment → Source** 中选择 **GitHub Actions**。
2. 将本次代码（包括 `.github/workflows/pages.yml`、`site/`、`scripts/`、`outputs/` 和两份 README）提交并推送到 `main`。
3. 在 [Actions → Deploy GitHub Pages](https://github.com/Oscar-dzy/Awesome-jev-papers/actions/workflows/pages.yml) 查看运行结果。若代码已经推送，可点击 **Run workflow** 并选择 `main` 手动部署。
4. `build` 和 `deploy` 都成功后，通过上面的 `github.io` 地址访问网站。

The workflow in [`.github/workflows/pages.yml`](../.github/workflows/pages.yml) builds and tests every push or pull request to `main`. Only pushes to `main` and manual runs on `main` publish the `site/dist/` artifact. Pull requests validate without publishing. Enable **Settings → Pages → Build and deployment → Source → GitHub Actions** once, then push the code or manually run **Deploy GitHub Pages** on `main`.

Each build regenerates `data.json` from the verified snapshot and bilingual READMEs, then runs the Python and JavaScript checks before publication. Only `site/dist/` is uploaded. The workflow uses GitHub's built-in token with Pages deployment permissions; no personal access token, external hosting service, npm dependencies or backend is required. All asset paths are relative and support the repository subpath `/Awesome-jev-papers/`.

To refresh: update the verified record and both READMEs, rerun `build_site_data.py`, run the checks, inspect the changed UI, and push the changes to `main`. GitHub Actions then publishes the refreshed site automatically. The generated dataset is a verified snapshot, not a live literature search.

If deployment fails with a Pages configuration error, first check the publishing source in Settings. A failed build leaves the last successful deployment in place; its logs identify data or test failures. See [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
