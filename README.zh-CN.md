<p align="center">
  <a href="https://oscar-dzy.github.io/Awesome-jev-papers">
    <img src="docs/favicon.svg" alt="Awesome JEV Papers logo" width="88" height="88">
  </a>
</p>

<h1 align="center">Awesome JEV Papers</h1>

<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<p align="center"><strong>关注证据质量的 Jev 与类型化概率决策研究文献导航。</strong></p>

<p align="center">
  <a href="https://oscar-dzy.github.io/Awesome-jev-papers"><strong>访问交互式研究图谱 ↗</strong></a><br>
  <sub>论文增长趋势 · 研究领域分布 · 可检索的文献目录</sub>
</p>

<p align="center">
  <strong>174 条文献</strong> · <strong>161 篇学术预印本</strong> · 最近核验 <strong>2026-10-14</strong> · <a href="LICENSE">CC0 1.0</a>
</p>

本仓库精选与 **Jev**（TypeSafe AI 的首个 **System One Model**）及类型化概率决策相关的论文、预印本、技术报告、评测和研究性文章。

Jev 并非缩写，其名称源自经济学家 William Stanley Jevons。TypeSafe 于 2026 年 9 月 15 日发布该模型，将其定位为非自回归决策组件：输入非结构化文本或程序状态，输出预定义的 `Choice`、`Score` 或二元类型（`Noul`）结果，并附带概率和置信度。其目标是在软件工作流中提供快速、符合预设模式的判断，而非生成自由文本。

> **收录范围。** 本仓库收集研究文献，不收录独立实现。独立 GitHub 仓库、模型页面、演示、视频、普通新闻和纯营销文章均不在范围内。代码或模型链接仅可作为已收录论文的补充材料。

> **证据状态。** Jev 是近期推出的闭源权重商业模型。截至 2026 年 10 月 14 日，尚未找到经过同行评审的 TypeSafe 架构论文或 Reinforcement Learning for Calibrated Decisions（RLCD，面向校准决策的强化学习）论文。OpenJev-RLCD 等独立研究探索的是各自的训练方法，并未披露 Jev 的专有算法。下列学术条目均为预印本，其中 160 篇来自 arXiv，1 篇来自 ResearchGate。第一方性能结论在获得独立复现前，仍属于作者或厂商报告。

> **阅读语言。** 本页提供完整中文摘要和说明。论文或文章的正式题名与作者姓名保留原文，便于检索和引用。中英文版本的分类、顺序、日期和来源链接保持一致。

## 目录

