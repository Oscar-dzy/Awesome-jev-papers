<h1 align="center">Awesome JEV Papers</h1>

<p align="center"><strong>An evidence-aware map of Jev and typed probabilistic decision research.</strong></p>

<p align="center">
  <strong>35 entries</strong> · <strong>30 academic preprints</strong> · Last verified <strong>2026-09-28</strong> · <a href="LICENSE">CC0 1.0</a>
</p>

A curated collection of papers, preprints, technical reports, evaluations, and research-oriented articles about **Jev**, TypeSafe AI's first **System One Model**, and the research questions around typed probabilistic decisions.

Jev is not an acronym. The name refers to economist William Stanley Jevons. TypeSafe introduced the model on 15 September 2026 as a non-autoregressive decision component: unstructured text or program state goes in, and predefined `Choice`, `Score`, or binary (`Noul`) outputs with probabilities and confidence come out. The intended use is fast, schema-valid judgment inside software workflows rather than free-form text generation.

> **Scope.** This repository collects research literature, not implementations. Standalone GitHub repositories, model pages, demos, videos, generic news, and marketing-only posts are excluded. A code or model link may appear only as supplementary material for an included paper.

> **Evidence status.** Jev is a very new, closed-weight commercial model. As of 28 September 2026, TypeSafe has not published a peer-reviewed architecture or Reinforcement Learning for Calibrated Decisions (RLCD) paper. All Jev-specific academic items below are therefore arXiv preprints, and first-party performance claims should be treated as vendor-reported unless independently reproduced.

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
- 📅 **Date:** the bold UTC timestamp is the arXiv **v1** submission time; date-only labels are publication dates for non-arXiv sources. Entries within each section run from earliest to latest.

## Repository Statistics

<!-- Keep these counts synchronized with the four top-level literature sections below. -->

| Category | Entries |
|---|---:|
| Core JEV sources | 3 |
| Benchmarks and evaluation | 12 |
| Applications | 18 |
| Technical articles | 2 |
| **Total** | **35** |

Of the 35 entries, **30 are Jev-specific or Jev-style academic preprints** and **5 are research-oriented technical articles or reports**.

All **30 academic entries** include their exact arXiv **v1** submission timestamp in UTC.

## 🔥 Core JEV Sources

### 2026

- 🔥 **[Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)**<br>📅 <strong>2026-09-15</strong> · TypeSafe AI Blog · <strong>Tier A</strong> · Diogo Almeida
  - The launch article defines Jev's contract: text or structured state is mapped to typed probabilistic decisions without generating strings. It introduces parallel sampling, RLCD, workflow evaluations, and the claimed latency and cost advantages, while also disclosing important first-party evaluation caveats. This is the canonical primary source because no architecture or training paper was public at the verification cutoff.

