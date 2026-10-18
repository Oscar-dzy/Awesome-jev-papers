"""Collect declared affiliations from official arXiv HTML; never infer from names.

This is a retrieval helper. Review the extracted front matter before matching QS.
Uses a serial request stream and records failures explicitly.
"""
import json
import time
import urllib.request
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]


def main():
    snapshot = json.loads((ROOT / 'outputs/jev-literature-2026-10-18.json').read_text(encoding='utf-8'))
    rows = {p['id']: p for p in snapshot['academic_records'] if p['decision'] == 'include'}
    destination = ROOT / 'outputs/affiliation-evidence-2026-10-18.json'
    result = json.loads(destination.read_text(encoding='utf-8')) if destination.exists() else {}
    for ident, paper in rows.items():
        if (ident in result and result[ident]['status'] != 'unavailable') or ident.startswith('doi:'):
            continue
        url = paper.get('version_url', paper['url']).replace('/abs/', '/html/')
        try:
            raw = urllib.request.urlopen(url, timeout=25).read()
            soup = BeautifulSoup(raw, 'html.parser')
            affiliations = list(dict.fromkeys(x.get_text(' ', strip=True).replace('Affiliation:', '', 1).strip() for x in soup.select('.ltx_role_affiliation')))
            authors = soup.select_one('.ltx_authors')
            result[ident] = dict(source=url, retrieved_on='2026-10-18', affiliations=affiliations,
                                 front_matter=authors.get_text(' ', strip=True) if authors else '',
                                 status='extracted' if affiliations else 'needs_review')
        except Exception as error:
            result[ident] = dict(source=url, status='unavailable', error=str(error))
        destination.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        print(ident, result[ident]['status'], flush=True)
        time.sleep(1)


if __name__ == '__main__':
    main()
