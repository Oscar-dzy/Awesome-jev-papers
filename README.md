# Awesome JEV Papers

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0--1.0-lightgrey.svg)](LICENSE)
[![Last verified](https://img.shields.io/badge/last%20verified-2026--09--23-blue.svg)](#search-and-verification-notes)

A curated collection of papers, preprints, technical reports, evaluations, and research-oriented articles about **Jev**, TypeSafe AI's first **System One Model**, and the research questions around typed probabilistic decisions.

Jev is not an acronym. The name refers to economist William Stanley Jevons. TypeSafe introduced the model on 15 September 2026 as a non-autoregressive decision component: unstructured text or program state goes in, and predefined `Choice`, `Score`, or binary (`Noul`) outputs with probabilities and confidence come out. The intended use is fast, schema-valid judgment inside software workflows rather than free-form text generation.

> **Scope.** This repository collects research literature, not implementations. Standalone GitHub repositories, model pages, demos, videos, generic news, and marketing-only posts are excluded. A code or model link may appear only as supplementary material for an included paper.

> **Evidence status.** Jev is a very new, closed-weight commercial model. As of 23 September 2026, TypeSafe has not published a peer-reviewed architecture or Reinforcement Learning for Calibrated Decisions (RLCD) paper. All Jev-specific academic items below are therefore arXiv preprints, and first-party performance claims should be treated as vendor-reported unless independently reproduced.

## Contents

- [How to Read This List](#how-to-read-this-list)
- [Repository Statistics](#repository-statistics)
- [Core JEV Sources](#-core-jev-sources)
- [Benchmarks and Evaluation](#-benchmarks-and-evaluation)
- [Applications](#-applications)
- [Technical Articles](#-technical-articles)
- [Search and Verification Notes](#search-and-verification-notes)
- [Contributing](#contributing)

## How to Read This List

- **Tier A — Direct JEV research:** the work directly introduces, studies, or builds around Jev.
- **Tier B — Evaluation / benchmark:** Jev is a measured system, baseline, or explicit comparator.
- 🔥 marks a foundational source or especially important independent evaluation. It is used sparingly.
- `Preprint` means that no conference or journal publication was verified at the cutoff date.

## Repository Statistics

<!-- Keep these counts synchronized with the five top-level literature sections below. -->

| Category | Entries |
|---|---:|
| Core JEV sources | 3 |
| Benchmarks and evaluation | 4 |
| Applications | 6 |
| Technical articles | 2 |
| **Total** | **15** |

Of the 15 entries, **10 are Jev-specific or Jev-style academic preprints** and **5 are research-oriented technical articles or reports**.

## 🔥 Core JEV Sources

### 2026

- 🔥 **[Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)** — Diogo Almeida, *TypeSafe AI Blog, 2026*. **Tier A.**
  - The launch article defines Jev's contract: text or structured state is mapped to typed probabilistic decisions without generating strings. It introduces parallel sampling, RLCD, workflow evaluations, and the claimed latency and cost advantages, while also disclosing important first-party evaluation caveats. This is the canonical primary source because no architecture or training paper was public at the verification cutoff.

- 🔥 **[Workflow evals](https://evals.typesafe.ai/)** — TypeSafe AI, *Live technical evaluation report, 2026*. **Tier A.**
  - This first-party report describes four structured automation evaluations and the harness design used to compare Jev with generative models. Policies are decomposed into independent typed judgments and deterministic code, then scored against consensus probabilities from large external models. It is essential for understanding TypeSafe's headline claims, but its reference labels, task construction, and author affiliation make independent validation necessary.

- **[Jev in the Wild: A Data-Driven Analysis of the Jev Model's Functionality, Applications and Ecosystem](https://arxiv.org/abs/2609.30216)** — Guoming Ling, Muen Xue, and Zijian Ye, *arXiv preprint, 2026*. **Tier A.**
  - Described by its authors as the first data-driven survey and analysis of Jev's application ecosystem, this preprint examines 2,170 public GitHub projects collected through September 22, 2026. It reports rapid early growth, maps application domains and decision-use patterns, and distinguishes the distribution of projects from public attention. Jev itself is the subject of the study; the repository analysis does not establish how many deployments are used in production.

## 📊 Benchmarks and Evaluation

### 2026

- 🔥 **[Jev for Scientific Decisions: Evaluating Semantic Choices and Their Consequences](https://arxiv.org/abs/2609.24965)** — Boyuan Deng, Shuyi Fan, Hongyang Zhang, and Xinhong Xie, *arXiv preprint, 2026*. **Tier B.**
  - The study evaluates Jev and eleven other configurations on twenty source-grounded semantic choices across ten scientific cases, separating relation selection from downstream arithmetic and final claims. Jev matches five configurations on complete semantic correctness and has the lowest observed median latency among successful responses. It is included because it tests Jev in a controlled decision-plus-code workflow and exposes errors hidden by end-label accuracy.

- 🔥 **[Evaluating Decision Models for Text Annotation in Computational Social Science](https://arxiv.org/abs/2609.24574)** — Hazem Ibrahim and Yasir Zaki, *arXiv preprint, 2026*. **Tier B.**
  - This preregistered evaluation compares Jev 1.13 and open decision models with nineteen language models on 7,977 items from eighteen social-science classification tasks. Jev trails the best per-task LLM on most evaluated tasks but is far cheaper and often better calibrated than verbalized LLM confidence. The paper provides the broadest verified Jev accuracy, calibration, routing, and cost study in this collection.

- 🔥 **[this-that-model-1.0: A typed decision model that decides in 30 ms, for a millionth of a cent](https://arxiv.org/abs/2609.23886)** — Zehua Cheng, Wei Dai, and Jiahao Sun, *arXiv preprint, 2026*. **Tier B.**
  - The authors present a 2B-parameter one-pass typed decision model and compare it directly with Jev on a recorded 68-question cohort. Their model reports higher accuracy and a lower Brier score on that cohort, while both approaches struggle with tasks requiring sequential arithmetic. The paper is included as an explicit Jev baseline comparison and as evidence that the typed-decision interface is not unique to one provider.

- **[Testing Jev on Public and Private Data: Classifier or Filter?](https://amankumar.ai/blogs/jev-measured)** — Aman Kumar, *Independent technical evaluation, 2026*. **Tier B.**
  - This reproducible engineering study reports roughly 16,000 calls across four public classification datasets and private production decisions, comparing Jev with smaller generative models. It finds strong high-confidence performance on short, crisp-label tasks but weaker results on long inputs and fuzzy policies. The article is included because it tests calibration and confidence-gated fallback behavior rather than repeating TypeSafe's first-party speed claims.

## ⚡ Applications

### 2026

- **[JEVQA - Video Quality from Metadata, Bitstream, and Pixel Features with a General-Purpose Decision Model](https://arxiv.org/abs/2609.24395)** — Werner Robitza, *arXiv preprint, 2026*. **Tier A.**
  - JEVQA uses Jev 1.13 as a zero-shot video-quality predictor over metadata, bitstream statistics, and pixel-derived measurements. Across two studies, richer combined features improve correlation with VMAF or mean opinion scores, although trained quality models remain stronger and pixel-only inputs fail. It is included as a careful application study showing both the flexibility and the limits of Jev's score distributions.

- **[Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev)](https://arxiv.org/abs/2609.24052)** — Amir Rafe and Subasish Das, *arXiv preprint, 2026*. **Tier A.**
  - This work applies Jev to a 27-question schema over 499,500 Texas crash narratives and audits a subset against coded fields and 2,416 blinded human judgments. It reports an F1 of 0.908 against human labels and shows that post-hoc recalibration materially reduces calibration error. The paper is included for its unusually large deployment-scale evaluation, explicit review budgets, and careful distinction between database agreement and narrative fidelity.

- **[Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986)** — Dongming Jiang, Yi Li, and Bingzhe Li, *arXiv preprint, 2026*. **Tier A.**
  - Jev-Mem uses Jev calls as a typed control plane for memory labeling, relation construction, retrieval routing, candidate scoring, and stopping, while reserving a generative model for answer synthesis. On LoCoMo it reports improved judge scores, faster memory construction, and lower query latency than the selected memory baselines. It is included as the clearest systems architecture built around Jev's bounded-decision interface.

- **[Open-Jev Judgments on CallScreenBench: Calibrated One-Pass Scam Screening with a Small Language Model](https://arxiv.org/abs/2609.23959)** — Simiao Ren, Kidus Zewde, Xingyu Shen, Yuchen Zhou, Dennis Ng, Ankit Raj, Tommy Duong, Yuxin Zhang, and Neo Tiangratanakul, *arXiv preprint, 2026*. **Tier A.**
  - The paper adapts a Qwen3-4B backbone into JevLite, a one-pass scam probability model, and evaluates it on 577 per-turn decisions from synthetic calls. The ensemble reaches 0.974 AUROC with reported calibration error of 0.052 and substantially lower latency than a generative version of the same backbone. It does not evaluate hosted Jev, but is included as a transparent Jev-style application and ablation.

- **[Fast Intent-Driven Service Orchestration with Jev for 6G Edge Networks](https://arxiv.org/abs/2609.23136)** — Delong Li, Xu Wang, Haochen Gong, Rui Lang, and Guangsheng Yu, *arXiv preprint, 2026*. **Tier A.**
  - This study uses Jev to translate natural-language 6G service intents into bounded contracts before numerical scheduling. It combines live model calls with packet-level New Radio simulation, mobility, shared queues, and a real image-reading service, reporting lower decision latency than DeepSeek and Gemini while preserving interpretation quality. It is included as an end-to-end latency study where decisions affect downstream network completion.

- **[Replacing Large Language Models with Jev Decision Models for Low-Latency Edge Service Orchestration](https://arxiv.org/abs/2609.22753)** — Delong Li, Xu Wang, Haochen Gong, Rui Lang, and Guangsheng Yu, *arXiv preprint, 2026*. **Tier A.**
  - This earlier companion study integrates Jev into an edge-service path that extracts four intent fields and shares validation, admission, and scheduling logic across model conditions. Live and modeled experiments report lower decision latency, end-to-end latency, and API cost than a structured-output DeepSeek baseline when interpretation is not cached. It overlaps with the later 6G paper but has a distinct experimental scope and is retained separately.

## 🧭 Technical Articles

### 2026

- **[Jev: A New Way to Make Probabilistic Decisions](https://amaarora.github.io/posts/2026-19-09-jev-intro.html)** — Aman Arora, *Technical blog, 2026*. **Tier A.**
  - This hands-on article explains Jev's state-and-questions interface, compares one Jev call with a structured GPT call, and walks through speculative fan-out. It clearly separates a single observed latency example from TypeSafe's broader first-party evaluation claims and raises reasonable harness-design questions. It is included as a technically detailed, cautious introduction for readers who need to understand how typed decisions compose with ordinary code.

- **[What is Jev, TypeSafe AI's System One model?](https://vercel.com/i/what-is-jev)** — Ben Sabic, *Vercel technical article, 2026*. **Tier A.**
  - Vercel's guide presents bounded decision design, evidence preparation, label definitions, abstention options, and inspectable traces using incident routing as a running example. It explicitly distinguishes schema validity from semantic correctness and recommends outcome-based threshold evaluation before automation. The article is included because it offers a sober integration perspective from a platform organization rather than treating typed outputs as intrinsically reliable.

## Search and Verification Notes

**Cutoff:** 23 September 2026 (Asia/Shanghai).

The search began with the official TypeSafe announcement to establish that Jev is a product name, not an acronym, and to identify `System One Model`, `typed decision`, `RLCD`, `Choice`, `Score`, `Noul`, calibration, workflow evaluation, and parallel decision sampling as expansion terms. Searches then covered exact-name variants, model-version references, benchmark and application terms, open implementations named in academic papers, and references or related work from the verified preprints.

Primary sources searched or checked include:

- arXiv search and individual abstract/full-text pages;
- OpenReview and official ICLR proceedings;
- ACL Anthology and PMLR;
- Semantic Scholar links exposed by primary records as a secondary metadata/citation check;
- IEEE Xplore, ACM Digital Library, SpringerLink, and ScienceDirect searches;
- TypeSafe AI's official blog, documentation, and evaluation site;
- university, laboratory, company engineering, and independent technical blogs.

No directly relevant Jev publication was found in ACL Anthology, IEEE, ACM, Springer, or ScienceDirect at the cutoff date. Searches on those services frequently returned unrelated uses of “JEV,” especially Japanese encephalitis virus, author names, or domain-specific variables; those items were excluded. ResearchGate was used only as an auxiliary discovery check and never as a canonical link.

Google Scholar was not programmatically queried because it has no supported public search API. Scopus and Web of Science were not available without subscription credentials. Because the verified Jev preprints were at most four days old, no dependable citing-paper graph was yet available; related-work expansion therefore followed their reference lists and explicit baseline discussions instead.

### Verification Policy

Each included academic item was checked against an original arXiv, conference, journal, or publisher page for title, author list, year, venue/status, URL, and actual role of Jev. A preprint is never labeled as a conference paper without an official proceedings record. Duplicate arXiv/publisher versions are represented by one entry, preferring the published version when verified.

Links and counts should be rechecked whenever the list changes. See [CONTRIBUTING.md](CONTRIBUTING.md) for the required submission and review format.

## Contributing

Contributions are welcome for verifiable research papers, preprints, technical reports, benchmarks, and substantial research articles. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing an entry. Standalone repositories, demos, model pages, generic software, marketing copy, news summaries, and duplicates are out of scope.

## License

The curated metadata and original summaries in this repository are dedicated to the public domain under [CC0 1.0 Universal](LICENSE). Linked works retain their own copyrights and licenses.
