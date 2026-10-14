# Awesome JEV Papers · Research Atlas

A bilingual, responsive project homepage with interactive research statistics and a searchable academic-paper library. The frontend is framework-free HTML, CSS and ES modules: no npm installation, CDN, API keys or backend is needed. Charts are live SVG/HTML marks, not embedded images.

## 本地运行 / Local preview

From the repository root, with Python 3.10+:

```bash
python scripts/build_site_data.py
python -m http.server 8765 --bind 127.0.0.1 --directory docs
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

The source snapshot currently contains 161 included academic papers, including 160 dated arXiv records and one ResearchGate preprint with an unverified date. Academic records are counted once in their primary domain. The 13 technical articles/reports are not part of the research charts.

Time-series count arXiv **v1 dates in UTC**, not revision dates or repository addition dates. Cumulative counts reset to zero at the selected window's start and accumulate only the selected papers. The verification cutoff is recorded in Asia/Shanghai; its corresponding last UTC day may be incomplete. A zero cell means no included record, not proof of no publication.

Undated papers appear in full-window composition charts and the library; shortening the date window excludes them. The heatmap and growth plots always exclude undated papers. Tier A describes direct Jev / Jev-style research; Tier B describes an evaluation or explicit comparison. These are inclusion roles, not quality ratings. Team-size bins count credited authors per paper, not unique researchers, institutions or countries.

## Validation / 检查

Requires Node.js 18+ for the standard-library tests:

```bash
node --check docs/app.mjs
node --test site/test-metrics.mjs
python -m unittest discover -s scripts -p "test_*.py"
```

The tests cover global and domain totals, UTC dates, zero bins, combined filters, undated records, empty states, CSV quoting and language-dictionary parity. Data export fails if an included paper lacks a summary in either README. Source filenames and SHA-256 fingerprints are retained in `docs/data.json`.

## Structure / 目录

```text
docs/                # committed GitHub Pages publishing root
  index.html         # homepage entry
  style.css          # responsive visual system
  app.mjs            # UI, interactive charts and paper explorer
  metrics.mjs        # pure filtering, aggregation and CSV logic
  i18n.mjs            # interface translations
  data.json          # generated metadata + bilingual summaries
  favicon.svg
  .nojekyll          # serve static assets without Jekyll processing
site/
  README.md          # development and publishing guide
  test-metrics.mjs    # tests import the deployed modules from docs/
scripts/build_site_data.py
.github/workflows/check-site.yml
```

## Deployment / 部署

网站直接发布本仓库 **`main` 分支的 `/docs` 目录**，首页入口为 [`docs/index.html`](../docs/index.html)。HTML、样式、JavaScript 模块、图标和生成的数据都已放在该目录内。

- 中文：<https://oscar-dzy.github.io/Awesome-jev-papers/?lang=zh>
- English: <https://oscar-dzy.github.io/Awesome-jev-papers/?lang=en>

首次启用或从自定义 Actions 部署迁移：

1. 将代码和完整的 `docs/` 目录提交并推送到 `main`。
2. 打开仓库 [Settings → Pages](https://github.com/Oscar-dzy/Awesome-jev-papers/settings/pages)。
3. 在 **Build and deployment → Source** 中选择 **Deploy from a branch**。
4. 在 **Branch** 中选择 **main**，目录选择 **/docs**，点击 **Save**。
5. 等待 GitHub 自带的 **pages build and deployment** 完成，再访问上面的 `github.io` 地址。网址中不包含 `/docs/`。

In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, choose **main** and **/docs**, then **Save**. GitHub Pages publishes the committed contents of `docs/`; its URL stays at the repository subpath `/Awesome-jev-papers/`. Relative asset paths work both there and in local preview. The `.nojekyll` file keeps the site as plain static assets.

### Refresh the data / 更新数据

After updating the verified record or either README, regenerate and commit the website data **before pushing**:

```bash
python scripts/build_site_data.py
node --check docs/app.mjs
node --test site/test-metrics.mjs
python -m unittest discover -s scripts -p "test_*.py"
```

将更新后的 `docs/data.json` 与核验记录、README 一并提交。分支发布直接使用已提交文件，不会自动运行 Python 数据生成脚本。数据仍是经过核验的文献快照，不是实时检索结果。

[`.github/workflows/check-site.yml`](../.github/workflows/check-site.yml) regenerates data and runs validation on pushes and pull requests to `main`, or when started manually. It only checks the website: it does not deploy, commit generated files, or replace the committed `docs/data.json`. GitHub's branch-based Pages deployment runs separately and does not wait for this check, so run the checks locally before pushing. No custom deployment workflow, personal access token or external hosting service is required.

If publishing fails, confirm **Deploy from a branch → main → /docs**, verify that `docs/index.html` is committed, and inspect the repository's Pages deployment run. See [GitHub's branch publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