- 🔥 **[Workflow evals](https://evals.typesafe.ai/)**<br>◉ <strong>Live report</strong> · Technical evaluation · <strong>Tier A</strong> · TypeSafe AI
  - This first-party report describes four structured automation evaluations and the harness design used to compare Jev with generative models. Policies are decomposed into independent typed judgments and deterministic code, then scored against consensus probabilities from large external models. It is essential for understanding TypeSafe's headline claims, but its reference labels, task construction, and author affiliation make independent validation necessary.

- **[Jev in the Wild: A Data-Driven Analysis of the Jev Model's Functionality, Applications and Ecosystem](https://arxiv.org/abs/2609.30216)**<br>📅 <strong>2026-09-24 17:46 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guoming Ling, Muen Xue, and Zijian Ye
  - This ecosystem study analyzes 2,170 public Jev projects collected from GitHub through 22 September 2026, classifying how applications combine attribute judgments, scoring, action selection, filtering, and model or tool routing. It finds rapid early adoption but a mismatch between public attention and project distribution. The paper is included as the first quantitative map of Jev usage, while its repository-based sample measures visible experimentation rather than production deployment.

## 📊 Benchmarks and Evaluation

### 2026

- **[Testing Jev on Public and Private Data: Classifier or Filter?](https://amankumar.ai/blogs/jev-measured)**<br>📅 <strong>2026-09-18</strong> · Independent technical evaluation · <strong>Tier B</strong> · Aman Kumar
  - This reproducible engineering study reports roughly 16,000 calls across four public classification datasets and private production decisions, comparing Jev with smaller generative models. It finds strong high-confidence performance on short, crisp-label tasks but weaker results on long inputs and fuzzy policies. The article is included because it tests calibration and confidence-gated fallback behavior rather than repeating TypeSafe's first-party speed claims.

- 🔥 **[this-that-model-1.0: A typed decision model that decides in 30 ms, for a millionth of a cent](https://arxiv.org/abs/2609.23886)**<br>📅 <strong>2026-09-20 21:43 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zehua Cheng, Wei Dai, and Jiahao Sun
  - The authors present a 2B-parameter one-pass typed decision model and compare it directly with Jev on a recorded 68-question cohort. Their model reports higher accuracy and a lower Brier score on that cohort, while both approaches struggle with tasks requiring sequential arithmetic. The paper is included as an explicit Jev baseline comparison and as evidence that the typed-decision interface is not unique to one provider.

- 🔥 **[Evaluating Decision Models for Text Annotation in Computational Social Science](https://arxiv.org/abs/2609.24574)**<br>📅 <strong>2026-09-21 13:41 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hazem Ibrahim and Yasir Zaki
  - This preregistered evaluation compares Jev 1.13 and open decision models with nineteen language models on 7,977 items from eighteen social-science classification tasks. Jev trails the best per-task LLM on most evaluated tasks but is far cheaper and often better calibrated than verbalized LLM confidence. The paper provides the broadest verified Jev accuracy, calibration, routing, and cost study in this collection.

- 🔥 **[Jev for Scientific Decisions: Evaluating Semantic Choices and Their Consequences](https://arxiv.org/abs/2609.24965)**<br>📅 <strong>2026-09-21 17:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Boyuan Deng, Shuyi Fan, Hongyang Zhang, and Xinhong Xie
  - The study evaluates Jev and eleven other configurations on twenty source-grounded semantic choices across ten scientific cases, separating relation selection from downstream arithmetic and final claims. Jev matches five configurations on complete semantic correctness and has the lowest observed median latency among successful responses. It is included because it tests Jev in a controlled decision-plus-code workflow and exposes errors hidden by end-label accuracy.

- **[JEV-as-a-Judge: Accept When Confident, Escalate When Unsure](https://arxiv.org/abs/2609.26550)**<br>📅 <strong>2026-09-22 15:05 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yubo Li, Yidi Miao, Ramayya Krishnan, and Rema Padman
  - This evaluation compares Jev with sixteen generative and reward-model judges using blinded human adjudication. Jev comes within three accuracy points of the strongest comparator on ordinary preference and evidence-grounded factuality at a small fraction of its fee, but falls further behind on derivation checking and persuasive wrong answers. A frozen confidence cascade retains 99% of the comparator's accuracy at lower cost, motivating Jev as a selective first-pass judge rather than a universal replacement.

- 🔥 **[Type-Safe Is Not Error-Free: A Constrained Decision Head Follows the Option Name, Not the Rubric Bound to It](https://arxiv.org/abs/2609.26758)**<br>📅 <strong>2026-09-22 17:38 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yu Sun, Junhao Xu, Jiajia Shi, and Zijin Yang
  - This study reassigns semantically loaded option names to unchanged rubrics in Jev and two open Jev-like models. On 1,200 workflow decisions, changing neutral labels to `no` and `yes` reverses rankings and sharply degrades AUC despite a zero type-error rate; the hosted model shows the same pattern above its test-retest floor. It is included as a direct demonstration that schema compliance does not guarantee faithful interpretation of option definitions.

- **[Same Scores, Different Decisions: Evaluating JEV and Language Models for Legal Document Understanding](https://arxiv.org/abs/2609.27678)**<br>📅 <strong>2026-09-23 10:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Fan Zhang, Yankai Chen, Zhuohan Xie, Yixi Zhou, Sijia Peng, Lei Fan, Xinhua Ji, Cunyuan Zheng, Huangyong Shan, Philip S. Yu, Xue Liu, Yu Chen, Preslav Nakov, and Songwei He
  - The authors compare Jev with nine language models on ContractNLI while varying hypothesis visibility, requested outputs, output order, and repeat conditions. Jev has the lowest cost and median latency, but hosted language models achieve higher baseline accuracy; aggregate scores also conceal offsetting corrections, regressions, and persistent item-level errors. The study is included for evaluating whether legal judgments remain correct as request configuration changes, not merely whether averages remain stable.

- **[Decision Hijacking: Prompt Injection Attacks on Jev's Typed Probabilistic Decisions](https://arxiv.org/abs/2609.28613)**<br>📅 <strong>2026-09-23 17:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tiantong Wu and Wei Yang Bryan Lim
  - This paper reconstructs 510 InjecAgent cases to study prompt injection against Jev's schema-constrained outputs. Malicious content shifts action probabilities but rarely selects the attacker's target; adaptive score-feedback attacks raise validation success from 1.8% to 3.5%, with failures concentrated around small decision margins and greater attacker control of observations. It is included because it distinguishes output validity from resistance to manipulation within the allowed action set.

- **[Just Ask Jev: Reinforcement Learning for Calibrated Decisions as a Zero-Shot Detector of AI Alignment Failures](https://arxiv.org/abs/2609.29429)**<br>📅 <strong>2026-09-24 11:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ruoqi Guo, Yi Liu, Gelei Deng, Yuekang Li, Lida Zhao, Yutao Wu, Simin Chen, Ying Zhang, and Leo Yu Zhang
  - RLCDAlignBench evaluates Jev across ten alignment-failure types, 44 benchmarks, and five target models while varying question wording separately from the context supplied to the detector. A generic question reaches a reported median AUROC of 0.886, with context fields affecting performance more than phrasing. The work is included as a broad zero-shot safety evaluation, though many labels originate from benchmark-specific scorers and only two subsets include human labels.

- **[JEV vs. LLMs as Rubric Judges: Cheaper, Faster, and Wrong in the Same Places](https://arxiv.org/abs/2609.29769)**<br>📅 <strong>2026-09-24 13:16 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Delip Rao and Chris Callison-Burch
  - This study compares Jev with three flash-tier LLM judges on nine panels drawn from seven benchmarks. Jev is broadly competitive on binary criteria but weaker on graded ones, while the LLMs cost and run substantially more. Confidence-based cascades recover at most two accuracy points because the LLM judges repeat many of Jev's confident errors, showing that correlated failure patterns can defeat selective escalation even when confidence ranks errors.

- **[JevOut: Natural Context Can Flip Decision Models](https://arxiv.org/abs/2609.30243)**<br>📅 <strong>2026-09-24 17:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zixiang Xu
  - JevOut optimizes short, fluent context additions toward a fixed wrong option without changing the original question, choices, or gold answer. It redirects Jev on 312 of 508 initially correct decisions, including 229 high-confidence errors, and finds similarly high targeted flip rates in three other decision systems across seven datasets. The paper is included as evidence that ordinary-looking contextual details can undermine otherwise correct typed decisions.

- 🔥 **[JevAdvBench: A Benchmark and Black-Box Attacks for Reinforcement Learning for Calibrated Decisions Models](https://arxiv.org/abs/2609.31142)**<br>📅 <strong>2026-09-25 11:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jianyi Hu, Hangtao Zhang, Yi Liu, Yeqi Zeng, Li Zeng, Xianlong Wang, Rui Wang, and Leo Yu Zhang
  - JevAdvBench tests jev-1.13.0 with 812 typed questions across 66 scenarios and 9,744 single-edit attack variants. Appending an unverified opinion flips 12.1% of decisions and moves 38% of previously confident answers below a 0.8 review threshold, while simple rewording stays near the repeat-run floor. The benchmark directly measures RLCD robustness, although its principal reference is the model's own clean decision rather than external ground truth.

## ⚡ Applications

### 2026

- **[Replacing Large Language Models with Jev Decision Models for Low-Latency Edge Service Orchestration](https://arxiv.org/abs/2609.22753)**<br>📅 <strong>2026-09-19 04:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Delong Li, Xu Wang, Haochen Gong, Rui Lang, and Guangsheng Yu
  - This earlier companion study integrates Jev into an edge-service path that extracts four intent fields and shares validation, admission, and scheduling logic across model conditions. Live and modeled experiments report lower decision latency, end-to-end latency, and API cost than a structured-output DeepSeek baseline when interpretation is not cached. It overlaps with the later 6G paper but has a distinct experimental scope and is retained separately.

- **[Fast Intent-Driven Service Orchestration with Jev for 6G Edge Networks](https://arxiv.org/abs/2609.23136)**<br>📅 <strong>2026-09-19 17:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Delong Li, Xu Wang, Haochen Gong, Rui Lang, and Guangsheng Yu
  - This study uses Jev to translate natural-language 6G service intents into bounded contracts before numerical scheduling. It combines live model calls with packet-level New Radio simulation, mobility, shared queues, and a real image-reading service, reporting lower decision latency than DeepSeek and Gemini while preserving interpretation quality. It is included as an end-to-end latency study where decisions affect downstream network completion.

- **[Open-Jev Judgments on CallScreenBench: Calibrated One-Pass Scam Screening with a Small Language Model](https://arxiv.org/abs/2609.23959)**<br>📅 <strong>2026-09-21 00:09 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Simiao Ren, Kidus Zewde, Xingyu Shen, Yuchen Zhou, Dennis Ng, Ankit Raj, Tommy Duong, Yuxin Zhang, and Neo Tiangratanakul
  - The paper adapts a Qwen3-4B backbone into JevLite, a one-pass scam probability model, and evaluates it on 577 per-turn decisions from synthetic calls. The ensemble reaches 0.974 AUROC with reported calibration error of 0.052 and substantially lower latency than a generative version of the same backbone. It does not evaluate hosted Jev, but is included as a transparent Jev-style application and ablation.

- **[Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986)**<br>📅 <strong>2026-09-21 01:43 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Dongming Jiang, Yi Li, and Bingzhe Li
  - Jev-Mem uses Jev calls as a typed control plane for memory labeling, relation construction, retrieval routing, candidate scoring, and stopping, while reserving a generative model for answer synthesis. On LoCoMo it reports improved judge scores, faster memory construction, and lower query latency than the selected memory baselines. It is included as the clearest systems architecture built around Jev's bounded-decision interface.

- **[Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev)](https://arxiv.org/abs/2609.24052)**<br>📅 <strong>2026-09-21 03:24 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - This work applies Jev to a 27-question schema over 499,500 Texas crash narratives and audits a subset against coded fields and 2,416 blinded human judgments. It reports an F1 of 0.908 against human labels and shows that post-hoc recalibration materially reduces calibration error. The paper is included for its unusually large deployment-scale evaluation, explicit review budgets, and careful distinction between database agreement and narrative fidelity.

- **[JEVQA - Video Quality from Metadata, Bitstream, and Pixel Features with a General-Purpose Decision Model](https://arxiv.org/abs/2609.24395)**<br>📅 <strong>2026-09-21 10:45 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Werner Robitza
  - JEVQA uses Jev 1.13 as a zero-shot video-quality predictor over metadata, bitstream statistics, and pixel-derived measurements. Across two studies, richer combined features improve correlation with VMAF or mean opinion scores, although trained quality models remain stronger and pixel-only inputs fail. It is included as a careful application study showing both the flexibility and the limits of Jev's score distributions.

- **[Visual Jev: Accurate and Efficient Decisions from Shared Visual Context](https://arxiv.org/abs/2609.25845)**<br>📅 <strong>2026-09-22 08:12 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guanxu Yu and Yuhang Yao
  - Visual Jev encodes an image and shared context once, batches isolated question suffixes, and reads candidate probabilities from an existing language-model head. Across four benchmarks, answer-supervised post-training improves macro accuracy mainly on represented task families; at 32 questions per image, shared execution is substantially faster than serial or prefix-recomputing baselines but uses more peak memory. A matched typed-head control adds no consistent accuracy advantage, making shared computation the paper's supported contribution.

- **[REFLEX with Jev for Efficient Selective Control in LLM Agents](https://arxiv.org/abs/2609.26532)**<br>📅 <strong>2026-09-22 14:54 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Tiantong Wu and Wei Yang Bryan Lim
  - REFLEX uses Jev for bounded agent decisions and falls back to a strong generative model when confidence is low or generation is necessary. On a frozen 100-task benchmark it reports 95% success with 72.7% fewer strong-model calls, while controlled tests identify action-set size and near-valid alternatives as important risks. External BFCL and tau-style evaluations show only limited gains over a cheap generative cascade, clarifying where selective Jev control is and is not advantageous.

- **[JEV-Star: Fast, Low-Cost StarCraft II Control with Language-Model Planning](https://arxiv.org/abs/2609.27331)**<br>📅 <strong>2026-09-23 04:09 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Weiyu Ma, Liangbing Zhao, Yongcheng Zeng, and Jian Zhao
  - JEV-Star combines fast Jev action selection with persistent GPT-6 planning for StarCraft II macro control and micromanagement. The system wins four full games through the strongest non-cheating built-in level and improves battle-map outcomes over an initial Jev-only controller, with decision logs and cost estimates reported. Because interface improvements accompany the planning change, the study cannot isolate planning's causal contribution, but it demonstrates a practical System One/System Two control split.

- **[KITE: Scaling Jev Population Experiments with Sparse Flagship Calibration](https://arxiv.org/abs/2609.27535)**<br>📅 <strong>2026-09-23 08:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Hengyu Li
  - KITE queries a typed Jev behavioral kernel once per unique state, reuses the resulting table for large simulated populations, and reserves a stronger model for sparse paired calibration anchors. Experiments over social-science studies report improved intervention-effect estimates and conservative uncertainty coverage while executing one million agents locally from cached decisions. The paper is included as a Jev-based simulation architecture, with validity explicitly tied to sparse human–model discrepancy evidence rather than Monte Carlo scale alone.

- **[Can Jev Judge Radiology Reports? Evaluating a System One Model for Clinical Factuality](https://arxiv.org/abs/2609.27607)**<br>📅 <strong>2026-09-23 09:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiaju Huang, Hao Yang, Xinyu Ma, Xinglong Liang, Kunyan Cai, Junqiang Ma, Shaobin Chen, Yue Sun, and Tao Tan
  - This study applies Jev bidirectionally to test whether statements in generated and reference radiology reports support one another. A single-question configuration correlates with expert error counts better than a matched open NLI judge and detects controlled false negation strongly, but the local RadMatch system remains better on clinically significant errors. It is included as a cost-aware medical factuality application with explicit analysis of report length and error-definition effects.

- **[NumericJev: Jev-like LLM Numerical Decoding with Multiway Decision Trees](https://arxiv.org/abs/2609.28587)**<br>📅 <strong>2026-09-23 13:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Weiwei Ye, Hangchen Liu, and Renhe Jiang
  - NumericJev turns numerical prediction into repeated range choices, enabling any LLM with a Jev-like structured-choice interface to refine values through a multiway decision tree without training or hidden-state access. On a 100-value arithmetic grid it reports lower range-normalized error than direct candidate selection, and a small historical-index study separates recall from readout error. The work is included as an interface-level extension, not an evaluation of hosted Jev itself.

- **[Control the Harness, Control the Cost: Routing and Governing AI Coding Agents in the Enterprise](https://arxiv.org/abs/2609.28919)**<br>📅 <strong>2026-09-24 02:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Arian Abbasi, Alan Aqrawi, and Ted Kwartler
  - The paper uses Jev to classify coding-agent requests under a configurable taxonomy and routes only at session, side-lane, or subagent boundaries that avoid rebuilding prompt caches. Repricing public traces and simulating a 10,000-seat enterprise yields estimated savings of 14–21% under September 2026 Anthropic list prices. It is included as a decision-routing application, while the reported savings are modelled rather than measured in a live enterprise deployment.

- **[Calibrated Decision Models for Autonomous Penetration-Testing Harnesses: JEV and Laya as System One Decision Layers for LLM-Driven Pentest Agents](https://arxiv.org/abs/2609.28940)**<br>📅 <strong>2026-09-24 02:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Joas Antonio dos Santos Barbosa
  - This position and case-study paper places Jev and Laya at four bounded decisions in penetration-testing agents: finding adjudication, severity recalibration, agent pruning, and confirmation. An exploratory NeuroSploit comparison uses one Jev-assisted run and one unassisted run against a target with thirteen vulnerabilities, then proposes a domain-adapted model and evaluation plan. It is included for its security-harness architecture, not as statistically conclusive evidence of effectiveness.

- **[From Text Decisions to Pixels: An Study of Jev-Style Visual Choice Model](https://arxiv.org/abs/2609.29283)**<br>📅 <strong>2026-09-24 09:19 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xunlan Zhou, Xianliang Yang, and Li Zhao
  - PixelJev maps an image, task instruction, and runtime candidate set to a structured choice with candidate-conditioned probabilities using small open multimodal models. Seven benchmark evaluations compare frozen inference, language-side adaptation, and held-out calibration; few-shot adaptation transfers unevenly, specialist probes remain stronger on source recognition, and target accuracy does not ensure calibrated probabilities. It is included as a native-image extension of the Jev-style decision interface.

- **[Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://arxiv.org/abs/2609.30186)**<br>📅 <strong>2026-09-24 17:30 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Linghua Zhang
  - Jev-Mobile separates infrequent VLM planning from repeated Jev action selection over an accessibility-tree-derived action space. On AndroidWorld it reports 79% task success, between SeeAct-V at 78% and a step-wise VLM at 84%; among successful trajectories it reduces mean execution time by 32.7% and model API cost by 73.4% relative to the step-wise baseline. The work directly tests Jev as a high-frequency GUI execution component.

- **[LAVOIR: Teaching a Single-Pass Decision Encoder When and What to Ask with Amortized Value of Information](https://arxiv.org/abs/2609.30706)**<br>📅 <strong>2026-09-25 02:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Furkan Yilmaz, Habibe Aleyna Tasdemir, and Muhammed Faruk Gozay
  - LAVOIR extends the open Jev counterpart Laya so one pass predicts both a typed decision and the value of asking about each missing-information slot. Its question policy approximates a greedy oracle on seen schemas, improves controlled-task accuracy under a half-question budget, and gains 8.3 points where it asks on real ABCD conversations. It is included as a Jev-style method that adds clarification behavior, while reported generalization varies across benchmarks.

- **[JevSoup: System-One Routing for Training-Free LoRA Composition](https://arxiv.org/abs/2609.30922)**<br>📅 <strong>2026-09-25 07:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xiuying Wang, Jiahua Cheng, Shuotian Li, Yufan Cheng, Bowen Deng, Zhexuan Bai, and Yichen Li
  - JevSoup uses Jev probabilities to select two LoRA experts from task descriptions, then keeps the leading update and adds an orthogonalized component from the second without router training or auxiliary data. Across fourteen PorTAL tasks and three Qwen3 scales, it reports modest gains over the strongest evaluated external baselines. The paper is included as a concrete use of Jev for low-latency expert routing and model composition.

## 🧭 Technical Articles

### 2026

- **[What is Jev, TypeSafe AI's System One model?](https://vercel.com/i/what-is-jev)**<br>📅 <strong>2026-09-18</strong> · Vercel technical article · <strong>Tier A</strong> · Ben Sabic
  - Vercel's guide presents bounded decision design, evidence preparation, label definitions, abstention options, and inspectable traces using incident routing as a running example. It explicitly distinguishes schema validity from semantic correctness and recommends outcome-based threshold evaluation before automation. The article is included because it offers a sober integration perspective from a platform organization rather than treating typed outputs as intrinsically reliable.

- **[Jev: A New Way to Make Probabilistic Decisions](https://amaarora.github.io/posts/2026-19-09-jev-intro.html)**<br>📅 <strong>2026-09-19</strong> · Technical blog · <strong>Tier A</strong> · Aman Arora
  - This hands-on article explains Jev's state-and-questions interface, compares one Jev call with a structured GPT call, and walks through speculative fan-out. It clearly separates a single observed latency example from TypeSafe's broader first-party evaluation claims and raises reasonable harness-design questions. It is included as a technically detailed, cautious introduction for readers who need to understand how typed decisions compose with ordinary code.

## Search and Verification Notes

**Cutoff:** 28 September 2026 (Asia/Shanghai).

The search began with the official TypeSafe announcement to establish that Jev is a product name, not an acronym, and to identify `System One Model`, `typed decision`, `RLCD`, `Choice`, `Score`, `Noul`, calibration, workflow evaluation, and parallel decision sampling as expansion terms. Searches then covered exact-name variants, model-version references, benchmark and application terms, open implementations named in academic papers, and references or related work from the verified preprints. The 28 September update also reconciled the complete arXiv API result set for `Jev` against the README and separately searched `Jev-style`, `typed decision model`, `Reinforcement Learning for Calibrated Decisions`, and `Laya` with decision-model terms.

Primary sources searched or checked include:

- arXiv search and individual abstract/full-text pages;
- OpenReview and official ICLR proceedings;
- ACL Anthology and PMLR;
- Semantic Scholar links exposed by primary records as a secondary metadata/citation check;
- IEEE Xplore, ACM Digital Library, SpringerLink, and ScienceDirect searches;
- TypeSafe AI's official blog, documentation, and evaluation site;
- university, laboratory, company engineering, and independent technical blogs.

No directly relevant peer-reviewed Jev publication was found in OpenReview, ACL Anthology, IEEE, ACM, Springer, or ScienceDirect at the cutoff date. Searches on those services frequently returned unrelated uses of “JEV,” especially Japanese encephalitis virus, author names, or domain-specific variables; those items were excluded. ResearchGate was used only as an auxiliary discovery check and never as a canonical link.

Google Scholar was not programmatically queried because it has no supported public search API. Scopus and Web of Science were not available without subscription credentials. Because all verified Jev preprints were first submitted within ten days of the cutoff, no dependable citing-paper graph was yet available; related-work expansion therefore followed their reference lists and explicit baseline discussions instead.

### Verification Policy

Each included academic item was checked against an original arXiv, conference, journal, or publisher page for title, author list, year, venue/status, URL, and actual role of Jev. A preprint is never labeled as a conference paper without an official proceedings record. Duplicate arXiv/publisher versions are represented by one entry, preferring the published version when verified.

Links and counts should be rechecked whenever the list changes. See [CONTRIBUTING.md](CONTRIBUTING.md) for the required submission and review format.

## Contributing

Contributions are welcome for verifiable research papers, preprints, technical reports, benchmarks, and substantial research articles. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing an entry. Standalone repositories, demos, model pages, generic software, marketing copy, news summaries, and duplicates are out of scope.

## License

The curated metadata and original summaries in this repository are dedicated to the public domain under [CC0 1.0 Universal](LICENSE). Linked works retain their own copyrights and licenses.
