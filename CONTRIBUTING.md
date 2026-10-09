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

## Research Domains

Assign each entry to one primary research domain in the README:

- [Foundations & General Decision Models](README.md#foundations-decision-models)
- [Natural Language Processing & Information Retrieval](README.md#nlp-information-retrieval)
- [Multimodal Learning & Perception](README.md#multimodal-perception)
- [Embodied AI & Reinforcement Learning](README.md#embodied-ai-reinforcement-learning)
- [Agents & Workflow Automation](README.md#agents-workflow-automation)
- [Trustworthy AI & Security](README.md#trustworthy-ai-security)
- [AI for Science, Healthcare & Education](README.md#science-healthcare-education)
- [Networks, Databases & Engineering](README.md#networks-databases-engineering)
- [Computational Social Science & Human Decisions](README.md#social-science-human-decisions)

Choose the domain that best describes the work's main research question or application. Use the method and experimental setting, not just a title keyword or input modality. For example, medical multimodal decisions belong to Science, Healthcare & Education, while general visual decision models belong to Multimodal Learning & Perception. Content moderation and adversarial evaluations belong to Trustworthy AI & Security. Cross-domain work appears once; its summary can explain secondary connections.

Place benchmarks, methods, applications, and technical reports together within their research domain. Keep the source label and inclusion tier on each entry. Sort dated entries from earliest to latest using the arXiv v1 UTC timestamp, or the publication date for non-arXiv sources; explicitly labeled updated reports use the displayed update date. Keep the original v1 date when a preprint is revised. Place works with only a verified publication year after dated entries in a **Publication Date Unverified** subsection. Do not substitute a DOI registration date for the publication date. Place live reports without a verified publication date in an **Undated Live Reports** subsection.

## Required Submission Information

Provide the following fields:

```markdown
- Paper or article title
- Complete author list
- Year
- Verified venue or publication status
- Canonical paper or article URL
- Optional supplementary arXiv, DOI, project, or data URL
- Proposed research domain and inclusion tier
- A 40–100 word original summary
- A one-sentence explanation of the relationship to Jev
```

If a venue cannot be confirmed from an official proceedings or publisher page, use `arXiv preprint` or `Preprint`. Do not infer a venue from a submission, workshop discussion, repository, or author claim.

## Verification Checklist

Before proposing an entry:

1. Open and read the primary source, not only the search result or abstract snippet.
2. Confirm the title, authors, year, venue/status, and canonical URL. For non-arXiv preprints, an original DOI-registry record can verify bibliographic metadata. If full text is inaccessible, disclose that limitation and attribute any summary to the specific author-provided documentation used.
3. Identify exactly how Jev appears in the work: subject, evaluated model, baseline, application component, or conceptual relation.
4. Prefer links in this order: official conference/journal page, arXiv, OpenReview, author or organization page.
5. Search both language versions for the title and arXiv/DOI identifier to prevent duplicates.
6. Write a new summary in your own words; do not copy the abstract.
7. Check that every link loads and that the Markdown renders correctly.
8. Place the entry in its primary research domain and check chronological order.
9. Synchronize domain and total counts in `README.md`, `README.zh-CN.md`, and the current verification record when adding, removing, or reclassifying an entry.

## Summary Style

A useful summary states the problem, method, principal evidence or limitation, and reason for inclusion. Keep claims attributed and proportionate. Use “reports,” “finds,” or “claims” when the evidence is first-party, preliminary, or not independently reproduced.

Avoid promotional language, unsupported superlatives, and statements that confuse schema validity with semantic correctness. Jev's typed interface can prevent malformed outputs; it does not guarantee that a decision is correct.

## Bilingual Documentation

Maintain [the English README](README.md) and [the Simplified Chinese README](README.zh-CN.md) together. Additions, removals, metadata corrections, reclassifications, and revised findings must appear in both files.

- Keep formal paper/article titles and author names in their original language for citation and search.
- Provide a faithful Chinese translation of each English summary, including experimental conditions, numerical results, uncertainty, and limitations. Translate section descriptions and verification notes as well.
- Keep the same primary domain, entry order, source URL, v1 timestamp or publication date, inclusion tier, and highlight marker in both versions.
- Keep domain anchors stable, maintain the reciprocal language links at the top, and check that each table of contents resolves within its own file.
- Synchronize all displayed counts and the verification cutoff across both versions and the current verification record.

## Pull Request Scope

Keep each contribution focused. Metadata corrections and link repairs should explain the primary source used for verification. Papers that discuss only general calibration, constrained generation, model routing, or selective prediction without directly studying Jev or a clearly identified Jev-style model are out of scope.

By contributing original curation or summaries, you agree that your contribution may be distributed under the repository's [CC0 1.0 Universal](LICENSE) dedication. Linked papers and articles remain under their respective copyrights and licenses.
