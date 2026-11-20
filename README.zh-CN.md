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
  <strong>403 条文献</strong> · <strong>390 篇学术论文</strong> · 最近核验 <strong>2026-11-20</strong> · <a href="LICENSE">CC0 1.0</a>
</p>

本仓库精选与 **Jev**（TypeSafe AI 的首个 **System One Model**）及类型化概率决策相关的论文、预印本、技术报告、评测和研究性文章。

Jev 并非缩写，其名称源自经济学家 William Stanley Jevons。TypeSafe 于 2026 年 9 月 15 日发布该模型，将其定位为非自回归决策组件：输入非结构化文本或程序状态，输出预定义的 `Choice`、`Score` 或二元类型（`Noul`）结果，并附带概率和置信度。其目标是在软件工作流中提供快速、符合预设模式的判断，而非生成自由文本。

> **收录范围。** 本仓库收集研究文献，不收录独立实现。独立 GitHub 仓库、模型页面、演示、视频、普通新闻和纯营销文章均不在范围内。代码或模型链接仅可作为已收录论文的补充材料。

> **证据状态。** Jev 是近期推出的闭源权重商业模型。11 月检索中，仍未找到由 TypeSafe 发表并披露 Jev 架构或 Reinforcement Learning for Calibrated Decisions（RLCD，面向校准决策的强化学习）的同行评审论文。OpenJev-RLCD 等独立研究探索的是各自的训练方法，并未披露 Jev 的专有算法。学术条目包含 382 篇 arXiv 预印本、5 篇其他来源的预印本及 3 篇正式发表论文。第一方性能结论在获得独立复现前，仍属于作者或厂商报告。

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
| [基础方法与通用决策模型](#foundations-decision-models) | 73 |
| [自然语言处理与信息检索](#nlp-information-retrieval) | 52 |
| [多模态学习与感知](#multimodal-perception) | 25 |
| [具身智能与强化学习](#embodied-ai-reinforcement-learning) | 24 |
| [智能体与工作流自动化](#agents-workflow-automation) | 45 |
| [可信 AI 与安全](#trustworthy-ai-security) | 83 |
| [科学、医疗与教育中的 AI](#science-healthcare-education) | 50 |
| [网络、数据库与工程应用](#networks-databases-engineering) | 28 |
| [计算社会科学与人类决策](#social-science-human-decisions) | 23 |
| **总计** | **403** |

403 条文献中，**390 篇为 Jev 专题或 Jev 风格的学术论文**，**13 篇为研究性技术文章或报告**。

全部 **382 篇 arXiv 文献**均列出 **v1** 的 UTC 提交时间，精确到分钟。ResearchGate 预印本已核实年份，尚未核实具体发布日期。领域统计包含所有来源类型，每项工作只计数一次。

<a id="paper-growth"></a>

## 📈 交互式研究图谱

通过 **[GitHub Pages 交互式网站主页](https://oscar-dzy.github.io/Awesome-jev-papers/?lang=zh)** 探索文献集，支持中英文切换和响应式布局。本地预览与网站维护方式见[前端使用说明](site/README.md#deployment--部署)。

- **快速入门：** 通过类型化接口介绍、可调分流阈值示例和官方指南，快速理解 Jev。
- **QS 排序：** 按论文署名学校去重后的 QS 2027 综合名次加和排序，展示已核实机构和来源；缺失排名或只有排名区间的论文置后。

- **论文增长趋势：** 切换每日与累计数量，按研究领域、收录层级及日期范围筛选。
- **综述统计分析：** 比较领域分布、Tier A/B 构成、领域每日活跃度与每篇论文的作者人数；点击领域条形或热力图单元格可查看对应论文。
- **论文目录：** 搜索题名、作者及双语摘要，支持排序、分页、原始来源跳转及匹配结果的 CSV 导出。

当前快照包含 **390 篇学术论文**，其中 **389 篇具有明确日期**。时间序列采用 arXiv v1 的 UTC 提交日期及其他来源的已核实发布日期，排除日期未核实的 WaterSheep；构成统计与完整时间窗口下的目录仍保留该论文。所有研究图表均排除技术文章。近期日期可能受公告与索引延迟影响；图表反映当前精选文献集，不代表全领域穷尽统计或仓库每日新增历史。

[前端源码](docs/) · [网站数据生成脚本](scripts/build_site_data.py) · [核验快照](outputs/jev-literature-2026-11-20.json)

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

- **[Selective Reasoning for Typed Decision Models: When to Start, Read, and Stop](https://arxiv.org/abs/2610.19644)**<br>📅 <strong>2026-10-14 06:13 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Bin Zheng, Zheng Chen
  - 该方法在冻结的 Qwen3.5-4B 骨干上使用共享候选读出器，支持直接回答与可中断推理。收益门控、定时读出和熵停止在 768 道题上提高了相对直接读出的准确率，与 512、1,024 token 基线形成不同权衡。相同前缀对照区分中断节省与观察中间答案的额外工作。

- **[Verdict: Encode Once, Decide Many](https://arxiv.org/abs/2610.20778)**<br>📅 <strong>2026-10-14 18:27 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Avdhesh Singh Chouhan, Jack Perry
  - Verdict-MQ 只编码一次共享状态，并隔离问题与候选项注意力。在类型化决策上，它比 Laya 更贴近软标签，但相对匹配编码器的跨任务表现有好有坏；实测 Jev 参照在所报告阅读基准上优于微调编码器。论文区分共享状态效率、教师标签一致性和问题感知编码质量。

- **[LEV: Thinking Fast and Deep with Looped Decision Models](https://arxiv.org/abs/2610.20951)**<br>📅 <strong>2026-10-14 21:20 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Dingjie Song, Zhiling Yan, Yuxuan Zhang, Lichao Sun
  - LEV 重复执行循环语言模型层，并在各深度读出候选概率。2.6B 模型在 JevBench 上从深度一的 63.2% 提升到深度四的 76.2%；停止器以不足一个准确率百分点换取更少计算。匹配延迟实验支持所测骨干和任务中的自适应内部深度。

- **[System1-Arena: Which Decisions Can Be Left to System 1?](https://arxiv.org/abs/2610.21244)**<br>📅 <strong>2026-10-15 04:40 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tianyu Chen, Xinyang Liu, Ruyi An, Zhendong Wang, Mingyuan Zhou
  - System1-Arena 使用统一请求和概率评分，在 105 项任务的 9.2 万道题及 138 个闭环环境中评测三十个模型。大型 System-1 模型在非智能体任务上具备较低延迟与竞争力，小模型在闭环环境中仍较弱。该工作区分单次判断质量、推理成本和交互任务成功率。

- **[Prism-1: Position- and Rival-Independent Scoring for System One Models](https://arxiv.org/abs/2610.22066)**<br>📅 <strong>2026-10-15 15:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yao Long Teng, Jianguo Huang, Yanchen Deng, Jiayi Cai, Bo An
  - Prism-1 隔离候选项注意力块并共享位置，保证选项顺序不变性与相对竞争项独立性。在五组基准上，它接近匹配训练基线，并在重排时保持决策。保证针对评分结构与选择公理，不等于所得判断一定正确或概率已校准。

- **[What Can't Jev Decide? Probing the Limits of One-Pass Decision Models](https://arxiv.org/abs/2610.24929)**<br>📅 <strong>2026-10-18 00:50 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Wang Yang, Xinpeng Li, Yanyan Zhang, Chuang Ma, Shouren Wang, Jianzhe Wei, Liqin Ye, Xiaoran Cai, Mohsen Hariri, Vipin Chaudhary, Xiaotian Han
  - 作者评估托管 Jev 与开源同类模型的单次选择能力。参考大模型无需推理即可回答的题目，Jev 大多能解决；需要更多推理时，准确率下滑。若智能体传入的状态已过时，置信度尤其难以预警。

- **[System X: An LLM Decision Model That Replies from Its Own KV Cache](https://arxiv.org/abs/2610.25456)**<br>📅 <strong>2026-10-18 18:40 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Syed Usama Khalid Bukhari, Syed Safwan Khalid, Muhammad Aamir
  - System X 在基于大模型的 Jev 式读出中增加回复选项，选中后复用决策上下文的 KV 缓存。匹配实验显示延迟降低。回复质量对比受提示和输出预算差异影响，且仍可能生成缺乏依据的细节。

- **[P(Yes): 15$\times$ Improvements via Test-Time Scaling of Decision Models](https://arxiv.org/abs/2610.25474)**<br>📅 <strong>2026-10-18 19:01 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Lev Stambler
  - 该研究用冻结决策模型的二元概率评价完整谜题解，在测试时展开搜索。Jev、Clef 等托管模型借此解出更多谜题。实验量化了这类谜题上计算开销与解题质量的权衡。

- **[Narrow Decision Models: A System-1 Architecture for Calibrated, Typed Decisions](https://arxiv.org/abs/2610.25553)**<br>📅 <strong>2026-10-18 21:49 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Carlos André Antunes, Aldry Albuquerque, Gabriel de Melo Schmith, Natã Batista, Pedro Oziel Escobar da Silva, Stefano Benko Rossi, Lingrid Dietrich Lorenz da Silva, Flávia Cristina da Costa, Thiago Bertotto, Luis Fernando Fausto
  - 论文提出用于调用方自定义选项和评分的窄型 System One 架构，重点考察选项顺序不变性。作者进行数值验证，并测试路由和法律文本分类。在法律任务中，与现有生产分类器的一致性仅是任务表现的代理指标。

- **[Truncated Reasoning Under a Budget: Evaluating System-1 Models as Decision-Makers](https://arxiv.org/abs/2610.25768)**<br>📅 <strong>2026-10-19 04:29 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zhongyin Wang, Zhaoqian Xue, Junting Mu, Haozheng Liu, Ye Yuan, Haolun Wu, Lingyao Li
  - 作者让 Jev 根据大模型未完成的推理轨迹作答，衡量低成本决策何时可以替代后续生成。基于训练折选出的策略在留出折上估计节省 71.3% 的完整运行费用，准确率下降 0.58 个百分点。

- **[TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)**<br>📅 <strong>2026-10-19 08:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Chenghao Liu, Wei Fan, Jindong Han, Dongjie Wang, Aniket Mahanti, Pengyang Wang, Hao Liu
  - TimesJev 学习保留序列中足以支持高效类型化决策的信息。它压缩时间序列，再将选出的表示与决策模型的嵌入空间对齐。作者在 13 个数据集上比较其与推理模型的准确率和推断耗时。

- **[Teacher Supervision, Fixed Representations and Calibration: Exact Risk Calculations for Candidate-Scoring Decision Models](https://arxiv.org/abs/2610.26797)**<br>📅 <strong>2026-10-19 17:42 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Agus Sudjianto, Denis Burakov
  - 论文以 Jev 与 JevAny 为例，研究教师监督信号如何影响候选打分模型的输出概率。理论分析与实证比较表明，再校准可以改善概率尺度，而教师的系统性偏差仍需用实际结果检验。

- **[DecisionPivot: A Diagnostic Benchmark for Decision Models in LLM Systems](https://arxiv.org/abs/2610.28522)**<br>📅 <strong>2026-10-20 16:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xialie Zhuang, Mingcong Lei, Zunhai Su, Ri Liu, Jianjin Li, Peixian Ma, Jia Pan, Ngai Wong, Guanhua Chen, Chuan-Wei Kuo
  - DecisionPivot 将仅在关键细节上有所不同且正确选项应随之变化的样例分组，从而同时衡量单题准确率、判断一致性和高置信度错误。该基准揭示了总体成绩相近的决策模型之间的差异。

- **[Our Own Jev: Typed Decisions in One Forward Pass, from an In-House Judge to Open LoRA Models](https://arxiv.org/abs/2610.29052)**<br>📅 <strong>2026-10-21 01:28 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yuchuan Weng, Chi Liu, Xin Chen, Srinivasan Manoharan
  - 作者以内部评判模型为起点开发开放的单次前向决策模型，并比较多种 LoRA 变体、托管 Jev 和开源替代模型。在小规模测试中最佳模型接近商业参照，重训结果则显示其对数据版本敏感。

- **[Which Differences Matter? Controlled Tests of Rule Transfer, Joint Reliability, and Information Use in Decision Models](https://arxiv.org/abs/2610.30045)**<br>📅 <strong>2026-10-21 17:04 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tianyou Lai, Wentao Yue, Zhiwei Zuo, Qilei Li
  - 作者通过受控修改规则、表述与表内数值，检验总体准确率之外的类型化决策依据。同义改写引起的变化有时大于相同输入的重复调用；修改与任务有关的表内数值后，决策较常朝预期方向变化。

- **[Jev-DLC: Decision-Level Continual Learning from Typed Feedback](https://arxiv.org/abs/2610.31521)**<br>📅 <strong>2026-10-22 16:33 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yangyang Feng, Jianle Gan, Zhuoyan Feng, Chengwei Qin
  - Jev-DLC 将接受和撤销的选择记录为反馈，以更新紧凑的个性化状态。按时间排序的基准衡量反馈事件对后续类型化决策的影响。看到更多纠正后，相对于重放历史的优势有所扩大。

- **[The Hitchhiker's Guide to System 1 Models: Fast Decision-Making Beyond LLMS](https://arxiv.org/abs/2610.33775)**<br>📅 <strong>2026-10-24 16:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Haggai Roitman
  - 这篇教程综述 System One 模型、调用方定义的决策接口及校准等实际评测议题，并提供模型清单和实例。它综合既有文献，帮助读者了解研究和实现。

- **[RubriX: A Fast, Fine-Tunable Non-Autoregressive Rubric Judge](https://arxiv.org/abs/2610.34875)**<br>📅 <strong>2026-10-26 05:45 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Balamurugan Paramasivam, Sudalai Rajkumar
  - RubriX 是对量规等级进行选择的非自回归评判模型。作者比较其在使用缓存时与 Jev、生成模型的延迟，并拉长等级描述。其速度优势在受测最长量规上最明显。

- **[Decision Model Factory: Building Specialized Sovereign Decision Models](https://arxiv.org/abs/2610.34956)**<br>📅 <strong>2026-10-26 07:23 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yuma Ichikawa
  - 论文提出构建专用决策模型的流程及配套执行器。执行器计算允许答案的概率并在多个问题间复用上下文。匹配的多问题工作负载实验显示吞吐量增加，决策分数基本保持。

- **[ThinkJev: One Thought, Every Budget for Calibrated Typed Decisions](https://arxiv.org/abs/2610.37732)**<br>📅 <strong>2026-10-27 12:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xiaolu Ding, Kai Yang, Dongdong Liu
  - ThinkJev 学习以不同长度的中间推理辅助决策。实验分别衡量低置信度和追加推理的预期收益，两者并不稳定一致。公开 JevBench 题目上的对比属于探索性结果。

- **[DecisionUnlearn-Bench: Unlearning Probabilistic Decisions under Changing Schemas](https://arxiv.org/abs/2610.38431)**<br>📅 <strong>2026-10-28 08:13 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Tiantong Wu, Wei Yang Bryan Lim
  - DecisionUnlearn-Bench 评估在选项模式变化时输出概率的决策模型遗忘能力。研究以重训模型为参照，分别测量遗忘、保留能力和后续适应。结论随架构和所用指标变化。

- **[To Jev or Not to Jev: When Can System-1 Decision Models Replace LLM Judges?](https://arxiv.org/abs/2611.00505)**<br>📅 <strong>2026-10-31 00:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shreyas Subramanian
  - 该基准考察 Jev 等决策模型何时可替代生成式评判者，区分简单偏好与需要推理的正确性任务，并测量将困难样例交给更强模型的级联。能力与服务开销的权衡因评测而异。

- **[IJev: Order-Invariant Decisions via Iterated Cyclic Reordering](https://arxiv.org/abs/2611.01015)**<br>📅 <strong>2026-10-31 14:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Youzhi Zhang
  - IJev 汇总同一候选集合在不同循环排列下的判断。作者在五种模型和五个基准上评估准确率、校准和换序翻转。受测设置中的翻转被消除，主要代价是增加模型调用。

- **[Extending Reasoning in Typed Decision Models via Looping](https://arxiv.org/abs/2611.07736)**<br>📅 <strong>2026-11-05 09:46 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · David Berghaus, Arber Zela, Behzad Shomali, Markus Frey, Mehdi Ali, Rafet Sifa, Volkan Cevher
  - 研究在需要较长推理的问题上评估类型化决策模型的循环处理，比较参数共享、额外训练计算与自适应执行。报告的收益随题目长度和决策骨干架构而变化。

- **[Towards Foundation Decision Models: Drex](https://arxiv.org/abs/2611.07854)**<br>📅 <strong>2026-11-05 11:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Nischay Dhankhar, Alisher Amantay, Zhanibek Datbayev, Darkhan Akhmetov, Yash Shah, Nurmukhamed Ubaidullayev, Raman Saparkhan, Dos Baha, Abulhair Saparov
  - Drex 提出开放决策模型版本，评估原生类型化输出、速度和顺序稳定性，并与生成式前沿模型及同类决策系统比较。报告的耗时适用于作者的请求负载与部署环境。

- **[Label-Wording Augmentation in a Typed-Decision Encoder: Gains on Unfamiliar Words, Not on Abbreviations or Codes](https://arxiv.org/abs/2611.08439)**<br>📅 <strong>2026-11-05 18:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Vladimir Beskorovainyi
  - 作者比较用不同候选措辞训练的类型化决策编码器，测试陌生标签、缩写和代码。收益集中在部分语言变化上。不同留出数据的检查点排名也不一致，增加模型选择难度。

- **[Deciding Without Generating: A Survey of Typed Decision Models, from Jev to Open Decision LLMs](https://www.preprints.org/manuscript/202611.0760/v1)**<br>📅 <strong>2026-11-06</strong> · Preprints.org 预印本 · <strong>Tier A</strong> · Shangquan Sun
  - 该综述形式化定义类型化决策，回顾 Jev 及开放替代模型的训练、服务和评测文献。作者区分用于路由的概率与实测正确性，并分析后备模型的决定如何影响整体准确率。结论综合自所述文献。

- **[AbductionBench: Benchmarking Abductive Reasoning in Large Language Models](https://arxiv.org/abs/2611.10705)**<br>📅 <strong>2026-11-07 12:56 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Moein Salimi, Amir Qeysarbeigi, Babak Hosseini Mohtasham, Faraz Doagoye Tehrani, Mahdi Naieni, Hanieh Sartipi, Ali Nouri, Amin Aghakasiri, Reyhane Khayatzade Mahani, Mahdi Jafari Siavoshani, Mohammad Hossein Rohban
  - AbductionBench 评估模型推断合理解释的能力，包括智能体是否请求有用证据及修正假设。研究加入决策模型对比，将行为过程与最终答案准确率并列分析。新观察到来后，模型仍可能坚持早期假设。

- **[ZeroPoint: Lightweight Energy-Based Decision Model](https://arxiv.org/abs/2611.12992)**<br>📅 <strong>2026-11-08 11:45 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Javier Marín
  - ZeroPoint 训练轻量能量式决策模型，处理所有候选均不合适的菜单。论文比较固定拒判参照、学习得到的拒判类和设置阈值的 softmax。结果表明，使用无合适选项的样例进行训练很重要。

- **[MMDM: Measuring Massive Multitask Decision Making](https://arxiv.org/abs/2611.14309)**<br>📅 <strong>2026-11-10 16:40 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Junhao Shen, Qing Zong, Yue Guo, Zhanqiu Zhang, Yiwen Guo, Hong Cheng
  - MMDM 用大型任务集评估决策模型，包括联合约束和多选题。部分指标要求完整找出有效选项集合。作者报告，约束规划和严格多选仍然较难。

- **[Learning a calibrated decision head from logged bandit feedback](https://arxiv.org/abs/2611.15572)**<br>📅 <strong>2026-11-11 14:55 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ye Yuan
  - 本文从选择性记录的结果训练校准决策头，并在模拟标签噪声下评估校准。作者在留出记录上测试修正方法和依赖验证集的早停。每种噪声率的实验运行次数有限。

- **[Small Heads, Strong Decisions: A Controlled Study of Typed-Decision Models](https://arxiv.org/abs/2611.15592)**<br>📅 <strong>2026-11-11 15:10 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ritvik Rastogi
  - 研究以共同骨干、数据集和流程训练五种类型化决策头。各决策头的域内准确率相近，推断成本不同。报告中，将骨干从 0.6B 增至 4B 带来的收益更大，尤其是在留出数据上。

- **[SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models](https://arxiv.org/abs/2611.15777)**<br>📅 <strong>2026-11-11 17:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Lichen Li, Ziping Dong, Sicheng Feng, Qi Li, Xinchao Wang
  - SO-Arena 在不同任务能力维度上评估 System One 模型，并单独衡量回答可靠性。受测条件下，任务表现最佳的模型在可靠性上未居首。基准呈现了单一分数掩盖的选型权衡。

- **[From Large Language Models to Efficient System One Models via Adaptive Computation](https://arxiv.org/abs/2611.16321)**<br>📅 <strong>2026-11-12 05:40 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Minh-Anh Nguyen
  - 该方法将较大的模型适配为可从不同深度退出的 System One 决策模型，由置信信号决定是否继续计算。论文在七个基准上与固定深度训练模型比较准确率和计算开销。

- **[The Value of Thinking: Learning When to Reason in Hybrid Decision Models](https://arxiv.org/abs/2611.16961)**<br>📅 <strong>2026-11-12 15:32 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhengxu Yu, Ke Xu, Meng Fang, Haitham Ammar, Weilin Luo, Jun Wang
  - 该混合决策模型学习何时推理的预期收益值得继续生成。评估覆盖决策基准及一个智能体环境。论文报告准确率、延迟与词元成本对比，并在 JevBench 上直接比较托管 Jev。

- **[UltraBERT-JEV: Encoder models for System One Applications](https://arxiv.org/abs/2611.17867)**<br>📅 <strong>2026-11-13 07:58 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Astarag Mohapatra
  - UltraBERT-JEV 探索用于单次前向决策的编码器架构。作者比较服务耗时和内存，并加入预测支持证据句的辅助读出。受测配置中，较低延迟可能伴随较高的峰值内存。

- **[AdaMenu: Query-Adaptive Menus for Decision Models over Large Label Spaces](https://arxiv.org/abs/2611.19005)**<br>📅 <strong>2026-11-13 23:08 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiangze Yan, Yi Shen, Jieyun Huang, Wenjing Zhang, Zhaoxiang Liu, Ning Wang, Kai Wang, Shiguo Lian
  - AdaMenu 调用决策模型前先按查询挑选标签子集。作者与完整菜单和层级菜单比较准确率及输入词元量。该方法也覆盖服务无法接受完整标签集合的设置。

- **[When Should Decision Models Compare Candidates?](https://arxiv.org/abs/2611.20335)**<br>📅 <strong>2026-11-16 00:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Fangzhi Li, Quan Shi, Wenting Yang, Yueqiao Chen, Jiayu Chang, Shuting Zhao, Zhaowei Xu, Yizhao Chen, Guanchu Wu, Han Xu
  - 论文检验类型化决策模型何时受益于表示候选之间的关系，对比独立打分、注意力和集合式方法在不同监督下的表现。只有候选访问权限并不足以保证有效比较，迁移效果取决于任务和训练。

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

- **[Jev-as-a-Judge for RAG Claim Verification: Confidence-Gated Cascading Between a Non-Generative Verifier and a Frontier LLM](https://arxiv.org/abs/2610.20634)**<br>📅 <strong>2026-09-30 15:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Alden Do Rosario, Kirollos Atef
  - 在 495 条人工标注的 RAG 主张上，Jev 与前沿 LLM 总体准确率接近，但放过无依据主张的比例不同。置信度级联相对前沿模型降低成本，匹配预算的随机升级对照却表现相近。论文区分总体准确率、错误类型的不对称性及尚未确立的置信度选择价值。

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

- **[One Confidence Threshold, Unequal Coverage: Language Gaps in Typed Decision Interfaces and How Translating Inputs Reduces Them](https://arxiv.org/abs/2610.37688)**<br>📅 <strong>2026-10-17 21:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Junwei Yao, Yongxi Zhou, Zike Yang, Zhijun Wang, Jianan Liu, Yanxian Chen, Wenbo Ye
  - 这项预注册研究在 51 种语言和三种类型化决策服务上采用共同置信阈值。正确回答的英语输入比等价非英语输入更常通过阈值。翻译缩小受测阈值下的大部分差距，但匹配错误率时仍有差异。

- **[Multimodal Reranking Is a System One Decision](https://arxiv.org/abs/2610.28435)**<br>📅 <strong>2026-10-20 16:00 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zhuchenyang Liu, Yao Zhang, Yu Xiao
  - 作者将视觉重排表示为类型化决策，并用两个大型视觉语言决策模型与专用重排器比较。收益随文档页面和自然图像任务变化。模型规模与代际不同，结果难以归因于决策训练本身。

- **[Scan or Index? large Evidence Coverage, Answer Quality, and Cost in Long-Document RAG](https://arxiv.org/abs/2610.28957)**<br>📅 <strong>2026-10-20 22:11 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Juan Terven, Diana-Margarita Córdova-Esparza, Julio-Alejandro Romero-González, Edgar Chavez-Urbiola, Juan Irving Vasquez, Julian Andres Ramirez-Bautista, Silvia L. Chaparro-Cárdenas, Gendry Alfonso-Francia
  - 论文在长文档问答中比较决策模型全扫描与词法、稠密、混合检索，并分别测量证据保留率和回答质量。查询累计时，可复用索引更具成本优势；在书籍上，全扫描的延迟较高。

- **[How Well Do Decision Models Transfer to Vietnamese? An Empirical Study of Text Classification](https://arxiv.org/abs/2610.31422)**<br>📅 <strong>2026-10-22 15:24 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Phat Huu Ha, Nguyen Xuan Phuc, Nong Nhut Quy, Trinh Tran Tran, Nguyen Minh Triet, Dang Van Thin
  - 作者在 13 种越南语零样本分类情境中评估四种决策模型，比较标签设计和输入扰动。去除变音符号比受测网络用语和拼写错误造成更大降幅，凸显语言特定稳健性检验的价值。

- **[System One models Are Not Better Rerankers](https://arxiv.org/abs/2610.32318)**<br>📅 <strong>2026-10-23 08:16 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Michael Dinzinger, Kanishka Ghosh Dastidar, Michael Granitzer
  - 匹配对比检验 System One 训练能否比重排专用微调更好地迁移到段落重排。专用重排器通常在排序质量上占优。决策模型的校准表现随相关性问题的表述而变化，无法稳定弥补排序劣势。

- **[Decision-Native Recommendation with Large Language Models](https://arxiv.org/abs/2610.34124)**<br>📅 <strong>2026-10-25 07:46 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Daoxuan Liu, Jiayi Liao, Jiancan Wu, An Zhang, Xiang Wang, Xiangnan He
  - 论文将推荐表述为对给定菜单直接打分的决策任务，检验候选重排、推断延迟以及能否按置信度为困难样例分配额外计算。速度优势参照论文所测试的生成式方法。

- **[Entity Matching using Decision Models](https://arxiv.org/abs/2610.34626)**<br>📅 <strong>2026-10-25 22:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Aaron Steiner, Ralph Peeters, Christian Bizer
  - 作者评估决策模型对记录实体的匹配能力，并将置信度较低的记录对交给生成式评判模型。级联提高了若干强决策模型的平均 F1。结果随数据集和提示变化，部分基准超过已发表最高分。

- **[Can System-1-Style Decision Models Replace Dedicated Rerankers in RAG? A Systems Evaluation](https://arxiv.org/abs/2610.34816)**<br>📅 <strong>2026-10-26 04:00 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Qiaomu Li, Ying Xie
  - 这项系统评估比较决策模型与专用重排器的排序质量、延迟和显存。质量排序随工作负载变化，实验配置下调优后的重排器更快、更省显存。论文记录了决策模型具有竞争力的条件。

- **[Improving JEV Entailment Reranking with Span Readouts and Selective Adaptation](https://arxiv.org/abs/2610.35654)**<br>📅 <strong>2026-10-26 16:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Haocheng Mei, Yuchuan Tian, Ye Yuan, Enhua Wu, Chao Xu, Allen Chen, Kai Han, Yunhe Wang
  - 研究将 NeoHorse 决策模型适配到蕴含重排，比较选择性适配器训练、片段聚合与更广范围微调。两者结合改善了报告中的综合基准得分，且需训练的参数少于全模块对照。

- **[Retriever-Free Retrieval: Navigating Documents with Decision Models](https://arxiv.org/abs/2610.35868)**<br>📅 <strong>2026-10-26 17:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Chao Wan, Paul Jünger, Beixi Du, Bodong Liu, Navaneetha Krishnan, Kilian Q. Weinberger
  - DecisionRAG 用决策模型判断在文档结构中导航，无需另训首阶段检索器。作者在四个基准上与稠密检索系统和重排器比较召回表现与延迟，其中包括大规模维基百科段落集。

- **[Do We Need an LLM to Know Why Sources Conflict? Decision Models for Knowledge-Conflict Typing in RAG](https://arxiv.org/abs/2610.36915)**<br>📅 <strong>2026-10-27 09:43 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Parv Khatri, Harshul Jain, Mehak Kapoor, Tanya Sah
  - 作者评估决策模型在检索增强生成中的来源冲突分类能力，分析顺序敏感性，并分别考察硬标签和底层分数。对预先植入的错误来源，生成式对照的硬分类表现更好。

- **[JevRec: Linguistic Encoding with Jev-like Decision Modeling for LLM-based Generative Recommendation](https://arxiv.org/abs/2610.36937)**<br>📅 <strong>2026-10-27 09:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Qiyong Zhong, Jiajie Su, Ming Yang, Li Zhang
  - JevRec 用类似 Jev 的决策头将物品编码长度判断与内容预测分开，两者共享用户历史表示。研究在三个公开数据集上报告推荐收益，并与 TIGER 比较运行时间和梯度干扰。

- **[Predicting What Answer Engines Cite: Open Decision Models, Rerankers and a Distilled 4B Student on Ten Engines under Controlled Retrieval](https://arxiv.org/abs/2610.38090)**<br>📅 <strong>2026-10-28 00:11 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Elisha Bajemon, Andre-Louis Rochet
  - 研究在受控检索条件下预测答案引擎会引用哪些段落，比较重排器、Jev 和使用模型标签或观察标签训练的学生。当 Jev 采用相同的逐段打分格式时，学生的部分表面优势消失。

- **[DecisionRank: On-Policy Distillation for Decision-Model Rerankers](https://arxiv.org/abs/2610.42128)**<br>📅 <strong>2026-10-30 17:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yanran Wu, Dian Yu, Chongyang Bai, Jieyi Zhang, Rui Liu, Tianyi Chen, Shike Mei, Hang Cui, Frank Shyu, Sandeep Pandey, Luke Simon, Chunwei Liu, Xi Liu
  - DecisionRank 将生成式排序教师蒸馏为可直接为给定候选打分的模型。作者在多个检索基准上评估训练目标与服务速度。报告的收益包括学生超过更大教师的设置。

- **[Can Jev Improve Demonstration Retrieval for In-Context Learning?](https://arxiv.org/abs/2611.00737)**<br>📅 <strong>2026-10-31 08:31 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Rui Song, Yingji Li, Hao Xu
  - 作者用 Jev 的概率判断为上下文学习选择示例，并将这些判断蒸馏到较小的排序模型。研究检验所选示例对下游表现的影响，并比较高效检索和重复调用 Jev。

- **[Do GEO Gains Survive the Live Web? Evaluating In-the-Wild Visibility Gains of Generative Engine Optimization via LIVE-GEO](https://arxiv.org/abs/2611.01126)**<br>📅 <strong>2026-10-31 17:15 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Runze Kong, Haibo Jin, Xucheng Yu, Xiaoqi Wang, Huimin Zeng, Haohan Wang
  - LIVE-GEO 检验内容优化的收益能否延续到在线检索，并用 Jev 核验改写描述中的数值忠实度。作者用人工标签检查部分样例，报告有相当数量的改写被标记为存疑。

- **[XDecideBench: Evaluating Typed Decision Models and Confidence Policies Across Languages](https://arxiv.org/abs/2611.01370)**<br>📅 <strong>2026-11-01 00:11 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Marek Šuppa, Jaroslav Kopčan
  - XDecideBench 跨语言、跨基准比较类型化决策和置信度策略。模型排名会随语言与任务明显变化。在英语数据上选定的阈值也难以在多个迁移设置中维持目标错误率。

- **[Every Clause Counts: Instruction-Following Reranking by Multiplying Small, Answerable Questions](https://arxiv.org/abs/2611.03179)**<br>📅 <strong>2026-11-02 14:15 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · S. M. Mahbub Uddin Ahmed, Abdullah Al Musaddiq
  - 该重排方法将指令拆成独立子句，再合并逐项判断的概率。论文评估指令敏感性和排序质量，发现部分效果取决于评测使用原始分数还是由其产生的排序。

- **[Zuse: A Decision Model for European Languages](https://arxiv.org/abs/2611.06238)**<br>📅 <strong>2026-11-04 09:45 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Umair Mehmood Imam
  - Zuse 是面向欧洲语言的决策模型。作者与托管 Jev 和 Kev 比较，并调查多源数据整合中标签体系冲突等问题。评测同时衡量目标类别与更宽泛基准上的表现。

- **[Probabilistic Relevance Decisions for Semantic Retrieval](https://arxiv.org/abs/2611.08014)**<br>📅 <strong>2026-11-05 13:36 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Bahadır Tatar, Cevat Şener
  - 作者用概率相关性判断补充稠密搜索，并比较多种候选深度。实验衡量排序质量与服务延迟。由于运行环境差异及分析的探索性质，更广泛的校准和效率结论仍有限。

- **[Evaluating Jev on Arabic: Comparing Decision Models and LLMs Across Arabic Tasks and Dialects](https://arxiv.org/abs/2611.10802)**<br>📅 <strong>2026-11-07 15:30 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hossam Elsafty, Tobias Deußer, Lorenz Sparrenberg, Rajkumar Ramamurthy, Rafet Sifa
  - 作者在阿拉伯语任务和方言上比较 Jev、其他决策模型及生成模型。分任务和匹配语言比较揭示总体分数未体现的差异。部分方言对比仍缺乏确定结果，难以给出普适模型排名。

- **[Beyond Ranking: Are Decision Models Calibrated Relevance Scorers?](https://arxiv.org/abs/2611.11480)**<br>📅 <strong>2026-11-08 16:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Shengyao Zhuang, Xueguang Ma, Matthias Petri, Jimmy Lin
  - 论文将决策模型同时作为相关性概率估计器和重排器评估。作者与生成模型和交叉编码器比较区分能力与 Brier 分数，再用校准后的概率为每个查询选择截断位置。结论适用于受测检索集。

- **[PolyRoute: A Twelve-Language and Code-Mixed Benchmark for Typed-Decision Routing, with Baselines and a Leaderboard](https://arxiv.org/abs/2611.13843)**<br>📅 <strong>2026-11-10 10:04 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mohammed Nayeem Khan, Sarun Kumar K S
  - PolyRoute 评估 12 种语言及混合语言输入上的类型化路由，比较多语和源自英语的决策模型，并包含留出语言。所有文本与标签均为生成数据，对较小模型差异的统计分辨力有限。

- **[Is Jev a Good Multilingual Judge?](https://arxiv.org/abs/2611.14861)**<br>📅 <strong>2026-11-11 00:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Wei Liu, Yi Fan, Xiyan Fu
  - 论文按语言和任务评估 Jev 作为评判模型的表现，同时分析一致性与选项概率。作者报告部分低资源语言上的效果较弱，并检验概率是否能辅助筛选需要进一步复核的多语判断。

- **[Decision Models as L2 Rerankers for Content-Based Recommendation: A Pre-Registered Evaluation](https://www.mdpi.com/2078-2489/17/11/1141)**<br>📅 <strong>2026-11-12</strong> · Information · <strong>Tier B</strong> · Purva Bangad, Harikrishnan Girikumar
  - 该预注册评测用托管 Jev 对商品进行第二阶段重排，在 Amazon ESCI 和 Wayfair WANDS 上比较检索候选及标注更完整的列表。Jev 优于嵌入排序，但在受测设置中较强的已训练交叉编码器抵消了大部分优势。

- **[CURATOR: Scalable Fine-grained Evidence Selection for Retrieval-Augmented Generation using Decision Models](https://arxiv.org/abs/2611.16366)**<br>📅 <strong>2026-11-12 06:29 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shib Dasgupta, Bandish Parikh, Rashmi Gangadharaiah
  - CURATOR 用决策模型完成检索增强生成中的细粒度证据选择。作者检验候选数增加时的区分能力，并跨领域衡量下游回答。生成器上下文预算较小时，报告中的收益尤其明显。

- **[Do We Still Need Fine-Tuned Classifiers? Swapping Typed Decision Models into 24 ACL-Venue Papers](https://arxiv.org/abs/2611.20191)**<br>📅 <strong>2026-11-15 18:44 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Marek Šuppa, Jaroslav Kopčan
  - TDM-Gauntlet 沿用 24 篇 NLP 论文的数据划分、标签和指标，比较 Jev 等类型化决策模型与任务微调分类器。零样本 Jev 在 46 个测试集中的 12 个达到原模型水平。提示优化能缩小部分差距，微调往往仍更强。

- **[Nano-jev: Calibrated Cross-Encoder Micro-Decisions for Retrieval-Augmented Generation with Confidence Cascading](https://www.icck.org/article/abs/tis.2026.197904)**<br>📅 <strong>2026-11-16</strong> · ICCK Transactions on Intelligent Systematics · <strong>Tier A</strong> · Subham Divakar, Rojalina Priyadarshini
  - Nano-jev 用小型交叉编码器对相关性、证据充分性和回答依据作类型化判断。作者与专用检查器比较，并测试置信度级联。迁移到未见数据时，准确率和校准质量均下降。

- **[RagHarnessDebugger: Jev-Guided Agentic RAG in Contract Inference Repair Auditing](https://arxiv.org/abs/2611.22991)**<br>📅 <strong>2026-11-17 16:07 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Moriya Dechtiar, Daniel Martin Katz, Michael J. Bommarito II, Hongming Wang, Sylvain Jaume
  - RagHarnessDebugger 记录 Jev 引导的合同推断流程中的修复决策。审计检查轨迹是否完整、关联是否正确，并观察修复遗漏如何影响 ContractNLI 回答。研究将决策可见性与最终准确率一并评估。


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
- **[Qwen-Audio-Jev: A Unified Interface for Audio Decisions](https://arxiv.org/abs/2610.21614)**<br>📅 <strong>2026-10-15 09:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ying Fang, Zhifu Gao, Qing Gu, Jiajun He, Kangqi Jing, Xiangang Li, Yu Pu, Wupeng Wang
  - Qwen-Audio-Jev 为音频模型加入决策头，统一选择、二元判断和评分接口。十八组配置涵盖声音理解、说话人验证和质量评价，作者报告相对原始骨干约二十倍的推理加速。研究对象是这一音频适配模型，不能据此推断托管 Jev 的音频能力。

- **[Intern-Decision: Efficient Multimodal Decision Making with Autoregressive Masked Language Modeling](https://arxiv.org/abs/2610.22131)**<br>📅 <strong>2026-10-15 16:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Tong Zhu, Zhe Xu, Zefeng He, Yunkai Chai, Xuyang Hu, Dehong Zheng, Yun Luo, Yafu Li, Qi Zhang, Yu Cheng
  - Intern-Decision 将多个类型化字段放入单次因果前向计算，支持文本和图像输入。4B 模型在七组评测中报告 90.02% 平均准确率，Jev 为 88.74%；小规模校准与置信度路由实验进一步检查概率的用途。本地 GPU 延迟与托管服务比较具有不同部署条件。

- **[MJev-Spatial: System One Spatial Intelligence via Native Attention Matching](https://arxiv.org/abs/2610.22276)**<br>📅 <strong>2026-10-15 17:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Luozheng Qin, Yuhan Zhu, Changhai Zhou, Qian Qiao, Jun Gao, Yuhua Zhou, Harry Zhang, Xiangyu Zeng, Yuxuan Liu, Kaijie Chen, Andrew Chen, Pony Ma
  - MJev-Spatial 利用原生注意力投影评分空间选项、数值区间和图像区域，不增加参数。模型使用 1,230 万条转换后的空间问答训练，在十二个基准中的七个领先，并报告相对自回归基线更快的推理。数值与点位预测采用由粗到细的决策，因此一次预测可能包含多个决策阶段。

- **[UniJev: Separating Accuracy from Calibration in Trimodal System One Decision Models](https://arxiv.org/abs/2610.25784)**<br>📅 <strong>2026-10-19 04:49 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jianing Wang, Youwen Jian, Derong Wang, Jinyang Yu, Qingyi Si, Chuanyu Qin, Yanghua Xiao, Hongcheng Guo
  - UniJev 在文本、图像和视频上训练类型化决策，并比较各训练阶段对准确率与校准的影响。置信度目标使区间内的评分贴近实测准确率。作者报告 2B 与 9B 模型的视觉校准改善，准确率基本保持。

- **[EditJev: System One Routing for Image Editing Models](https://arxiv.org/abs/2610.32635)**<br>📅 <strong>2026-10-23 13:46 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhile Guan, Xu Jiang, Yule Duan, Gongbo Zhang, Shuyu Wang, Xiao Chen, Jian Zhang
  - EditJev 根据输入图像和编辑指令选择编辑器，综合预测偏好与编辑器运行速度。两项评测中，平均质量略优于最强固定编辑器，在作者采用的配置下，端到端估计延迟也有所降低。

- **[Seeing the Options: What Should a Visual Candidate See?](https://arxiv.org/abs/2610.33702)**<br>📅 <strong>2026-10-24 14:32 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Fengxin Li
  - 作者比较单次前向视觉决策的候选编码方式，包括由状态条件化的候选表示。报告中，该方式对顺序稳定，但相较联合编码损失部分排序性能。拒判阈值也可能随设置漂移。

- **[Beyond CLIP: Calibrated (Few-Shot) Defect Detection With System One Decision Models](https://arxiv.org/abs/2610.41199)**<br>📅 <strong>2026-10-30 03:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Fadel M. Megahed, Ying-Ju Chen
  - 作者在视觉缺陷检测中评估 System One 模型与 CLIP，考察少样本标注与校准。报告中，多数受测配置的 Brier 分数因校准而改善。实验记录了不同模型和应用组合的表现。

- **[VerdictAD: Few-Shot Anomaly Detection via Decision-Guided Refinement](https://arxiv.org/abs/2611.02654)**<br>📅 <strong>2026-11-02 07:15 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shangquan Sun, Wenjun Luo, Yuanzhi Wang, Ruiqi Li, Ruoyu Chen, Jiachen Liu, Shijian Lu
  - VerdictAD 用决策模型在少量标签下细化视觉异常检测器的分数。作者在三组工业质检数据上测试，并比较多种检测骨干。受测设置中报告了稳定收益。

- **[ReListen: Training-Free Evidence Localization in Hour-Long Audio with Frozen Audio Language Models](https://arxiv.org/abs/2611.04480)**<br>📅 <strong>2026-11-03 08:12 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ming-Hao Hsu, Shujie Liu, Yuxuan Hu, Yuxiang Wang, Yingda Shen, Jinyu Li, Zhizheng Wu
  - ReListen 用冻结音频模型对候选片段作有界判断，在长录音中寻找证据。它与转录式方案比较证据定位、作答延迟和内存占用，展示无需追加训练的音频决策应用。

- **[AffordJEV: Affordance Grounding by Confirming Candidate Regions](https://arxiv.org/abs/2611.07896)**<br>📅 <strong>2026-11-05 12:17 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jincheng Li, Yutian Zhang, Jianyu Zhang, Xinshun Wang, Mengyuan Liu
  - AffordJEV 用 System One 模型确认候选图像区域中哪些支持给定动作。作者在可供性定位中比较决策与思维链方法，测试域内表现以及对其他图像集合的迁移。

- **[Omni-JEV: Text and Dual-Stream Speech Decisions](https://arxiv.org/abs/2611.13777)**<br>📅 <strong>2026-11-10 09:15 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shengzhou Kong
  - Omni-JEV 将文本与两路语音映射为语音界面的轮次决策。作者比较不同方案的分类准确率和概率质量。受测交互协议的候选动作包括继续、打断和恢复。

- **[JEV-VAD: Efficient Semantic Endpointing via Task-First Conditioning and Decoder-Prefix Pruning](https://arxiv.org/abs/2611.15362)**<br>📅 <strong>2026-11-11 11:42 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jintao Liang, Nan Li, Longbiao Wang, Tubin Huang, Min Xu
  - JEV-VAD 用高效决策读出检测说话者何时结束一句话。论文比较端点检测任务中的解码深度和条件设置，并测试跨语言迁移。较浅的计算可降低资源占用，同时保留有用的辨别信号。

- **[FaceJev: Direct Visual Decisions for Face Forgery Detection](https://arxiv.org/abs/2611.21604)**<br>📅 <strong>2026-11-16 18:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Siran Peng, Tianshuo Zhang, Yibo Xue, Ajian Liu, Haoyuan Zhang, Weisong Zhao, Shuhuan Chen, Xiangyu Zhu, Zhen Lei
  - FaceJev 对潜在人脸伪造进行直接视觉判断，并给出图像区域的结构化决策。作者比较留出操纵类型上的效果并消融训练组件。评测衡量基准图像分布中的检测表现。

- **[Deciding Without Pointing: A Case Study of Whether a Decision Model Localizes the Anomalies It Detects](https://arxiv.org/abs/2611.21995)**<br>📅 <strong>2026-11-16 23:27 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hsiang-Hung Lee
  - 作者检验决策模型能否定位自己正确识别的视觉异常。内置决策分数并不必然对应可用的空间图。论文将几种定位信号与专门的少样本定位器比较。

- **[Jeveration: System One Models Now Generate](https://arxiv.org/abs/2611.24738)**<br>📅 <strong>2026-11-18 16:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yuhe Liu, Qi Li, Shihua Zhang, Xinchao Wang
  - Jeveration 扩展面向 System One 的架构，让同一检查点支持图像生成、视觉理解和密集预测。作者在指定任务上比较单次前向方案与既有统一系统的质量、速度和预测表现。


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
- **[The World Won't Wait: Evaluating and Teaching Agents Under a Live Clock](https://arxiv.org/abs/2610.20665)**<br>📅 <strong>2026-10-14 09:35 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ningxin Pan, Hanyu Li, Yeqing Shen, Ning Ding, Yehui Tang, Wentao Zhang
  - RealtimeBench 在推理期间持续运行的环境中评测 180 项任务。较慢模型在暂停游戏时领先 Jev，实时运行时则失去优势；离线教师生成的指令将 Jev 平均进度分数从 13.51 提升至 24.19。结果适用于延迟敏感的游戏环境，不代表对推理模型的普遍优势。

- **[CovNav: Conformal Prediction-Guided Adaptive Inference for Object Goal Navigation](https://arxiv.org/abs/2610.27677)**<br>📅 <strong>2026-10-20 05:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Pengying Wu, Zhejia Wen, Kang Ding, Kangjie Zhou, Chunxuan Jiao, Wei Pan, Xiangli Nie, Chang Liu
  - CovNav 在目标物体导航中测试自适应推断，由保形规则根据快速决策的不确定性触发慢速推理。作者在两个 HM3D 版本上报告小幅成功率提升，慢速推理仅偶尔触发，并补充了实体移动机器人实验。

- **[RoboJev: An Open Vision-Language Judge for Robot Success Detection](https://arxiv.org/abs/2610.33718)**<br>📅 <strong>2026-10-24 15:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Josef Liyanjun Chen
  - RoboJev 用视觉语言决策模型判断机器人是否完成目标。作者开放评测材料并比较托管视觉模型。由于托管基线接收的帧更少，该比较受输入预算影响。

- **[JevVLA: Jev-Inspired Energy-Based Adaptation for Vision-Language-Action Policies](https://arxiv.org/abs/2610.35010)**<br>📅 <strong>2026-10-26 08:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Wei Wang, Wenqiao Zhang, Zheqi Lv, Zheng Dong, Yingjie Niu, Jiaqi Zhu, Jun Xiao, Chao Li, Yueting Zhuang
  - JevVLA 将受 Jev 启发的能量式决策层用于视觉语言动作策略，覆盖离散候选动作选择与连续引导。作者在多个机器人操作基准上比较策略表现，提升幅度随环境而异。

- **[Learning to Formalize: Bridging Open-Ended Workloads and Fast Decision Models](https://arxiv.org/abs/2610.36595)**<br>📅 <strong>2026-10-27 03:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Chengxuan Pei, Ziyao Wang, Teng Mei, Zhe Li
  - 学习得到的形式化模块把开放式任务改写为快速决策模型可回答的问题。研究在使用特权状态的机器人任务中测试这一分工。报告的收益依赖该模块，评测划分上的任务成功仍有限。

- **[RLiD: Reinforcement Learning in the Decision Plane for Language Agents and LLMs](https://arxiv.org/abs/2611.02455)**<br>📅 <strong>2026-11-02 03:17 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ziyi Chen, Yan Zhang, Jianhui Wei, Jianing Yin, Daoan Zhang
  - RLiD 在动作层对智能体决策模型做强化学习，再将策略迁移给生成模型。ALFWorld 实验比较了与词元级强化学习的成功率和训练开销，还报告使用编译记忆版本的结果。

- **[Jev with Foresight: Safe Language-Guided Autonomous Driving via a Language World Model](https://arxiv.org/abs/2611.05448)**<br>📅 <strong>2026-11-03 17:36 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yansong Qu, Jiancong Chen, Samuel Labi
  - Jev-AD 将乘客指令的类型化理解与语言世界模型预测结合，由 Jev 比较候选驾驶动作及其预测后果。作者报告模拟和交通记录回放的碰撞更少，实验范围限于这些环境。

- **[The Blindfolded Controller: Decision Model-Guided Training for Reinforcement Learning](https://arxiv.org/abs/2611.07934)**<br>📅 <strong>2026-11-05 12:38 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Muhammad Ibrahim Khan, Aniket Dixit, Faizan Ahmed, James Brusey
  - 该强化学习研究用决策模型引导训练，训练后的策略可独立行动。论文在七个任务上比较学习所得策略、常规强化学习与单独决策模型，收益因任务而异。

- **[LEASH: Stay Safe in Agentic Robotics](https://arxiv.org/abs/2611.14115)**<br>📅 <strong>2026-11-10 14:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Qinfeng Zhu, Weiguang Zhao, Ke Sun, Xihao Guo, Yunxi Jiang, Rui Zhang, Lei Fan, Kaizhu Huang
  - LEASH 用多道决策门控依据共用策略检查可能不安全的机器人计划和动作。作者在模拟与实体机器人上测试多种骨干，报告不良结果减少，并同时测量任务完成率与开销。

- **[SuperGlance: Driving at a Glance with a Vision-Language Model](https://arxiv.org/abs/2611.19138)**<br>📅 <strong>2026-11-14 03:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jieyuan Pei, Xin Yan, Mingwei Xu, Haiyi Zhang, Siyu Zou, Zhangyi Hu, Zhuoxuan Li, Yuguang Yang, Rongjunchen Zhang, Cheng Chi, Hui Xiong, Yan Wang
  - SuperGlance 评估用于驾驶的快速视觉语言决策架构，涵盖开环预测以及控制推断延迟的闭环模拟。驾驶表现取决于计入规划器的延迟和模拟环境中的受测条件。

- **[Program Distillation: Transferring LLM Capability from System 2 to System 0](https://arxiv.org/abs/2611.19461)**<br>📅 <strong>2026-11-14 15:33 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Pujun Zheng, Wanying Ren, Guoxiu He
  - Program Distillation 将慢速推理大模型的策略传给可执行学生程序。PDBench 在有界控制任务上对比程序、强化学习和 Jev 式决策模型。论文同时报告表现与部署计算情况，包括仅用 CPU 的运行。

- **[AgenticJevNav: Agentic Object Search and Navigation via Event-Driven Verification](https://arxiv.org/abs/2611.19912)**<br>📅 <strong>2026-11-15 09:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shuning Zhang, Shuli Zhang, Yunheng Wang, Wei Lu, Jiaxi Zhang, Yihang Kang, Tao Wang, Xiangyu Chen, Yixiao Feng, Kai Sheng, Renjing Xu
  - AgenticJevNav 在搜寻物体时用决策模型验证事件。作者在模拟和实体四足机器人中评估任务完成情况，并分析视觉定位、接近规划与运行时间相关的失败。实体试验共 30 次。


<a id="agents-workflow-automation"></a>

## 🛠 智能体与工作流自动化

智能体记忆、模型路由、多智能体协调、选择性执行，以及软件工作流设计。

### 2026

- **[Redundant or Necessary? A Benchmark for Detecting Redundant Steps in Agent Trajectories](https://arxiv.org/abs/2605.29893)**<br>📅 <strong>2026-05-28 13:17 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Liang Zhu, Bo Yang, Zhinuo Zhou, Jiachen Liang, Jiahao Guo, Yiyang Yin, Xiongwei Han, Minyang Hu
  - RedundancyBench 为 1,920 条智能体轨迹中的 3,613 个步骤提供标注，评测冗余动作识别。修订稿比较六个前沿 LLM 与 Jev，发现缺乏先验信息时任务仍较难。保留五月的 v1 日期：这是后续修订新增并被检索到的 Jev 评测，不代表 Jev 在五月已发布。

- **[NeoHorse-1: Towards Recursive Self-Improvement via Agentic Post-Training with Routing Harness](https://arxiv.org/abs/2609.08183)**<br>📅 <strong>2026-09-08 03:14 UTC</strong> · arXiv v1 · <strong>Tier A</strong> ·  NeoHorse Team, Guoliang Cao, Guohao Dai, Tianyu Guo, Kai Han, Hailin Hu, Zihan Jiang, Xiang Kuang, Boxun Li, Yulong Li, Zehua Pei, Yuchuan Tian, Jiamin Wang, Yu Wang, Yunhe Wang, Yihong Wu, Haiyang Xu, Shuo Zhang, Hang Zhou, Siyang Cheng, Jiayu Fan, Wei He, Qingrui Jiao, Hongguang Li, Zhiyuan Li, Runke Liu, Xi Liu, Xinchen Liu, Sinno Jialin Pan, Yi Ren, Liuyang Song, Chenyu Wang, Bei Yu, Quanlu Zhang, Xiangyu Zhang, Mengyu Zheng, Yingjie Zong
  - NeoHorse-1 通过路由记录、智能体后训练及能力反馈组织多轮学习，并提出仅进行 prefill 的结构化决策变体 NeoHorse-Jev-4B。收录依据是这一明确的 Jev 风格组件；主要十一项基准上的提升属于生成式智能体模型，不能直接视为决策变体的独立验证。

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

- **[JevCoder: When Does Decision Delegation Pay Off in Code Repair?](https://arxiv.org/abs/2610.19596)**<br>📅 <strong>2026-10-14 05:11 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiahao Zhang, Yifan Zhang, Yu Huang
  - JevCoder 研究代码修复中哪些决策适合概率裁判，结合代码片段推荐、动作类型引导与提交判断。每种修复模型在 400 项任务上报告 token 消耗下降 21.6–50.6%，观察到的修复率同时提高。收益取决于干预改变的下游工作，而不只是裁判调用价格。

- **[Prune the Summary, Not the History: Source-Judged Compaction for Long-Horizon Agents](https://arxiv.org/abs/2610.20927)**<br>📅 <strong>2026-10-14 20:57 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Guanghui Min, Chen Chen
  - Source-Judged Compaction 使用 Jev 删除无法由环境输出或前次摘要支持的智能体摘要条目。在 AppWorld、OfficeBench 和两种智能体模型上，作者报告跨运行可靠性提升 2.1–8.9%，且未增加智能体 token 消耗。该方法检查摘要依据，不能保证后续每个动作都正确。

- **[Jev-LiteMAS: Separating Decisions from Generation in Multi-Agent Workflows](https://arxiv.org/abs/2610.21411)**<br>📅 <strong>2026-10-15 07:26 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Kaixiang Wang, Zhaijiacheng Zhou, Jiong Lou, Jie Li
  - Jev-LiteMAS 将专家路由和产物初审交给 Jev，保留生成模型执行与纠错反馈。在四个基准、两种骨干上，生成 token 减少 12.7–54.6%，准确率与 LAS 的差距在 1.34 个百分点以内。消融表明路由需要实质性历史输出，有限选项判断本身不能提供计划或修复指令。

- **[JevAgentHarness: Benchmarking, Deploying and Training Decision Models That Share Control with LLMs](https://arxiv.org/abs/2610.21412)**<br>📅 <strong>2026-10-15 07:27 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Kunlun Zhu, Tao Feng, Xu Han, Heng Wang, Ling Yang, Xiangru Tang, Jiaxuan You, Heng Ji
  - JevAgentHarness 在智能体轨迹上拟合委派阈值，不确定时交由 LLM 决策。AgentDecisionBench 区分单题准确率与闭环任务成功率，AgentDecision-4B 使用 Jev 标签学习犯错后到达的状态。成本和速度收益依赖任务相似性及阈值拟合，单次判断准确率不能可靠预测智能体成功率。

- **[NIOCIS: Typed-Decision Next-Hop Routing with Node-Conditioned Option Spaces for Tool-Use Agents](https://arxiv.org/abs/2610.25985)**<br>📅 <strong>2026-10-19 08:10 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jin Han, Mingfeng Xin, Feng Liang, Jingtao Yu
  - NIOCIS 按执行图的当前节点缩小工具选择范围。消融实验将参考动作一致性的提升归于候选菜单收缩。当升级模型是较弱的零样本替代模型时，置信度级联反而降低一致性。

- **[Decision4Rec: A Jev-Inspired Framework of Decision Models on Knowledge and Active Graphs for Multi-Agent Recommender Systems](https://arxiv.org/abs/2610.26035)**<br>📅 <strong>2026-10-19 08:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Marco Polignano, Het Darshan Mehta, Pasquale Lops, Ernesto William De Luca, Giovanni Semeraro
  - Decision4Rec 通过知识图和活动图生成推荐候选，再由 Jev 式模型打分。作者比较托管 Jev 与专门训练的 0.8B 模型，并分析收益来源。小模型在报告的多种设置下具有竞争力。

- **[SOMA: Continuous Monitoring and Intervention for System Two Reasoning with System One Models](https://arxiv.org/abs/2610.26793)**<br>📅 <strong>2026-10-19 17:40 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ruizhi Qian, Lei Shi, Tianyu Hu, Bo Yan, Song Wang, Yu Tian
  - SOMA 监控尚未完成的推理，用快速 System One 模型判断慢模型何时应停止或重新考虑。实验中，共用控制器缩短了过度推理任务的轨迹，并提高了不可回答问题上的拒答率。

- **[Measure Before You Train: Typed Decision Models vs. a Classical Baseline vs. a Generative LLM for Routing a Personal Multilingual Inbox](https://arxiv.org/abs/2610.32955)**<br>📅 <strong>2026-10-23 17:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Federico Lucca
  - 该多语言收件箱研究比较托管决策模型、经典分类器和生成模型，并显式计算漏处理邮件的成本。结果随阈值和错误成本变化。后续修订纠正了源自不完整数据的阈值估计。

- **[Predict the Reward, Not the World: World Reward Models for ML Agents](https://arxiv.org/abs/2610.38439)**<br>📅 <strong>2026-10-28 08:20 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yuxiao Lee, Zherui Yang, Fan Liu, Hao Liu
  - 作者用已执行样例的结果训练决策式奖励模型，对候选机器学习程序进行比较。研究在留出任务对上评测，并将模型接入多个研究智能体。报告显示任务完成更快，平均成绩相近或更高。

- **[Think Before You Act: Decision Gate for LLM Agents](https://arxiv.org/abs/2610.38620)**<br>📅 <strong>2026-10-28 10:40 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Iftach Shoham, Yuval David, Offer Akrabi, Erez Bilgory, Ido Levy, Sami Marreed, Sergey Zeltyn, Segev Shlomov
  - 论文为调用工具的智能体加入类型化决策门控和可执行验证，比较多种模型与基准组合上的可靠性。相较航空任务，在电信和函数调用评测上的收益更一致。

- **[Operon-S1: a fast decision controller for long-horizon biomedical agents](https://arxiv.org/abs/2610.41350)**<br>📅 <strong>2026-10-30 07:07 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Genoria AI Team, Yuejie Hou, Yueyuxiao Yang, Weiting Tang, Meng Yang
  - Operon-S1 研究用于长程科学智能体的快速类型化控制器。作者将控制器判断作为可独立衡量的工作流环节，评估它在生物医学研究任务的有界决策中如何引导较慢模型。

- **[Trail: Accurate Local Smart Home Control Using Decision Models](https://arxiv.org/abs/2611.00610)**<br>📅 <strong>2026-10-31 04:13 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Maleeha Masood, Deepak Vasisht, Indranil Gupta
  - Trail 用层级化决策在本地智能家居注册表中依次确定房间、设备与操作。研究与微调生成基线比较，包括稳健性和多轮请求。指令依赖前序对话时，记忆模块的帮助较明显。

- **[SLATE: A Large-Scale Benchmark for Long-Horizon API Selection in E-commerce Tool Use](https://arxiv.org/abs/2611.03982)**<br>📅 <strong>2026-11-02 21:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Rongzhe Wei, Ge Shi, Min Cheng, Sarthak Ghosh, Vaibhav Gorde, Leman Akoglu, Pan Li, Na Zhang
  - SLATE 在模拟环境中评估长程电商 API 选择，比较决策模型及其骨干，并记录端到端任务完成率。即使最强受测系统的整体完成率也较低。

- **[TandemBench: Benchmarking Decision Models for Multi-Agent Collaboration](https://arxiv.org/abs/2611.05827)**<br>📅 <strong>2026-11-04 02:08 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Baohang Li, Xiaocheng Feng, Bing Qin
  - TandemBench 在多智能体协同中评估决策模型，并单独检查模型能否判断候选中包含好的团队方案。作者发现，总体选择准确率可能掩盖对最优方案是否可用的系统性错误。

- **[RouteAlign: Aligning Task Requirements with Model Profiles for LLM Service Selection](https://arxiv.org/abs/2611.08162)**<br>📅 <strong>2026-11-05 15:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jihao Zhao, Ding Chen, Yanfang Chen, Bo Tang, Feiyu Xiong, Junchi Yan, Zhiyu Li
  - RouteAlign 将类型化任务要求与模型能力档案匹配，以选择大模型服务。作者评估路由质量、成本以及服务清单变化下的复用能力。消融表明本地实测表现对拟合打分器很重要。

- **[DM-Call: Decision-Model-Guided Function Calling with Cumulative Verification Feedback](https://arxiv.org/abs/2611.10977)**<br>📅 <strong>2026-11-07 21:29 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Minhyeong Yu, Wonduk Seo, Seunghyun Lee
  - DM-Call 在无需执行函数的条件下，用类型化决策反馈检查和修改调用提案。反馈结合概率和正确性标签。在受测函数调用基准中，追加模型调用后，该方法的表现优于直接生成。

- **[LoMASA: A Local Multi-Agent Sales Assistant with Confidence-Gated Delegation for B2B Quoting](https://arxiv.org/abs/2611.11234)**<br>📅 <strong>2026-11-08 08:42 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yu Liu, Xingbang Du
  - LoMASA 用本地决策模型根据置信度分派企业报价任务。研究同时衡量校准、低利润交易比例和升级复核负担。收益取决于模型以及主管复核成本。

- **[Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents](https://arxiv.org/abs/2611.17167)**<br>📅 <strong>2026-11-12 17:42 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Haochen Liu, Qianhao Zhu, Zixuan Wang, Dingming Li, Tongbo Chen, Peng Qiu, Yingqi Qu, Weiming Lu, Jun Xiao, Yongliang Shen
  - 作者比较决策模型作为长程智能体行动者、评判者和教师的表现。直接选择动作能力较弱时，事后反馈仍可能有价值。论文在 ALFWorld 和 WebShop 上测量反馈对强化学习智能体的帮助。

- **[System 1 agents: a method for local, reliable and fast agentic AI](https://arxiv.org/abs/2611.21053)**<br>📅 <strong>2026-11-16 13:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Eleftherios Tzanis, Michail E. Klontzas
  - System 1 Agents 用类型化决策和受约束的参数接口解析本地工具调用。作者与本地生成智能体比较意图选择、已明确参数的填充和编造值。结果适用于论文中的工具及指令集合。

- **[Edit Recommendation: Can LLMs Anticipate Edit Requests from Users, and When?](https://arxiv.org/abs/2611.21155)**<br>📅 <strong>2026-11-16 14:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Daisuke Kikuta
  - 论文评估模型能否预测用户将提出编辑请求，并判断何时值得显示建议。学习得到的决策门控提高展示建议的准确率，覆盖量由所选阈值控制。

- **[Train After You Measure: a Pre-Registered Learning Curve for Fine-Tuning Typed Decision Models on One User's Labels](https://arxiv.org/abs/2611.21393)**<br>📅 <strong>2026-11-16 16:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Federico Lucca
  - 该预注册研究检验增加个人邮件标签能否改善类型化决策分类器。学习曲线比较不同适配种子，并记录稀有类别的局限。少数类检出的改善在重复运行间不稳定。

- **[Jetriever: Shifting Agent Memory Retrieval from Similarity to Utility](https://arxiv.org/abs/2611.21478)**<br>📅 <strong>2026-11-16 17:50 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ruizhe Li, Licheng Zhang, Mingxuan Du, Zhendong Mao
  - Jetriever 用 Jev 概率按对查询的预期效用排序智能体记忆。研究在两个记忆基准上测试全候选池效用打分，并同时报告回答表现收益和每次检索成本。

- **[Think Once, Act Fast: Cost-Effective Recursive Self-Improvement for Decision Model Harness](https://arxiv.org/abs/2611.22432)**<br>📅 <strong>2026-11-17 09:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Siqi Lai, Haitao Li, Hao Liu
  - 该研究用慢速模型改进执行快速类型化决策的运行框架，评估任务表现、服务延迟及开发干预成本。作者报告随着框架多轮更新，需要的慢模型干预逐步减少。

- **[Can Decision Models Replace LLMs in Real-World Contact Center Classification and Judging Tasks?](https://arxiv.org/abs/2611.22949)**<br>📅 <strong>2026-11-17 15:39 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Md Tahmid Rahman Laskar, Xue-Yong Fu, Shashi Bhushan TN
  - 作者在呼叫中心分类与评判任务中比较决策模型和生成模型，除总体准确率外还分析成本、拒判和选项位置效应。在受测工作流中，较小决策模型在部分评判任务上的降幅尤其明显。

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

- **[More Choices, Fewer Decisions: Ordinal-Scale Bias in JEV-like Direct-Decision Models](https://arxiv.org/abs/2609.38827)**<br>📅 <strong>2026-09-30 02:50 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tianxiang Gao, Jinzhe Li, Zhiyuan Li, Yi Chang, Yuan Wu
  - 修订稿在四十个数据集和九个决策模型上发现系统性的序数评分尺度利用不足。更细尺度加剧压缩，随机候选顺序只能部分缓解，增大模型虽然提升准确率，却不能稳定恢复尺度使用。针对性训练可以改善这一现象，表明尺度利用率是独立于总体准确率的可靠性目标。

- **[When the Right Answer Is Missing: An Arithmetic-Dependent Rejection Bottleneck in Jev](https://arxiv.org/abs/2609.39496)**<br>📅 <strong>2026-09-30 10:55 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jike Zhong, Ming Li, and Yuxiang Lai
  - 在配对算术问题上，如果正确答案位于候选集中，Jev 能可靠选中；如果所有数值候选均错误，即便存在明确的拒答选项，模型也常常无法选择它。二元候选验证仍然表现较强，在独立开发题目上拟合的阈值则显著改善了拒答。本文说明，即使模型能单独验证答案，仅增加“以上皆非”标签也不足以让类型化选择工作流可靠处理答案缺失。

- **[Beyond Answer Confidence: A Controlled Audit of Self-Knowledge in a Black-Box Decision Model](https://arxiv.org/abs/2610.01006)**<br>📅 <strong>2026-10-01 03:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Sharath M Shankaranarayana, Davor Runje, and Jan Jannink
  - 这项审查使用超过十五个公开数据集、六类生成任务及配对信息干预，将答案置信度与知识边界分开考察。缺少相关证据或超出实测知识边界时，Jev 仍可能保持高置信度；明确询问证据是否充分有所帮助，但控制表面线索后，所谓自知能力的收益会减弱。本文说明，熟悉任务上的校准本身不足以支持用置信度检测知识缺失或分布外决策。

- **[Jev-IDS: System One Models for Network Intrusion Detection](https://arxiv.org/abs/2610.01079)**<br>📅 <strong>2026-10-01 05:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Paulo Severo, Silvio E. Quincozes, and Amanda Dias
  - Jev-IDS 将网络流序列化，在标签稀缺条件下，同时向 Jev 询问攻击概率和有限的流量类别。在包含重复决策、300 条流的 NSL-KDD 试点上，它报告了优于受测 LLM 基线的新型攻击召回率、更低延迟和成本，以及少于低数据量随机森林的误报。本文作为入侵筛查应用收录，小规模试点不足以确立普遍的实际检测能力。

- **[Labels Override Definitions in Jev-Style Typed Decision Models](https://arxiv.org/abs/2610.02586)**<br>📅 <strong>2026-10-01 23:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Seyedarmin Azizi, Erfan Baghaei Potraghloo, and Massoud Pedram
  - 研究使用十一个分类任务和一个策略路由基准，测试四个开放类型化决策模型的选项标签偏差。只改变标签与定义在输入中的呈现方式、不改变权重，就能转移或消除偏差，从而将所测失效定位到提示构造。本文是对 Jev 风格模型标签鲁棒性问题的机制性跟进，但代码干预仅涉及开放实现，不能据此确定托管 Jev 内部的成因。

- **[SecJev: Bringing Security Expertise to System One Decision Models](https://arxiv.org/abs/2610.03073)**<br>📅 <strong>2026-10-02 09:57 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zheng Chen, Fei Yu, Haohao Huang, Yang Li, Anlong Chen, Lei Chen
  - SecJev 使用八个来源、十四项任务，将 Kev 候选评分器适配到安全决策。修订评测发现各模型规模均受益于安全专门训练；0.8B 和 4B 的准确率与延迟接近仅生成答案的微调模型，GPU 峰值内存更低。迁移实验支持所测注入与流量任务上的专门化收益，并非普遍安全保证。

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

- **[SkillScreen: High-Recall Screening of Malicious Agent Skills with Decision Models](https://arxiv.org/abs/2610.17727)**<br>📅 <strong>2026-10-13 05:03 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jerrold Huang, Junwei Quan, Saiyue Lyu, Zihan Guo, Yingqiang Ge
  - SkillScreen 训练紧凑决策模型，单次前向筛查智能体技能指令。在未见攻击家族上达到 99% 召回率时，它误报 20–25% 的良性技能，少于所测词级分类器和提示式 LLM 裁判。陌生良性来源仍显著增加误报。此前全文核验已确认 OpenJev 初始化与托管 Jev 基线；修订结论针对任务专门训练后的筛查表现。

- **[Same Attack, Different Judge: A First Controlled Adversarial Comparison of Jev, LLM Judges, and Purpose-Built Safety Classifiers](https://arxiv.org/abs/2610.17820)**<br>📅 <strong>2026-10-13 06:43 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xiang Li, Aichun Huang, Mingming Zhang, and Zheli Liu
  - 这项受控研究在四项任务上，向 Jev、五个 LLM 评判模型和两个安全分类器提供相同攻击载荷与策略。Jev 抵抗了多种输入审核攻击，但在钓鱼判断中仍有脆弱性，且无攻击时的召回率也较低；它速度快，却会标记较多正常请求。本文在共享测试框架下比较依赖任务的鲁棒性，不将类型化输出或某项审核优势等同于普遍安全。

- **[Consider, Then Choose: Order-Invariant Decisions in System One Models](https://arxiv.org/abs/2610.18233)**<br>📅 <strong>2026-10-13 12:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jianguo Huang, Yao Long Teng, Yanchen Deng, and Bo An
  - Runoff 先独立评分各选项，再让短名单候选在均衡位置上比较，使 Jev 风格选择不依赖选项顺序。在开放读出与八个 System One 模型上的实验报告打乱顺序后答案不变，而循环平均仍有顺序敏感性。本文作为无需训练的可靠性方法收录，区分可保证的顺序不变性与任务准确率，并将加速结论限定于已测试的候选规模和实现。

- **[Jev-Guard: Fast Routing and Auditing Agent Actions over Editable Policy Trees](https://arxiv.org/abs/2610.18326)**<br>📅 <strong>2026-10-13 13:03 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Wenbin Hu, Huihao Jing, Haochen Shi, Yuxuan Liu, Changxuan Fan, Sirui Zhang, Kawai Chung, Hanyu Yang, Zhenhuan Wang, Ziyi Chen, Haoran Li, and Yangqiu Song
  - Jev-Guard 先在可编辑策略树中路由审核上下文，再依据选中策略作出安全决策。作者在 7,033 个案例上报告 93.72% 分类准确率，区分 58 毫秒分类延迟与 240 毫秒完整流程，并在 Hermes 中测试权限门控。本文作为 Jev 风格安全架构收录；已测试轨迹中未观察到违规仅提供有限证据，路由、分类与端到端审核成本应分别解释。

- **[Nudge the Judge: Uncovering Program Decision Hijacking in Real-World Jev Applications](https://arxiv.org/abs/2610.18612)**<br>📅 <strong>2026-10-13 15:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yang Luo, Tiantian Ji, Zifeng Kang, Yucheng Wang, Yong Liu, Zhiyi Yin, and Xinran Liu
  - JevProbe 在 228 个应用与 2,273 个测试案例中，追踪攻击者控制的上下文如何经过符合模式的 Jev 判断影响下游决策。作者报告 81.5% 的案例发生决策翻转，多数翻转具有潜在安全后果，已测试防御的保护有限。本文作为以应用为基础的安全评测收录，区分可达攻击面、潜在后果与已确认利用或生产事故。
- **[DecisionRobust: Benchmarking Robustness for JEV Style Decision Models Across Text and Vision](https://arxiv.org/abs/2610.19118)**<br>📅 <strong>2026-10-13 19:52 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yifan Lan, Zhongye Liu, Yurui Chang, Hanyu Wang, Yongkang Du, Lu Lin, Jinghui Chen
  - DecisionRobust 在三十组文本、十七组视觉配置上评测输入扰动与提示注入。留出模型检查攻击构造之外的迁移，语义标签一致性检查排除表面失败。鲁棒性排名随攻击和任务变化，优化图像扰动往往迁移较弱，因此难以形成统一的鲁棒性排名。

- **[Calibration and Risk-Budgeted Decisions with System One Models](https://arxiv.org/abs/2610.19811)**<br>📅 <strong>2026-10-14 08:54 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Soundouss Messoudi, Youness Mansar
  - 该研究在六个审核、安全和重排序数据集上评测保守回退策略与风险预算动作选择。Learn Then Test 将有定义设置中的目标风险违背比例降至 7.8%，朴素阈值选择约为一半。有限样本框架区分有用动作覆盖率和概率校准，其保证依赖论文中的统计假设。

- **[Lost in the Fallback: How Reliably Do Typed Decision Models Use Fallback Options?](https://arxiv.org/abs/2610.19856)**<br>📅 <strong>2026-10-14 09:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yuanbo Xie, Mingli Zhu, Tianyun Liu, Yingjie Zhang, Haixiao Xiong, Tingwen Liu
  - Paired Fallback Robustness Test 检查类型化决策模型能否正确切换到回退选项，并一致执行逻辑等价规则。在三个基准上，即使提供正确类别，错误仍存在。研究通过开放决策模型揭示类别识别与回退规则执行之间的差距，不能假设加入拒答或转交选项就会自动可靠。

- **[Diagnose Before You Refine: Multi-Dimensional Judge Feedback for Query-Efficient Jailbreak Attacks](https://arxiv.org/abs/2610.19971)**<br>📅 <strong>2026-10-14 10:55 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yixin Tan, Chia-Yi Hsu, Jiayang Liu, Chia-Mu Yu, Rui Wen
  - Jev-Guided Strategy Bandit 用多维概率反馈指导越狱搜索，结合细化、策略切换与重启。作者在十次目标模型查询预算下报告较高攻击成功率，并检查基于 Jev 的输出过滤。该研究是决策模型裁判的安全评测，结论受数据集、目标模型和攻击预算限制。

- **[From Detection to Decision: Calibration and Deferral for Prompt-Injection Detection](https://arxiv.org/abs/2610.20907)**<br>📅 <strong>2026-10-14 20:34 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Qianlong Lan, Anuj Kaul, Vinothini Pandurangan, Indranil Sanyal
  - 该提示注入审计在 47,611 条留出输入上比较 Jev、Prompt Guard 分类器与 LLM 裁判。Jev 原生概率并不稳定优于事后校准；在测试的门控与复核系统中，1% 漏报目标需要超过 91.8% 的升级处理比例。研究将分布偏移下的概率校准与实际复核成本联系起来。

- **[A Cue's Hidden Price: Auditing Seller Influence on AI Shoppers](https://arxiv.org/abs/2610.25843)**<br>📅 <strong>2026-10-19 05:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Felix Buecheler, Gerardo Berbeglia, Mingyu Guo
  - 该审计用受控材料衡量卖家控制的商品展示如何影响购物智能体推荐，并在生成模型与托管 Jev 之间比较线索的影响。Jev 对许多受测线索较不敏感，但仍会受到较强社会认同线索的影响。

- **[Claim Laundering: When Agent Decision Models Trust Records Over Reality](https://arxiv.org/abs/2610.25947)**<br>📅 <strong>2026-10-19 07:40 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tina Khezresmaeilzadeh, Seyedarmin Azizi, Erfan Baghaei Potraghloo, Mehdi Kamal, Massoud Pedram
  - 作者评估日志中的动作记录与实际观察结果冲突时，决策模型会如何选择。轻量证据检查提高了多个智能体环境在模拟静默失败下的任务完成率。离线校准的阈值迁移到在线轨迹时可能失效。

- **[Typed Decision Models under Prevalence Shift and Label Budgets: Decision Training, Calibration, and Implicit Priors](https://arxiv.org/abs/2610.26325)**<br>📅 <strong>2026-10-19 13:01 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Abdul Rahman Iqbal, Muhammad Fawad Nasim, Amir Saleem
  - 研究检验决策专用训练相对基础模型的收益，以及类别占比变化时阈值的表现。实验比较 Jev 等决策模型、再校准和不同标注预算的基线。合适的选择取决于任务及标注量。

- **[When Multiple Choices Are Correct: Asymmetric Probability Allocation in Jev and Other Decision Models](https://arxiv.org/abs/2610.29217)**<br>📅 <strong>2026-10-21 05:18 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Rushab Munot
  - 该评测检验多个选项均正确时 Jev 与其他模型如何分配概率。即使候选文本完全相同，模型也可能赋予截然不同的概率。这种不对称性会影响使用阈值提取多个正确答案的流程。

- **[Commit or Abstain? System One Decision Models, LLMs, and Missing Legal Authority](https://arxiv.org/abs/2610.29961)**<br>📅 <strong>2026-10-21 16:17 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · M. Mikail Demir
  - 研究比较 System One 决策与生成模型在可能缺少正确法律依据的案件中的表现。常规准确率、拒答和错误引证给出的结论各异。一项以跨模型一致性为条件的策略降低了错误引证。

- **[VX-One: Typed, Calibrated Decision Heads for Real-Time Perimeter Triage](https://arxiv.org/abs/2610.30090)**<br>📅 <strong>2026-10-21 17:39 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Juan S. Santillana
  - VX-One 评估用于防御性网络流量初筛的紧凑类型化决策头。作者比较分类、校准及传统检测器，并检验效果随时间的变化。即使排序仍有一定价值，概率校准也可能在时间漂移下显著变差。

- **[ReDence: A Hybrid Agentic and Decision-Model Framework for Rapid, Evidence-Grounded Detection of Modern Social Engineering Scams](https://arxiv.org/abs/2610.30963)**<br>📅 <strong>2026-10-22 09:08 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jaishnoor Kaur, Josef Horáček, Ian Waskom, Sayak Saha Roy
  - ReDence 将决策模型和调查型智能体结合，用于防御性的诈骗识别。系统在网站工作流上测试分类与延迟，并生成记录支持性及反向证据的报告。论文将其作为辅助分析人员复核的方法评估。

- **[Two Uncertainties Are Not One: Disagreement versus Decision-Risk in Cheap Structured Content Moderation](https://arxiv.org/abs/2610.33258)**<br>📅 <strong>2026-10-23 20:08 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Karan Yadav
  - 该内容审核研究区分标注者分歧和模型作出错误二元决策的风险。作者比较置信度信号，发现针对性子问题有助于部分模型捕捉分歧。效果取决于任务拆分方式和数据分布。

- **[SHIFT-JEV: Certified Abstention and Gain-Gated Continual Adaptation for LLM-Based Decision Models under Distribution Shift](https://arxiv.org/abs/2610.34329)**<br>📅 <strong>2026-10-25 14:38 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Muhammad Atif Saeed, Azka Atiq, Adarsh Kumar, Akhtar Jamil, Uzair Iqbal, Roland Aydin
  - SHIFT-JEV 将选择性预测与分布变化时的适应机制结合。论文测试类别先验变化检测，并与持续学习基线比较门控适应。在较小骨干上的收益未稳定迁移到论文所用的较大骨干。

- **[TrustJev: Separating Policy Authority from Untrusted Evidence in LLM-Based Decisions](https://arxiv.org/abs/2610.34826)**<br>📅 <strong>2026-10-26 04:17 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhiwei Xu, Xuyang Liu, Xiaolin Peng, Weixian Deng, Jiabao Gao, Zirui Li, Tian Qiu, Boya Zhou, Wei Jiao, Hai Wan, Xibin Zhao
  - TrustJev 研究类型化决策模型如何区分政策权限与不可信证据。报告中，该方法在授权基准上提高可靠性，在其他任务上有小幅收益，并在测量条件下保持接近的服务延迟中位数。

- **[Understanding Jev-Style System One Models: Does Structure Reduce Selection Bias?](https://arxiv.org/abs/2610.35826)**<br>📅 <strong>2026-10-26 17:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mingyang Song, Mao Zheng, Zhiyuan Ma, Xinpeng Zhou
  - 作者检验结构化输出能否使 Jev 式决策抵抗语义等价的呈现变动。相同输入重复调用可能稳定，等价变体仍可改变选择。投票收益有限，受测条件下全票一致的结果也可能出错。

- **[Confidence Is Not a Promise: A Reference Audit of Typed Decision Models](https://arxiv.org/abs/2610.36311)**<br>📅 <strong>2026-10-26 21:33 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Pedro Carvalho Brom
  - 托管 Jev 与 Laya 的对比区分置信度校准、选择性准确率和解释忠实度。在报告的评测中，仅用点估计选阈值经常达不到预定准确率。以置信下界进行验证有助于更稳妥地确定何时拒判。

- **[Decision Models as Judges for Hallucination Detection](https://arxiv.org/abs/2610.37229)**<br>📅 <strong>2026-10-27 13:38 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Haozheng Liu, Zhaoqian Xue, Zhongyin Wang, Junting Mu, Zihui Ma, Shuya Feng, Lingyao Li
  - 论文在多类幻觉上比较决策模型与生成式评判模型。以置信度触发的级联在部分类型上超过最强单一决策模型，报告成本低于前沿评判模型。准确率及置信度区分能力随类别变化。

- **[Cross-Primitive Consistency in Jev](https://arxiv.org/abs/2610.38623)**<br>📅 <strong>2026-10-28 10:44 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xu Liu, Guikun Chen, Kanzhi Wu, Wenguan Wang
  - 作者评估同一判断表示为不同决策原语时，Jev 的答案是否相互一致。论文提出评测集和一致性方法，并在域内及迁移设置下同时衡量答案一致性与任务准确率。

- **[FlipJev: Fast Black-Box Red Teaming Finds Universal Adversarial Suffixes for Typed Decision Models](https://arxiv.org/abs/2610.38895)**<br>📅 <strong>2026-10-28 20:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xiaogeng Liu, Xinyan Wang, Chaowei Xiao
  - FlipJev 在对抗性输入下评估类型化决策模型稳健性。研究发现部分失效可跨越原始任务，表明需要更严格的评估。

- **[Lev-3B: A Data Recipe for Compact Probabilistic Log Decision Models](https://arxiv.org/abs/2610.38915)**<br>📅 <strong>2026-10-28 21:06 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Leo Betthauser, Yingqi Liu, Uday Shah, Jishang Wei, Sainyam Galhotra, Liang Gou, Vedant Dharnidharka, Hao Yang
  - Lev-3B 是用于防御性系统日志分析的紧凑决策模型。论文在熟悉和留出的日志来源上评估异常检测、行为分类和置信度。总体检测表现较强时，留出来源仍可能出现高置信度漏报。

- **[Pre-Crime for Agents, at the Last Second: Probing When a Recruited Agent Gives In](https://arxiv.org/abs/2610.40588)**<br>📅 <strong>2026-10-29 17:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Leonidas Raghav
  - 研究评估自动监督器能否预判智能体即将偏离既定政策。报告中的预警提前量有限，且常在正常情形触发。结果揭示监督流程中的取舍。

- **[Humanized but Still True? Auditing Facts and Detection in AI-Text Humanizers](https://arxiv.org/abs/2611.00359)**<br>📅 <strong>2026-10-30 20:36 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ziyuan Wang, Genliang Zhu, Xiaobo Chen
  - 作者评估将 AI 文本改写得更像人类表达后，事实是否保留及检测器判断是否改变，并比较决策模型评判与其他检测器。部分受控改写使检测性能明显下滑，仅用原文评测可能高估可靠性。

- **[Decision Models as Policy Gates for Coding Agents: Explicit Policy Boundaries Improve Detection and Reduce False Alarms](https://arxiv.org/abs/2611.02155)**<br>📅 <strong>2026-11-01 19:40 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · James P. Beno
  - 作者将决策模型作为编程智能体的策略门控，比较明确边界和较模糊规则对召回率及不必要干预的影响。使用新场景的后续实验支持明确表达策略边界的价值。

- **[Ranked but Not Stopped: Detecting Prompt-Injection Hijacks from Typed Decision Models' Output Probabilities](https://arxiv.org/abs/2611.02522)**<br>📅 <strong>2026-11-02 04:49 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Junwei Yao, Jianan Liu, Yongxi Zhou, Zike Yang
  - 该安全审计检验能否借助置信度识别受干扰的类型化决策。即使在设定告警预算下监控漏报，模型分数仍可能保留一定排序信息。部署筛查策略时，这一区别影响对 AUROC 的解读。

- **[Cyber-JEV: Matched Contrastive Fine-Tuning of Language Models for Fast Source-Code Vulnerability Triage](https://arxiv.org/abs/2611.02957)**<br>📅 <strong>2026-11-02 11:24 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Zhuyi Zhao, Shengjie Yuan, Shengyu Wang, Kang Wei, Wang Yang, Wenchao Xu, Fushuo Huo
  - Cyber-JEV 研究用决策模型安排代码复核优先级，比较存在漏洞与已修复版本的成对排序。实验衡量在复核容量有限的情况下，能否为分析人员安排变更函数的复查顺序。

- **[JevBreak: Your Model, Their Decision](https://arxiv.org/abs/2611.03759)**<br>📅 <strong>2026-11-02 13:05 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Nitin Aravind Birur, Divyanshu Kumar, Sahil Agarwal, Prashanth Harshangi
  - JevBreak 衡量 Jev 等类型化决策模型在对抗输入下保持预期判断的能力。它报告模型间存在明显差异，并评估置信阈值的局限。结论针对基准中的稳健性。

- **[Presentation Sensitivity in Typed Decision Models for Subjective Text Evaluation](https://arxiv.org/abs/2611.06384)**<br>📅 <strong>2026-11-04 11:48 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jatin Agrawal, Radhika Mamidi
  - 该研究比较 Jev、Clef Flash 与 Perplexity Decider 的主观文本评价表现。即使文本不变，受控呈现变化也可能改变分数和选项。论文分别分析与人的一致性、可重复性和对等价呈现的稳健性。

- **[Escalate or Close: How Fast-Tier Models Handle Held-Out Web Attack Families in Two-Tier Triage](https://arxiv.org/abs/2611.08229)**<br>📅 <strong>2026-11-05 16:13 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Maciej Kisielewicz, Michał Kędziora, Ngoc Thanh Nguyen
  - 该防御性初筛研究比较 Jev 等快速模型在未见网页流量类别上的表现，考察何时交由慢速层以及能否迁移到已知模式之外。相似正常流量和重复调用差异使部署估计更复杂。

- **[Decision Models as Retrieval Gates Against Injection and Pollution](https://arxiv.org/abs/2611.08325)**<br>📅 <strong>2026-11-05 17:19 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mahdi Ghadamyari, Reza Habibi
  - 论文评估用开放决策模型为网页检索证据加防御门控，比较不同候选预算和证据形式下的过滤质量、回答覆盖率与成本。候选范围过窄时，可能剔除生成器作答所需的信息。

- **[Jev as an LLM Safety Guardrail: An Empirical Study of Input Filtering, Selective Output Review, and Over-Refusal](https://arxiv.org/abs/2611.08845)**<br>📅 <strong>2026-11-06 01:03 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Olivia Cognetti, Bhaskar Krishnamachari
  - 作者评估 Jev 筛查大模型提示及选择性复核输出的效果，在匹配预算下比较安全结果、正常请求误拒和复核负担。输出阶段在部分配置有帮助，但收益未稳定迁移至留出样例。

- **[Maya a1: Do the Options Read the Model, or Does Their Position? Order Sensitivity in a Non-Autoregressive Decision Model](https://arxiv.org/abs/2611.09803)**<br>📅 <strong>2026-11-06 17:54 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mohammed Nayeem Khan, Logesh L
  - 作者检验 Maya a1 对候选换序的反应，并比较多顺序汇总和减弱敏感性的架构设计。报告同时量化额外计算、准确率与翻转率。模型生成标签和经过教师筛选的数据限制了证据范围。

- **[Can the Confidence and Decisions of System 1 Models Be Trusted? An Explainability and Perturbation Audit of Jev-Style Decision Models](https://arxiv.org/abs/2611.12521)**<br>📅 <strong>2026-11-09 14:58 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Julien Delaunay
  - 该审计比较五种开放 Jev 式系统及生成基线的置信度、稳定性和解释。报告中，接口置信度反映选项分布形状，与实测正确率口径不同。合并提问也可能改变答案，值得分别核验这些接口属性。

- **[Browser Immune System (BIS): Innate and Adaptive Threat Detection in the Browser with a Cybersecurity Transformer](https://arxiv.org/abs/2611.15302)**<br>📅 <strong>2026-11-11 10:36 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Víctor Mayoral-Vilches, Eduardo Worrel
  - BIS 通过对网页内容作出一组结构化判断探索防御性浏览器分类。少量公开网页测试发现普通页面也可触发误报。作者区分研究模型版本的评测与浏览器扩展部署所需的证据。

- **[Recalibrating a Typed-Decision Model in an Afternoon: A Hands-On Recipe for Laya's Confidence Scores](https://arxiv.org/abs/2611.16499)**<br>📅 <strong>2026-11-12 09:02 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Mohammed Nayeem Khan, Aliyas Ahmad Misri
  - 作者研究不同 Laya 检查点的置信度再校准，发现存储设定与运行时取值存在差异。重新拟合温度改善了随机划分下的多个检查点，留出集合上的收益较小。实验共用底层标注流程。

- **[Look Here, Then Decide: Small Decision Models in a Harness Find Memory-Safety Vulnerabilities at Scale on Commodity GPUs](https://arxiv.org/abs/2611.16565)**<br>📅 <strong>2026-11-12 09:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Tim De Wachter, Kyryl Volkov, Myrto Eleftheria Gkogkou, Mathieu Huysman
  - 作者评估小型决策模型在防御性代码审查中辅助安排优先级的能力，区分模型判断与经验证的发现，并比较受测部署的资源需求。确认的问题按协调披露流程处理。

- **[S1-Evo: Experience-Guided Evidence Competition Attacks on Typed System-1 Decision Models](https://arxiv.org/abs/2611.16937)**<br>📅 <strong>2026-11-12 15:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Kaixiang Wang, Junjie Li, Zhaojiacheng Zhou, Jiong Lou, Jie Li
  - 该稳健性研究在基准任务中评估 Jev 等 System One 模型面对对抗性证据时的表现。结果包含高置信度错误及对下游智能体决定的影响，表明单靠置信度可能漏掉受干扰的判断。

- **[A First Look at System One Decision Models for Malware Detection](https://arxiv.org/abs/2611.20699)**<br>📅 <strong>2026-11-16 08:08 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Pier Mattia Basciano, Giovanni Farina, Salvatore Monteleone
  - 该防御性基准比较 System One 模型利用结构化证据分类恶意软件的能力。作者报告不同误报率下的检出率，并检查总体预测背后的分项判断。实测结果取决于所选阈值及基准。

- **[Jev-as-a-Reward: Validating Probabilistic Safety Judges for Reinforcement Learning](https://arxiv.org/abs/2611.20955)**<br>📅 <strong>2026-11-16 12:01 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Eunkyeong Lee, Junhyung Moon, Seunggwan Hong, Dongsuk Oh
  - 作者检验 Jev 概率能否作为语言模型训练的安全奖励，对比防护模型判断，并同时追踪高置信度错误与总体安全结果。实验表明，有用的奖励仍可能在困难判断上存在盲点。

- **[JEV vs. LLMs: A Comparative Analysis for Phishing Email Detection](https://arxiv.org/abs/2611.23683)**<br>📅 <strong>2026-11-18 01:17 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Muhammad Mahir Malik, Muhammad Moiz Khalid, Hussain Ahmad, Faheem Ullah
  - 该钓鱼邮件基准比较 Jev 与生成模型的分类、延迟和概率校准。Jev 在若干受测初筛指标上表现较好。生成式解释超出该评测范围，数据仅支持有界比较。

- **[VisualJevBench: A Benchmark and Black-Box Attacks for Visual Typed Decision Models](https://arxiv.org/abs/2611.25435)**<br>📅 <strong>2026-11-19 03:16 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Li Zeng, Yeqi Zeng, Hengkai Liang, Shiguo Wang, Meng Xie, Zeyu Ye, Jinheng Zhang, Xianlong Wang, Ziqi Zhou, Hangtao Zhang
  - VisualJevBench 使用 Jev 评估视觉类型化决策，并记录输入图像变化下的稳健性。报告中的失效情况随评测条件和迁移设置变化。基准可将视觉决策可靠性与干净输入准确率分别衡量。

- **[MM-SystemOneBias: Evaluating Bias in Multimodal Jev-Style System One Decision Models](https://arxiv.org/abs/2611.26557)**<br>📅 <strong>2026-11-19 18:25 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jinzhe Li, Qi Wang, Dandan Guo, Li Liu, Yuan Wu, Yi Chang
  - 论文在答案证据和输入描述发生变化时评估多模态 System One 模型的偏差。作者同时比较所选答案变化以及答案不变时的概率偏移。仅看准确率可能掩盖输入间的差异。


<a id="science-healthcare-education"></a>

## 🩺 科学、医疗与教育中的 AI

科学推理、生物医学模型、临床评估、公共卫生与道路安全分析，以及学习者建模。

### 2026

- **[Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev)](https://arxiv.org/abs/2609.24052)**<br>📅 <strong>2026-09-21 03:24 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - 研究将含 27 个问题的 Jev 模式应用于 499,500 份得克萨斯州交通事故叙述，并对照编码字段和 2,416 项盲法人工判断审查部分样本。相对于人工标签，研究报告 F1 为 0.908，并发现后验重新校准能明显降低校准误差。本文提供了少见的部署规模评测与明确的复核预算，也谨慎区分了与数据库一致和忠实反映叙述内容这两个目标。

- **[Counting the Uncounted: Population-Level Surveillance of Documented Pregnancy and Fetal Harm in Police Crash Narratives with a System One Model (Jev)](https://arxiv.org/abs/2610.00213)**<br>📅 <strong>2026-09-21 14:25 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Amir Rafe and Subasish Das
  - 这项总体规模研究筛查了 5,018,079 份得克萨斯州事故叙述中的妊娠记录，再利用 Jev 的八问题模式和盲法人工审查，估计漏记案例及胎儿伤害。研究估计有 5,467 起事故记录了妊娠，其中 58 起记录了胎儿伤害。本文将基于 Jev 的事故信息提取扩展到监测，但明确衡量的是警方叙述记载的内容，而非妊娠或伤害的真实发生率。

- **[Jev for Scientific Decisions: Evaluating Semantic Choices and Their Consequences](https://arxiv.org/abs/2609.24965)**<br>📅 <strong>2026-09-21 17:51 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Boyuan Deng, Shuyi Fan, Hongyang Zhang, Xinhong Xie
  - 修订后的科学工作流审计在十个案例、二十项有来源的选择中比较十二组模型配置，分别衡量语义判断、下游计算与最终标签。Jev 与其他五组配置并列达到完全语义正确，成功回答的观测中位延迟最低。对照模型的七次错误选择改变了下游计数，却未改变最终标签，说明仅看最终准确率并不足够。

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
- **[AgriJev: Efficient Agricultural Candidate Scoring with Multi-Scale Adapted Models](https://arxiv.org/abs/2610.19478)**<br>📅 <strong>2026-10-14 02:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xuechen Li
  - AgriJev 将 Qwen 模型适配为单次前向计算的农业候选评分器。9B 版本在十七个外部测试视图上报告 75.44% 平均准确率，优于原始与农业生成式微调基线，并缩小与托管 Jev 的差距。延迟收益来自固定 A100 工作负载，随任务和推理接口变化。

- **[PremiseCheck: Efficient Fact-Checking of Human and AI Peer Reviews](https://arxiv.org/abs/2610.21046)**<br>📅 <strong>2026-10-15 00:42 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Dingjie Song, Zhiling Yan, Ziqian Zhang, Yuxuan Zhang, Lichao Sun
  - PremiseCheck 先由 LLM 将审稿意见拆解为明确前提，再用 Jev 对照论文逐条核查。ReviewFact 覆盖 NLP、机器学习和自然科学审稿；框架报告与 GPT-5.5 接近的准确率和较低的逐条评论成本。它检查对稿件的事实陈述，不评判审稿人的科学判断是否成立。

- **[A general-purpose System One decision model for clinical records](https://arxiv.org/abs/2610.27099)**<br>📅 <strong>2026-10-19 18:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Andrew Zhang, Trinh T.L. Vuong, Sophia J. Wagner, Dongmin Bang, Tong Ding, Yuchang Su, Mary Cipperman, Christina S. Chen, Judith Lefkes, Ramin Kahidi, Ming Y. Lu, Caiwei Tian, Tianhao Luo, Jingnan Ma, Rowland Pettit, Long Phi Le, Faisal Mahmood
  - Clinical System One 面向大规模病历训练结构化问答。在回顾性试验筛选实验中，它排名靠前的病历比关键词搜索包含更多被判定为符合条件的候选，使用的大模型词元也少于逐份阅读病历的方案。

- **[Decision language models as affordable and rapid alternatives to LLM judges of clinical generative AI](https://arxiv.org/abs/2610.28826)**<br>📅 <strong>2026-10-20 18:46 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Rotem Gershon, Seffi Cohen, Dean Ariel, Havatzelet Bilavsky-Yarden, Amiel Sberro, Shai Yitzhaki, Osnat Tausky, Naama Golan, Maayan Rabinovitch, Ariel Avraham Hasidim, Itay Arianu, Maya Dagan, Ran Balicer, Noa Dagan
  - 作者在三组临床生成式 AI 评测中比较 Jev 和生成式评判模型。在受测配置中，Jev 的准则判断一致性相近，费用和延迟较低。部分对比以其他评判模型的判断为参照。

- **[RetiJev: Fast and Source-Grounded Ophthalmic Decision Models](https://arxiv.org/abs/2610.30947)**<br>📅 <strong>2026-10-22 08:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Bo Liu, Lianyu Wang, Meng Wang, Ching-Yu Cheng, Huazhu Fu
  - RetiJev 为眼科诊断、临床选择和指南评级训练单次前向模型。作者报告其在指南评级上超过生成模型和托管 Jev，并具有较快推断速度。评测范围限于论文所选来源和有界任务。

- **[The Value of System 1 Models in Medicine](https://arxiv.org/abs/2610.31315)**<br>📅 <strong>2026-10-22 14:08 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Xiufeng Yang, Konstantinos Vrettos, Zeineb Ben Chaaben, Fabian Drexel, Jannik Lübberstedt, Johannes Moll, Anirudh Narayanan, Frederike Stumpf, Cosmin I. Bercea, Jiawen Wang, Evangelia E. Vassalou, Krischan Braitsch, Aymen Meddeb, Sebastian Ziegelmayer, Markus Graf, Marcus R. Makowski, Lisa Adams, Nassir Navab, Michail E. Klontzas, Keno Bressem
  - 该医学基准比较 System One 模型和同系列生成模型在结构化决策中的表现。报告的运行结果中延迟更低，但成绩随语言与输入类型变化。图像解读和依赖判断的题目比文本知识回忆任务更具挑战。

- **[PathJev: Decision-Native Vision-Language Modelling for Histopathology](https://arxiv.org/abs/2610.32478)**<br>📅 <strong>2026-10-23 10:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Cristian Tommasino, Antonio M. Rinaldi
  - PathJev 学习为运行时指定的组织病理候选分配概率。作者评估识别、校准及拒判，并演示全切片应用。陌生器官上的校准可能恶化，报告中监督式病理基线的校准更好。

- **[Decision-only medical AI: early evidence and pairing with language models](https://www.medrxiv.org/content/10.64898/2026.10.21.26366149)**<br>📅 <strong>2026-10-24</strong> · medRxiv 预印本 · <strong>Tier B</strong> · Mahmud Omar, Ashwin Ramaswamy, Ankit Sakhuja, Benjamin S. Glicksberg, Alon Gorenshtein, Jonathan B. Kruskal, Muneeb Ahmed, Olga Rachel Brook, Raja-Elie E. Abdulnour, Alvira Tyagi, Dhaval Patel, Alexander W. Charney, Yiftach Barash, Eyal Klang, Girish N. Nadkarni
  - 这篇 medRxiv 预印本用改变表述的临床样例评估 Jev 和另一决策服务，并测试与生成模型配对的工作流。在受控实验中，配对减少部分表述影响，分诊准确率保持接近。

- **[Scoring the NIH Stroke Scale from bedside exam transcripts: a synthetic benchmark of a decision model and a large language model](https://www.medrxiv.org/content/10.64898/2026.10.23.26366376)**<br>📅 <strong>2026-10-26</strong> · medRxiv 预印本 · <strong>Tier B</strong> · Noor Abdulla, Waleed Abood
  - 作者比较决策模型和语言模型如何根据合成查体记录评定卒中量表条目。生成模型准确率较高，决策模型速度较快、费用较低。模拟级联测试能否选择性复核低置信度条目。

- **[MedJev: Evaluating Zero-Shot System-One Decision Making in Medicine](https://arxiv.org/abs/2610.36006)**<br>📅 <strong>2026-10-26 16:08 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Simon A. Lee, Jiahang Sha, Moonseong Jeong, Yunbei Pan, Jeffrey N. Chiang
  - 这项 MedJev 研究评估现有 System One 模型的零样本临床决策能力，衡量预测表现、服务成本和校准，并测试少量标注下的再校准。评测为不同临床人群的本地验证提供研究基线。

- **[Can JEV Support Clinical Trial Criteria Assessment?](https://arxiv.org/abs/2610.35721)**<br>📅 <strong>2026-10-26 16:41 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mengxian He, Ziyue Gao, Chun Li, Shunyi Zhang, Hao Wei, Minqing Zhang, Wu Yuan
  - 论文评估 Jev 对临床试验入组条件的判断，包括识别信息缺失，并按条件衡量表现和成本。报告中出现的证据解读错误表明，复核流程需将标记的条件与原始病历核对。

- **[PsyJev: Psychological Analysis via System-1 Judgment](https://arxiv.org/abs/2610.36689)**<br>📅 <strong>2026-10-27 06:03 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Fangyuan Liu, Sirui Zhao, Xiaohao Wang, Guo Cheng, Peng Zhang, Enhong Chen
  - PsyJev 训练紧凑决策模型，对心理分析任务作出结构化判断。作者比较模型规模，并检验训练阶段对 F1 和概率质量的作用。结论适用于论文基准。

- **[CausalGrade: Evidence-Guided Causal Graph Scoring with Jev](https://arxiv.org/abs/2610.40692)**<br>📅 <strong>2026-10-28 07:33 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiangming Zhong, Jiawei Zhu, Guanting Wu, Qiaoxi Cai, Wanyi Chen, Jiale Li
  - CausalGrade 使用 Jev 依据给定证据为候选因果图打分。合成实验分析分数与已知结构误差的关系，并与自兼容指标比较图选择。报告命中率有所上升，但仍会选错较多样例。

- **[Benchmarking decision models against generative large language models on medical multiple-choice questions](https://arxiv.org/abs/2610.38448)**<br>📅 <strong>2026-10-28 08:25 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Oscar Freyer, Daniel Glauert, Moritz Hofmann, Max Ostermann, Stephen Gilbert, Jakob Nikolas Kather
  - 评测在医学选择题上比较决策与生成模型，考察重复运行及概率可靠性。受测决策模型的计算和服务成本较低，最强生成模型准确率更高。标签重复一致时，概率仍可能变化。

- **[Decision and System One models in rheumatology: accuracy and calibration on specialty-training examination questions and diagnostic case vignettes](https://arxiv.org/abs/2610.40318)**<br>📅 <strong>2026-10-29 15:53 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Alfredo Madrid-García, Diego Benavent, Fabian Lechner, Phillip Kremer, Johannes Knitza, Beatriz Merino-Barbancho
  - 作者在风湿病学考试题和诊断病例上比较 Jev 式系统与生成式模型。考试题上的较好成绩未迁移至诊断病例，Jev 高置信度判断的正确率也随两类任务变化。

- **[Radiology Guideline-derived Decision Graph for Efficient Clinical Decision Support](https://arxiv.org/abs/2610.40327)**<br>📅 <strong>2026-10-29 15:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xuewen Zhou, Zhen Chen
  - GDGraph 将放射学指南表示为决策图，引导 System One 模型完成有界判断。作者在选定的偶发发现类别上与非结构化和图引导生成基线比较，报告准确率和服务效率的收益。

- **[PathoJev: Efficient Pathology Decisions from Shared Visual Context](https://arxiv.org/abs/2610.40752)**<br>📅 <strong>2026-10-29 16:14 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Chengyang Zhang, Wenchuan Zhang, Bo Li, Xinyu Liu, Jiaming Yang, Mengran Li, Jie Chen, Wei Ju, Yuhao Yi, Hong Bu, Jiancheng Lv
  - PathoJev 利用同一视觉上下文回答多个类型化病理问题。作者与全切片基线比较，并测量不同负载规模下共享编码的效果。问题批次较大时报告的加速最明显。

- **[EDU-Jev Training System-One Decision Models for Education](https://arxiv.org/abs/2610.41079)**<br>📅 <strong>2026-10-29 23:48 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Jiazheng Li, Yulan He
  - EDU-Jev 训练三种规模的决策模型，处理量规判断等教育评估任务。4B 版本在报告的域内教育对比中领先。最强商业基线在通用决策与推理任务上仍表现更好。

- **[Do Multimodal Models Decide Consistently on Equivalent Optical Spectra?](https://arxiv.org/abs/2611.00428)**<br>📅 <strong>2026-10-30 22:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ziyuan Wang, Genliang Zhu, Xiaobo Chen
  - 研究以等价形式呈现光谱，检验模型的科学判断是否一致，以及关键证据缺失时的表现。实验包含决策模型基线，并指出完整光谱上的良好表现可能掩盖对捷径的依赖。

- **[Decision-Centric Research: A Calibrated Decision Model and Benchmark for Scientific Agents](https://arxiv.org/abs/2611.00774)**<br>📅 <strong>2026-10-31 09:34 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Shaoning Zeng, Wen Huang, Xinzhong Zhu, Yi Duan, Jianhang Zhou, Jianping Gou
  - DCRM 研究以当前研究状态为条件的科学智能体决策。其基准评估预测与不确定性，并允许保形预测集保留多个候选。作者报告，在留出数据中，使用状态可在相近覆盖率下缩小预测集。

- **[Zero-shot evaluation of open vision-language models as System 1 decision models on radiology tasks](https://arxiv.org/abs/2611.01631)**<br>📅 <strong>2026-11-01 06:32 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Bradley J Erickson, Sara Salehi
  - 论文用开源视觉语言模型的单词元读出评估放射学零样本 System One 式决策，比较多个任务上的答案偏好和准确率。受测模型无法在所有任务中领先，答案偏好可能高度依赖任务。

- **[EarthJev: Calibrated, Non-Generative Answers to Natural-Language Questions about Sentinel-2 Land Cover](https://arxiv.org/abs/2611.02096)**<br>📅 <strong>2026-11-01 18:11 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Domenico Benfenati, Antonio Maria Rinaldi, Cristian Tommasino
  - 该 EarthJev 模型从给定候选中选择答案并估计概率，用于 Sentinel-2 土地覆盖问答。消融检验额外光谱波段的贡献，作者报告校准和准确率，并与端到端视觉适配比较。

- **[A decision-only model as a low-cost judge of medical AI answers](https://www.medrxiv.org/content/10.64898/2026.10.30.26366939)**<br>📅 <strong>2026-11-02</strong> · medRxiv 预印本 · <strong>Tier B</strong> · Mahmud Omar, Benjamin S. Glicksberg, Ankit Sakhuja, Yiftach Barash, Alexander W. Charney, Eyal Klang, Girish N. Nadkarni
  - 这项 medRxiv 研究评估 Jev 作为低成本医学答案评判模型的表现，并与其他模型和专家一致性比较。报告显示其服务成本较低，在许多任务上具有竞争力，但在部分错误检测实验中较弱。

- **[Every Pixel Is an Option: A System One Model for Medical Ultrasound Biometry](https://arxiv.org/abs/2611.03360)**<br>📅 <strong>2026-11-02 16:09 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Moein Heidari, Junbo Rao, Yudan Chen, Yasamin Medghalchi, River Jiang, Wenjin Chen, David J. Foran, Jasmine Grewal, Ilker Hacihaliloglu
  - Kev-Bio 将超声地标定位表述为对图像位置的决策。作者在多个解剖切面评估地标检测与下游生物测量指标，比较范围限于研究采用的数据集和任务。

- **[EO-Jev: Decision Model for Earth Observation](https://arxiv.org/abs/2611.03371)**<br>📅 <strong>2026-11-02 16:16 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Mohamed Atef Abouelhadid, Diaa Addeen Abuhani, Muhammad Akhtar Munir, Fahad Shahbaz Khan, Salman Khan
  - EO-Jev 将通用决策模型适配到地球观测，并评估对通用能力的影响。论文测试感知、选项一致性和分布变化下的校准。受测适配模型在定量问题和分布变化下仍面临挑战。

- **[Structured Clinical Memory as Context for Probabilistic Decision Models: A Synthetic Evaluation with Jev](https://arxiv.org/abs/2611.04101)**<br>📅 <strong>2026-11-03 00:22 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jash Sayani, Gaurang Karwande, Achinth Bharadwaj
  - 这项合成试点评估将结构化患者记忆作为输入状态时的 Jev，比较不同上下文配置下的决策。标签由一位作者提供，记忆是理想条件下的上界，临床外推有限。

- **[A Systematic Comparison of In-Context Learning Strategies for Peptide Property Prediction in Low-Data Regimes](https://arxiv.org/abs/2611.09994)**<br>📅 <strong>2026-11-03 09:02 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jiantao Zhao, Andrei Voinea, Mathijs F.J. Mabesoone
  - 该基准在低数据量的肽属性分类中比较类型化决策模型、语言模型、表格基础模型与梯度提升树。作者发现表现随任务变化，上下文学习相对经典基线未取得显著总体优势。

- **[EarthJev: Efficient Visual Evidence Acquisition and Decision for UHR Remote Sensing Understanding](https://arxiv.org/abs/2611.10005)**<br>📅 <strong>2026-11-04 09:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Pengyu Dai, Yao Zhang, Jian Song, Junjue Wang, Yafei Ou, Yuzeng Chen, Junshi Xia, Hongruixuan Chen, Naoto Yokoya
  - 这项 EarthJev 系统针对超高分辨率遥感问题决定去哪里获取补充视觉证据。实验用多种冻结回答模型比较控制器和单次前向基线。报告中的收益基于分别拟合和校准各模型。

- **[GeoJeV: Unified Spatial Probability for Training-Free Efficient Evidence Acquisition in Ultra-High-Resolution Remote Sensing](https://arxiv.org/abs/2611.08879)**<br>📅 <strong>2026-11-06 02:12 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xinyi Niu, Lingfeng Chen, Jiehua Zhang, Panhe Hu, Li Liu, Zhen Liu, Yongxiang Liu
  - GeoJeV 使用空间概率选择超高分辨率遥感图像中值得进一步查看的区域。作者在三个基准上报告准确率和延迟，并与单次前向基线及较慢的证据获取方法比较。

- **[TrialJev: Open-Weight Single Pass Eligibility Scoring for Patient Trial Screening](https://arxiv.org/abs/2611.10145)**<br>📅 <strong>2026-11-06 19:11 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Omar Ibrahim, Grant Hamblin, Benjamin Haibe-Kains
  - TrialJev 用开放的单次前向架构评估患者与试验的匹配资格。作者在合成病例上衡量排序、决策正确率和推断成本，将其定位为后续复核的优先级辅助工具，并报告特定实现的耗时。

- **[NuJEV: Structured Visual Judgments for Consistent Nuclei Quantification](https://arxiv.org/abs/2611.11359)**<br>📅 <strong>2026-11-08 13:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yonghuang Wu, Pengfei Wang, Zhenyang Liang, Yize Ma, Pengfei Song, Guoqing Wu, Jinhua Yu
  - NuJEV 将候选定位与类型化视觉判断结合，对细胞核进行计数和分类。作者评估密集图像和自然语言请求，并比较视觉适配与匹配基线。指标涵盖定位和计数误差。

- **[S1Pert: Scalable Target-Specific Gene Response Prediction with System-One Intelligence](https://arxiv.org/abs/2611.17705)**<br>📅 <strong>2026-11-13 03:35 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xiaoqi Sheng, Hou wang, Yan Liang, Yutong Li, Wenhao Du, Tinghe Zhang, Jiawen Liu, Hongmin Cai
  - S1Pert 在基因反应预测基准中评估受 System One 启发的模型。作者在留出细胞情境中比较预测表现与推断效率，以历史反应趋势为参照衡量受测数据集中的泛化。

- **[Can decision models extract clinical data from cancer pathology reports? An evaluation of accuracy, calibration, and failure modes](https://arxiv.org/abs/2611.20129)**<br>📅 <strong>2026-11-15 16:57 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Indranil Mallick, Paromita Roy
  - 研究衡量决策模型从癌症病理报告提取字段的准确率、校准和延迟。显式文本字段与数值测量的难度不同。论文报告具体字段的错误，并强调按实际配置验证。

- **[MedJev: A System One Vision-Language Decision Model for Fast and Effective Medical Image Understanding](https://arxiv.org/abs/2611.20992)**<br>📅 <strong>2026-11-16 12:21 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Fan Zhang, Hao Wu, Jinyang Wu, Hongyu Qu, Zheng Lian, Dongfu Yin, Qingsong Wen, Pheng-Ann Heng
  - 这一 MedJev 模型基于视觉语言骨干对医学图像进行单次前向决策。作者与通用和医学视觉语言基线比较准确率及端到端推断耗时。该工作与较早的同名零样本基准研究范围不同。

- **[Title and Abstract Screening for Systematic Reviews with Jev, a Decision Model: Comparison with Generative Large Language Models](https://www.mdpi.com/2078-2489/17/11/1160)**<br>📅 <strong>2026-11-17</strong> · Information · <strong>Tier B</strong> · Kentaro Matsui, Yoshikazu Takaesu
  - 作者在两项双相障碍治疗综述的题名和摘要筛选中比较 Jev 与生成模型。受测运行中，Jev 以较低实测成本保留所有最终纳入报告，但仍排除了部分人工筛查认为应阅读全文的记录。

- **[Right Diagnosis, Unsafe Route: Auditing Clinical AI Decision Trajectories and Corrective Oversight for Validity and Potential Harm](https://arxiv.org/abs/2611.22612)**<br>📅 <strong>2026-11-17 11:26 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Guanqiao Chen, Wei Jiang, Shu Zhang, Qian Lin, Guanxu Yu, Siran Li, Chunhui Wang, Tianyu Shi
  - 研究同时评估临床决策轨迹和最终诊断，并比较不同监督方式。纠正早期错误可以改善下一步，但轨迹后段仍可能出现新风险。评测区分最终准确率与过程安全。

- **[SlideJev: Order-Stable and Tissue-Grounded Jev Decisions for Whole-Slide Pathology](https://arxiv.org/abs/2611.22879)**<br>📅 <strong>2026-11-17 14:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Lei Wu, Jiashuai Liu, Di Zhang, Chunze Yang, Jiusong Ge, Junbo Lu, Yongqi Liang, Wenjie Zhao, Ni Zhang, Chen Li, Zeyu Gao, Qidong Liu
  - SlideJev 通过组织证据定位和顺序稳定的候选处理回答全切片病理问题。评测调换选项顺序，并用不匹配或缺失图像作对照。报告中的准确率收益与正确组织证据有关。


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
- **[Typed Decision Models on Tabular Data](https://arxiv.org/abs/2610.19536)**<br>📅 <strong>2026-10-14 03:54 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Baowen Zhang, Hangting Ye, Hongyuan Zha
  - 该表格数据审计在分类、事实验证和异常检测中比较四个决策模型与三个 LLM，并施加二十一类保持内容的改写。决策模型以较低成本获得竞争性准确率，但所有模型都对表格组织方式敏感。对每个模型，至少三分之一的行判断会在某种改写下变化，揭示接口敏感性。

- **[One Pretrained Decision Model Is Enough for Training-Free Generalist Graph Anomaly Detection](https://arxiv.org/abs/2610.30777)**<br>📅 <strong>2026-10-22 05:56 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xinyu Zhao, Qingyun Sun, Ziwei Zhang, Tianchen Zhu, Daqing Li, Jianxin Li
  - Jev-GAD 用预训练决策模型判断图结构中的节点级证据，再将其排序与统计异常得分融合。作者在引文、社交及评论图上检验该方法在无需对每个异常数据集重新训练参数时的泛化性。

- **[OneCodeReviewBench: Typed Decisions for Code Review and Search](https://arxiv.org/abs/2610.33389)**<br>📅 <strong>2026-10-24 01:40 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Mohamad Mohebifar, Alex Bit
  - OneCodeReviewBench 用工程化参考答案和较小的人工复核子集评估有界代码审查及代码搜索决策。实验覆盖类型化判断和证据检索，受任务范围与评审一致性限制。结果尚未验证仓库规模上的泛化能力。

- **[Benchmarking System One Models for Time-Series Decision Making: A Case Study of Jev](https://arxiv.org/abs/2610.33410)**<br>📅 <strong>2026-10-24 02:58 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Jianye Wang, Kexin Zhang, Jiayin Xiong, Hao Xue
  - 该研究在事件预测、数值序列分类和市场方向等时间序列任务上评估托管 Jev。其表现因任务而异，候选排序有时优于最终决策。作者指出时间表示能力值得进一步检验。

- **[DFIP: Decision-Focused Inference Path for System One Models](https://arxiv.org/abs/2610.36804)**<br>📅 <strong>2026-10-27 08:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ismail Pelaseyed, Alan Zabihi
  - DFIP 研究 System One 模型的服务优化，比较固定形状重放与多样化请求。部分优化在特定工作负载下提速，但混合流量暴露了延迟、数值和可靠性限制。报告中的收益取决于服务条件。

- **[SatOps-Decision: Low-Latency Discriminative Decisions for Onboard Satellite Communication Operations](https://arxiv.org/abs/2610.38697)**<br>📅 <strong>2026-10-28 19:00 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Lifan Mei, Yuxuan Li, Jiaxian Tu, Shenghe Xu
  - SatOps-Decision 为有界的卫星通信操作训练紧凑决策模型。本地实验比较决策模型和生成骨干的耗时及准确率，并以托管 Jev 版本作准确率参照。延迟数据适用于受测硬件和实现。

- **[Flide: Accelerating Decision Inference with Exact State Forking](https://arxiv.org/abs/2610.42148)**<br>📅 <strong>2026-10-30 17:59 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Bobo Li, Jiajia Song, Hao Fei, Wynne Hsu, Mong Li Lee
  - Flide 通过跨选项复用共同输入状态的计算优化决策推断。研究与通用推断引擎比较吞吐量及对数值参照的吻合度。报告的加速取决于候选输入能共享多少计算。

- **[DIMWIT: Directly Invoking Models Without Intensive Tuning](https://arxiv.org/abs/2611.01463)**<br>📅 <strong>2026-11-01 02:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Saarth Deshpande, Neeraja J. Yadwadkar, Venkat Arun
  - DIMWIT 为单项资源管理决策调用模型，评估执行时间和输出质量之间的权衡。作者在一种视频负载上报告了编码提速，所测感知质量分数略降。

- **[Honest Small Decision Models for Finance: Scale, Specialization Collapse, and Mixed-Corpus Remediation](https://arxiv.org/abs/2611.03755)**<br>📅 <strong>2026-11-02 11:18 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ajitabh Kumar
  - 作者为金融规则判断和实际结果预测训练紧凑决策模型，跨规模衡量专业化代价，并测试混合训练数据。对实际结果的预测可能围绕基准率保持良好校准，却缺少足够的区分能力。

- **[Thinking Fast, Trading Late: System One Decision Models vs the Market](https://arxiv.org/abs/2611.03985)**<br>📅 <strong>2026-11-02 21:24 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Amir Dehkordi, Alireza Kargarzadeh, Nariman Khaledian, Navid Parvini, Sid Ghatak, Arman Khaledian
  - 论文按预注册方案评估基于新闻的市场判断，纳入成本与稳健性调整后比较策略表现。作者还发现，遮盖公司名称后，上下文仍可能泄露足以识别公司的信息。

- **[Reproducible LoRA Inference Through Deterministic Split-K Reduction](https://arxiv.org/abs/2611.10334)**<br>📅 <strong>2026-11-07 00:03 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Dhayaneshwar Balusamy, Ankur Mohan
  - 作者测量 LoRA 服务的可重复性，检验不同数值归约顺序如何使差异传导至决策。在受测硬件条件下，确定性实现保留大部分速度收益。研究将数值变化与输出变化联系起来。

- **[Track or Follow? A Jev-Compatible Multi-Agent Trading System When Web News Lags the Market](https://arxiv.org/abs/2611.10414)**<br>📅 <strong>2026-11-07 02:47 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yebo Feng, Guangyan Gan, Liangrui Pan, Ruichao Liang, Cong Wu, Jiahua Xu, Yang Liu
  - 该兼容 Jev 的交易模拟研究网页新闻晚于市场事件发布时，能否提供超出数值特征的信息。验证性实验在指定预测窗口未发现增量排序信息。论文还考察决策记录对结果审计的作用。

- **[The Noise Floor of a Quantization Comparison: Engine, restart, batch and kernel drift, measured against 8-bit and 4-bit effects in two decision models](https://arxiv.org/abs/2611.15671)**<br>📅 <strong>2026-11-11 16:15 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Aleks Blagojevich, Trevor Sunderland
  - 研究在两个决策模型上比较量化效应与推断引擎、重启、批次和内核引起的漂移。总体准确率接近时，个体答案仍可能改变。作者发布逐条输出，以支持基准均值以下层面的比较。

- **[LuthorSQL: A One-Pass Text-to-SQL Model as System 1 for a Slower LLM Agent](https://arxiv.org/abs/2611.17780)**<br>📅 <strong>2026-11-13 05:44 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ibrahim Memon, Armin Karamzade, M. Hanif Jhaveri, Roy Fox
  - LuthorSQL 用短决策路径提出 SQL 候选，供较慢的模型使用。研究比较标准与经修改的数据库模式，并检查公开参考查询的记忆效应。较晚发布的数据库提供独立迁移检验。

- **[Budgeted Decision-Model-Guided Joint-Action Search for Satellite Edge Computing](https://arxiv.org/abs/2611.19225)**<br>📅 <strong>2026-11-14 07:35 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Ziming Liu, Minghao Sun, Ran Tao, Xiaoli Chu
  - 研究用决策模型引导卫星边缘计算中受预算约束的联合动作搜索。模拟将求解耗时和任务时延与多个优化基线比较。报告收益适用于受测卸载场景与计算预算。

- **[SpecSearch: Towards Hardware-Aware Efficient Speculative Decoding](https://arxiv.org/abs/2611.22296)**<br>📅 <strong>2026-11-17 06:53 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Selin Yildirim, Ali Zeyrek, Deming Chen
  - SpecSearch 比较跨硬件搜索和用 Jev 预测高效推测解码配置的方法。报告实验中，决策引导版本的吞吐量接近完整测量，同时省去独立的硬件校准阶段。

- **[When Do Typed Decision Models Work in Transportation? Evidence from Travel Choice and Traffic Signal Control](https://arxiv.org/abs/2611.22926)**<br>📅 <strong>2026-11-17 15:24 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Hongyang Zhang, Boyuan Deng, Siyuan Feng, Kai Chen, Junbo Zhang
  - 论文在出行选择和交通信号控制中评估类型化决策模型，检验输入描述及任务要求如何影响零样本选择。作者分别报告两类应用中的机会和局限。


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
- **[Are AI Decision Models Biased? A Case Study of Jev](https://arxiv.org/abs/2610.19619)**<br>📅 <strong>2026-10-14 05:42 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Ilaria Imperatrice, Taisia Kameneva, Adam Eric Greenberg, Alessandro Romano
  - 该审计测量 41,500 次 Jev 回答中的认知与人口属性偏差，并追加 15,000 次合取任务回答。最终选项常能避免典型人类偏差，但无关数字、选项顺序和概率规则违背揭示了弱点。定价场景中较小的人口属性差异不能推广为普遍公平性保证。

- **[S$^2$-MAS: A Society-Scale Multi-Agent Simulation Framework with a 500-Million-Persona Resource](https://arxiv.org/abs/2610.27746)**<br>📅 <strong>2026-10-20 07:05 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Yang Li, Yike Wang, Di Wan, Chujun He, Zongsi Xu, Yitao Yu, Shuai Zhong, Minghao Pan, Quanfeng Lu, Xiyu Chen, Sheng Zhong, Deng Binjie, Yichen Guo, Zhenwei Guo, Hou Jun, Kunhan Guo, Weihao Lin, Tuo Zhou, Hai Liu, Chenwei Wu, Jianyuan Zhong, Xilin Dai, Ye Luo
  - 该家庭模拟结合大规模合成画像、学习所得的决策策略和显式财务记账。作者评估前瞻性消费预测及其对信息时点的敏感性。一项对比中的绝对误差有所下降，但总体均值仍被低估。

- **[When the Top Answer Decides: Gender Bias in Decision Models](https://arxiv.org/abs/2610.39747)**<br>📅 <strong>2026-10-29 10:06 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Yeb Havinga
  - 作者审计托管 Jev 及其他决策模型的人口群体偏差，比较最终选项和完整概率分布所显示的差异，发现两种视角可以得出不同结论。Jev 的学生模型在该审计中也与教师存在差异。

- **[When Disclosure Is Compulsory: Evaluating Ride-Hailing Rebalancing Policies with Self-Interested LLM Driver Agents](https://arxiv.org/abs/2610.41132)**<br>📅 <strong>2026-10-30 01:37 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Xinyu Wang, Andres Fielbaum
  - 该网约车模拟用具备决策能力的驾驶员智能体评估强制披露下的运力再平衡。与完全遵从相比，司机选择会改变经济和服务结果。模拟结论取决于所用司机激励模型及受测平台政策。

- **[Swap, Replicate, Read the Mass: A Protocol for Auditing Demographic Bias in System One Decision Models](https://arxiv.org/abs/2611.00496)**<br>📅 <strong>2026-10-31 00:36 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Alejandro Mozo Quesada, Sergio Gálvez Rojas, Francisco López Valverde
  - 作者通过改变问题表述和候选顺序来审计 System One 模型的人口群体差异，并在多次运行中分别分析最终选择和概率质量。观察到的差异会受呈现方式与决策汇总方法影响。

- **[S1CogBench: What System One Decision Models Can and Cannot Do on Cognitive Experiments](https://arxiv.org/abs/2611.00911)**<br>📅 <strong>2026-10-31 13:09 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Dengzhe Hou, Kazunori D Yamada
  - S1CogBench 在源自认知实验的任务上评估 System One 模型。研究区分能力差异和输出生成延迟，并包含匹配的短输出对照。分任务结果描述了决策形式在受测认知场景中的适用范围。

- **[Fast, Cheap, and Fair? Evaluating Decision Models](https://arxiv.org/abs/2611.04510)**<br>📅 <strong>2026-11-03 08:34 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Muhammad Uzair Ul Haq, Davide Rigoni, Alessandro Sperduti, Flavia Fabris
  - 该招聘审计衡量反事实简历变体如何影响决策模型的评分及入围结果，参照姓名和拼写扰动造成的变化，并记录服务成本。观察到的差异依赖受测任务与模型配置。

- **[Decision Models as Scalable Economic Surrogates that Capture Human Variation](https://arxiv.org/abs/2611.05553)**<br>📅 <strong>2026-11-03 19:47 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Maxime Saxena, Fabio Caccioli, R. Maria del Rio-Chanona
  - 作者比较决策模型和生成模型在经济博弈中替代人类选择的能力，同时衡量个体差异、总体一致性和推断成本。决策模型在受测任务中捕捉到更多差异，并降低重复模拟开销。

- **[TACT: A Pragmatic Approach to Qualitative Analysis with an AI Council](https://arxiv.org/abs/2611.05702)**<br>📅 <strong>2026-11-03 22:30 UTC</strong> · arXiv v1 · <strong>Tier A</strong> · Rudrajit Choudhuri, Christian Bird, Carmen Badea, Anita Sarma
  - TACT 以多个 AI 角色协作完成定性分析，并将决策判断纳入工作流。论文比较较轻与完整配置的输出和成本，并讨论研究人员如何检查和验证主题分析结果。

- **[Same Facts, Different Remedy: Linguistic Profiling and Arbitrariness in LLM and System One Decisions](https://arxiv.org/abs/2611.08995)**<br>📅 <strong>2026-11-06 05:10 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Colin Priest
  - 该审计比较文风改写对生成模型及 System One 模型的个体决策和群体差异的影响。审计模型检查改写是否保留重要事实。即使未被标记为改变事实，改写仍可能导致决策波动。

- **[Nudging Decision Models: Do Digital Nudges Steer Fast, Generation-Free AI Agents?](https://arxiv.org/abs/2611.09264)**<br>📅 <strong>2026-11-06 10:21 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Sascha Kaltenpoth, Haya Halimeh, Kevin Bösch, Oliver Müller
  - 作者比较数字助推如何影响非生成决策智能体和具备推理能力的语言智能体。部分受测助推的作用强度取决于智能体类型。结果适用于论文中的选择任务。

- **[Can Model Answer Probabilities Represent Survey Populations? Conditional Prediction and Joint Validity in Jev Survey Simulation](https://arxiv.org/abs/2611.15576)**<br>📅 <strong>2026-11-11 14:59 UTC</strong> · arXiv v1 · <strong>Tier B</strong> · Zengqing Wu, Chuan Xiao
  - 作者评估 Jev 概率能否表达人口调查回答，区分条件预测与联合事件。边际检验能约束可能结果，联合有效性仍需可关联的回答数据。证据限于选定的二元问题和一个模型版本。


<a id="search-and-verification-notes"></a>

## 检索与核验说明

**截止日期：** 2026 年 11 月 20 日（Asia/Shanghai）。

**组织方式：** 按主要研究领域分组，截至 11 月 20 日核验时共收录 403 条文献，其中包括 390 篇学术论文和 13 篇技术文章或报告。

本次 **11 月 20 日更新新增 204 篇学术论文**，检索窗口为 2026 年 10 月 18 日至 11 月 20 日。通过 arXiv 原始提交历史、出版方与 DOI 元数据核对日期及版本，结合摘要和有针对性的全文检查判断相关性。按 arXiv 编号、DOI 和标准化标题去重。新增条目包括 197 篇 arXiv 预印本、4 篇其他来源预印本和 3 篇正式发表论文。未变更条目沿用此前的核验记录。覆盖范围受索引延迟和一手来源可用性影响。详见[11 月 20 日核验记录](outputs/jev-literature-2026-11-20.json)。

<!-- review-marker-18 -->
本次 **10 月 18 日更新新增 25 篇论文，修订 4 篇已有条目**；32 条新候选中排除 7 条无关关键词命中。现共 **199 条文献：185 篇 arXiv 预印本、1 篇 ResearchGate 预印本及 13 条技术来源**。通过 arXiv 官方 API 核对元数据和摘要，并对范围存疑项检查全文。最新收录的 v1 日期为 10 月 15 日；核验截止日期不保证已覆盖尚未公告或索引的投稿。NeoHorse-1 与 RedundancyBench 保留早于 Jev 发布的 v1 日期，Jev 内容来自后续修订。已有技术来源沿用先前审阅；Jev 1.14 公告用于网站介绍，不计为论文。详见[10 月 18 日核验记录](outputs/jev-literature-2026-10-18.json)。

下文保留历史核验记录。

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
