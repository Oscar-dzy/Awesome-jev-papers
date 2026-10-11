export function dateRange(start, end) {
  const result = [];
  for (let day = new Date(start + 'T00:00:00Z'); day <= new Date(end + 'T00:00:00Z'); day.setUTCDate(day.getUTCDate() + 1)) result.push(day.toISOString().slice(0, 10));
  return result;
}

export function selectPapers(data, scope) {
  const fullWindow = scope.start === data.start && scope.end === data.cutoff;
  return data.papers.filter(p => (!scope.domain || p.domain === scope.domain)
    && (!scope.tier || p.tier === scope.tier)
    && (p.date ? p.date >= scope.start && p.date <= scope.end : fullWindow));
}

export function summarize(data, scope) {
  const papers = selectPapers(data, scope);
  const dates = dateRange(scope.start, scope.end);
  const counts = new Map(dates.map(day => [day, 0]));
  for (const paper of papers) if (paper.date) counts.set(paper.date, (counts.get(paper.date) || 0) + 1);
  let cumulative = 0;
  const timeline = dates.map(date => ({date, daily: counts.get(date), cumulative: cumulative += counts.get(date)}));
  const domains = data.domains.map(domain => {
    const rows = papers.filter(p => p.domain === domain.id);
    return {...domain, count: rows.length, dated: rows.filter(p => p.date).length,
      A: rows.filter(p => p.tier === 'A').length, B: rows.filter(p => p.tier === 'B').length};
  });
  const teamBins = [{label: '1', low: 1, high: 1}, {label: '2–3', low: 2, high: 3},
    {label: '4–6', low: 4, high: 6}, {label: '7–10', low: 7, high: 10}, {label: '11+', low: 11, high: Infinity}]
    .map(bin => ({...bin, count: papers.filter(p => p.authors.length >= bin.low && p.authors.length <= bin.high).length}));
  return {papers, dates, timeline, domains, teamBins, dated: papers.filter(p => p.date).length,
    undated: papers.filter(p => !p.date).length, activeDomains: domains.filter(d => d.count).length,
    A: papers.filter(p => p.tier === 'A').length, B: papers.filter(p => p.tier === 'B').length};
}

export function csvExport(papers) {
  const cell = value => '"' + String(value ?? '').replaceAll('"', '""') + '"';
  const columns = ['id', 'title', 'date', 'domain', 'tier', 'source', 'authors', 'url'];
  return '\ufeff' + [columns.join(','), ...papers.map(p => columns.map(k => cell(k === 'authors' ? p.authors.join('; ') : p[k])).join(','))].join('\r\n');
}
