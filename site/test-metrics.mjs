import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import {summarize,selectPapers,csvExport,dateRange,qsRankSum,sortPapers} from '../docs/metrics.mjs';
import {copy} from '../docs/i18n.mjs';
const data=JSON.parse(readFileSync(new URL('../docs/data.json',import.meta.url),'utf8'));
const scope={domain:'',tier:'',start:data.start,end:data.cutoff};
test('global population, dated exclusions and additive charts reconcile',()=>{
 const selected=data.papers.filter(p=>!p.date||(p.date>=data.start&&p.date<=data.cutoff));
 const total=selected.length, dated=selected.filter(p=>p.date).length;
 const s=summarize(data,scope);assert.equal(s.papers.length,total);assert.equal(s.dated,dated);assert.equal(s.undated,total-dated);
 assert.equal(s.timeline.at(-1).cumulative,dated);assert.equal(s.domains.reduce((n,d)=>n+d.count,0),total);
 assert.equal(s.A+s.B,total);assert.equal(s.teamBins.reduce((n,b)=>n+b.count,0),total);
});
test('independent date count matches every plotted day',()=>{
 const s=summarize(data,scope);
 for(const day of s.timeline) assert.equal(day.daily,data.papers.filter(p=>p.date===day.date).length);
 assert.equal(s.timeline.find(d=>d.date==='2026-09-28').daily,15);
 assert.equal(s.timeline.at(-1).date,data.cutoff);
});
test('every domain reconciles separately and date bins retain zeroes',()=>{
 const days=(Date.parse(data.cutoff)-Date.parse(data.start))/86400000+1;
 for(const domain of data.domains){const s=summarize(data,{...scope,domain:domain.id});assert.equal(s.papers.length,data.papers.filter(p=>p.domain===domain.id&&(!p.date||(p.date>=data.start&&p.date<=data.cutoff))).length);assert.equal(s.timeline.at(-1).cumulative,s.dated);assert.equal(s.dates.length,days);}
});

test('website observation window starts September 15 without rewriting earlier publication dates',()=>{
 assert.equal(data.start,'2026-09-15');
 const s=summarize(data,scope);
 assert.equal(s.timeline[0].date,'2026-09-15');
 assert.equal(s.timeline[0].cumulative,0);
 assert.ok(data.papers.some(p=>p.date&&p.date<data.start));
 assert.ok(s.papers.every(p=>!p.date||p.date>=data.start));
 assert.equal(data.papers.find(p=>p.id==='2605.29893').date,'2026-05-28');
});
test('combined date domain and tier filters use intersection',()=>{
 const s=summarize(data,{...scope,domain:'trustworthy-ai-security',tier:'B',start:'2026-09-27',end:'2026-09-27'});
 const expected=data.papers.filter(p=>p.domain==='trustworthy-ai-security'&&p.tier==='B'&&p.date==='2026-09-27');
 assert.deepEqual(s.papers.map(p=>p.id),expected.map(p=>p.id));assert.equal(s.timeline.length,1);assert.equal(s.undated,0);
});
test('undated paper included in full scope but excluded from a narrowed window',()=>{
 assert.equal(selectPapers(data,scope).filter(p=>!p.date).length,1);
 assert.equal(selectPapers(data,{...scope,start:'2026-10-01'}).filter(p=>!p.date).length,0);
});
test('empty selections produce finite zero totals',()=>{
 const s=summarize(data,{...scope,domain:'no-such-domain',start:'2026-10-11',end:'2026-10-11'});
 assert.equal(s.papers.length,0);assert.deepEqual(s.timeline,[{date:'2026-10-11',daily:0,cumulative:0}]);
});
test('CSV keeps quote and comma-containing fields intact',()=>{
 const csv=csvExport([{id:'test',title:'A, "quoted" title',authors:['One','Two'],date:null}]);
 assert.ok(csv.includes('"A, ""quoted"" title"'));assert.ok(csv.includes('"One; Two"'));assert.equal(csv.split('\r\n').length,2);
});
test('language dictionaries cover the same interface',()=>{assert.deepEqual(Object.keys(copy.en).sort(),Object.keys(copy.zh).sort());assert.ok(data.papers.every(p=>p.summary.en&&p.summary.zh));});
test('calendar bins cross month boundaries in UTC',()=>{assert.deepEqual(dateRange('2026-09-30','2026-10-02'),['2026-09-30','2026-10-01','2026-10-02']);});

test('QS sums deduplicate schools and refuse partial or missing ranks',()=>{
 const p={qs:{status:'verified',universities:[{id:'a',rank:10},{id:'a',rank:10},{id:'b',rank:20}]}};
 assert.equal(qsRankSum(p),30);
 assert.equal(qsRankSum({...p,qs:{...p.qs,status:'pending'}}),null);
 assert.equal(qsRankSum({qs:{status:'verified',universities:[{id:'a',rank:null}]}}),null);
 assert.equal(qsRankSum({qs:{status:'verified',universities:[]}}),null);
 assert.equal(qsRankSum({}),null);
});
test('QS ordering keeps missing values last, resolves ties, and does not mutate input',()=>{
 const p=(id,date,rank)=>({id,date,authors:[],qs:{status:rank?'verified':'pending',universities:[{id:'u',rank}]}});
 const rows=[p('missing','2026-10-18',null),p('older','2026-10-14',30),p('z','2026-10-15',30),p('a','2026-10-15',30),p('best',null,4)];
 assert.deepEqual(sortPapers(rows,'qs').map(p=>p.id),['best','a','z','older','missing']);
 assert.equal(rows[0].id,'missing');
 assert.equal(sortPapers(rows,'oldest').at(-1).id,'best');
 const csv=csvExport(rows);assert.ok(csv.includes('qs_rank_sum'));assert.ok(csv.includes('pending'));
});
test('every numeric QS sum has a source and complete positive ranks',()=>{
 for(const p of data.papers){
  if(qsRankSum(p)!==null){assert.ok(p.qs.source.startsWith('https://arxiv.org/'));assert.equal(p.qs.edition,2027);assert.ok(p.qs.universities.every(u=>u.name&&u.id&&u.rank>0));}
 }
});
