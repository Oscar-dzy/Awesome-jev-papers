"""Cross-check deployed metadata against independent repository sources."""
import json
import re
import unittest
from collections import Counter
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]

class SourceTests(unittest.TestCase):
    def setUp(self):
        self.data=json.loads((ROOT/'docs/data.json').read_text(encoding='utf-8'))
        self.snapshot=json.loads((ROOT/'outputs'/('jev-literature-'+self.data['cutoff']+'.json')).read_text(encoding='utf-8'))

    def test_bilingual_entries_are_unique_and_match_snapshot_domains(self):
        included=[p for p in self.snapshot['academic_records'] if p['decision']=='include']
        for filename in ['README.md','README.zh-CN.md']:
            text=(ROOT/filename).read_text(encoding='utf-8')
            urls=re.findall(r'^- (?:🔥 )?\*\*\[.*?\]\((.*?)\)\*\*',text,re.M)
            self.assertEqual(len(urls),len(set(urls)))
            self.assertEqual(len(urls),self.snapshot['counts']['total_entries'])
            for domain in self.snapshot['organization']['domains']:
                start=text.index('<a id="'+domain['anchor']+'"></a>')
                end=text.find('\n<a id=',start+10)
                section=text[start:end if end>=0 else len(text)]
                for p in included:
                    if p['category']==domain['name']:
                        self.assertIn(']('+p['url']+')**',section,p['id'])

    def test_qs_population_and_lookup_integrity(self):
        path=ROOT/'outputs/qs-universities-2027.json'
        ranking={u['id']:u for u in json.loads(path.read_text(encoding='utf-8'))['universities']}
        self.assertTrue(any(p['qs']['status']=='verified' for p in self.data['papers']))
        for p in self.data['papers']:
            qs=p['qs']
            self.assertEqual(qs['edition'],2027)
            self.assertEqual(len({u['id'] for u in qs['universities']}),len(qs['universities']))
            for u in qs['universities']:
                if u['rank'] is not None:self.assertEqual(u['rank'],ranking[u['id']]['rank'])
            if qs['status']=='verified':
                self.assertTrue(qs['universities'])
                self.assertTrue(all(type(u['rank']) is int and u['rank']>0 for u in qs['universities']))
                self.assertTrue(qs['source'].startswith('https://arxiv.org/'))

    def test_counts_dates_and_domain_totals(self):
        self.assertEqual(len(self.data['papers']),self.snapshot['counts']['academic_included'])
        self.assertEqual(self.data['cutoff'],self.snapshot['verified_on'])
        for p in self.data['papers']:
            if p['date']:self.assertLessEqual(p['date'],self.data['cutoff'])
        counts=Counter(p['category'] for p in self.snapshot['academic_records'] if p['decision']=='include')
        for domain,count in counts.items():self.assertLessEqual(count,self.snapshot['counts']['categories'][domain])

if __name__=='__main__':unittest.main()
