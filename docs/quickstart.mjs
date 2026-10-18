const content = {
 en: {
  title:'Understand Jev in two minutes.', subtitle:'State in. Typed decisions out. A small decision-making component you compose with ordinary code.',
  intro:'Jev is TypeSafe AI’s System One model. Give it the evidence and a bounded question; your program receives a typed answer. Use it for routing, classification and scoring inside a larger workflow.',
  types:[['Choice','Pick from named options; returns a choice, probabilities and confidence.'],['Score','Evaluate against a rubric; returns a score, probabilities and confidence.'],['Noul','Judge a statement; returns a value between 0 and 1.']],
  steps:[['Supply the state','Include the facts the decision needs: a message, relevant policy and current workflow state.'],['Define the question','Use clear, distinct options and an explicit fallback. Break complex judgments into small questions.'],['Connect the result','Let code route the outcome. Evaluate thresholds on held-out examples before automating.']],
  demo:'A support-routing example',demoNote:'Illustrative values only · no API request · not a measured model result',
  state:'“I was charged twice for the same order.”',question:'Which support queue should handle this message?',
  labels:['Billing','Technical support','Other'],threshold:'Routing threshold',route:'Route to Billing',defer:'Send for review',
  result:'The policy below uses the selected option’s probability. This is not the separate API confidence field.',
  caveat:'A valid output can still be wrong. Probability calibration, option wording and downstream task success need evaluation. For long reasoning or text generation, combine decisions with an LLM and ordinary code.',
  start:'Try the official quick start',read:'Read the introduction',release:'Jev 1.14 release notes',
  releaseNote:'As of 18 October: the 1.14 release introduces experimental image input and additional features. Check the official documentation for availability and request options.',
 },
 zh: {
  title:'两分钟，了解 Jev。',subtitle:'输入状态，输出类型化决策。用普通代码组合的小型判断组件。',
  intro:'Jev 是 TypeSafe AI 的 System One 模型。提供判断所需的证据和范围明确的问题，程序就能获得类型化答案，适用于工作流中的路由、分类与评分。',
  types:[['Choice','从明确选项中选择，返回选项、概率分布和置信度。'],['Score','依据评分标准判断，返回分数、概率分布和置信度。'],['Noul','判断一个陈述，返回 0 到 1 之间的值。']],
  steps:[['提供状态','输入消息、相关规则和当前流程状态，让模型拥有判断所需的事实。'],['定义问题','选项清晰且互有区别，设置明确的回退选项。将复杂判断拆成小问题。'],['连接代码','由程序按结果分流；先用留出样例评测阈值，再启用自动处理。']],
  demo:'示例：客服工单分流',demoNote:'仅为示意数据 · 不调用 API · 不是实测模型输出',
  state:'“同一笔订单，我被重复扣款了。”',question:'这条消息应交给哪个客服队列？',
  labels:['账单','技术支持','其他'],threshold:'自动分流阈值',route:'转到账单队列',defer:'交给人工复核',
  result:'下方策略使用所选选项的概率，并非 API 中独立的 confidence 字段。',
  caveat:'格式正确仍可能判断错误。需要评测概率校准、选项措辞和下游任务成功率；长链推理与文本生成可交给 LLM，再用代码组合整个流程。',
  start:'打开官方 Quick Start',read:'阅读官方介绍',release:'Jev 1.14 更新说明',
  releaseNote:'截至 10 月 18 日：1.14 版本已引入实验性图像输入等功能，具体可用性与请求参数以官方文档为准。',
 }
};

export function quickstart(lang) {
 const t=content[lang];
 return `<section class="section quickstart" id="quickstart" aria-labelledby="quick-title">
 <div class="section-head"><div><div class="kicker">00 / QUICK START</div><h2 id="quick-title">${t.title}</h2></div><p class="section-desc">${t.subtitle}</p></div>
 <p class="quick-intro">${t.intro}</p>
 <div class="quick-types">${t.types.map(([type,text])=>`<article><code>${type}</code><p>${text}</p></article>`).join('')}</div>
 <div class="quick-layout"><ol class="quick-steps">${t.steps.map(([title,text])=>`<li><h3>${title}</h3><p>${text}</p></li>`).join('')}</ol>
 <article class="quick-demo"><h3>${t.demo}</h3><p class="quick-demo-note">${t.demoNote}</p><blockquote>${t.state}</blockquote><p>${t.question}</p>
 <div class="quick-probabilities">${t.labels.map((label,i)=>`<div><span>${label}</span><meter min="0" max="1" value="${[.86,.09,.05][i]}" aria-label="${label}"></meter><strong>${[86,9,5][i]}%</strong></div>`).join('')}</div>
 <label class="quick-threshold" for="routing-threshold">${t.threshold} <output id="threshold-value">80%</output><input id="routing-threshold" type="range" min="50" max="99" value="80" step="1"></label>
 <p class="quick-result" id="routing-result" role="status" data-route="${t.route}" data-defer="${t.defer}">${t.route}</p><p class="quick-demo-note">${t.result}</p></article></div>
 <p class="quick-caveat">${t.caveat}</p><div class="quick-links"><a class="button primary" href="https://docs.typesafe.ai/introduction/quickstart" target="_blank" rel="noopener noreferrer">${t.start} ↗</a><a href="https://docs.typesafe.ai/introduction" target="_blank" rel="noopener noreferrer">${t.read} ↗</a><a href="https://typesafe.ai/blog/jev-1-14" target="_blank" rel="noopener noreferrer">${t.release} ↗</a></div><p class="quick-demo-note">${t.releaseNote}</p></section>`;
}

export function updateRoutingDemo(value, doc=document) {
 const threshold=Number(value), result=doc.querySelector('#routing-result');
 doc.querySelector('#threshold-value').textContent=`${threshold}%`;
 result.textContent=86>=threshold?result.dataset.route:result.dataset.defer;
}
