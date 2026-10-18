"""Reproduce the reviewed 18 October snapshot from locally cached API responses."""
import hashlib
import json
import re
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'outputs'
def read(name):
    return json.loads((OUT / name).read_text(encoding='utf-8'))
def save(name, value):
    (OUT / name).write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

def main():
    baseline = read('jev-literature-2026-10-14.json')
    discovery = read('discovery-2026-10-18.json')
    reviews = read('reviewed-additions-2026-10-18.json')
    revisions = read('reviewed-revisions-2026-10-18.json')
    domains = baseline['organization']['domains']
    record = {k:baseline[k] for k in ['schema_version','record_type','timezone','technical_sources','organization']}
    record.update(verified_on='2026-10-18', previous_readme_cutoff='2026-10-14', baseline_record='jev-literature-2026-10-14.json',
                  baseline_sha256=hashlib.sha256((OUT/'jev-literature-2026-10-14.json').read_bytes()).hexdigest(),
                  coverage_note='Search window ends 2026-10-18 15:59 UTC (Asia/Shanghai). Only announced/indexed records available at retrieval are covered. Unchanged reviews are inherited from the baseline; this is not an assertion that all submissions through the end of the day were available.')
    rows = {p['id']:{**p,'change':'retained'} for p in baseline['academic_records']}
    for paper in discovery['new']:
        p={**{k:v for k,v in paper.items() if k!='abstract'}, 'journal_ref':'', 'doi':'', 'change':'added', 'metadata_verification':'Official arXiv API retrieved 2026-10-18; original abstract screened.'}
        review=reviews.get(p['id'])
        if review:
            p.update(decision='include', tier=review['tier'], category=domains[review['domain']]['name'], reason='Direct Jev / typed-decision research or explicit evaluation; see bilingual reviewed summary.', summary=review['summary'])
        else:
            p.update(decision='exclude',reason='Keyword match in general statistics, physics, dual-process reasoning or model resource selection; abstract does not establish a Jev or typed-probability model study.')
        rows[p['id']]=p
    changes={}
    for paper in discovery['changed']:
        previous=rows[paper['id']]
        changes[paper['id']]={k:{'before':previous.get(k),'after':v} for k,v in paper.items() if k!='abstract' and previous.get(k)!=v}
        previous.update({k:v for k,v in paper.items() if k!='abstract'},change='revised',metadata_verification='Official arXiv API and revised abstract checked 2026-10-18.')
        previous['summary']=revisions[paper['id']]
    ns={'a':'http://www.w3.org/2005/Atom','o':'http://a9.com/-/spec/opensearch/1.1/','x':'http://arxiv.org/schemas/atom'}
    queries={}
    for key in ['jev','expanded']:
        path=OUT/f'arxiv-{key}-2026-10-18.xml'; feed=ET.parse(path).getroot(); ids=[]
        for e in feed.findall('a:entry',ns):
            ident=e.findtext('a:id','',ns).split('/')[-1].split('v')[0];ids.append(ident)
            if ident in rows:
                rows[ident]['journal_ref']=e.findtext('x:journal_ref','',ns)
                rows[ident]['doi']=e.findtext('x:doi','',ns)
        queries[key]={'query':baseline['queries'][key]['query'].replace('202610141559','202610181559'), 'total':int(feed.findtext('o:totalResults','0',ns)), 'retrieved':len(ids),'arxiv_ids':ids,'raw_response':path.name,'sha256':hashlib.sha256(path.read_bytes()).hexdigest()}
    record['queries']=queries
    record['academic_records']=sorted(rows.values(),key=lambda p:p['id'])
    record['academic_comparison']={'added_ids':list(reviews),'excluded_new_ids':[p['id'] for p in discovery['new'] if p['id'] not in reviews], 'removed_ids':[], 'changed_records':changes}
    included=[p for p in rows.values() if p['decision']=='include']
    categories=Counter(baseline['counts']['categories'])
    categories.update(domains[v['domain']]['name'] for v in reviews.values())
    record['counts']={**baseline['counts'],'distinct_academic_candidates':len(rows),'academic_included':len(included),'academic_excluded':len(rows)-len(included),'academic_added':len(reviews),'academic_revised':len(revisions),'total_entries':len(included)+13,'categories':dict(categories),'arxiv_preprints':len(included)-1}
    record['discovery_result']='25 new academic inclusions; 7 unrelated candidates excluded; 4 retained papers revised. Jev 1.14 release announcement was checked for quick-start currency, not added as a research paper. Existing technical sources are retained without claiming a fresh full audit.'
    record['limitations']=['Search and indexing lag; no exhaustive publisher or citation-graph coverage.','Google Scholar was not scraped; Scopus and Web of Science were unavailable without credentials.','Unchanged summaries and technical-source reviews retain their previous verification provenance.','Two additions have pre-launch v1 dates; their current revisions introduce Jev. Trend dates remain v1 and do not date the introduction of Jev content.']
    record['primary_page_retrievals']=['https://arxiv.org/html/2610.21046v1','https://arxiv.org/html/2610.19811v1','https://arxiv.org/html/2610.21412v1','https://typesafe.ai/blog/jev-1-14','https://docs.typesafe.ai/introduction','https://docs.typesafe.ai/introduction/quickstart']
    save('jev-literature-2026-10-18.json',record)
    for lang,file in [('en','README.md'),('zh','README.zh-CN.md')]:
        path=ROOT/file;text=path.read_text(encoding='utf-8')
        # Replace only reviewed retained entries; preserve all unrelated prose.
        for ident,summary in revisions.items():
            p=rows[ident]; pattern=r'^- (?:🔥 )?\*\*\[[^\n]+\]\(https://arxiv.org/abs/'+re.escape(ident)+r'\)\*\*.*\n  - .*'
            text=re.sub(pattern,lambda m:entry(p,summary[lang]),text,flags=re.M)
        for ident,review in sorted(reviews.items(),key=lambda kv:rows[kv[0]]['published']):
            p=rows[ident]
            if p['url']+')**' in text: continue
            start=text.index('<a id="'+domains[review['domain']]['anchor']+'"></a>')
            end=text.find('\n<a id=',start+10)
            if review['domain']==8:
                end=text.index('\n## Search and Verification Notes' if lang=='en' else '\n<a id="search-and-verification-notes"',start)
            if end<0: end=len(text)
            section=text[start:end];pos=None
            for m in re.finditer(r'^- (?:🔥 )?\*\*\[.*\n  - .*',section,re.M):
                date=re.search(r'<strong>(\d{4}-\d{2}-\d{2}(?: \d{2}:\d{2} UTC)?)</strong>',m.group())
                if not date or date.group(1)>p['published'][:16].replace('T',' ')+' UTC': pos=m.start();break
            if pos is None:pos=len(section.rstrip())+2
            # Keep undated entries under their existing subsection heading.
            for heading in ['### Publication Date Unverified','### 发布日期待核实','### Undated Live Reports','### 无日期动态报告']:
                h=section.find(heading)
                if h>=0:pos=min(pos,h)
            section=section[:pos]+entry(p,review['summary'][lang])+'\n\n'+section[pos:]
            text=text[:start]+section+text[end:]
        # Current metadata before the domain list only; historical verification remains intact.
        split=text.index('<a id="foundations-decision-models"></a>');head,body=text[:split],text[split:]
        head=head.replace('2026-10-14','2026-10-18').replace('14 October 2026','18 October 2026').replace('2026 年 10 月 14 日','2026 年 10 月 18 日')
        for old,new in [('174','199'),('161','186'),('160','185')]:head=re.sub(r'\b'+old+r'\b',new,head)
        for domain,count in categories.items():
            anchor=next(d['anchor'] for d in domains if d['name']==domain)
            head=re.sub(r'(\]\(#'+anchor+r'\) \| )\d+( \|)',lambda m:m.group(1)+str(count)+m.group(2),head)
        text=head+body
        if lang=='en':
            text=text.replace('**Cutoff:** 14 October 2026 (Asia/Shanghai).','**Cutoff:** 18 October 2026 (Asia/Shanghai).')
            text=text.replace('contains 174 entries as of the 14 October verification cutoff: 161 academic preprints','contains 199 entries as of the 18 October verification cutoff: 186 academic preprints')
            marker='The 14 October update reran'
            paragraph='The 18 October update adds **25 academic papers** and revises **4 retained entries**, after screening 32 new candidates and excluding 7 unrelated keyword hits. The collection now contains **185 arXiv preprints, one ResearchGate preprint and 13 technical sources (199 entries)**. Metadata and abstracts were checked through the official arXiv API, with targeted full-text scope checks. The newest included v1 is 15 October; indexing delays mean the cutoff is not a completeness guarantee. NeoHorse-1 and RedundancyBench retain pre-launch v1 dates: their later revisions introduce Jev. Existing technical reviews are inherited. The Jev 1.14 announcement informs the website introduction but is not counted as a paper. See the [18 October verification record](outputs/jev-literature-2026-10-18.json).\n\nThe paragraphs below preserve historical verification results.\n\n'
        else:
            text=text.replace('**截止日期：** 2026 年 10 月 14 日（Asia/Shanghai）。','**截止日期：** 2026 年 10 月 18 日（Asia/Shanghai）。')
            marker='10 月 14 日更新'
            paragraph='本次 **10 月 18 日更新新增 25 篇论文，修订 4 篇已有条目**；32 条新候选中排除 7 条无关关键词命中。现共 **199 条文献：185 篇 arXiv 预印本、1 篇 ResearchGate 预印本及 13 条技术来源**。通过 arXiv 官方 API 核对元数据和摘要，并对范围存疑项检查全文。最新收录的 v1 日期为 10 月 15 日；核验截止日期不保证已覆盖尚未公告或索引的投稿。NeoHorse-1 与 RedundancyBench 保留早于 Jev 发布的 v1 日期，Jev 内容来自后续修订。已有技术来源沿用先前审阅；Jev 1.14 公告用于网站介绍，不计为论文。详见[10 月 18 日核验记录](outputs/jev-literature-2026-10-18.json)。\n\n下文保留历史核验记录。\n\n'
        idx=text.find(marker)
        if idx>=0 and 'review-marker-18' not in text:
            line=text.rfind('\n',0,idx)+1;text=text[:line]+'<!-- review-marker-18 -->\n'+paragraph+text[line:]
        path.write_text(text,encoding='utf-8')
    print(record['counts'])

def entry(p,summary):
    stamp=p['published'][:16].replace('T',' ')+' UTC'
    return '- **['+p['title']+']('+p['url']+')**<br>📅 <strong>'+stamp+'</strong> · arXiv v1 · <strong>Tier '+p['tier']+'</strong> · '+', '.join(p['authors'])+'\n  - '+summary

if __name__=='__main__':main()
