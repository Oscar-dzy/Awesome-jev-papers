"""Join reviewed paper affiliations to a frozen QS edition, conservatively.

Only institution names in paper front matter are matched. Author emails, names,
citation lists and research collaborators never supply affiliations. Rank bands
and uncertain campus mappings remain non-numeric.
"""
import json
import re
import unicodedata
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'outputs'
def read(name):return json.loads((OUT/name).read_text(encoding='utf-8'))
def norm(s):
    s=s.replace('–','-').replace('—','-').replace('’',"'")
    s=unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode().lower()
    return ' '.join(re.sub(r'[^a-z0-9]+',' ',s).split())

def build():
    ranking=read('qs-universities-2027.json')
    universities=ranking['universities']
    aliases={}
    for u in universities:
        for name in [u['name'],re.sub(r'\([^)]*\)','',u['name']).strip()]:
            key=norm(name)
            if key.startswith('the '):key=key[4:]
            if len(key)>5:aliases[key]=u
    extra={
      'Nanyang Technological University':'Nanyang Technological University, Singapore (NTU Singapore)',
      'UNSW':'The University of New South Wales (UNSW Sydney)',
      'HKUST':'The Hong Kong University of Science and Technology',
      'Chinese University of Hong Kong':'The Chinese University of Hong Kong (CUHK)',
      'City University of Hong Kong':'City University of Hong Kong (CityUHK)',
      'Pennsylvania State University':'Pennsylvania State University',
      'University of Wisconsin Madison':'University of Wisconsin-Madison',
      'University of Minnesota Twin Cities':'University of Minnesota (System)',
      'University of Minnesota':'University of Minnesota (System)',
      'University of Science and Technology of Chine':'University of Science and Technology of China',
      'Beijing University of Aeronautics and Astronautics':'Beihang University (former BUAA)',
      'RPTU Kaiserslautern':'University of Kaiserslautern-Landau (RPTU)',
      'University of Georgia':'The University of Georgia',
      'University of Bonn':'Rheinische Friedrich-Wilhelms-Universität Bonn',
      'University of Potsdam':'Universität Potsdam',
      'University of Tubingen':'Eberhard Karls Universität Tübingen',
      'KAIST':'KAIST',
    }
    for a,b in extra.items():
        match=next((u for u in universities if norm(u['name'])==norm(b)),None)
        if match:aliases[norm(a)]=match
    # These names must not inherit a shorter, different institution's rank.
    separate=['Hong Kong University of Science and Technology Guangzhou','CUHK Shenzhen','Chinese University of Hong Kong Shenzhen',
              'New York University Abu Dhabi','Korea University Sejong Campus','Northeastern University China',
              'Sofia University','MBZUAI','University of Chinese Academy of Sciences','Singapore University of Technology and Design','Shanghai Ocean University',
              'Rutgers University','Indiana University','Northeastern University campus unverified',
              'Texas State University','Anadolu University','Mersin University','Changsha University of Science and Technology',
              'Guangdong Polytechnic Normal University','Federal University of Pampa','Shanxi University','Dalian Maritime University',
              'Ho Chi Minh University of Education','University of Information Technology','Vietnam National University Ho Chi Minh City',
              'University of California Merced','United International University','King Abdullah University of Science and Technology',
              'Bocconi University','Universite de Technologie de Compiegne','Sant Anna School of Advanced Studies',
              'Mohamed bin Zayed University of Artificial Intelligence','Georgian College','Anhui University of Science and Technology','Guangxi Normal University',
              'Southwestern University of Finance and Economics','Shenyang Jianzhu University','Shenyang University']
    for name in separate:
        exact=next((u for u in universities if norm(u['name'])==norm(name)),None)
        aliases[norm(name)]=exact or {'id':'unverified-'+norm(name).replace(' ','-'),'name':name,'rank':None,'rank_label':None}
    evidence=read('affiliation-evidence-2026-10-18.json')
    reviews=read('affiliation-review-2026-10-18.json')
    snapshot=read('jev-literature-2026-10-18.json')
    patterns=[(re.compile(r'(?<![a-z0-9])'+re.escape(alias)+r'(?![a-z0-9])'),u)
              for alias,u in sorted(aliases.items(),key=lambda x:-len(x[0]))]
    result={};unresolved=[]
    for p in snapshot['academic_records']:
        if p['decision']!='include':continue
        e=evidence.get(p['id'],{});override=reviews.get(p['id'],{})
        text=' | '.join(e.get('affiliations',[]))
        if 'text' in override:text=override['text']
        # An explicit front-matter review is required for a nonstandard layout.
        approved=e.get('status')=='extracted' or override.get('reviewed',False)
        remaining=' '+norm(text)+' '; found={}
        for pattern,u in patterns:
            if pattern.search(remaining):
                found[u['id']]=u;remaining=pattern.sub(' ',remaining)
        # Universities not found in the frozen dictionary cannot disappear.
        remaining=remaining.replace('university park',' ').replace('university drive',' ')
        unknown=bool(re.search(r'\b(university|universiti|universite|universidad|universidade|polytechnic|institute of technology)\b',remaining))
        if unknown:unresolved.append((p['id'],text,remaining))
        status='verified' if approved and found and not unknown and all(u['rank'] for u in found.values()) else 'pending'
        if override.get('no_university'):status='no_university'
        result[p['id']]={'edition':2027,'status':status,'universities':list(found.values()),'source':override.get('source',e.get('front_context_source',e.get('source',p['url']))),
                         'affiliation_text':text,'review_note':override.get('note','Declared paper affiliations; missing or non-numeric ranks remain pending.')}
    (OUT/'paper-affiliations-2026-10-18.json').write_text(json.dumps({'edition':2027,'ranking_source':ranking['source'],'ranking_download':ranking['download_source'],'ranking_sha256':ranking['sha256'],'papers':result},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    from collections import Counter
    print(Counter(r['status'] for r in result.values()))
    for ident,text,residual in unresolved:print(ident,text,'RESIDUAL',residual)
    return result

if __name__=='__main__':build()
