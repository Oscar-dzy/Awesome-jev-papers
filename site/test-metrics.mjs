import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import {summarize,selectPapers,csvExport,dateRange} from '../docs/metrics.mjs';
import {copy} from '../docs/i18n.mjs';
const data=JSON.parse(readFileSync(new URL('../docs/data.json',import.meta.url),'utf8'));
const scope={domain:'',tier:'',start:data.start,end:data.cutoff};
test('global population, dated exclusions and additive charts reconcile',()=>{
 const s=summarize(data,scope);assert.equal(s.papers.length,124);assert.equal(s.dated,123);assert.equal(s.undated,1);
 assert.equal(s.timeline.at(-1).cumulative,123);assert.equal(s.domains.reduce((n,d)=>n+d.count,0),124);
 assert.equal(s.A+s.B,124);assert.equal(s.teamBins.reduce((n,b)=>n+b.count,0),124);
});
test('independent date count matches every plotted day',()=>{
 const s=summarize(data,scope);
 for(const day of s.timeline) assert.equal(day.daily,data.papers.filter(p=>p.date===day.date).length);
 assert.equal(s.timeline.find(d=>d.date==='2026-09-28').daily,15);
 assert.deepEqual(s.timeline.slice(-3).map(d=>d.daily),[0,0,0]);
});
test('every domain reconciles separately and date bins retain zeroes',()=>{
 for(const domain of data.domains){const s=summarize(data,{...scope,domain:domain.id});assert.equal(s.papers.length,data.papers.filter(p=>p.domain===domain.id).length);assert.equal(s.timeline.at(-1).cumulative,s.dated);assert.equal(s.dates.length,23);}
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
 const s=summarize(data,{...scope,start:'2026-10-11',end:'2026-10-11'});
 assert.equal(s.papers.length,0);assert.deepEqual(s.timeline,[{date:'2026-10-11',daily:0,cumulative:0}]);
});
test('CSV keeps quote and comma-containing fields intact',()=>{
 const csv=csvExport([{id:'test',title:'A, "quoted" title',authors:['One','Two'],date:null}]);
 assert.ok(csv.includes('"A, ""quoted"" title"'));assert.ok(csv.includes('"One; Two"'));assert.equal(csv.split('\r\n').length,2);
});
test('language dictionaries cover the same interface',()=>{assert.deepEqual(Object.keys(copy.en).sort(),Object.keys(copy.zh).sort());assert.ok(data.papers.every(p=>p.summary.en&&p.summary.zh));});
test('calendar bins cross month boundaries in UTC',()=>{assert.deepEqual(dateRange('2026-09-30','2026-10-02'),['2026-09-30','2026-10-01','2026-10-02']);});
