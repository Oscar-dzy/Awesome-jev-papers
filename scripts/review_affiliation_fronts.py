"""Retrieve front matter for records whose HTML affiliation structure is incomplete."""
import json
import time
import urllib.request
from pathlib import Path
from bs4 import BeautifulSoup

root=Path(__file__).resolve().parents[1]
path=root/'outputs/affiliation-evidence-2026-10-18.json'
rows=json.loads(path.read_text(encoding='utf-8'))
extra={'2609.32160','2609.38850','2610.02046','2610.15537','2610.15742','2610.18615','2610.11392'}
for ident,row in rows.items():
    if (row['status']=='extracted' and ident not in extra) or 'front_context' in row:continue
    url=row['source']
    if row['status']=='unavailable':url='https://arxiv.org/html/'+ident
    try:
        soup=BeautifulSoup(urllib.request.urlopen(url,timeout=25).read(),'html.parser')
        article=soup.select_one('.ltx_document') or soup.select_one('article') or soup
        text=article.get_text(' ',strip=True)
        front=text.split('Abstract',1)[0]
        row['front_context']=front[:12000]
        row['front_context_source']=url
        print(ident,front[:1500],flush=True)
    except Exception as e:row['front_context_error']=str(e)
    path.write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    time.sleep(1)
