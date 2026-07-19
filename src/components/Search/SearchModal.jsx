import React, { useEffect, useMemo, useRef, useState } from "react";
import { useHistory } from "@docusaurus/router";
import { lessons } from "@site/src/data/lessons";
import { lessonContent } from "@site/src/data/lessonContent.generated";
import { fuzzyScore, findSnippet } from "@site/src/lib/fuzzy";
import styles from "./Search.module.css";

export default function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");
  const [pageResults, setPageResults] = useState([]);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  // Instant fuzzy matching over the full lesson catalogue: title, tags,
  // section — and now the full body text of each lesson (works in dev too,
  // content is extracted at build time by scripts/build-search-index.js).
  const lessonResults = useMemo(() => {
    if (!query.trim()) return [];
    return lessons
      .map((l) => {
        const content = lessonContent[l.slug] || "";
        const metaText = l.title + " " + l.slug + " " + l.tags.join(" ") + " " + l.section;
        return {
          lesson: l,
          score: fuzzyScore(query, metaText + " " + content),
          snippet: findSnippet(query, content),
        };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  }, [query]);

  // Full-text results from Pagefind (only available after "npm run build").
  useEffect(() => {
    let live = true;
    if (!query.trim()) {
      setPageResults([]);
      return;
    }
    const t = setTimeout(async () => {
      try {
        const pagefind = await import(/* webpackIgnore: true */ "/pagefind/pagefind.js");
        const res = await pagefind.search(query);
        const data = await Promise.all(res.results.slice(0, 4).map((r) => r.data()));
        if (live) setPageResults(data);
      } catch (e) {
        if (live) setPageResults([]);
      }
    }, 120);
    return () => {
      live = false;
      clearTimeout(t);
    };
  }, [query]);

  const items = useMemo(() => {
    const a = lessonResults.map((r) => ({
      type: r.lesson.docs ? "Lesson" : "Planned",
      title: r.lesson.title,
      meta: r.snippet || ("Lesson " + r.lesson.num + " · " + r.lesson.section),
      url: r.lesson.docs || "/roadmap",
    }));
    const seen = new Set(a.map((x) => x.url));
    const b = pageResults
      .filter((r) => !seen.has(r.url))
      .map((r) => ({ type: "Page", title: r.meta && r.meta.title ? r.meta.title : r.url, meta: r.excerpt, url: r.url, html: true }));
    return a.concat(b);
  }, [lessonResults, pageResults]);

  useEffect(() => setSelected(0), [query]);

  const go = (item) => {
    if (!item) return;
    onClose();
    if (item.url.startsWith("http")) window.location.href = item.url;
    else history.push(item.url.replace(window.location.origin, ""));
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(items[selected]);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.inputRow}>
          <span className={styles.inputIcon}>&#8981;</span>
          <input
            ref={inputRef}
            placeholder="Search lessons, tags, topics…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <kbd className={styles.kbd}>esc</kbd>
        </div>

        {query.trim() !== "" && (
          <div className={styles.results}>
            {items.length === 0 && <div className={styles.empty}>No results for "{query}"</div>}
            {items.map((item, i) => (
              <a
                key={item.url + i}
                className={i === selected ? styles.resultActive : styles.result}
                onMouseEnter={() => setSelected(i)}
                onClick={(e) => {
                  e.preventDefault();
                  go(item);
                }}
                href={item.url}
              >
                <span
                  className={styles.badge}
                  data-type={item.type}
                >
                  {item.type}
                </span>
                <span className={styles.resultBody}>
                  <strong>{item.title}</strong>
                  {item.html ? (
                    <p dangerouslySetInnerHTML={{ __html: item.meta }} />
                  ) : (
                    <p>{item.meta}</p>
                  )}
                </span>
              </a>
            ))}
            <div className={styles.footer}>
              <span>&#8593;&#8595; navigate</span>
              <span>&#8629; open</span>
              <span className={styles.footerRight}>{items.length} results &#183; fuzzy match</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
