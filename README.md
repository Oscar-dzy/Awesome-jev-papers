<p align="center">
  <a href="https://oscar-dzy.github.io/Awesome-jev-papers">
    <img src="docs/favicon.svg" alt="Awesome JEV Papers logo" width="88" height="88">
  </a>
</p>

<h1 align="center">Awesome JEV Papers</h1>

<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<p align="center"><strong>An evidence-aware map of Jev and typed probabilistic decision research.</strong></p>

<p align="center">
  <a href="https://oscar-dzy.github.io/Awesome-jev-papers"><strong>Explore the interactive research atlas ↗</strong></a><br>
  <sub>Publication trends · Research domains · Searchable paper library</sub>
</p>

<p align="center">
  <strong>403 entries</strong> · <strong>390 academic papers</strong> · Last verified <strong>2026-11-20</strong> · <a href="LICENSE">CC0 1.0</a>
</p>

A curated collection of papers, preprints, technical reports, evaluations, and research-oriented articles about **Jev**, TypeSafe AI's first **System One Model**, and the research questions around typed probabilistic decisions.

Jev is not an acronym. The name refers to economist William Stanley Jevons. TypeSafe introduced the model on 15 September 2026 as a non-autoregressive decision component: unstructured text or program state goes in, and predefined `Choice`, `Score`, or binary (`Noul`) outputs with probabilities and confidence come out. The intended use is fast, schema-valid judgment inside software workflows rather than free-form text generation.

> **Scope.** This repository collects research literature, not implementations. Standalone GitHub repositories, model pages, demos, videos, generic news, and marketing-only posts are excluded. A code or model link may appear only as supplementary material for an included paper.

> **Evidence status.** Jev is a very new, closed-weight commercial model. The November search located no peer-reviewed TypeSafe paper disclosing Jev’s architecture or Reinforcement Learning for Calibrated Decisions (RLCD). Independent work such as OpenJev-RLCD studies its own training method and does not disclose Jev's proprietary algorithm. The academic collection includes 382 arXiv preprints, 5 other preprints and 3 published articles. First-party performance claims remain author- or vendor-reported unless independently reproduced.

## Contents

