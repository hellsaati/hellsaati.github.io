import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { sections, lessons, getLesson } from "../data/lessons";
import { useProgress } from "../lib/progress";
import styles from "./roadmap.module.css";

function statusOf(lesson, isDone) {
  if (isDone(lesson.id)) return "done";
  if (lesson.prereqs.every((p) => isDone(p))) return "next";
  return "locked";
}

const EDGE_COLORS = { done: "#16a34a", next: "#2563eb", locked: "#9ca3af55" };

export default function Roadmap() {
  const { isDone, toggle, done } = useProgress();
  const containerRef = useRef(null);
  const nodeRefs = useRef({});
  const [edges, setEdges] = useState([]);

  const computeEdges = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cRect = container.getBoundingClientRect();
    const next = [];
    for (const lesson of lessons) {
      const toEl = nodeRefs.current[lesson.id];
      if (!toEl) continue;
      for (const p of lesson.prereqs) {
        const fromEl = nodeRefs.current[p];
        if (!fromEl) continue;
        const a = fromEl.getBoundingClientRect();
        const b = toEl.getBoundingClientRect();
        const sameColumn = Math.abs(a.left - b.left) < 20;
        const from = sameColumn
          ? { x: a.left + a.width / 2, y: a.bottom }
          : { x: a.right, y: a.top + a.height / 2 };
        const to = sameColumn
          ? { x: b.left + b.width / 2, y: b.top }
          : { x: b.left, y: b.top + b.height / 2 };
        const st = isDone(p) ? (isDone(lesson.id) ? "done" : "next") : "locked";
        next.push({
          key: p + "-" + lesson.id,
          x1: from.x - cRect.x + container.scrollLeft,
          y1: from.y - cRect.y + container.scrollTop,
          x2: to.x - cRect.x + container.scrollLeft,
          y2: to.y - cRect.y + container.scrollTop,
          status: st,
        });
      }
    }
    setEdges(next);
  }, [isDone]);

  useEffect(() => {
    computeEdges();
    window.addEventListener("resize", computeEdges);
    return () => window.removeEventListener("resize", computeEdges);
  }, [computeEdges, done]);

  return (
    <Layout title="Roadmap" description="Lesson roadmap">
      <main className={styles.page}>
        <div className={styles.head}>
          <h1>Roadmap</h1>
          <p>
            Xətlər ön şərtləri göstərir.
            Dərsi tamamladıqdan sonra növbəti dərslər açılır.
          </p>
          <div className={styles.legend}>
            <span><i data-s="done" /> Completed</span>
            <span><i data-s="next" /> Available</span>
            <span><i data-s="locked" /> Locked</span>
          </div>
        </div>

        <div className={styles.canvas} ref={containerRef}>
          <svg className={styles.edges}>
            {edges.map((e) => (
              <line
                key={e.key}
                x1={e.x1}
                y1={e.y1}
                x2={e.x2}
                y2={e.y2}
                stroke={EDGE_COLORS[e.status]}
                strokeWidth="2"
                strokeDasharray={e.status === "next" ? "5 4" : undefined}
              />
            ))}
          </svg>

          <div className={styles.columns}>
            {sections.map((sec) => (
              <div key={sec.id} className={styles.column}>
                <div className={styles.columnTitle}>{sec.numeral}. {sec.title}</div>
                {sec.lessons.map((l) => {
                  const st = statusOf(l, isDone);
                  const card = (
                    <div
                      className={styles.node}
                      data-status={st}
                      ref={(el) => (nodeRefs.current[l.id] = el)}
                    >
                      <div className={styles.nodeTop}>
                        <span>
                          {l.num}
                          {st === "done" ? " · DONE ✓" : st === "next" ? " · NEXT →" : ""}
                        </span>
                        <button
                          className={styles.nodeCheck}
                          title={isDone(l.id) ? "Mark as not completed" : "Mark as completed"}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggle(l.id);
                          }}
                        >
                          {isDone(l.id) ? "✓" : "○"}
                        </button>
                      </div>
                      <div className={styles.nodeTitle}>{l.title}</div>
                    </div>
                  );
                  return l.docs ? (
                    <Link key={l.id} to={l.docs} className={styles.nodeLink}>{card}</Link>
                  ) : (
                    <div key={l.id} className={styles.nodeLink}>{card}</div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