- [阅读说明](#how-to-read-this-list)
- [仓库统计](#repository-statistics)
- [交互式研究图谱](#paper-growth)
- [基础方法与通用决策模型](#foundations-decision-models)
- [自然语言处理与信息检索](#nlp-information-retrieval)
- [多模态学习与感知](#multimodal-perception)
- [具身智能与强化学习](#embodied-ai-reinforcement-learning)
- [智能体与工作流自动化](#agents-workflow-automation)
- [可信 AI 与安全](#trustworthy-ai-security)
- [科学、医疗与教育中的 AI](#science-healthcare-education)
- [网络、数据库与工程应用](#networks-databases-engineering)
- [计算社会科学与人类决策](#social-science-human-decisions)
- [检索与核验说明](#search-and-verification-notes)
- [参与贡献](#contributing)

<a id="how-to-read-this-list"></a>

## 阅读说明

- **研究领域：** 按主要研究问题或应用领域分组，每项工作仅出现一次。医学影像等专门应用归入对应应用领域；通用视觉方法归入“多模态学习与感知”。
- **跨领域工作：** 摘要会说明相关的其他研究方向。基准、方法、应用和技术报告均放在对应领域中；来源标签与收录层级用于说明证据类型。
- **Tier A — 直接 JEV 研究：** 直接介绍、研究或围绕 Jev 或明确的 Jev 风格模型开展工作。
- **Tier B — 评测与基准：** 将 Jev 或明确的 Jev 风格模型作为被测系统、基线或明确的对照对象。
- 🔥 表示奠基性来源或特别重要的独立评测，仅少量使用。
- `Preprint`（预印本）表示截至核验日期，尚未核实其会议或期刊发表记录。
- 📅 **日期：** 加粗的 UTC 时间戳为 arXiv **v1** 提交时间；仅标注日期的非 arXiv 来源使用发布日期，明确标注“报告更新”的条目除外。每个领域内均按时间从早到晚排列。仅核实年份的文献放在有日期条目之后的“发布日期待核实”小节；无日期的动态报告使用单独的“无日期动态报告”小节。DOI 注册日期不作为论文发布日期。题名、作者和摘要反映截至核验日期所确认的最新版本；`arXiv v1` 仅说明日期来源，并非摘要对应的版本。

<a id="repository-statistics"></a>

## 仓库统计

<!-- 统计数量须与下方九个研究领域、英文版本及当前核验记录保持一致。 -->

| 研究领域 | 条目数 |
|---|---:|
| [基础方法与通用决策模型](#foundations-decision-models) | 35 |
| [自然语言处理与信息检索](#nlp-information-retrieval) | 22 |
| [多模态学习与感知](#multimodal-perception) | 10 |
| [具身智能与强化学习](#embodied-ai-reinforcement-learning) | 12 |
| [智能体与工作流自动化](#agents-workflow-automation) | 19 |
| [可信 AI 与安全](#trustworthy-ai-security) | 41 |
| [科学、医疗与教育中的 AI](#science-healthcare-education) | 13 |
| [网络、数据库与工程应用](#networks-databases-engineering) | 11 |
| [计算社会科学与人类决策](#social-science-human-decisions) | 11 |
| **总计** | **174** |

174 条文献中，**161 篇为 Jev 专题或 Jev 风格的学术预印本**（160 篇来自 arXiv，1 篇来自 ResearchGate），**13 篇为研究性技术文章或报告**。

全部 **160 篇 arXiv 文献**均列出 **v1** 的 UTC 提交时间，精确到分钟。ResearchGate 预印本已核实年份，尚未核实具体发布日期。领域统计包含所有来源类型，每项工作只计数一次。

<a id="paper-growth"></a>

## 📈 交互式研究图谱

通过 **[GitHub Pages 交互式网站主页](https://oscar-dzy.github.io/Awesome-jev-papers/?lang=zh)** 探索文献集，支持中英文切换和响应式布局。本地预览与网站维护方式见[前端使用说明](site/README.md#deployment--部署)。

- **论文增长趋势：** 切换每日与累计数量，按研究领域、收录层级及日期范围筛选。
- **综述统计分析：** 比较领域分布、Tier A/B 构成、领域每日活跃度与每篇论文的作者人数；点击领域条形或热力图单元格可查看对应论文。
- **论文目录：** 搜索题名、作者及双语摘要，支持排序、分页、原始来源跳转及匹配结果的 CSV 导出。

当前快照包含 **161 篇学术论文**，其中 **160 篇具有明确日期**。时间序列按 arXiv v1 的 UTC 提交日期统计，排除日期未核实的 WaterSheep；构成统计与完整时间窗口下的目录仍保留该论文。所有研究图表均排除技术文章。近期日期可能受公告与索引延迟影响；图表反映当前精选文献集，不代表全领域穷尽统计或仓库每日新增历史。

[前端源码](docs/) · [网站数据生成脚本](scripts/build_site_data.py) · [核验快照](outputs/jev-literature-2026-10-14.json)

<a id="foundations-decision-models"></a>

## 🧠 基础方法与通用决策模型

模型架构、训练与推理方法、研究生态概览，以及覆盖多类任务的评测。

### 2026

- 🔥 **[Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)**<br>📅 <strong>2026-09-15</strong> · TypeSafe AI 博客 · <strong>Tier A</strong> · Diogo Almeida
  - 这篇发布文章定义了 Jev 的接口约定：将文本或结构化状态映射为带类型约束的概率决策，不生成字符串。文章介绍了并行采样、RLCD、工作流评测及其声称的延迟和成本优势，也披露了厂商自评的重要局限。截至核验日期，尚未找到详细说明 Jev 架构或训练方法的 TypeSafe 论文，因此将其作为权威的一手来源收录。

- **[What is Jev, TypeSafe AI's System One model?](https://vercel.com/i/what-is-jev)**<br>📅 <strong>2026-09-18</strong> · Vercel 技术文章 · <strong>Tier A</strong> · Ben Sabic
  - Vercel 的指南以事件路由为贯穿示例，介绍有限选项决策设计、证据准备、标签定义、弃权选项和可检查的执行轨迹。文章明确区分模式有效性与语义正确性，并建议在自动化之前依据实际结果评估阈值。本文提供了平台机构审慎的集成视角，而非将类型化输出本身视为可靠，因此被收录。

- **[Jev: A New Way to Make Probabilistic Decisions](https://amaarora.github.io/posts/2026-19-09-jev-intro.html)**<br>📅 <strong>2026-09-19</strong> · 技术博客 · <strong>Tier A</strong> · Aman Arora
  - 这篇实践文章解释 Jev 的状态与问题接口，将一次 Jev 调用与一次结构化 GPT 调用比较，并逐步讲解推测式扇出。文章明确区分单次观测的延迟示例与 TypeSafe 更广泛的第一方评估结论，并提出合理的评测框架设计问题。本文为需要理解类型化决策如何与常规代码组合的读者提供了技术细致且审慎的入门介绍，因此被收录。

- 🔥 **[this-that-model-1.0: A typed decision model that decides in 30 ms, for a millionth of a cent](https://arxiv.org/abs/2609.23886)**<br>📅 <strong>2026-09-20 21:43 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zehua Cheng, Wei Dai, and Jiahao Sun
  - 作者提出了一个 20 亿参数、单次前向计算的类型化决策模型，并在留存记录的 68 道问题上与 Jev 直接比较。该模型在此样本中报告了更高的准确率和更低的 Brier 分数，但两种方法都难以处理需要连续算术计算的任务。本文提供了明确的 Jev 基线对照，也说明类型化决策接口并非某一家供应商独有。

- **[Universal Fractal Natural Language Decision Map: Real-Time Edge Triage Across Heterogeneous Domains](https://arxiv.org/abs/2609.25498)**<br>📅 <strong>2026-09-21 23:57 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Volkan Dağlı, Zerrin Dağlı, and Dağhan Dağlı
  - 作者提出一个确定性的分形特征引擎，提供与 Jev 兼容的布尔、选择和有序等级输出，并在包含 231 项决策的 JevBench 上评估。全文区分了未经校准的 55.4% 准确率与校准子集上的 81.65%，并报告较低的 CPU 延迟。本文提供有文档说明的类型化接口替代实现，但子集校准、小规模测试及作者自行测量限制了对泛化和鲁棒性的更广泛主张。

- **[NumericJev: Jev-like LLM Numerical Decoding with Multiway Decision Trees](https://arxiv.org/abs/2609.28587)**<br>📅 <strong>2026-09-23 13:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Weiwei Ye, Hangchen Liu, and Renhe Jiang
  - NumericJev 将数值预测转化为反复选择数值区间，使任何具有 Jev 风格结构化选择接口的 LLM 都能通过多叉决策树逐步细化数值，无需训练或访问隐藏状态。在包含 100 个数值的算术网格上，它报告了低于直接候选选择的范围归一化误差，小型历史指数研究则区分了记忆召回错误与读取错误。本文属于接口层扩展，并非对托管 Jev 本身的评估。

- **[Jev in the Wild: A Data-Driven Analysis of the Jev Model's Functionality, Applications and Ecosystem](https://arxiv.org/abs/2609.30216)**<br>📅 <strong>2026-09-24 17:46 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guoming Ling, Muen Xue, and Zijian Ye
  - 这项生态研究分析了截至 2026 年 9 月 22 日从 GitHub 收集的 2,170 个公开 Jev 项目，梳理应用如何组合属性判断、评分、动作选择、过滤以及模型或工具路由。研究发现早期采用速度很快，但公众关注度与项目分布并不一致。本文作为首批量化描绘 Jev 使用情况的研究收录；基于代码仓库的样本反映的是可见实验，而非生产部署。

- **[JevSoup: System-One Routing for Training-Free LoRA Composition](https://arxiv.org/abs/2609.30922)**<br>📅 <strong>2026-09-25 07:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xiuying Wang, Jiahua Cheng, Shuotian Li, Yufan Cheng, Bowen Deng, Zhexuan Bai, and Yichen Li
  - JevSoup 根据任务描述，使用 Jev 概率选择两个 LoRA 专家，保留主要专家的参数更新，再加入第二个专家经正交化处理的分量，无需训练路由器或使用辅助数据。在十四项 PorTAL 任务和三种 Qwen3 规模上，研究报告了相较所测最强外部基线的小幅提升。本文展示 Jev 用于低延迟专家路由与模型组合的具体方式。

- **[PACT: Pairwise-Anchored Calibrated Tuning for Single-Token Typed Decisions](https://arxiv.org/abs/2609.35865)**<br>📅 <strong>2026-09-26 01:07 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yida Lin
  - PACT 使用对比样本对、答案编码置换、证据移除和有序等级惩罚，调整开放 Nimble 类型化决策模型的训练方案。在三个随机种子、324 个留出样本上，它减少了标签位置变化导致的翻转和有序预测误差，但准确率没有超过已发布方案。本文属于 Jev 风格训练研究，最强证据集中在鲁棒性与优化稳定性，而非更好的校准或托管 Jev 性能。

- **[Typed Decision Models: An Early Evidence Audit and Evaluation Checklist](https://arxiv.org/abs/2609.32160)**<br>📅 <strong>2026-09-26 02:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Lijuan Tang and Yuemeng Zheng
  - 这篇早期综述审查了 Jev 发布后前九天出现的 28 篇论文，将其发现与受约束解码、概率读取、校准和模型级联联系起来。现有证据对延迟与成本收益的支持，比对类型化输出本身能独立提高准确率的支持更充分；作者据此提出了包含十四项内容的评测清单。本文提供了结构化的证据梳理，但结论仍受文献积累时间短、变化快的限制。

- **[JET: Justification Evaluation in Transformer](https://arxiv.org/abs/2609.33874)**<br>📅 <strong>2026-09-27 19:50 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shenghao Ding
  - JET 从预训练语言模型和视觉语言模型中读取候选项似然，无需额外训练即可共享前缀计算。研究在消费级硬件上衡量准确率与执行成本，并以 Jev 作为外部决策模型参照。受控实验区分缓存复用和输入准备带来的加速，可选的推理过程则改变准确率与吞吐量之间的权衡。本文提供了具体的替代读取方法与比较，但硬件和模型差异限制了直接的延迟排名。

- **[Koa-decision: Fast and Consistent Structured Decision Making with Generative LLMs](https://arxiv.org/abs/2609.36115)**<br>📅 <strong>2026-09-28 18:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shenghong Dai, Shiva Kumar Pentyala, Yingchi Liu, Shubham Mehrotra, Suman Banerjee, James Zhu, Bin Bi, Sitaram Asur, and Phil Mui
  - Koa-decision 添加原子标签 token，并进行监督微调，使生成式模型通过一次解码步骤给出结构化决策。它在意图路由基准上报告了 85.5% 的准确率和约半秒响应，包含与 Jev 的直接比较，并支持多模态、多标签任务。本文提供了专用决策服务的一种实测替代方案，但最有力的服务性能比较仅对应所评估的生产工作负载。

- **[Dyad: Extending Large Language Models with Native Typed Decision-Making](https://arxiv.org/abs/2609.36116)**<br>📅 <strong>2026-09-28 18:50 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yundaichuan Zhan, Weishi Wang, Wenbiao Liu, Daniel Dahlmeier, Chengwei Qin, Juncheng Li, Fredrik D. Johansson, and Zhongqi Yue
  - Dyad 为 LLM 增加动作编码器，根据交互状态对候选描述评分，可独立训练，也可利用环境反馈联合训练。它在 JevBench 和 ALFWorld 上与 Jev 直接比较，并报告更强的智能体表现。本文作为类型化动作架构及明确的 Jev 对照收录；其中 JevBench 的延迟参照来自已发布的 API 测量，不能解释为硬件条件匹配的比较。

- **[Evaluating and Benchmarking the System One Model Jev](https://arxiv.org/abs/2609.37647)**<br>📅 <strong>2026-09-29 14:15 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tobias Deußer, Lorenz Sparrenberg, and Rafet Sifa
  - 这项零样本研究使用冻结模板和 346,009 次请求，在三十七个数据集上评估 Jev，并对相同请求读取 Qwen 和 Gemma 的精确选项 token 概率进行比较。Jev 在多个数据集上领先，但低资源语言、噪声标签和评分准则任务仍较困难，二元阈值也需谨慎选择。本文广泛审查准确率、校准、延迟和成本，不过现有控制并未排除模型记忆问答对的可能。

- **[Can a Cacheable Decision Model Follow Rules?](https://arxiv.org/abs/2609.37832)**<br>📅 <strong>2026-09-29 15:37 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Dushyant Rajput, Nirdesh Chauhan, and Siddharth Kosaraju
  - 研究将基于 Qwen3-4B、输出 Choice、Score 和 Noul 概率的 Certo 决策模型，从候选项联合评分改为可缓存的独立编码。缓存降低了实测开销，却损害了对规则的敏感性；反事实训练恢复了合成任务表现，但未证明能迁移到未见过的真实规则。本文研究 Jev 风格接口的权衡，截断控制、较小的真实规则子集及尚未厘清的规则依赖性都限制了结论。

- **[Benchmarking System One decision models against trained classifiers and language models for automated decision gates](https://arxiv.org/abs/2610.00346)**<br>📅 <strong>2026-09-29 19:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Amir Rafe and Subasish Das
  - 研究使用统一框架，在工作流、意图和社会科学决策上比较八个决策模型检查点、两个生成式模型，以及监督或零样本分类器。排名会随监督方式、概率读取方法、选项数量和服务条件假设变化；Jev 在分布内设定的风险阈值仍会放行大量范围外请求。本文提供了有条件适用的设计依据和直接 Jev 比较，包括标签名称敏感性，以及从已训练的第一阶段升级处理所带来的成本权衡。

- **[OpenJev-RLCD: A Working RLCD Implementation](https://arxiv.org/abs/2609.38850)**<br>📅 <strong>2026-09-30 03:08 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhimin Gao and Pichao Wang
  - OpenJev-RLCD 在采样推理过程后，使用适当评分规则评价答案分布，并通过先校准、后强化学习来稳定训练，从而实现面向校准决策的强化学习。在两个推理任务上，基于 Qwen3-1.7B 的实验报告了优于温度缩放训练基线的选择性预测表现。本文提供了独立且可检查的 RLCD 方法；作者明确不声称还原了 TypeSafe 的专有训练算法，结果也受任务与模型规模限制。

- **[Bongard: Training Machine Intuition](https://arxiv.org/abs/2609.39111)**<br>📅 <strong>2026-09-30 06:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Li Ding, Haidi Jin, and Chen Ji
  - Bongard 是一个开放的编码器—解码器决策模型，可在多个问题间共享状态编码，并利用监督判断、语义关系和动作结果进行训练。它在 23,900 项 DecisionBench 决策上报告了 78.05% 的准确率，并包含相同样本上的 Jev 对比。本文作为独立训练的 System One 替代模型收录，提供架构和训练消融；但本地延迟数据与托管模型的比较对应不同服务条件。

- **[AnyJev Technical Report](https://arxiv.org/abs/2610.00831)**<br>📅 <strong>2026-09-30 23:43 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiamu Zhang, Tianze Yang, Yucheng Shi, Evan Chen, Zixiang Nie, Kelly Wan, Liangjie Hong, Ninghao Liu, and Liang Wu
  - AnyJev 从预训练 LLM 提取选项 token 概率，无需更新参数即可校正标签先验和选项顺序偏差。在两个含二十个选项的任务上，循环轮换提升了全部十一个受测模型的准确率，提前停止规则则在计算量与完整轮换结果的一致性之间权衡。本文提供可检查的 Jev 风格推理方法，但每次轮换都需要重新预填充，较强保证仅在选择与认证使用互不重叠的数据划分时成立。

- **[Introducing Clef: our open-source decision models, and new RL fine-tuning platform](https://blog.cloudflare.com/clef-decision-models/)**<br>📅 <strong>2026-10-01</strong> · Cloudflare 技术文章 · <strong>Tier B</strong> · Michelle Chen, Alex Reneau, and Kevin Flansburg
  - Cloudflare 介绍了基于 Qwen 的决策模型 Clef 与 Clef-flash，涵盖并行模式评分、校准目标和多模态输入，并报告在公开基准与工作流评估中与 Jev 的直接比较。本文因其训练细节和决策模型的实测比较而被收录，而非因配套产品发布。准确率与延迟数据由厂商报告，依赖服务部署方式，且 Clef 并未在所有任务上占优。

- **[Permutation-Robust Decision Modeling with Candidate-Independent Block-Causal Attention](https://arxiv.org/abs/2610.01601)**<br>📅 <strong>2026-10-01 12:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guy Amit
  - 这份技术报告在因果注意力中隔离候选块并重置位置，以减少对选项顺序的依赖。在 Open-Jev 类型化决策数据上，条件匹配的 Gemma 和 Qwen 实验表明置换敏感性更低、准确率仍具竞争力，消融将候选隔离识别为主要贡献。本文研究开放 Jev 风格评分的架构，但发布的较大模型检查点使用了不同于匹配实验的训练混合数据与上下文长度。

- **[LLM-as-Jev: LLMs Are Already Jev-Style Decision Models -- When and How to Fine-Tune Them](https://arxiv.org/abs/2610.02076)**<br>📅 <strong>2026-10-01 17:15 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yinheng Li and Justin Wagle
  - LLM-as-Jev 不改变语言模型架构，直接读取预定义选项的概率，并可通过带 KL 锚定的微调保留生成行为。最新修订加入有预算限制的 Thinking Jev 与多模态决策，发现冻结骨干已具有较强表现，微调收益主要出现在较小模型或路由任务。本文区分推理读出、额外思考和适配，而不预设每项 Jev 风格能力都需要专门架构。

- 🔥 **[General Decision Models: Benchmarking and Insights Beyond Jev](https://arxiv.org/abs/2610.03935)**<br>📅 <strong>2026-10-02 18:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Feiyu Duan, Jiayu Lin, Jia Wang, Jun Xiang, Jialiang Wu, Xinnong Zhang, Hanqi Yan, Siyuan Wang, and Zhongyu Wei
  - JEVal 在三十六个数据集的 11,257 个双语样本上比较二十五种模型配置，并进一步研究智能体轨迹与社会模拟。快速决策模型在证据已提供时最有优势，但不确定性错误和累积失误会削弱系统级结果。修订工作提出推理蒸馏的 SII-Decision-4B 与 SII-Decision-27B，较大模型在 JEVal 上与 Jev 相当。本文将局部决策质量、推理成本及下游可靠性联系起来。

- **[AIM-Decision: Jev vs Kev vs LLMs](https://aimultiple.com/decision-models)**<br>📅 <strong>2026-10-05</strong> · 独立技术评测 · 报告更新 · <strong>Tier B</strong> · Berk Kalelioğlu
  - 更新后的 AIMultiple 报告在 1,655 道分类题上测试二十二个决策模型，并在五十项浏览器任务上测试其中十九个。Jev 仍然便宜，但分类排名不能预测浏览器任务成功率，请求限制也使部分模型无法完成统一协议。本文提供原创测量并使用共同运行环境；浏览器任务仅尝试一次、服务配置异构且未评估校准，限制了更广泛的结论。

- **[GraphDecisionBench: Benchmarking System One Models on Graph Tasks](https://arxiv.org/abs/2610.06354)**<br>📅 <strong>2026-10-05 13:54 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xianliang Yang, Yapu Zhang, and Li Zhao
  - GraphDecisionBench 通过不同图任务设置、条件匹配的图文表示以及启发式候选方案对照，评估包含 Jev 在内的十四种模型—接口配置。Jev 能识别邻接关系，却不能可靠解决更广泛的结构问题；结合图与文本并非总有帮助，可行输出也可能是质量较差的解。本文在可比较的候选接口下，区分图识别、表示影响与求解质量。

- **[SanSi: A Looped Typed Decision Model for System 1.5 Thinking](https://arxiv.org/abs/2610.07730)**<br>📅 <strong>2026-10-06 04:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shuyu Gan, Young-Jun Lee, and Dongyeop Kang
  - SanSi 将循环语言模型转化为类型化决策模型，在共享层最多八次循环中的每次循环后监督选项概率。在 10,027 项决策上，该方法优于匹配的单次前向基线；受控任务检验了推理深度，验证器实验则研究了下游训练。本文作为直接与 Jev 比较的 Jev 风格架构被收录，探索了无需生成推理文本即可增加内部计算的方法。

- **[JevForest: Path Voting for Budgeted Feature Acquisition](https://arxiv.org/abs/2610.10615)**<br>📅 <strong>2026-10-07 07:23 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yu Yan
  - JevForest 利用自助采样树路径的投票，在特征预算约束下选择让 Jev 回答哪些语义问题。AG News 和 TREC 的小规模试验给出了相反的任务级方法排名，而将全部八个问题一次提出，比按森林策略顺序询问四个问题更快、更便宜且更准确。本文作为已实现的特征获取工作流被收录，其结果区分了问题数量预算与实际服务成本，尚未确立普遍的部署优势。

- **[Specialized Decision Models vs. General-Purpose LLMs: Benchmarking Jev Across Knowledge, Reasoning, and Multilingual Tasks](https://arxiv.org/abs/2610.11978)**<br>📅 <strong>2026-10-08 13:52 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xing Li, Qingcheng Chang, Jinzhong Ning, Changfeng Xu, Shenlong Zhang, Yijia Zhang, Ling Luo, and Hongfei Lin
  - 作者在十三个知识、推理和多语言选择题基准上，将 Jev 与十九个 LLM 比较。Jev 在知识与常识方面具有竞争力，但在 MathQA 上低于所有对照，暴露出多步计算上的明显弱点。本文提供广泛的直接基准比较；不同档位的模型并非全部在统一协议下评估，基于概率的升级处理仍属于未来工作。

- **[Large Decision Models: Repurposing Large Language Models as Single-Pass Decision Makers](https://arxiv.org/abs/2610.15501)**<br>📅 <strong>2026-10-11 10:04 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ziyi Chen, Yan Zhang, Jianhui Wei, Jianing Yin, and Daoan Zhang
  - LDMs 通过多样化决策监督与推理分布蒸馏，使语言模型在一次预填充中对运行时定义的标签评分。DecisionVista 测试新模式及留出的人工标注来源，发现迁移表现适度改善，相较推理生成有明显的实测加速。本文作为 Jev 风格训练与评估框架收录；推理在新模式上仍更强，所报告的置信度路由收益是在开发集上测得的。

- **[Correct Choices, Failed Sequences: Choice2Seq Benchmarks Correctness Retention Across Output Interfaces](https://arxiv.org/abs/2610.16191)**<br>📅 <strong>2026-10-12 05:11 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tianyou Lai, Wentao Yue, Zhiying Deng, and Qilei Li
  - Choice2Seq 在匹配的问题上比较完整答案选择与局部决策逐步构造。Jev 在串行构造中仅保留算术与词汇检索正确选择的 33.0% 和 2.1%；由候选答案支持的选项和位置提示可部分修复不同失效。本文作为接口组合基准收录，区分正确性、计划忠实度和输出合规性；对话状态结果说明差距同时取决于模型与任务。

- **[FunDM: Cheap & Label-Free Decision Models from Frozen Language Models](https://arxiv.org/abs/2610.17175)**<br>📅 <strong>2026-10-12 17:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ujjawal K. Panchal
  - FunDM 无需正确答案标签，训练小型决策头模仿冻结语言模型的答案概率，并仅使用部分骨干层。一个 Qwen3-8B 变体保留了完整模型几乎全部的平均多项选择准确率，同时改善实测吞吐量和内存占用；另行训练的决策头用于选择编程智能体运行结果。本文作为 Jev 风格蒸馏方法收录，效率与选择表现依赖教师模型、任务和服务配置。

- **[Releasing the Inner Jev: A Simple Recipe for Open Decision Models](https://arxiv.org/abs/2610.17205)**<br>📅 <strong>2026-10-12 17:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jonathan Geuter, Andrew Cheng, and David Alvarez-Melis
  - 作者在四个开放语言模型上比较字母 logit 读出与简单的 LoRA 决策头微调，并与 Jev 对照。其 OpenDecisions 验证集结合准确率与校准，微调后的 Gemma 在该数据集和 JevBench 上均优于 Jev。本文作为明确的复现及基线比较收录，区分未经训练读出的能力与额外微调收益，不将作者报告的基准优势推广到所有决策工作负载。

- **[StartLux-Decision: AutoThink Decision Models with Reinforcement Learning for Calibrated Deliberative Decisions](https://arxiv.org/abs/2610.17309)**<br>📅 <strong>2026-10-12 19:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xialie Zhuang, Zunhai Su, Jia Pan, Ngai Wong, Guanhua Chen, and Chuan-Wei Kuo
  - StartLux-Decision 同时提供单次前向的 Instant 模型与对不确定案例启动推理的 AutoThink 变体。其 RLCD² 方法奖励概率质量改善并惩罚过长推理，报告了更短推理轨迹及在公开 Decision Index 子集和计算对比样本上的更强表现。本文作为独立 Jev 风格训练框架收录，包含明确的 Jev 比较；RLCD² 是作者公开的方法，并非 TypeSafe 专有 RLCD 的披露。

- **[Jeva: System One Models from First Principles](https://arxiv.org/abs/2610.18773)**<br>📅 <strong>2026-10-13 17:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Qi Li and Xinchao Wang
  - Jeva 独立编码请求与可复用选项，依据固定选项记忆细化请求状态，并单独估计答案覆盖情况。该设计支持类型化输出、候选重排、空结果及大规模选项集合。本文作为 Jev 研究方向中的原生决策替代架构收录，区分报告中的重排稳定性、缓存收益与在评估分布之外的普遍校准或可靠缺失答案检测。

### 发布日期待核实

- **[WaterSheep 0.1.0: Typed Decisions with Calibrated Probabilities from a Single Encoder Pass](https://doi.org/10.13140/RG.2.2.28606.45122)**<br>◉ <strong>2026 · 具体日期待核实</strong> · ResearchGate 预印本 · <strong>Tier A</strong> · Samrat Dutta
  - WaterSheep 在 ModernBERT 上微调决策头，并按问题类型进行温度缩放，为 Noul、Choice、Score 和多标签任务输出概率。[作者项目说明](https://github.com/SamratDuttaOfficial/WaterSheep)报告分布内准确率为 77.8%，留出数据集准确率为 61.2%，对应 ECE 为 0.026 和 0.043。本文作为开放的 Jev 风格模型被收录，并提供兼容接口；仅支持英语、长输入截断和评分任务表现较弱限制了其用途。DOI 已确认预印本元数据；由于论文全文无法访问，本摘要依据作者项目说明整理。

<a id="nlp-information-retrieval"></a>

## 💬 自然语言处理与信息检索

文本分类、多语言理解、文档推理、语言模型评判、搜索与推荐。

### 2026

- **[Testing Jev on Public and Private Data: Classifier or Filter?](https://amankumar.ai/blogs/jev-measured)**<br>📅 <strong>2026-09-18</strong> · 独立技术评测 · <strong>Tier B</strong> · Aman Kumar
  - 这项可复现的工程研究在四个公开分类数据集及私有生产决策上进行了约 16,000 次调用，比较 Jev 与较小的生成式模型。对短输入、标签明确的任务，Jev 的高置信度预测表现较好；对长输入和边界模糊的策略，表现较弱。收录本文是因为它实际检验了校准与基于置信度的回退行为，而非仅复述 TypeSafe 的速度声明。

- **[JEV-as-a-Judge: Accept When Confident, Escalate When Unsure](https://arxiv.org/abs/2609.26550)**<br>📅 <strong>2026-09-22 15:05 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yubo Li, Yidi Miao, Ramayya Krishnan, and Rema Padman
  - 这项评测以盲法人工裁定为参照，将 Jev 与十六个生成式或奖励模型评判器进行比较。当结论可以从给定文本中读出时，Jev 接近最强对照；涉及数学、代码和逻辑推导时则落后。修订版中，冻结的置信度级联以对照模型 41% 的费用将留出集准确率提高了 0.9 个百分点，并在两项实际工作负载上达到相当准确率；对抗性文风和无参考答案场景仍是局限。

- **[Same Scores, Different Decisions: Evaluating JEV and Language Models for Legal Document Understanding](https://arxiv.org/abs/2609.27678)**<br>📅 <strong>2026-09-23 10:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Fan Zhang, Yankai Chen, Zhuohan Xie, Yixi Zhou, Sijia Peng, Lei Fan, Xinhua Ji, Cunyuan Zheng, Huangyong Shan, Philip S. Yu, Xue Liu, Yu Chen, Preslav Nakov, and Songwei He
  - 作者在 ContractNLI 上将 Jev 与九个语言模型进行比较，改变假设是否可见、请求的输出内容、输出顺序及重复调用条件。Jev 的成本和中位延迟最低，但托管语言模型的基线准确率更高；汇总分数还会掩盖相互抵消的纠错、退化以及持续存在的样本级错误。本文关注请求配置变化时法律判断是否仍然正确，而不仅是平均分是否稳定。

- **[Decision Models vs. LLMs as Rubric Judges: Cheaper, Faster, and Wrong in the Same Places](https://arxiv.org/abs/2609.29769)**<br>📅 <strong>2026-09-24 13:16 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Delip Rao and Chris Callison-Burch
  - 修订后的研究在九个人工标注评测面板上，以整套评分准则和逐条准则两种设置，比较 Jev、Perplexity Decider 与三个轻量级 LLM 评判模型。决策模型经常以更低实测成本和延迟取得有竞争力的结果，但 LLM 判断有超过 85% 重复了它们最自信的错误。即使使用更高阶后备模型，相对最强单一评判模型的增益也有限。本文说明，即使置信度排序与服务成本有价值，相关错误仍会限制级联收益。

- **[LAVOIR: Teaching a Single-Pass Decision Encoder When and What to Ask with Amortized Value of Information](https://arxiv.org/abs/2609.30706)**<br>📅 <strong>2026-09-25 02:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Furkan Yilmaz, Habibe Aleyna Tasdemir, and Muhammed Faruk Gozay
  - LAVOIR 扩展了开放的 Jev 替代模型 Laya，使一次前向计算同时预测类型化决策，以及询问各个缺失信息槽位的价值。其提问策略在已见模式上接近贪心理想策略，以一半提问预算提高受控任务准确率，并在真实 ABCD 对话中实际提问的样本上提高 8.3 个百分点。本文为 Jev 风格模型增加澄清行为，但不同基准上的泛化表现并不一致。

- **[Emo-Jev: Probabilistic Reasoning for Emotion Classification with Jev](https://arxiv.org/abs/2610.08829)**<br>📅 <strong>2026-09-27 01:35 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yazhou Zhang and Junhao Yu
  - Emo-Jev 通过组合原子级 Jev 判断，或汇总多条判断路径，完成情感、情绪、讽刺和幽默分类。在八个数据集上，直接 Jev 分类的实测延迟与成本较低，但平均宏 F1 落后于最强 LLM；提出的两种变体虽在个别数据集上获益，却都未提高这一平均值。本文检验增加概率分解是否有用，固定的问题集合和纯文本任务限制了结论推广。

- **[Decide, Don't Generate: Competitive Dimensional ABSA with Jev's Typed Decisions](https://arxiv.org/abs/2609.35293)**<br>📅 <strong>2026-09-28 14:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yiqun Zhang, Peidong Wang, Zihan Wang, and Shi Feng
  - 研究将多语言维度化方面级情感分析拆为 Jev 评分、标签概率与布尔判断，在不更新主干模型的情况下拟合 488 个校准系数。在 SemEval 任务数据上，论文报告了有竞争力的回归与提取结果；消融表明，监督校准及组合的文本跨度边界证据贡献了大部分收益。本文属于结构化预测应用，其表现依赖学习得到的任务对齐，而非原始零样本决策。

- **[Chinese-Jev: Bringing System One Model to Chinese-Language Tasks](https://arxiv.org/abs/2609.36965)**<br>📅 <strong>2026-09-29 08:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zexiao Wang, Zihao Zhang, Xudong Wang, Pan Wang, Ziyi Ye, Haoyu Zhao, Zuxuan Wu, and Shuicheng Yan
  - Chinese-Jev 使用一千万条中文样本的候选概率目标训练轻量编码器，随后分别进行医疗、法律和金融领域适配，并在 CJ-Bench 上评估。作者报告有竞争力的通用准确率、因领域而异的表现，以及快于托管 Jev 的推理，包括移动端部署。本文作为独立的中文 Jev 风格模型收录，其收益来自自身训练与服务配置，而非对 TypeSafe 闭源模型的修改。

- **[Decision-Oriented Recommendation Reranking: An Empirical Study of Its Promise and Limitations](https://arxiv.org/abs/2609.40241)**<br>📅 <strong>2026-09-30 17:33 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Hanjia Lyu and Yinglong Xia
  - 修订后的重排序研究在三个 Amazon Reviews 领域和四种候选集合规模上，将 TypeSafe Jev、OpenAI Decisions 与专门推荐器及 LLM 重排序器比较。Jev 经常以低于更强生成式对照的观测延迟，提供具竞争力的推荐质量，但决策专门化本身并不保证更高质量或顺序鲁棒性。本文比较依赖实现的排序权衡，而非主张决策式推理具有普遍优势。

- **[HakemBench: A Turkish Benchmark of Typed Decisions](https://arxiv.org/abs/2610.02293)**<br>📅 <strong>2026-10-01 16:55 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Sait Furkan Teke
  - HakemBench 在七个领域的 4,275 个土耳其语类型化问题上评估 Jev 及其他决策或生成式模型，结合决策质量、校准、选择性自动化和鲁棒性测试，并发布基准及不确定性区间。本文提供了多语言 Jev 对比，但标签主要由模型生成，作者也披露其自有模型开发参考过测试结果，这些因素限制了对独立泛化能力的主张。

- **[SearchJev: A Fast and Calibrated System-1 Model for Search Agents](https://arxiv.org/abs/2610.05107)**<br>📅 <strong>2026-10-04 10:30 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Congfeng Cao, Lipeng Zuo, Konstantinos Papakostas, Qiwei Xu, Songwei Xu, Lun Zhou, Zhaochun Ren, Yougang Lyu, and Xiaohui Yan
  - SearchJev 从软标签中学习搜索状态决策，无需生成文本即可返回选项概率，并将不确定情况交给推理模型。在六类决策上，研究报告其推理速度与校准表现优于同等规模的生成式 Qwen 模型；BrowseComp-Plus 智能体的答案准确率和实际搜索耗时也有所改善。本文作为独立的 Jev 风格搜索模型被收录，其结果来自自身训练与双系统智能体设计，而非托管的 Jev 服务。

- **[ufakzeka-karar: An Open Turkish Typed-Decision Model with Order-Invariant Option Scoring](https://arxiv.org/abs/2610.06744)**<br>📅 <strong>2026-10-05 17:22 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Sait Furkan Teke
  - ufakzeka-karar 是一个 1.82 亿参数的土耳其语类型化决策模型，其候选项隔离的评分头使评分不受选项顺序影响。研究报告了有竞争力的 CPU 推理表现，并在 HakemBench 上研究交叉熵、强化学习和温度缩放。本文作为开放的 Jev 风格语言专用模型被收录；作者明确披露三个评测方向的训练参考了测试信息，且开发集上的校准改进并未稳定迁移到留出问题。

- **[CLM-as-a-Judge: Evaluating an Open Contrastive Decision Model on Public Judge Benchmarks](https://arxiv.org/abs/2610.07177)**<br>📅 <strong>2026-10-05 18:01 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Gowthamkumar Nandakishore
  - 这项预注册评测在六个公开评判任务上，比较对比式决策模型、Laya、生成式评判器、奖励模型和简单基线。校准与顺序稳定性不能弥补较弱的评判准确率，对比式模型的级联几乎将所有样本都转交后续处理。本文包含开放 Jev 风格 Laya 基线的实测结果并公开预测，但大量输入截断限制了不同上下文窗口模型之间的比较。

- **[An Independent Evaluation of TypeSafe's Jev](https://www.vals.ai/blogs/independent-evaluation-of-jev)**<br>📅 <strong>2026-10-06</strong> · 独立技术评测 · <strong>Tier B</strong> · Connor Frank
  - Vals AI 在 400 项有来源依据的事实核查和预注册的 396 题 LegalBench 子集上，将 Jev 与其他十一个系统比较。在事实核查上，Jev 以明显更低的实测成本达到数个前沿模型的水平；但法律任务准确率位列末位，且留出集错误率超过了 1% 的预算。本文同时检验有利与不利任务场景，不过有限的基准子集及仅对已回答样本评分的方式限制了比较。

- **[Same-Number Citation Swaps: Stress-Testing Jev as a Financial Evidence Judge](https://arxiv.org/abs/2610.08675)**<br>📅 <strong>2026-10-06 16:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Chuhong Xu, Bo Su, Ziyao Chen, Ruiyang Xu, Shimeng Dai, and Xinyu Qiu
  - 这项受控金融核验研究保持操作数和算术计算不变，只在数值相同的来源单元格之间交换引用。Jev 既会接受部分角色错误的引用，也会拒绝部分等价且有效的证据；显式列标签能改善一些案例，却未消除这种权衡。本文将证据角色识别与数值匹配分离，并在三十六个新来源页面上进行了单独复核的后续研究。

- **[An Evaluation of Inception's Mercury Decide](https://www.vals.ai/blogs/evaluation-of-mercury-decide)**<br>📅 <strong>2026-10-08</strong> · 独立技术评测 · <strong>Tier B</strong> · Connor Frank
  - 这篇 Vals AI 后续报告沿用 Jev 研究的事实核查与 LegalBench 协议，评估 Mercury Decide。Mercury 在事实核查质量上与 Jev 相当，法律准确率更高，单条核查成本更低；多个判断共享同一文档时，Jev 的扩展表现更好。本文直接比较决策模型，但共用数据集意味着它不属于独立复现，发布时价格和无法固定版本的 Mercury 接口也限制了可复现性。

- **[Can Decision Models Understand Stance? Evaluating Jev Against General-Purpose LLMs](https://arxiv.org/abs/2610.11901)**<br>📅 <strong>2026-10-08 13:05 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xing Li, Jinzhong Ning, Yijia Zhang, Liang Yang, and Hongfei Lin
  - 这项评测在英语立场检测与中文对话立场任务上，将 Jev 与四个通用 LLM、两个微调模型比较。Jev 在 VAST 上有竞争力，在 ZS-CSD 上则落后于更强的 LLM，错误集中在立场方向和回复关系，并非仅由对话更长造成。本文提供直接的多语言任务比较，但两个数据集不足以建立通用语言能力或对话理解能力的整体排名。

- **[Does System One Transfer? Calibrated Typed-Decision Models, Label Budgets, and Translation for Indonesian Regional Languages](https://arxiv.org/abs/2610.14112)**<br>📅 <strong>2026-10-09 04:12 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Romi Fadli,  Rusdah, Wahyu Ramadani Putri Utami, and Zulfa Malika Amana
  - 这项预注册研究在印度尼西亚地方语言的情感与情绪任务上评估 Jev 和 Laya-multilingual。使用人工提供的印度尼西亚语译文，最多使 Jev 准确率提高 37.2 个百分点；即使期望校准误差没有增大，模型在地方语言中识别自身错误的排序能力仍会下降。置信度路由可改善准确率与成本的权衡。本文区分语言迁移、标注预算、整体校准与有用的不确定性排序。

- **[The Company a Question Keeps: Auditing Open Jev-Style Models for Retrieval](https://arxiv.org/abs/2610.14631)**<br>📅 <strong>2026-10-10 06:29 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jianbo Chen
  - 这项检索审查在来自 92 个 TREC 查询的 276 个构造状态上测试七个开放 Jev 风格模型，分别改变请求问题、证据和候选资格。Nimble 会随请求集合扩展而改变判断；诊断干预定位了 Nimble 与 Von 的序列化影响，而 Laya 在 FP32 下的概率变化低于报告精度。本文检验请求独立性，模型特定机制与查询级不确定性不支持将结论直接推广到托管 Jev。

- **[Calibrated Typed Decisions for Entity, Relation, and Event Extraction](https://arxiv.org/abs/2610.17113)**<br>📅 <strong>2026-10-12 17:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yang Wang, Hanlin Xiao, Yanan Ma, Chenghao Xiao, and Chenghua Lin
  - CalOn 联合编码文本与用户指定类型，以空类别和显式概率分布完成实体、关系及事件提取。其训练加入明确受 TypeSafe RLCD 思路启发的采样决策奖励，并在四十个基准上评估。本文作为类型化接口向结构化提取的扩展收录；它既未评估托管 Jev，也未复现专有 RLCD，置信度校正的效果需要与提取 F1 分开判断。

- **[Cheap, Consistent, Calibrated, but Biased? Typed Decision Models as Judges](https://arxiv.org/abs/2610.18122)**<br>📅 <strong>2026-10-13 10:35 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Fabian Lukassen, Christoph Weisser, and Alexander Silbersdorff
  - 作者将 CALM 偏差测试用于包括 Jev 在内的八个类型化决策模型与七个 LLM 评判模型。每个类型化模型都表现出多种偏差，情绪化改写和答案顺序会影响判断，尽管输出相对一致且成本较低。本文作为直接评判模型评测收录，说明校准不能消除偏差；不同评判类型的相关失误和任务敏感性限制了仅凭成本替代生成式评判模型的理由。

- **[PRISM: Calibrating Black-Box Judges with Counterfactual Probes](https://arxiv.org/abs/2610.18389)**<br>📅 <strong>2026-10-13 13:39 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Kakei Yamamoto and So Kuroki
  - PRISM 保持被评内容不变，改变评价侧重点，再根据分数敏感性及人工标签学习校正。在 SummEval 和 HANNA 上，Jev 与 Sol 的实验改善了与人工排序的一致性，并比较质量与风格探针。本文作为直接面向 Jev 评判模型的校准方法收录；有监督校正和特定数据集上的一致性收益，并不能证明判断无偏或无需本地验证即可迁移。

<a id="multimodal-perception"></a>

## 👁 多模态学习与感知

计算机视觉、图像与视频决策、多模态表示、基于传感器的识别，以及视觉验证。

### 2026

- **[JEVQA - Video Quality from Metadata, Bitstream, and Pixel Features with a General-Purpose Decision Model](https://arxiv.org/abs/2609.24395)**<br>📅 <strong>2026-09-21 10:45 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Werner Robitza
  - JEVQA 使用 Jev 1.13 对元数据、码流统计和像素衍生测量进行零样本视频质量预测。两项研究发现，更丰富的组合特征提高了与 VMAF 或平均主观评分的相关性，但经过训练的质量模型仍更强，仅使用像素特征的输入则失败。本文通过细致的应用研究，同时展示 Jev 评分分布的灵活性和局限。

- **[Visual Jev: Accurate and Efficient Decisions from Shared Visual Context](https://arxiv.org/abs/2609.25845)**<br>📅 <strong>2026-09-22 08:12 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guanxu Yu and Yuhang Yao
  - Visual Jev 只编码一次图像和共享上下文，将相互隔离的问题后缀组成批次，并从现有语言模型头读取候选概率。在四个基准上，答案监督的后训练主要提高了已有任务类型的宏平均准确率；每幅图像对应 32 个问题时，共享执行明显快于串行或重复计算前缀的基线，但峰值内存更高。条件匹配的类型化输出头对照并未带来稳定准确率优势，因此证据主要支持共享计算的贡献。

- **[From Text Decisions to Pixels: An Study of Jev-Style Visual Choice Model](https://arxiv.org/abs/2609.29283)**<br>📅 <strong>2026-09-24 09:19 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xunlan Zhou, Xianliang Yang, and Li Zhao
  - PixelJev 使用小型开放多模态模型，将图像、任务指令和运行时给定的候选集合映射为结构化选择及依赖候选项的概率。七项基准评测比较冻结推理、语言侧适配和留出集校准；少样本适配的迁移效果不均，来源识别上专用探针仍更强，目标准确率也不保证概率校准。本文扩展了 Jev 风格接口，使其直接处理图像。

- **[Decision Readouts for Text-Mediated Video Anomaly Detection: An Exploratory Evaluation of Jev and Qwen](https://arxiv.org/abs/2609.34180)**<br>📅 <strong>2026-09-28 02:58 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xukui Qin, Youting Wang, Xinjie He, Ziyang Luo, Runxiong Wu, Yan-Syuan Chen, and Zhongyao Chu
  - 这项探索性研究固定视频衍生的字幕和摘要，在四十个视频的 400 个锚点上，将 Jev 的 Choice、Noul 与 Qwen 概率读取方式比较。Noul 改善了 XD-Violence 上的排序，却未改善 UCF-Crime；严格的数值检查使 Choice 无法完成全覆盖比较。本文提供受控的决策组件研究，但正例稀少、缺少部分读取方式对照且仅有离线证据，不能支持广泛的视频理解或加速结论。

- **[More Features Are Not More Evidence: Limits of Training-Free Human Activity Recognition with Jev](https://arxiv.org/abs/2609.36154)**<br>📅 <strong>2026-09-28 19:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Orhan Konak
  - 这项负面结果研究向 Jev 提供三个活动识别数据集中 1,800 个加速度计时间窗的确定性描述。其最佳宏 F1 仍远低于监督模型，增加数值特征反而有害，看似有用的融合效果也未能跨数据集迁移。本文测试了具体的传感器应用，说明将面向文本的决策模型扩展到物理信号前，需要评估表示选择、任务监督和概率可靠性。

- **[Visual Jev Rewards: Reference-Bound Verification for Multi-Subject Image Generation](https://arxiv.org/abs/2610.09328)**<br>📅 <strong>2026-10-07 02:34 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Baoteng Li, Wenzhuo Wu, Kongming Liang, and Zhanyu Ma
  - Visual Jev Rewards 训练 Qwen3.5-4B 验证器，判断指定参考主体是否满足所要求的视觉条件，再将二元概率的平均值作为 GRPO 奖励。一项小规模图像生成训练研究在选定的 897 项任务子集上提高了由模型评分的综合指标。本文作为 Jev 风格的奖励应用被收录，但每种奖励仅进行一次训练，且人工比较尚无定论，因此不能认定其优势已经确立。

- **[MetaEncoder: Exploring the Limit of Bi-Encoders for Multimodal System One Decision Making with Natural Language Interface](https://arxiv.org/abs/2610.11316)**<br>📅 <strong>2026-10-08 06:22 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jianpeng Cheng, Guangyu Sun, Aashu Singh, Benyu Zhang, Haixing Dai, Hossein Mansour, Jiangfan Zhang, Shlok Kumar Mishra, Wei Sun, Xuanming Cui, Yanli Liu, Qi Guo, Max Xiangjun Fan, and Jun Xiao
  - MetaEncoder 将多模态解码器适配为双编码器，对自然语言候选项评分并返回概率分布，同时支持有限选项决策与大规模检索候选集。评估覆盖十一个基准套件和 190 项任务，包括 Jev 格式决策测试、图像与视频理解及检索。本文作为与 TypeSafe 存在关联的明确 System One 架构被收录，但推理密集型任务和部分检索比较仍是其弱项。

- **[FastJEV: Understanding Redundancy for Compact JEV Inference](https://arxiv.org/abs/2610.11379)**<br>📅 <strong>2026-10-08 07:11 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jie Ma, Jie Gao, Yihang Liu, Zhike Qiu, Junle Li, Chongyi Zhuang, Jiayi Ji, and Xiaoshuai Sun
  - FastJEV 结合共享上下文状态、候选项前缀复用和决策引导的层剪枝，无需额外训练即可减少 OmniJev 模型中的冗余计算。在三个模型规模和六个评估集上，选定的剪枝预算移除了约 44–46% 的候选项计算深度，同时保留超过 93% 的平均任务得分。本文作为 Jev 风格的推理研究被收录；前缀共享可能增加延迟，因此运算量减少并不保证执行更快。

- **[RSAJEV: Training-Free Abstaining Prototype Memory for Eliminating Silent Hallucination in JEV-Based Remote Sensing Classification](https://arxiv.org/abs/2610.15742)**<br>📅 <strong>2026-10-11 16:27 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Man Chen, Antai Chen, Shuai Xu, Chengjie Gu, Huaping Zhou, Kelei Sun, Tao Wu, and Yongjie Huang
  - RSAJEV 用缓存图像原型及几何校正替换遥感决策模型的字母标记读出，无需梯度更新。跨数据集测试暴露了不稳定的标签绑定及对未见类别的过度自信；原型分数改善了已评估数据集中的分类与开放集辨别。本文作为 Jev 风格视觉读出与弃答方法收录，其收益依赖可用类别参考和已测试的数据迁移，并不意味着消除所有幻觉。

- **[VideoJev: System One Model for Video Understanding and Interaction](https://arxiv.org/abs/2610.18615)**<br>📅 <strong>2026-10-13 16:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yuhan Zhu, Xiangyu Zeng, Qingyi Si, Chenxu Yang, Yifei Li, Luozheng Qin, Junhao Zhou, Dingyu Yao, Jun Zhang, Chuanyu Qin, Zhiqiu Zhang, Yuandong Yang, Yuqi Xu, Tianyu Zhang, Hongcheng Guo, Jiaqi Wang, Nan Duan, and Limin Wang
  - VideoJev 用对视频证据下时间区间与文本选项的共享评分替代自回归回答，支持缓存查询与联合查询。两种规模的模型改善了相对骨干的时间定位，并在保持接近思考模式的视频问答准确率时获得显著实测加速。本文作为 Jev 风格多模态决策架构收录，收益限定于所测试的定位及多项选择基准，而非无限制的视频理解或自主交互。

<a id="embodied-ai-reinforcement-learning"></a>

## 🤖 具身智能与强化学习

机器人、导航、游戏控制、图形界面交互、环境中的规划，以及强化学习中的决策模型。

### 2026

- **[JEV-Star: Fast, Low-Cost StarCraft II Control with Language-Model Planning](https://arxiv.org/abs/2609.27331)**<br>📅 <strong>2026-09-23 04:09 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Weiyu Ma, Liangbing Zhao, Yongcheng Zeng, and Jian Zhao
  - JEV-Star 将快速的 Jev 动作选择与持续的 GPT-6 规划结合，用于《星际争霸 II》的宏观控制和微操。系统赢得了四场完整对局，覆盖最高的非作弊内置难度，并相较初始 Jev 单模型控制器改善了战斗地图结果，报告了决策日志和成本估计。由于规划变化伴随接口改进，研究无法单独识别规划的因果贡献，但展示了实用的 System One/System Two 控制分工。

- **[Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://arxiv.org/abs/2609.30186)**<br>📅 <strong>2026-09-24 17:30 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Linghua Zhang
  - Jev-Mobile 将低频的视觉语言模型规划与高频的 Jev 动作选择分离，后者在由无障碍树构建的动作空间中运行。在 AndroidWorld 上，报告的任务成功率为 79%，介于 SeeAct-V 的 78% 和逐步调用 VLM 基线的 84% 之间；在成功轨迹中，相较逐步基线，平均执行时间减少 32.7%，模型 API 成本减少 73.4%。本文直接测试 Jev 作为高频 GUI 执行组件的能力。

- **[RoboICL: Embodied In-Context Learning with GPT-6 Astra](https://arxiv.org/abs/2609.34261)**<br>📅 <strong>2026-09-28 04:07 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Fangcheng Liu, Yeqing Shen, Anda Cheng, Weishi Mi, Chao Tang, Chenyuan Liu, Yushun Xiang, Tingguang Li, Yong-Lu Li, and Yehui Tang
  - RoboICL 将示范与带锚点的交互记忆结合，用 GPT-6 Astra 控制机器人。Jev 用于一个可选的动作复用门控，在两个开发任务上减少了 33–48% 的 Astra 调用。本文因这一明确的 Jev 组件而收录；更广泛的三十任务和真实机器人性能提升属于完整的上下文学习框架，不能证明 Jev 在整个基准上具有独立贡献。

- **[NavJev: Efficient Vision-Language Navigation via Action-Centric Visual Compression and Discriminative Action-Semantic Memory](https://arxiv.org/abs/2609.34969)**<br>📅 <strong>2026-09-28 11:50 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Kai Sheng, Liuyi Wang, Jinlong Li, Haojie Dai, Chengju Liu, and Qijun Chen
  - NavJev 将路径点几何信息、图像描述和语义标签压缩为针对动作的文本证据，再让 Jev 从导航动作中选择。在 R2R-CE 上，研究报告 27.0% 的成功率、22.4% 的 SPL 和每步 0.65 秒耗时。本文将托管 Jev 应用于具身任务，但感知由独立组件完成，所报告的响应速度收益也伴随着有限的绝对导航成功率。

- **[JevSpawn: Adaptive Agentic Inference through Compositional Action Spaces](https://arxiv.org/abs/2610.00437)**<br>📅 <strong>2026-09-30 17:23 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Haoyang Su and Weiran Huang
  - JevSpawn 将自然语言任务描述转化为可组合的有限动作空间，结合并行候选构造、基于反馈的分支选择、表示修订和恢复。在八项任务上，它与七个智能体基线及一个 TypeSafe Jev 变体比较，报告更好的任务表现和更快导航。本文属于 Jev 风格智能体推理框架，动作空间构造与搜索策略都是所评估系统的一部分，不能视为托管模型本身的单独改进。

- **[Code Owns the Simulation, Jev Owns the Evaluation](https://arxiv.org/abs/2610.01834)**<br>📅 <strong>2026-10-01 15:06 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yaodong Yang, Hongyao Tang, Yi Ma, Xingyu Fan, Weixun Wang, Jinpeng Li, and Tianpei Yang
  - 作者在反思问题、矩阵博弈、ALFWorld 和机器人控制中评估 Jev，区分对给定证据的评价与对未说明后果的模拟。单独提问时，Jev 往往知道相关事实，但需要同时预测并评价时会失败；由代码提供前瞻模拟能改善控制。本文检验了模拟与类型化判断之间的具体分工，结论受所选环境和表示方式限制。

- **[SharedKV-BT: Node-Local Typed Decisions for Behavior-Tree Agents](https://arxiv.org/abs/2610.07327)**<br>📅 <strong>2026-10-05 19:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Naoki Wake and Justin Wagle
  - SharedKV-BT 将 Jev 风格的类型化决策接口与行为树结合：每个活跃节点提供有效候选项，共享前缀推理对候选项评分，外部检查则控制执行进度。机器人操作、导航和计算机使用实验表明，相较于匹配的自回归解码，该方法决策更快，并提高了操作成功率。本文展示了阶段约束与经过验证的后置条件如何在决策模型输出格式之外进一步提升智能体可靠性，因此被收录。

- **[From Probabilities to Decisions: Search and Multi-Teacher Distillation with Jev](https://arxiv.org/abs/2610.09188)**<br>📅 <strong>2026-10-06 22:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Mohamad Yazan Sadoun, Sarah Sharif, and Yaser Mike Banad
  - 作者将 Jev 的成对判断蒸馏为用于国际象棋搜索和段落重排的紧凑评估器，避免在延迟敏感的循环中实时调用模型。在匹配的标注预算下，结合 Jev 与 Qwen 教师比仅用 Qwen 更能改善棋局评估，但相较于单独使用 Jev 标签，对重排质量的额外提升很小。本文区分了搜索、可复用的蒸馏判断和教师互补性，因此被收录；国际象棋系统还依赖 Stockfish、开局库与残局库。

- **[System Switch: When Should a Fast Decision Model Stop and Think?](https://arxiv.org/abs/2610.09683)**<br>📅 <strong>2026-10-07 08:44 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Gian Luca Bailo
  - System Switch 将开放的 Jev 风格决策执行模型与推理型视觉语言模型配对，在 Doom 持续运行时将不确定决策升级处理。在 900 个留出问题上，基于置信度的转交优于随机转交，但所有变体在 33 场闭环游戏中均未到达出口。本文区分了离线决策改善与智能体任务进展，因此被收录；持续保留计划有助于交互，但固定探索规则也能取得大部分表面收益。

- **[Can Jev be Your Q or Policy in Reinforcement Learning?](https://arxiv.org/abs/2610.11692)**<br>📅 <strong>2026-10-08 11:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yi Ma, Tianpei Yang, Yaodong Yang, Weixun Wang, and Hongyao Tang
  - 作者将冻结的 Jev 模型引入强化学习，用作策略参考、探索判断器或经验回放评分器。九项 MiniGrid 任务与三个 Atari 游戏的实验报告了早期学习改善，其中部分训练后的学习器超过了直接由 Jev 控制的表现，并能在后续不依赖 Jev 行动。本文检验了将决策模型作为训练组件的用途，因此被收录；收益取决于任务表示，且这些角色并不支持对价值大小的基数估计。

- **[Embodied Skill Bench: Benchmarking How Well Agents with Embodied Skills Perform on Physical Tasks](https://arxiv.org/abs/2610.16238)**<br>📅 <strong>2026-10-12 06:11 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zhi Han, Zihan Guo, Chenxi Zeng, Zicai Cui, Yue Xin, Ming Zhou, Dongzhan Zhou, Weinan Zhang, and Yang Li
  - EmbodiedSkillBench 整理 250 项具身技能，在 100 个扰动后的 LIBERO-Pro 任务上比较原生控制、仅技能执行和选择性复用。技能帮助较弱智能体，却限制了更强智能体；使用 Jev 选择运动方向与夹爪动作减少了后者的标记消耗和时间，但成功率低于原生基线。本文明确测量 Jev 在具身技能复用中的表现，并保留成功率与效率的权衡。

- **[Proactive Physical AI through Continuous Observation and Timely Intervention](https://arxiv.org/abs/2610.16967)**<br>📅 <strong>2026-10-12 15:33 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhenhua Yang, Jiafeng Liang, Xingyu Zhou, Yi Jiang, Xiayu Cao, Zui Chen, Luqi Wang, Haiyang Sun, Yufei Xiang, Chang Li, Rongchuan Mu, Bowen Chi, Zihe Tong, Mingyu Li, Huijie Ma, Yiqiao Yang, Baoqi Ren, Zhiming Ma, Zhihao Zhu, Jiahao Ji, Zhuoyao Wang, Qianyu Wang, Xiangyu Liu, Wang Zixiang, Shunliang Zhang, Ming Liu, Xiaocheng Feng, Duyu Tang, and Bing Qin
  - ProAgent 将 Jev 风格干预时机模型 StreamingJev 与负责交流或调用物理设备的响应模型结合。系统利用从视频生成的监督数据，在明确目标或持续角色要求下识别新出现的需求，并通过真实机器人实验测试物理响应。本文作为主动式具身决策架构收录，所报告的时机判断与误触发改善仍取决于已评估目标、骨干比较和机器人设置。

<a id="agents-workflow-automation"></a>

## 🛠 智能体与工作流自动化

智能体记忆、模型路由、多智能体协调、选择性执行，以及软件工作流设计。

### 2026

- **[Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986)**<br>📅 <strong>2026-09-21 01:43 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Dongming Jiang, Yi Li, and Bingzhe Li
  - Jev-Mem 将 Jev 调用作为类型化控制层，负责记忆标注、关系构建、检索路由、候选评分和停止决策，同时由生成式模型完成答案整合。在 LoCoMo 上，它报告了优于所选记忆基线的评判分数、更快的记忆构建和更低的查询延迟。本文作为围绕 Jev 有界决策接口构建的清晰系统架构收录。

- **[REFLEX with Jev for Efficient Selective Control in LLM Agents](https://arxiv.org/abs/2609.26532)**<br>📅 <strong>2026-09-22 14:54 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Tiantong Wu and Wei Yang Bryan Lim
  - REFLEX 使用 Jev 完成有界的智能体决策，在置信度低或必须生成内容时回退到强生成式模型。它在冻结的 100 任务基准上报告 95% 的成功率，同时减少 72.7% 的强模型调用；受控测试指出，动作集合大小和接近有效的备选动作是重要风险。在外部 BFCL 和 tau 风格评测上，相较便宜的生成式级联仅有有限收益，界定了选择性 Jev 控制的适用范围。

- **[Harness Tokenomics: A Router for the Enterprise Agentic Control Plane](https://arxiv.org/abs/2609.28919)**<br>📅 <strong>2026-09-24 02:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ted Kwartler, Alan Aqrawi, and Arian Abbasi
  - 修订版论文利用 Jev 按可配置分类体系判断编码智能体请求，并在会话开始、辅助分支或子智能体启动时路由，以避免重建提示缓存。按 2026 年 9 月 Anthropic 价格重新计算约 10,000 个公开会话，并模拟一家拥有 10,000 个席位的企业后，估计模型支出可节省 13–21%。本文作为决策路由应用收录，但企业节省来自模拟，而非真实部署中的实测。

- **[When Does Selection Replace Extraction? A Pre-Registered Test of Agent Memory with a Typed Decision Model](https://arxiv.org/abs/2609.34227)**<br>📅 <strong>2026-09-28 03:34 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Rishabh Sharma and Rishika Lall
  - 这项预注册记忆研究使用 Jev 选择原始对话轮次，并在 LoCoMo 和 LongMemEval 上与提取事实及其他重排序器比较。上下文预算紧张时，选择原始记录具有竞争力，写入成本也较低；随着预算扩大，提取方法更准确，选择方法的优势缩小，正确拒答也减少。本文界定了基于 Jev 的记忆选择在哪些上下文预算条件下有用。

- **[SeLMRoute: Probabilistic Semantic Evidence for Large Language Model Routing](https://arxiv.org/abs/2609.34736)**<br>📅 <strong>2026-09-28 09:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Vasilis Perifanis, Nikolaos Pavlidis, and Symeon Symeonidis
  - SeLMRoute 使用 Jev 提取十六项概率化语义特征，再训练轻量路由器，依据这些证据估计候选 LLM 的表现。在按组划分的 LLMRouterBench 评测中，它超过最强固定模型；替换为 Laya 后表现较弱，直接让 Jev 路由也较差。本文提供实测的 Jev 路由架构，但其独立的成本感知评测虽改善性能，在严格协议下并未证明能节省实际费用。

- **[Mnemon: Raw Records, Fast Judgments, Slow Thoughts](https://arxiv.org/abs/2609.36059)**<br>📅 <strong>2026-09-28 18:17 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guangren Wang
  - Mnemon 保留带日期的原始记录，由 LLM 规划检索并生成答案，再在明确的上下文预算下将证据选择交给 Jev。它在 LoCoMo 和 LongMemEval-S 上报告较强结果，且存储历史扩大时查询成本仅温和增长。本文提供将快速判断与生成分离的记忆架构，但总体分数除 Jev 外，还受到检索、记忆整合、预算分配与回答模型选择的影响。

- **[Fast Models, Slow Evidence: A Paired and Self-Audited Evaluation of System-1 Decision Models for LLM Agent Harnesses](https://arxiv.org/abs/2610.02267)**<br>📅 <strong>2026-10-01 05:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jiawei Li
  - 这项配对研究使用 7,283 个基础案例和 6,640 个鲁棒性变体，在十一个智能体决策节点上比较托管 Jev 与开放 Laya。Jev 在九个节点上准确率更高，但两者都不能可靠完成零样本模型路由。作者的自查纠正了夸大的节省估计、样本内阈值和具有误导性的流水线指标。本文通过受控比较说明，局部门控准确率并不能确立端到端质量或成本收益。

- **[Worth asking?](https://iambraun.com/jevreports/co-dm/)**<br>📅 <strong>2026-10-03</strong> · 独立技术评测 · 报告更新 · <strong>Tier B</strong> · David G. Braun
  - 这项工程评测在四项《龙与地下城》助手任务上，比较 Jev、Laya、生成式分类器和 Qwen 概率读取方法，并公开带标签的请求。相较现有代码，Jev 改善了路由和规则检查，但排名随任务变化，重复调用也存在波动。本文提供原创测量和明确的修正说明；小型定制数据集及基于模型估算的下游节省，限制了结论向生产工作负载的推广。

- **[Token-Efficient Multi-Agent Collaboration via System One-Guided Computational Division of Labor](https://arxiv.org/abs/2610.08155)**<br>📅 <strong>2026-10-06 11:11 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zihan Zhou, Xinzhe Hu, Hanxu Yang, Liangjian Wen, and Zhao Kang
  - S1-MAS 将有限选项的协调决策交给 Laya 控制器，将证据检索交给小型 Qwen 阅读器，并把实质性推理留给更大的工作模型。在七个基准上，研究报告相较于三种多智能体基线，其准确率提高，工作模型的 token 消耗和端到端延迟降低。本文作为具体的开放 Jev 风格协调应用被收录，其节省来自完整的控制器、阅读器与工作模型设计，以及所设定的执行预算。

- **[Agent in a Bottle: Can LLM Agents Turn Their Capabilities Into Cheap, Scalable Artifacts?](https://arxiv.org/abs/2610.08775)**<br>📅 <strong>2026-10-06 17:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ankit Sonthalia, Haritz Puerto, Alexander Rubinstein, Martin Gubri, and Seong Joon Oh
  - BOTTLED 测试 LLM 智能体能否在固定资源预算下，将无标签工作负载转化为可复用、低成本的程序或小模型。多数运行相较直接推理损失了明显质量，但部分产物在分摊成本后能大幅节省开销，并在查询—商品相关性上提供了与 Jev 的直接比较。本文研究了反复调用决策模型之外的替代路径，所报告的成本优势依赖工作负载规模和保留的准确率。

- **[Probabilistic Sensing, Deterministic Authority: Admitting Model-Produced Observations into Sufficiency-Checked Governance Contracts](https://arxiv.org/abs/2610.10978)**<br>📅 <strong>2026-10-07 23:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Gaston Besanson
  - 该框架先通过在留出集上确定的阈值接纳 Jev 或 Claude 生成的观测，再由确定性的治理契约决定是否授权某项操作。一项预注册研究在两个构造领域中开展 36,000 次模型调用，检验误差界，并在 21,000 个测试判定中发现十三次由拒绝变为允许的变化。本文作为具体的 Jev 治理应用被收录；传感评分具有信息价值但未经校准，相关保证也以声明的契约和可达状态为条件。

- **[Does Jev Improve an AI Scheduling Agent? A Three-Arm Test](https://tryjevai.com/blog/jev-ai-agent-scheduling-test)**<br>📅 <strong>2026-10-08</strong> · 独立技术评测 · <strong>Tier B</strong> · Try Jev AI
  - 这项三组日程安排实验在 48 组合成中文案例上，比较现有防护、改善上下文处理，以及增加 Jev 判断层三种方案。保留上下文的方案表现最好；加入 Jev 引入了错误与延迟，探索性的翻译方案也未带来准确率净收益。本文报告负面的集成结果，但标签重叠、缺少经过校准的回退策略、多数案例仅运行一次及未公开逐例记录，限制了复现与推广。

- **[When Faster Decisions Do Not Make Better Agents: An Empirical Study of Jev in Agent Workflows](https://arxiv.org/abs/2610.13092)**<br>📅 <strong>2026-10-09 06:45 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yuchen Ling, Shengcheng Yu, Zhenyu Chen, and Chunrong Fang
  - 研究将 Jev 接入 ALFWorld 和 AndroidWorld 中的五个智能体，评估 4,500 次任务执行。决策调用更快、更便宜，但辅助推理、额外交互、恢复失败和过早结束会抵消收益；两个移动端智能体的成功率明显下降，一个智能体每次成功完成任务的成本反而增加。本文作为直接的工作流评测收录，说明衡量调用效率时还必须关注任务交付与恢复能力。

- **[Suggested Is Not Superseded: A Pre-Registered Evaluation of a System-One Model as a Memory-Retirement Gate](https://arxiv.org/abs/2610.15710)**<br>📅 <strong>2026-10-11 15:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xupeng Chen and Chenqian Le
  - 作者重新标注 500 组 STALE 配对，区分已确认变化与仅有暗示的变化，测试 Jev 作为助手记忆失效判定门控。三分类决策减少了过早淘汰，但检测损失超过预注册预算；在开发集上选出的推理级联，也未在留出记忆库上优于阈值调整。本文审查具有删除后果的记忆决策、标注分歧与小样本选择问题，不预设置信度路由必然改善门控。

- **[JevGPT: Thinking Fast and Slow in Autonomous Research](https://arxiv.org/abs/2610.18272)**<br>📅 <strong>2026-10-13 12:29 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yasheng Sun, Yanning Dai, Yimeng Chen, Nanbo Li, Firas Laakom, Yifan Xu, Piotr Piękos, Mateusz Ostaszewski, Wenyi Wang, Cheng Luo, Yuhui Wang, and Jürgen Schmidhuber
  - JevGPT 将审慎的研究规划与并行、快速的来源相关性和证据支持判断结合。筛选后的原文段落进入后续研究步骤；固定语料问答与排序实验报告更广的证据覆盖、具竞争力的表现及更低时间与成本。本文作为基于 Jev 的研究智能体架构收录，结果受已评估语料与对照系统约束，不能证明在无限制开放网络研究中的可靠性。

- **[Judges Follow the Reference: The Derivation Gap in Verifying Tool-Call Arguments](https://arxiv.org/abs/2610.18497)**<br>📅 <strong>2026-10-13 14:52 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Linhai Ma, Yan Wang, Lingfei Qian, Yupeng Cao, and Victor Gutierrez Basulto
  - 这项工具调用审查比较包括 Jev 和 CLM 在内的七个评判模型，发现当支持依据缺失或需要推导时，正确参数更少被接受。受控的来源位置调整表明，模型偏好可见的错误值，而非缺少依据的正确值。DeRef 在不查看候选答案的条件下从完整历史生成参考，提高了 AUROC。本文研究智能体验证中的证据可用性，区分基准收益与普遍的工具使用正确性。

- **[Reading Right, Acting Wrong: Diagnosing Decision Failures of System One Models in Agent Loops](https://arxiv.org/abs/2610.18579)**<br>📅 <strong>2026-10-13 15:43 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yubo Li, Ramayya Krishnan, and Rema Padman
  - 作者在冻结的智能体状态上，将下一步动作决策与独立事实探针配对，比较包括 Jev 在内的十七个快速系统及一个推理模型。许多错误动作出现在探针全部答对之后；当探针足以决定动作时，代码组合可修复失效，而真实状态中提供子目标更有帮助。本文作为智能体决策的行为诊断收录，因果归因取决于探针是否真正包含充分证据。

- **[BLADE: Auditing Information Use for Failure Attribution in LLM Multi-Agent Systems](https://arxiv.org/abs/2610.18780)**<br>📅 <strong>2026-10-13 17:34 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xiaoguang Guo, Yaohao Long, and Chuxu Zhang
  - BLADE 使用 Jev 概率选择失败多智能体运行中的信息交接点进行审查，区分错误引入、传播和修复。在 1,228 次失败运行上，它在共享 Jev 接口、无需参考答案的条件下，相对一次性整体判断改善了步骤级归因。本文作为具体的 Jev 诊断工作流收录，区分已记录失败上的归因准确率与防止实时执行失败的证据。

### 无日期动态报告

- 🔥 **[Workflow evals](https://evals.typesafe.ai/)**<br>◉ <strong>动态报告</strong> · 技术评测 · <strong>Tier A</strong> · TypeSafe AI
  - 这份厂商报告介绍了四项结构化自动化评测，以及用于比较 Jev 与生成式模型的评测框架。它将策略拆解为独立的类型化判断和确定性代码，再以外部大型模型的共识概率作为评分参照。该报告有助于理解 TypeSafe 的主要性能声明，但其参考标签、任务构造和作者所属机构意味着仍需独立验证。

<a id="trustworthy-ai-security"></a>

## 🛡 可信 AI 与安全

校准、不确定性、概率一致性、鲁棒性、对齐、内容安全、安全防护与网络安全。

### 2026

- **[Open-Jev Judgments on CallScreenBench: Calibrated One-Pass Scam Screening with a Small Language Model](https://arxiv.org/abs/2609.23959)**<br>📅 <strong>2026-09-21 00:09 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Simiao Ren, Kidus Zewde, Xingyu Shen, Yuchen Zhou, Dennis Ng, Ankit Raj, Tommy Duong, Yuxin Zhang, and Neo Tiangratanakul
  - 论文将 Qwen3-4B 主干适配为 JevLite，一个单次前向计算的诈骗概率模型，并在合成通话中的 577 项逐轮决策上评估。集成模型达到 0.974 AUROC，报告的校准误差为 0.052，延迟也明显低于使用相同主干的生成式版本。该研究并未评估托管 Jev，但提供了透明的 Jev 风格应用与消融实验。

- 🔥 **[Type-Safe Is Not Error-Free: Typed Decision Models Follow the Option Name, Not the Definition Bound to It](https://arxiv.org/abs/2609.26758)**<br>📅 <strong>2026-09-22 17:38 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yu Sun, Junhao Xu, Jiajia Shi, and Zijin Yang
  - 修订版研究在 1,200 项工作流决策上，保持选项定义不变，重新分配 Jev 和两个开放模型的选项名称。语义倾向鲜明的名称显著增加决策翻转、降低平均 AUC；随机字符串则更接近中性对照，类型错误率始终为零。本文直接检验模型是否忠实遵循选项定义，四种二元决策规则下的结果支持区分格式正确性与语义稳定性。

- **[Decision Hijacking: Prompt Injection Attacks on Jev's Typed Probabilistic Decisions](https://arxiv.org/abs/2609.28613)**<br>📅 <strong>2026-09-23 17:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tiantong Wu and Wei Yang Bryan Lim
  - 本文重建了 510 个 InjecAgent 案例，研究提示注入对 Jev 模式约束输出的影响。恶意内容会改变动作概率，但很少使模型选中攻击者的目标；利用评分反馈的自适应攻击将验证成功率从 1.8% 提高到 3.5%，失效主要出现在决策概率差距小、攻击者对观测控制更强的条件下。研究区分了输出格式有效与允许动作集合内的抗操纵能力。

- **[Calibrated Decision Models for Autonomous Penetration-Testing Harnesses: JEV and Laya as System One Decision Layers for LLM-Driven Pentest Agents](https://arxiv.org/abs/2609.28940)**<br>📅 <strong>2026-09-24 02:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Joas Antonio dos Santos Barbosa
  - 这篇观点与案例研究将 Jev 和 Laya 放在渗透测试智能体的四类有界决策中：发现裁定、严重程度重新校准、智能体裁剪和确认。探索性的 NeuroSploit 比较针对一个含十三处漏洞的目标，分别执行一次 Jev 辅助运行和一次无辅助运行，随后提出领域适配模型与评测计划。本文因安全评测框架的架构设计而收录，其证据不足以在统计上确证有效性。

- **[Just Ask Jev: Reinforcement Learning for Calibrated Decisions as a Zero-Shot Detector of AI Alignment Failures](https://arxiv.org/abs/2609.29429)**<br>📅 <strong>2026-09-24 11:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ruoqi Guo, Yi Liu, Gelei Deng, Yuekang Li, Lida Zhao, Yutao Wu, Simin Chen, Ying Zhang, and Leo Yu Zhang
  - RLCDAlignBench 在十类对齐失效、44 个基准和五个目标模型上评估 Jev，分别改变问题措辞与提供给检测器的上下文。通用问题的中位 AUROC 据报告达到 0.886，上下文字段的影响大于措辞。本文提供了广泛的零样本安全评测，但许多标签来自各基准自身的评分器，只有两个子集包含人工标签。

- **[JevOut: Natural Context Can Flip Decision Models](https://arxiv.org/abs/2609.30243)**<br>📅 <strong>2026-09-24 17:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zixiang Xu, Zirui Song, Chiyu Zhang, Xiuying Chen, Xi Liu, Xiyang Hu, and Yue Zhao
  - JevOut 保留原问题与选项，优化看似自然的附加上下文，使模型转向预先指定的错误选项。修订版在四个系统、七个数据集上，将原本正确决策的 61.4–73.2% 转向错误；盲法审阅者认定，抽样成功上下文中有 91.6% 自然且不改变正确答案。本文揭示了上下文诱发的高置信度错误，修订内容还包括人工验证、预算匹配的生成基线和可重复性分析。

- **[Auditing System-1 Models on Biosecurity-Relevant Benchmarks: Calibration, Selective Prediction, and Permutation Instability in a Non-Generative Model](https://arxiv.org/abs/2609.30454)**<br>📅 <strong>2026-09-24 18:46 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Kimon Antonios Provatas and Ilias Georgakopoulos-Soares
  - 这项审查在 WMDP 变体与六项 LAB-Bench 子任务的 6,020 道选择题上测试 Jev，衡量校准、选择性预测和选项顺序稳定性。总体而言，置信度能较好地区分错误，但轮换选项顺序会使 37.4% 的 WMDP-Cyber 样本改变答案，超出了重复调用本身的波动。本文属于直接的可靠性研究；这些知识基准不衡量危险请求筛查能力，且不同任务的校准差异较大。

- 🔥 **[JevAdvBench: A Benchmark and Black-Box Attacks for Reinforcement Learning for Calibrated Decisions Models](https://arxiv.org/abs/2609.31142)**<br>📅 <strong>2026-09-25 11:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jianyi Hu, Hangtao Zhang, Yi Liu, Yeqi Zeng, Li Zeng, Xianlong Wang, Rui Wang, and Leo Yu Zhang
  - JevAdvBench 使用 66 个场景中的 812 个类型化问题和 9,744 个单次编辑攻击变体测试 jev-1.13.0。附加未经证实的观点会翻转 12.1% 的决策，并使 38% 原本高置信度的答案降至 0.8 的复核阈值以下；简单改写的影响则接近重复运行的波动水平。该基准直接衡量 RLCD 鲁棒性，但主要参照是模型在干净输入上的自身决策，而非外部真实标签。

- **[Beyond Calibration: Do a Typed-Decision Model's Probabilities Obey the Probability Axioms?](https://arxiv.org/abs/2609.33209)**<br>📅 <strong>2026-09-27 04:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Keyi Li, Yihao He, and Quanyi Li
  - 作者在 160 个 ChaosNLI 和 PubMedQA 样本上，测试 Jev 对逻辑相关问题给出的概率是否一致。Jev 比所测 Qwen 概率读取方式更一致，但其对互补性与互斥性约束的违背仍超出重复调用噪声。收录本文是因为，分别对每个问题给出校准的答案，并不能证明这些概率可以在更大的决策工作流中安全组合。

- **[Evaluating System One Models for Agent Security Decisions: Reliability, Calibration, and Selective Automation](https://arxiv.org/abs/2609.33401)**<br>📅 <strong>2026-09-27 09:30 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yixuan Liu
  - 这项安全评测将 Jev、Laya、Decider 和 Bespoke Nimble 与专用分类器及生成式评判器进行比较，考察准确率、校准和允许/阻止/复核策略。严格的漏检限制使自动放行比例很低；分别设置放行和阻止阈值，主要通过增加自动阻止来扩大自动化范围。本文考察实际运行中的权衡与配对错误，表明复核模型既可能找回不安全样本，也可能重复高置信度错误或误拒正常输入。

- **[COGNIT-Guard: Calibrated Standalone Direct-Decision Guardrails with Heterogeneous CPU-NPU Confidence Cascading under Explicit Latency and False-Positive Constraints](https://arxiv.org/abs/2609.33671)**<br>📅 <strong>2026-09-27 15:32 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Hao Chen
  - COGNIT-Guard 将经过校准的 CPU 门控与运行在昇腾 NPU 上、基于 Laya 的决策模型结合，在延迟和误报约束下筛查提示。它在 607 个留出样本上报告较高的域内准确率和较低误报，但领域适配最初会损害更广泛的 SafetyBench-ZH 表现，随后通过样本回放恢复。本文是 Jev 风格防护应用，而非托管 Jev 评测，迁移能力与硬件条件是理解结果的关键。

- **[Laya as a Typed Probabilistic Assessor: An Independent Reproduction and a Preregistered Study of Calibration and Selective Escalation](https://arxiv.org/abs/2609.33843)**<br>📅 <strong>2026-09-27 18:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Gowthamkumar Nandakishore
  - 这项独立复现研究考察开放的 Laya 类型化决策模型，并预注册了后续校准和升级处理测试。研究复现了已报告的准确率，但发现系统性的置信度偏低；在独立数据上拟合温度缩放有所帮助，而选用的保序回归方法出现过拟合，冻结的门控也未达到放行错误率目标。本文公开预测并明确报告负面结果，但其标签衡量的是与合成教师的相符程度。

- **[Probability Contracts: Accuracy, Coherence, and Decisions Across LLM Interfaces](https://arxiv.org/abs/2609.37470)**<br>📅 <strong>2026-09-27 19:07 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Han Chen and Yingrui Li
  - Probability Contracts 将有限世界中的精确后验概率与四种配置下的接口一致性和决策成本联系起来。在一种延后处理成本设置下，Jev 的 Event 与 Choice 接口使 32.8% 的有效配对改变二元动作；修订版新增了由 400 个基础实例组成的独立样本组，并表明分歧并不是完整的错误信号。本文说明，概率平均可以改善期望 Brier 分数，却不保证在每种成本设置下都降低决策损失。

- **[Do System One Decisions Add Up? A Study of Probabilistic Coherence](https://arxiv.org/abs/2609.33971)**<br>📅 <strong>2026-09-27 22:15 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Saman Sarker Joy
  - 这项研究在 TREC、CLINC150 和 MASSIVE 上，比较 Jev 与 Laya 直接预测细粒度标签，以及经由粗粒度类别重建概率的两条路径。两者分歧明显：这种分解降低了 Jev 的准确率，却提高了 Laya 的准确率，有时还伴随更差的校准。本文说明，将分类拆成看似等价的子决策会同时改变预测与不确定性，因此需要评价实际应用工作流，而非只评价其中的单个问题。

- **[JEV as a Judge for Agent Trace Security: An Empirical Comparison with Generative LLM Judges](https://arxiv.org/abs/2609.34862)**<br>📅 <strong>2026-09-28 10:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zhiqiang Wang and Yichao Gao
  - 这项回顾性安全研究在统一风险准则下，将 Jev 与四个生成式评判器在 5,219 条智能体轨迹上进行比较。Jev 的跨基准平均正类 F1 最高，但领先者随数据集变化，有效结果覆盖率也未达到 100%。本文作为关注成本、明确呈现精确率与召回率权衡的轨迹筛查评测收录；它不能证明低延迟的类型化判断本身足以保障运行中的智能体安全。

- **[JevVibe: Efficient Classification-Guided Secure Code Generation](https://arxiv.org/abs/2609.34963)**<br>📅 <strong>2026-09-28 11:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Arshak Rezvani, Sasha Behrouzi, and Ahmad-Reza Sadeghi
  - JevVibe 利用 Jev 在五十个 CWE 标签上的概率分布，指导对生成代码的修复。在 1,916 个基准样本上，Jev 优于所评估的开放模型，但前沿对照在首选标签分类上仍更强；Jev 引导修复后，检测器衡量的安全通过率从 63.5% 升至 70.7%。本文展示从诊断到修复的工作流，但检测器结果所支持的范围窄于经独立核验的代码安全性。

- **[Jev thinks "I don't know'', but doesn't say it: Introducing Sys1Cal-v1 Dataset for Probability Calibration](https://arxiv.org/abs/2609.35342)**<br>📅 <strong>2026-09-28 14:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Riccardo Porcedda
  - Sys1Cal-v1 构造了真实概率已知的布尔问题，将 Jev 的 Noul、Choice 和 Score 接口与一个开放基线进行比较。作者发现概率失真依赖接口，并提出一种未被表达出来的不确定状态，恢复该状态后改善了一项报告的概率指标。本文提供了受控的分布级校准测试，但对隐藏状态的解释仍是行为假说，不能视为关于 Jev 未公开内部架构的证据。

- **[More Choices, Fewer Decisions: Ordinal-Scale Bias in JEV-like Direct-Decision Models](https://arxiv.org/abs/2609.38827)**<br>📅 <strong>2026-09-30 02:50 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tianxiang Gao, Jinzhe Li, Zhiyuan Li, Yi Chang, and Yuan Wu
  - 研究在三十六个有序标签数据集及受控的量表分辨率变化下，测试 Jev 和三个开放 Kev 模型是否压缩有序决策量表。即便控制选项顺序与标签支持情况，最终选择使用的有效等级仍少于真实标签；有针对性的适配能部分修复 Kev 中的这一现象。本文说明，覆盖广泛的候选概率和较高准确率，并不能保证模型忠实使用给定评分量表。

- **[When the Right Answer Is Missing: An Arithmetic-Dependent Rejection Bottleneck in Jev](https://arxiv.org/abs/2609.39496)**<br>📅 <strong>2026-09-30 10:55 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jike Zhong, Ming Li, and Yuxiang Lai
  - 在配对算术问题上，如果正确答案位于候选集中，Jev 能可靠选中；如果所有数值候选均错误，即便存在明确的拒答选项，模型也常常无法选择它。二元候选验证仍然表现较强，在独立开发题目上拟合的阈值则显著改善了拒答。本文说明，即使模型能单独验证答案，仅增加“以上皆非”标签也不足以让类型化选择工作流可靠处理答案缺失。

- **[Beyond Answer Confidence: A Controlled Audit of Self-Knowledge in a Black-Box Decision Model](https://arxiv.org/abs/2610.01006)**<br>📅 <strong>2026-10-01 03:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Sharath M Shankaranarayana, Davor Runje, and Jan Jannink
  - 这项审查使用超过十五个公开数据集、六类生成任务及配对信息干预，将答案置信度与知识边界分开考察。缺少相关证据或超出实测知识边界时，Jev 仍可能保持高置信度；明确询问证据是否充分有所帮助，但控制表面线索后，所谓自知能力的收益会减弱。本文说明，熟悉任务上的校准本身不足以支持用置信度检测知识缺失或分布外决策。

- **[Jev-IDS: System One Models for Network Intrusion Detection](https://arxiv.org/abs/2610.01079)**<br>📅 <strong>2026-10-01 05:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Paulo Severo, Silvio E. Quincozes, and Amanda Dias
  - Jev-IDS 将网络流序列化，在标签稀缺条件下，同时向 Jev 询问攻击概率和有限的流量类别。在包含重复决策、300 条流的 NSL-KDD 试点上，它报告了优于受测 LLM 基线的新型攻击召回率、更低延迟和成本，以及少于低数据量随机森林的误报。本文作为入侵筛查应用收录，小规模试点不足以确立普遍的实际检测能力。

- **[Labels Override Definitions in Jev-Style Typed Decision Models](https://arxiv.org/abs/2610.02586)**<br>📅 <strong>2026-10-01 23:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Seyedarmin Azizi, Erfan Baghaei Potraghloo, and Massoud Pedram
  - 研究使用十一个分类任务和一个策略路由基准，测试四个开放类型化决策模型的选项标签偏差。只改变标签与定义在输入中的呈现方式、不改变权重，就能转移或消除偏差，从而将所测失效定位到提示构造。本文是对 Jev 风格模型标签鲁棒性问题的机制性跟进，但代码干预仅涉及开放实现，不能据此确定托管 Jev 内部的成因。

- **[SecJev: Bringing Security Expertise to System One Decision Models](https://arxiv.org/abs/2610.03073)**<br>📅 <strong>2026-10-02 09:57 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zheng Chen, Fei Yu, Haohao Huang, Yang Li, Anlong Chen, and Lei Chen
  - SecJev 将基于 Kev 的单次前向决策模型专门用于十四项安全任务，覆盖八个数据源和 8 亿至 90 亿参数的模型。领域训练提升了所有模型，并使最小版本在任务宏平均准确率上超过通用 Kev-9B。本文作为开放的 Jev 风格安全扩展被收录；与仅输出答案的生成式微调相比，两者的准确率和延迟相近，而迁移后的误报率仍取决于数据采集批次。

- **[To Jev or Not? Evaluating the Accuracy and Efficiency of Structured Decision Models for Hate-Speech Moderation](https://arxiv.org/abs/2610.03324)**<br>📅 <strong>2026-10-02 13:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Demetris Paschalides, George Pallis, and Marios D. Dikaiakos
  - HATEDECIDE 在四个仇恨言论数据集上，将六种决策模型配置与专用、零样本、商业及监督基线进行比较。提供定义会改变许多预测，却不可靠地改善分类；任务分解也只在少数比较中有帮助。本文将 Jev 作为实测内容审核系统收录；其成本和诊断集上的有利结果，需结合准确率随数据集变化、仅显式写出策略准则收益有限等局限理解。

- **[Benchmarking candidate coverage and rejection policy transfer in typed decision models](https://arxiv.org/abs/2610.03387)**<br>📅 <strong>2026-10-02 14:36 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jiawen Lu and Tongtong Wu
  - 该基准比较 Laya、Jev 和 Qwen 识别缺失答案、自然检索遗漏及范围外查询的表现，并在相同校准预算下测试拒答策略能否跨任务迁移。在 DBpedia 上学得的 Jev 阈值会拒绝 69.3% 候选范围已覆盖正确答案的 Emotion 输入，暴露出明显的工作点漂移。本文说明，复用决策模型时，分类准确率、候选覆盖率和拒答策略可靠性需要分别测量。

- **[Hidden Risks of Jev: An Empirical Study of Security, Privacy, and Dual Use](https://arxiv.org/abs/2610.04985)**<br>📅 <strong>2026-10-04 06:09 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shang Wang, Tianqing Zhu, Huajie Chen, Jiayang Li, Meng Yang, and Bo Liu
  - 作者通过官方 Jev API 和可控的本地 NanoJev 模型，研究类型化决策模型中的决策操纵、信息泄露，以及防御性或恶意用途。评测发现，限制输出并不能消除所测试的安全与隐私风险。本文提供广泛的威胁研究，但训练数据投毒和后门实验仅在本地替代模型上进行，不构成托管 Jev 已遭入侵的证据。

- **[JevCascade: Readout Stability and Inference-Time Compute Allocation for Prefill-Only Decision Models](https://arxiv.org/abs/2610.07716)**<br>📅 <strong>2026-10-06 04:10 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ran Li and Lei Chen
  - JevCascade 研究六个仅预填充模型家族，覆盖十个核心数据集、总计十六个数据集，无需标签或再次调用，即可从缓存的首轮排序预测候选菜单干预后的准确率。修订分析区分排序稳定性与概率稳定性，发现重复调用主要改善校准。本文作为 Jev 风格计算分配研究收录，置信度路由与候选筛选可能优于额外前向计算，但结论以仅改变候选菜单的干预为条件。

- **[Benchmarking System One Models in Online Moderation](https://arxiv.org/abs/2610.07953)**<br>📅 <strong>2026-10-06 08:25 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Federico Mazzoni and Andrea Failla
  - 这项评测在五个内容审核基准上比较 Jev 与 Laya，分别改变书面规则、检索先例和候选限制。Jev 往往受益于先例，并能与专用模型参照竞争；Laya 的检索收益则不太稳定。本文在受控信息条件下检验依据策略进行审核的能力，同时指出，基于置信度的复核有用，并不意味着概率在所有条件下都得到良好校准。

- **[TypedBench: A Benchmark for Calibration, Framing Sensitivity, and Cost in System One Decision Models](https://arxiv.org/abs/2610.11392)**<br>📅 <strong>2026-10-08 07:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Rahul Sharma, Andrew B. Duncan, Gaétan Marceau Caron, and Sebastian J. Vollmer
  - TypedBench 使用七个按策略生成标签的生成器和九组评测，检验 Jev 及开放决策模型的问题表述、校准、扩展性、选择性预测和决策成本。Jev 能遵循策略，但仍对措辞敏感且置信度偏低；在非对称成本下，依据其概率行动可能比直接选择概率最高的答案更差。本文将概率质量与最终决策相联系，并将校准误差与条件匹配的有限样本噪声基线比较。

- **[Adversarial Cues in Decision Models Used as Judges: The Role of Request Presentation](https://arxiv.org/abs/2610.11436)**<br>📅 <strong>2026-10-08 07:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hongliang Liu
  - 这项受控评判研究在改变结构化请求呈现方式的同时，仅通过一个标点线索修改候选答案。在 200 组新的来源样本上，按键排序的 JSON 请求使 Jev 的错误接受率显著增加，而按插入顺序呈现时没有出现同样现象，尽管两种条件都通过了基本对照。本文揭示依赖集成方式的评判失效，但利用参考答案构造样本、复合顺序变化和未解决的对照模型响应问题限制了实际应用结论。

- **[One Word Opens the Gate: The Option-Channel Attack on Typed Decision Models as Agent Guardrails](https://arxiv.org/abs/2610.12292)**<br>📅 <strong>2026-10-08 16:46 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Seyedarmin Azizi, Erfan Baghaei Potraghloo, and Massoud Pedram
  - 研究将开放的 Jev 风格决策模型和 Qwen 概率读取方法用作智能体防护，分别衡量不安全放行与不必要阻止。无关上下文和误导性选项名称能够在不降低置信度的情况下翻转正确决策，测试过的防御也会被针对性调整的攻击击败。本文研究的是独立开放模型的选项通道，并非托管 Jev；当合成策略能完整解析为类型化字段时，精确的确定性规则能成功处理这些情况。

- **[DICE: Tilting the Odds through Interface Attackson System One Model](https://arxiv.org/abs/2610.14404)**<br>📅 <strong>2026-10-09 23:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ben Dong, Tianyi Lu, Zhonghao Guo, and Qian Wang
  - DICE 研究 Jev 流程中针对状态提取、问题生成和输出解释的有限攻击。三项小规模合成实验表明，即使不改变 Jev 及其真实响应，外围适配器也能使最终决策偏离任务。将输入输出与预期含义绑定的检查可以阻止已测试的干预，但也可能拒绝有效决策。本文用于定位应用层信任失效；这些试验并不估计问题在已部署软件中的普遍程度。

- **[Poisoned into Action: Context Attacks on Typed Decision Workflows](https://arxiv.org/abs/2610.15537)**<br>📅 <strong>2026-10-11 11:19 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Chenkai Wu, Xing Chang, and Jun Yan
  - 这项面向执行结果的投毒研究在两个合成工作流与 1,659 次新调用中，追踪检索上下文如何经过 Jev 选择影响持久化状态。来源排除防御阻止了部分违规，却也抑制正常自动化；正确证据在攻击与中性条件下均有帮助。本文同时衡量下游后果与防御成本；三项预先指定的比较在多重检验校正后不显著，因此结果仍属探索性。

- **[CT0: Cybersecurity Transformer](https://arxiv.org/abs/2610.16550)**<br>📅 <strong>2026-10-12 10:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Víctor Mayoral-Vilches
  - CT0 在同一专门化骨干中结合受 Jev 启发的类型化决策头与生成式安全智能体，将不确定案例路由到生成路径。作者报告紧凑模型在文件筛查、拒答检测、越狱分类和漏洞事实提取上的改善。本文作为决策接口的领域专门化扩展收录；作者自行运行的安全基准、依赖工作负载的指标，以及分类与智能体表现的区别，限制了普遍性结论。

- **[Does a Hosted Decision Model Respect Irrelevant Alternatives? A Pre-Registered Test of Option-Set Dependence in Jev](https://arxiv.org/abs/2610.16655)**<br>📅 <strong>2026-10-12 12:10 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Dushyant Rajput, Nirdesh Chauhan, and Siddharth Kosaraju
  - 这项预注册审查通过 299,463 次 Jev 调用，检验无关备选项是否保持领先标签之间的赔率。新增选项会系统性改变赔率，候选集合越大，扭曲越明显，而同一调用中分开打包的问题几乎没有交互。独立二元评分消除了选项集合依赖，却损失准确率。本文直接研究概率语义，表明 Jev 概率以给定选项集合为条件，并非各标签的固有属性。

- **[ProbabilityBench: Model Evaluation and Calibration with Exact Ground-Truth Uncertainty](https://arxiv.org/abs/2610.17016)**<br>📅 <strong>2026-10-12 15:58 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yuyang Dai, Yuting Tang, Futoshi Futami, and Takashi Ishida
  - ProbabilityBench 构建三个类别概率与贝叶斯误差可解析计算的模拟文本领域，用于直接评估不确定性及校准估计方法。在十六个模型中，包括 Jev 在内的决策系统经常位于观测到的成本—质量前沿。本文作为直接的概率质量基准收录；其精确不确定性来自指定的合成生成过程及保持概率的文本转换，而非真实数据中自然产生的模糊性。

- **[SkillScreen: High-Recall Screening of Malicious Agent Skills with Decision Models](https://arxiv.org/abs/2610.17727)**<br>📅 <strong>2026-10-13 05:03 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jerrold Huang, Junwei Quan, Saiyue Lyu, Zihan Guo, and Yingqiang Ge
  - SkillScreen 微调 OpenJev-2B，对恶意智能体技能指令评分，并与托管 Jev、分类器及提示式评判模型比较。在未见攻击家族上，99% 召回率对应 20–25% 的正常技能误报，改善了所评估的审核负担权衡。本文作为直接的决策模型安全比较收录，但陌生正常来源显著增加误报，因此对攻击家族的泛化不等于对任意技能集合的可靠筛查。

- **[Same Attack, Different Judge: A First Controlled Adversarial Comparison of Jev, LLM Judges, and Purpose-Built Safety Classifiers](https://arxiv.org/abs/2610.17820)**<br>📅 <strong>2026-10-13 06:43 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xiang Li, Aichun Huang, Mingming Zhang, and Zheli Liu
  - 这项受控研究在四项任务上，向 Jev、五个 LLM 评判模型和两个安全分类器提供相同攻击载荷与策略。Jev 抵抗了多种输入审核攻击，但在钓鱼判断中仍有脆弱性，且无攻击时的召回率也较低；它速度快，却会标记较多正常请求。本文在共享测试框架下比较依赖任务的鲁棒性，不将类型化输出或某项审核优势等同于普遍安全。

- **[Consider, Then Choose: Order-Invariant Decisions in System One Models](https://arxiv.org/abs/2610.18233)**<br>📅 <strong>2026-10-13 12:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jianguo Huang, Yao Long Teng, Yanchen Deng, and Bo An
  - Runoff 先独立评分各选项，再让短名单候选在均衡位置上比较，使 Jev 风格选择不依赖选项顺序。在开放读出与八个 System One 模型上的实验报告打乱顺序后答案不变，而循环平均仍有顺序敏感性。本文作为无需训练的可靠性方法收录，区分可保证的顺序不变性与任务准确率，并将加速结论限定于已测试的候选规模和实现。

- **[Jev-Guard: Fast Routing and Auditing Agent Actions over Editable Policy Trees](https://arxiv.org/abs/2610.18326)**<br>📅 <strong>2026-10-13 13:03 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Wenbin Hu, Huihao Jing, Haochen Shi, Yuxuan Liu, Changxuan Fan, Sirui Zhang, Kawai Chung, Hanyu Yang, Zhenhuan Wang, Ziyi Chen, Haoran Li, and Yangqiu Song
  - Jev-Guard 先在可编辑策略树中路由审核上下文，再依据选中策略作出安全决策。作者在 7,033 个案例上报告 93.72% 分类准确率，区分 58 毫秒分类延迟与 240 毫秒完整流程，并在 Hermes 中测试权限门控。本文作为 Jev 风格安全架构收录；已测试轨迹中未观察到违规仅提供有限证据，路由、分类与端到端审核成本应分别解释。

- **[Nudge the Judge: Uncovering Program Decision Hijacking in Real-World Jev Applications](https://arxiv.org/abs/2610.18612)**<br>📅 <strong>2026-10-13 15:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yang Luo, Tiantian Ji, Zifeng Kang, Yucheng Wang, Yong Liu, Zhiyi Yin, and Xinran Liu
  - JevProbe 在 228 个应用与 2,273 个测试案例中，追踪攻击者控制的上下文如何经过符合模式的 Jev 判断影响下游决策。作者报告 81.5% 的案例发生决策翻转，多数翻转具有潜在安全后果，已测试防御的保护有限。本文作为以应用为基础的安全评测收录，区分可达攻击面、潜在后果与已确认利用或生产事故。

<a id="science-healthcare-education"></a>

## 🩺 科学、医疗与教育中的 AI

科学推理、生物医学模型、临床评估、公共卫生与道路安全分析，以及学习者建模。

### 2026

- **[Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev)](https://arxiv.org/abs/2609.24052)**<br>📅 <strong>2026-09-21 03:24 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - 研究将含 27 个问题的 Jev 模式应用于 499,500 份得克萨斯州交通事故叙述，并对照编码字段和 2,416 项盲法人工判断审查部分样本。相对于人工标签，研究报告 F1 为 0.908，并发现后验重新校准能明显降低校准误差。本文提供了少见的部署规模评测与明确的复核预算，也谨慎区分了与数据库一致和忠实反映叙述内容这两个目标。

- **[Counting the Uncounted: Population-Level Surveillance of Documented Pregnancy and Fetal Harm in Police Crash Narratives with a System One Model (Jev)](https://arxiv.org/abs/2610.00213)**<br>📅 <strong>2026-09-21 14:25 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - 这项总体规模研究筛查了 5,018,079 份得克萨斯州事故叙述中的妊娠记录，再利用 Jev 的八问题模式和盲法人工审查，估计漏记案例及胎儿伤害。研究估计有 5,467 起事故记录了妊娠，其中 58 起记录了胎儿伤害。本文将基于 Jev 的事故信息提取扩展到监测，但明确衡量的是警方叙述记载的内容，而非妊娠或伤害的真实发生率。

- 🔥 **[Jev for Scientific Decisions: Evaluating Semantic Choices and Their Consequences](https://arxiv.org/abs/2609.24965)**<br>📅 <strong>2026-09-21 17:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Boyuan Deng, Shuyi Fan, Hongyang Zhang, and Xinhong Xie
  - 研究在十个科学案例的二十项有来源依据的语义选择上，评估 Jev 与其他十一种配置，并将关系选择、后续算术计算和最终结论分开考察。Jev 在完整语义正确性上与五种配置持平，且在成功响应中具有最低的实测中位延迟。本文在受控的“决策加代码”工作流中检验 Jev，揭示了仅看最终标签准确率可能掩盖的错误。

- **[Can Jev Judge Radiology Reports? Evaluating a System One Model for Clinical Factuality](https://arxiv.org/abs/2609.27607)**<br>📅 <strong>2026-09-23 09:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiaju Huang, Hao Yang, Xinyu Ma, Xinglong Liang, Kunyan Cai, Junqiang Ma, Shaobin Chen, Yue Sun, and Tao Tan
  - 研究双向使用 Jev，判断生成的放射学报告与参考报告中的陈述是否相互支持。单问题配置与专家错误计数的相关性优于条件匹配的开放 NLI 评判器，也能较好检测受控的错误否定；但本地 RadMatch 系统在临床重要错误上仍更好。本文提供关注成本的医学事实性应用，并明确分析报告长度与错误定义的影响。

- **[Jev Matches 7B Language Models for Speech-Neuroprosthesis Rescoring](https://arxiv.org/abs/2609.33538)**<br>📅 <strong>2026-09-27 13:04 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Gabriele Cinà
  - 研究以一次 Jev 候选句选择替换语音神经假体中的语言模型重评分阶段，并与神经解码器的分数结合。在一名 ALS 参与者的 978 个留出句子上，报告的词错误率为 7.5%，两个 70 亿参数模型则为 7.8%。本文提供具体的科学系统组件替换实验，但单参与者、离线证据以及 262 毫秒互联网延迟，限制了临床部署与速度方面的主张。

- **[Jev in Medicine: A Benchmark Evaluation](https://arxiv.org/abs/2609.34024)**<br>📅 <strong>2026-09-27 23:33 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Alfredo Madrid-García and Beatriz Merino-Barbancho
  - 作者在四个医学问答和诊断基准上，将 Jev 与 GPT-6 Sol 进行比较。Jev 在 PubMedQA 上接近推理模型对照，但在考试题和复杂诊断上落后，尽管输出有效且延迟低。其高置信度子集较准确，但对照在相近覆盖率下也能达到这一准确率，且两者都很少选择“无法回答”。本文区分了任务特定的校准、诊断能力以及选择性预测带来的收益。

- **[OmniMed-Jev: Calibrating LVLM Confidence for Trustworthy Medical Multimodal Decisions via System One](https://arxiv.org/abs/2610.00381)**<br>📅 <strong>2026-09-30 08:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Luyao Tang and Cheng Chen
  - OmniMed-Jev 适配医学视觉语言主干，使其在不同影像模态与有界任务上返回 Choice、Noul 和 Score 分布。在使用相同主干、数据与训练安排的比较中，它报告概率校准改善，单点预测总体相近，但生成式基线在计数任务上仍更强。本文提供独立的医学 Jev 风格扩展；伴随的训练差异使接口本身的效果无法单独识别，评测也未确立临床可用性。

- **[From Retrieval to Typed Decisions: Calibrated System One Models from Biomedical Sentence Encoders](https://arxiv.org/abs/2610.02486)**<br>📅 <strong>2026-10-01 21:03 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Pritam Deka
  - SBERT2S1 将生物医学句子编码器转化为类型化决策模型，并提出 BIODECIDE 及从 MEDLINE 构建的 24.3 万条训练决策。匹配实验表明，检索预训练对部分决策头有益，但并非对所有决策头都有效；一种开放的 RLCD 训练方案因奖励归一化而落后于交叉熵训练，温度缩放后也没有明确的校准优胜者。本文作为生物医学领域的 Jev 风格训练研究被收录，明确研究的是开放方案，而非 TypeSafe 未公开的算法。

- **[Estimating Uncoded Crash Factors with Tabular Foundation and System One Models: Kumo Tabular and Jev](https://arxiv.org/abs/2610.10321)**<br>📅 <strong>2026-10-07 16:12 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - 作者将 Kumo Tabular 对 560 万条得克萨斯州交通事故记录的预测、Jev 对抽样叙述的解读以及人工再校准相结合，估计编码字段遗漏的因素。独立的概率抽样人工核验支持了报告中的总体估计，定向复读也比随机复核发现更多不一致。本文作为 Jev 辅助的统计工作流被收录，其有效性依赖抽样与人工核验，测量的是文档记录的因素，而非事故的潜在成因。

- **[Can a System-One LLM Perform Knowledge Tracing When Few or No Learners Are Logged?](https://arxiv.org/abs/2610.11135)**<br>📅 <strong>2026-10-08 02:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Unggi Lee and Haeun Park
  - JevKT 利用 Jev 的类型化概率，在平台几乎没有或完全没有交互历史时预测学习者作答，并可选加入示例和相似学习者统计。在七个数据集上，它优于受评估的生成式基线及低数据量深度知识追踪基线；随着有记录的学习者增加，监督模型逐步追平。本文作为直接的教育冷启动应用被收录，但其优势并不适用于所有情境，包括学习者数据充足时预测未见过的题目。

- **[Can Multimodal Decision Models Classify Breast Ultrasound Images? Benchmarking CLEF and CLEF-Flash Across Prompts and Datasets](https://arxiv.org/abs/2610.13675)**<br>📅 <strong>2026-10-09 14:41 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tran Cao Minh, Hai Tran, and Ha Minh Tan
  - 作者在三个数据集的 2,818 张乳腺超声图像上，以三种提示设计评估未经调整的 CLEF 与 CLEF-Flash。临床指令提升了 CLEF-Flash 的准确率，却降低了 CLEF 的准确率；在 BUS-BRA 上，所有配置都不及多数类别预测器。本文作为 Jev 风格多模态决策模型的应用审查收录，数据集差异、类别特定错误和提示敏感性限制了其临床解释。

- **[Toward System One Clinical Intelligence: Parameter-Efficient Fine-Tuning and Counterfactual Explainability of Decision Foundation Models](https://arxiv.org/abs/2610.15029)**<br>📅 <strong>2026-10-10 16:13 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · S. M. Mahbub Uddin Ahmed
  - 作者使用量化 LoRA 调整 Clef-Flash，在 960 条训练记录和 240 条测试记录上开展基于症状的 24 类疾病分类。研究报告 95.42% 的准确率，并通过逐一移除症状的扰动分析模型敏感性。本文作为 Jev 风格临床决策模型的适配研究收录；小型基准划分、报告中的服务性能比较和示例性扰动分析，尚不能证明临床部署条件或因果解释。

- **[How Reliable Are System-One Decisions in Medicine? A Comparative Study of Jev, Jev-like Models, and LLMs](https://arxiv.org/abs/2610.18529)**<br>📅 <strong>2026-10-13 15:15 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yanrui Du, Danyang Zhao, Sendong Zhao, Wenhao Li, Yibo Gao, Haochun Wang, Zhuoer Xu, Shiwen Cui, and Bing Qin
  - 这项研究在十五个医学数据集的 8,742 个样本上比较 Jev、开放决策模型与 LLM，测试准确率、表述稳定性和弃答。Jev 在文本驱动任务上有竞争力，对格式变化也较稳定，但数值任务和正确答案缺失检测较弱。独立二元评分改善了保留答案的准确率。本文作为广泛的医学可靠性审查收录，将决策一致性与安全弃答、临床能力分开。

<a id="networks-databases-engineering"></a>

## 🌐 网络、数据库与工程应用

通信网络、边缘控制、语义数据库、物理基础设施，以及工程设计与故障诊断。

### 2026

- **[Replacing Large Language Models with Jev Decision Models for Low-Latency Edge Service Orchestration](https://arxiv.org/abs/2609.22753)**<br>📅 <strong>2026-09-19 04:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Delong Li, Xu Wang, Haochen Gong, Rui Lang, and Guangsheng Yu
  - 修订版研究通过四至八个取值范围明确的意图字段，将 Jev 集成到边缘服务准入流程，并在 8,280 个已核验请求上与两个本地决策模型、三个托管 LLM 比较。在三十三种条件下，Jev 的决策延迟更低，但更宽泛的接口约定暴露了准确率限制，缓存也会缩小其优势。由于扩展了准入实验并明确测量服务完成情况，本文与配套的 6G 研究分别收录。

- **[Intent Interpretation at RIC Timescales: Jev Decision Models versus Large Language Models in 6G Open RAN](https://arxiv.org/abs/2609.23136)**<br>📅 <strong>2026-09-19 17:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Delong Li, Xu Wang, Haochen Gong, Rui Lang, and Guangsheng Yu
  - 修订版研究在 RAN 意图解释、闭环仿真和真实 A1/E2 路径上，比较 Jev、其他决策模型与生成式 LLM。Jev 的 99.8% 调用满足一秒预算，而更慢的解释器会错过截止时间或造成队列饱和；基准运行点上的无线性能差异仍不明确。本文区分解释延迟、控制器容量与下游网络结果，避免将决策更快等同于所有指标都会改善。

- **[Type-Safe Decision Frameworks for Agentic 5G Control: A Theory-Driven Testbed Characterization of Where They Can Be Applied](https://arxiv.org/abs/2609.33689)**<br>📅 <strong>2026-09-27 15:51 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Michail-Alexandros Kourtis and George Xilouris
  - 作者在 Open5GS/UERANSIM 控制测试平台上比较托管 Jev、适配后的 Laya 编码器和 AnyJev，将部署要求表达为时效、类型和风险谓词。Laya 更快，但问题变化时常重复训练中的答案；Jev 和 AnyJev 更能理解这些变化，所需资源成本不同。本文将类型化模型的可靠性与可测量的网络控制要求联系起来，而不把格式有效等同于控制正确。

- **[A First Glance at Jev for Network Traffic Classification: Accuracy, Processing Time, and Cost](https://arxiv.org/abs/2610.00376)**<br>📅 <strong>2026-09-30 08:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shenghe Xu and Lifan Mei
  - 研究覆盖二十六个采集周、52,000 条记录，根据每条流的前十个数据包识别十种网络应用标签。上下文示例能明显改善 Jev，但训练过的树集成模型在每一周都更准确。小规模配对比较发现 Jev 比推理 LLM 的延迟和成本更低。本文提供有价值的负面应用结果，但监督程度与服务配置不等，无法将差距归因于单一因素。

- **[Prune First, Decide Fast: Scalable Semantic Query Processing with JEVDB](https://arxiv.org/abs/2610.02046)**<br>📅 <strong>2026-10-01 16:55 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhengle Wang, Hanxu Yan, Fuheng Zhao, and Chunwei Liu
  - JEVDB 将类型化决策模型融入语义 SQL 的筛选、连接、分类与排序，并将不确定案例交由生成式模型处理。关系半连接约简与语义筛选会在昂贵的评估之前剔除候选对。SemBench 和基于 TPC-DS 构建的连接工作负载测试表明，该方法在保持有竞争力的质量的同时降低了延迟与成本。本文作为基于 Jev 的数据库架构被收录；实测收益同时来自剪枝、复用、路由和决策模型。

- **[HydroJEV: A one-second, training-free screen for cyber-attack and fault attribution in water distribution networks](https://arxiv.org/abs/2610.02048)**<br>📅 <strong>2026-10-01 16:57 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Tianwei Mu, Shengyan Jiang, Mingzhe Yuan, Qing Luo, Min Xiao, Wenhong Wang, Jun Li, and Manhong Huang
  - HydroJEV 使用 Jev 对供水管网告警进行首轮归因，区分攻击、物理故障、正常瞬态变化和传感器故障。研究在 EPANET 仿真数据上开展四轮封闭测试，并迁移到另外两个管网，评估一种由规则确认正常状态的放行机制；该机制减少了 35–38% 的大语言模型复核，且未出现报告中的准确率损失。本文作为受约束的基础设施分诊应用被收录，但证据来自模拟事件，尚非供水系统实际运行部署。

- **[System One Models for Wireless Decision-Making:Applications and Performance Evaluation](https://arxiv.org/abs/2610.04345)**<br>📅 <strong>2026-10-03 07:13 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Masoud Rahimi, S. M. Matin Alemohammad, Hamid Behroozi, and Mahdi Nouri
  - 这项无线控制研究在天线选择、意图条件化的无线接入网切片和边缘编排任务上，将 Jev 与生成式模型及传统方法进行比较。Jev 降低了观测到的决策延迟，但更强的任务专用方法在天线选择质量上仍有优势，且调用加快并不总能缩短服务完成时间。本文作为有限选项控制应用被收录，区分了接口速度、动作质量与端到端网络性能。

- **[SoK: Semantic Decision Engines in Network Control Loops](https://arxiv.org/abs/2610.06425)**<br>📅 <strong>2026-10-05 14:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Delong Li, Chen Li, Xu Wang, Haochen Gong, Rui Lang, and Guangsheng Yu
  - 这篇综述围绕决策接口、执行路径和核验责任，整理了 139 个论文系列，发现许多控制回路时延声明缺少条件匹配的证据。涉及 Jev 等引擎的有限测试展示了排队、可行性与完成状态检查如何改变部署结论。本文作为与 Jev 相关的系统证据审查收录；这些演示用于说明失效机制，并不估计它们在各类网络中的普遍程度。

- **[When Plans Change Answers: Formalizing Cost-Accuracy Optimization for Semantic Queries](https://arxiv.org/abs/2610.08089)**<br>📅 <strong>2026-10-06 10:19 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Kyoungmin Kim
  - 这项修订后的理论研究利用 Jev 风格的校准置信度，形式化描述了策略会同时改变成本与答案的语义查询计划。研究按决策错误对查询输出的贡献赋予权重，区分多重集与集合语义，并推导计划等价性及优化结果。本文作为基于 Jev 的数据库推理的直接扩展被收录，其证据来自合成模拟并依赖明确的校准假设，尚未在已部署的查询引擎中评估。

- **[NL2Hull: A Natural Language-Driven Constrained Ship Design Decision Framework](https://arxiv.org/abs/2610.09896)**<br>📅 <strong>2026-10-07 11:55 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Wenhua Huo, Fenglei Han, Wangyuan Zhao, Jialin Wu, and Jiayi Han
  - NL2Hull 将自然语言船体编辑请求映射为类型化动作概率、可执行的自由形式变形和几何约束检查。研究在 43,496 个问题上将专用 Chip 模型与 Jev 及语言模型比较，并报告较高的决策和动作准确率。本文作为可与 Jev 比较的工程决策框架被收录，但连续编辑暴露了约束组合失效，且接口尚不能预测连续的变形幅度或空间范围。

- **[Where Can a Decision Model Diagnose HVAC Faults? Reasoning Demand, Physical Representation, and Robustness Under Shift](https://arxiv.org/abs/2610.09937)**<br>📅 <strong>2026-10-07 12:23 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Wooyoung Jung
  - 这项研究使用四个真实设备数据集中的 128 个暖通空调故障日，比较 Jev、开放语言模型和监督模型，并改变物理特征、拓扑与部署条件。Jev 能诊断由单项物理特征支持的故障，但在需要运行背景时表现欠佳；发生分布偏移时，它比监督对照模型更稳定。本文作为有限选项诊断应用被收录，但较弱的检测能力和需要修正的概率限制了其自主使用。

<a id="social-science-human-decisions"></a>

## 👥 计算社会科学与人类决策

社会科学标注与复现、文化价值观、群体模拟、组织判断与招聘决策。

### 2026

- 🔥 **[Evaluating Decision Models for Text Annotation in Computational Social Science](https://arxiv.org/abs/2609.24574)**<br>📅 <strong>2026-09-21 13:41 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hazem Ibrahim and Yasir Zaki
  - 这项预注册评测在十八项社会科学分类任务的 7,977 个样本上，将 Jev 1.13 和开放决策模型与十九个语言模型进行比较。Jev 在多数任务上落后于该任务表现最好的 LLM，但成本低得多，其概率也往往比 LLM 用文字报告的置信度校准得更好。本文为研究标注场景提供了较大规模的准确率、校准、路由和成本分析。

- **[KITE: Scaling Jev Population Experiments with Sparse Flagship Calibration](https://arxiv.org/abs/2609.27535)**<br>📅 <strong>2026-09-23 08:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Hengyu Li
  - KITE 对每个独特状态仅查询一次类型化 Jev 行为内核，在大规模模拟人群中复用所得表格，并仅为稀疏的配对校准参照调用更强模型。社会科学实验报告了更好的干预效应估计和保守的不确定性覆盖，并基于缓存决策在本地运行一百万个智能体。本文提供基于 Jev 的模拟架构，其有效性明确依赖有限的人类—模型差异证据，而非仅靠蒙特卡洛模拟规模。

- **[The Argument and the Letterhead: Source-Position Coherence in AI Evaluation](https://arxiv.org/abs/2609.35286)**<br>📅 <strong>2026-09-28 14:34 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Michele Loi
  - 研究保持政策论点不变，只改变来源归属，以测试评估者是否混淆论点质量与来源立场的一致性。后来补充的 Jev 实验在其采用的参考阈值下发现较小的交互效应，但使用了不同评分准则，数据收集也曾中断。本文因明确测量 Jev 判断而收录；现有证据不支持声称它在相同条件下优于主实验中的生成式评估者。

- **[Calibrated to Whom? Persona and Language Effects on Cultural Values in JEV](https://arxiv.org/abs/2609.36399)**<br>📅 <strong>2026-09-28 23:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Bushra Asseri and Abdulaziz Asseri
  - 这项审查围绕文化价值观问卷，跨沙特与美国人设、英语与阿拉伯语以及八种请求设计收集了 288,000 个 Jev 回答。回答具有很高的可重复性，但沙特与美国之间的差异在阿拉伯语下缩小，并在长期导向维度反转；交叉语言实验将这种减弱归因于题目语言。本文直接研究模型的问卷行为，人设响应和可重复性并不意味着忠实代表真实人群。

- **[Judgement in the Age of Jev: From Evaluation Scarcity to Evaluation Abundance](https://arxiv.org/abs/2610.01231)**<br>📅 <strong>2026-10-01 07:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Richard Hill
  - 这篇观点论文以 Jev 为例讨论一个带条件的杰文斯假说：当潜在需求较大、配套成本可控时，机器评估变得便宜可能增加组织对它的使用。文章区分评估、判断和授权，并讨论共同错误、有缺陷的评分准则以及决策权变化。本文作为直接围绕 Jev 展开的概念研究收录，其中的经济与组织效应属于假说，而非实测的采用结果。

- **[Skill Selection, Measured](https://iambraun.com/jevreports/skill-selection/)**<br>📅 <strong>2026-10-03</strong> · 独立技术评测 · 报告更新 · <strong>Tier B</strong> · David G. Braun
  - 这次条件匹配的重跑在每组 8,916 项“技能—招聘岗位”决策上，比较 Jev、Laya、生成式模型、概率读取、嵌入和词汇匹配。在 720 个由模型裁定的配对上，Jev 对随机样本表现较强，但困难样本上与领先概率读取方法的差异尚不明确。本文检验了批处理、解析失败和选择偏差，但仅十二个招聘岗位及模型生成的参考标签限制了结论。

- **[JEV versus LLMs: Accuracy, Cost and Calibration on Seven Political Science Replications](https://arxiv.org/abs/2610.06625)**<br>📅 <strong>2026-10-05 16:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Steven Denney and Matthew DiGiuseppe
  - 这项研究在七项政治学复现任务中，将 Jev 与已发布的人工或模型标注，以及当代商业和开放 LLM 进行比较。Jev 的准确率往往接近对照，但按批处理价格计算，相较所评估的商业模型没有成本优势；其校准优于一个对照，却未持续胜过开放模型。本文通过领域复现说明，价格假设与概率读取方式会改变模型优势的判断。

- **[Jack & Jill & Jev: Cutting candidate screening costs by 88%](https://typesafe.ai/blog/jack-jill-jev-case-study)**<br>📅 <strong>2026-10-07</strong> · TypeSafe AI 技术案例研究 · <strong>Tier A</strong> · TypeSafe AI
  - TypeSafe 报告了一项配对离线比较，在 150 个真实招聘岗位上比较 Jev 与 Gemini 的候选人筛选。Jev 以更低的报告成本和中位完成时间，保留了相近比例的后来被招聘经理要求进一步接洽的候选人；召回率差异在统计上不显著。本文因明确说明抽样与评估方法而被收录，同时区分厂商报告的结果、经历史筛选形成的标签、年度节省预测与独立测量的部署效果。

- **[Jevolution: A Framework for Studying Communication and Collective Dynamics in AI Agents](https://arxiv.org/abs/2610.14449)**<br>📅 <strong>2026-10-10 01:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xirui Huang, Nikhil Hooda, and Utkarsh Gupta
  - Jevolution 提供带有观测记录机制的捕食者—猎物模拟器，将世界动态、异步推理、控制器适配器和实验记录分开。以 Jev 控制的通信实验比较六组成对栖息地随机种子，种群数量差异的区间包含零。本文因研究框架及已完成的 Jev 实验而收录，同时区分软件检查、小规模未得出明确结论的案例与涌现语言、适应性选择或生态有效性的证据。

- **[Probable but Not Valid: A Psychometric Audit of Decision Models as Synthetic Survey Respondents](https://arxiv.org/abs/2610.14912)**<br>📅 <strong>2026-10-10 13:34 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mantas Lukauskas and Viktorija Šarkauskaitė
  - 这项心理测量审查在一份立陶宛组织心理学问卷上，比较包括 Jev 在内的十四个决策模型与 47 个生成式模型。概率向量比四舍五入后的答案更能复现整体题目分布，但所有决策模型对个体答案的预测都不如其他受访者的答案频率。本文作为合成受访者直接评测收录；有限的个人资料信息，以及无法可靠比较模型与另一小型真人样本的相似度指标，限制了结论。

- **[Jev-ToM: Evaluating Theory of Mind in Typed Decision Models](https://arxiv.org/abs/2610.18610)**<br>📅 <strong>2026-10-13 15:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Kawai Chung, Chunkit Chan, Yuxuan Liu, Yauwai Yim, Xi Yang, Wenbin Hu, Huihao Jing, Chiu Yeung Tang, Changxuan Fan, Ki Sen Hung, Tsun On Kwok, and Haoran Li
  - Jev-ToM 在九个基准的 11,117 道英语心智理论题目上评估五个类型化决策模型与七个生成式基线。Jev 的来源均衡准确率达到 73.2%，在多个能力组中表现较强，但置信度选择、附加理由和候选扩展的效果依赖任务。本文作为直接的社会推理评测收录，基准选择与单独测量的资源数据限制了对已部署协作助手的推断。

<a id="search-and-verification-notes"></a>

## 检索与核验说明

**截止日期：** 2026 年 10 月 14 日（Asia/Shanghai）。

**组织方式：** 按主要研究领域分组，截至 10 月 14 日核验时共收录 174 条文献，其中包括 161 篇学术预印本和 13 篇技术文章或报告。

10 月 14 日更新重新执行原始及扩展 arXiv 检索，将提交窗口延长至 10 月 14 日（Asia/Shanghai）。两组分别返回 125 条和 152 条记录，去重后为 187 篇 arXiv 候选文献，比前次快照多 42 篇。筛选后新增 37 篇、排除 5 篇，总计收录 160 篇 arXiv 预印本、1 篇 ResearchGate 预印本和 13 篇技术来源，共 174 条。另同步 13 篇已收录论文的修订，包括 Koa-decision、GraphDecisionBench、JevCascade、扩展后的评分准则评判与推荐研究、Thinking Jev、SII-Decision 模型名称，以及 TypedBench 作者 Andrew B. Duncan 的姓名更正。排序仍保留原始 v1 时间戳。

新增与修订条目均核对官方摘要页及 API 元数据，并针对收录范围和变化结论检查相关全文。CalOn 因明确受 RLCD 启发的类型化提取接口收录，不将其视为专有 RLCD 的复现；SkillScreen 全文确认使用 OpenJev 初始化并包含托管 Jev 基线。三篇无关工程或物理论文、使用规则式 System 1 的 SCOPER，以及未直接研究具体模型的一般再校准理论被排除。本轮未核实新增符合范围的技术报告或 TypeSafe 架构／RLCD 正式论文。全部 13 个技术链接均已复查：8 个直接访问成功，5 个返回 HTTP 403，但可通过网页阅读工具访问。链接检查不等同于全面重新审核内容。完整元数据、筛选决定、修订比对与抓取限制见 [10 月 14 日核验记录](outputs/jev-literature-2026-10-14.json)。

以下段落保留此前的核验历史。

10 月 11 日的增量核验重新执行了两组 arXiv 检索，将提交时间窗口延长至 10 月 11 日（Asia/Shanghai）。两组仍分别返回 102 条和 119 条记录，合计为相同的 145 篇不同 arXiv 候选文献。题名、完整作者名单、v1 与修订时间、版本网址、期刊引用信息和 DOI 均与 10 月 9 日记录一致。本轮未新增经核实符合范围的论文或技术报告；所有条目、摘要和领域数量保持不变。TypeSafe 的 [10 月 9 日融资公告](https://typesafe.ai/blog/series-ai)属于公司新闻，未予收录。另检查了全部 13 个技术文章来源链接：12 个可直接访问，Workflow evals 的直接抓取返回 HTTP 451，但可通过网页阅读工具访问。这些链接检查不等同于重新全面审核文章内容。检索详情、比对结果和抓取情况保存在 [10 月 11 日核验记录](outputs/jev-literature-2026-10-11.json)中。

以下说明保留的 10 月 9 日核验基线。

10 月 9 日的更新将原有 README 与 arXiv API 对 `all:Jev` 返回的完整结果集（102 条记录）进行核对。扩展检索使用 `typed decision`、`Jev-style`、`Reinforcement Learning for Calibrated Decisions`、`System One`、`Laya`、`System-1`、`Jev-like`、`RLCD`、`typed probabilistic` 和 `decision models`，将提交时间限定在 9 月 15 日至检索当天，共返回 119 条记录。两组检索合计得到 145 篇不同的学术候选文献，覆盖此前收录的全部 102 篇预印本。筛选后保留 123 篇、排除 22 篇，新增 21 篇学术文献。其中四篇新增文献的 v1 日期在 9 月：与生物安全相关的可靠性审计、Emo-Jev、SeLMRoute 和 Certo 缓存研究。它们是本次新收录的记录，并非 10 月新提交的论文。

每篇保留的 arXiv 文献均核对了当前元数据。新增条目和三篇修订论文均查阅了原始摘要页面，并针对 Jev 的角色、实验结论和存疑的收录决定进行了定向全文核查。修订内容包括 Type-Safe Is Not Error-Free 的题名与发现、JevOut 的完整作者名单与扩展评测，以及语义查询优化研究。题名与摘要描述已核验的版本，v1 时间戳仍作为排序依据。尚未核实这些记录的会议或期刊发表元数据，因此全部保留 arXiv 预印本标识。

另行补充了用户推荐的 [WaterSheep 0.1.0](https://doi.org/10.13140/RG.2.2.28606.45122)，通过 [DataCite DOI 元数据](https://api.datacite.org/dois/10.13140/RG.2.2.28606.45122)和[作者项目说明](https://github.com/SamratDuttaOfficial/WaterSheep)进行核验。DataCite 确认作者为 Samrat Dutta、年份为 2026，类型为 ResearchGate 上尚未正式发表的预印本。登记信息没有具体发布日期；2026 年 10 月 1 日的 DOI 注册时间不作为论文发布日期。ResearchGate 返回 HTTP 403，因此尚未核验全文，摘要已明确将实验结果归因于作者说明。此次新增一篇非 arXiv 学术候选文献并予以收录，合计为 146 篇候选文献、124 篇已收录预印本和 137 条文献。

通过一手网页来源检索，新增四份技术报告：Vals AI 的 Jev 评测及后续 Mercury Decide 评测、一项三组调度实验，以及 TypeSafe 的候选人筛选案例研究。摘要区分了共享评测数据、小规模或未公开测试集、厂商报告与独立复现。对 TypeSafe 博客以及 OpenReview、ACL Anthology 的定向检索，均未确认存在经过同行评审的 TypeSafe 架构论文或专有 RLCD 论文。对于可访问的现有技术链接，也进行了复核；直接抓取失败与通过网页阅读工具完成的核验分别记录。

被排除的关键词命中包括 Jev 或 System One 的无关用法、一般性的校准与路由研究，以及未能核实与 TypeSafe 或 Jev 风格概率接口有关联的工作。SubJudge 的全文未建立这种关联；已检查的 Jev-LDE 全文也未建立与 TypeSafe 的关联，或符合收录范围的类型化概率接口。固定分类体系蒸馏、通过激活引导生成答案、通用 RAG 发布门控，以及无关的数学和物理论文仍不在收录范围内。独立仓库、模型卡、演示、普通新闻和二手摘要均不作为独立文献条目。

已收录文献的最新 arXiv v1 提交时间为 2026 年 10 月 13 日 17:34 UTC。截止日期表示核验日期，并不保证截至 10 月 14 日的每篇提交均已公告或被索引。部分 10 月编号的文献具有 9 月的 v1 时间戳；排序依据已核实的提交历史，而非编号前缀。README 的历史修订保留各自的截止日期。当前检索数量、元数据、收录决定、来源链接、抓取结果及修订核查均保存在 [10 月 14 日核验记录](outputs/jev-literature-2026-10-14.json)中。

本轮未通过程序查询 Google Scholar；由于缺少订阅凭据，也未使用 Scopus 和 Web of Science。新公告或尚未被索引的工作可能遗漏。本轮检索不声称覆盖所有出版机构，也不构成完整引文图谱。

<a id="verification-policy"></a>

### 核验规则

学术元数据对照原始 arXiv、会议、期刊、出版机构页面或 DOI 登记记录，核查题名、完整作者名单、年份、发表渠道或状态与网址。Jev 在工作中的实际角色依据论文或作者提供的说明核查；若因全文无法访问而使用补充说明，则明确披露。没有官方论文集记录时，不将预印本标为会议论文。同一工作的 arXiv 与出版版本合并为一个条目；如已核验正式出版版本，则优先采用该版本。

每次修改文献列表时，都应重新检查链接与数量。提交和审核格式详见[贡献指南（英文）](CONTRIBUTING.md)。

<a id="contributing"></a>

## 参与贡献

欢迎补充可核验的研究论文、预印本、技术报告、基准与有实质内容的研究文章。提出条目前请阅读[贡献指南（英文）](CONTRIBUTING.md)。独立仓库、演示、模型页面、通用软件、营销文案、新闻摘要和重复条目均不在范围内。

<a id="license"></a>

## 许可

本仓库整理的元数据和原创摘要依据 [CC0 1.0 Universal](LICENSE) 贡献至公有领域。所链接的作品仍保留各自的版权和许可。