- [How to Read This List](#how-to-read-this-list)
- [Repository Statistics](#repository-statistics)
- [Interactive Research Atlas](#paper-growth)
- [Foundations & General Decision Models](#foundations-decision-models)
- [Natural Language Processing & Information Retrieval](#nlp-information-retrieval)
- [Multimodal Learning & Perception](#multimodal-perception)
- [Embodied AI & Reinforcement Learning](#embodied-ai-reinforcement-learning)
- [Agents & Workflow Automation](#agents-workflow-automation)
- [Trustworthy AI & Security](#trustworthy-ai-security)
- [AI for Science, Healthcare & Education](#science-healthcare-education)
- [Networks, Databases & Engineering](#networks-databases-engineering)
- [Computational Social Science & Human Decisions](#social-science-human-decisions)
- [Search and Verification Notes](#search-and-verification-notes)
- [Contributing](#contributing)

## How to Read This List

- **Research domains:** entries are grouped by their main research question or application. Each work appears once. A specialized application, such as medical imaging, belongs to its application domain; general visual methods belong to Multimodal Learning & Perception.
- **Cross-domain work:** use the summary to see secondary connections. Benchmarks, methods, applications, and technical reports share the same domain sections; the source label and inclusion tier describe the type of evidence.
- **Tier A — Direct JEV research:** the work directly introduces, studies, or builds around Jev or a clearly identified Jev-style model.
- **Tier B — Evaluation / benchmark:** Jev or a clearly identified Jev-style model is a measured system, baseline, or explicit comparator.
- 🔥 marks a foundational source or especially important independent evaluation. It is used sparingly.
- `Preprint` means that no conference or journal publication was verified at the cutoff date.
- 📅 **Date:** the bold UTC timestamp is the arXiv **v1** submission time; date-only labels are publication dates for non-arXiv sources unless explicitly marked as an updated report. Dated entries within each domain run from earliest to latest. Works with only a verified year follow dated entries in a **Publication Date Unverified** subsection; undated live reports use a separate **Undated Live Reports** subsection. DOI registration dates are not used as publication dates. Titles, authors, and summaries reflect the latest version verified by the cutoff; `arXiv v1` labels the date, not the version summarized.

## Repository Statistics

<!-- Keep these counts synchronized with the nine research-domain sections below and the current verification record. -->

| Research domain | Entries |
|---|---:|
| [Foundations & General Decision Models](#foundations-decision-models) | 73 |
| [Natural Language Processing & Information Retrieval](#nlp-information-retrieval) | 52 |
| [Multimodal Learning & Perception](#multimodal-perception) | 25 |
| [Embodied AI & Reinforcement Learning](#embodied-ai-reinforcement-learning) | 24 |
| [Agents & Workflow Automation](#agents-workflow-automation) | 45 |
| [Trustworthy AI & Security](#trustworthy-ai-security) | 83 |
| [AI for Science, Healthcare & Education](#science-healthcare-education) | 50 |
| [Networks, Databases & Engineering](#networks-databases-engineering) | 28 |
| [Computational Social Science & Human Decisions](#social-science-human-decisions) | 23 |
| **Total** | **403** |

Of the 403 entries, **390 are Jev-specific or Jev-style academic papers** and **13 are research-oriented technical articles or reports**.

All **382 arXiv entries** include their **v1** submission timestamp in UTC, displayed to the minute. The ResearchGate preprint has a verified year but no verified exact publication date. Domain counts include all source types and count each work once.

<a id="paper-growth"></a>

## 📈 Interactive Research Atlas

Explore the collection through the **[interactive website on GitHub Pages](https://oscar-dzy.github.io/Awesome-jev-papers/?lang=en)**, with English / Chinese switching and a responsive layout. See [the frontend guide](site/README.md#deployment--部署) for local preview and website maintenance.

- **Quick Start:** learn Jev’s typed interface with an interactive routing-threshold example and links to the official guide.
- **QS ordering:** rank papers by the sum of deduplicated university ranks from QS 2027. Each paper shows its verified affiliations and source; missing ranks and rank bands sort last.

- **Publication growth:** switch between daily and cumulative counts; filter by research domain, inclusion tier, and date window.
- **Review statistics:** compare domain distribution, Tier A/B composition, daily domain activity, and authors per paper. Select a domain bar or heatmap cell to inspect its papers.
- **Paper library:** search titles, authors, and bilingual summaries; sort, paginate, inspect primary sources, and export the matching papers as CSV.

The current snapshot contains **390 academic papers**, of which **389 have verified dates**. Time-series use arXiv v1 UTC submission dates and verified publication dates from other sources. They exclude the undated WaterSheep preprint. Composition charts and the full-window library retain it. Technical articles are excluded from all research charts. Recent dates may be incomplete because of announcement and indexing delays; these plots describe the current curated collection, not a field-wide census or repository addition history.

[Frontend source](docs/) · [Rebuild website data](scripts/build_site_data.py) · [Verification snapshot](outputs/jev-literature-2026-11-20.json)

<a id="foundations-decision-models"></a>

## 🧠 Foundations & General Decision Models

Model architectures, training and inference methods, ecosystem overviews, and evaluations spanning multiple task families.

### 2026

- 🔥 **[Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)**<br>📅 <strong>2026-09-15</strong> · TypeSafe AI Blog · <strong>Tier A</strong> · Diogo Almeida
  - The launch article defines Jev's contract: text or structured state is mapped to typed probabilistic decisions without generating strings. It introduces parallel sampling, RLCD, workflow evaluations, and the claimed latency and cost advantages, while also disclosing important first-party evaluation caveats. This is the canonical primary source because no TypeSafe paper detailing Jev's architecture or training was located at the verification cutoff.

- **[What is Jev, TypeSafe AI's System One model?](https://vercel.com/i/what-is-jev)**<br>📅 <strong>2026-09-18</strong> · Vercel technical article · <strong>Tier A</strong> · Ben Sabic
  - Vercel's guide presents bounded decision design, evidence preparation, label definitions, abstention options, and inspectable traces using incident routing as a running example. It explicitly distinguishes schema validity from semantic correctness and recommends outcome-based threshold evaluation before automation. The article is included because it offers a sober integration perspective from a platform organization rather than treating typed outputs as intrinsically reliable.

- **[Jev: A New Way to Make Probabilistic Decisions](https://amaarora.github.io/posts/2026-19-09-jev-intro.html)**<br>📅 <strong>2026-09-19</strong> · Technical blog · <strong>Tier A</strong> · Aman Arora
  - This hands-on article explains Jev's state-and-questions interface, compares one Jev call with a structured GPT call, and walks through speculative fan-out. It clearly separates a single observed latency example from TypeSafe's broader first-party evaluation claims and raises reasonable harness-design questions. It is included as a technically detailed, cautious introduction for readers who need to understand how typed decisions compose with ordinary code.

- 🔥 **[this-that-model-1.0: A typed decision model that decides in 30 ms, for a millionth of a cent](https://arxiv.org/abs/2609.23886)**<br>📅 <strong>2026-09-20 21:43 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zehua Cheng, Wei Dai, and Jiahao Sun
  - The authors present a 2B-parameter one-pass typed decision model and compare it directly with Jev on a recorded 68-question cohort. Their model reports higher accuracy and a lower Brier score on that cohort, while both approaches struggle with tasks requiring sequential arithmetic. The paper is included as an explicit Jev baseline comparison and as evidence that the typed-decision interface is not unique to one provider.

- **[Universal Fractal Natural Language Decision Map: Real-Time Edge Triage Across Heterogeneous Domains](https://arxiv.org/abs/2609.25498)**<br>📅 <strong>2026-09-21 23:57 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Volkan Dağlı, Zerrin Dağlı, and Dağhan Dağlı
  - The authors propose a deterministic fractal-feature engine with Jev-compatible Boolean, choice, and ordinal outputs and evaluate it on the 231-decision JevBench suite. The full text separates 55.4% uncalibrated accuracy from 81.65% on calibrated subsets and reports low CPU latency. It is included as a documented alternative implementation of the typed interface; subset calibration, small tests, and author-run measurements limit broader claims about generalization and robustness.

- **[NumericJev: Jev-like LLM Numerical Decoding with Multiway Decision Trees](https://arxiv.org/abs/2609.28587)**<br>📅 <strong>2026-09-23 13:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Weiwei Ye, Hangchen Liu, and Renhe Jiang
  - NumericJev turns numerical prediction into repeated range choices, enabling any LLM with a Jev-like structured-choice interface to refine values through a multiway decision tree without training or hidden-state access. On a 100-value arithmetic grid it reports lower range-normalized error than direct candidate selection, and a small historical-index study separates recall from readout error. The work is included as an interface-level extension, not an evaluation of hosted Jev itself.

- **[Jev in the Wild: A Data-Driven Analysis of the Jev Model's Functionality, Applications and Ecosystem](https://arxiv.org/abs/2609.30216)**<br>📅 <strong>2026-09-24 17:46 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guoming Ling, Muen Xue, and Zijian Ye
  - This ecosystem study analyzes 2,170 public Jev projects collected from GitHub through 22 September 2026, classifying how applications combine attribute judgments, scoring, action selection, filtering, and model or tool routing. It finds rapid early adoption but a mismatch between public attention and project distribution. The paper is included as the first quantitative map of Jev usage, while its repository-based sample measures visible experimentation rather than production deployment.

- **[JevSoup: System-One Routing for Training-Free LoRA Composition](https://arxiv.org/abs/2609.30922)**<br>📅 <strong>2026-09-25 07:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xiuying Wang, Jiahua Cheng, Shuotian Li, Yufan Cheng, Bowen Deng, Zhexuan Bai, and Yichen Li
  - JevSoup uses Jev probabilities to select two LoRA experts from task descriptions, then keeps the leading update and adds an orthogonalized component from the second without router training or auxiliary data. Across fourteen PorTAL tasks and three Qwen3 scales, it reports modest gains over the strongest evaluated external baselines. The paper is included as a concrete use of Jev for low-latency expert routing and model composition.

- **[PACT: Pairwise-Anchored Calibrated Tuning for Single-Token Typed Decisions](https://arxiv.org/abs/2609.35865)**<br>📅 <strong>2026-09-26 01:07 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yida Lin
  - PACT modifies the training recipe of the open Nimble typed-decision model using contrastive pairs, answer-code permutations, evidence removal, and ordinal penalties. On a 324-item holdout with three seeds, it reduces label-position flips and ordinal error without improving accuracy over the published recipe. It is included as a Jev-style training study, with its strongest evidence concerning robustness and optimization stability rather than superior calibration or hosted Jev performance.

- **[Typed Decision Models: An Early Evidence Audit and Evaluation Checklist](https://arxiv.org/abs/2609.32160)**<br>📅 <strong>2026-09-26 02:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Lijuan Tang and Yuemeng Zheng
  - This early review audits 28 papers posted during Jev's first nine days and connects their findings to constrained decoding, probability readouts, calibration, and model cascades. It finds clearer support for latency and cost gains than for an independent accuracy benefit from typed outputs and proposes a fourteen-item evaluation checklist. The paper is included as a structured evidence map whose conclusions remain limited by the young, rapidly changing literature.

- **[JET: Justification Evaluation in Transformer](https://arxiv.org/abs/2609.33874)**<br>📅 <strong>2026-09-27 19:50 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shenghao Ding
  - JET reads candidate likelihoods from pretrained language and vision-language models and shares prefix computation without additional training. It measures accuracy and execution cost on consumer hardware, with Jev serving as an external decision-model reference. Controlled execution studies isolate speedups from cache reuse and input preparation, while optional reasoning changes the accuracy-throughput tradeoff. It is included as a concrete alternative readout and comparison, with hardware and model differences limiting direct latency rankings.

- **[Koa-decision: Fast and Consistent Structured Decision Making with Generative LLMs](https://arxiv.org/abs/2609.36115)**<br>📅 <strong>2026-09-28 18:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shenghong Dai, Shiva Kumar Pentyala, Yingchi Liu, Shubham Mehrotra, Suman Banerjee, James Zhu, Bin Bi, Sitaram Asur, and Phil Mui
  - Koa-decision adds atomic label tokens and supervised fine-tuning to make generative models produce structured decisions in one decoding step. On an intent-routing benchmark it reports 85.5% accuracy and roughly half-second responses, including a direct comparison with Jev and support for multimodal and multilabel tasks. The work is included as a measured alternative to dedicated decision services, with its strongest serving comparison tied to the evaluated production workload.

- **[Dyad: Extending Large Language Models with Native Typed Decision-Making](https://arxiv.org/abs/2609.36116)**<br>📅 <strong>2026-09-28 18:50 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yundaichuan Zhan, Weishi Wang, Wenbiao Liu, Daniel Dahlmeier, Chengwei Qin, Juncheng Li, Fredrik D. Johansson, and Zhongqi Yue
  - Dyad augments an LLM with an action encoder that scores candidate descriptions against the interaction state, trained either independently or jointly through environment feedback. It directly compares with Jev on JevBench and ALFWorld and reports stronger agentic performance. The paper is included as a typed-action architecture and explicit Jev comparator, while its JevBench latency reference uses published API measurements and should not be interpreted as a matched hardware comparison.

- **[Evaluating and Benchmarking the System One Model Jev](https://arxiv.org/abs/2609.37647)**<br>📅 <strong>2026-09-29 14:15 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tobias Deußer, Lorenz Sparrenberg, and Rafet Sifa
  - This zero-shot study evaluates Jev on thirty-seven datasets using frozen templates and 346,009 requests, comparing identical requests with exact option-token readouts from Qwen and Gemma. Jev leads on many datasets, while low-resource languages, noisy labels, and rubric scoring remain difficult; binary thresholds also require care. The paper is included as a broad accuracy, calibration, latency, and cost audit, with memorized question-answer pairs not excluded by its controls.

- **[Can a Cacheable Decision Model Follow Rules?](https://arxiv.org/abs/2609.37832)**<br>📅 <strong>2026-09-29 15:37 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Dushyant Rajput, Nirdesh Chauhan, and Siddharth Kosaraju
  - This study converts Certo, a Qwen3-4B decision model exposing Choice, Score, and Noul probabilities, from joint candidate scoring to cacheable independent encoding. Caching lowers measured cost but damages rule sensitivity; counterfactual training restores synthetic-task performance without establishing transfer to unseen real rules. It is included as a Jev-style interface study, with truncation controls, small real-rule subsets, and unresolved reliance on supplied rules qualifying the results.

- **[Benchmarking System One decision models against trained classifiers and language models for automated decision gates](https://arxiv.org/abs/2610.00346)**<br>📅 <strong>2026-09-29 19:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Amir Rafe and Subasish Das
  - A common harness compares eight decision checkpoints, two generative models, and trained or zero-shot classifiers on workflow, intent, and social-science decisions. Rankings change with supervision, readout, option count, and serving assumptions; Jev's in-scope risk threshold still accepts substantial out-of-scope traffic. The study is included for condition-dependent design rules and direct Jev comparisons, including label-name sensitivity and the cost tradeoff of escalating from a trained first stage.

- **[OpenJev-RLCD: A Working RLCD Implementation](https://arxiv.org/abs/2609.38850)**<br>📅 <strong>2026-09-30 03:08 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhimin Gao and Pichao Wang
  - OpenJev-RLCD implements calibrated-decision reinforcement learning by scoring the answer distribution after a sampled rationale with a proper scoring rule, using calibration before reinforcement to stabilize training. Experiments with Qwen3-1.7B on two reasoning tasks report stronger selective prediction than temperature-scaled training baselines. It is included as an independent, inspectable RLCD method; the authors explicitly make no claim to recover TypeSafe's proprietary training algorithm, and results remain task- and scale-limited.

- **[Bongard: Training Machine Intuition](https://arxiv.org/abs/2609.39111)**<br>📅 <strong>2026-09-30 06:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Li Ding, Haidi Jin, and Chen Ji
  - Bongard is an open encoder-decoder decision model that shares state encoding across questions and trains on supervised judgments, semantic relationships, and action outcomes. It reports 78.05% accuracy on 23,900 DecisionBench decisions and includes a same-item Jev comparison. The paper is included as an independently trained System One alternative with architecture and training ablations, while its local latency figures and hosted-model comparisons reflect different serving conditions.

- **[AnyJev Technical Report](https://arxiv.org/abs/2610.00831)**<br>📅 <strong>2026-09-30 23:43 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiamu Zhang, Tianze Yang, Yucheng Shi, Evan Chen, Zixiang Nie, Kelly Wan, Liangjie Hong, Ninghao Liu, and Liang Wu
  - AnyJev extracts option-token probabilities from pretrained LLMs and corrects label priors and option-order bias without parameter updates. Across two twenty-option tasks, cyclic rotations improve accuracy on all eleven tested models, while an early-stopping rule trades computation for agreement with full rotation. It is included as an inspectable Jev-style inference method, with each rotation requiring another prefill and stronger guarantees applying only when selection and certification use disjoint splits.

- **[Introducing Clef: our open-source decision models, and new RL fine-tuning platform](https://blog.cloudflare.com/clef-decision-models/)**<br>📅 <strong>2026-10-01</strong> · Cloudflare technical article · <strong>Tier B</strong> · Michelle Chen, Alex Reneau, and Kevin Flansburg
  - Cloudflare describes Clef and Clef-flash, Qwen-based decision models with parallel schema scoring, calibration objectives, and multimodal inputs, and reports direct comparisons with Jev across public benchmarks and workflow evaluations. It is included for its training details and measured decision-model comparison rather than the accompanying product launch. Accuracy and latency figures are vendor-reported, depend on the serving setup, and do not uniformly favor Clef across tasks.

- **[Permutation-Robust Decision Modeling with Candidate-Independent Block-Causal Attention](https://arxiv.org/abs/2610.01601)**<br>📅 <strong>2026-10-01 12:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guy Amit
  - This technical report isolates candidate blocks within causal attention and resets their positions to reduce option-order dependence. Matched Gemma and Qwen experiments on Open-Jev typed-decision data find lower permutation sensitivity with competitive accuracy; ablations identify candidate isolation as the main contributor. It is included as an architectural study of open Jev-style scoring, with the larger released checkpoint using a different training mixture and context length from the matched comparisons.

- **[LLM-as-Jev: LLMs Are Already Jev-Style Decision Models -- When and How to Fine-Tune Them](https://arxiv.org/abs/2610.02076)**<br>📅 <strong>2026-10-01 17:15 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yinheng Li and Justin Wagle
  - LLM-as-Jev reads probabilities over predefined options without changing the language-model architecture, and optionally fine-tunes with KL anchors to preserve generative behavior. The latest revision adds budgeted Thinking Jev and multimodal decisions, finding strong frozen-backbone performance and targeted tuning gains for smaller models or routing. It is included for separating inference readout, additional reasoning, and adaptation, rather than assuming every Jev-style capability requires a dedicated architecture.

- 🔥 **[General Decision Models: Benchmarking and Insights Beyond Jev](https://arxiv.org/abs/2610.03935)**<br>📅 <strong>2026-10-02 18:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Feiyu Duan, Jiayu Lin, Jia Wang, Jun Xiang, Jialiang Wu, Xinnong Zhang, Hanqi Yan, Siyuan Wang, and Zhongyu Wei
  - JEVal compares twenty-five model configurations on 11,257 bilingual instances from thirty-six datasets, then examines agent trajectories and social simulation. Fast decision models are strongest when evidence is supplied, while uncertainty errors and accumulated mistakes weaken system-level outcomes. The revised work introduces reasoning-distilled SII-Decision-4B and SII-Decision-27B, with the larger model matching Jev on JEVal. It is included for linking local decision quality, inference cost, and downstream reliability.

- **[AIM-Decision: Jev vs Kev vs LLMs](https://aimultiple.com/decision-models)**<br>📅 <strong>2026-10-05</strong> · Independent technical evaluation · Updated report · <strong>Tier B</strong> · Berk Kalelioğlu
  - The updated AIMultiple report tests twenty-two decision models on 1,655 classification questions and nineteen on fifty browser tasks. Jev remains inexpensive, but classification rankings do not predict browser success and request limits prevent some models from completing the shared protocol. It is included for its original measurements and common runtime, with single-attempt browser outcomes, heterogeneous serving setups, and no calibration evaluation limiting broader claims.

- **[GraphDecisionBench: Benchmarking System One Models on Graph Tasks](https://arxiv.org/abs/2610.06354)**<br>📅 <strong>2026-10-05 13:54 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xianliang Yang, Yapu Zhang, and Li Zhao
  - GraphDecisionBench evaluates fourteen model-interface configurations, including Jev, using graph task profiles, matched graph-text representations, and heuristic-proposal controls. Jev can recognize adjacency without reliably solving broader structural questions; combining graph and text is not consistently beneficial, and feasible outputs can still be poor solutions. It is included for separating graph recognition, representation effects, and solution quality under comparable candidate interfaces.

- **[SanSi: A Looped Typed Decision Model for System 1.5 Thinking](https://arxiv.org/abs/2610.07730)**<br>📅 <strong>2026-10-06 04:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shuyu Gan, Young-Jun Lee, and Dongyeop Kang
  - SanSi converts a looped language model into a typed decision model, supervising option probabilities after each of up to eight passes through shared layers. Across 10,027 decisions it improves on matched single-pass baselines, while controlled tasks test reasoning depth and a verifier experiment studies downstream training. It is included as a Jev-style architecture with direct Jev comparisons, exploring additional internal computation without generated reasoning text.

- **[JevForest: Path Voting for Budgeted Feature Acquisition](https://arxiv.org/abs/2610.10615)**<br>📅 <strong>2026-10-07 07:23 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yu Yan
  - JevForest uses votes from bootstrapped tree paths to choose which semantic questions Jev should answer under a feature budget. Small AG News and TREC pilots show opposing task-level rankings, while asking all eight questions together is faster, cheaper, and more accurate than four sequential forest queries. It is included as an implemented acquisition workflow whose results distinguish a question budget from actual serving cost and do not establish a general deployment advantage.

- **[Specialized Decision Models vs. General-Purpose LLMs: Benchmarking Jev Across Knowledge, Reasoning, and Multilingual Tasks](https://arxiv.org/abs/2610.11978)**<br>📅 <strong>2026-10-08 13:52 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xing Li, Qingcheng Chang, Jinzhong Ning, Changfeng Xu, Shenlong Zhang, Yijia Zhang, Ling Luo, and Hongfei Lin
  - The authors compare Jev with nineteen LLMs across thirteen knowledge, reasoning, and multilingual multiple-choice benchmarks. Jev is competitive on knowledge and commonsense, but scores below every comparator on MathQA, exposing a substantial weakness in multistep calculation. It is included as a broad direct benchmark; the model tiers were not all evaluated under one uniform protocol, and probability-based escalation remains future work.

- **[Large Decision Models: Repurposing Large Language Models as Single-Pass Decision Makers](https://arxiv.org/abs/2610.15501)**<br>📅 <strong>2026-10-11 10:04 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ziyi Chen, Yan Zhang, Jianhui Wei, Jianing Yin, and Daoan Zhang
  - LDMs adapt language models to score runtime-defined labels in one prefill pass using diverse decision supervision and reasoning-distribution distillation. DecisionVista tests novel schemas and held-out human-labeled sources, finding modest transfer improvements and substantial measured speedups over reasoning rollouts. It is included as a Jev-style training and evaluation framework; reasoning still performs better on new schemas, and the reported confidence-routing recovery is measured on development sets.

- **[Correct Choices, Failed Sequences: Choice2Seq Benchmarks Correctness Retention Across Output Interfaces](https://arxiv.org/abs/2610.16191)**<br>📅 <strong>2026-10-12 05:11 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tianyou Lai, Wentao Yue, Zhiying Deng, and Qilei Li
  - Choice2Seq compares selecting a complete answer with constructing it through local decisions on matched problems. Jev retains only 33.0% and 2.1% of its correct arithmetic and lexical selections under serial construction, while candidate-supported options and position cues partially repair different failures. It is included as an interface-composition benchmark separating correctness, plan fidelity, and output compliance; dialogue-state results show that the gap depends on both model and task.

- **[FunDM: Cheap & Label-Free Decision Models from Frozen Language Models](https://arxiv.org/abs/2610.17175)**<br>📅 <strong>2026-10-12 17:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ujjawal K. Panchal
  - FunDM trains small decision heads to imitate a frozen language model's answer probabilities without correct-answer labels, using only part of the backbone. A Qwen3-8B variant retains nearly all of its full model's average multiple-choice accuracy while improving measured throughput and memory use; separately trained heads select coding-agent runs. It is included as a Jev-style distillation approach, with efficiency and selection results conditional on the chosen teacher, tasks, and serving setup.

- **[Releasing the Inner Jev: A Simple Recipe for Open Decision Models](https://arxiv.org/abs/2610.17205)**<br>📅 <strong>2026-10-12 17:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jonathan Geuter, Andrew Cheng, and David Alvarez-Melis
  - The authors compare letter-logit readouts and simple LoRA decision-head tuning across four open language models against Jev. Their OpenDecisions validation set combines accuracy and calibration, and tuned Gemma improves on Jev there and on JevBench. It is included as an explicit reproduction and baseline comparison, distinguishing strong untuned readouts from additional tuning gains and avoiding generalization of author-reported benchmark advantages to all decision workloads.

- **[StartLux-Decision: AutoThink Decision Models with Reinforcement Learning for Calibrated Deliberative Decisions](https://arxiv.org/abs/2610.17309)**<br>📅 <strong>2026-10-12 19:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xialie Zhuang, Zunhai Su, Jia Pan, Ngai Wong, Guanhua Chen, and Chuan-Wei Kuo
  - StartLux-Decision pairs single-pass Instant models with AutoThink variants that invoke reasoning for uncertain cases. Its RLCD² method rewards improved probability quality and penalizes long reasoning, reporting shorter traces and stronger results on public Decision Index subsets and computational contrast pairs. It is included as an independent Jev-style training framework with explicit Jev comparisons; RLCD² is the authors' disclosed method, not a disclosure of TypeSafe's proprietary RLCD.

- **[Jeva: System One Models from First Principles](https://arxiv.org/abs/2610.18773)**<br>📅 <strong>2026-10-13 17:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Qi Li and Xinchao Wang
  - Jeva independently encodes requests and reusable options, refining request states against fixed option memory while separately estimating answer coverage. This design supports typed outputs, candidate permutations, null outcomes, and large option sets. It is included as a decision-native alternative in the Jev research line, with reported permutation stability and caching gains distinguished from universal calibration or reliable answer-absence detection outside the evaluated distributions.

- **[Selective Reasoning for Typed Decision Models: When to Start, Read, and Stop](https://arxiv.org/abs/2610.19644)**<br>📅 <strong>2026-10-14 06:13 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Bin Zheng, Zheng Chen
  - A shared candidate reader on a frozen Qwen3.5-4B backbone supports direct answers and interruptible reasoning. Benefit gating, scheduled reads and entropy-based stopping improve accuracy over direct reading on 768 questions, with different tradeoffs against 512- and 1,024-token baselines. Exact-prefix controls separate interruption savings from the work spent observing intermediate answers.

- **[Verdict: Encode Once, Decide Many](https://arxiv.org/abs/2610.20778)**<br>📅 <strong>2026-10-14 18:27 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Avdhesh Singh Chouhan, Jack Perry
  - Verdict-MQ encodes a shared state once and isolates question and option attention. It improves agreement with soft labels over Laya on typed decisions, but task-specific results against matched encoders are mixed; the measured Jev reference beats the fine-tuned encoders on the reported reading benchmarks. Shared-state efficiency is distinguished from teacher-label agreement and question-aware encoding quality.

- **[LEV: Thinking Fast and Deep with Looped Decision Models](https://arxiv.org/abs/2610.20951)**<br>📅 <strong>2026-10-14 21:20 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Dingjie Song, Zhiling Yan, Yuxuan Zhang, Lichao Sun
  - LEV repeatedly applies looped language-model layers and reads candidate probabilities at each depth. A 2.6B model improves from 63.2% to 76.2% on JevBench between depths one and four; a learned stopper trades under one accuracy point for reduced computation. Matched latency comparisons support adaptive internal depth within the evaluated backbones and tasks.

- **[System1-Arena: Which Decisions Can Be Left to System 1?](https://arxiv.org/abs/2610.21244)**<br>📅 <strong>2026-10-15 04:40 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tianyu Chen, Xinyang Liu, Ruyi An, Zhendong Wang, Mingyuan Zhou
  - System1-Arena evaluates thirty models on 92,000 questions across 105 tasks and 138 closed-loop environments, using common requests and probability scoring. Large System-1 models are competitive on non-agentic tasks at lower latency, but small models struggle in closed loops. It is included for separating decision-level quality, reasoning cost and interactive success.

- **[Prism-1: Position- and Rival-Independent Scoring for System One Models](https://arxiv.org/abs/2610.22066)**<br>📅 <strong>2026-10-15 15:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yao Long Teng, Jianguo Huang, Yanchen Deng, Jiayi Cai, Bo An
  - Prism-1 isolates candidate attention blocks and shares positions to enforce option-order invariance and independence from rival options. On five benchmark sets it stays close to a matched trained baseline while retaining decisions under reordering. The guarantees concern the scoring construction and choice axioms, rather than correctness or calibration of the resulting decisions.

- **[What Can't Jev Decide? Probing the Limits of One-Pass Decision Models](https://arxiv.org/abs/2610.24929)**<br>📅 <strong>2026-10-18 00:50 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Wang Yang, Xinpeng Li, Yanyan Zhang, Chuang Ma, Shouren Wang, Jianzhe Wei, Liqin Ye, Xiaoran Cai, Mohsen Hariri, Vipin Chaudhary, Xiaotian Han
  - The authors probe where hosted Jev and open replicas fail at one-pass choice. Jev solves most items a reference LLM can answer without deliberation, but accuracy falls on items requiring more reasoning. Confidence is especially unreliable when the supplied agent state is stale.

- **[System X: An LLM Decision Model That Replies from Its Own KV Cache](https://arxiv.org/abs/2610.25456)**<br>📅 <strong>2026-10-18 18:40 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Syed Usama Khalid Bukhari, Syed Safwan Khalid, Muhammad Aamir
  - System X adds a reply option to an LLM-based Jev-style readout and reuses the decision context's KV cache when that option is selected. Matched tests show reduced latency. Reply-quality comparisons have prompt and output-budget differences, and unsupported details remain a failure mode.

- **[P(Yes): 15$\times$ Improvements via Test-Time Scaling of Decision Models](https://arxiv.org/abs/2610.25474)**<br>📅 <strong>2026-10-18 19:01 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Lev Stambler
  - The study uses binary probabilities from frozen decision models to score complete puzzle solutions during test-time search. Jev, Clef and other hosted systems solve more puzzles with this extra computation. The results quantify a quality–compute trade-off on the tested puzzle family.

- **[Narrow Decision Models: A System-1 Architecture for Calibrated, Typed Decisions](https://arxiv.org/abs/2610.25553)**<br>📅 <strong>2026-10-18 21:49 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Carlos André Antunes, Aldry Albuquerque, Gabriel de Melo Schmith, Natã Batista, Pedro Oziel Escobar da Silva, Stefano Benko Rossi, Lingrid Dietrich Lorenz da Silva, Flávia Cristina da Costa, Thiago Bertotto, Luis Fernando Fausto
  - This paper proposes a narrower System One architecture for caller-defined choices and scores, emphasizing invariance to option order. The authors verify the invariances numerically and test routing and legal classification. Agreement with the production legal classifier is a proxy for task performance.

- **[Truncated Reasoning Under a Budget: Evaluating System-1 Models as Decision-Makers](https://arxiv.org/abs/2610.25768)**<br>📅 <strong>2026-10-19 04:29 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zhongyin Wang, Zhaoqian Xue, Junting Mu, Haozheng Liu, Ye Yuan, Haolun Wu, Lingyao Li
  - The authors ask Jev to answer from a reasoning model's unfinished trace, measuring when a cheap decision can replace further generation. A policy chosen on training folds saves an estimated 71.3% of full-run cost on held-out folds at a 0.58-point accuracy loss.

- **[TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)**<br>📅 <strong>2026-10-19 08:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Chenghao Liu, Wei Fan, Jindong Han, Dongjie Wang, Aniket Mahanti, Pengyang Wang, Hao Liu
  - TimesJev learns to retain enough information from a time series for a short, typed decision. It compresses the sequence and aligns the selected representation with a decision model's embeddings. The authors compare accuracy and inference time with reasoning models across thirteen datasets.

- **[Teacher Supervision, Fixed Representations and Calibration: Exact Risk Calculations for Candidate-Scoring Decision Models](https://arxiv.org/abs/2610.26797)**<br>📅 <strong>2026-10-19 17:42 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Agus Sudjianto, Denis Burakov
  - Using Jev and JevAny as motivating examples, the paper studies how teacher targets affect probabilities from candidate-scoring models. The analysis and empirical comparison indicate that recalibration can improve the probability scale while systematic teacher error still calls for validation against outcomes.

- **[DecisionPivot: A Diagnostic Benchmark for Decision Models in LLM Systems](https://arxiv.org/abs/2610.28522)**<br>📅 <strong>2026-10-20 16:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xialie Zhuang, Mingcong Lei, Zunhai Su, Ri Liu, Jianjin Li, Peixian Ma, Jia Pan, Ngai Wong, Guanhua Chen, Chuan-Wei Kuo
  - DecisionPivot groups examples that differ in details intended to change the correct choice. This makes it possible to assess consistent reasoning and high-confidence errors alongside item accuracy. The benchmark reveals differences between decision models with otherwise similar aggregate scores.

- **[Our Own Jev: Typed Decisions in One Forward Pass, from an In-House Judge to Open LoRA Models](https://arxiv.org/abs/2610.29052)**<br>📅 <strong>2026-10-21 01:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yuchuan Weng, Chi Liu, Xin Chen, Srinivasan Manoharan
  - The authors develop open one-pass decision models from an internal judge and compare LoRA variants with hosted Jev and open alternatives. A small test finds the best model near the commercial reference, while retraining results expose sensitivity to the data release.

- **[Which Differences Matter? Controlled Tests of Rule Transfer, Joint Reliability, and Information Use in Decision Models](https://arxiv.org/abs/2610.30045)**<br>📅 <strong>2026-10-21 17:04 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tianyou Lai, Wentao Yue, Zhiwei Zuo, Qilei Li
  - Controlled changes to rules, wording and table entries let the authors test what drives typed choices beyond overall accuracy. Equivalent rewrites sometimes change outputs more than repeated identical inputs. Altering task-relevant table values more often shifts decisions in the expected direction.

- **[Jev-DLC: Decision-Level Continual Learning from Typed Feedback](https://arxiv.org/abs/2610.31521)**<br>📅 <strong>2026-10-22 16:33 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yangyang Feng, Jianle Gan, Zhuoyan Feng, Chengwei Qin
  - Jev-DLC records accepted and revoked choices as feedback for updating a compact personalization state. A chronological benchmark measures the effect of those events on later typed decisions. The reported gain over replay grows after the model observes more corrections.

- **[The Hitchhiker's Guide to System 1 Models: Fast Decision-Making Beyond LLMS](https://arxiv.org/abs/2610.33775)**<br>📅 <strong>2026-10-24 16:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Haggai Roitman
  - This tutorial surveys System One models, the caller-defined decision interface and practical evaluation topics such as calibration. It synthesizes prior work and includes a model inventory and worked examples. Its role is to orient readers to the literature and implementations.

- **[RubriX: A Fast, Fine-Tunable Non-Autoregressive Rubric Judge](https://arxiv.org/abs/2610.34875)**<br>📅 <strong>2026-10-26 05:45 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Balamurugan Paramasivam, Sudalai Rajkumar
  - RubriX is a non-autoregressive judge for choices among rubric levels. The authors compare its cached-response latency with Jev and a generative model as rubric descriptions grow. Its latency advantage is largest at the longest rubric lengths measured.

- **[Decision Model Factory: Building Specialized Sovereign Decision Models](https://arxiv.org/abs/2610.34956)**<br>📅 <strong>2026-10-26 07:23 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yuma Ichikawa
  - The paper describes a workflow for building specialized decision models and a runner that computes probabilities over permitted answers while sharing context across questions. Experiments report throughput gains in matched multi-question workloads with similar decision scores.

- **[ThinkJev: One Thought, Every Budget for Calibrated Typed Decisions](https://arxiv.org/abs/2610.37732)**<br>📅 <strong>2026-10-27 12:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xiaolu Ding, Kai Yang, Dongdong Liu
  - ThinkJev learns to supply a decision with different amounts of intermediate reasoning. The experiments separate low confidence from the expected benefit of thinking, which do not reliably align. Comparisons on public JevBench items are reported as exploratory.

- **[DecisionUnlearn-Bench: Unlearning Probabilistic Decisions under Changing Schemas](https://arxiv.org/abs/2610.38431)**<br>📅 <strong>2026-10-28 08:13 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Tiantong Wu, Wei Yang Bryan Lim
  - DecisionUnlearn-Bench evaluates unlearning in models that return probabilities over changing option schemas. It compares with a retraining reference and measures forgetting, retained utility and subsequent adaptation separately. Conclusions differ according to the architecture and the selected metric.

- **[To Jev or Not to Jev: When Can System-1 Decision Models Replace LLM Judges?](https://arxiv.org/abs/2611.00505)**<br>📅 <strong>2026-10-31 00:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shreyas Subramanian
  - This benchmark asks when Jev and other decision-only systems can replace generative judges. It distinguishes simple preferences from correctness tasks requiring reasoning and measures a cascade that sends difficult items to a stronger judge. Capability and serving trade-offs vary by evaluation.

- **[IJev: Order-Invariant Decisions via Iterated Cyclic Reordering](https://arxiv.org/abs/2611.01015)**<br>📅 <strong>2026-10-31 14:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Youzhi Zhang
  - IJev combines decisions across cyclic arrangements of the same option set. The authors evaluate accuracy, calibration and option-order flips across five models and five benchmarks. The method removes measured flips in these tests, with extra calls as its main cost.

- **[Extending Reasoning in Typed Decision Models via Looping](https://arxiv.org/abs/2611.07736)**<br>📅 <strong>2026-11-05 09:46 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · David Berghaus, Arber Zela, Behzad Shomali, Markus Frey, Mehdi Ali, Rafet Sifa, Volkan Cevher
  - This study evaluates repeated processing in typed decision models on problems that require longer reasoning. It compares parameter sharing, additional training compute and adaptive execution. The reported improvements vary with problem length and the architecture of the decision backbone.

- **[Towards Foundation Decision Models: Drex](https://arxiv.org/abs/2611.07854)**<br>📅 <strong>2026-11-05 11:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Nischay Dhankhar, Alisher Amantay, Zhanibek Datbayev, Darkhan Akhmetov, Yash Shah, Nurmukhamed Ubaidullayev, Raman Saparkhan, Dos Baha, Abulhair Saparov
  - Drex introduces open decision checkpoints and evaluates native typed outputs, speed and option-order stability. It includes comparisons with generative frontier models and systems from the same decision category. The reported timing refers to the authors' request workload and deployment.

- **[Label-Wording Augmentation in a Typed-Decision Encoder: Gains on Unfamiliar Words, Not on Abbreviations or Codes](https://arxiv.org/abs/2611.08439)**<br>📅 <strong>2026-11-05 18:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Vladimir Beskorovainyi
  - The authors compare versions of a typed-decision encoder trained with varied option wording. They test unfamiliar labels, abbreviations and codes, with gains concentrated in some language variations. Checkpoint rankings also differ across held-out datasets, complicating model selection.

- **[Deciding Without Generating: A Survey of Typed Decision Models, from Jev to Open Decision LLMs](https://www.preprints.org/manuscript/202611.0760/v1)**<br>📅 <strong>2026-11-06</strong> · Preprints.org preprint · <strong>Tier A</strong> · Shangquan Sun
  - This survey formalizes typed decisions and reviews the training, serving and evaluation literature around Jev and open alternatives. It distinguishes probabilities used for routing from empirical correctness and examines how fallback decisions affect overall accuracy. Findings synthesize evidence from the surveyed work.

- **[AbductionBench: Benchmarking Abductive Reasoning in Large Language Models](https://arxiv.org/abs/2611.10705)**<br>📅 <strong>2026-11-07 12:56 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Moein Salimi, Amir Qeysarbeigi, Babak Hosseini Mohtasham, Faraz Doagoye Tehrani, Mahdi Naieni, Hanieh Sartipi, Ali Nouri, Amin Aghakasiri, Reyhane Khayatzade Mahani, Mahdi Jafari Siavoshani, Mohammad Hossein Rohban
  - AbductionBench evaluates inference to plausible explanations, including whether agents request useful evidence and revise hypotheses. The study includes decision-model comparisons and analyzes behavior alongside final-answer accuracy. Models can retain an early hypothesis even as new observations arrive.

- **[ZeroPoint: Lightweight Energy-Based Decision Model](https://arxiv.org/abs/2611.12992)**<br>📅 <strong>2026-11-08 11:45 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Javier Marín
  - ZeroPoint trains a lightweight energy-based decision model to handle menus containing no acceptable answer. It compares a fixed rejection reference with a learned class and thresholded softmax. The results show the importance of training on examples in which no option fits.

- **[MMDM: Measuring Massive Multitask Decision Making](https://arxiv.org/abs/2611.14309)**<br>📅 <strong>2026-11-10 16:40 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Junhao Shen, Qing Zong, Yue Guo, Zhanqiu Zhang, Yiwen Guo, Hong Cheng
  - MMDM evaluates decision models on a broad suite with joint constraints and tasks requiring more than one selected option. Some performance measures depend on recovering the complete valid set. The authors report that constraint planning and strict multiselect remain difficult.

- **[Learning a calibrated decision head from logged bandit feedback](https://arxiv.org/abs/2611.15572)**<br>📅 <strong>2026-11-11 14:55 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ye Yuan
  - This paper trains a calibrated decision head from selectively logged outcomes and evaluates calibration under simulated label noise. The authors test correction and validation-based stopping on held-out records. Noise experiments use a limited number of runs per rate.

- **[Small Heads, Strong Decisions: A Controlled Study of Typed-Decision Models](https://arxiv.org/abs/2611.15592)**<br>📅 <strong>2026-11-11 15:10 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ritvik Rastogi
  - Five typed decision heads are trained with a common backbone, datasets and protocol. They show similar in-domain accuracy while inference costs differ. Increasing the backbone from 0.6B to 4B yields larger gains, particularly on held-out data, in the reported comparison.

- **[SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models](https://arxiv.org/abs/2611.15777)**<br>📅 <strong>2026-11-11 17:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Lichen Li, Ziping Dong, Sicheng Feng, Qi Li, Xinchao Wang
  - SO-Arena benchmarks System One models across task capabilities and separately measures reliability of their responses. The model with the best performance is not the most reliable across tested conditions. The benchmark highlights model-selection trade-offs that a single score conceals.

- **[From Large Language Models to Efficient System One Models via Adaptive Computation](https://arxiv.org/abs/2611.16321)**<br>📅 <strong>2026-11-12 05:40 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Minh-Anh Nguyen
  - This method adapts larger models into System One decision models with several possible exit depths. Confidence signals determine whether to compute additional layers. The paper compares accuracy and compute across seven benchmarks against models trained at fixed depths.

- **[The Value of Thinking: Learning When to Reason in Hybrid Decision Models](https://arxiv.org/abs/2611.16961)**<br>📅 <strong>2026-11-12 15:32 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhengxu Yu, Ke Xu, Meng Fang, Haitham Ammar, Weilin Luo, Jun Wang
  - The hybrid decision model learns when the expected benefit of reasoning justifies further generation. Evaluation spans decision benchmarks and an agent environment. The paper reports several accuracy, latency and token-cost comparisons, including a direct comparison with hosted Jev on JevBench.

- **[UltraBERT-JEV: Encoder models for System One Applications](https://arxiv.org/abs/2611.17867)**<br>📅 <strong>2026-11-13 07:58 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Astarag Mohapatra
  - UltraBERT-JEV explores encoder architectures for single-pass decision workloads. The authors compare serving time and memory with an alternative and add an auxiliary readout for supporting sentences. Results show that lower latency can come with higher peak memory in the tested configuration.

- **[AdaMenu: Query-Adaptive Menus for Decision Models over Large Label Spaces](https://arxiv.org/abs/2611.19005)**<br>📅 <strong>2026-11-13 23:08 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiangze Yan, Yi Shen, Jieyun Huang, Wenjing Zhang, Zhaoxiang Liu, Ning Wang, Kai Wang, Shiguo Lian
  - AdaMenu selects a query-specific subset of labels before invoking a decision model. The authors compare accuracy and input-token consumption with full and hierarchical option sets. The approach also covers settings where a provider cannot accept the full label menu.

- **[When Should Decision Models Compare Candidates?](https://arxiv.org/abs/2611.20335)**<br>📅 <strong>2026-11-16 00:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Fangzhi Li, Quan Shi, Wenting Yang, Yueqiao Chen, Jiayu Chang, Shuting Zhao, Zhaowei Xu, Yizhao Chen, Guanchu Wu, Han Xu
  - The paper tests when a typed decision model benefits from representing relationships among options. It compares independent, attention-based and setwise approaches under varying supervision. Access to the candidate set is insufficient by itself, and useful transfer depends on task and training.

### Publication Date Unverified

- **[WaterSheep 0.1.0: Typed Decisions with Calibrated Probabilities from a Single Encoder Pass](https://doi.org/10.13140/RG.2.2.28606.45122)**<br>◉ <strong>2026 · Exact date unverified</strong> · ResearchGate preprint · <strong>Tier A</strong> · Samrat Dutta
  - WaterSheep fine-tunes ModernBERT with a decision head and question-type temperature scaling for Noul, Choice, Score, and multi-label probabilities. The [author's project documentation](https://github.com/SamratDuttaOfficial/WaterSheep) reports 77.8% in-distribution accuracy and 61.2% on held-out datasets, with ECE of 0.026 and 0.043. It is included as an open Jev-style model with a compatible API; English-only support, input truncation, and weaker rating performance limit its use. The DOI verifies preprint metadata; this summary relies on project documentation because the paper's full text was inaccessible.

<a id="nlp-information-retrieval"></a>

## 💬 Natural Language Processing & Information Retrieval

Text classification, multilingual understanding, document reasoning, language-model judging, search, and recommendation.

### 2026

- **[Testing Jev on Public and Private Data: Classifier or Filter?](https://amankumar.ai/blogs/jev-measured)**<br>📅 <strong>2026-09-18</strong> · Independent technical evaluation · <strong>Tier B</strong> · Aman Kumar
  - This reproducible engineering study reports roughly 16,000 calls across four public classification datasets and private production decisions, comparing Jev with smaller generative models. It finds strong high-confidence performance on short, crisp-label tasks but weaker results on long inputs and fuzzy policies. The article is included because it tests calibration and confidence-gated fallback behavior rather than repeating TypeSafe's first-party speed claims.

- **[JEV-as-a-Judge: Accept When Confident, Escalate When Unsure](https://arxiv.org/abs/2609.26550)**<br>📅 <strong>2026-09-22 15:05 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yubo Li, Yidi Miao, Ramayya Krishnan, and Rema Padman
  - This evaluation compares Jev with sixteen generative and reward-model judges using blinded human adjudication. Jev approaches the strongest comparator where verdicts can be read from supplied text but trails on mathematical, coding, and logical derivations. In the revised study, a frozen confidence cascade improves held-out accuracy by 0.9 points at 41% of the comparator's fee and matches its accuracy on two live workloads; style-adversarial and reference-free cases remain limitations.

- **[Same Scores, Different Decisions: Evaluating JEV and Language Models for Legal Document Understanding](https://arxiv.org/abs/2609.27678)**<br>📅 <strong>2026-09-23 10:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Fan Zhang, Yankai Chen, Zhuohan Xie, Yixi Zhou, Sijia Peng, Lei Fan, Xinhua Ji, Cunyuan Zheng, Huangyong Shan, Philip S. Yu, Xue Liu, Yu Chen, Preslav Nakov, and Songwei He
  - The authors compare Jev with nine language models on ContractNLI while varying hypothesis visibility, requested outputs, output order, and repeat conditions. Jev has the lowest cost and median latency, but hosted language models achieve higher baseline accuracy; aggregate scores also conceal offsetting corrections, regressions, and persistent item-level errors. The study is included for evaluating whether legal judgments remain correct as request configuration changes, not merely whether averages remain stable.

- **[Decision Models vs. LLMs as Rubric Judges: Cheaper, Faster, and Wrong in the Same Places](https://arxiv.org/abs/2609.29769)**<br>📅 <strong>2026-09-24 13:16 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Delip Rao and Chris Callison-Burch
  - The revised study compares Jev and Perplexity Decider with three flash-tier LLM judges on nine human-labeled panels under whole-rubric and per-criterion setups. Decision models are frequently competitive at lower measured cost and latency, but over 85% of LLM verdicts repeat their most confident errors. Even higher-tier fallbacks add little beyond the strongest single judge. It is included for showing that correlated errors constrain cascades despite useful confidence ranking and serving savings.

- **[LAVOIR: Teaching a Single-Pass Decision Encoder When and What to Ask with Amortized Value of Information](https://arxiv.org/abs/2609.30706)**<br>📅 <strong>2026-09-25 02:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Furkan Yilmaz, Habibe Aleyna Tasdemir, and Muhammed Faruk Gozay
  - LAVOIR extends the open Jev counterpart Laya so one pass predicts both a typed decision and the value of asking about each missing-information slot. Its question policy approximates a greedy oracle on seen schemas, improves controlled-task accuracy under a half-question budget, and gains 8.3 points where it asks on real ABCD conversations. It is included as a Jev-style method that adds clarification behavior, while reported generalization varies across benchmarks.

- **[Emo-Jev: Probabilistic Reasoning for Emotion Classification with Jev](https://arxiv.org/abs/2610.08829)**<br>📅 <strong>2026-09-27 01:35 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yazhou Zhang and Junhao Yu
  - Emo-Jev composes atomic Jev judgments or aggregates multiple judgment paths for sentiment, emotion, sarcasm, and humor classification. Across eight datasets, direct Jev classification offers low observed latency and cost but trails the strongest LLM's average macro-F1; neither proposed variant improves that average despite some dataset-level gains. It is included for testing whether additional probabilistic decomposition helps, with fixed question inventories and text-only tasks limiting generalization.

- **[Decide, Don't Generate: Competitive Dimensional ABSA with Jev's Typed Decisions](https://arxiv.org/abs/2609.35293)**<br>📅 <strong>2026-09-28 14:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yiqun Zhang, Peidong Wang, Zihan Wang, and Shi Feng
  - This work decomposes multilingual dimensional aspect-based sentiment analysis into Jev scores, label probabilities, and Boolean judgments, then fits 488 calibration coefficients without updating the backbone. It reports competitive regression and extraction results on SemEval task data, with ablations showing that supervised calibration and combined span-boundary evidence drive much of the gain. The paper is included as a structured prediction application whose performance depends on learned task alignment rather than raw zero-shot decisions.

- **[Chinese-Jev: Bringing System One Model to Chinese-Language Tasks](https://arxiv.org/abs/2609.36965)**<br>📅 <strong>2026-09-29 08:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zexiao Wang, Zihao Zhang, Xudong Wang, Pan Wang, Ziyi Ye, Haoyu Zhao, Zuxuan Wu, and Shuicheng Yan
  - Chinese-Jev trains a lightweight encoder on candidate-probability targets from ten million Chinese examples, followed by separate medical, legal, and financial adaptations and evaluation on CJ-Bench. The authors report competitive general accuracy, domain-dependent results, and faster inference than hosted Jev, including mobile deployment. It is included as an independent Chinese-language Jev-style model, with the gains attributable to its own training and serving setup rather than changes to TypeSafe's closed model.

- **[Jev-as-a-Judge for RAG Claim Verification: Confidence-Gated Cascading Between a Non-Generative Verifier and a Frontier LLM](https://arxiv.org/abs/2610.20634)**<br>📅 <strong>2026-09-30 15:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Alden Do Rosario, Kirollos Atef
  - On 495 human-labelled RAG claims, Jev and a frontier LLM have similar aggregate accuracy but different unsupported-claim acceptance rates. Confidence-gated cascading lowers cost relative to the frontier model, yet a matched random-escalation control performs similarly. The paper separates aggregate accuracy, harmful error asymmetry and the unproven value of confidence-based selection.

- **[Decision-Oriented Recommendation Reranking: An Empirical Study of Its Promise and Limitations](https://arxiv.org/abs/2609.40241)**<br>📅 <strong>2026-09-30 17:33 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Hanjia Lyu and Yinglong Xia
  - The revised reranking study compares TypeSafe Jev and OpenAI Decisions with specialist recommenders and LLM rerankers across three Amazon Reviews domains and four candidate-set sizes. Jev often offers competitive recommendation quality at lower observed latency than stronger generative alternatives, but specialization alone does not ensure better quality or order robustness. It is included as a controlled comparison of implementation-dependent ranking tradeoffs rather than a universal advantage for decision-oriented inference.

- **[HakemBench: A Turkish Benchmark of Typed Decisions](https://arxiv.org/abs/2610.02293)**<br>📅 <strong>2026-10-01 16:55 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Sait Furkan Teke
  - HakemBench evaluates Jev and other decision or generative models on 4,275 Turkish typed questions across seven domains, combining decision quality, calibration, and selective automation with robustness probes. It releases the benchmark and reports uncertainty intervals. The study is included as a multilingual Jev comparison, while its largely model-generated labels and disclosed test-informed development of the authors' own model limit claims of independent generalization.

- **[SearchJev: A Fast and Calibrated System-1 Model for Search Agents](https://arxiv.org/abs/2610.05107)**<br>📅 <strong>2026-10-04 10:30 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Congfeng Cao, Lipeng Zuo, Konstantinos Papakostas, Qiwei Xu, Songwei Xu, Lun Zhou, Zhaochun Ren, Yougang Lyu, and Xiaohui Yan
  - SearchJev learns search-state decisions from soft labels and returns option probabilities without generating text, escalating uncertainty to a reasoning model. On six decision types it reports faster inference and better calibration than same-size generative Qwen models; BrowseComp-Plus agents also improve answer accuracy and active search time. It is included as an independent Jev-style search model, with results attributable to its training and dual-system agent design rather than the hosted Jev service.

- **[ufakzeka-karar: An Open Turkish Typed-Decision Model with Order-Invariant Option Scoring](https://arxiv.org/abs/2610.06744)**<br>📅 <strong>2026-10-05 17:22 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Sait Furkan Teke
  - ufakzeka-karar is a 182-million-parameter Turkish typed decision model whose candidate-isolated head makes scoring invariant to option order. It reports competitive CPU inference and studies cross-entropy, reinforcement learning, and temperature scaling on HakemBench. It is included as an open Jev-style language specialization, while test-informed training on three tracks is explicitly disclosed and improved development-set calibration does not consistently transfer to held-out questions.

- **[CLM-as-a-Judge: Evaluating an Open Contrastive Decision Model on Public Judge Benchmarks](https://arxiv.org/abs/2610.07177)**<br>📅 <strong>2026-10-05 18:01 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Gowthamkumar Nandakishore
  - This preregistered evaluation compares a contrastive decision model, Laya, generative judges, reward models, and trivial baselines on six public judging tasks. Calibration and order stability do not compensate for weak judging accuracy, and the contrastive model's cascade escalates almost every item. It is included for its measured open Jev-style Laya baseline and released predictions, with substantial input truncation limiting comparisons across models with different context windows.

- **[An Independent Evaluation of TypeSafe's Jev](https://www.vals.ai/blogs/independent-evaluation-of-jev)**<br>📅 <strong>2026-10-06</strong> · Independent technical evaluation · <strong>Tier B</strong> · Connor Frank
  - Vals AI compares Jev with eleven other systems on 400 source-grounded claim checks and a preregistered 396-question LegalBench slice. Jev matches several frontier models on claims at much lower measured cost but ranks last on legal accuracy and exceeds a held-out 1% error budget. It is included for testing both favorable and unfavorable task regimes, with limited benchmark slices and answered-item scoring qualifying the comparisons.

- **[Same-Number Citation Swaps: Stress-Testing Jev as a Financial Evidence Judge](https://arxiv.org/abs/2610.08675)**<br>📅 <strong>2026-10-06 16:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Chuhong Xu, Bo Su, Ziyao Chen, Ruiyang Xu, Shimeng Dai, and Xinyu Qiu
  - This controlled financial-verification study holds operands and arithmetic fixed while moving citations between source cells containing the same number. Jev both accepts some wrong-role citations and withholds some equivalent valid evidence; explicit column labels help selected cases without removing the tradeoff. It is included for isolating evidence-role recognition from numerical matching, with a separately reviewed follow-up on thirty-six new source pages.

- **[An Evaluation of Inception's Mercury Decide](https://www.vals.ai/blogs/evaluation-of-mercury-decide)**<br>📅 <strong>2026-10-08</strong> · Independent technical evaluation · <strong>Tier B</strong> · Connor Frank
  - This Vals AI follow-up evaluates Mercury Decide on the same claim-verification and LegalBench protocols as its Jev study. Mercury matches Jev on claim quality, improves legal accuracy, and costs less per single claim, while Jev scales better when many judgments share one document. It is included as a direct decision-model comparison; the shared datasets are not an independent replication, and launch pricing and an unpinned Mercury endpoint constrain reproducibility.

- **[Can Decision Models Understand Stance? Evaluating Jev Against General-Purpose LLMs](https://arxiv.org/abs/2610.11901)**<br>📅 <strong>2026-10-08 13:05 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xing Li, Jinzhong Ning, Yijia Zhang, Liang Yang, and Hongfei Lin
  - This evaluation compares Jev with four general-purpose LLMs and two fine-tuned models on English stance detection and Chinese conversational stance. Jev is competitive on VAST but trails stronger LLMs on ZS-CSD, with errors concentrated in stance direction and reply relationships rather than simply longer conversations. It is included as a direct multilingual task comparison, whose two datasets do not establish a general language or conversation-understanding ranking.

- **[Does System One Transfer? Calibrated Typed-Decision Models, Label Budgets, and Translation for Indonesian Regional Languages](https://arxiv.org/abs/2610.14112)**<br>📅 <strong>2026-10-09 04:12 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Romi Fadli,  Rusdah, Wahyu Ramadani Putri Utami, and Zulfa Malika Amana
  - This preregistered study evaluates Jev and Laya-multilingual on Indonesian regional-language sentiment and emotion tasks. Human Indonesian translations raise Jev accuracy by up to 37.2 points, while its ability to rank errors deteriorates on regional languages even without higher expected calibration error. Confidence routing can improve the accuracy-cost tradeoff. It is included as a direct multilingual audit that separates language transfer, label budgets, aggregate calibration, and useful uncertainty ranking.

- **[The Company a Question Keeps: Auditing Open Jev-Style Models for Retrieval](https://arxiv.org/abs/2610.14631)**<br>📅 <strong>2026-10-10 06:29 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jianbo Chen
  - This retrieval audit tests seven open Jev-style checkpoints on 276 constructed states from 92 TREC queries, varying requested questions, evidence, and candidate eligibility separately. Nimble changes judgments when the request set expands; diagnostic interventions locate serialization effects in Nimble and Von, while Laya movement disappears at reported precision under FP32. It is included for testing request independence, with model-specific mechanisms and query-level uncertainty preventing a blanket claim about hosted Jev.

- **[Calibrated Typed Decisions for Entity, Relation, and Event Extraction](https://arxiv.org/abs/2610.17113)**<br>📅 <strong>2026-10-12 17:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yang Wang, Hanlin Xiao, Yanan Ma, Chenghao Xiao, and Chenghua Lin
  - CalOn jointly encodes text and user-specified types for entity, relation, and event extraction, using a null class and explicit probability distributions. Its training adds a sampled-decision reward explicitly inspired by TypeSafe's RLCD framing, and evaluation covers forty benchmarks. It is included as an interface-level extension to structured extraction; it neither evaluates hosted Jev nor reproduces proprietary RLCD, and its confidence correction must be assessed separately from extraction F1.

- **[Cheap, Consistent, Calibrated, but Biased? Typed Decision Models as Judges](https://arxiv.org/abs/2610.18122)**<br>📅 <strong>2026-10-13 10:35 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Fabian Lukassen, Christoph Weisser, and Alexander Silbersdorff
  - The authors apply CALM bias tests to eight typed decision models, including Jev, and seven LLM judges. Every typed model exhibits several biases, with emotional rewrites and answer order affecting judgments despite comparatively consistent, inexpensive outputs. It is included as a direct judge evaluation showing that calibration does not remove bias; correlated failures across judge types and task-specific sensitivities limit the case for replacing generative judges solely on cost grounds.

- **[PRISM: Calibrating Black-Box Judges with Counterfactual Probes](https://arxiv.org/abs/2610.18389)**<br>📅 <strong>2026-10-13 13:39 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Kakei Yamamoto and So Kuroki
  - PRISM perturbs evaluative emphasis while keeping judged content fixed, then learns a correction from human labels using the resulting score sensitivities. Jev and Sol experiments on SummEval and HANNA improve agreement with human rankings and test quality-based versus style-based probes. It is included as a direct Jev-judge calibration method, whose supervised corrections and dataset-specific agreement gains do not establish unbiased judgments or transfer without local validation.

- **[One Confidence Threshold, Unequal Coverage: Language Gaps in Typed Decision Interfaces and How Translating Inputs Reduces Them](https://arxiv.org/abs/2610.37688)**<br>📅 <strong>2026-10-17 21:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Junwei Yao, Yongxi Zhou, Zike Yang, Zhijun Wang, Jianan Liu, Yanxian Chen, Wenbo Ye
  - This preregistered comparison applies a shared confidence threshold to three typed decision services across 51 languages. Correct English inputs clear the threshold more often than equivalent non-English inputs. Translation reduces much of the gap at the tested threshold, with residual differences at matched error targets.

- **[Multimodal Reranking Is a System One Decision](https://arxiv.org/abs/2610.28435)**<br>📅 <strong>2026-10-20 16:00 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zhuchenyang Liu, Yao Zhang, Yu Xiao
  - The authors cast visual reranking as a typed decision and compare a pair of large vision-language decision models with dedicated rerankers. Gains vary across document pages and natural images. Differences in model scale and generation preclude attribution to decision training alone.

- **[Scan or Index? large Evidence Coverage, Answer Quality, and Cost in Long-Document RAG](https://arxiv.org/abs/2610.28957)**<br>📅 <strong>2026-10-20 22:11 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Juan Terven, Diana-Margarita Córdova-Esparza, Julio-Alejandro Romero-González, Edgar Chavez-Urbiola, Juan Irving Vasquez, Julian Andres Ramirez-Bautista, Silvia L. Chaparro-Cárdenas, Gendry Alfonso-Francia
  - The paper compares full-document decision-model scanning with lexical, dense and hybrid retrieval for long-document question answering. Evidence retention and answer quality are measured separately. Reusable indexes show a cost advantage as queries accumulate, while scanning incurs more latency on books.

- **[How Well Do Decision Models Transfer to Vietnamese? An Empirical Study of Text Classification](https://arxiv.org/abs/2610.31422)**<br>📅 <strong>2026-10-22 15:24 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Phat Huu Ha, Nguyen Xuan Phuc, Nong Nhut Quy, Trinh Tran Tran, Nguyen Minh Triet, Dang Van Thin
  - Four decision models are evaluated across thirteen Vietnamese zero-shot classification settings. The paper tests labels and input corruption as well as aggregate accuracy. Removing accents has a larger effect than the tested slang and typo modifications, showing the importance of language-specific robustness checks.

- **[System One models Are Not Better Rerankers](https://arxiv.org/abs/2610.32318)**<br>📅 <strong>2026-10-23 08:16 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Michael Dinzinger, Kanishka Ghosh Dastidar, Michael Granitzer
  - Matched comparisons ask whether System One training transfers to passage reranking better than reranker-specific adaptation. Specialized rerankers usually retain an advantage in ranking quality. Decision-model calibration depends on how relevance is phrased and does not consistently offset inferior ranking.

- **[Decision-Native Recommendation with Large Language Models](https://arxiv.org/abs/2610.34124)**<br>📅 <strong>2026-10-25 07:46 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Daoxuan Liu, Jiayi Liao, Jiancan Wu, An Zhang, Xiang Wang, Xiangnan He
  - A recommender scores a supplied menu directly as a decision task. The authors test reorderings, inference latency and whether confidence can route difficult examples to additional computation. The speed advantage is measured against the paper's evaluated generation-based methods.

- **[Entity Matching using Decision Models](https://arxiv.org/abs/2610.34626)**<br>📅 <strong>2026-10-25 22:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Aaron Steiner, Ralph Peeters, Christian Bizer
  - The authors test decision models on entity matching and send uncertain record pairs to generative judges. The cascade improves mean F1 for several stronger decision models. Results vary with the matching collection and prompt, and strongest published scores are exceeded on some benchmarks.

- **[Can System-1-Style Decision Models Replace Dedicated Rerankers in RAG? A Systems Evaluation](https://arxiv.org/abs/2610.34816)**<br>📅 <strong>2026-10-26 04:00 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Qiaomu Li, Ying Xie
  - A systems evaluation compares decision-model reranking with dedicated rerankers on quality, latency and memory. Rankings change with the workload, and a tuned reranker is faster and more memory efficient in the tested setups. The paper documents conditions for a competitive alternative.

- **[Improving JEV Entailment Reranking with Span Readouts and Selective Adaptation](https://arxiv.org/abs/2610.35654)**<br>📅 <strong>2026-10-26 16:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Haocheng Mei, Yuchuan Tian, Ye Yuan, Enhua Wu, Chao Xu, Allen Chen, Kai Han, Yunhe Wang
  - This study adapts NeoHorse decision models for entailment reranking. It compares selective adapter training and span-level aggregation with broader fine-tuning. The combined approach improves the reported aggregate benchmark while requiring fewer trained parameters than the all-module comparison.

- **[Retriever-Free Retrieval: Navigating Documents with Decision Models](https://arxiv.org/abs/2610.35868)**<br>📅 <strong>2026-10-26 17:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Chao Wan, Paul Jünger, Beixi Du, Bodong Liu, Navaneetha Krishnan, Kilian Q. Weinberger
  - DecisionRAG navigates document structures using decision-model judgments without training a first-stage retriever. The authors compare retrieval accuracy and latency with dense systems and rerankers across four benchmarks, including a large Wikipedia paragraph corpus.

- **[Do We Need an LLM to Know Why Sources Conflict? Decision Models for Knowledge-Conflict Typing in RAG](https://arxiv.org/abs/2610.36915)**<br>📅 <strong>2026-10-27 09:43 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Parv Khatri, Harshul Jain, Mehak Kapoor, Tanya Sah
  - The authors test decision models on labeling conflicts among sources in retrieval-augmented generation. They analyze order sensitivity and distinguish hard labels from the usefulness of the underlying scores. The generative comparison is stronger at identifying planted false sources as hard labels.

- **[JevRec: Linguistic Encoding with Jev-like Decision Modeling for LLM-based Generative Recommendation](https://arxiv.org/abs/2610.36937)**<br>📅 <strong>2026-10-27 09:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Qiyong Zhong, Jiajie Su, Ming Yang, Li Zhang
  - JevRec uses a Jev-like decision head to separate item-code length decisions from content prediction while sharing the user's interaction representation. The study reports recommendation gains on three public datasets and investigates runtime and gradient interference relative to TIGER.

- **[Predicting What Answer Engines Cite: Open Decision Models, Rerankers and a Distilled 4B Student on Ten Engines under Controlled Retrieval](https://arxiv.org/abs/2610.38090)**<br>📅 <strong>2026-10-28 00:11 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Elisha Bajemon, Andre-Louis Rochet
  - The study predicts which retrieved passages answer engines will cite under controlled retrieval. It compares rerankers, Jev and students trained on model or observed labels. Part of the apparent student advantage disappears when Jev uses the same pointwise scoring format.

- **[DecisionRank: On-Policy Distillation for Decision-Model Rerankers](https://arxiv.org/abs/2610.42128)**<br>📅 <strong>2026-10-30 17:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yanran Wu, Dian Yu, Chongyang Bai, Jieyi Zhang, Rui Liu, Tianyi Chen, Shike Mei, Hang Cui, Frank Shyu, Sandeep Pandey, Luke Simon, Chunwei Liu, Xi Liu
  - DecisionRank distills a generative ranking teacher into models that score supplied candidates directly. The authors evaluate on several retrieval benchmarks and compare both trained objectives and serving speed. Reported gains include settings where the student exceeds its larger teacher.

- **[Can Jev Improve Demonstration Retrieval for In-Context Learning?](https://arxiv.org/abs/2611.00737)**<br>📅 <strong>2026-10-31 08:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Rui Song, Yingji Li, Hao Xu
  - The authors apply Jev's probabilistic judgments to choosing demonstrations for in-context learning and distill those judgments into a smaller ranking model. The study assesses how the selected demonstrations affect downstream performance and compares efficient retrieval with repeated direct Jev calls.

- **[Do GEO Gains Survive the Live Web? Evaluating In-the-Wild Visibility Gains of Generative Engine Optimization via LIVE-GEO](https://arxiv.org/abs/2611.01126)**<br>📅 <strong>2026-10-31 17:15 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Runze Kong, Haibo Jin, Xucheng Yu, Xiaoqi Wang, Huimin Zeng, Haohan Wang
  - LIVE-GEO tests whether content optimization gains survive live retrieval. It also uses Jev to verify the numerical faithfulness of rewritten descriptions. The authors check a subset against human labels and report that a substantial number of rewrites are flagged.

- **[XDecideBench: Evaluating Typed Decision Models and Confidence Policies Across Languages](https://arxiv.org/abs/2611.01370)**<br>📅 <strong>2026-11-01 00:11 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Marek Šuppa, Jaroslav Kopčan
  - XDecideBench compares typed decisions and confidence policies across languages and benchmarks. Model rankings can change considerably with language and task. Thresholds chosen on English also fail to preserve the intended error rate on several transferred test settings.

- **[Every Clause Counts: Instruction-Following Reranking by Multiplying Small, Answerable Questions](https://arxiv.org/abs/2611.03179)**<br>📅 <strong>2026-11-02 14:15 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · S. M. Mahbub Uddin Ahmed, Abdullah Al Musaddiq
  - This reranking method divides instructions into individual clauses and combines separately judged probabilities. The paper evaluates instruction sensitivity and rank quality, showing that the measured effect depends partly on whether an evaluation compares raw scores or induced ranks.

- **[Zuse: A Decision Model for European Languages](https://arxiv.org/abs/2611.06238)**<br>📅 <strong>2026-11-04 09:45 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Umair Mehmood Imam
  - Zuse is a decision model designed for European languages. The authors compare it with hosted Jev and Kev and investigate data-integration issues such as collisions between label schemes. Strong performance in targeted categories is weighed against broader benchmark results.

- **[Probabilistic Relevance Decisions for Semantic Retrieval](https://arxiv.org/abs/2611.08014)**<br>📅 <strong>2026-11-05 13:36 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Bahadır Tatar, Cevat Şener
  - The authors use probabilistic relevance judgments to complement dense search and compare several candidate depths. Their protocol measures ranking and serving latency. Differences in runtime environments and the exploratory analysis limit broader calibration and efficiency claims.

- **[Evaluating Jev on Arabic: Comparing Decision Models and LLMs Across Arabic Tasks and Dialects](https://arxiv.org/abs/2611.10802)**<br>📅 <strong>2026-11-07 15:30 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hossam Elsafty, Tobias Deußer, Lorenz Sparrenberg, Rajkumar Ramamurthy, Rafet Sifa
  - The authors compare Jev with decision and generative alternatives on Arabic tasks and dialects. Task-family and matched-language breakdowns reveal variation obscured by aggregate scores. Some dialect comparisons remain inconclusive, limiting claims about a universal order of models.

- **[Beyond Ranking: Are Decision Models Calibrated Relevance Scorers?](https://arxiv.org/abs/2611.11480)**<br>📅 <strong>2026-11-08 16:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shengyao Zhuang, Xueguang Ma, Matthias Petri, Jimmy Lin
  - The paper evaluates decision models as relevance probability estimators as well as rerankers. It compares discrimination and Brier scores with generative and cross-encoder baselines, then uses calibrated probabilities to choose a cutoff per query. The conclusions apply to the evaluated retrieval sets.

- **[PolyRoute: A Twelve-Language and Code-Mixed Benchmark for Typed-Decision Routing, with Baselines and a Leaderboard](https://arxiv.org/abs/2611.13843)**<br>📅 <strong>2026-11-10 10:04 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mohammed Nayeem Khan, Sarun Kumar K S
  - PolyRoute benchmarks typed routing in twelve languages and code-mixed input. It compares multilingual and English-derived decision models, including held-out languages. All texts and labels are generated, and statistical resolution is limited for small model differences.

- **[Is Jev a Good Multilingual Judge?](https://arxiv.org/abs/2611.14861)**<br>📅 <strong>2026-11-11 00:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Wei Liu, Yi Fan, Xiyan Fu
  - This work evaluates Jev as a judge across languages and task types, analyzing agreement alongside option probabilities. It reports weaker performance in some low-resource languages and examines whether probability outputs can help select which multilingual judgments deserve further review.

- **[Decision Models as L2 Rerankers for Content-Based Recommendation: A Pre-Registered Evaluation](https://www.mdpi.com/2078-2489/17/11/1141)**<br>📅 <strong>2026-11-12</strong> · Information · <strong>Tier B</strong> · Purva Bangad, Harikrishnan Girikumar
  - This preregistered evaluation uses hosted Jev as a second-stage product reranker. It compares retrieved and more completely judged lists on Amazon ESCI and Wayfair WANDS. Jev improves on embedding order, while stronger trained cross-encoders erase most of its advantage in the tested settings.

- **[CURATOR: Scalable Fine-grained Evidence Selection for Retrieval-Augmented Generation using Decision Models](https://arxiv.org/abs/2611.16366)**<br>📅 <strong>2026-11-12 06:29 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shib Dasgupta, Bandish Parikh, Rashmi Gangadharaiah
  - CURATOR applies decision models to fine-grained evidence selection for retrieval-augmented generation. The authors test discrimination as the number of candidates grows and measure downstream answers across domains. Reported gains are particularly relevant when the generator's context budget is small.

- **[Do We Still Need Fine-Tuned Classifiers? Swapping Typed Decision Models into 24 ACL-Venue Papers](https://arxiv.org/abs/2611.20191)**<br>📅 <strong>2026-11-15 18:44 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Marek Šuppa, Jaroslav Kopčan
  - TDM-Gauntlet reuses splits, labels and metrics from 24 NLP papers to compare Jev and other typed decision models with task-trained classifiers. Jev matches the original model on 12 of 46 test sets zero-shot. Prompt optimization narrows the gap on others, with fine-tuning often stronger.

- **[Nano-jev: Calibrated Cross-Encoder Micro-Decisions for Retrieval-Augmented Generation with Confidence Cascading](https://www.icck.org/article/abs/tis.2026.197904)**<br>📅 <strong>2026-11-16</strong> · ICCK Transactions on Intelligent Systematics · <strong>Tier A</strong> · Subham Divakar, Rojalina Priyadarshini
  - Nano-jev uses a small cross-encoder to score relevance, evidence sufficiency and answer groundedness as typed decisions. The authors compare it with specialized checkers and test a confidence cascade. Transfer to unseen datasets reduces both accuracy and calibration quality.

- **[RagHarnessDebugger: Jev-Guided Agentic RAG in Contract Inference Repair Auditing](https://arxiv.org/abs/2611.22991)**<br>📅 <strong>2026-11-17 16:07 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Moriya Dechtiar, Daniel Martin Katz, Michael J. Bommarito II, Hongming Wang, Sylvain Jaume
  - RagHarnessDebugger records repair decisions made by a Jev-guided contract-inference pipeline. The audit checks the completeness and linkage of traces and examines how missed repairs affect answers on ContractNLI. The work treats decision visibility as an evaluation target alongside final accuracy.


<a id="multimodal-perception"></a>

## 👁 Multimodal Learning & Perception

Computer vision, visual and video decisions, multimodal representations, sensor-based recognition, and visual verification.

### 2026

- **[JEVQA - Video Quality from Metadata, Bitstream, and Pixel Features with a General-Purpose Decision Model](https://arxiv.org/abs/2609.24395)**<br>📅 <strong>2026-09-21 10:45 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Werner Robitza
  - JEVQA uses Jev 1.13 as a zero-shot video-quality predictor over metadata, bitstream statistics, and pixel-derived measurements. Across two studies, richer combined features improve correlation with VMAF or mean opinion scores, although trained quality models remain stronger and pixel-only inputs fail. It is included as a careful application study showing both the flexibility and the limits of Jev's score distributions.

- **[Visual Jev: Accurate and Efficient Decisions from Shared Visual Context](https://arxiv.org/abs/2609.25845)**<br>📅 <strong>2026-09-22 08:12 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guanxu Yu and Yuhang Yao
  - Visual Jev encodes an image and shared context once, batches isolated question suffixes, and reads candidate probabilities from an existing language-model head. Across four benchmarks, answer-supervised post-training improves macro accuracy mainly on represented task families; at 32 questions per image, shared execution is substantially faster than serial or prefix-recomputing baselines but uses more peak memory. A matched typed-head control adds no consistent accuracy advantage, making shared computation the paper's supported contribution.

- **[From Text Decisions to Pixels: An Study of Jev-Style Visual Choice Model](https://arxiv.org/abs/2609.29283)**<br>📅 <strong>2026-09-24 09:19 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xunlan Zhou, Xianliang Yang, and Li Zhao
  - PixelJev maps an image, task instruction, and runtime candidate set to a structured choice with candidate-conditioned probabilities using small open multimodal models. Seven benchmark evaluations compare frozen inference, language-side adaptation, and held-out calibration; few-shot adaptation transfers unevenly, specialist probes remain stronger on source recognition, and target accuracy does not ensure calibrated probabilities. It is included as a native-image extension of the Jev-style decision interface.

- **[Decision Readouts for Text-Mediated Video Anomaly Detection: An Exploratory Evaluation of Jev and Qwen](https://arxiv.org/abs/2609.34180)**<br>📅 <strong>2026-09-28 02:58 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xukui Qin, Youting Wang, Xinjie He, Ziyang Luo, Runxiong Wu, Yan-Syuan Chen, and Zhongyao Chu
  - This exploratory study holds video-derived captions and summaries fixed while comparing Jev Choice and Noul with Qwen probability readouts on 400 anchors from forty videos. Noul improves ranking on XD-Violence but not UCF-Crime, and strict numerical checks prevent a full-coverage Choice comparison. It is included as a controlled decision-component study, with sparse positives, missing readout controls, and offline evidence precluding broad claims about video understanding or acceleration.

- **[More Features Are Not More Evidence: Limits of Training-Free Human Activity Recognition with Jev](https://arxiv.org/abs/2609.36154)**<br>📅 <strong>2026-09-28 19:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Orhan Konak
  - This negative-result study gives Jev deterministic descriptions of 1,800 accelerometer windows from three activity-recognition datasets. Its best macro-F1 scores remain far below supervised models, adding numerical features hurts, and apparent fusion benefits fail to transfer across datasets. It is included because it tests a concrete sensor application and shows that representation choice, task supervision, and probability reliability must be evaluated before extending text-oriented decision models to physical signals.

- **[Visual Jev Rewards: Reference-Bound Verification for Multi-Subject Image Generation](https://arxiv.org/abs/2610.09328)**<br>📅 <strong>2026-10-07 02:34 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Baoteng Li, Wenzhuo Wu, Kongming Liang, and Zhanyu Ma
  - Visual Jev Rewards trains a Qwen3.5-4B verifier to score whether requested visual conditions hold for the specified reference subjects, then averages binary probabilities into a GRPO reward. A small image-generation training study improves a model-graded composite score on a selected 897-task subset. It is included as a Jev-style reward application, with one training run per reward and inconclusive human comparisons preventing a claim of established superiority.

- **[MetaEncoder: Exploring the Limit of Bi-Encoders for Multimodal System One Decision Making with Natural Language Interface](https://arxiv.org/abs/2610.11316)**<br>📅 <strong>2026-10-08 06:22 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jianpeng Cheng, Guangyu Sun, Aashu Singh, Benyu Zhang, Haixing Dai, Hossein Mansour, Jiangfan Zhang, Shlok Kumar Mishra, Wei Sun, Xuanming Cui, Yanli Liu, Qi Guo, Max Xiangjun Fan, and Jun Xiao
  - MetaEncoder adapts a multimodal decoder into a bi-encoder that scores natural-language candidates and returns a probability distribution, supporting both bounded decisions and large retrieval sets. Evaluation spans eleven benchmark suites and 190 tasks, including Jev-format decision tests, image and video understanding, and retrieval. It is included as an explicit System One architecture with a TypeSafe connection, while reasoning-intensive tasks and several retrieval comparisons remain weaknesses.

- **[FastJEV: Understanding Redundancy for Compact JEV Inference](https://arxiv.org/abs/2610.11379)**<br>📅 <strong>2026-10-08 07:11 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jie Ma, Jie Gao, Yihang Liu, Zhike Qiu, Junle Li, Chongyi Zhuang, Jiayi Ji, and Xiaoshuai Sun
  - FastJEV combines shared context states, candidate-prefix reuse, and decision-guided layer pruning to reduce redundant computation in OmniJev models without additional training. Across three model sizes and six evaluation sets, selected pruning budgets remove roughly 44-46% of candidate depth while retaining over 93% of average task scores. It is included as a Jev-style inference study; prefix sharing can increase latency, so fewer operations do not guarantee faster execution.

- **[RSAJEV: Training-Free Abstaining Prototype Memory for Eliminating Silent Hallucination in JEV-Based Remote Sensing Classification](https://arxiv.org/abs/2610.15742)**<br>📅 <strong>2026-10-11 16:27 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Man Chen, Antai Chen, Shuai Xu, Chengjie Gu, Huaping Zhou, Kelei Sun, Tao Wu, and Yongjie Huang
  - RSAJEV replaces a remote-sensing decision model's letter-token readout with cached image prototypes and a geometric correction, without gradient updates. Cross-dataset tests expose unstable label binding and overconfidence on unseen classes; prototype scores improve classification and open-set discrimination across the evaluated datasets. It is included as a Jev-style visual readout and abstention method, with its gains dependent on available class references and the tested dataset transfers rather than eliminating all hallucinations.

- **[VideoJev: System One Model for Video Understanding and Interaction](https://arxiv.org/abs/2610.18615)**<br>📅 <strong>2026-10-13 16:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yuhan Zhu, Xiangyu Zeng, Qingyi Si, Chenxu Yang, Yifei Li, Luozheng Qin, Junhao Zhou, Dingyu Yao, Jun Zhang, Chuanyu Qin, Zhiqiu Zhang, Yuandong Yang, Yuqi Xu, Tianyu Zhang, Hongcheng Guo, Jiaqi Wang, Nan Duan, and Limin Wang
  - VideoJev replaces autoregressive answers with shared scoring of temporal intervals and text options against video evidence, supporting cached and joint queries. Two model sizes improve temporal grounding over their backbones and match thinking-mode video-question accuracy with large measured speedups. It is included as a Jev-style multimodal decision architecture, with gains tied to the tested grounding and multiple-choice benchmarks rather than unrestricted video understanding or autonomous interaction.
- **[Qwen-Audio-Jev: A Unified Interface for Audio Decisions](https://arxiv.org/abs/2610.21614)**<br>📅 <strong>2026-10-15 09:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ying Fang, Zhifu Gao, Qing Gu, Jiajun He, Kangqi Jing, Xiangang Li, Yu Pu, Wupeng Wang
  - Qwen-Audio-Jev adds a decision head to an audio model, exposing choice, binary judgment and score outputs. Eighteen configurations cover sound understanding, speaker verification and quality assessment, with an author-reported roughly twentyfold speedup over its original backbone. The evidence concerns this audio adaptation rather than hosted Jev's audio capabilities.

- **[Intern-Decision: Efficient Multimodal Decision Making with Autoregressive Masked Language Modeling](https://arxiv.org/abs/2610.22131)**<br>📅 <strong>2026-10-15 16:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Tong Zhu, Zhe Xu, Zefeng He, Yunkai Chai, Xuyang Hu, Dehong Zheng, Yun Luo, Yafu Li, Qi Zhang, Yu Cheng
  - Intern-Decision scores multiple typed fields in one causal forward pass, with text and optional image inputs. Its 4B model reports 90.02% mean accuracy across seven suites versus 88.74% for Jev, while a small calibration pilot and confidence-routing study test probability use. Local GPU timings and hosted comparisons use different serving conditions.

- **[MJev-Spatial: System One Spatial Intelligence via Native Attention Matching](https://arxiv.org/abs/2610.22276)**<br>📅 <strong>2026-10-15 17:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Luozheng Qin, Yuhan Zhu, Changhai Zhou, Qian Qiao, Jun Gao, Yuhua Zhou, Harry Zhang, Xiangyu Zeng, Yuxuan Liu, Kaijie Chen, Andrew Chen, Pony Ma
  - MJev-Spatial uses native attention projections to score spatial choices, numeric bins and image regions without adding parameters. Trained on 12.3 million converted spatial question-answer pairs, it leads seven of twelve evaluated benchmarks and reports faster inference than autoregressive baselines. Numeric and point outputs use coarse-to-fine decisions, so a prediction can require several decision stages.

- **[UniJev: Separating Accuracy from Calibration in Trimodal System One Decision Models](https://arxiv.org/abs/2610.25784)**<br>📅 <strong>2026-10-19 04:49 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jianing Wang, Youwen Jian, Derong Wang, Jinyang Yu, Qingyi Si, Chuanyu Qin, Yanghua Xiao, Hongcheng Guo
  - UniJev trains typed decisions across text, images and video and compares accuracy and calibration effects of its training stages. The proposed confidence objective aligns scores with empirical accuracy within confidence bins. At 2B and 9B, the authors report better visual calibration with similar accuracy.

- **[EditJev: System One Routing for Image Editing Models](https://arxiv.org/abs/2610.32635)**<br>📅 <strong>2026-10-23 13:46 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhile Guan, Xu Jiang, Yule Duan, Gongbo Zhang, Shuyu Wang, Xiao Chen, Jian Zhang
  - EditJev selects an image editor based on the input image and edit request, combining predicted preferences with editor speed. Two evaluations show small average quality gains over the strongest fixed editor and lower estimated end-to-end latency under the authors' configuration.

- **[Seeing the Options: What Should a Visual Candidate See?](https://arxiv.org/abs/2610.33702)**<br>📅 <strong>2026-10-24 14:32 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Fengxin Li
  - The authors compare ways to encode visual options for a single-pass decision, including state-conditioned candidate representations. The latter is order-stable in the reported tests, with some loss in ranking performance relative to joint encoding. Abstention thresholds can drift across settings.

- **[Beyond CLIP: Calibrated (Few-Shot) Defect Detection With System One Decision Models](https://arxiv.org/abs/2610.41199)**<br>📅 <strong>2026-10-30 03:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Fadel M. Megahed, Ying-Ju Chen
  - The authors evaluate System One models and CLIP on visual defect detection, testing small numbers of labeled examples and calibration. Calibration improves Brier scores in most of the reported setups. The experiments document model and application combinations rather than one universal threshold.

- **[VerdictAD: Few-Shot Anomaly Detection via Decision-Guided Refinement](https://arxiv.org/abs/2611.02654)**<br>📅 <strong>2026-11-02 07:15 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shangquan Sun, Wenjun Luo, Yuanzhi Wang, Ruiqi Li, Ruoyu Chen, Jiachen Liu, Shijian Lu
  - VerdictAD uses a decision model to refine scores from visual anomaly detectors with few labeled examples. The authors test the refinement across three industrial inspection datasets and compare several detector backbones, reporting consistent improvements in their evaluated settings.

- **[ReListen: Training-Free Evidence Localization in Hour-Long Audio with Frozen Audio Language Models](https://arxiv.org/abs/2611.04480)**<br>📅 <strong>2026-11-03 08:12 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ming-Hao Hsu, Shujie Liu, Yuxuan Hu, Yuxiang Wang, Yingda Shen, Jinyu Li, Zhizheng Wu
  - ReListen uses a frozen audio model to make bounded judgments about candidate segments when searching long recordings. It compares evidence localization, answering latency and memory with transcript-based approaches. The study demonstrates a decision-oriented use of audio models without additional training.

- **[AffordJEV: Affordance Grounding by Confirming Candidate Regions](https://arxiv.org/abs/2611.07896)**<br>📅 <strong>2026-11-05 12:17 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jincheng Li, Yutian Zhang, Jianyu Zhang, Xinshun Wang, Mengyuan Liu
  - AffordJEV asks a System One judge to confirm which candidate image regions support a requested action. The authors compare decision and chain-of-thought approaches on affordance grounding, testing both in-domain performance and transfer to other image collections.

- **[Omni-JEV: Text and Dual-Stream Speech Decisions](https://arxiv.org/abs/2611.13777)**<br>📅 <strong>2026-11-10 09:15 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shengzhou Kong
  - Omni-JEV maps text and two streams of speech to typed decisions about turn taking in voice interfaces. The authors compare classification accuracy and probability quality across alternatives. Its candidate actions include continuing, interrupting and resuming within the evaluated interaction protocol.

- **[JEV-VAD: Efficient Semantic Endpointing via Task-First Conditioning and Decoder-Prefix Pruning](https://arxiv.org/abs/2611.15362)**<br>📅 <strong>2026-11-11 11:42 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jintao Liang, Nan Li, Longbiao Wang, Tubin Huang, Min Xu
  - JEV-VAD applies an efficient decision readout to detecting when a speaker has finished an utterance. It compares decoder depth and conditioning choices on endpointing tasks, including cross-language transfer. Shallow computation can retain useful signal at lower resource use.

- **[FaceJev: Direct Visual Decisions for Face Forgery Detection](https://arxiv.org/abs/2611.21604)**<br>📅 <strong>2026-11-16 18:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Siran Peng, Tianshuo Zhang, Yibo Xue, Ajian Liu, Haoyuan Zhang, Weisong Zhao, Shuhuan Chen, Xiangyu Zhu, Zhen Lei
  - FaceJev makes a direct visual decision about possible face forgery and supplies structured judgments about image regions. The authors compare performance on held-out manipulations and ablate the training components. The evaluation measures detection within the benchmark's image distributions.

- **[Deciding Without Pointing: A Case Study of Whether a Decision Model Localizes the Anomalies It Detects](https://arxiv.org/abs/2611.21995)**<br>📅 <strong>2026-11-16 23:27 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hsiang-Hung Lee
  - The authors test whether decision models localize the visual abnormalities that they classify correctly. Built-in decision scores do not necessarily imply useful spatial maps. The paper compares several sources of localization signal with dedicated few-shot localizers.

- **[Jeveration: System One Models Now Generate](https://arxiv.org/abs/2611.24738)**<br>📅 <strong>2026-11-18 16:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yuhe Liu, Qi Li, Shihua Zhang, Xinchao Wang
  - Jeveration extends a System One-oriented architecture to support image generation, visual understanding and dense prediction in one checkpoint. The authors compare quality, speed and predictive performance of its single-pass approach with prior unified systems on designated tasks.


<a id="embodied-ai-reinforcement-learning"></a>

## 🤖 Embodied AI & Reinforcement Learning

Robotics, navigation, game control, GUI interaction, environment planning, and decision models inside reinforcement learning.

### 2026

- **[JEV-Star: Fast, Low-Cost StarCraft II Control with Language-Model Planning](https://arxiv.org/abs/2609.27331)**<br>📅 <strong>2026-09-23 04:09 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Weiyu Ma, Liangbing Zhao, Yongcheng Zeng, and Jian Zhao
  - JEV-Star combines fast Jev action selection with persistent GPT-6 planning for StarCraft II macro control and micromanagement. The system wins four full games through the strongest non-cheating built-in level and improves battle-map outcomes over an initial Jev-only controller, with decision logs and cost estimates reported. Because interface improvements accompany the planning change, the study cannot isolate planning's causal contribution, but it demonstrates a practical System One/System Two control split.

- **[Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://arxiv.org/abs/2609.30186)**<br>📅 <strong>2026-09-24 17:30 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Linghua Zhang
  - Jev-Mobile separates infrequent VLM planning from repeated Jev action selection over an accessibility-tree-derived action space. On AndroidWorld it reports 79% task success, between SeeAct-V at 78% and a step-wise VLM at 84%; among successful trajectories it reduces mean execution time by 32.7% and model API cost by 73.4% relative to the step-wise baseline. The work directly tests Jev as a high-frequency GUI execution component.

- **[RoboICL: Embodied In-Context Learning with GPT-6 Astra](https://arxiv.org/abs/2609.34261)**<br>📅 <strong>2026-09-28 04:07 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Fangcheng Liu, Yeqing Shen, Anda Cheng, Weishi Mi, Chao Tang, Chenyuan Liu, Yushun Xiang, Tingguang Li, Yong-Lu Li, and Yehui Tang
  - RoboICL combines demonstrations and anchored interaction memory for robot control with GPT-6 Astra. Jev appears in an optional action-reuse gate that reduces Astra calls by 33–48% on two development tasks. The paper is included for that explicit Jev component, while its broader thirty-task and real-robot performance gains belong to the full in-context framework and do not establish an independent Jev contribution across the complete benchmark.

- **[NavJev: Efficient Vision-Language Navigation via Action-Centric Visual Compression and Discriminative Action-Semantic Memory](https://arxiv.org/abs/2609.34969)**<br>📅 <strong>2026-09-28 11:50 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Kai Sheng, Liuyi Wang, Jinlong Li, Haojie Dai, Chengju Liu, and Qijun Chen
  - NavJev compresses waypoint geometry, image captions, and semantic tags into action-specific textual evidence, then asks Jev to choose among navigation actions. On R2R-CE it reports 27.0% success and 22.4% SPL at 0.65 seconds per step. It is included as an embodied application of hosted Jev, with perception performed by separate components and the reported responsiveness gains accompanied by a limited absolute navigation success rate.

- **[JevSpawn: Adaptive Agentic Inference through Compositional Action Spaces](https://arxiv.org/abs/2610.00437)**<br>📅 <strong>2026-09-30 17:23 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Haoyang Su and Weiran Huang
  - JevSpawn turns natural-language task specifications into compositional finite action spaces, combining parallel candidate construction with feedback-based branch selection, representation revision, and recovery. Eight-task experiments compare it with seven agent baselines and a TypeSafe Jev variant, reporting improved task performance and faster navigation. It is included as a Jev-style agentic inference framework, with the action-space construction and search policy forming part of the evaluated system rather than a standalone hosted-model improvement.

- **[Code Owns the Simulation, Jev Owns the Evaluation](https://arxiv.org/abs/2610.01834)**<br>📅 <strong>2026-10-01 15:06 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yaodong Yang, Hongyao Tang, Yi Ma, Xingyu Fan, Weixun Wang, Jinpeng Li, and Tianpei Yang
  - The authors evaluate Jev on reflection questions, matrix games, ALFWorld, and robot control, distinguishing evaluation of supplied evidence from simulation of unstated consequences. Jev often knows relevant facts when asked separately but fails when prediction and evaluation must occur together; code-supplied lookahead improves control. The paper is included for testing a concrete division of labor between simulation and typed judgment, with conclusions tied to the selected environments and representations.

- **[SharedKV-BT: Node-Local Typed Decisions for Behavior-Tree Agents](https://arxiv.org/abs/2610.07327)**<br>📅 <strong>2026-10-05 19:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Naoki Wake and Justin Wagle
  - SharedKV-BT combines a Jev-style typed decision interface with behavior trees: each active node supplies valid candidates, shared-prefix inference scores them, and external checks control execution progress. Robot manipulation, navigation, and computer-use experiments report faster decisions than matched autoregressive decoding and improved manipulation success. It is included for showing how stage constraints and verified postconditions contribute to agent reliability beyond the decision model's output format.

- **[From Probabilities to Decisions: Search and Multi-Teacher Distillation with Jev](https://arxiv.org/abs/2610.09188)**<br>📅 <strong>2026-10-06 22:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Mohamad Yazan Sadoun, Sarah Sharif, and Yaser Mike Banad
  - The authors distill Jev's pairwise judgments into compact evaluators for chess search and passage reranking, avoiding live model calls inside latency-sensitive loops. Under matched labeling budgets, combining Jev and Qwen teachers improves chess evaluation over Qwen alone, but adds little reranking quality beyond Jev labels. It is included for separating search, reusable distilled judgment, and teacher complementarity; the chess system also relies on Stockfish, an opening book, and tablebases.

- **[System Switch: When Should a Fast Decision Model Stop and Think?](https://arxiv.org/abs/2610.09683)**<br>📅 <strong>2026-10-07 08:44 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Gian Luca Bailo
  - System Switch pairs open Jev-style decision actors with a reasoning vision-language model, escalating uncertain decisions while Doom continues running. On 900 held-out questions, confidence-based deferral improves over random deferral, but none of the variants reaches the exit across 33 closed-loop games. It is included for separating offline decision gains from agent progress; persistent plans help interaction, yet a fixed exploration rule matches much of the apparent benefit.

- **[Can Jev be Your Q or Policy in Reinforcement Learning?](https://arxiv.org/abs/2610.11692)**<br>📅 <strong>2026-10-08 11:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yi Ma, Tianpei Yang, Yaodong Yang, Weixun Wang, and Hongyao Tang
  - The authors place a frozen Jev model inside reinforcement learning as a policy reference, exploration judge, or replay rater. Experiments on nine MiniGrid tasks and three Atari games report improved early learning, including cases where the trained learner outperforms direct Jev control and later acts without it. It is included for testing decision models as training components, with benefits dependent on task representation and with cardinal value estimates outside the supported roles.

- **[Embodied Skill Bench: Benchmarking How Well Agents with Embodied Skills Perform on Physical Tasks](https://arxiv.org/abs/2610.16238)**<br>📅 <strong>2026-10-12 06:11 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zhi Han, Zihan Guo, Chenxi Zeng, Zicai Cui, Yue Xin, Ming Zhou, Dongzhan Zhou, Weinan Zhang, and Yang Li
  - EmbodiedSkillBench packages 250 embodied skills and compares native control, skill-only execution, and selective reuse on 100 perturbed LIBERO-Pro tasks. Skills help weaker agents but constrain a stronger agent; using Jev to select motion and gripper actions cuts that agent's tokens and time while lowering success from its native baseline. It is included for explicitly measuring Jev within embodied skill reuse and preserving the success-efficiency tradeoff.

- **[Proactive Physical AI through Continuous Observation and Timely Intervention](https://arxiv.org/abs/2610.16967)**<br>📅 <strong>2026-10-12 15:33 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhenhua Yang, Jiafeng Liang, Xingyu Zhou, Yi Jiang, Xiayu Cao, Zui Chen, Luqi Wang, Haiyang Sun, Yufei Xiang, Chang Li, Rongchuan Mu, Bowen Chi, Zihe Tong, Mingyu Li, Huijie Ma, Yiqiao Yang, Baoqi Ren, Zhiming Ma, Zhihao Zhu, Jiahao Ji, Zhuoyao Wang, Qianyu Wang, Xiangyu Liu, Wang Zixiang, Shunliang Zhang, Ming Liu, Xiaocheng Feng, Duyu Tang, and Bing Qin
  - ProAgent couples StreamingJev, a Jev-style intervention-timing model, with a response model that communicates or invokes physical devices. Video-derived supervision trains the system to detect emerging needs under explicit goals or standing roles, and real-robot experiments test physical responses. It is included as a proactive embodied decision architecture, with reported timing and false-trigger improvements tied to its evaluated objectives, backbone comparisons, and robot settings.
- **[The World Won't Wait: Evaluating and Teaching Agents Under a Live Clock](https://arxiv.org/abs/2610.20665)**<br>📅 <strong>2026-10-14 09:35 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ningxin Pan, Hanyu Li, Yeqing Shen, Ning Ding, Yehui Tang, Wentao Zhang
  - RealtimeBench evaluates 180 tasks while the environment continues evolving during inference. A slower model leads Jev in paused games but loses its advantage under a live clock; offline teacher-written instructions raise Jev's average progress score from 13.51 to 24.19. The result concerns latency-sensitive game environments and does not imply general superiority over reasoning models.

- **[CovNav: Conformal Prediction-Guided Adaptive Inference for Object Goal Navigation](https://arxiv.org/abs/2610.27677)**<br>📅 <strong>2026-10-20 05:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Pengying Wu, Zhejia Wen, Kang Ding, Kangjie Zhou, Chunxuan Jiao, Wei Pan, Xiangli Nie, Chang Liu
  - CovNav tests adaptive model inference for object-goal navigation. A conformal rule invokes slow reasoning when a fast decision is uncertain. The study reports small navigation success gains on two HM3D versions, occasional escalation and additional experiments with a physical mobile robot.

- **[RoboJev: An Open Vision-Language Judge for Robot Success Detection](https://arxiv.org/abs/2610.33718)**<br>📅 <strong>2026-10-24 15:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Josef Liyanjun Chen
  - RoboJev uses a vision-language decision model to judge whether a robot has completed its goal. The authors release evaluation materials and compare against hosted vision models. The hosted baselines receive fewer frames, making that comparison sensitive to the input budget.

- **[JevVLA: Jev-Inspired Energy-Based Adaptation for Vision-Language-Action Policies](https://arxiv.org/abs/2610.35010)**<br>📅 <strong>2026-10-26 08:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Wei Wang, Wenqiao Zhang, Zheqi Lv, Zheng Dong, Yingjie Niu, Jiaqi Zhu, Jun Xiao, Chao Li, Yueting Zhuang
  - JevVLA applies a Jev-inspired energy-based decision layer to vision-language-action policies. The same framing covers discrete candidate actions and continuous guidance. The authors compare policy performance across several robot manipulation suites, with gains depending on the environment.

- **[Learning to Formalize: Bridging Open-Ended Workloads and Fast Decision Models](https://arxiv.org/abs/2610.36595)**<br>📅 <strong>2026-10-27 03:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Chengxuan Pei, Ziyao Wang, Teng Mei, Zhe Li
  - A learned formalizer translates open-ended workloads into questions a fast decision model can answer. The study tests this division of labor in robot-task evaluation using privileged states. Reported gains depend on the formalizer, with success remaining limited on the evaluated split.

- **[RLiD: Reinforcement Learning in the Decision Plane for Language Agents and LLMs](https://arxiv.org/abs/2611.02455)**<br>📅 <strong>2026-11-02 03:17 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ziyi Chen, Yan Zhang, Jianhui Wei, Jianing Yin, Daoan Zhang
  - RLiD trains an agent's decision model with reinforcement learning over actions and transfers the policy to a generative model. ALFWorld experiments compare success and training compute with token-level reinforcement learning, with additional results for a version that uses compiled memory.

- **[Jev with Foresight: Safe Language-Guided Autonomous Driving via a Language World Model](https://arxiv.org/abs/2611.05448)**<br>📅 <strong>2026-11-03 17:36 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yansong Qu, Jiancong Chen, Samuel Labi
  - Jev-AD pairs typed interpretation of passenger requests with forecasts from a language world model. Jev compares potential driving actions with forecast consequences. The authors report fewer collisions in simulation and recorded-traffic replay, with no direct deployment evidence in the study.

- **[The Blindfolded Controller: Decision Model-Guided Training for Reinforcement Learning](https://arxiv.org/abs/2611.07934)**<br>📅 <strong>2026-11-05 12:38 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Muhammad Ibrahim Khan, Aniket Dixit, Faizan Ahmed, James Brusey
  - This reinforcement-learning study uses a decision model to guide training while allowing the learned policy to act independently. The paper compares the learned policy, conventional reinforcement learning and the standalone decision model across seven tasks, with gains depending on the test.

- **[LEASH: Stay Safe in Agentic Robotics](https://arxiv.org/abs/2611.14115)**<br>📅 <strong>2026-11-10 14:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Qinfeng Zhu, Weiguang Zhao, Ke Sun, Xihao Guo, Yunxi Jiang, Rui Zhang, Lei Fan, Kaizhu Huang
  - LEASH uses several decision gates to monitor potentially unsafe robot plans and actions against a shared policy. The authors test simulation and physical robots across multiple model backbones, reporting reductions in adverse outcomes while measuring task completion and overhead.

- **[SuperGlance: Driving at a Glance with a Vision-Language Model](https://arxiv.org/abs/2611.19138)**<br>📅 <strong>2026-11-14 03:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jieyuan Pei, Xin Yan, Mingwei Xu, Haiyi Zhang, Siyu Zou, Zhangyi Hu, Zhuoxuan Li, Yuguang Yang, Rongjunchen Zhang, Cheng Chi, Hui Xiong, Yan Wang
  - SuperGlance evaluates a fast vision-language decision architecture for driving. Experiments include open-loop prediction and closed-loop simulation with controlled inference delays. Driving performance depends on the delay charged to the planner and the simulation's measured operating conditions.

- **[Program Distillation: Transferring LLM Capability from System 2 to System 0](https://arxiv.org/abs/2611.19461)**<br>📅 <strong>2026-11-14 15:33 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Pujun Zheng, Wanying Ren, Guoxiu He
  - Program Distillation transfers policies from deliberative language models into executable student programs. PDBench compares those programs with reinforcement learning and Jev-like decision models on bounded control tasks. The paper reports both performance and deployment computation, including CPU-only operation.

- **[AgenticJevNav: Agentic Object Search and Navigation via Event-Driven Verification](https://arxiv.org/abs/2611.19912)**<br>📅 <strong>2026-11-15 09:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shuning Zhang, Shuli Zhang, Yunheng Wang, Wei Lu, Jiaxi Zhang, Yihang Kang, Tao Wang, Xiangyu Chen, Yixiao Feng, Kai Sheng, Renjing Xu
  - AgenticJevNav verifies events with a decision model while searching for objects. The authors evaluate task completion in simulation and on a physical quadruped, with failures tied to visual grounding, approach planning and runtime. The real-robot experiment covers thirty trials.


<a id="agents-workflow-automation"></a>

## 🛠 Agents & Workflow Automation

Agent memory, model routing, multi-agent coordination, selective execution, and software workflow design.

### 2026

- **[Redundant or Necessary? A Benchmark for Detecting Redundant Steps in Agent Trajectories](https://arxiv.org/abs/2605.29893)**<br>📅 <strong>2026-05-28 13:17 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Liang Zhu, Bo Yang, Zhinuo Zhou, Jiachen Liang, Jiahao Guo, Yiyang Yin, Xiongwei Han, Minyang Hu
  - RedundancyBench annotates 3,613 steps across 1,920 agent trajectories to test detection of computationally redundant actions. The revised paper evaluates six frontier LLMs and Jev and finds the task difficult without prior information. Its May v1 date is retained: this is a newly discovered Jev evaluation in a later revision, not a new May Jev release.

- **[NeoHorse-1: Towards Recursive Self-Improvement via Agentic Post-Training with Routing Harness](https://arxiv.org/abs/2609.08183)**<br>📅 <strong>2026-09-08 03:14 UTC</strong> · arXiv v1 · <strong>Tier A</strong> ·  NeoHorse Team, Guoliang Cao, Guohao Dai, Tianyu Guo, Kai Han, Hailin Hu, Zihan Jiang, Xiang Kuang, Boxun Li, Yulong Li, Zehua Pei, Yuchuan Tian, Jiamin Wang, Yu Wang, Yunhe Wang, Yihong Wu, Haiyang Xu, Shuo Zhang, Hang Zhou, Siyang Cheng, Jiayu Fan, Wei He, Qingrui Jiao, Hongguang Li, Zhiyuan Li, Runke Liu, Xi Liu, Xinchen Liu, Sinno Jialin Pan, Yi Ren, Liuyang Song, Chenyu Wang, Bei Yu, Quanlu Zhang, Xiangyu Zhang, Mengyu Zheng, Yingjie Zong
  - NeoHorse-1 uses routing records, agentic post-training and capability feedback to organize successive learning rounds, and introduces NeoHorse-Jev-4B as a prefill-only structured decision adaptation. It is included for that explicit Jev-style component; the main eleven-benchmark gains describe the generative agent models, not a standalone validation of the decision variant.

- **[Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986)**<br>📅 <strong>2026-09-21 01:43 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Dongming Jiang, Yi Li, and Bingzhe Li
  - Jev-Mem uses Jev calls as a typed control plane for memory labeling, relation construction, retrieval routing, candidate scoring, and stopping, while reserving a generative model for answer synthesis. On LoCoMo it reports improved judge scores, faster memory construction, and lower query latency than the selected memory baselines. It is included as the clearest systems architecture built around Jev's bounded-decision interface.

- **[REFLEX with Jev for Efficient Selective Control in LLM Agents](https://arxiv.org/abs/2609.26532)**<br>📅 <strong>2026-09-22 14:54 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Tiantong Wu and Wei Yang Bryan Lim
  - REFLEX uses Jev for bounded agent decisions and falls back to a strong generative model when confidence is low or generation is necessary. On a frozen 100-task benchmark it reports 95% success with 72.7% fewer strong-model calls, while controlled tests identify action-set size and near-valid alternatives as important risks. External BFCL and tau-style evaluations show only limited gains over a cheap generative cascade, clarifying where selective Jev control is and is not advantageous.

- **[Harness Tokenomics: A Router for the Enterprise Agentic Control Plane](https://arxiv.org/abs/2609.28919)**<br>📅 <strong>2026-09-24 02:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ted Kwartler, Alan Aqrawi, and Arian Abbasi
  - The revised paper uses Jev to classify coding-agent requests under a configurable taxonomy and routes at session starts, side lanes, or subagent launches to avoid rebuilding prompt caches. Repricing roughly 10,000 public sessions and emulating a 10,000-seat enterprise yields estimated model-spend savings of 13–21% at September 2026 Anthropic prices. It is included as a decision-routing application, while the reported enterprise savings are simulated rather than measured in a live deployment.

- **[When Does Selection Replace Extraction? A Pre-Registered Test of Agent Memory with a Typed Decision Model](https://arxiv.org/abs/2609.34227)**<br>📅 <strong>2026-09-28 03:34 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Rishabh Sharma and Rishika Lall
  - A preregistered memory study uses Jev to select raw conversation turns and compares that approach with extracted facts and alternative rerankers on LoCoMo and LongMemEval. Selection is competitive at tight context budgets and cheaper to write, but its gain shrinks as budgets grow, extraction becomes more accurate, and correct abstention declines. The paper is included for identifying the context-budget conditions under which Jev-based memory selection is useful.

- **[SeLMRoute: Probabilistic Semantic Evidence for Large Language Model Routing](https://arxiv.org/abs/2609.34736)**<br>📅 <strong>2026-09-28 09:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Vasilis Perifanis, Nikolaos Pavlidis, and Symeon Symeonidis
  - SeLMRoute uses Jev to extract sixteen probabilistic semantic probes, then trains a lightweight router to estimate candidate LLM performance from that evidence. On grouped LLMRouterBench evaluation it exceeds the strongest fixed model, while a Laya substitution performs less well and direct Jev routing is weaker. It is included as a measured Jev routing architecture; its separate cost-aware evaluation improves performance without establishing positive monetary savings under the strict protocol.

- **[Mnemon: Raw Records, Fast Judgments, Slow Thoughts](https://arxiv.org/abs/2609.36059)**<br>📅 <strong>2026-09-28 18:17 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guangren Wang
  - Mnemon retains raw dated records, uses an LLM to plan searches and compose answers, and delegates evidence selection to Jev under explicit context budgets. It reports strong LoCoMo and LongMemEval-S results and modest query-cost growth as stored history expands. The paper is included as a memory architecture separating fast judgment from generation, while its overall scores reflect retrieval, consolidation, budgeting, and answer-model choices in addition to Jev.

- **[Fast Models, Slow Evidence: A Paired and Self-Audited Evaluation of System-1 Decision Models for LLM Agent Harnesses](https://arxiv.org/abs/2610.02267)**<br>📅 <strong>2026-10-01 05:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jiawei Li
  - This paired study compares hosted Jev and open Laya on eleven agent decision points, using 7,283 base cases and 6,640 robustness variants. Jev is more accurate on nine points, but neither model solves zero-shot model routing reliably. A self-audit corrects inflated savings, in-sample thresholds, and misleading pipeline metrics. It is included for its controlled comparison and demonstration that local gate accuracy does not establish end-to-end quality or cost savings.

- **[Worth asking?](https://iambraun.com/jevreports/co-dm/)**<br>📅 <strong>2026-10-03</strong> · Independent technical evaluation · Updated report · <strong>Tier B</strong> · David G. Braun
  - This engineering evaluation compares Jev, Laya, generative classifiers, and a Qwen probability readout on four Dungeons & Dragons assistant tasks, with published labeled requests. Jev improves routing and rule checks over the incumbent code, but rankings vary by task and repeated calls vary. It is included for its original measurements and explicit corrections, while small custom datasets and modeled downstream savings limit generalization to production workloads.

- **[Token-Efficient Multi-Agent Collaboration via System One-Guided Computational Division of Labor](https://arxiv.org/abs/2610.08155)**<br>📅 <strong>2026-10-06 11:11 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zihan Zhou, Xinzhe Hu, Hanxu Yang, Liangjian Wen, and Zhao Kang
  - S1-MAS assigns bounded coordination to a Laya controller and evidence retrieval to a small Qwen reader while reserving substantive reasoning for larger workers. Across seven benchmarks it reports improved accuracy with reduced worker-token consumption and end-to-end latency relative to three multi-agent baselines. It is included as a concrete open Jev-style coordination application, with savings reflecting the complete controller-reader-worker design and its stated execution budgets.

- **[Agent in a Bottle: Can LLM Agents Turn Their Capabilities Into Cheap, Scalable Artifacts?](https://arxiv.org/abs/2610.08775)**<br>📅 <strong>2026-10-06 17:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ankit Sonthalia, Haritz Puerto, Alexander Rubinstein, Martin Gubri, and Seong Joon Oh
  - BOTTLED tests whether LLM agents can turn an unlabeled workload into reusable low-cost programs or small models under fixed resource budgets. Most runs lose substantial quality relative to direct inference, but selected artifacts offer large amortized savings and a direct Jev comparison on query-product relevance. It is included as an alternative to repeated decision-model calls, with reported cost advantages depending on workload scale and retained accuracy.

- **[Probabilistic Sensing, Deterministic Authority: Admitting Model-Produced Observations into Sufficiency-Checked Governance Contracts](https://arxiv.org/abs/2610.10978)**<br>📅 <strong>2026-10-07 23:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Gaston Besanson
  - This framework admits Jev or Claude-produced observations through held-out thresholds before deterministic governance contracts decide whether to authorize an action. A registered study of two constructed domains and 36,000 model calls checks an error bound and finds thirteen deny-to-allow changes among 21,000 test verdicts. It is included as a concrete Jev governance application, with informative but uncalibrated sensor scores and guarantees conditional on the declared contracts and reachable states.

- **[Does Jev Improve an AI Scheduling Agent? A Three-Arm Test](https://tryjevai.com/blog/jev-ai-agent-scheduling-test)**<br>📅 <strong>2026-10-08</strong> · Independent technical evaluation · <strong>Tier B</strong> · Try Jev AI
  - This three-arm scheduling experiment compares an existing guard, improved context handling, and a Jev judgment layer on 48 synthetic Chinese case families. Preserving context performs best; adding Jev introduces errors and latency, and exploratory translation offers no net accuracy gain. It is included as a negative integration study, with overlapping labels, no calibrated fallback, mostly single runs, and unpublished per-case records limiting reproducibility and generalization.

- **[When Faster Decisions Do Not Make Better Agents: An Empirical Study of Jev in Agent Workflows](https://arxiv.org/abs/2610.13092)**<br>📅 <strong>2026-10-09 06:45 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yuchen Ling, Shengcheng Yu, Zhenyu Chen, and Chunrong Fang
  - This study integrates Jev into five agents across ALFWorld and AndroidWorld, measuring 4,500 task executions. Decision calls become faster and cheaper, but auxiliary reasoning, extra interactions, failed recovery, and premature completion absorb those savings; two mobile agents lose substantial success, and one agent costs more per successful outcome. It is included as a direct workflow evaluation showing why task delivery and recovery must accompany per-call efficiency measurements.

- **[Suggested Is Not Superseded: A Pre-Registered Evaluation of a System-One Model as a Memory-Retirement Gate](https://arxiv.org/abs/2610.15710)**<br>📅 <strong>2026-10-11 15:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xupeng Chen and Chenqian Le
  - The authors test Jev as an assistant-memory retirement gate on 500 relabeled STALE pairs, distinguishing established changes from suggestions. A three-way decision reduces premature retirement but exceeds the preregistered detection-loss budget, and a development-selected reasoning cascade does not beat threshold adjustment on a held-out vault. It is included for examining destructive memory decisions, annotation disagreement, and small-sample selection rather than assuming confidence routing reliably improves the gate.

- **[JevGPT: Thinking Fast and Slow in Autonomous Research](https://arxiv.org/abs/2610.18272)**<br>📅 <strong>2026-10-13 12:29 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yasheng Sun, Yanning Dai, Yimeng Chen, Nanbo Li, Firas Laakom, Yifan Xu, Piotr Piękos, Mateusz Ostaszewski, Wenyi Wang, Cheng Luo, Yuhui Wang, and Jürgen Schmidhuber
  - JevGPT combines deliberative research planning with parallel, fast judgments of source relevance and evidence support. Selected original passages feed subsequent research steps, and fixed-corpus question-answering and ranking experiments report broader evidence coverage with competitive performance and lower time and cost. It is included as a Jev-based research-agent architecture, with results bounded by the evaluated corpora and comparators rather than proving reliability across unrestricted open-web research.

- **[Judges Follow the Reference: The Derivation Gap in Verifying Tool-Call Arguments](https://arxiv.org/abs/2610.18497)**<br>📅 <strong>2026-10-13 14:52 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Linhai Ma, Yan Wang, Lingfei Qian, Yupeng Cao, and Victor Gutierrez Basulto
  - This tool-call audit compares seven judges, including Jev and CLM, and finds that correct arguments are less often accepted when their supporting reference is absent or must be derived. Controlled source relocation shows preference for visible incorrect values over unsupported correct ones. DeRef supplies candidate-blind references from full history and improves AUROC. It is included for examining evidence availability in agent verification, with benchmark gains distinct from universal tool-use correctness.

- **[Reading Right, Acting Wrong: Diagnosing Decision Failures of System One Models in Agent Loops](https://arxiv.org/abs/2610.18579)**<br>📅 <strong>2026-10-13 15:43 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yubo Li, Ramayya Krishnan, and Rema Padman
  - The authors pair next-action decisions with independent factual probes across frozen agent states, comparing seventeen fast systems, including Jev, and a reasoning model. Many wrong actions follow correct probe answers; code composition repairs failures when probes determine the action, while supplying subgoals helps on real states. It is included as a behavioral diagnosis of agent decisions, with causal attribution limited by whether the probes actually contain sufficient evidence.

- **[BLADE: Auditing Information Use for Failure Attribution in LLM Multi-Agent Systems](https://arxiv.org/abs/2610.18780)**<br>📅 <strong>2026-10-13 17:34 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xiaoguang Guo, Yaohao Long, and Chuxu Zhang
  - BLADE uses Jev probabilities to select information handoffs for auditing in failed multi-agent runs, distinguishing introduced errors, propagated errors, and repairs. On 1,228 failed runs, it improves step-level attribution over an all-at-once strategy under a shared Jev interface without reference answers. It is included as a concrete Jev-based diagnostic workflow, with attribution accuracy on recorded failures distinct from evidence that the method prevents failures during live execution.

- **[JevCoder: When Does Decision Delegation Pay Off in Code Repair?](https://arxiv.org/abs/2610.19596)**<br>📅 <strong>2026-10-14 05:11 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiahao Zhang, Yifan Zhang, Yu Huang
  - JevCoder studies which code-repair decisions benefit from a probabilistic judge, then combines snippet recommendations, action guidance and submission judgments. On 400 tasks per repair model it reports 21.6–50.6% lower repair-model token usage and higher observed repair rates. Savings depend on the downstream work changed by each intervention, rather than the judge's price alone.

- **[Prune the Summary, Not the History: Source-Judged Compaction for Long-Horizon Agents](https://arxiv.org/abs/2610.20927)**<br>📅 <strong>2026-10-14 20:57 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guanghui Min, Chen Chen
  - Source-Judged Compaction uses Jev to remove agent-summary entries unsupported by environment outputs or the previous summary. On AppWorld and OfficeBench with two agent models, the authors report 2.1–8.9% better cross-run reliability without increasing agent token usage. The intervention audits summary grounding rather than establishing the correctness of every downstream action.

- **[Jev-LiteMAS: Separating Decisions from Generation in Multi-Agent Workflows](https://arxiv.org/abs/2610.21411)**<br>📅 <strong>2026-10-15 07:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Kaixiang Wang, Zhaijiacheng Zhou, Jiong Lou, Jie Li
  - Jev-LiteMAS delegates expert routing and initial artifact review to Jev while retaining generative execution and corrective feedback. Across four benchmarks and two backbones it reports 12.7–54.6% fewer generative tokens with accuracy within 1.34 points of LAS. Its ablations show that routing needs substantive prior outputs; bounded decisions alone do not supply plans or repair instructions.

- **[JevAgentHarness: Benchmarking, Deploying and Training Decision Models That Share Control with LLMs](https://arxiv.org/abs/2610.21412)**<br>📅 <strong>2026-10-15 07:27 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Kunlun Zhu, Tao Feng, Xu Han, Heng Wang, Ling Yang, Xiangru Tang, Jiaxuan You, Heng Ji
  - JevAgentHarness calibrates delegation thresholds on agent trajectories and falls back to an LLM for uncertain choices. AgentDecisionBench separates isolated accuracy from closed-loop success, and AgentDecision-4B learns from states reached after mistakes using Jev labels. Reported cost and speed benefits depend on task similarity and fitted thresholds; isolated decision accuracy does not reliably predict agent success.

- **[NIOCIS: Typed-Decision Next-Hop Routing with Node-Conditioned Option Spaces for Tool-Use Agents](https://arxiv.org/abs/2610.25985)**<br>📅 <strong>2026-10-19 08:10 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jin Han, Mingfeng Xin, Feng Liang, Jingtao Yu
  - NIOCIS restricts each tool-selection decision to actions associated with the current node in an execution graph. Ablations credit the narrower menu for improved agreement with reference actions. A confidence cascade performs worse when its escalation model is a weak zero-shot substitute.

- **[Decision4Rec: A Jev-Inspired Framework of Decision Models on Knowledge and Active Graphs for Multi-Agent Recommender Systems](https://arxiv.org/abs/2610.26035)**<br>📅 <strong>2026-10-19 08:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Marco Polignano, Het Darshan Mehta, Pasquale Lops, Ernesto William De Luca, Giovanni Semeraro
  - Decision4Rec uses knowledge and activity graphs to generate recommendation candidates and asks Jev-style models to score them. The authors compare hosted Jev with a trained 0.8B model and analyze where the gains originate. The trained model is competitive across the reported settings.

- **[SOMA: Continuous Monitoring and Intervention for System Two Reasoning with System One Models](https://arxiv.org/abs/2610.26793)**<br>📅 <strong>2026-10-19 17:40 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ruizhi Qian, Lei Shi, Tianyu Hu, Bo Yan, Song Wang, Yu Tian
  - SOMA observes partial reasoning and calls a fast System One judge to signal when a slower model should stop or reconsider. A shared controller reduces reasoning length on overthinking tasks and raises abstention on unanswerable questions in the reported tests.

- **[Measure Before You Train: Typed Decision Models vs. a Classical Baseline vs. a Generative LLM for Routing a Personal Multilingual Inbox](https://arxiv.org/abs/2610.32955)**<br>📅 <strong>2026-10-23 17:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Federico Lucca
  - A multilingual inbox study compares a hosted decision model with a classical classifier and a generative model under explicit costs for missed messages. Results change with the decision threshold and error cost. A later revision corrects threshold estimates based on incomplete data.

- **[Predict the Reward, Not the World: World Reward Models for ML Agents](https://arxiv.org/abs/2610.38439)**<br>📅 <strong>2026-10-28 08:20 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yuxiao Lee, Zherui Yang, Fan Liu, Hao Liu
  - The authors train a decision-based reward model to compare candidate machine-learning programs using outcomes from executed examples. It is evaluated on held-out task pairs and embedded in several research agents. The authors report faster task completion with similar or better average scores.

- **[Think Before You Act: Decision Gate for LLM Agents](https://arxiv.org/abs/2610.38620)**<br>📅 <strong>2026-10-28 10:40 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Iftach Shoham, Yuval David, Offer Akrabi, Erez Bilgory, Ido Levy, Sami Marreed, Sergey Zeltyn, Segev Shlomov
  - The paper adds a typed decision gate and executable verification to tool-using agents. It compares the effect on task reliability across model and benchmark combinations. Gains are more consistent on the telecommunications and function-calling evaluations than on the airline tasks.

- **[Operon-S1: a fast decision controller for long-horizon biomedical agents](https://arxiv.org/abs/2610.41350)**<br>📅 <strong>2026-10-30 07:07 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Genoria AI Team, Yuejie Hou, Yueyuxiao Yang, Weiting Tang, Meng Yang
  - Operon-S1 studies a fast typed controller for long-horizon scientific agents. The authors treat controller judgments as an independently measurable part of the workflow and assess how it can steer a slower model across bounded decisions in biomedical research tasks.

- **[Trail: Accurate Local Smart Home Control Using Decision Models](https://arxiv.org/abs/2611.00610)**<br>📅 <strong>2026-10-31 04:13 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Maleeha Masood, Deepak Vasisht, Indranil Gupta
  - Trail uses hierarchical typed decisions to resolve room, device and operation in a local smart-home registry. The study compares the method with a fine-tuned generative baseline, including robust and conversational requests. Memory particularly helps when an instruction depends on earlier exchanges.

- **[SLATE: A Large-Scale Benchmark for Long-Horizon API Selection in E-commerce Tool Use](https://arxiv.org/abs/2611.03982)**<br>📅 <strong>2026-11-02 21:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Rongzhe Wei, Ge Shi, Min Cheng, Sarthak Ghosh, Vaibhav Gorde, Leman Akoglu, Pan Li, Na Zhang
  - SLATE measures long-horizon selection of e-commerce APIs in a simulator. The benchmark compares decision models with the backbones they use and records end-to-end task completion, which is low even for the strongest tested system.

- **[TandemBench: Benchmarking Decision Models for Multi-Agent Collaboration](https://arxiv.org/abs/2611.05827)**<br>📅 <strong>2026-11-04 02:08 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Baohang Li, Xiaocheng Feng, Bing Qin
  - TandemBench tests decision models on multi-agent coordination and separately asks whether the supplied options contain a good team plan. The authors find that overall selection accuracy can conceal systematic mistakes about the availability of an optimal arrangement.

- **[RouteAlign: Aligning Task Requirements with Model Profiles for LLM Service Selection](https://arxiv.org/abs/2611.08162)**<br>📅 <strong>2026-11-05 15:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jihao Zhao, Ding Chen, Yanfang Chen, Bo Tang, Feiyu Xiong, Junchi Yan, Zhiyu Li
  - RouteAlign matches typed task requirements with model capability profiles to choose an LLM service. The authors test routing quality and cost, including a changing service catalog. Ablations highlight the role of observed local performance evidence in the fitted scorer.

- **[DM-Call: Decision-Model-Guided Function Calling with Cumulative Verification Feedback](https://arxiv.org/abs/2611.10977)**<br>📅 <strong>2026-11-07 21:29 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Minhyeong Yu, Wonduk Seo, Seunghyun Lee
  - DM-Call uses typed decision feedback to check and revise proposed function calls without executing them. The feedback combines probabilities with correctness labels. On the tested function-calling benchmarks, the method improves on direct generation while making additional model calls.

- **[LoMASA: A Local Multi-Agent Sales Assistant with Confidence-Gated Delegation for B2B Quoting](https://arxiv.org/abs/2611.11234)**<br>📅 <strong>2026-11-08 08:42 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yu Liu, Xingbang Du
  - LoMASA uses a local decision model to delegate B2B quoting tasks according to confidence. The study measures calibration and the rate of low-margin deals alongside escalation workload. Gains depend on the model and the cost assigned to manager review.

- **[Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents](https://arxiv.org/abs/2611.17167)**<br>📅 <strong>2026-11-12 17:42 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Haochen Liu, Qianhao Zhu, Zixuan Wang, Dingming Li, Tongbo Chen, Peng Qiu, Yingqi Qu, Weiming Lu, Jun Xiao, Yongliang Shen
  - The authors compare decision models as actors, judges and teachers for long-horizon agents. They find weaknesses in direct action selection can coexist with useful retrospective feedback. Experiments on ALFWorld and WebShop measure the benefit of that feedback to an agent trained by reinforcement learning.

- **[System 1 agents: a method for local, reliable and fast agentic AI](https://arxiv.org/abs/2611.21053)**<br>📅 <strong>2026-11-16 13:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Eleftherios Tzanis, Michail E. Klontzas
  - The System 1 Agents approach resolves local tool calls using typed decisions and a constrained argument interface. Its evaluation measures intent selection, stated argument completion and invented values against local generative agents. Results refer to the paper's tool and instruction set.

- **[Edit Recommendation: Can LLMs Anticipate Edit Requests from Users, and When?](https://arxiv.org/abs/2611.21155)**<br>📅 <strong>2026-11-16 14:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Daisuke Kikuta
  - The paper evaluates whether a model can predict that a user will request an edit and judge when a suggestion is worth showing. A learned decision gate improves accuracy among surfaced suggestions, with coverage controlled by the selected threshold.

- **[Train After You Measure: a Pre-Registered Learning Curve for Fine-Tuning Typed Decision Models on One User's Labels](https://arxiv.org/abs/2611.21393)**<br>📅 <strong>2026-11-16 16:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Federico Lucca
  - This preregistered study measures whether additional personal email labels improve a typed decision classifier. Its learning curves compare adaptation seeds and report limitations on rare classes. Improvements in detecting minority categories are inconsistent across runs.

- **[Jetriever: Shifting Agent Memory Retrieval from Similarity to Utility](https://arxiv.org/abs/2611.21478)**<br>📅 <strong>2026-11-16 17:50 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ruizhe Li, Licheng Zhang, Mingxuan Du, Zhendong Mao
  - Jetriever uses Jev probabilities to rank agent memories by their expected usefulness for a query, in place of similarity alone. It tests full-pool utility scoring on two memory benchmarks and reports answer gains alongside per-query retrieval costs.

- **[Think Once, Act Fast: Cost-Effective Recursive Self-Improvement for Decision Model Harness](https://arxiv.org/abs/2611.22432)**<br>📅 <strong>2026-11-17 09:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Siqi Lai, Haitao Li, Hao Liu
  - This study uses a slower model to refine a harness that executes fast typed decisions. It evaluates performance, serving delay and the cost of intermediate development interventions. The authors report that the need for those interventions falls over successive harness updates.

- **[Can Decision Models Replace LLMs in Real-World Contact Center Classification and Judging Tasks?](https://arxiv.org/abs/2611.22949)**<br>📅 <strong>2026-11-17 15:39 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Md Tahmid Rahman Laskar, Xue-Yong Fu, Shashi Bhushan TN
  - The authors compare decision and generative models for contact-center classification and judging. Besides aggregate accuracy, they analyze cost, abstention and option-position effects. Smaller decision models show particularly large losses on some judging tasks in the tested workflows.

### Undated Live Reports

- 🔥 **[Workflow evals](https://evals.typesafe.ai/)**<br>◉ <strong>Live report</strong> · Technical evaluation · <strong>Tier A</strong> · TypeSafe AI
  - This first-party report describes four structured automation evaluations and the harness design used to compare Jev with generative models. Policies are decomposed into independent typed judgments and deterministic code, then scored against consensus probabilities from large external models. It is essential for understanding TypeSafe's headline claims, but its reference labels, task construction, and author affiliation make independent validation necessary.

<a id="trustworthy-ai-security"></a>

## 🛡 Trustworthy AI & Security

Calibration, uncertainty, probability coherence, robustness, alignment, content safety, guardrails, and cybersecurity.

### 2026

- **[Open-Jev Judgments on CallScreenBench: Calibrated One-Pass Scam Screening with a Small Language Model](https://arxiv.org/abs/2609.23959)**<br>📅 <strong>2026-09-21 00:09 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Simiao Ren, Kidus Zewde, Xingyu Shen, Yuchen Zhou, Dennis Ng, Ankit Raj, Tommy Duong, Yuxin Zhang, and Neo Tiangratanakul
  - The paper adapts a Qwen3-4B backbone into JevLite, a one-pass scam probability model, and evaluates it on 577 per-turn decisions from synthetic calls. The ensemble reaches 0.974 AUROC with reported calibration error of 0.052 and substantially lower latency than a generative version of the same backbone. It does not evaluate hosted Jev, but is included as a transparent Jev-style application and ablation.

- 🔥 **[Type-Safe Is Not Error-Free: Typed Decision Models Follow the Option Name, Not the Definition Bound to It](https://arxiv.org/abs/2609.26758)**<br>📅 <strong>2026-09-22 17:38 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yu Sun, Junhao Xu, Jiajia Shi, and Zijin Yang
  - This revised study reassigns option names to unchanged definitions in Jev and two open models across 1,200 workflow decisions. Semantically polarized names sharply increase decision flips and lower mean AUC, while random strings behave closer to neutral controls and type-error rates remain zero. It is included as a direct test of definition fidelity, with four binary decision rules supporting a distinction between schema correctness and semantic stability.

- **[Decision Hijacking: Prompt Injection Attacks on Jev's Typed Probabilistic Decisions](https://arxiv.org/abs/2609.28613)**<br>📅 <strong>2026-09-23 17:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tiantong Wu and Wei Yang Bryan Lim
  - This paper reconstructs 510 InjecAgent cases to study prompt injection against Jev's schema-constrained outputs. Malicious content shifts action probabilities but rarely selects the attacker's target; adaptive score-feedback attacks raise validation success from 1.8% to 3.5%, with failures concentrated around small decision margins and greater attacker control of observations. It is included because it distinguishes output validity from resistance to manipulation within the allowed action set.

- **[Calibrated Decision Models for Autonomous Penetration-Testing Harnesses: JEV and Laya as System One Decision Layers for LLM-Driven Pentest Agents](https://arxiv.org/abs/2609.28940)**<br>📅 <strong>2026-09-24 02:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Joas Antonio dos Santos Barbosa
  - This position and case-study paper places Jev and Laya at four bounded decisions in penetration-testing agents: finding adjudication, severity recalibration, agent pruning, and confirmation. An exploratory NeuroSploit comparison uses one Jev-assisted run and one unassisted run against a target with thirteen vulnerabilities, then proposes a domain-adapted model and evaluation plan. It is included for its security-harness architecture, not as statistically conclusive evidence of effectiveness.

- **[Just Ask Jev: Reinforcement Learning for Calibrated Decisions as a Zero-Shot Detector of AI Alignment Failures](https://arxiv.org/abs/2609.29429)**<br>📅 <strong>2026-09-24 11:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ruoqi Guo, Yi Liu, Gelei Deng, Yuekang Li, Lida Zhao, Yutao Wu, Simin Chen, Ying Zhang, and Leo Yu Zhang
  - RLCDAlignBench evaluates Jev across ten alignment-failure types, 44 benchmarks, and five target models while varying question wording separately from the context supplied to the detector. A generic question reaches a reported median AUROC of 0.886, with context fields affecting performance more than phrasing. The work is included as a broad zero-shot safety evaluation, though many labels originate from benchmark-specific scorers and only two subsets include human labels.

- **[JevOut: Natural Context Can Flip Decision Models](https://arxiv.org/abs/2609.30243)**<br>📅 <strong>2026-09-24 17:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zixiang Xu, Zirui Song, Chiyu Zhang, Xiuying Chen, Xi Liu, Xiyang Hu, and Yue Zhao
  - JevOut optimizes natural-looking context additions toward a fixed wrong option while preserving the original question and choices. The revised evaluation redirects 61.4-73.2% of initially correct decisions across four systems and seven datasets; blinded reviewers accept 91.6% of sampled successful contexts as natural and answer-preserving. It is included for exposing confident contextual errors, with the revision adding human validation, a matched generation baseline, and repeatability analysis.

- **[Auditing System-1 Models on Biosecurity-Relevant Benchmarks: Calibration, Selective Prediction, and Permutation Instability in a Non-Generative Model](https://arxiv.org/abs/2609.30454)**<br>📅 <strong>2026-09-24 18:46 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Kimon Antonios Provatas and Ilias Georgakopoulos-Soares
  - This audit tests Jev on 6,020 multiple-choice items from WMDP variants and six LAB-Bench subtasks, measuring calibration, selective prediction, and answer-order stability. Confidence separates errors reasonably well in aggregate, but 37.4% of WMDP-Cyber items change answers under option rotation, beyond repeat-call variation. It is included as a direct reliability study; these knowledge benchmarks do not measure hazard screening, and calibration varies substantially by task.

- 🔥 **[JevAdvBench: A Benchmark and Black-Box Attacks for Reinforcement Learning for Calibrated Decisions Models](https://arxiv.org/abs/2609.31142)**<br>📅 <strong>2026-09-25 11:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jianyi Hu, Hangtao Zhang, Yi Liu, Yeqi Zeng, Li Zeng, Xianlong Wang, Rui Wang, and Leo Yu Zhang
  - JevAdvBench tests jev-1.13.0 with 812 typed questions across 66 scenarios and 9,744 single-edit attack variants. Appending an unverified opinion flips 12.1% of decisions and moves 38% of previously confident answers below a 0.8 review threshold, while simple rewording stays near the repeat-run floor. The benchmark directly measures RLCD robustness, although its principal reference is the model's own clean decision rather than external ground truth.

- **[Beyond Calibration: Do a Typed-Decision Model's Probabilities Obey the Probability Axioms?](https://arxiv.org/abs/2609.33209)**<br>📅 <strong>2026-09-27 04:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Keyi Li, Yihao He, and Quanyi Li
  - The authors test whether Jev's probabilities remain consistent across logically related questions on 160 ChaosNLI and PubMedQA items. Jev is more coherent than the evaluated Qwen readouts but still violates complement and exclusivity constraints beyond its repeat-call noise. The study is included because a calibrated answer to each separate question does not establish that those probabilities can be combined safely within a larger decision workflow.

- **[Evaluating System One Models for Agent Security Decisions: Reliability, Calibration, and Selective Automation](https://arxiv.org/abs/2609.33401)**<br>📅 <strong>2026-09-27 09:30 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yixuan Liu
  - This security evaluation compares Jev, Laya, Decider, and Bespoke Nimble with specialist classifiers and generative judges on accuracy, calibration, and allow/block/review policies. Strict miss limits permit little automatic acceptance; separate allow and block thresholds expand automation mainly through additional blocking. It is included for examining operational tradeoffs and paired errors, showing that a review model can recover unsafe cases while also repeating confident mistakes or falsely rejecting benign inputs.

- **[COGNIT-Guard: Calibrated Standalone Direct-Decision Guardrails with Heterogeneous CPU-NPU Confidence Cascading under Explicit Latency and False-Positive Constraints](https://arxiv.org/abs/2609.33671)**<br>📅 <strong>2026-09-27 15:32 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Hao Chen
  - COGNIT-Guard combines a calibrated CPU gate with a Laya-based decision model on an Ascend NPU for prompt screening under latency and false-positive constraints. It reports high in-domain accuracy and low false alarms on 607 held-out examples, but domain adaptation initially degrades broader SafetyBench-ZH performance before replay recovers it. The work is included as a Jev-style guardrail application, not a hosted Jev evaluation, with transfer and hardware conditions central to interpretation.

- **[Laya as a Typed Probabilistic Assessor: An Independent Reproduction and a Preregistered Study of Calibration and Selective Escalation](https://arxiv.org/abs/2609.33843)**<br>📅 <strong>2026-09-27 18:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Gowthamkumar Nandakishore
  - This independent reproduction studies the open Laya typed-decision checkpoint and preregisters further calibration and escalation tests. It reproduces the reported accuracy but finds systematic underconfidence; disjointly fitted temperature scaling helps, whereas the selected isotonic method overfits and the frozen gate misses its accepted-error target. It is included as a Jev-style evaluation with released predictions and explicit negative results, while its labels measure agreement with a synthetic teacher.

- **[Probability Contracts: Accuracy, Coherence, and Decisions Across LLM Interfaces](https://arxiv.org/abs/2609.37470)**<br>📅 <strong>2026-09-27 19:07 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Han Chen and Yingrui Li
  - Probability Contracts connects exact finite-world posteriors to interface coherence and decision costs across four configurations. Jev's Event and Choice interfaces change the binary action on 32.8% of valid pairs at one deferral cost; the revision adds a separate 400-root cohort and shows that disagreement is an incomplete error signal. It is included because averaging can improve expected Brier score without guaranteeing lower decision loss at every operating cost.

- **[Do System One Decisions Add Up? A Study of Probabilistic Coherence](https://arxiv.org/abs/2609.33971)**<br>📅 <strong>2026-09-27 22:15 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Saman Sarker Joy
  - This study compares direct fine-label decisions with probabilities reconstructed through broad categories in Jev and Laya across TREC, CLINC150, and MASSIVE. The two paths disagree substantially, reducing Jev's accuracy but improving Laya's, sometimes alongside worse calibration. It is included because decomposing a classification into apparently equivalent subdecisions changes both predictions and uncertainty, requiring evaluation of the actual application workflow rather than its individual questions alone.

- **[JEV as a Judge for Agent Trace Security: An Empirical Comparison with Generative LLM Judges](https://arxiv.org/abs/2609.34862)**<br>📅 <strong>2026-09-28 10:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zhiqiang Wang and Yichao Gao
  - This retrospective security study compares Jev with four generative judges on 5,219 agent trajectories under a common risk rubric. Jev has the highest benchmark-averaged positive-class F1, but leadership varies by dataset and valid-result coverage remains below complete coverage. It is included as a cost-aware trace-screening evaluation with explicit precision-recall tradeoffs, rather than evidence that low-latency typed judgments alone can enforce agent security during execution.

- **[JevVibe: Efficient Classification-Guided Secure Code Generation](https://arxiv.org/abs/2609.34963)**<br>📅 <strong>2026-09-28 11:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Arshak Rezvani, Sasha Behrouzi, and Ahmad-Reza Sadeghi
  - JevVibe uses Jev's probability distribution over fifty CWE labels to guide repairs of generated code. On 1,916 benchmark examples, Jev outperforms the evaluated open models, while a frontier comparator remains stronger on top-one classification; Jev-guided repair raises the detector-measured security pass rate from 63.5% to 70.7%. The paper is included as a diagnosis-to-repair workflow, with detector outcomes providing narrower evidence than independently verified code security.

- **[Jev thinks "I don't know'', but doesn't say it: Introducing Sys1Cal-v1 Dataset for Probability Calibration](https://arxiv.org/abs/2609.35342)**<br>📅 <strong>2026-09-28 14:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Riccardo Porcedda
  - Sys1Cal-v1 constructs Boolean questions with known probabilities and compares Jev's Noul, Choice, and Score interfaces with an open baseline. The author finds interface-dependent probability distortions and proposes an unexpressed uncertainty state whose recovery improves one reported probability metric. It is included as a controlled distribution-level calibration test, while the proposed hidden-state interpretation remains a behavioral hypothesis rather than evidence about Jev's undisclosed internal architecture.

- **[More Choices, Fewer Decisions: Ordinal-Scale Bias in JEV-like Direct-Decision Models](https://arxiv.org/abs/2609.38827)**<br>📅 <strong>2026-09-30 02:50 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tianxiang Gao, Jinzhe Li, Zhiyuan Li, Yi Chang, Yuan Wu
  - Across forty datasets and nine decision models, this revision finds systematic underuse of ordinal rating scales. Finer scales intensify compression; candidate randomization reduces but does not remove it, and larger models improve accuracy without consistently restoring scale use. Targeted training mitigates the effect, identifying scale utilization as a reliability objective separate from headline accuracy.

- **[When the Right Answer Is Missing: An Arithmetic-Dependent Rejection Bottleneck in Jev](https://arxiv.org/abs/2609.39496)**<br>📅 <strong>2026-09-30 10:55 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jike Zhong, Ming Li, and Yuxiang Lai
  - On paired arithmetic problems, Jev selects a present correct answer reliably but often fails to choose an explicit rejection option when every numerical candidate is wrong. Boolean candidate verification remains strong, and a threshold fitted on separate development problems substantially improves rejection. The study is included because adding a none-of-the-above label alone does not make a typed-choice workflow robust to missing answers, even when the model can verify them separately.

- **[Beyond Answer Confidence: A Controlled Audit of Self-Knowledge in a Black-Box Decision Model](https://arxiv.org/abs/2610.01006)**<br>📅 <strong>2026-10-01 03:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Sharath M Shankaranarayana, Davor Runje, and Jan Jannink
  - This audit separates answer confidence from knowledge limits using more than fifteen public datasets, six generated task families, and paired information interventions. Jev can remain confident without relevant evidence or beyond an observed knowledge boundary; explicit evidence-sufficiency questions help, but apparent self-knowledge benefits weaken when surface cues are controlled. It is included because familiar-task calibration alone does not justify using confidence to detect missing knowledge or out-of-distribution decisions.

- **[Jev-IDS: System One Models for Network Intrusion Detection](https://arxiv.org/abs/2610.01079)**<br>📅 <strong>2026-10-01 05:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Paulo Severo, Silvio E. Quincozes, and Amanda Dias
  - Jev-IDS serializes network flows and asks Jev for both attack probability and a finite traffic category under scarce labels. On a 300-flow NSL-KDD pilot with repeated decisions, it reports stronger novel-attack recall and lower latency and cost than the evaluated LLM baseline, with fewer false alarms than a low-data Random Forest. It is included as an intrusion-screening application whose small pilot cannot establish general operational detection performance.

- **[Labels Override Definitions in Jev-Style Typed Decision Models](https://arxiv.org/abs/2610.02586)**<br>📅 <strong>2026-10-01 23:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Seyedarmin Azizi, Erfan Baghaei Potraghloo, and Massoud Pedram
  - This study tests option-label bias in four open typed decision models using eleven classification tasks and a policy-routing benchmark. Swapping how labels and definitions are rendered transfers or removes the bias without changing weights, locating the tested failure in prompt construction. It is included as a mechanistic follow-up to Jev-style label-robustness findings, while its code interventions concern open implementations and do not establish the cause inside hosted Jev.

- **[SecJev: Bringing Security Expertise to System One Decision Models](https://arxiv.org/abs/2610.03073)**<br>📅 <strong>2026-10-02 09:57 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zheng Chen, Fei Yu, Haohao Huang, Yang Li, Anlong Chen, Lei Chen
  - SecJev adapts Kev's candidate scorer to security decisions using fourteen tasks from eight sources. The revised evaluation finds that security specialization improves every model size; at 0.8B and 4B, accuracy and latency are close to answer-only generative fine-tuning with lower peak GPU memory. Transfer experiments support specialization on the tested injection and traffic tasks, not a universal security guarantee.

- **[To Jev or Not? Evaluating the Accuracy and Efficiency of Structured Decision Models for Hate-Speech Moderation](https://arxiv.org/abs/2610.03324)**<br>📅 <strong>2026-10-02 13:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Demetris Paschalides, George Pallis, and Marios D. Dikaiakos
  - HATEDECIDE compares six decision-model configurations with specialist, zero-shot, commercial, and supervised baselines across four hate-speech datasets. Supplying definitions can change many predictions without reliably improving classification, and decomposition helps only a minority of comparisons. Jev is included as a measured moderation system, with favorable cost and diagnostic-set results qualified by dataset-dependent accuracy and the limited benefit of merely making policy criteria explicit.

- **[Benchmarking candidate coverage and rejection policy transfer in typed decision models](https://arxiv.org/abs/2610.03387)**<br>📅 <strong>2026-10-02 14:36 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jiawen Lu and Tongtong Wu
  - This benchmark compares Laya, Jev, and Qwen on missing-answer recognition, natural retrieval misses, and out-of-scope queries, and tests whether rejection policies transfer across tasks at equal calibration budgets. A Jev threshold learned on DBpedia rejects 69.3% of covered Emotion inputs, exposing severe operating-point drift. It is included because classification accuracy, candidate coverage, and rejection-policy reliability need separate measurement when decision models are reused.

- **[Hidden Risks of Jev: An Empirical Study of Security, Privacy, and Dual Use](https://arxiv.org/abs/2610.04985)**<br>📅 <strong>2026-10-04 06:09 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shang Wang, Tianqing Zhu, Huajie Chen, Jiayang Li, Meng Yang, and Bo Liu
  - The authors examine decision manipulation, information leakage, and defensive or malicious uses of typed decision models through the official Jev API and a controllable local NanoJev model. Their evaluation finds that restricted outputs do not eliminate the tested security and privacy risks. It is included as a broad threat study, with training-data poisoning and backdoor experiments confined to the local surrogate rather than evidence of compromise in hosted Jev.

- **[JevCascade: Readout Stability and Inference-Time Compute Allocation for Prefill-Only Decision Models](https://arxiv.org/abs/2610.07716)**<br>📅 <strong>2026-10-06 04:10 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ran Li and Lei Chen
  - JevCascade studies six prefill-only model families across ten core datasets, sixteen in total, predicting menu-intervention accuracy from cached first-pass rankings without labels or another call. The revised analysis distinguishes ordinal stability from probability stability and finds that repeated calls mainly buy calibration. It is included as a Jev-style compute-allocation study in which confidence routing and candidate curation can outperform extra passes, with conclusions conditional on menu-only interventions.

- **[Benchmarking System One Models in Online Moderation](https://arxiv.org/abs/2610.07953)**<br>📅 <strong>2026-10-06 08:25 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Federico Mazzoni and Andrea Failla
  - This evaluation compares Jev and Laya across five moderation benchmarks while separately varying written rules, retrieved precedents, and candidate restrictions. Jev often benefits from precedents and competes with specialist references; Laya's retrieval gains are less consistent. It is included for testing policy-grounded moderation under controlled information conditions, while useful confidence-based review does not imply uniformly calibrated probabilities.

- **[TypedBench: A Benchmark for Calibration, Framing Sensitivity, and Cost in System One Decision Models](https://arxiv.org/abs/2610.11392)**<br>📅 <strong>2026-10-08 07:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Rahul Sharma, Andrew B. Duncan, Gaétan Marceau Caron, and Sebastian J. Vollmer
  - TypedBench uses seven policy-labeled generators and nine suites to test Jev and open decision models on framing, calibration, scaling, selective prediction, and decision cost. Jev follows policies but remains wording-sensitive and underconfident; under asymmetric costs, acting on its probabilities can perform worse than selecting its top answer. It is included for linking probability quality to induced decisions and comparing calibration against a matched finite-sample noise floor.

- **[Adversarial Cues in Decision Models Used as Judges: The Role of Request Presentation](https://arxiv.org/abs/2610.11436)**<br>📅 <strong>2026-10-08 07:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hongliang Liu
  - This controlled judging study changes a candidate answer with a single punctuation cue while varying how a structured request is presented. On 200 new source clusters, Jev's false acceptance rises sharply under sorted JSON keys but not insertion presentation, despite passing basic controls in both settings. It is included as evidence of integration-sensitive judging failures, with reference-aware constructions, compound ordering changes, and unresolved comparator responses limiting operational conclusions.

- **[One Word Opens the Gate: The Option-Channel Attack on Typed Decision Models as Agent Guardrails](https://arxiv.org/abs/2610.12292)**<br>📅 <strong>2026-10-08 16:46 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Seyedarmin Azizi, Erfan Baghaei Potraghloo, and Massoud Pedram
  - This study evaluates open Jev-style decision models and Qwen readouts as agent guardrails, separating unsafe acceptance from unnecessary blocking. Irrelevant context and misleading option names can reverse correct decisions without reducing confidence, while tested defenses fail under adapted attacks. It is included for examining the option channel in independent open models, not hosted Jev; exact deterministic rules succeed where the synthetic policies can be fully parsed into typed fields.

- **[DICE: Tilting the Odds through Interface Attackson System One Model](https://arxiv.org/abs/2610.14404)**<br>📅 <strong>2026-10-09 23:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ben Dong, Tianyi Lu, Zhonghao Guo, and Qian Wang
  - DICE studies bounded attacks on state extraction, question generation, and output interpretation in a Jev pipeline. Three small synthetic experiments show that surrounding adapters can redirect final decisions without changing Jev or its authentic responses. Checks tying inputs and outputs to their intended meaning stop the tested interventions but can reject valid decisions. It is included for locating application-level trust failures; the pilot does not estimate their prevalence in deployed software.

- **[Poisoned into Action: Context Attacks on Typed Decision Workflows](https://arxiv.org/abs/2610.15537)**<br>📅 <strong>2026-10-11 11:19 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Chenkai Wu, Xing Chang, and Jun Yan
  - This execution-aware poisoning study traces retrieved context through Jev choices to persisted state across two synthetic workflows and 1,659 fresh calls. Source-exclusion defenses prevent some violations but also withhold legitimate automation, while correct evidence helps in both attack and neutral conditions. It is included for measuring downstream consequences and defense costs together; three prespecified contrasts lack significance after multiple-testing correction, so the findings remain exploratory.

- **[CT0: Cybersecurity Transformer](https://arxiv.org/abs/2610.16550)**<br>📅 <strong>2026-10-12 10:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Víctor Mayoral-Vilches
  - CT0 combines a Jev-inspired typed-decision head and a generative security agent within one specialized backbone, routing uncertain cases to generation. The authors report improvements in file screening, refusal detection, jailbreak classification, and vulnerability-fact extraction using a compact model. It is included as a domain-specific extension of the decision interface, with author-run security benchmarks, workload-specific metrics, and the distinction between classification and agent performance limiting general claims.

- **[Does a Hosted Decision Model Respect Irrelevant Alternatives? A Pre-Registered Test of Option-Set Dependence in Jev](https://arxiv.org/abs/2610.16655)**<br>📅 <strong>2026-10-12 12:10 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Dushyant Rajput, Nirdesh Chauhan, and Siddharth Kosaraju
  - This preregistered audit uses 299,463 Jev calls to test whether irrelevant alternatives preserve odds between leading labels. Added options systematically change those odds, with larger candidate sets amplifying distortion, whereas separately packed questions show negligible interaction. Independent binary scoring removes option-set dependence but loses accuracy. It is included as a direct probability-semantics study showing that Jev probabilities are conditional on the offered option set rather than intrinsic properties of individual labels.

- **[ProbabilityBench: Model Evaluation and Calibration with Exact Ground-Truth Uncertainty](https://arxiv.org/abs/2610.17016)**<br>📅 <strong>2026-10-12 15:58 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yuyang Dai, Yuting Tang, Futoshi Futami, and Takashi Ishida
  - ProbabilityBench constructs three simulated text domains with analytically known class probabilities and Bayes error, enabling direct evaluation of uncertainty and calibration estimators. Across sixteen models, decision systems including Jev appear frequently on the observed cost-quality frontier. It is included as a direct probability-quality benchmark, while its exact uncertainty comes from specified synthetic generators and probability-preserving text rendering, not from naturally observed ambiguity in real-world data.

- **[SkillScreen: High-Recall Screening of Malicious Agent Skills with Decision Models](https://arxiv.org/abs/2610.17727)**<br>📅 <strong>2026-10-13 05:03 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jerrold Huang, Junwei Quan, Saiyue Lyu, Zihan Guo, Yingqiang Ge
  - SkillScreen trains a compact decision model to screen agent skill instructions in one pass. At 99% recall on unseen attack families it flags 20–25% of benign skills, fewer than the tested word-level classifier and prompted LLM judges. Unfamiliar benign sources still sharply increase false positives. Prior full-text review established its OpenJev initialization and hosted Jev baseline; the revised claims concern task-trained screening.

- **[Same Attack, Different Judge: A First Controlled Adversarial Comparison of Jev, LLM Judges, and Purpose-Built Safety Classifiers](https://arxiv.org/abs/2610.17820)**<br>📅 <strong>2026-10-13 06:43 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xiang Li, Aichun Huang, Mingming Zhang, and Zheli Liu
  - This controlled study sends identical adversarial payloads and policies to Jev, five LLM judges, and two safety classifiers across four tasks. Jev resists several input-moderation attacks but remains vulnerable in phishing judgment, where its clean recall is also lower; it is fast but flags many benign requests. It is included for comparing task-dependent robustness under a shared harness, rather than equating typed outputs or one strong moderation result with general security.

- **[Consider, Then Choose: Order-Invariant Decisions in System One Models](https://arxiv.org/abs/2610.18233)**<br>📅 <strong>2026-10-13 12:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jianguo Huang, Yao Long Teng, Yanchen Deng, and Bo An
  - Runoff first scores options independently, then compares a short list across balanced candidate positions to make Jev-style choices invariant to option order. Experiments on open readouts and eight System One models report no shuffled-answer changes, while cyclic averaging retains order sensitivity. It is included as a training-free reliability method, distinguishing guaranteed order invariance from task accuracy and tying reported speed advantages to the tested candidate counts and implementations.

- **[Jev-Guard: Fast Routing and Auditing Agent Actions over Editable Policy Trees](https://arxiv.org/abs/2610.18326)**<br>📅 <strong>2026-10-13 13:03 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Wenbin Hu, Huihao Jing, Haochen Shi, Yuxuan Liu, Changxuan Fan, Sirui Zhang, Kawai Chung, Hanyu Yang, Zhenhuan Wang, Ziyi Chen, Haoran Li, and Yangqiu Song
  - Jev-Guard routes audit contexts through editable policy trees before making policy-conditioned safety decisions. The authors report 93.72% classification accuracy on 7,033 cases, separating 58 ms classification latency from a 240 ms full pipeline, and test a permission gate inside Hermes. It is included as a Jev-style safety architecture; no observed violations in the tested trajectories is limited evidence, and routing, classification, and end-to-end review costs must remain distinct.

- **[Nudge the Judge: Uncovering Program Decision Hijacking in Real-World Jev Applications](https://arxiv.org/abs/2610.18612)**<br>📅 <strong>2026-10-13 15:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yang Luo, Tiantian Ji, Zifeng Kang, Yucheng Wang, Yong Liu, Zhiyi Yin, and Xinran Liu
  - JevProbe traces attacker-controlled context through schema-valid Jev judgments to downstream application decisions in 228 applications and 2,273 test cases. The authors report decision flips in 81.5% of cases and potential security consequences for most flips, with limited protection from tested defenses. It is included as an application-grounded security evaluation, distinguishing reachable attack surfaces and potential consequences from confirmed exploitation or measured incidents in production.
- **[DecisionRobust: Benchmarking Robustness for JEV Style Decision Models Across Text and Vision](https://arxiv.org/abs/2610.19118)**<br>📅 <strong>2026-10-13 19:52 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yifan Lan, Zhongye Liu, Yurui Chang, Hanyu Wang, Yongkang Du, Lu Lin, Jinghui Chen
  - DecisionRobust evaluates text and visual perturbations and prompt injection across thirty text and seventeen vision configurations. Held-out models test transfer beyond attack construction, while semantic label checks remove apparent failures. Robustness rankings vary by attack and task, and optimized image perturbations often transfer weakly, limiting a single universal robustness ranking.

- **[Calibration and Risk-Budgeted Decisions with System One Models](https://arxiv.org/abs/2610.19811)**<br>📅 <strong>2026-10-14 08:54 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Soundouss Messoudi, Youness Mansar
  - This study evaluates conservative fallback policies and risk-budgeted action selection across six moderation, safety and reranking datasets. Learn Then Test reduces observed target-risk violations to 7.8% of defined settings, compared with roughly half for naive threshold selection. Its finite-sample framework distinguishes useful-action coverage from probability calibration and relies on the stated statistical assumptions.

- **[Lost in the Fallback: How Reliably Do Typed Decision Models Use Fallback Options?](https://arxiv.org/abs/2610.19856)**<br>📅 <strong>2026-10-14 09:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yuanbo Xie, Mingli Zhu, Tianyun Liu, Yingjie Zhang, Haixiao Xiong, Tingwen Liu
  - The Paired Fallback Robustness Test examines whether typed decision models switch correctly to fallback options and respect equivalent rule definitions. Across three benchmarks, errors remain even when the correct category is supplied. The study identifies a gap between recognizing a category and executing a fallback rule, using open decision models rather than assuming deferral is automatically reliable.

- **[Diagnose Before You Refine: Multi-Dimensional Judge Feedback for Query-Efficient Jailbreak Attacks](https://arxiv.org/abs/2610.19971)**<br>📅 <strong>2026-10-14 10:55 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yixin Tan, Chia-Yi Hsu, Jiayang Liu, Chia-Mu Yu, Rui Wen
  - Jev-Guided Strategy Bandit uses multidimensional probability feedback to guide an evaluated jailbreak search, combining refinement, strategy switching and reseeding. The authors report high attack success under a ten-query target-model budget and examine Jev-based output filtering. This is a security evaluation of a decision-model judge, with results bounded by the tested datasets, target models and attack budget.

- **[From Detection to Decision: Calibration and Deferral for Prompt-Injection Detection](https://arxiv.org/abs/2610.20907)**<br>📅 <strong>2026-10-14 20:34 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Qianlong Lan, Anuj Kaul, Vinothini Pandurangan, Indranil Sanyal
  - This prompt-injection audit compares Jev, Prompt Guard classifiers and an LLM judge on 47,611 held-out inputs. Native Jev probabilities do not consistently beat post-hoc calibration, and a 1% false-negative target requires over 91.8% escalation across the tested gate-reviewer systems. The findings link calibration to operational deferral costs under distribution shift.

- **[A Cue's Hidden Price: Auditing Seller Influence on AI Shoppers](https://arxiv.org/abs/2610.25843)**<br>📅 <strong>2026-10-19 05:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Felix Buecheler, Gerardo Berbeglia, Mingyu Guo
  - This audit measures how seller-controlled presentation shifts recommendations made by shopping agents. The authors compare cues across generative models and hosted Jev using controlled stimuli. Jev is relatively insensitive to many tested cues but remains responsive to strong social proof.

- **[Claim Laundering: When Agent Decision Models Trust Records Over Reality](https://arxiv.org/abs/2610.25947)**<br>📅 <strong>2026-10-19 07:40 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tina Khezresmaeilzadeh, Seyedarmin Azizi, Erfan Baghaei Potraghloo, Mehdi Kamal, Massoud Pedram
  - The authors evaluate how decision models respond when logged actions conflict with observed outcomes. A lightweight evidence check improves task completion in several agent environments with simulated silent failures. The study also finds that thresholds calibrated offline can transfer poorly to live trajectories.

- **[Typed Decision Models under Prevalence Shift and Label Budgets: Decision Training, Calibration, and Implicit Priors](https://arxiv.org/abs/2610.26325)**<br>📅 <strong>2026-10-19 13:01 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Abdul Rahman Iqbal, Muhammad Fawad Nasim, Amir Saleem
  - The study checks whether decision-specific training improves on the underlying model and how thresholds behave when class prevalence changes. It compares Jev and other decision models with recalibration and label-budget baselines. The useful option varies with both the task and available labels.

- **[When Multiple Choices Are Correct: Asymmetric Probability Allocation in Jev and Other Decision Models](https://arxiv.org/abs/2610.29217)**<br>📅 <strong>2026-10-21 05:18 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Rushab Munot
  - This evaluation tests how Jev and other models distribute mass when more than one option is correct. Even identical correct options can receive very different probabilities. The resulting asymmetry can materially affect a pipeline that uses a threshold to recover multiple answers.

- **[Commit or Abstain? System One Decision Models, LLMs, and Missing Legal Authority](https://arxiv.org/abs/2610.29961)**<br>📅 <strong>2026-10-21 16:17 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · M. Mikail Demir
  - The study compares System One decisions with generative models on legal cases in which a correct authority may be absent. Standard benchmark accuracy, abstention and wrong citations lead to different conclusions. Cross-model agreement reduces wrong citations in one tested policy.

- **[VX-One: Typed, Calibrated Decision Heads for Real-Time Perimeter Triage](https://arxiv.org/abs/2610.30090)**<br>📅 <strong>2026-10-21 17:39 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Juan S. Santillana
  - VX-One measures compact typed decision heads for defensive network-traffic triage. The authors compare classification and calibration with conventional detectors and check how performance changes over time. Probability calibration degrades sharply under temporal drift even where ranking retains some utility.

- **[ReDence: A Hybrid Agentic and Decision-Model Framework for Rapid, Evidence-Grounded Detection of Modern Social Engineering Scams](https://arxiv.org/abs/2610.30963)**<br>📅 <strong>2026-10-22 09:08 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jaishnoor Kaur, Josef Horáček, Ian Waskom, Sayak Saha Roy
  - ReDence combines a decision model with an investigative agent for defensive scam detection. It tests classification and latency on website workflows while producing reports that record supporting and contradictory evidence. The paper evaluates the approach as an aid for analyst review.

- **[Two Uncertainties Are Not One: Disagreement versus Decision-Risk in Cheap Structured Content Moderation](https://arxiv.org/abs/2610.33258)**<br>📅 <strong>2026-10-23 20:08 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Karan Yadav
  - This moderation study separates annotator disagreement from the chance a model will make a wrong binary decision. The authors compare confidence signals and find that evaluating targeted subquestions can recover disagreement information for some models. Results depend on task decomposition and distribution.

- **[SHIFT-JEV: Certified Abstention and Gain-Gated Continual Adaptation for LLM-Based Decision Models under Distribution Shift](https://arxiv.org/abs/2610.34329)**<br>📅 <strong>2026-10-25 14:38 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Muhammad Atif Saeed, Azka Atiq, Adarsh Kumar, Akhtar Jamil, Uzair Iqbal, Roland Aydin
  - SHIFT-JEV combines selective prediction with adaptation when data distributions change. It tests prior-shift detection and compares gated adaptation with continual-learning baselines. Gains on a smaller backbone do not transfer uniformly to the larger backbone used in the paper.

- **[TrustJev: Separating Policy Authority from Untrusted Evidence in LLM-Based Decisions](https://arxiv.org/abs/2610.34826)**<br>📅 <strong>2026-10-26 04:17 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhiwei Xu, Xuyang Liu, Xiaolin Peng, Weixian Deng, Jiabao Gao, Zirui Li, Tian Qiu, Boya Zhou, Wei Jiao, Hai Wan, Xibin Zhao
  - TrustJev studies how a typed decision model can distinguish policy authority from untrusted evidence. The evaluation reports better reliability on an authorization benchmark and modest improvements on other tasks while maintaining similar median serving latency in the measured setting.

- **[Understanding Jev-Style System One Models: Does Structure Reduce Selection Bias?](https://arxiv.org/abs/2610.35826)**<br>📅 <strong>2026-10-26 17:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mingyang Song, Mao Zheng, Zhiyuan Ma, Xinpeng Zhou
  - The authors test whether structured output protects Jev-style decisions from equivalent changes in presentation. Repeated calls can be stable even when equivalent presentations change selections. Voting brings limited gains, and unanimous decisions can still be incorrect in the tested conditions.

- **[Confidence Is Not a Promise: A Reference Audit of Typed Decision Models](https://arxiv.org/abs/2610.36311)**<br>📅 <strong>2026-10-26 21:33 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Pedro Carvalho Brom
  - A comparison of hosted Jev and Laya separates confidence calibration, selective accuracy and explanation fidelity. Point-estimate thresholds frequently miss their stated accuracy target across the reported evaluations. Validation using lower bounds supports more conservative decisions about when to abstain.

- **[Decision Models as Judges for Hallucination Detection](https://arxiv.org/abs/2610.37229)**<br>📅 <strong>2026-10-27 13:38 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Haozheng Liu, Zhaoqian Xue, Zhongyin Wang, Junting Mu, Zihui Ma, Shuya Feng, Lingyao Li
  - This paper compares decision models with generative judges on several hallucination categories. A confidence-based cascade improves the strongest single decision model on some categories at lower reported cost than a frontier judge. Accuracy and confidence discrimination vary by category.

- **[Cross-Primitive Consistency in Jev](https://arxiv.org/abs/2610.38623)**<br>📅 <strong>2026-10-28 10:44 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xu Liu, Guikun Chen, Kanzhi Wu, Wenguan Wang
  - The authors evaluate whether Jev gives mutually consistent answers when the same judgment is cast as different decision primitives. They introduce an evaluation suite and a consistency method, examining both agreement and task accuracy across in-domain and transferred settings.

- **[FlipJev: Fast Black-Box Red Teaming Finds Universal Adversarial Suffixes for Typed Decision Models](https://arxiv.org/abs/2610.38895)**<br>📅 <strong>2026-10-28 20:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xiaogeng Liu, Xinyan Wang, Chaowei Xiao
  - FlipJev is a robustness evaluation of typed decision models under adversarial inputs. The study finds that observed failures can persist beyond the original task and argues for stronger evaluation. This entry records the security finding at the benchmark level.

- **[Lev-3B: A Data Recipe for Compact Probabilistic Log Decision Models](https://arxiv.org/abs/2610.38915)**<br>📅 <strong>2026-10-28 21:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Leo Betthauser, Yingqi Liu, Uday Shah, Jishang Wei, Sainyam Galhotra, Liang Gou, Vedant Dharnidharka, Hao Yang
  - Lev-3B is a compact decision model for defensive analysis of system logs. The paper evaluates anomaly detection, behavior classification and confidence on familiar and held-out logging sources. Strong aggregate detection can coexist with confident misses on an excluded source.

- **[Pre-Crime for Agents, at the Last Second: Probing When a Recruited Agent Gives In](https://arxiv.org/abs/2610.40588)**<br>📅 <strong>2026-10-29 17:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Leonidas Raghav
  - This study evaluates whether an automated overseer can identify when an agent is about to breach an assigned policy. The reported warnings have limited lead time and frequent benign triggers. The results characterize trade-offs for oversight rather than demonstrating reliable automatic intervention.

- **[Humanized but Still True? Auditing Facts and Detection in AI-Text Humanizers](https://arxiv.org/abs/2611.00359)**<br>📅 <strong>2026-10-30 20:36 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ziyuan Wang, Genliang Zhu, Xiaobo Chen
  - The authors assess whether rewriting AI text to sound more human preserves facts and changes detector judgments. Decision-model judging is evaluated alongside other detectors. Detection performance falls sharply on some controlled rewrites, so evaluations using only original text can overstate reliability.

- **[Decision Models as Policy Gates for Coding Agents: Explicit Policy Boundaries Improve Detection and Reduce False Alarms](https://arxiv.org/abs/2611.02155)**<br>📅 <strong>2026-11-01 19:40 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · James P. Beno
  - The authors evaluate decision models as policy gates for coding agents. They compare explicit boundary descriptions with less specific policies and measure recall and unnecessary interruptions. The follow-up uses new scenarios, supporting the value of stating policy boundaries clearly.

- **[Ranked but Not Stopped: Detecting Prompt-Injection Hijacks from Typed Decision Models' Output Probabilities](https://arxiv.org/abs/2611.02522)**<br>📅 <strong>2026-11-02 04:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Junwei Yao, Jianan Liu, Yongxi Zhou, Zike Yang
  - This security audit assesses whether confidence can identify compromised typed decisions. Model scores can retain useful ranking information even when a monitor misses cases at its selected alarm budget. The distinction matters when interpreting AUROC for a deployed screening policy.

- **[Cyber-JEV: Matched Contrastive Fine-Tuning of Language Models for Fast Source-Code Vulnerability Triage](https://arxiv.org/abs/2611.02957)**<br>📅 <strong>2026-11-02 11:24 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhuyi Zhao, Shengjie Yuan, Shengyu Wang, Kang Wei, Wang Yang, Wenchao Xu, Fushuo Huo
  - Cyber-JEV studies decision models for prioritizing code review and compares learned rankings for paired vulnerable and fixed versions. The reported tests measure whether changed functions can be ranked for analyst follow-up when review capacity is limited.

- **[JevBreak: Your Model, Their Decision](https://arxiv.org/abs/2611.03759)**<br>📅 <strong>2026-11-02 13:05 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Nitin Aravind Birur, Divyanshu Kumar, Sahil Agarwal, Prashanth Harshangi
  - JevBreak measures how reliably Jev and other typed decision models preserve intended judgments under adversarial inputs. It finds material differences between models and evaluates the limits of confidence thresholding. Results concern benchmark robustness rather than any guarantee of downstream safety.

- **[Presentation Sensitivity in Typed Decision Models for Subjective Text Evaluation](https://arxiv.org/abs/2611.06384)**<br>📅 <strong>2026-11-04 11:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jatin Agrawal, Radhika Mamidi
  - The study compares Jev, Clef Flash and Perplexity Decider on subjective text evaluation. Controlled presentation changes can shift scores and selections while leaving text unchanged. Agreement with people, repeatability and robustness to equivalent presentations are analyzed as separate properties.

- **[Escalate or Close: How Fast-Tier Models Handle Held-Out Web Attack Families in Two-Tier Triage](https://arxiv.org/abs/2611.08229)**<br>📅 <strong>2026-11-05 16:13 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Maciej Kisielewicz, Michał Kędziora, Ngoc Thanh Nguyen
  - This defensive triage study compares fast models including Jev on previously unseen web-traffic categories. It examines which cases should reach a slower tier and whether evaluations transfer beyond known patterns. Overlapping benign traffic and repeat-call variation complicate deployment estimates.

- **[Decision Models as Retrieval Gates Against Injection and Pollution](https://arxiv.org/abs/2611.08325)**<br>📅 <strong>2026-11-05 17:19 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mahdi Ghadamyari, Reza Habibi
  - The paper evaluates open decision models as defensive gates for retrieved web evidence. It measures filtering quality, answer coverage and cost under different candidate budgets and evidence formats. Narrow filtering can remove information the generator needs to produce an answer.

- **[Jev as an LLM Safety Guardrail: An Empirical Study of Input Filtering, Selective Output Review, and Over-Refusal](https://arxiv.org/abs/2611.08845)**<br>📅 <strong>2026-11-06 01:03 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Olivia Cognetti, Bhaskar Krishnamachari
  - The authors test Jev for screening LLM prompts and selectively reviewing outputs. They compare safety outcomes, benign refusals and review workload under matched budgets. Adding an output stage helps some configurations, but the gains do not consistently transfer to held-out cases.

- **[Maya a1: Do the Options Read the Model, or Does Their Position? Order Sensitivity in a Non-Autoregressive Decision Model](https://arxiv.org/abs/2611.09803)**<br>📅 <strong>2026-11-06 17:54 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mohammed Nayeem Khan, Logesh L
  - The authors evaluate how Maya a1 responds to reordered options and compare order aggregation with architectural choices intended to reduce sensitivity. The report quantifies additional compute alongside accuracy and flip rates. Model-generated labels and teacher-filtered datasets limit the evidence.

- **[Can the Confidence and Decisions of System 1 Models Be Trusted? An Explainability and Perturbation Audit of Jev-Style Decision Models](https://arxiv.org/abs/2611.12521)**<br>📅 <strong>2026-11-09 14:58 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Julien Delaunay
  - This audit compares five open Jev-style systems and generative baselines across confidence, stability and explanations. Reported provider confidence reflects the shape of the option distribution rather than observed correctness. Bundling questions can also alter answers, motivating separate validation of those interface properties.

- **[Browser Immune System (BIS): Innate and Adaptive Threat Detection in the Browser with a Cybersecurity Transformer](https://arxiv.org/abs/2611.15302)**<br>📅 <strong>2026-11-11 10:36 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Víctor Mayoral-Vilches, Eduardo Worrel
  - BIS explores defensive browser classification through a set of structured decisions about page content. Tests on a small public-page sample reveal false alarms on ordinary pages. The authors distinguish evaluation of the research checkpoint from evidence for a deployed browser extension.

- **[Recalibrating a Typed-Decision Model in an Afternoon: A Hands-On Recipe for Laya's Confidence Scores](https://arxiv.org/abs/2611.16499)**<br>📅 <strong>2026-11-12 09:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Mohammed Nayeem Khan, Aliyas Ahmad Misri
  - The authors examine confidence recalibration across Laya checkpoints and identify differences between stored settings and values used at runtime. Refit temperatures improve many checkpoints under random splits, with smaller gains on held-out sets. The experiments share an underlying labeling process.

- **[Look Here, Then Decide: Small Decision Models in a Harness Find Memory-Safety Vulnerabilities at Scale on Commodity GPUs](https://arxiv.org/abs/2611.16565)**<br>📅 <strong>2026-11-12 09:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tim De Wachter, Kyryl Volkov, Myrto Eleftheria Gkogkou, Mathieu Huysman
  - The authors evaluate small decision models as prioritization aids for defensive code review. They distinguish model judgments from independently verified findings and compare the resource requirements of evaluated deployments. Confirmed issues were handled through coordinated disclosure.

- **[S1-Evo: Experience-Guided Evidence Competition Attacks on Typed System-1 Decision Models](https://arxiv.org/abs/2611.16937)**<br>📅 <strong>2026-11-12 15:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Kaixiang Wang, Junjie Li, Zhaojiacheng Zhou, Jiong Lou, Jie Li
  - This robustness study evaluates Jev and other System One models under adversarial evidence in benchmark tasks. The results include failures assigned high confidence and effects on downstream agent decisions, demonstrating that confidence alone can miss compromised judgments.

- **[A First Look at System One Decision Models for Malware Detection](https://arxiv.org/abs/2611.20699)**<br>📅 <strong>2026-11-16 08:08 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Pier Mattia Basciano, Giovanni Farina, Salvatore Monteleone
  - This defensive benchmark compares System One models for malware classification using structured evidence. The authors report detection rates at several false-positive levels and inspect the judgments behind aggregate predictions. The measured rates depend on the chosen threshold and benchmark.

- **[Jev-as-a-Reward: Validating Probabilistic Safety Judges for Reinforcement Learning](https://arxiv.org/abs/2611.20955)**<br>📅 <strong>2026-11-16 12:01 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Eunkyeong Lee, Junhyung Moon, Seunggwan Hong, Dongsuk Oh
  - The authors test Jev probabilities as a safety reward for language-model training. They compare guard judgments and track confident errors as well as aggregate safety outcomes. The results show that a useful reward can still contain blind spots on difficult judgments.

- **[JEV vs. LLMs: A Comparative Analysis for Phishing Email Detection](https://arxiv.org/abs/2611.23683)**<br>📅 <strong>2026-11-18 01:17 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Muhammad Mahir Malik, Muhammad Moiz Khalid, Hussain Ahmad, Faheem Ullah
  - This phishing-email benchmark compares Jev with generative models on classification, latency and probability calibration. Jev performs well on several measured triage dimensions. The study does not evaluate generated explanations, and the tested dataset supports only a bounded comparison.

- **[VisualJevBench: A Benchmark and Black-Box Attacks for Visual Typed Decision Models](https://arxiv.org/abs/2611.25435)**<br>📅 <strong>2026-11-19 03:16 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Li Zeng, Yeqi Zeng, Hengkai Liang, Shiguo Wang, Meng Xie, Zeyu Ye, Jinheng Zhang, Xianlong Wang, Ziqi Zhou, Hangtao Zhang
  - VisualJevBench evaluates visual typed decisions with Jev and documents robustness under altered input images. The reported failures vary by evaluation condition and by transfer setting. Its benchmark makes it possible to evaluate visual decision reliability separately from clean-input accuracy.

- **[MM-SystemOneBias: Evaluating Bias in Multimodal Jev-Style System One Decision Models](https://arxiv.org/abs/2611.26557)**<br>📅 <strong>2026-11-19 18:25 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jinzhe Li, Qi Wang, Dandan Guo, Li Liu, Yuan Wu, Yi Chang
  - The study evaluates multimodal System One models for bias when answer evidence and supplied descriptions vary. The authors examine both changes in chosen answers and probability shifts for cases where the answer stays the same. Accuracy alone can obscure differences between inputs.


<a id="science-healthcare-education"></a>

## 🩺 AI for Science, Healthcare & Education

Scientific reasoning, biomedical models, clinical evaluation, public-health and road-safety analysis, and learner modeling.

### 2026

- **[Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev)](https://arxiv.org/abs/2609.24052)**<br>📅 <strong>2026-09-21 03:24 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - This work applies Jev to a 27-question schema over 499,500 Texas crash narratives and audits a subset against coded fields and 2,416 blinded human judgments. It reports an F1 of 0.908 against human labels and shows that post-hoc recalibration materially reduces calibration error. The paper is included for its unusually large deployment-scale evaluation, explicit review budgets, and careful distinction between database agreement and narrative fidelity.

- **[Counting the Uncounted: Population-Level Surveillance of Documented Pregnancy and Fetal Harm in Police Crash Narratives with a System One Model (Jev)](https://arxiv.org/abs/2610.00213)**<br>📅 <strong>2026-09-21 14:25 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - This population-scale study screens 5,018,079 Texas crash narratives for documented pregnancy, then uses Jev's eight-question schema and a blinded human audit to estimate missed cases and fetal harm. It estimates 5,467 crashes with documented pregnancy, including 58 documenting fetal harm. The paper extends Jev-based crash-data extraction to surveillance, while explicitly measuring what police narratives document rather than the true prevalence of pregnancy or injury.

- **[Jev for Scientific Decisions: Evaluating Semantic Choices and Their Consequences](https://arxiv.org/abs/2609.24965)**<br>📅 <strong>2026-09-21 17:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Boyuan Deng, Shuyi Fan, Hongyang Zhang, Xinhong Xie
  - The revised scientific-workflow audit compares twelve model configurations on twenty source-grounded choices across ten cases, separating semantic decisions, downstream calculations and final labels. Jev ties five other configurations on semantic correctness with the lowest observed median latency among successful responses. Seven wrong choices by comparison models alter downstream counts without changing the final label, showing why end-result accuracy alone is insufficient.

- **[Can Jev Judge Radiology Reports? Evaluating a System One Model for Clinical Factuality](https://arxiv.org/abs/2609.27607)**<br>📅 <strong>2026-09-23 09:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiaju Huang, Hao Yang, Xinyu Ma, Xinglong Liang, Kunyan Cai, Junqiang Ma, Shaobin Chen, Yue Sun, and Tao Tan
  - This study applies Jev bidirectionally to test whether statements in generated and reference radiology reports support one another. A single-question configuration correlates with expert error counts better than a matched open NLI judge and detects controlled false negation strongly, but the local RadMatch system remains better on clinically significant errors. It is included as a cost-aware medical factuality application with explicit analysis of report length and error-definition effects.

- **[Jev Matches 7B Language Models for Speech-Neuroprosthesis Rescoring](https://arxiv.org/abs/2609.33538)**<br>📅 <strong>2026-09-27 13:04 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Gabriele Cinà
  - This study replaces a speech neuroprosthesis's language-model rescoring stage with one Jev choice over candidate sentences, combined with the neural decoder's score. On 978 held-out sentences from one ALS participant, it reports 7.5% word error against 7.8% for two 7B models. It is included as a concrete scientific component substitution, while the single-participant offline evidence and 262 ms internet latency limit claims about clinical deployment or speed.

- **[Jev in Medicine: A Benchmark Evaluation](https://arxiv.org/abs/2609.34024)**<br>📅 <strong>2026-09-27 23:33 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Alfredo Madrid-García and Beatriz Merino-Barbancho
  - The authors compare Jev with GPT-6 Sol on four medical question-answering and diagnostic benchmarks. Jev nearly matches the reasoning reference on PubMedQA but trails on examination questions and complex diagnoses, despite valid outputs and low latency. Its high-confidence subset is accurate, yet the reference matches that accuracy at comparable coverage, and both rarely select the unanswerable option. The study is included for separating task-specific calibration from diagnostic competence and selective-prediction benefits.

- **[OmniMed-Jev: Calibrating LVLM Confidence for Trustworthy Medical Multimodal Decisions via System One](https://arxiv.org/abs/2610.00381)**<br>📅 <strong>2026-09-30 08:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Luyao Tang and Cheng Chen
  - OmniMed-Jev adapts a medical vision-language backbone to return Choice, Noul, and Score distributions across imaging modalities and bounded tasks. A comparison using the same backbone, data, and schedule reports improved probability calibration with generally similar point predictions, although the generative baseline remains stronger on counting. It is included as an independent medical Jev-style extension; associated training differences prevent isolating the interface's effect, and the evaluation does not establish clinical readiness.

- **[From Retrieval to Typed Decisions: Calibrated System One Models from Biomedical Sentence Encoders](https://arxiv.org/abs/2610.02486)**<br>📅 <strong>2026-10-01 21:03 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Pritam Deka
  - SBERT2S1 converts biomedical sentence encoders into typed decision models and introduces BIODECIDE and 243,000 MEDLINE-derived training decisions. Matched experiments show that retrieval pretraining helps some heads but not others, and an open RLCD recipe trails cross-entropy because of reward normalization; temperature scaling leaves no clear calibration winner. It is included as a biomedical Jev-style training study, explicitly examining an open recipe rather than TypeSafe's undisclosed algorithm.

- **[Estimating Uncoded Crash Factors with Tabular Foundation and System One Models: Kumo Tabular and Jev](https://arxiv.org/abs/2610.10321)**<br>📅 <strong>2026-10-07 16:12 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - The authors combine Kumo Tabular predictions over 5.6 million Texas crash records, Jev readings of sampled narratives, and human recalibration to estimate factors missed by coded fields. A separate probability-sampled human check supports the reported population estimates, and targeted rereading finds substantially more discordance than random review. It is included as a Jev-assisted statistical workflow whose validity depends on sampling and human checks, measuring documented factors rather than underlying crash causation.

- **[Can a System-One LLM Perform Knowledge Tracing When Few or No Learners Are Logged?](https://arxiv.org/abs/2610.11135)**<br>📅 <strong>2026-10-08 02:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Unggi Lee and Haeun Park
  - JevKT uses Jev's typed probabilities to predict learner responses when a platform has little or no interaction history, optionally adding examples and similar-learner statistics. Across seven datasets, it outperforms the evaluated generative and low-data deep knowledge-tracing baselines, while supervised models catch up as logged learners increase. It is included as a direct cold-start education application; the advantage does not extend to every setting, including unseen items with ample learner data.

- **[Can Multimodal Decision Models Classify Breast Ultrasound Images? Benchmarking CLEF and CLEF-Flash Across Prompts and Datasets](https://arxiv.org/abs/2610.13675)**<br>📅 <strong>2026-10-09 14:41 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tran Cao Minh, Hai Tran, and Ha Minh Tan
  - The authors evaluate unchanged CLEF and CLEF-Flash models on 2,818 breast ultrasound images from three datasets under three prompt designs. Clinical instructions improve CLEF-Flash accuracy but reduce CLEF accuracy, and all configurations fall below the majority-class predictor on BUS-BRA. It is included as an application audit of Jev-style multimodal decision models, with dataset shifts, class-specific errors, and prompt sensitivity limiting clinical interpretation.

- **[Toward System One Clinical Intelligence: Parameter-Efficient Fine-Tuning and Counterfactual Explainability of Decision Foundation Models](https://arxiv.org/abs/2610.15029)**<br>📅 <strong>2026-10-10 16:13 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · S. M. Mahbub Uddin Ahmed
  - The authors adapt Clef-Flash with quantized LoRA for 24-class symptom-based disease classification, using 960 training and 240 test records. They report 95.42% accuracy and examine symptom sensitivity through leave-one-symptom-out perturbations. It is included as a Jev-style clinical decision-model adaptation, while the small benchmark split, reported serving comparisons, and illustrative perturbation analysis do not establish clinical deployment readiness or causal explanations.

- **[How Reliable Are System-One Decisions in Medicine? A Comparative Study of Jev, Jev-like Models, and LLMs](https://arxiv.org/abs/2610.18529)**<br>📅 <strong>2026-10-13 15:15 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yanrui Du, Danyang Zhao, Sendong Zhao, Wenhao Li, Yibo Gao, Haochun Wang, Zhuoer Xu, Shiwen Cui, and Bing Qin
  - This study compares Jev, open decision models, and LLMs on 8,742 instances from fifteen medical datasets, testing accuracy, framing stability, and abstention. Jev is competitive on text-driven tasks and stable under formatting changes but weaker on numerical tasks and missing-answer detection. Independent binary scoring improves retained accuracy. It is included as a broad medical reliability audit, keeping decision consistency separate from safe abstention and clinical competence.
- **[AgriJev: Efficient Agricultural Candidate Scoring with Multi-Scale Adapted Models](https://arxiv.org/abs/2610.19478)**<br>📅 <strong>2026-10-14 02:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xuechen Li
  - AgriJev adapts Qwen models to score agricultural candidates in one forward call. Across seventeen external test views its 9B variant reports 75.44% mean accuracy, outperforming original and agricultural generative fine-tuning baselines while narrowing the gap to hosted Jev. Latency gains come from a fixed A100 workload and vary with task and inference interface.

- **[PremiseCheck: Efficient Fact-Checking of Human and AI Peer Reviews](https://arxiv.org/abs/2610.21046)**<br>📅 <strong>2026-10-15 00:42 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Dingjie Song, Zhiling Yan, Ziqian Zhang, Yuxuan Zhang, Lichao Sun
  - PremiseCheck decomposes review comments into explicit premises with an LLM, then uses Jev to check each premise against the paper. ReviewFact covers NLP, machine learning and natural-science reviews; the framework reports comparable accuracy to GPT-5.5 with lower per-comment cost. It checks factual claims about a manuscript, not the validity of a reviewer's scientific judgment.

- **[A general-purpose System One decision model for clinical records](https://arxiv.org/abs/2610.27099)**<br>📅 <strong>2026-10-19 18:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Andrew Zhang, Trinh T.L. Vuong, Sophia J. Wagner, Dongmin Bang, Tong Ding, Yuchang Su, Mary Cipperman, Christina S. Chen, Judith Lefkes, Ramin Kahidi, Ming Y. Lu, Caiwei Tian, Tianhao Luo, Jingnan Ma, Rowland Pettit, Long Phi Le, Faisal Mahmood
  - Clinical System One is trained to answer structured questions about patient records at scale. In a retrospective trial-screening experiment, its top-ranked records included more judged-eligible candidates than keyword search and required fewer language-model tokens than reading every record with an LLM.

- **[Decision language models as affordable and rapid alternatives to LLM judges of clinical generative AI](https://arxiv.org/abs/2610.28826)**<br>📅 <strong>2026-10-20 18:46 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Rotem Gershon, Seffi Cohen, Dean Ariel, Havatzelet Bilavsky-Yarden, Amiel Sberro, Shai Yitzhaki, Osnat Tausky, Naama Golan, Maayan Rabinovitch, Ariel Avraham Hasidim, Itay Arianu, Maya Dagan, Ran Balicer, Noa Dagan
  - The authors compare Jev with generative judges on three clinical evaluation suites. They report similar criterion agreement and substantially lower fees and latency in the tested configuration. Agreement with another judge serves as the reference in some comparisons.

- **[RetiJev: Fast and Source-Grounded Ophthalmic Decision Models](https://arxiv.org/abs/2610.30947)**<br>📅 <strong>2026-10-22 08:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Bo Liu, Lianyu Wang, Meng Wang, Ching-Yu Cheng, Huazhu Fu
  - RetiJev specializes a one-pass model for ophthalmic diagnosis, clinical choices and guideline grading. The authors report higher guideline-grading scores than a generative model and hosted Jev, plus faster inference. These are evaluations of bounded tasks using the paper's sources.

- **[The Value of System 1 Models in Medicine](https://arxiv.org/abs/2610.31315)**<br>📅 <strong>2026-10-22 14:08 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xiufeng Yang, Konstantinos Vrettos, Zeineb Ben Chaaben, Fabian Drexel, Jannik Lübberstedt, Johannes Moll, Anirudh Narayanan, Frederike Stumpf, Cosmin I. Bercea, Jiawen Wang, Evangelia E. Vassalou, Krischan Braitsch, Aymen Meddeb, Sebastian Ziegelmayer, Markus Graf, Marcus R. Makowski, Lisa Adams, Nassir Navab, Michail E. Klontzas, Keno Bressem
  - This medical benchmark compares System One models with generative relatives on structured decisions. Latency is consistently lower in the reported runs, but performance varies across languages and input types. Image interpretation and judgment-heavy tasks show larger limitations than text-based recall.

- **[PathJev: Decision-Native Vision-Language Modelling for Histopathology](https://arxiv.org/abs/2610.32478)**<br>📅 <strong>2026-10-23 10:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Cristian Tommasino, Antonio M. Rinaldi
  - PathJev learns to distribute probability over runtime-specified histopathology choices. The authors evaluate recognition, calibration and case abstention, including a whole-slide demonstration. Calibration can deteriorate on unseen organs, and a supervised pathology baseline is better calibrated in the reported settings.

- **[Decision-only medical AI: early evidence and pairing with language models](https://www.medrxiv.org/content/10.64898/2026.10.21.26366149)**<br>📅 <strong>2026-10-24</strong> · medRxiv preprint · <strong>Tier B</strong> · Mahmud Omar, Ashwin Ramaswamy, Ankit Sakhuja, Benjamin S. Glicksberg, Alon Gorenshtein, Jonathan B. Kruskal, Muneeb Ahmed, Olga Rachel Brook, Raja-Elie E. Abdulnour, Alvira Tyagi, Dhaval Patel, Alexander W. Charney, Yiftach Barash, Eyal Klang, Girish N. Nadkarni
  - This medRxiv preprint tests Jev and another decision service on clinical examples with altered framing, then measures a paired workflow using a generative model. Pairing reduces some framing effects while maintaining similar triage accuracy in the controlled evaluation.

- **[Scoring the NIH Stroke Scale from bedside exam transcripts: a synthetic benchmark of a decision model and a large language model](https://www.medrxiv.org/content/10.64898/2026.10.23.26366376)**<br>📅 <strong>2026-10-26</strong> · medRxiv preprint · <strong>Tier B</strong> · Noor Abdulla, Waleed Abood
  - The authors compare a decision model with a language model for scoring stroke-scale items from synthetic examination transcripts. The generative model is more accurate, while the decision model is faster and cheaper. A simulated cascade tests whether lower-confidence items can be escalated selectively.

- **[MedJev: Evaluating Zero-Shot System-One Decision Making in Medicine](https://arxiv.org/abs/2610.36006)**<br>📅 <strong>2026-10-26 16:08 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Simon A. Lee, Jiahang Sha, Moonseong Jeong, Yunbei Pan, Jeffrey N. Chiang
  - This MedJev study benchmarks available System One models on zero-shot clinical decisions. It measures predictive performance, serving cost and calibration, including a small-label recalibration experiment. The evaluation supports research baselines for local assessment across clinical populations.

- **[Can JEV Support Clinical Trial Criteria Assessment?](https://arxiv.org/abs/2610.35721)**<br>📅 <strong>2026-10-26 16:41 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mengxian He, Ziyue Gao, Chun Li, Shunyi Zhang, Hao Wei, Minqing Zhang, Wu Yuan
  - The paper evaluates Jev on clinical-trial eligibility criteria, including judgments about missing information. It measures criterion-level performance and cost. Reported interpretation errors motivate checking flagged criteria against the underlying patient record in any review workflow.

- **[PsyJev: Psychological Analysis via System-1 Judgment](https://arxiv.org/abs/2610.36689)**<br>📅 <strong>2026-10-27 06:03 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Fangyuan Liu, Sirui Zhao, Xiaohao Wang, Guo Cheng, Peng Zhang, Enhong Chen
  - PsyJev trains compact decision models to make structured judgments for psychological-analysis tasks. The authors compare model sizes and examine the effects of training stages on F1 and probability quality. The findings apply to the paper's benchmark rather than clinical diagnosis.

- **[CausalGrade: Evidence-Guided Causal Graph Scoring with Jev](https://arxiv.org/abs/2610.40692)**<br>📅 <strong>2026-10-28 07:33 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiangming Zhong, Jiawei Zhu, Guanting Wu, Qiaoxi Cai, Wanyi Chen, Jiale Li
  - CausalGrade uses Jev to score candidate causal graphs against supplied evidence. Synthetic experiments relate scores to known structural errors and compare graph selection with a self-compatibility metric. The reported hit rate improves but leaves substantial room for incorrect selection.

- **[Benchmarking decision models against generative large language models on medical multiple-choice questions](https://arxiv.org/abs/2610.38448)**<br>📅 <strong>2026-10-28 08:25 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Oscar Freyer, Daniel Glauert, Moritz Hofmann, Max Ostermann, Stephen Gilbert, Jakob Nikolas Kather
  - This evaluation compares decision and generative models on medical multiple-choice questions, including repeated runs and probability reliability. Decision models reduce compute and serving costs in the test, while the best generative model achieves higher accuracy. Repeatable labels can accompany differing probabilities.

- **[Decision and System One models in rheumatology: accuracy and calibration on specialty-training examination questions and diagnostic case vignettes](https://arxiv.org/abs/2610.40318)**<br>📅 <strong>2026-10-29 15:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Alfredo Madrid-García, Diego Benavent, Fabian Lechner, Phillip Kremer, Johannes Knitza, Beatriz Merino-Barbancho
  - The authors compare Jev-style and generative systems on rheumatology examination items and diagnostic vignettes. Strong decision scores on examination items do not carry over to vignettes. Jev's likelihood of being correct at high confidence also differs between the two settings.

- **[Radiology Guideline-derived Decision Graph for Efficient Clinical Decision Support](https://arxiv.org/abs/2610.40327)**<br>📅 <strong>2026-10-29 15:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xuewen Zhou, Zhen Chen
  - GDGraph represents radiology guidelines as decision graphs and guides a System One model through bounded decisions. The authors compare this workflow with unstructured and graph-guided generative baselines on selected categories of incidental findings, reporting gains in accuracy and serving efficiency.

- **[PathoJev: Efficient Pathology Decisions from Shared Visual Context](https://arxiv.org/abs/2610.40752)**<br>📅 <strong>2026-10-29 16:14 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Chengyang Zhang, Wenchuan Zhang, Bo Li, Xinyu Liu, Jiaming Yang, Mengran Li, Jie Chen, Wei Ju, Yuhao Yi, Hong Bu, Jiancheng Lv
  - PathoJev reuses visual context when answering multiple pathology questions as typed judgments. The authors compare it with a whole-slide baseline and measure shared encoding across workload sizes. The strongest speedups are reported for the larger batches of questions.

- **[EDU-Jev Training System-One Decision Models for Education](https://arxiv.org/abs/2610.41079)**<br>📅 <strong>2026-10-29 23:48 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiazheng Li, Yulan He
  - EDU-Jev trains decision models at three sizes for rubric judgments and other educational assessment tasks. The 4B checkpoint leads the reported in-domain education comparison. The strongest commercial baseline remains more capable on general decision and reasoning tasks.

- **[Do Multimodal Models Decide Consistently on Equivalent Optical Spectra?](https://arxiv.org/abs/2611.00428)**<br>📅 <strong>2026-10-30 22:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ziyuan Wang, Genliang Zhu, Xiaobo Chen
  - This study tests scientific judgments on optical spectra presented in equivalent forms, and checks how models respond when essential evidence is missing. Its comparison includes decision-model baselines and reports that good performance on fully specified spectra can mask reliance on shortcuts.

- **[Decision-Centric Research: A Calibrated Decision Model and Benchmark for Scientific Agents](https://arxiv.org/abs/2611.00774)**<br>📅 <strong>2026-10-31 09:34 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shaoning Zeng, Wen Huang, Xinzhong Zhu, Yi Duan, Jianhang Zhou, Jianping Gou
  - DCRM studies scientific-agent decisions conditioned on the current research state. Its benchmark evaluates prediction and uncertainty, including conformal sets that can retain several candidates. In the reported holdout, using the state reduces set size at similar empirical coverage.

- **[Zero-shot evaluation of open vision-language models as System 1 decision models on radiology tasks](https://arxiv.org/abs/2611.01631)**<br>📅 <strong>2026-11-01 06:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Bradley J Erickson, Sara Salehi
  - The paper uses single-token readouts from open vision-language models to evaluate zero-shot System One-style decisions in radiology. It compares response bias and accuracy among tasks. No tested model leads on every task, and answer preferences can be strongly task-specific.

- **[EarthJev: Calibrated, Non-Generative Answers to Natural-Language Questions about Sentinel-2 Land Cover](https://arxiv.org/abs/2611.02096)**<br>📅 <strong>2026-11-01 18:11 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Domenico Benfenati, Antonio Maria Rinaldi, Cristian Tommasino
  - This EarthJev model answers Sentinel-2 land-cover questions by selecting among supplied options and estimating probabilities. Ablations test how much non-RGB spectral information contributes. The authors report both calibration and accuracy, including a comparison with end-to-end visual adaptation.

- **[A decision-only model as a low-cost judge of medical AI answers](https://www.medrxiv.org/content/10.64898/2026.10.30.26366939)**<br>📅 <strong>2026-11-02</strong> · medRxiv preprint · <strong>Tier B</strong> · Mahmud Omar, Benjamin S. Glicksberg, Ankit Sakhuja, Yiftach Barash, Alexander W. Charney, Eyal Klang, Girish N. Nadkarni
  - This medRxiv study evaluates Jev as a low-cost judge of generated medical answers against other models and expert agreement. The authors report lower serving cost and competitive results on many evaluated tasks, with weaker performance on some error-detection tests.

- **[Every Pixel Is an Option: A System One Model for Medical Ultrasound Biometry](https://arxiv.org/abs/2611.03360)**<br>📅 <strong>2026-11-02 16:09 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Moein Heidari, Junbo Rao, Yudan Chen, Yasamin Medghalchi, River Jiang, Wenjin Chen, David J. Foran, Jasmine Grewal, Ilker Hacihaliloglu
  - Kev-Bio frames ultrasound landmark localization as a decision over image positions. The authors evaluate the approach for several anatomical views and measure both landmark detection and downstream biometry. The comparison is confined to the datasets and tasks studied.

- **[EO-Jev: Decision Model for Earth Observation](https://arxiv.org/abs/2611.03371)**<br>📅 <strong>2026-11-02 16:16 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Mohamed Atef Abouelhadid, Diaa Addeen Abuhani, Muhammad Akhtar Munir, Fahad Shahbaz Khan, Salman Khan
  - EO-Jev adapts general-purpose decision models to Earth observation and evaluates trade-offs with general ability. The paper tests perception, option consistency and calibration under shifts. The reported adapted models remain challenged by quantitative questions and distribution changes.

- **[Structured Clinical Memory as Context for Probabilistic Decision Models: A Synthetic Evaluation with Jev](https://arxiv.org/abs/2611.04101)**<br>📅 <strong>2026-11-03 00:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jash Sayani, Gaurang Karwande, Achinth Bharadwaj
  - This synthetic pilot tests Jev with structured patient memory as the input state. It compares decisions under alternative context configurations. The labels come from one author and the memory represents an optimistic upper bound, limiting implications for clinical practice.

- **[A Systematic Comparison of In-Context Learning Strategies for Peptide Property Prediction in Low-Data Regimes](https://arxiv.org/abs/2611.09994)**<br>📅 <strong>2026-11-03 09:02 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jiantao Zhao, Andrei Voinea, Mathijs F.J. Mabesoone
  - This benchmark compares typed decision models, language models and tabular foundation models with gradient-boosted trees on low-data peptide property classification. The authors report performance that varies by task and no significant overall advantage over classical baselines for in-context learning.

- **[EarthJev: Efficient Visual Evidence Acquisition and Decision for UHR Remote Sensing Understanding](https://arxiv.org/abs/2611.10005)**<br>📅 <strong>2026-11-04 09:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Pengyu Dai, Yao Zhang, Jian Song, Junjue Wang, Yafei Ou, Yuzeng Chen, Junshi Xia, Hongruixuan Chen, Naoto Yokoya
  - This EarthJev system decides where to acquire additional visual evidence for ultra-high-resolution remote-sensing questions. Experiments with several frozen answering models compare the controller with single-pass baselines. The reported gains use model-specific fitting and calibration.

- **[GeoJeV: Unified Spatial Probability for Training-Free Efficient Evidence Acquisition in Ultra-High-Resolution Remote Sensing](https://arxiv.org/abs/2611.08879)**<br>📅 <strong>2026-11-06 02:12 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xinyi Niu, Lingfeng Chen, Jiehua Zhang, Panhe Hu, Li Liu, Zhen Liu, Yongxiang Liu
  - GeoJeV uses spatial probability to choose which regions of very high-resolution remote-sensing imagery merit additional inspection. The authors report accuracy and latency across three benchmarks, comparing with both a single-pass base model and a slower evidence-acquisition method.

- **[TrialJev: Open-Weight Single Pass Eligibility Scoring for Patient Trial Screening](https://arxiv.org/abs/2611.10145)**<br>📅 <strong>2026-11-06 19:11 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Omar Ibrahim, Grant Hamblin, Benjamin Haibe-Kains
  - TrialJev scores patient–trial eligibility with an open single-pass architecture. The study measures ranking, decision accuracy and inference cost on synthetic cases. The authors position it as a prioritization aid for subsequent review and report timing for their specific implementation.

- **[NuJEV: Structured Visual Judgments for Consistent Nuclei Quantification](https://arxiv.org/abs/2611.11359)**<br>📅 <strong>2026-11-08 13:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yonghuang Wu, Pengfei Wang, Zhenyang Liang, Yize Ma, Pengfei Song, Guoqing Wu, Jinhua Yu
  - NuJEV combines candidate localization with typed visual judgments to count and classify cell nuclei. The authors evaluate dense images and natural-language requests and compare visual adaptation with matched alternatives. Measurements include localization and counting errors rather than only answer accuracy.

- **[S1Pert: Scalable Target-Specific Gene Response Prediction with System-One Intelligence](https://arxiv.org/abs/2611.17705)**<br>📅 <strong>2026-11-13 03:35 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xiaoqi Sheng, Hou wang, Yan Liang, Yutong Li, Wenhao Du, Tinghe Zhang, Jiawen Liu, Hongmin Cai
  - S1Pert evaluates a System One-inspired model in a gene-response prediction benchmark. The authors compare predictive performance and inference efficiency across held-out cellular contexts, using historical response tendencies as a reference for assessing generalization in the studied datasets.

- **[Can decision models extract clinical data from cancer pathology reports? An evaluation of accuracy, calibration, and failure modes](https://arxiv.org/abs/2611.20129)**<br>📅 <strong>2026-11-15 16:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Indranil Mallick, Paromita Roy
  - The study measures accuracy, calibration and latency when decision models extract fields from cancer pathology reports. Explicit textual fields and numeric measurements present different difficulties. The paper reports field-specific errors and emphasizes validating the configuration used in the evaluation.

- **[MedJev: A System One Vision-Language Decision Model for Fast and Effective Medical Image Understanding](https://arxiv.org/abs/2611.20992)**<br>📅 <strong>2026-11-16 12:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Fan Zhang, Hao Wu, Jinyang Wu, Hongyu Qu, Zheng Lian, Dongfu Yin, Qingsong Wen, Pheng-Ann Heng
  - This MedJev model uses a vision-language backbone for single-pass decisions on medical images. The authors compare accuracy and end-to-end inference time with general and medical vision-language baselines. Its scope differs from the earlier MedJev zero-shot benchmark paper.

- **[Title and Abstract Screening for Systematic Reviews with Jev, a Decision Model: Comparison with Generative Large Language Models](https://www.mdpi.com/2078-2489/17/11/1160)**<br>📅 <strong>2026-11-17</strong> · Information · <strong>Tier B</strong> · Kentaro Matsui, Yoshikazu Takaesu
  - The authors compare Jev with generative models on title and abstract screening for two reviews of bipolar disorder treatments. Jev retained every ultimately included report in the tested runs at low measured cost. It still excluded some records flagged for human full-text review.

- **[Right Diagnosis, Unsafe Route: Auditing Clinical AI Decision Trajectories and Corrective Oversight for Validity and Potential Harm](https://arxiv.org/abs/2611.22612)**<br>📅 <strong>2026-11-17 11:26 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Guanqiao Chen, Wei Jiang, Shu Zhang, Qian Lin, Guanxu Yu, Siran Li, Chunhui Wang, Tianyu Shi
  - The study evaluates clinical decision trajectories alongside their final diagnoses and compares different forms of oversight. Correcting an early error can improve the next decision while introducing new risk later in the trace. The evaluation distinguishes final accuracy from trajectory safety.

- **[SlideJev: Order-Stable and Tissue-Grounded Jev Decisions for Whole-Slide Pathology](https://arxiv.org/abs/2611.22879)**<br>📅 <strong>2026-11-17 14:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Lei Wu, Jiashuai Liu, Di Zhang, Chunze Yang, Jiusong Ge, Junbo Lu, Yongqi Liang, Wenjie Zhao, Ni Zhang, Chen Li, Zeyu Gao, Qidong Liu
  - SlideJev answers typed questions about whole-slide pathology using tissue grounding and order-stable candidate processing. The evaluation changes option order and uses mismatched or missing images as controls. The reported accuracy gains are tied to using the appropriate tissue evidence.


<a id="networks-databases-engineering"></a>

## 🌐 Networks, Databases & Engineering

Communication networks, edge control, semantic databases, physical infrastructure, and engineering design and diagnosis.

### 2026

- **[Replacing Large Language Models with Jev Decision Models for Low-Latency Edge Service Orchestration](https://arxiv.org/abs/2609.22753)**<br>📅 <strong>2026-09-19 04:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Delong Li, Xu Wang, Haochen Gong, Rui Lang, and Guangsheng Yu
  - This revised study integrates Jev into edge-service admission through four to eight bounded intent fields, comparing it with two local decision models and three hosted LLMs on 8,280 verified requests. It reports lower decision latency across thirty-three conditions, while wide contracts expose accuracy limits and caching reduces the advantage. The paper is retained separately from the companion 6G study for its expanded admission experiments and explicit service-completion measurements.

- **[Intent Interpretation at RIC Timescales: Jev Decision Models versus Large Language Models in 6G Open RAN](https://arxiv.org/abs/2609.23136)**<br>📅 <strong>2026-09-19 17:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Delong Li, Xu Wang, Haochen Gong, Rui Lang, and Guangsheng Yu
  - The revised study compares Jev and other decision models with generative LLMs on RAN intent interpretation, closed-loop simulation, and a real A1/E2 path. Jev meets the one-second budget on 99.8% of calls, whereas slower interpreters miss deadlines or saturate queues; radio-performance differences at the base point remain unresolved. It is included for separating interpretation latency, controller capacity, and downstream network outcomes rather than assuming faster decisions improve every metric.

- **[Type-Safe Decision Frameworks for Agentic 5G Control: A Theory-Driven Testbed Characterization of Where They Can Be Applied](https://arxiv.org/abs/2609.33689)**<br>📅 <strong>2026-09-27 15:51 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Michail-Alexandros Kourtis and George Xilouris
  - The authors compare hosted Jev, an adapted Laya encoder, and AnyJev on an Open5GS/UERANSIM control testbed, expressing deployment requirements as timeliness, type, and risk predicates. Laya is faster but often repeats its training answer when questions change; Jev and AnyJev interpret those changes better at different resource costs. The paper is included for connecting typed-model reliability to measurable network-control requirements rather than equating valid outputs with correct control.

- **[A First Glance at Jev for Network Traffic Classification: Accuracy, Processing Time, and Cost](https://arxiv.org/abs/2610.00376)**<br>📅 <strong>2026-09-30 08:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shenghe Xu and Lifan Mei
  - This study classifies ten network-application labels from the first ten packets of each flow across 52,000 records and twenty-six collection weeks. In-context examples improve Jev substantially, but trained tree ensembles remain more accurate every week. A small paired comparison finds lower Jev latency and cost than a reasoning LLM. It is included as a useful negative-result application, with unequal supervision and service configurations preventing a single-cause explanation of the gaps.

- **[Prune First, Decide Fast: Scalable Semantic Query Processing with JEVDB](https://arxiv.org/abs/2610.02046)**<br>📅 <strong>2026-10-01 16:55 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhengle Wang, Hanxu Yan, Fuheng Zhao, and Chunwei Liu
  - JEVDB integrates typed decision models into semantic SQL filters, joins, classification, and ranking, escalating uncertain cases to generative models. Relational semijoin reduction and semantic screening prune candidate pairs before expensive evaluation. Tests on SemBench and a TPC-DS-derived join workload report competitive quality at lower latency and cost. It is included as a Jev-based database architecture, with measured gains arising from pruning, reuse, and routing as well as the decision model.

- **[HydroJEV: A one-second, training-free screen for cyber-attack and fault attribution in water distribution networks](https://arxiv.org/abs/2610.02048)**<br>📅 <strong>2026-10-01 16:57 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Tianwei Mu, Shengyan Jiang, Mingzhe Yuan, Qing Luo, Min Xiao, Wenhong Wang, Jun Li, and Manhong Huang
  - HydroJEV uses Jev for first-pass attribution of water-network alarms to attacks, physical faults, normal transients, or sensor faults. Four sealed rounds on simulated EPANET data and transfers to two further networks test a rule-confirmed benign gate that avoids 35–38% of LLM reviews without the reported accuracy loss. It is included as a constrained infrastructure triage application, while the evidence concerns simulated incidents rather than operational utility deployment.

- **[System One Models for Wireless Decision-Making:Applications and Performance Evaluation](https://arxiv.org/abs/2610.04345)**<br>📅 <strong>2026-10-03 07:13 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Masoud Rahimi, S. M. Matin Alemohammad, Hamid Behroozi, and Mahdi Nouri
  - This wireless-control study compares Jev with generative models and conventional methods on antenna selection, intent-conditioned RAN slicing, and edge orchestration. Jev reduces observed decision latency, but stronger task-specific methods retain quality advantages in antenna selection, and faster calls do not consistently shorten service completion. It is included as a bounded-control application that separates interface speed, action quality, and end-to-end network performance.

- **[SoK: Semantic Decision Engines in Network Control Loops](https://arxiv.org/abs/2610.06425)**<br>📅 <strong>2026-10-05 14:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Delong Li, Chen Li, Xu Wang, Haochen Gong, Rui Lang, and Guangsheng Yu
  - This review organizes 139 paper families around decision interfaces, execution paths, and responsibility for verification, finding little matched evidence behind many control-loop timing claims. Bounded tests involving Jev and other engines show how queuing, feasibility, and completion checks can reverse deployment verdicts. It is included as a Jev-relevant systems evidence audit, with the demonstrations illustrating failure mechanisms rather than estimating their prevalence across networks.

- **[When Plans Change Answers: Formalizing Cost-Accuracy Optimization for Semantic Queries](https://arxiv.org/abs/2610.08089)**<br>📅 <strong>2026-10-06 10:19 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Kyoungmin Kim
  - This revised theoretical study uses Jev-style calibrated confidence to formalize semantic-query plans whose policies change both cost and answers. It weights decision errors by their contribution to query outputs, distinguishes bag and set semantics, and derives plan-equivalence and optimization results. It is included as a direct extension of Jev-based database reasoning, with synthetic simulations and explicit calibration assumptions rather than evaluation on deployed query engines.

- **[NL2Hull: A Natural Language-Driven Constrained Ship Design Decision Framework](https://arxiv.org/abs/2610.09896)**<br>📅 <strong>2026-10-07 11:55 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Wenhua Huo, Fenglei Han, Wangyuan Zhao, Jialin Wu, and Jiayi Han
  - NL2Hull maps natural-language ship-editing requests to typed action probabilities, executable free-form deformation, and geometric constraint checks. Its specialized Chip model is evaluated against Jev and language models on 43,496 questions and reports strong decision and action accuracy. It is included as a Jev-comparable engineering decision framework, while sequential edits expose constraint-composition failures and the interface does not yet predict continuous deformation magnitudes or spatial extents.

- **[Where Can a Decision Model Diagnose HVAC Faults? Reasoning Demand, Physical Representation, and Robustness Under Shift](https://arxiv.org/abs/2610.09937)**<br>📅 <strong>2026-10-07 12:23 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Wooyoung Jung
  - This study compares Jev, open language models, and a supervised model on 128 HVAC fault days from four real-equipment datasets, varying physical features, topology, and deployment conditions. Jev diagnoses faults supported by individual physical features but struggles when operating context is required; under shifts it is more stable than the supervised comparator. It is included as a bounded diagnostic application, with weak detection and probabilities requiring correction limiting autonomous use.
- **[Typed Decision Models on Tabular Data](https://arxiv.org/abs/2610.19536)**<br>📅 <strong>2026-10-14 03:54 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Baowen Zhang, Hangting Ye, Hongyuan Zha
  - This tabular-data audit compares four decision models and three LLMs on classification, verification and anomaly detection under twenty-one content-preserving rewrites. Decision models achieve competitive accuracy at lower cost, but no tested model is robust to table organization. At least one rewrite changes a third or more of each model's row decisions, exposing interface sensitivity.

- **[One Pretrained Decision Model Is Enough for Training-Free Generalist Graph Anomaly Detection](https://arxiv.org/abs/2610.30777)**<br>📅 <strong>2026-10-22 05:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xinyu Zhao, Qingyun Sun, Ziwei Zhang, Tianchen Zhu, Daqing Li, Jianxin Li
  - Jev-GAD uses a pretrained decision model to judge node-level graph evidence and fuses its rankings with statistical anomaly scores. Tests across citation, social and review graphs evaluate whether the approach can generalize without fitting parameters to each anomaly dataset.

- **[OneCodeReviewBench: Typed Decisions for Code Review and Search](https://arxiv.org/abs/2610.33389)**<br>📅 <strong>2026-10-24 01:40 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mohamad Mohebifar, Alex Bit
  - OneCodeReviewBench evaluates bounded software-review and code-search decisions against engineered references and a smaller reviewer-checked subset. The reported experiments cover typed judgments and evidence retrieval with scope and agreement limitations. Repository-scale generalization remains outside the evidence.

- **[Benchmarking System One Models for Time-Series Decision Making: A Case Study of Jev](https://arxiv.org/abs/2610.33410)**<br>📅 <strong>2026-10-24 02:58 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jianye Wang, Kexin Zhang, Jiayin Xiong, Hao Xue
  - This study evaluates hosted Jev on time-series tasks covering event prediction, numerical classification and market direction. Jev performs unevenly across the tasks, and candidate rankings can be stronger than final decisions. The authors identify temporal representations as a limitation worth testing.

- **[DFIP: Decision-Focused Inference Path for System One Models](https://arxiv.org/abs/2610.36804)**<br>📅 <strong>2026-10-27 08:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ismail Pelaseyed, Alan Zabihi
  - DFIP investigates serving optimizations for System One model inference, comparing fixed-shape replay with diverse request arrivals. Some optimizations accelerate narrowly matched workloads, while mixed traffic exposes latency, numerical and reliability limitations. The reported gains depend on serving conditions.

- **[SatOps-Decision: Low-Latency Discriminative Decisions for Onboard Satellite Communication Operations](https://arxiv.org/abs/2610.38697)**<br>📅 <strong>2026-10-28 19:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Lifan Mei, Yuxuan Li, Jiaxian Tu, Shenghe Xu
  - SatOps-Decision trains a compact decision model for bounded satellite communications operations. Local timing and accuracy experiments compare decision-only models with a generative backbone and use hosted Jev versions as accuracy references. The paper reports latency for the tested hardware and implementation.

- **[Flide: Accelerating Decision Inference with Exact State Forking](https://arxiv.org/abs/2610.42148)**<br>📅 <strong>2026-10-30 17:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Bobo Li, Jiajia Song, Hao Fei, Wynne Hsu, Mong Li Lee
  - Flide specializes decision serving by sharing the computation of common input state across choices. The study compares throughput and agreement with a numerical reference against general inference engines. Reported speedups depend on how much candidate inputs can share.

- **[DIMWIT: Directly Invoking Models Without Intensive Tuning](https://arxiv.org/abs/2611.01463)**<br>📅 <strong>2026-11-01 02:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Saarth Deshpande, Neeraja J. Yadwadkar, Venkat Arun
  - DIMWIT uses model calls for individual resource-management decisions and evaluates the trade-off between execution time and output quality. The authors report faster encoding in one video workload with a small drop in the measured perceptual quality score.

- **[Honest Small Decision Models for Finance: Scale, Specialization Collapse, and Mixed-Corpus Remediation](https://arxiv.org/abs/2611.03755)**<br>📅 <strong>2026-11-02 11:18 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ajitabh Kumar
  - The authors train compact decision models for financial policy and realized outcomes. The study measures specialization costs across model sizes and tests mixed training data. Outcome predictions can be well calibrated around the base rate while carrying little discrimination.

- **[Thinking Fast, Trading Late: System One Decision Models vs the Market](https://arxiv.org/abs/2611.03985)**<br>📅 <strong>2026-11-02 21:24 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Amir Dehkordi, Alireza Kargarzadeh, Nariman Khaledian, Navid Parvini, Sid Ghatak, Arman Khaledian
  - The paper tests decision models on news-based market judgments under a preregistered protocol. Strategy results are evaluated after costs and robustness adjustments. The authors also find that identity masking can leave enough context for models to recover which company is involved.

- **[Reproducible LoRA Inference Through Deterministic Split-K Reduction](https://arxiv.org/abs/2611.10334)**<br>📅 <strong>2026-11-07 00:03 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Dhayaneshwar Balusamy, Ankur Mohan
  - The authors measure reproducibility in LoRA serving when different numerical reduction schedules propagate differences into decisions. A deterministic implementation maintains much of the latency advantage in the tested hardware setting. The study connects numerical variation to observable changes in outputs.

- **[Track or Follow? A Jev-Compatible Multi-Agent Trading System When Web News Lags the Market](https://arxiv.org/abs/2611.10414)**<br>📅 <strong>2026-11-07 02:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yebo Feng, Guangyan Gan, Liangrui Pan, Ruichao Liang, Cong Wu, Jiahua Xu, Yang Liu
  - This Jev-compatible trading simulation examines whether web news provides information beyond numerical features when publication lags market events. Its confirmatory test finds no incremental ranking information at the specified horizon. The paper also examines how decision records help audit results.

- **[The Noise Floor of a Quantization Comparison: Engine, restart, batch and kernel drift, measured against 8-bit and 4-bit effects in two decision models](https://arxiv.org/abs/2611.15671)**<br>📅 <strong>2026-11-11 16:15 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Aleks Blagojevich, Trevor Sunderland
  - The study compares quantization effects with output drift from engines, restarts, batches and kernels in two decision models. Aggregate accuracy can stay close while individual answers change. The authors report per-record outputs to support comparisons below the benchmark-average level.

- **[LuthorSQL: A One-Pass Text-to-SQL Model as System 1 for a Slower LLM Agent](https://arxiv.org/abs/2611.17780)**<br>📅 <strong>2026-11-13 05:44 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ibrahim Memon, Armin Karamzade, M. Hanif Jhaveri, Roy Fox
  - LuthorSQL generates a candidate SQL query with a short decision-oriented path for use by a slower model. The study compares performance on standard and altered database schemas and probes memorization of public reference queries. Newly released databases provide a separate transfer check.

- **[Budgeted Decision-Model-Guided Joint-Action Search for Satellite Edge Computing](https://arxiv.org/abs/2611.19225)**<br>📅 <strong>2026-11-14 07:35 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ziming Liu, Minghao Sun, Ran Tao, Xiaoli Chu
  - This study uses a decision model to guide budgeted joint-action search for satellite edge-computing workloads. The simulation compares solver time and completion delay with several optimization baselines. Reported gains apply to the tested offloading scenarios and computational budget.

- **[SpecSearch: Towards Hardware-Aware Efficient Speculative Decoding](https://arxiv.org/abs/2611.22296)**<br>📅 <strong>2026-11-17 06:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Selin Yildirim, Ali Zeyrek, Deming Chen
  - SpecSearch compares search and Jev-based prediction of efficient speculative-decoding settings across hardware. The decision-guided version approaches the throughput from full measurement while avoiding a held-out hardware calibration stage in the reported experiments.

- **[When Do Typed Decision Models Work in Transportation? Evidence from Travel Choice and Traffic Signal Control](https://arxiv.org/abs/2611.22926)**<br>📅 <strong>2026-11-17 15:24 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hongyang Zhang, Boyuan Deng, Siyuan Feng, Kai Chen, Junbo Zhang
  - The paper evaluates typed decision models in two transportation settings, travel choice and traffic signal control. Experiments assess how input descriptions and task requirements affect zero-shot choices. The authors report distinct limitations and opportunities for the two applications.


<a id="social-science-human-decisions"></a>

## 👥 Computational Social Science & Human Decisions

Social-science annotation and replication, cultural values, population simulation, organizational judgment, and hiring decisions.

### 2026

- 🔥 **[Evaluating Decision Models for Text Annotation in Computational Social Science](https://arxiv.org/abs/2609.24574)**<br>📅 <strong>2026-09-21 13:41 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hazem Ibrahim and Yasir Zaki
  - This preregistered evaluation compares Jev 1.13 and open decision models with nineteen language models on 7,977 items from eighteen social-science classification tasks. Jev trails the best per-task LLM on most evaluated tasks but is far cheaper and often better calibrated than verbalized LLM confidence. The paper provides a substantial Jev accuracy, calibration, routing, and cost study for research annotation.

- **[KITE: Scaling Jev Population Experiments with Sparse Flagship Calibration](https://arxiv.org/abs/2609.27535)**<br>📅 <strong>2026-09-23 08:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Hengyu Li
  - KITE queries a typed Jev behavioral kernel once per unique state, reuses the resulting table for large simulated populations, and reserves a stronger model for sparse paired calibration anchors. Experiments over social-science studies report improved intervention-effect estimates and conservative uncertainty coverage while executing one million agents locally from cached decisions. The paper is included as a Jev-based simulation architecture, with validity explicitly tied to sparse human–model discrepancy evidence rather than Monte Carlo scale alone.

- **[The Argument and the Letterhead: Source-Position Coherence in AI Evaluation](https://arxiv.org/abs/2609.35286)**<br>📅 <strong>2026-09-28 14:34 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Michele Loi
  - This study varies source attributions while holding policy arguments fixed to test whether evaluators conflate argument quality with source-position coherence. A later Jev supplement finds smaller interactions under its adopted reference threshold, but uses a distinct rubric and an interrupted collection. The work is included because it explicitly measures Jev judgments; its evidence does not support an equal-condition superiority claim over the main experiments' generative evaluators.

- **[Calibrated to Whom? Persona and Language Effects on Cultural Values in JEV](https://arxiv.org/abs/2609.36399)**<br>📅 <strong>2026-09-28 23:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Bushra Asseri and Abdulaziz Asseri
  - This audit collects 288,000 Jev answers to a cultural-values questionnaire across Saudi and American personas, English and Arabic, and eight request designs. Responses are highly repeatable, but the Saudi-US difference shrinks in Arabic and reverses for long-term orientation; a language-cross experiment attributes the attenuation to item language. It is included as a direct survey-behavior study, where persona responsiveness and repeatability do not establish faithful representation of human populations.

- **[Judgement in the Age of Jev: From Evaluation Scarcity to Evaluation Abundance](https://arxiv.org/abs/2610.01231)**<br>📅 <strong>2026-10-01 07:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Richard Hill
  - This perspective uses Jev to examine a conditional Jevons hypothesis: cheaper machine evaluation may increase its organizational use when latent demand is high and complementary costs are manageable. It distinguishes evaluation, judgment, and authorization, and discusses shared errors, flawed rubrics, and shifting decision rights. It is included as a Jev-specific conceptual research paper, with the proposed economic and organizational effects framed as hypotheses rather than measured adoption outcomes.

- **[Skill Selection, Measured](https://iambraun.com/jevreports/skill-selection/)**<br>📅 <strong>2026-10-03</strong> · Independent technical evaluation · Updated report · <strong>Tier B</strong> · David G. Braun
  - This matched rerun compares Jev, Laya, generative models, probability readouts, embeddings, and lexical matching over 8,916 skill-posting decisions per arm. On 720 model-adjudicated pairs, Jev performs strongly on random cases, while hard-case differences from leading readouts are unresolved. It is included for testing batching, parser failures, and selection bias, with only twelve job postings and model-generated reference labels constraining the conclusions.

- **[JEV versus LLMs: Accuracy, Cost and Calibration on Seven Political Science Replications](https://arxiv.org/abs/2610.06625)**<br>📅 <strong>2026-10-05 16:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Steven Denney and Matthew DiGiuseppe
  - This study evaluates Jev across seven political-science replications against published human or model annotations and current commercial and open LLMs. Jev often approaches their accuracy, but has no cost advantage over the evaluated commercial model at batch pricing; calibration improves on one comparator without consistently beating the open model. It is included as a domain replication study showing how pricing assumptions and probability readouts change the claimed advantage.

- **[Jack & Jill & Jev: Cutting candidate screening costs by 88%](https://typesafe.ai/blog/jack-jill-jev-case-study)**<br>📅 <strong>2026-10-07</strong> · TypeSafe AI technical case study · <strong>Tier A</strong> · TypeSafe AI
  - TypeSafe reports a paired offline comparison of Jev and Gemini candidate screening over 150 live hiring roles. Jev retains a similar proportion of candidates later requested by hiring managers at lower reported cost and median completion time; the recall difference is not statistically significant. It is included for its stated sampling and evaluation method, with vendor-reported results, historically selected labels, and projected annual savings distinguished from independently measured deployment outcomes.

- **[Jevolution: A Framework for Studying Communication and Collective Dynamics in AI Agents](https://arxiv.org/abs/2610.14449)**<br>📅 <strong>2026-10-10 01:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xirui Huang, Nikhil Hooda, and Utkarsh Gupta
  - Jevolution provides an instrumented predator-prey simulator separating world dynamics, asynchronous inference, controller adapters, and experimental records. A Jev-controlled communication study compares six paired habitat seeds and finds an abundance difference whose interval includes zero. It is included as a research framework with a completed Jev experiment, while distinguishing software checks and a small inconclusive case study from evidence of emergent language, adaptive selection, or ecological validity.

- **[Probable but Not Valid: A Psychometric Audit of Decision Models as Synthetic Survey Respondents](https://arxiv.org/abs/2610.14912)**<br>📅 <strong>2026-10-10 13:34 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mantas Lukauskas and Viktorija Šarkauskaitė
  - This psychometric audit compares fourteen decision models, including Jev, with 47 generative models on a Lithuanian organizational survey. Probability vectors better reproduce aggregate item distributions than rounded answers, yet every decision model forecasts individuals worse than other respondents' answer frequencies. It is included as a direct synthetic-respondent evaluation, with limited profile information and a similarity metric that cannot reliably rank models against a second small human sample constraining interpretation.

- **[Jev-ToM: Evaluating Theory of Mind in Typed Decision Models](https://arxiv.org/abs/2610.18610)**<br>📅 <strong>2026-10-13 15:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Kawai Chung, Chunkit Chan, Yuxuan Liu, Yauwai Yim, Xi Yang, Wenbin Hu, Huihao Jing, Chiu Yeung Tang, Changxuan Fan, Ki Sen Hung, Tsun On Kwok, and Haoran Li
  - Jev-ToM evaluates five typed decision models and seven generative baselines on 11,117 English theory-of-mind questions from nine benchmarks. Jev reaches 73.2% source-balanced accuracy and performs strongly across capability groups, but confidence selection, attached reasons, and expanded candidate sets have task-dependent effects. It is included as a direct social-reasoning evaluation, with benchmark selection and separate resource measurements limiting claims about collaborative assistants in deployment.
- **[Are AI Decision Models Biased? A Case Study of Jev](https://arxiv.org/abs/2610.19619)**<br>📅 <strong>2026-10-14 05:42 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ilaria Imperatrice, Taisia Kameneva, Adam Eric Greenberg, Alessandro Romano
  - This audit measures cognitive and demographic biases in 41,500 Jev responses and follows up with 15,000 responses on conjunction tasks. Selected answers often avoid familiar human biases, yet irrelevant numbers, option order and probability-rule violations expose weaknesses. The tested pricing scenario shows small demographic differences, which should not be generalized to broad fairness guarantees.

- **[S$^2$-MAS: A Society-Scale Multi-Agent Simulation Framework with a 500-Million-Persona Resource](https://arxiv.org/abs/2610.27746)**<br>📅 <strong>2026-10-20 07:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yang Li, Yike Wang, Di Wan, Chujun He, Zongsi Xu, Yitao Yu, Shuai Zhong, Minghao Pan, Quanfeng Lu, Xiyu Chen, Sheng Zhong, Deng Binjie, Yichen Guo, Zhenwei Guo, Hou Jun, Kunhan Guo, Weihao Lin, Tuo Zhou, Hai Liu, Chenwei Wu, Jianyuan Zhong, Xilin Dai, Ye Luo
  - This household simulation combines a large synthetic persona resource with learned decision policies and explicit financial accounting. The authors evaluate prospective consumption predictions and sensitivity to information timing. Lower absolute error in one comparison coexists with an underestimated population mean.

- **[When the Top Answer Decides: Gender Bias in Decision Models](https://arxiv.org/abs/2610.39747)**<br>📅 <strong>2026-10-29 10:06 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yeb Havinga
  - The authors audit demographic bias in hosted Jev and other decision models. They compare disparities in selected answers with disparities in the full probability distribution and find that the two views can disagree. Students of Jev also differ from it on this audit.

- **[When Disclosure Is Compulsory: Evaluating Ride-Hailing Rebalancing Policies with Self-Interested LLM Driver Agents](https://arxiv.org/abs/2610.41132)**<br>📅 <strong>2026-10-30 01:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xinyu Wang, Andres Fielbaum
  - This ride-hailing simulation uses decision-capable driver agents to evaluate rebalancing under compulsory disclosure. Driver responses alter economic and service outcomes relative to full compliance. Simulated results depend on the modeled driver incentives and the tested platform policies.

- **[Swap, Replicate, Read the Mass: A Protocol for Auditing Demographic Bias in System One Decision Models](https://arxiv.org/abs/2611.00496)**<br>📅 <strong>2026-10-31 00:36 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Alejandro Mozo Quesada, Sergio Gálvez Rojas, Francisco López Valverde
  - The authors audit demographic disparities in System One models while varying question framing and option order. They distinguish final selections from probability mass and use multiple runs. The observed disparities can depend strongly on both presentation and how decisions are aggregated.

- **[S1CogBench: What System One Decision Models Can and Cannot Do on Cognitive Experiments](https://arxiv.org/abs/2611.00911)**<br>📅 <strong>2026-10-31 13:09 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Dengzhe Hou, Kazunori D Yamada
  - S1CogBench evaluates System One models on tasks drawn from cognitive experiments. The study separates capability differences from latency associated with output generation and includes matched short-output comparisons. Its task-level results characterize how far the decision format generalizes across tested cognitive settings.

- **[Fast, Cheap, and Fair? Evaluating Decision Models](https://arxiv.org/abs/2611.04510)**<br>📅 <strong>2026-11-03 08:34 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Muhammad Uzair Ul Haq, Davide Rigoni, Alessandro Sperduti, Flavia Fabris
  - This hiring audit measures how counterfactual changes to CVs affect decision-model ratings and shortlists. It benchmarks those changes against variation from names and typos, and measures service costs. The observed disparities are tied to the tasks and model configurations tested.

- **[Decision Models as Scalable Economic Surrogates that Capture Human Variation](https://arxiv.org/abs/2611.05553)**<br>📅 <strong>2026-11-03 19:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Maxime Saxena, Fabio Caccioli, R. Maria del Rio-Chanona
  - The authors compare decision and generative models as surrogates for human choices in economic games. They assess variation across people alongside aggregate agreement and inference costs. Decision models capture more of the tested variation while reducing the cost of repeated simulation.

- **[TACT: A Pragmatic Approach to Qualitative Analysis with an AI Council](https://arxiv.org/abs/2611.05702)**<br>📅 <strong>2026-11-03 22:30 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Rudrajit Choudhuri, Christian Bird, Carmen Badea, Anita Sarma
  - TACT combines several AI roles for qualitative analysis, using decision judgments as part of the workflow. It compares the outputs and costs of lighter and fuller configurations and discusses how researchers can inspect and validate thematic findings.

- **[Same Facts, Different Remedy: Linguistic Profiling and Arbitrariness in LLM and System One Decisions](https://arxiv.org/abs/2611.08995)**<br>📅 <strong>2026-11-06 05:10 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Colin Priest
  - This audit compares the effect of stylistic rewrites on individual decisions and aggregate group disparities in generative and System One models. Auditors check whether rewrites preserve material facts. Decision instability persists even when those checks do not flag a rewrite.

- **[Nudging Decision Models: Do Digital Nudges Steer Fast, Generation-Free AI Agents?](https://arxiv.org/abs/2611.09264)**<br>📅 <strong>2026-11-06 10:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Sascha Kaltenpoth, Haya Halimeh, Kevin Bösch, Oliver Müller
  - The authors compare how digital nudges affect generation-free decision agents and reasoning-capable language agents. They find the strength of particular tested nudges depends on the agent class. The results concern behavior on the paper's choice tasks.

- **[Can Model Answer Probabilities Represent Survey Populations? Conditional Prediction and Joint Validity in Jev Survey Simulation](https://arxiv.org/abs/2611.15576)**<br>📅 <strong>2026-11-11 14:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zengqing Wu, Chuan Xiao
  - The authors evaluate whether Jev probabilities can represent population survey responses, distinguishing conditional predictions from joint events. Marginal checks can constrain possible results, while joint validity requires linked answers. Evidence is limited to selected binary questions and one model version.


## Search and Verification Notes

**Cutoff:** 20 November 2026 (Asia/Shanghai).

**Organization:** the list is grouped by primary research domain and contains 403 entries as of the 20 November verification cutoff: 390 academic papers and 13 technical articles or reports.

The 20 November update adds **204 academic papers** after searching for work from 18 October through 20 November 2026. It uses original arXiv submission histories and publisher or DOI metadata, with abstracts and targeted full-text checks to establish relevance. Deduplication uses arXiv IDs, DOIs and normalized titles. The new records include 197 arXiv preprints, 4 preprints from other sources and 3 published articles. Unchanged entries retain their earlier verification. Search coverage is limited by indexing and accessible primary sources. See the [20 November verification record](outputs/jev-literature-2026-11-20.json).

<!-- review-marker-18 -->
The 18 October update adds **25 academic papers** and revises **4 retained entries**, after screening 32 new candidates and excluding 7 unrelated keyword hits. The collection now contains **185 arXiv preprints, one ResearchGate preprint and 13 technical sources (199 entries)**. Metadata and abstracts were checked through the official arXiv API, with targeted full-text scope checks. The newest included v1 is 15 October; indexing delays mean the cutoff is not a completeness guarantee. NeoHorse-1 and RedundancyBench retain pre-launch v1 dates: their later revisions introduce Jev. Existing technical reviews are inherited. The Jev 1.14 announcement informs the website introduction but is not counted as a paper. See the [18 October verification record](outputs/jev-literature-2026-10-18.json).

The paragraphs below preserve historical verification results.

The 14 October update reran the original and expanded arXiv queries, extending the submission window through 14 October (Asia/Shanghai). They returned 125 and 152 records, or 187 distinct arXiv candidates: 42 more than the previous snapshot. Screening added 37 papers and excluded five, bringing the collection to 160 arXiv preprints, one ResearchGate preprint, and 13 technical sources (174 entries). Thirteen retained papers were revised; updates include Koa-decision, GraphDecisionBench, JevCascade, the expanded rubric-judge and recommendation studies, Thinking Jev, SII-Decision model names, and Andrew B. Duncan’s author-name correction in TypedBench. All original v1 timestamps remain the sorting key.

New and revised entries were checked against official abstract pages and API metadata, with targeted full-text checks for scope and changed findings. CalOn is included for its explicitly RLCD-inspired typed extraction interface, without claiming a reproduction of proprietary RLCD; SkillScreen’s full text confirms both an OpenJev initialization and a hosted Jev baseline. Three unrelated engineering/physics papers, the rule-based System 1 in SCOPER, and general recalibration theory without a direct model study were excluded. No additional qualifying technical report or formal TypeSafe architecture/RLCD publication was verified. All 13 technical links were rechecked: eight loaded directly and five returned HTTP 403 but were accessible through the web reader. Link checks do not imply a new full content audit. Complete metadata, screening decisions, revision comparisons, and retrieval limitations are saved in [the 14 October verification record](outputs/jev-literature-2026-10-14.json).

The following paragraphs preserve the earlier verification history.

The 11 October incremental check reran both arXiv queries, extending the submission window through 11 October (Asia/Shanghai). They again returned 102 and 119 records, representing the same 145 distinct arXiv candidates. Titles, complete author lists, v1 and update timestamps, version URLs, journal references, and DOIs match the 9 October record. No newly verified in-scope paper or technical report was added; all entries, summaries, and domain counts remain unchanged. TypeSafe's [9 October fundraising announcement](https://typesafe.ai/blog/series-ai) was excluded as company news. All 13 technical-source links were checked: twelve loaded directly, while Workflow evals returned HTTP 451 to direct retrieval and was readable through the web reader. These link checks do not constitute a new full content audit. Query details, comparisons, and retrieval outcomes are saved in [the 11 October verification record](outputs/jev-literature-2026-10-11.json).

The following notes document the retained 9 October baseline.

The 9 October update reconciled the previous README with the complete arXiv API result set for `all:Jev` (102 records). An expanded query for `typed decision`, `Jev-style`, `Reinforcement Learning for Calibrated Decisions`, `System One`, `Laya`, `System-1`, `Jev-like`, `RLCD`, `typed probabilistic`, and `decision models`, restricted to submissions from 15 September through the search date, returned 119 records. Together the queries yielded 145 distinct academic candidates, including all 102 previously listed preprints. After screening, 123 were retained and 22 excluded, adding 21 academic entries. Four additions have September v1 dates: the biosecurity-relevant reliability audit, Emo-Jev, SeLMRoute, and the Certo caching study. They are newly included records, not newly submitted October papers.

Current arXiv metadata was checked for every retained arXiv entry. New entries and three revised papers were checked against original abstract pages, with targeted full-text checks for Jev's role, experimental conclusions, and ambiguous inclusion decisions. The revisions update the title and findings of Type-Safe Is Not Error-Free, JevOut's complete author list and expanded evaluation, and the semantic-query optimization study. Titles and summaries describe the verified version; v1 timestamps remain the ordering key. No conference or journal publication metadata was verified for these records, so all remain labeled as arXiv preprints.

A user-suggested addition, [WaterSheep 0.1.0](https://doi.org/10.13140/RG.2.2.28606.45122), was verified separately through [DataCite's DOI metadata](https://api.datacite.org/dois/10.13140/RG.2.2.28606.45122) and the [author's project documentation](https://github.com/SamratDuttaOfficial/WaterSheep). DataCite identifies Samrat Dutta, publication year 2026, and an unpublished preprint on ResearchGate. It provides no exact publication date; the DOI registration timestamp of 1 October 2026 is not used as a publication date. ResearchGate returned HTTP 403, so the full text was not verified and the summary explicitly attributes results to the author's documentation. This adds one non-arXiv academic candidate and one included preprint, bringing the combined totals to 146 candidates, 124 included preprints, and 137 entries.

Primary-source web discovery added four technical reports: Vals AI's Jev evaluation and its Mercury Decide follow-up, a three-arm scheduling experiment, and TypeSafe's candidate-screening case study. Their summaries distinguish shared evaluation data, small or unpublished test sets, and vendor-reported results from independent replication. TypeSafe's blog and targeted OpenReview and ACL Anthology searches did not establish a peer-reviewed TypeSafe architecture or proprietary RLCD paper. Existing technical links were rechecked where accessible; direct-retrieval failures and web-reader checks are recorded separately.

Excluded keyword hits cover unrelated uses of Jev or System One, general calibration and routing work, and studies without a verified TypeSafe or Jev-style probability-interface connection. SubJudge does not establish that connection in its full text; Jev-LDE does not establish a TypeSafe connection or a matching typed-probability interface in the checked full text. Fixed-taxonomy distillation, activation-steering answer generation, a general RAG release gate, and unrelated mathematics and physics papers remain outside scope. Standalone repositories, model cards, demos, generic news, and secondary summaries are not independent literature entries.

The latest retained arXiv v1 submission is 13 October 2026 at 17:34 UTC. The cutoff records the date of verification, not a guarantee that every submission through 14 October was already announced or indexed. Some October identifiers have September v1 timestamps; ordering follows verified submission history rather than identifier prefixes. Earlier README revisions retain their historical cutoffs. Current query counts, metadata, inclusion decisions, source links, retrieval outcomes, and revision checks are saved in [the 14 October verification record](outputs/jev-literature-2026-10-14.json).

Google Scholar was not programmatically queried; Scopus and Web of Science were not available without subscription credentials. Newly announced or unindexed work may be missing. This pass does not claim exhaustive coverage of all publishers or a complete citation graph.

### Verification Policy

Academic metadata is checked against an original arXiv, conference, journal, publisher, or DOI-registry record for title, author list, year, venue/status, and URL. Jev's role is checked against the paper or author-provided documentation; any reliance on supplementary documentation because full text is inaccessible is disclosed. A preprint is never labeled as a conference paper without an official proceedings record. Duplicate arXiv/publisher versions are represented by one entry, preferring the published version when verified.

Links and counts should be rechecked whenever the list changes. See [CONTRIBUTING.md](CONTRIBUTING.md) for the required submission and review format.

## Contributing

Contributions are welcome for verifiable research papers, preprints, technical reports, benchmarks, and substantial research articles. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing an entry. Standalone repositories, demos, model pages, generic software, marketing copy, news summaries, and duplicates are out of scope.

## License

The curated metadata and original summaries in this repository are dedicated to the public domain under [CC0 1.0 Universal](LICENSE). Linked works retain their own copyrights and licenses.
