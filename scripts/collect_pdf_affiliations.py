"""Read only the first PDF page for affiliations missing from arXiv HTML."""
import io
import json
import time
import urllib.request
from pathlib import Path
from pypdf import PdfReader

root=Path(__file__).resolve().parents[1]
snapshot=json.loads((root/'outputs/jev-literature-2026-10-18.json').read_text(encoding='utf-8'))
ids=set('2609.30186 2609.30243 2609.30706 2609.30922 2609.33538 2609.33843 2609.35286 2609.36059 2609.38850 2610.00437 2610.02048 2610.02076 2610.02267 2610.06354 2610.08155 2610.08775 2610.14112 2610.16967 2610.17175 2610.22276 2610.19644 2610.18615 2610.32160'.split())
path=root/'outputs/pdf-affiliation-evidence-2026-10-18.json'
result=json.loads(path.read_text(encoding='utf-8')) if path.exists() else {}
for p in snapshot['academic_records']:
    if p['id'] not in ids or p['id'] in result:continue
    url=p['version_url'].replace('/abs/','/pdf/')
    try:
        raw=urllib.request.urlopen(url,timeout=35).read()
        text=PdfReader(io.BytesIO(raw)).pages[0].extract_text()
        result[p['id']]={'source':url,'first_page':text,'retrieved_on':'2026-10-18'}
        print(p['id'],'retrieved',flush=True)
    except Exception as e:result[p['id']]={'source':url,'error':str(e)}
    path.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    time.sleep(1)
