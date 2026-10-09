<h1 align="center">Awesome JEV Papers</h1>

<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<p align="center"><strong>An evidence-aware map of Jev and typed probabilistic decision research.</strong></p>

<p align="center">
  <strong>137 entries</strong> · <strong>124 academic preprints</strong> · Last verified <strong>2026-10-09</strong> · <a href="LICENSE">CC0 1.0</a>
</p>

A curated collection of papers, preprints, technical reports, evaluations, and research-oriented articles about **Jev**, TypeSafe AI's first **System One Model**, and the research questions around typed probabilistic decisions.

Jev is not an acronym. The name refers to economist William Stanley Jevons. TypeSafe introduced the model on 15 September 2026 as a non-autoregressive decision component: unstructured text or program state goes in, and predefined `Choice`, `Score`, or binary (`Noul`) outputs with probabilities and confidence come out. The intended use is fast, schema-valid judgment inside software workflows rather than free-form text generation.

> **Scope.** This repository collects research literature, not implementations. Standalone GitHub repositories, model pages, demos, videos, generic news, and marketing-only posts are excluded. A code or model link may appear only as supplementary material for an included paper.

> **Evidence status.** Jev is a very new, closed-weight commercial model. As of 9 October 2026, no peer-reviewed TypeSafe architecture or Reinforcement Learning for Calibrated Decisions (RLCD) paper was located. Independent work such as OpenJev-RLCD studies its own training method and does not disclose Jev's proprietary algorithm. Academic items below are preprints: 123 on arXiv and one on ResearchGate. First-party performance claims remain author- or vendor-reported unless independently reproduced.

## Contents

