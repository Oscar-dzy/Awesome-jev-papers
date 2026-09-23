# Contributing to Awesome JEV Papers

Thank you for helping maintain a precise and useful research collection. Contributions should improve the literature map rather than broaden it into a directory of software projects.

## Accepted Contributions

- Peer-reviewed conference or journal papers
- arXiv or other clearly identified preprints
- Technical reports and white papers
- Benchmark and evaluation papers
- JEV-specific survey and position papers
- Official research blogs or substantial technical articles with methods, evidence, or reproducible measurements
- Corrections to metadata, summaries, classifications, publication status, or broken links

## Not Accepted

- Standalone GitHub or other code repositories
- Model implementation repositories or generic software projects
- Demo applications or project showcases without a research article
- Hugging Face model pages as independent entries
- Videos, podcasts, social posts, or generic news coverage
- Marketing articles without meaningful technical evidence
- Low-quality reposts, content farms, or AI-generated summaries without primary-source verification
- Papers that use “JEV” for an unrelated concept, including Japanese encephalitis virus
- Duplicate arXiv, publisher, OpenReview, or author-page entries for the same work

## Inclusion Tiers

- **Tier A — Direct JEV research:** Jev is the subject, method, or central system.
- **Tier B — Evaluation / benchmark:** Jev is explicitly evaluated, compared, or used as a baseline.

## Required Submission Information

Provide the following fields:

```markdown
- Paper or article title
- Complete author list
- Year
- Verified venue or publication status
- Canonical paper or article URL
- Optional supplementary arXiv, DOI, project, or data URL
- Proposed category and inclusion tier
- A 40–100 word original summary
- A one-sentence explanation of the relationship to Jev
```

If a venue cannot be confirmed from an official proceedings or publisher page, use `arXiv preprint` or `Preprint`. Do not infer a venue from a submission, workshop discussion, repository, or author claim.

## Verification Checklist

Before proposing an entry:

1. Open and read the primary source, not only the search result or abstract snippet.
2. Confirm the title, authors, year, venue/status, and canonical URL.
3. Identify exactly how Jev appears in the work: subject, evaluated model, baseline, application component, or conceptual relation.
4. Prefer links in this order: official conference/journal page, arXiv, OpenReview, author or organization page.
5. Search the README for the title and arXiv/DOI identifier to prevent duplicates.
6. Write a new summary in your own words; do not copy the abstract.
7. Check that every link loads and that the Markdown renders correctly.
8. Update the category and total counts in `README.md` if an entry is added or removed.

## Summary Style

A useful summary states the problem, method, principal evidence or limitation, and reason for inclusion. Keep claims attributed and proportionate. Use “reports,” “finds,” or “claims” when the evidence is first-party, preliminary, or not independently reproduced.

Avoid promotional language, unsupported superlatives, and statements that confuse schema validity with semantic correctness. Jev's typed interface can prevent malformed outputs; it does not guarantee that a decision is correct.

## Pull Request Scope

Keep each contribution focused. Metadata corrections and link repairs should explain the primary source used for verification. Papers that discuss only general calibration, constrained generation, model routing, or selective prediction without directly studying Jev or a clearly identified Jev-style model are out of scope.

By contributing original curation or summaries, you agree that your contribution may be distributed under the repository's [CC0 1.0 Universal](LICENSE) dedication. Linked papers and articles remain under their respective copyrights and licenses.
