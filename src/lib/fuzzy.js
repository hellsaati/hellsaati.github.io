const FOLD = { "\u0259": "e", "\u0131": "i", "\u00f6": "o", "\u00fc": "u", "\u00e7": "c", "\u015f": "s", "\u011f": "g" };

export function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/[\u0259\u0131\u00f6\u00fc\u00e7\u015f\u011f]/g, (c) => FOLD[c] || c);
}

function editDistanceAtMost1(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else { i++; j++; }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

function isSubsequence(q, t) {
  let i = 0;
  for (let j = 0; j < t.length && i < q.length; j++) if (t[j] === q[i]) i++;
  return i === q.length;
}

export function fuzzyScore(query, text) {
  const qTokens = norm(query).split(/[^a-z0-9+#]+/).filter(Boolean);
  if (!qTokens.length) return -1;
  const t = norm(text);
  const tTokens = t.split(/[^a-z0-9+#]+/).filter(Boolean);
  let cv = 0;

  for (const q of qTokens) {
    let bs = 0;
    if (t.includes(q)) bs = q.length * 3;
    for (const tt of tTokens) {
      if (bs >= q.length * 3) break;
      if (tt.startsWith(q)) bs = Math.max(bs, q.length * 2.5);
      else if (q.length >= 4 && editDistanceAtMost1(q, tt.slice(0, q.length + 1))) bs = Math.max(bs, q.length * 2 - 1);
      else if (q.length >= 4 && editDistanceAtMost1(q, tt)) bs = Math.max(bs, q.length * 2 - 1);
      else if (q.length >= 3 && isSubsequence(q, tt)) bs = Math.max(bs, q.length);
    }
    if (!bs) return -1;
    cv += bs;
  }
  return cv;
}

// Finds a short window of `content` around the first query-token match, for
// showing *why* a result matched when the hit came from body text rather
// than the title/tags. Returns null if nothing in `content` matches.
export function findSnippet(query, content, radius = 60) {
  if (!content) return null;
  const qTokens = norm(query).split(/[^a-z0-9+#]+/).filter(Boolean);
  if (!qTokens.length) return null;
  const normContent = norm(content);

  let bestIdx = -1;
  for (const q of qTokens) {
    const idx = normContent.indexOf(q);
    if (idx !== -1 && (bestIdx === -1 || idx < bestIdx)) bestIdx = idx;
  }
  if (bestIdx === -1) return null;

  const start = Math.max(0, bestIdx - radius);
  const end = Math.min(content.length, bestIdx + radius);
  let snippet = content.slice(start, end).replace(/\s+/g, " ").trim();
  if (start > 0) snippet = "…" + snippet;
  if (end < content.length) snippet = snippet + "…";
  return snippet;
}