- [How to Read This List](#how-to-read-this-list)
- [Repository Statistics](#repository-statistics)
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
| [Foundations & General Decision Models](#foundations-decision-models) | 29 |
| [Natural Language Processing & Information Retrieval](#nlp-information-retrieval) | 17 |
| [Multimodal Learning & Perception](#multimodal-perception) | 8 |
| [Embodied AI & Reinforcement Learning](#embodied-ai-reinforcement-learning) | 10 |
| [Agents & Workflow Automation](#agents-workflow-automation) | 13 |
| [Trustworthy AI & Security](#trustworthy-ai-security) | 31 |
| [AI for Science, Healthcare & Education](#science-healthcare-education) | 10 |
| [Networks, Databases & Engineering](#networks-databases-engineering) | 11 |
| [Computational Social Science & Human Decisions](#social-science-human-decisions) | 8 |
| **Total** | **137** |

Of the 137 entries, **124 are Jev-specific or Jev-style academic preprints** (123 on arXiv and one on ResearchGate) and **13 are research-oriented technical articles or reports**.

All **123 arXiv entries** include their **v1** submission timestamp in UTC, displayed to the minute. The ResearchGate preprint has a verified year but no verified exact publication date. Domain counts include all source types and count each work once.

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

- **[Koa-action: Fast and Consistent Structured Decision Making with Generative LLMs](https://arxiv.org/abs/2609.36115)**<br>📅 <strong>2026-09-28 18:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shenghong Dai, Shiva Kumar Pentyala, Yingchi Liu, Shubham Mehrotra, Suman Banerjee, James Zhu, Bin Bi, Sitaram Asur, and Phil Mui
  - Koa-action adds atomic label tokens and supervised fine-tuning to make generative models produce structured decisions in one decoding step. On an intent-routing benchmark it reports 85.5% accuracy and roughly half-second responses, including a direct comparison with Jev and support for multimodal and multilabel tasks. The work is included as a measured alternative to dedicated decision services, with its strongest serving comparison tied to the evaluated production workload.

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
  - LLM-as-Jev, previously titled LLM2Jev, reads probabilities over bracketed numeric candidate identifiers and optionally fine-tunes selection with a tree-factorized loss and KL anchors. The revised study includes image-based decisions and finds that a strong Qwen backbone already rivals community decision models, while tuning mainly benefits weaker backbones or particular tasks. It is included as an architecture-preserving Jev-style framework that tests when adaptation helps while retaining conversational behavior.

- 🔥 **[General Decision Models: Benchmarking and Insights Beyond Jev](https://arxiv.org/abs/2610.03935)**<br>📅 <strong>2026-10-02 18:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Feiyu Duan, Jiayu Lin, Jia Wang, Jun Xiang, Jialiang Wu, Xinnong Zhang, Hanqi Yan, Siyuan Wang, and Zhongyu Wei
  - JEVal compares twenty-five model configurations on 11,257 bilingual instances from thirty-six datasets across ten domains, then examines agent trajectories and social simulation. Jev-style models are strongest when evidence is supplied, while uncertainty errors and accumulated decisions weaken system-level outcomes. The work also introduces reasoning-distilled InnerJev models. It is included as a broad direct Jev benchmark linking local decision quality to downstream reliability rather than treating speed as sufficient evidence.

- **[AIM-Decision: Jev vs Kev vs LLMs](https://aimultiple.com/decision-models)**<br>📅 <strong>2026-10-05</strong> · Independent technical evaluation · Updated report · <strong>Tier B</strong> · Berk Kalelioğlu
  - The updated AIMultiple report tests twenty-two decision models on 1,655 classification questions and nineteen on fifty browser tasks. Jev remains inexpensive, but classification rankings do not predict browser success and request limits prevent some models from completing the shared protocol. It is included for its original measurements and common runtime, with single-attempt browser outcomes, heterogeneous serving setups, and no calibration evaluation limiting broader claims.

- **[GraphDecide: Benchmarking System One Models on Graph Tasks](https://arxiv.org/abs/2610.06354)**<br>📅 <strong>2026-10-05 13:54 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xianliang Yang, Yapu Zhang, and Li Zhao
  - GraphDecide evaluates fourteen model-interface configurations, including Jev, using graph task profiles, matched graph-text representations, and heuristic-proposal controls. Jev can recognize adjacency without reliably solving broader structural questions; combining graph and text is not consistently beneficial, and feasible outputs can still be poor solutions. It is included for separating graph recognition, representation effects, and solution quality under comparable candidate interfaces.

- **[SanSi: A Looped Typed Decision Model for System 1.5 Thinking](https://arxiv.org/abs/2610.07730)**<br>📅 <strong>2026-10-06 04:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shuyu Gan, Young-Jun Lee, and Dongyeop Kang
  - SanSi converts a looped language model into a typed decision model, supervising option probabilities after each of up to eight passes through shared layers. Across 10,027 decisions it improves on matched single-pass baselines, while controlled tasks test reasoning depth and a verifier experiment studies downstream training. It is included as a Jev-style architecture with direct Jev comparisons, exploring additional internal computation without generated reasoning text.

- **[JevForest: Path Voting for Budgeted Feature Acquisition](https://arxiv.org/abs/2610.10615)**<br>📅 <strong>2026-10-07 07:23 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yu Yan
  - JevForest uses votes from bootstrapped tree paths to choose which semantic questions Jev should answer under a feature budget. Small AG News and TREC pilots show opposing task-level rankings, while asking all eight questions together is faster, cheaper, and more accurate than four sequential forest queries. It is included as an implemented acquisition workflow whose results distinguish a question budget from actual serving cost and do not establish a general deployment advantage.

- **[Specialized Decision Models vs. General-Purpose LLMs: Benchmarking Jev Across Knowledge, Reasoning, and Multilingual Tasks](https://arxiv.org/abs/2610.11978)**<br>📅 <strong>2026-10-08 13:52 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xing Li, Qingcheng Chang, Jinzhong Ning, Changfeng Xu, Shenlong Zhang, Yijia Zhang, Ling Luo, and Hongfei Lin
  - The authors compare Jev with nineteen LLMs across thirteen knowledge, reasoning, and multilingual multiple-choice benchmarks. Jev is competitive on knowledge and commonsense, but scores below every comparator on MathQA, exposing a substantial weakness in multistep calculation. It is included as a broad direct benchmark; the model tiers were not all evaluated under one uniform protocol, and probability-based escalation remains future work.

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

- **[JEV vs. LLMs as Rubric Judges: Cheaper, Faster, and Wrong in the Same Places](https://arxiv.org/abs/2609.29769)**<br>📅 <strong>2026-09-24 13:16 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Delip Rao and Chris Callison-Burch
  - This revised study compares Jev with three flash-tier LLM judges on nine human-labeled panels, using both whole-rubric and per-criterion setups. Jev is often competitive on binary criteria but weaker on ordinal ones, while the LLMs cost and run substantially more. About 96% of LLM verdicts repeat Jev's most confident errors, and even oracle-threshold cascades improve on the best single judge by at most 2.7 points, emphasizing the need for complementary errors.

- **[LAVOIR: Teaching a Single-Pass Decision Encoder When and What to Ask with Amortized Value of Information](https://arxiv.org/abs/2609.30706)**<br>📅 <strong>2026-09-25 02:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Furkan Yilmaz, Habibe Aleyna Tasdemir, and Muhammed Faruk Gozay
  - LAVOIR extends the open Jev counterpart Laya so one pass predicts both a typed decision and the value of asking about each missing-information slot. Its question policy approximates a greedy oracle on seen schemas, improves controlled-task accuracy under a half-question budget, and gains 8.3 points where it asks on real ABCD conversations. It is included as a Jev-style method that adds clarification behavior, while reported generalization varies across benchmarks.

- **[Emo-Jev: Probabilistic Reasoning for Emotion Classification with Jev](https://arxiv.org/abs/2610.08829)**<br>📅 <strong>2026-09-27 01:35 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yazhou Zhang and Junhao Yu
  - Emo-Jev composes atomic Jev judgments or aggregates multiple judgment paths for sentiment, emotion, sarcasm, and humor classification. Across eight datasets, direct Jev classification offers low observed latency and cost but trails the strongest LLM's average macro-F1; neither proposed variant improves that average despite some dataset-level gains. It is included for testing whether additional probabilistic decomposition helps, with fixed question inventories and text-only tasks limiting generalization.

- **[Decide, Don't Generate: Competitive Dimensional ABSA with Jev's Typed Decisions](https://arxiv.org/abs/2609.35293)**<br>📅 <strong>2026-09-28 14:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yiqun Zhang, Peidong Wang, Zihan Wang, and Shi Feng
  - This work decomposes multilingual dimensional aspect-based sentiment analysis into Jev scores, label probabilities, and Boolean judgments, then fits 488 calibration coefficients without updating the backbone. It reports competitive regression and extraction results on SemEval task data, with ablations showing that supervised calibration and combined span-boundary evidence drive much of the gain. The paper is included as a structured prediction application whose performance depends on learned task alignment rather than raw zero-shot decisions.

- **[Chinese-Jev: Bringing System One Model to Chinese-Language Tasks](https://arxiv.org/abs/2609.36965)**<br>📅 <strong>2026-09-29 08:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zexiao Wang, Zihao Zhang, Xudong Wang, Pan Wang, Ziyi Ye, Haoyu Zhao, Zuxuan Wu, and Shuicheng Yan
  - Chinese-Jev trains a lightweight encoder on candidate-probability targets from ten million Chinese examples, followed by separate medical, legal, and financial adaptations and evaluation on CJ-Bench. The authors report competitive general accuracy, domain-dependent results, and faster inference than hosted Jev, including mobile deployment. It is included as an independent Chinese-language Jev-style model, with the gains attributable to its own training and serving setup rather than changes to TypeSafe's closed model.

- **[Decision-Oriented Recommendation Reranking: An Empirical Study of Jev](https://arxiv.org/abs/2609.40241)**<br>📅 <strong>2026-09-30 17:33 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Hanjia Lyu and Yinglong Xia
  - This recommendation study compares Jev reranking with specialist recommenders and pointwise or listwise Qwen variants across Amazon Reviews domains and candidate-set sizes. Jev combines competitive recommendation quality with more gradual latency growth than pointwise Qwen, but remains slower than recommendation-specific models. It is included as a structured ranking application that identifies a quality-latency tradeoff rather than claiming decision models universally replace trained recommenders.

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

<a id="agents-workflow-automation"></a>

## 🛠 Agents & Workflow Automation

Agent memory, model routing, multi-agent coordination, selective execution, and software workflow design.

### 2026

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

- **[More Choices, Fewer Decisions: Ordinal-Scale Bias in JEV-like Direct-Decision Models](https://arxiv.org/abs/2609.38827)**<br>📅 <strong>2026-09-30 02:50 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tianxiang Gao, Jinzhe Li, Zhiyuan Li, Yi Chang, and Yuan Wu
  - This study tests Jev and three open Kev models for compression of ordinal decision scales across thirty-six ordinal datasets and controlled changes in scale resolution. Final selections use fewer effective levels than the gold labels even when option order and label support are controlled. Targeted adaptation partly repairs the effect in Kev. It is included because broad candidate probabilities and good accuracy do not ensure faithful use of a supplied rating scale.

- **[When the Right Answer Is Missing: An Arithmetic-Dependent Rejection Bottleneck in Jev](https://arxiv.org/abs/2609.39496)**<br>📅 <strong>2026-09-30 10:55 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jike Zhong, Ming Li, and Yuxiang Lai
  - On paired arithmetic problems, Jev selects a present correct answer reliably but often fails to choose an explicit rejection option when every numerical candidate is wrong. Boolean candidate verification remains strong, and a threshold fitted on separate development problems substantially improves rejection. The study is included because adding a none-of-the-above label alone does not make a typed-choice workflow robust to missing answers, even when the model can verify them separately.

- **[Beyond Answer Confidence: A Controlled Audit of Self-Knowledge in a Black-Box Decision Model](https://arxiv.org/abs/2610.01006)**<br>📅 <strong>2026-10-01 03:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Sharath M Shankaranarayana, Davor Runje, and Jan Jannink
  - This audit separates answer confidence from knowledge limits using more than fifteen public datasets, six generated task families, and paired information interventions. Jev can remain confident without relevant evidence or beyond an observed knowledge boundary; explicit evidence-sufficiency questions help, but apparent self-knowledge benefits weaken when surface cues are controlled. It is included because familiar-task calibration alone does not justify using confidence to detect missing knowledge or out-of-distribution decisions.

- **[Jev-IDS: System One Models for Network Intrusion Detection](https://arxiv.org/abs/2610.01079)**<br>📅 <strong>2026-10-01 05:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Paulo Severo, Silvio E. Quincozes, and Amanda Dias
  - Jev-IDS serializes network flows and asks Jev for both attack probability and a finite traffic category under scarce labels. On a 300-flow NSL-KDD pilot with repeated decisions, it reports stronger novel-attack recall and lower latency and cost than the evaluated LLM baseline, with fewer false alarms than a low-data Random Forest. It is included as an intrusion-screening application whose small pilot cannot establish general operational detection performance.

- **[Labels Override Definitions in Jev-Style Typed Decision Models](https://arxiv.org/abs/2610.02586)**<br>📅 <strong>2026-10-01 23:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Seyedarmin Azizi, Erfan Baghaei Potraghloo, and Massoud Pedram
  - This study tests option-label bias in four open typed decision models using eleven classification tasks and a policy-routing benchmark. Swapping how labels and definitions are rendered transfers or removes the bias without changing weights, locating the tested failure in prompt construction. It is included as a mechanistic follow-up to Jev-style label-robustness findings, while its code interventions concern open implementations and do not establish the cause inside hosted Jev.

- **[SecJev: Bringing Security Expertise to System One Decision Models](https://arxiv.org/abs/2610.03073)**<br>📅 <strong>2026-10-02 09:57 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zheng Chen, Fei Yu, Haohao Huang, Yang Li, Anlong Chen, and Lei Chen
  - SecJev specializes Kev-based single-pass decision models for fourteen security tasks spanning eight data sources, with models from 0.8B to 9B parameters. Domain training improves every model and allows the smallest variant to outperform general Kev-9B on task-macro accuracy. It is included as an open Jev-style security extension; comparisons with answer-only generative tuning show similar accuracy and latency, and transferred false-alarm rates remain capture-dependent.

- **[To Jev or Not? Evaluating the Accuracy and Efficiency of Structured Decision Models for Hate-Speech Moderation](https://arxiv.org/abs/2610.03324)**<br>📅 <strong>2026-10-02 13:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Demetris Paschalides, George Pallis, and Marios D. Dikaiakos
  - HATEDECIDE compares six decision-model configurations with specialist, zero-shot, commercial, and supervised baselines across four hate-speech datasets. Supplying definitions can change many predictions without reliably improving classification, and decomposition helps only a minority of comparisons. Jev is included as a measured moderation system, with favorable cost and diagnostic-set results qualified by dataset-dependent accuracy and the limited benefit of merely making policy criteria explicit.

- **[Benchmarking candidate coverage and rejection policy transfer in typed decision models](https://arxiv.org/abs/2610.03387)**<br>📅 <strong>2026-10-02 14:36 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jiawen Lu and Tongtong Wu
  - This benchmark compares Laya, Jev, and Qwen on missing-answer recognition, natural retrieval misses, and out-of-scope queries, and tests whether rejection policies transfer across tasks at equal calibration budgets. A Jev threshold learned on DBpedia rejects 69.3% of covered Emotion inputs, exposing severe operating-point drift. It is included because classification accuracy, candidate coverage, and rejection-policy reliability need separate measurement when decision models are reused.

- **[Hidden Risks of Jev: An Empirical Study of Security, Privacy, and Dual Use](https://arxiv.org/abs/2610.04985)**<br>📅 <strong>2026-10-04 06:09 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shang Wang, Tianqing Zhu, Huajie Chen, Jiayang Li, Meng Yang, and Bo Liu
  - The authors examine decision manipulation, information leakage, and defensive or malicious uses of typed decision models through the official Jev API and a controllable local NanoJev model. Their evaluation finds that restricted outputs do not eliminate the tested security and privacy risks. It is included as a broad threat study, with training-data poisoning and backdoor experiments confined to the local surrogate rather than evidence of compromise in hosted Jev.

- **[Readout Stability in Prefill-Only Decision Models:Zero-Label Prediction and Inference-Time Compute Allocation](https://arxiv.org/abs/2610.07716)**<br>📅 <strong>2026-10-06 04:10 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ran Li and Lei Chen
  - This study probes seven Jev-inspired prefill-only model families across ten datasets, predicting the accuracy of menu-only interventions from cached first-pass rankings without new labels or another model call. Ranking stability does not imply equally stable probabilities, and repeated calls mainly improve calibration rather than accuracy. It is included for evaluating when candidate curation or a confidence cascade offers better returns than extra passes or larger decision models.

- **[Benchmarking System One Models in Online Moderation](https://arxiv.org/abs/2610.07953)**<br>📅 <strong>2026-10-06 08:25 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Federico Mazzoni and Andrea Failla
  - This evaluation compares Jev and Laya across five moderation benchmarks while separately varying written rules, retrieved precedents, and candidate restrictions. Jev often benefits from precedents and competes with specialist references; Laya's retrieval gains are less consistent. It is included for testing policy-grounded moderation under controlled information conditions, while useful confidence-based review does not imply uniformly calibrated probabilities.

- **[TypedBench: A Benchmark for Calibration, Framing Sensitivity, and Cost in System One Decision Models](https://arxiv.org/abs/2610.11392)**<br>📅 <strong>2026-10-08 07:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Rahul Sharma, Andrew B. Ducan, Gaétan Marceau Caron, and Sebastian J. Vollmer
  - TypedBench uses seven policy-labeled generators and nine suites to test Jev and open decision models on framing, calibration, scaling, selective prediction, and decision cost. Jev follows policies but remains wording-sensitive and underconfident; under asymmetric costs, acting on its probabilities can perform worse than selecting its top answer. It is included for linking probability quality to induced decisions and comparing calibration against a matched finite-sample noise floor.

- **[Adversarial Cues in Decision Models Used as Judges: The Role of Request Presentation](https://arxiv.org/abs/2610.11436)**<br>📅 <strong>2026-10-08 07:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hongliang Liu
  - This controlled judging study changes a candidate answer with a single punctuation cue while varying how a structured request is presented. On 200 new source clusters, Jev's false acceptance rises sharply under sorted JSON keys but not insertion presentation, despite passing basic controls in both settings. It is included as evidence of integration-sensitive judging failures, with reference-aware constructions, compound ordering changes, and unresolved comparator responses limiting operational conclusions.

- **[One Word Opens the Gate: The Option-Channel Attack on Typed Decision Models as Agent Guardrails](https://arxiv.org/abs/2610.12292)**<br>📅 <strong>2026-10-08 16:46 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Seyedarmin Azizi, Erfan Baghaei Potraghloo, and Massoud Pedram
  - This study evaluates open Jev-style decision models and Qwen readouts as agent guardrails, separating unsafe acceptance from unnecessary blocking. Irrelevant context and misleading option names can reverse correct decisions without reducing confidence, while tested defenses fail under adapted attacks. It is included for examining the option channel in independent open models, not hosted Jev; exact deterministic rules succeed where the synthetic policies can be fully parsed into typed fields.

<a id="science-healthcare-education"></a>

## 🩺 AI for Science, Healthcare & Education

Scientific reasoning, biomedical models, clinical evaluation, public-health and road-safety analysis, and learner modeling.

### 2026

- **[Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev)](https://arxiv.org/abs/2609.24052)**<br>📅 <strong>2026-09-21 03:24 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - This work applies Jev to a 27-question schema over 499,500 Texas crash narratives and audits a subset against coded fields and 2,416 blinded human judgments. It reports an F1 of 0.908 against human labels and shows that post-hoc recalibration materially reduces calibration error. The paper is included for its unusually large deployment-scale evaluation, explicit review budgets, and careful distinction between database agreement and narrative fidelity.

- **[Counting the Uncounted: Population-Level Surveillance of Documented Pregnancy and Fetal Harm in Police Crash Narratives with a System One Model (Jev)](https://arxiv.org/abs/2610.00213)**<br>📅 <strong>2026-09-21 14:25 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - This population-scale study screens 5,018,079 Texas crash narratives for documented pregnancy, then uses Jev's eight-question schema and a blinded human audit to estimate missed cases and fetal harm. It estimates 5,467 crashes with documented pregnancy, including 58 documenting fetal harm. The paper extends Jev-based crash-data extraction to surveillance, while explicitly measuring what police narratives document rather than the true prevalence of pregnancy or injury.

- 🔥 **[Jev for Scientific Decisions: Evaluating Semantic Choices and Their Consequences](https://arxiv.org/abs/2609.24965)**<br>📅 <strong>2026-09-21 17:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Boyuan Deng, Shuyi Fan, Hongyang Zhang, and Xinhong Xie
  - The study evaluates Jev and eleven other configurations on twenty source-grounded semantic choices across ten scientific cases, separating relation selection from downstream arithmetic and final claims. Jev matches five configurations on complete semantic correctness and has the lowest observed median latency among successful responses. It is included because it tests Jev in a controlled decision-plus-code workflow and exposes errors hidden by end-label accuracy.

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

## Search and Verification Notes

**Cutoff:** 9 October 2026 (Asia/Shanghai).

**Organization:** the list is grouped by primary research domain and contains 137 entries as of the 9 October verification cutoff. The original 136 entries retain their metadata, summaries, and inclusion decisions; WaterSheep is the separately documented addition below.

The 9 October update reconciled the previous README with the complete arXiv API result set for `all:Jev` (102 records). An expanded query for `typed decision`, `Jev-style`, `Reinforcement Learning for Calibrated Decisions`, `System One`, `Laya`, `System-1`, `Jev-like`, `RLCD`, `typed probabilistic`, and `decision models`, restricted to submissions from 15 September through the search date, returned 119 records. Together the queries yielded 145 distinct academic candidates, including all 102 previously listed preprints. After screening, 123 were retained and 22 excluded, adding 21 academic entries. Four additions have September v1 dates: the biosecurity-relevant reliability audit, Emo-Jev, SeLMRoute, and the Certo caching study. They are newly included records, not newly submitted October papers.

Current arXiv metadata was checked for every retained arXiv entry. New entries and three revised papers were checked against original abstract pages, with targeted full-text checks for Jev's role, experimental conclusions, and ambiguous inclusion decisions. The revisions update the title and findings of Type-Safe Is Not Error-Free, JevOut's complete author list and expanded evaluation, and the semantic-query optimization study. Titles and summaries describe the verified version; v1 timestamps remain the ordering key. No conference or journal publication metadata was verified for these records, so all remain labeled as arXiv preprints.

A user-suggested addition, [WaterSheep 0.1.0](https://doi.org/10.13140/RG.2.2.28606.45122), was verified separately through [DataCite's DOI metadata](https://api.datacite.org/dois/10.13140/RG.2.2.28606.45122) and the [author's project documentation](https://github.com/SamratDuttaOfficial/WaterSheep). DataCite identifies Samrat Dutta, publication year 2026, and an unpublished preprint on ResearchGate. It provides no exact publication date; the DOI registration timestamp of 1 October 2026 is not used as a publication date. ResearchGate returned HTTP 403, so the full text was not verified and the summary explicitly attributes results to the author's documentation. This adds one non-arXiv academic candidate and one included preprint, bringing the combined totals to 146 candidates, 124 included preprints, and 137 entries.

Primary-source web discovery added four technical reports: Vals AI's Jev evaluation and its Mercury Decide follow-up, a three-arm scheduling experiment, and TypeSafe's candidate-screening case study. Their summaries distinguish shared evaluation data, small or unpublished test sets, and vendor-reported results from independent replication. TypeSafe's blog and targeted OpenReview and ACL Anthology searches did not establish a peer-reviewed TypeSafe architecture or proprietary RLCD paper. Existing technical links were rechecked where accessible; direct-retrieval failures and web-reader checks are recorded separately.

Excluded keyword hits cover unrelated uses of Jev or System One, general calibration and routing work, and studies without a verified TypeSafe or Jev-style probability-interface connection. SubJudge does not establish that connection in its full text; Jev-LDE does not establish a TypeSafe connection or a matching typed-probability interface in the checked full text. Fixed-taxonomy distillation, activation-steering answer generation, a general RAG release gate, and unrelated mathematics and physics papers remain outside scope. Standalone repositories, model cards, demos, generic news, and secondary summaries are not independent literature entries.

The latest retained arXiv v1 submission found in this pass was on 8 October 2026 at 16:46 UTC. The cutoff records the date of verification, not a guarantee that every 9 October submission was already announced or indexed. Some October identifiers have September v1 timestamps; ordering follows verified submission history rather than identifier prefixes. Earlier README revisions retain their historical cutoffs. Query counts, current metadata, inclusion decisions, source links, retrieval outcomes, and revision checks are saved in [the 9 October verification record](outputs/jev-literature-2026-10-09.json).

Google Scholar was not programmatically queried; Scopus and Web of Science were not available without subscription credentials. Newly announced or unindexed work may be missing. This pass does not claim exhaustive coverage of all publishers or a complete citation graph.

### Verification Policy

Academic metadata is checked against an original arXiv, conference, journal, publisher, or DOI-registry record for title, author list, year, venue/status, and URL. Jev's role is checked against the paper or author-provided documentation; any reliance on supplementary documentation because full text is inaccessible is disclosed. A preprint is never labeled as a conference paper without an official proceedings record. Duplicate arXiv/publisher versions are represented by one entry, preferring the published version when verified.

Links and counts should be rechecked whenever the list changes. See [CONTRIBUTING.md](CONTRIBUTING.md) for the required submission and review format.

## Contributing

Contributions are welcome for verifiable research papers, preprints, technical reports, benchmarks, and substantial research articles. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing an entry. Standalone repositories, demos, model pages, generic software, marketing copy, news summaries, and duplicates are out of scope.

## License

The curated metadata and original summaries in this repository are dedicated to the public domain under [CC0 1.0 Universal](LICENSE). Linked works retain their own copyrights and licenses.
