import {copy} from './i18n.mjs';
import {summarize, csvExport, dateRange} from './metrics.mjs';
const root = document.querySelector('#app');
const tip = document.querySelector('#tooltip');
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const paths = {
 arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',external:'<path d="M14 3h7v7m0-7L10 14"/><path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/>',
 book:'<path d="M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-2H4zM13 7a3 3 0 0 1 3-3h5v15h-4a4 4 0 0 0-4 2"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>',reset:'<path d="M3 11a9 9 0 1 1 2 7M3 4v7h7"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',chevron:'<path d="m9 5 7 7-7 7"/>',repo:'<path d="M4 3h13a2 2 0 0 1 2 2v16H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3M3 17h16M8 7h6"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
let data, state, t, stats;
let savedLanguage;
try { savedLanguage = localStorage.getItem('jev-atlas-language'); } catch {}
const initialParams = new URLSearchParams(location.search);
const lang = initialParams.get('lang') || savedLanguage || (navigator.language.startsWith('zh') ? 'zh' : 'en');
const locale = () => state.lang === 'zh' ? 'zh-CN' : 'en-US';
const fmtDate = (day, short=false) => day ? new Intl.DateTimeFormat(locale(), {month:short?'numeric':'short',day:'numeric',timeZone:'UTC'}).format(new Date(day+'T00:00:00Z')) : t.unknown;
const fullDate = day => new Intl.DateTimeFormat(locale(), {year:'numeric',month:'short',day:'numeric',timeZone:'UTC'}).format(new Date(day+'T00:00:00Z'));
const name = domain => domain[state.lang];
const tipAttr = text => `data-tip="${esc(text)}" aria-label="${esc(text)}"`;
const sectionHead = (kicker,title,desc,extra='') => `<div class="section-head"><div><div class="kicker">${kicker}</div><h2>${title}</h2></div>${extra || `<p class="section-desc">${desc}</p>`}</div>`;
const note = text => `<div class="chart-note">${icon('info')}<span>${text}</span></div>`;
const getDomain = id => data.domains.find(d=>d.id===id);

function miniChart() {
 const all = summarize(data,{domain:'',tier:'',start:data.start,end:data.cutoff});
 const values=all.timeline.map(d=>d.cumulative), max=Math.max(...values,1);
 const points=values.map((value,i)=>`${12+i/(Math.max(values.length-1,1))*446},${143-value/max*117}`);
 return `<svg class="hero-mini" viewBox="0 0 480 165" role="img" aria-label="${t.cumulative}: ${all.dated}"><defs><linearGradient id="hero-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#a7ecc5" stop-opacity=".2"/><stop offset="1" stop-color="#a7ecc5" stop-opacity="0"/></linearGradient></defs>${[34,71,108,145].map(y=>`<path d="M12 ${y}H465" stroke="#35503f" stroke-dasharray="2 6"/>`).join('')}<path d="M${points.join(' L')} L458 145 L12 145Z" fill="url(#hero-fill)"/><path d="M${points.join(' L')}" fill="none" stroke="#a7ecc5" stroke-width="2.5"/><circle cx="458" cy="${143-values.at(-1)/max*117}" r="4" fill="#a7ecc5"/><circle cx="458" cy="${143-values.at(-1)/max*117}" r="9" fill="#a7ecc5" opacity=".12"/></svg>`;
}

function hero() {
 const days=dateRange(data.start,data.cutoff).length;
 return `<header class="topbar"><nav class="container nav-inner" aria-label="${state.lang==='zh'?'主导航':'Main navigation'}"><a class="brand" href="#"><span class="brand-symbol">J.</span><span class="brand-text">Awesome <span class="brand-slash">/</span> JEV Papers</span></a><div class="nav-links"><a href="#explore">${t.navExplore}</a><a href="#landscape">${t.navMap}</a><a href="#library">${t.navPapers}</a></div><div class="nav-actions"><div class="lang-switch" aria-label="Language / 语言"><button data-lang="en" aria-pressed="${state.lang==='en'}">EN</button><button data-lang="zh" aria-pressed="${state.lang==='zh'}">中文</button></div><a class="github-link" href="${data.repository}" target="_blank" rel="noopener noreferrer" aria-label="${t.github}">${icon('repo')}<span>GitHub</span></a></div></nav></header>
 <main><section class="hero"><div class="container"><div class="hero-grid"><div><div class="eyebrow"><span class="status-dot"></span>${t.eyebrow}</div><h1>${t.hero1}<br><em>${t.hero2}</em></h1><p class="hero-desc">${t.heroDesc}</p><div class="hero-buttons"><a class="button primary" href="#explore">${t.explore}${icon('arrow')}</a><a class="button dark-outline" href="${data.repository}" target="_blank" rel="noopener noreferrer">${t.readRepo}${icon('external')}</a></div><div class="hero-subnote"><span>${t.updated} ${data.cutoff}</span><span>↗ ${t.heroLicense}</span></div></div><div class="hero-chart"><div class="hero-chart-top"><i class="window-dot"></i><i class="window-dot"></i><i class="window-dot"></i><span>${t.miniTitle}</span></div><div class="hero-chart-meta"><div class="hero-count">${data.papers.filter(p=>p.date).length}<small>${t.datedPapers}</small></div><span class="hero-chart-badge">${t.verified}</span></div>${miniChart()}<div class="hero-chart-foot"><span>${fmtDate(data.start)} · ${t.chartFrom}</span><span>${fmtDate(data.cutoff)} · ${t.chartTo}</span></div></div></div><div class="hero-foot"><span>${t.ribbon}</span><div class="domain-ribbon"><span>${t.ribbon1}</span><span>${t.ribbon2}</span><span>${t.ribbon3}</span><span>${t.ribbon4}</span></div></div></div></section>
 <div class="container"><div class="stat-strip">${[[data.papers.length,t.academic,t.academicDetail,'book'],[data.domains.length,t.domains,t.domainDetail,'grid'],[days,t.days,t.daysDetail,'calendar'],[data.papers.filter(p=>!p.date).length,t.pending,t.pendingDetail,'clock']].map(([value,label,detail,ico])=>`<div class="stat"><div class="stat-top"><div class="stat-value">${value}</div><span class="stat-icon">${icon(ico)}</span></div><div class="stat-label">${label}</div><div class="stat-detail">${detail}</div></div>`).join('')}</div>`;
}

function filters() {
 return `<div class="scope-bar"><label>${t.domainLabel}<select id="domain-filter">${[['',t.allDomains],...data.domains.map(d=>[d.id,name(d)])].map(([id,label])=>`<option value="${id}" ${state.domain===id?'selected':''}>${label}</option>`).join('')}</select></label><label>${t.tierLabel}<select id="tier-filter">${[['',t.allTiers],['A',t.tierA],['B',t.tierB]].map(([id,label])=>`<option value="${id}" ${state.tier===id?'selected':''}>${label}</option>`).join('')}</select></label><label class="date-label">${t.from}<input id="start-filter" type="date" min="${data.start}" max="${data.cutoff}" value="${state.start}"></label><label class="date-label">${t.to}<input id="end-filter" type="date" min="${data.start}" max="${data.cutoff}" value="${state.end}"></label><button class="reset-button" data-reset>${icon('reset')}${t.reset}</button></div>${state.error?`<div class="error-banner" role="alert">${t.dateError}</div>`:''}<div class="scope-summary"><div><strong>${stats.papers.length} ${t.selected}</strong><span class="scope-dot"></span>${stats.dated} ${t.dated}${stats.undated?` · ${stats.undated} ${t.undated}`:''}</div><span>${t.scopeNote}</span></div>`;
}

function trajectory() {
 const width=1080,height=296,left=42,right=55,top=23,bottom=40;
 const values=stats.timeline.map(d=>d[state.mode]);
 const max=Math.max(...values,1), tickStep=Math.max(1,Math.ceil(max/4));
 const ceiling=tickStep*4;
 const y=value=>height-bottom-value/ceiling*(height-top-bottom);
 const band=(width-left-right)/Math.max(values.length,1);
 const x=i=>left+band*(i+.5);
 const ticks=Array.from({length:5},(_,i)=>i*tickStep);
 let content=ticks.map(v=>`<path class="chart-grid" d="M${left} ${y(v)}H${width-right}"/><text class="chart-text" x="${left-12}" y="${y(v)+4}" text-anchor="end">${v}</text>`).join('');
 const indices=[...new Set(Array.from({length:Math.min(7,values.length)},(_,i)=>Math.round(i*(values.length-1)/Math.max(Math.min(7,values.length)-1,1))))];
 content+=indices.map(i=>`<text class="chart-text" x="${x(i)}" y="${height-14}" text-anchor="middle">${esc(fmtDate(stats.timeline[i].date,true))}</text>`).join('');
 if(state.mode==='cumulative' && stats.dated){
  const points=values.map((v,i)=>`${x(i)},${y(v)}`);
  content+=`<path d="M${points.join(' L')} L${x(values.length-1)},${y(0)} L${x(0)},${y(0)}Z" fill="#16654d" fill-opacity=".07"/><path d="M${points.join(' L')}" fill="none" stroke="#16654d" stroke-width="2.5"/>`;
 }
 content+=values.map((v,i)=>{
  const text=`${fullDate(stats.timeline[i].date)}\n${t.dailyCount}: ${stats.timeline[i].daily}\n${t.cumulativeCount}: ${stats.timeline[i].cumulative}`;
  return state.mode==='daily'?`<rect class="chart-mark" tabindex="0" role="img" ${tipAttr(text)} x="${x(i)-band*.34}" y="${y(v)}" width="${band*.68}" height="${Math.max(y(0)-y(v),1)}" rx="2" fill="${v?'#2d795b':'#dfe9df'}"/>`:`<circle class="chart-mark" tabindex="0" role="img" ${tipAttr(text)} cx="${x(i)}" cy="${y(v)}" r="${i===values.length-1?4:3}" fill="#16654d" stroke="#fff" stroke-width="1.5"/>`;
 }).join('');
 if(!stats.dated) content+=`<text x="${width/2}" y="${height/2}" text-anchor="middle" class="chart-text">${t.noChart}</text>`;
 const latest=values.at(-1)||0;
 if(stats.dated&&state.mode==='cumulative') content+=`<text x="${x(values.length-1)+13}" y="${y(latest)+4}" fill="#16654d" font-size="13" font-weight="600">${latest}</text>`;
 return `<article class="panel" id="trajectory"><div class="panel-heading"><div><h3>${t.trendTitle}</h3><p class="panel-caption">${t.trendCaption}</p></div><div class="segmented" aria-label="${t.trendTitle}"><button data-mode="cumulative" aria-pressed="${state.mode==='cumulative'}">${t.cumulative}</button><button data-mode="daily" aria-pressed="${state.mode==='daily'}">${t.daily}</button></div></div><div class="chart-legend"><span><i class="legend-dot"></i>${state.mode==='daily'?t.dailyLegend:t.cumulativeLegend}</span><span>${state.start} — ${state.end}</span></div><p class="mobile-hint">${t.mobileScroll}</p><div class="trend-chart"><svg viewBox="0 0 ${width} ${height}" role="group" aria-label="${t.trendTitle}">${content}</svg></div>${note(t.trendNote)}<details class="data-details"><summary>${t.viewData}</summary><div class="data-scroll"><table><thead><tr><th>${t.date}</th><th>${t.dailyCount}</th><th>${t.cumulativeCount}</th></tr></thead><tbody>${stats.timeline.map(d=>`<tr><td>${d.date}</td><td>${d.daily}</td><td>${d.cumulative}</td></tr>`).join('')}</tbody></table></div></details></article>`;
}

function domainCharts() {
 const sorted=[...stats.domains].sort((a,b)=>b.count-a.count);
 const max=Math.max(...sorted.map(d=>d.count),1);
 const rows=stacked=>sorted.map(d=>{
  const text=`${name(d)}\n${t.total}: ${d.count} · ${t.direct}: ${d.A} · ${t.evaluation}: ${d.B}`;
  return `<button class="domain-row" data-domain="${d.id}" ${tipAttr(text)}><span class="bar-label">${name(d)}</span><span class="bar-track">${stacked?`<span class="bar-fill green" style="width:${d.A/max*100}%"></span><span class="bar-fill blue" style="width:${d.B/max*100}%"></span>`:`<span class="bar-fill single" style="width:${d.count/max*100}%"></span>`}</span><span class="bar-number">${d.count}</span></button>`;
 }).join('');
 return `<div class="grid-two"><article class="panel"><div class="panel-heading"><div><h3>${t.distribution}</h3><p class="panel-caption">${t.distributionCaption}</p></div><span class="panel-code">01</span></div><div class="chart-legend"><span><i class="legend-dot"></i>${stats.papers.length} ${t.papers}</span></div><div class="bar-list">${rows(false)}</div>${note(t.distributionNote)}</article><article class="panel"><div class="panel-heading"><div><h3>${t.tierTitle}</h3><p class="panel-caption">${t.tierCaption}</p></div><span class="panel-code">02</span></div><div class="chart-legend"><span><i class="legend-dot"></i>${t.direct} · ${stats.A}</span><span><i class="legend-dot blue"></i>${t.evaluation} · ${stats.B}</span></div><div class="bar-list">${rows(true)}</div>${note(t.tierNote)}</article></div>`;
}

function heatmap() {
 const palette=['#eef3eb','#d3e8ca','#a7c99a','#72a56b','#3c814e','#1b5c39'];
 const cellCounts=new Map();
 stats.papers.filter(p=>p.date).forEach(p=>{const key=p.domain+p.date;cellCounts.set(key,(cellCounts.get(key)||0)+1);});
 const max=Math.max(...cellCounts.values(),1);
 const selected=state.domain?data.domains.filter(d=>d.id===state.domain):data.domains;
 const color=count=>palette[count?Math.max(1,Math.ceil(count/max*5)):0];
 return `<article class="panel grid-wide"><div class="panel-heading"><div><h3>${t.heatTitle}</h3><p class="panel-caption">${t.heatCaption}</p></div><span class="panel-code">03</span></div><div class="heat-wrap"><div class="heat" style="--days:${stats.dates.length}"><div></div><div class="heat-month"><span>${fullDate(state.start)}</span><span>${fullDate(state.end)}</span></div><div></div>${stats.dates.map(day=>`<div class="heat-date">${Number(day.slice(-2))}</div>`).join('')}${selected.map(domain=>`<div class="heat-label">${name(domain)}</div>${stats.dates.map(day=>{const count=cellCounts.get(domain.id+day)||0;return `<button class="heat-cell" data-cell-domain="${domain.id}" data-cell-date="${day}" style="background:${color(count)}" ${tipAttr(`${name(domain)}\n${fullDate(day)} · ${count} ${t.papers}`)}></button>`;}).join('')}`).join('')}</div></div><div class="heat-scale"><span>0 · ${t.less}</span>${palette.map(c=>`<i style="background:${c}"></i>`).join('')}<span>${max} · ${t.more}</span></div>${note(t.heatNote)}</article>`;
}

function teamChart() {
 const width=470,height=210,left=30,base=170,ceiling=Math.max(...stats.teamBins.map(b=>b.count),1);
 const bins=stats.teamBins.map((b,i)=>{const x=left+i*87,h=b.count/ceiling*125;return `<rect class="chart-mark" tabindex="0" role="img" ${tipAttr(`${b.label} ${t.teamXAxis}\n${b.count} ${t.papers}`)} x="${x+6}" y="${base-h}" width="49" height="${Math.max(1,h)}" fill="${i===2?'#2d795b':'#a8bca7'}" rx="3"/><text x="${x+30.5}" y="${base-h-9}" text-anchor="middle" font-size="11" fill="#31573e">${b.count}</text><text x="${x+30.5}" y="${base+22}" text-anchor="middle" class="chart-text">${b.label}</text>`;}).join('');
 return `<article class="panel grid-wide"><div class="panel-heading"><div><h3>${t.teamTitle}</h3><p class="panel-caption">${t.teamCaption}</p></div><span class="panel-code">04</span></div><div class="team-layout"><svg class="team-plot" viewBox="0 0 ${width} ${height}" role="group" aria-label="${t.teamTitle}"><path d="M25 170H457" stroke="#dfe7dc"/>${bins}</svg><div class="team-definition"><strong>${t.teamHeadline}</strong>${t.teamText}<br><span>${stats.papers.length} ${t.teamSelected}</span></div></div></article>`;
}

function libraryRows() {
 const term=state.search.trim().toLocaleLowerCase();
 const rows=stats.papers.filter(p=>!term||[p.title,p.authors.join(' '),p.summary.en,p.summary.zh].some(v=>v.toLocaleLowerCase().includes(term)));
 return rows.sort((a,b) => {
  if (state.sort === 'team') return b.authors.length - a.authors.length;
  if (!a.date) return 1;
  if (!b.date) return -1;
  return (state.sort === 'oldest' ? 1 : -1) * a.date.localeCompare(b.date);
 });
}
function library() {
 const papers=libraryRows(), pageCount=Math.max(1,Math.ceil(papers.length/6));
 state.page=Math.max(1,Math.min(state.page,pageCount));
 const subset=papers.slice((state.page-1)*6,state.page*6);
 return `${sectionHead(t.section3,t.libraryTitle,t.libraryDesc)}<div class="library-toolbar"><label class="search-box">${icon('search')}<input id="search" type="search" placeholder="${t.search}" aria-label="${t.searchLabel}" value="${esc(state.search)}"></label><select class="sort-select" id="sort" aria-label="${t.sortLabel}">${[['newest',t.newest],['oldest',t.oldest],['team',t.teamSort]].map(([value,label])=>`<option value="${value}" ${value===state.sort?'selected':''}>${label}</option>`).join('')}</select><button class="button light" data-export>${icon('download')}${t.export}</button></div><div class="scope-summary"><strong class="library-count">${papers.length} ${t.matching}</strong><span>${t.libraryScope}</span></div><div class="paper-grid">${subset.length?subset.map(p=>`<article class="paper-card"><div class="paper-meta"><span class="tag ${p.tier==='B'?'b':''}">TIER ${p.tier}</span><span>${p.source} · ${t.preprint}</span><time ${p.date?`datetime="${p.date}"`:''}>${p.date?fullDate(p.date):t.unknown}</time></div><h3><a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${esc(p.title)}</a></h3><p class="paper-authors" title="${esc(p.authors.join(', '))}">${esc(p.authors.join(', '))}</p><p class="paper-summary">${esc(p.summary[state.lang])}</p><details><summary>${t.abstract}</summary><p class="full-summary">${esc(p.summary[state.lang])}</p></details><div class="paper-bottom"><div class="paper-card-foot"><span>${name(getDomain(p.domain))}</span><a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${t.readPaper}${icon('external')}</a></div></div></article>`).join(''):`<div class="empty-state"><strong>${t.empty}</strong><br>${t.emptyHelp}</div>`}</div><div class="pagination"><span>${t.page} ${state.page} ${t.of} ${pageCount}</span><div class="pagination-buttons"><button data-page="${state.page-1}" ${state.page===1?'disabled':''}>${t.previous}</button><button data-page="${state.page+1}" ${state.page===pageCount?'disabled':''}>${t.next}${icon('chevron')}</button></div></div>`;
}

function method() {
 return `<section class="section method-section" id="methodology"><div class="method-card"><div><div class="kicker">${t.section4}</div><h2 class="method-title">${t.methodTitle}</h2><p class="method-copy">${t.methodIntro}</p><div class="method-links"><a href="./data.json" download>${t.sourceData} ↗</a><a href="${data.repository}/blob/main/outputs/jev-literature-${data.cutoff}.json" target="_blank" rel="noopener noreferrer">${t.verifyRecord} ↗</a><a href="${data.repository}/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">${t.contribute} ↗</a></div></div><div class="method-points">${[1,2,3].map(i=>`<div class="method-point"><span class="method-index">0${i}</span><div><h4>${t['method'+i]}</h4><p>${t['method'+i+'Text']}</p></div></div>`).join('')}</div></div></section></div></main><footer class="footer"><div class="container footer-inner"><div><a class="brand" href="#"><span class="brand-symbol">J.</span>Awesome JEV Papers</a></div><div class="footer-note">${t.footerNote}<br>${t.footerLicense}</div><div class="footer-links"><a href="${data.repository}">${t.github}</a><a href="${data.repository}/blob/main/README.zh-CN.md">${t.chineseList}</a></div></div></footer>`;
}

function render(preserveFocus=false) {
 const focus=preserveFocus?document.activeElement?.id:null;
 const selection=focus==='search'?document.activeElement.selectionStart:null;
 t=copy[state.lang];stats=summarize(data,state);
 document.documentElement.lang=state.lang==='zh'?'zh-CN':'en';
 document.title=state.lang==='zh'?'Awesome JEV Papers · 交互式研究图谱':'Awesome JEV Papers · Research Atlas';
 root.innerHTML=hero()+`<section class="section" id="explore">${sectionHead(t.section1,t.growthTitle,t.growthDesc)}${filters()}${trajectory()}</section><section class="section" id="landscape">${sectionHead(t.section2,t.mapTitle,t.mapDesc)}${domainCharts()}${heatmap()}${teamChart()}</section><section class="section" id="library">${library()}</section>`+method();
 tip.hidden=true;
 if(focus){const input=document.getElementById(focus);input?.focus({preventScroll:true});if(selection!==null) input?.setSelectionRange(selection,selection);}
 document.querySelector('#announcer').textContent=`${t.results}: ${stats.papers.length} ${t.papers}`;
 const params=new URLSearchParams();params.set('lang',state.lang);
 for(const key of ['domain','tier'])if(state[key])params.set(key,state[key]);
 if(state.start!==data.start)params.set('start',state.start);
 if(state.end!==data.cutoff)params.set('end',state.end);
 if(state.mode!=='cumulative')params.set('mode',state.mode);
 history.replaceState(null,'',`${location.pathname}?${params}${location.hash}`);
}

root.addEventListener('click',event=>{
 const target=event.target.closest('button');if(!target||target.disabled)return;
 if(target.dataset.lang){state.lang=target.dataset.lang;try{localStorage.setItem('jev-atlas-language',state.lang);}catch{}render();return;}
 if(target.dataset.mode){state.mode=target.dataset.mode;render();return;}
 if(target.hasAttribute('data-reset')){Object.assign(state,{domain:'',tier:'',start:data.start,end:data.cutoff,page:1,error:false});render();return;}
 if(target.dataset.domain){state.domain=state.domain===target.dataset.domain?'':target.dataset.domain;state.page=1;render();return;}
 if(target.dataset.cellDomain){Object.assign(state,{domain:target.dataset.cellDomain,start:target.dataset.cellDate,end:target.dataset.cellDate,page:1,error:false});render();document.querySelector('#library').scrollIntoView({behavior:'smooth'});return;}
 if(target.dataset.page){state.page=Number(target.dataset.page);document.querySelector('#library').innerHTML=library();document.querySelector('#library').scrollIntoView({behavior:'smooth'});return;}
 if(target.hasAttribute('data-export')){const blob=new Blob([csvExport(libraryRows())],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`jev-papers-${state.start}-${state.end}.csv`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
});
root.addEventListener('change',event=>{
 const {id,value}=event.target;
 if(id==='domain-filter')state.domain=value;
 else if(id==='tier-filter')state.tier=value;
 else if(id==='sort')state.sort=value;
 else if(id==='start-filter'||id==='end-filter'){
  const start=document.querySelector('#start-filter').value,end=document.querySelector('#end-filter').value;
  if(!start||!end||start>end||start<data.start||end>data.cutoff){state.error=true;render(true);return;}
  state.start=start;state.end=end;state.error=false;
 }else return;
 state.page=1;render(true);
});
root.addEventListener('input',event=>{
 if(event.target.id==='search'){
  state.search=event.target.value;state.page=1;
  const selection=event.target.selectionStart;
  document.querySelector('#library').innerHTML=library();
  const input=document.querySelector('#search');input.focus({preventScroll:true});input.setSelectionRange(selection,selection);
 }
});
function showTip(target,x,y){
 tip.textContent=target.dataset.tip;tip.hidden=false;
 tip.style.left=Math.max(8,Math.min(x+13,innerWidth-tip.offsetWidth-10))+'px';
 tip.style.top=Math.max(8,Math.min(y+15,innerHeight-tip.offsetHeight-10))+'px';
}
root.addEventListener('pointermove',event=>{const target=event.target.closest('[data-tip]');if(target)showTip(target,event.clientX,event.clientY);else tip.hidden=true;});
root.addEventListener('pointerleave',()=>tip.hidden=true);
root.addEventListener('focusin',event=>{const target=event.target.closest('[data-tip]');if(target){const rect=target.getBoundingClientRect();showTip(target,rect.x+rect.width/2,rect.y+rect.height);}});
root.addEventListener('focusout',()=>tip.hidden=true);
window.addEventListener('scroll',()=>tip.hidden=true,{passive:true});
window.addEventListener('keydown',event=>{if(event.key==='Escape')tip.hidden=true;});

try {
 const response=await fetch('./data.json');if(!response.ok)throw new Error(`HTTP ${response.status}`);
 data=await response.json();
 state={lang:lang==='zh'?'zh':'en',domain:data.domains.some(d=>d.id===initialParams.get('domain'))?initialParams.get('domain'):'',tier:['A','B'].includes(initialParams.get('tier'))?initialParams.get('tier'):'',start:data.start,end:data.cutoff,mode:initialParams.get('mode')==='daily'?'daily':'cumulative',search:'',sort:'newest',page:1,error:false};
 const start=initialParams.get('start'),end=initialParams.get('end');
 if(start&&/^\d{4}-\d{2}-\d{2}$/.test(start)&&start>=data.start&&start<=data.cutoff)state.start=start;
 if(end&&/^\d{4}-\d{2}-\d{2}$/.test(end)&&end>=data.start&&end<=data.cutoff)state.end=end;
 if(state.start>state.end){state.start=data.start;state.end=data.cutoff;}
 render();
 if(location.hash)requestAnimationFrame(()=>document.querySelector(location.hash)?.scrollIntoView());
} catch(error){root.innerHTML=`<div class="boot"><span class="boot-mark">J.</span><h1>Could not load the research atlas<br>研究图谱加载失败</h1><p>${esc(error.message)}</p><p>Serve this folder over HTTP, then reload. 请通过 HTTP 服务访问此页面。</p><a class="button primary" href="https://github.com/Oscar-dzy/Awesome-jev-papers">Open GitHub</a></div>`;console.error(error);}
