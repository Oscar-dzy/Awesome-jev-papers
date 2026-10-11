"""Checks for date semantics, category reconciliation and snapshot resolution."""

import copy
import hashlib
import json
import tempfile
import unittest
from datetime import date
from pathlib import Path

from plot_paper_trends import aggregate, publication_day, read_snapshot


def fixture():
    return {
        "verified_on": "2026-10-11",
        "organization": {"domains": [{"name": "A"}, {"name": "B"}]},
        "counts": {"academic_included": 3},
        "academic_records": [
            {"id": "one", "category": "A", "published": "2026-10-08T23:30:00Z", "decision": "include"},
            {"id": "two", "category": "B", "published": "2026-10-10T01:00:00+08:00", "decision": "include"},
            {"id": "undated", "category": "A", "published": None, "decision": "include"},
            {"id": "excluded", "category": "A", "published": "2026-10-10", "decision": "exclude"},
        ],
    }


class TrendTests(unittest.TestCase):
    def test_utc_conversion_and_naive_timestamp_rejection(self):
        self.assertEqual(publication_day("2026-10-10T01:00:00+08:00"), date(2026, 10, 9))
        with self.assertRaises(ValueError):
            publication_day("2026-10-10T01:00:00")

    def test_zero_filling_exclusions_and_domain_reconciliation(self):
        result = aggregate(fixture(), [])
        self.assertEqual(result.total_daily, [1, 1, 0, 0])
        self.assertEqual(result.daily, {"A": [1, 0, 0, 0], "B": [0, 1, 0, 0]})
        self.assertEqual(len(result.undated), 1)
        self.assertEqual(result.dates[-1], date(2026, 10, 11))

    def test_duplicates_and_count_mismatch_fail(self):
        record = fixture()
        record["academic_records"].append(copy.deepcopy(record["academic_records"][0]))
        with self.assertRaisesRegex(ValueError, "Duplicate"):
            aggregate(record, [])
        record = fixture()
        record["counts"]["academic_included"] = 4
        with self.assertRaisesRegex(ValueError, "total"):
            aggregate(record, [])

    def test_future_dates_and_unknown_domains_fail(self):
        record = fixture()
        record["academic_records"][0]["published"] = "2026-10-12"
        with self.assertRaisesRegex(ValueError, "after verification"):
            aggregate(record, [])
        record = fixture()
        record["academic_records"][0]["category"] = "unknown"
        with self.assertRaisesRegex(ValueError, "Unknown"):
            aggregate(record, [])

    def test_empty_dated_population_fails(self):
        record = fixture()
        for row in record["academic_records"]:
            row["published"] = None
        with self.assertRaisesRegex(ValueError, "No included papers"):
            aggregate(record, [])

    def test_increment_requires_verified_unchanged_baseline(self):
        with tempfile.TemporaryDirectory() as directory:
            baseline = Path(directory) / "base.json"
            baseline.write_text(json.dumps(fixture()), encoding="utf-8")
            increment = {
                "record_type": "incremental_verification", "verified_on": "2026-10-12",
                "baseline_record": baseline.name,
                "baseline_sha256": hashlib.sha256(baseline.read_bytes()).hexdigest(),
                "academic_comparison": {"added_ids": [], "removed_ids": [], "changed_records": {}},
            }
            path = Path(directory) / "latest.json"
            path.write_text(json.dumps(increment), encoding="utf-8")
            record, sources = read_snapshot(path)
            self.assertEqual(record["verified_on"], "2026-10-12")
            self.assertEqual(len(sources), 2)
            self.assertEqual(len(record["academic_records"]), 4)
            increment["academic_comparison"]["added_ids"] = ["new"]
            path.write_text(json.dumps(increment), encoding="utf-8")
            with self.assertRaisesRegex(ValueError, "complete academic_records"):
                read_snapshot(path)
            increment["academic_comparison"]["added_ids"] = []
            path.write_text(json.dumps(increment), encoding="utf-8")
            baseline.write_text("{}", encoding="utf-8")
            with self.assertRaisesRegex(ValueError, "SHA-256"):
                read_snapshot(path)


if __name__ == "__main__":
    unittest.main()
