import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { sections, lessons } from "../data/lessons";
import { useProgress } from "../lib/progress";
import styles from "./index.module.css";

function LevelPill({ level }) {
  return <span className={styles.pill} data-level={level}>{level}</span>;
}

function LessonRow({ lesson, isDone, toggle }) {
  const done = isDone(lesson.id);
  const inner = (
    <>
      <button
        className={done ? styles.checkDone : styles.check}
        title={done ? "Mark as not completed" : "Mark as completed"}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle(lesson.id);
        }}
      >
        {done ? "✓" : "✗"}
      </button>
      <span className={styles.rowBody}>
        <span className={styles.rowTitle}>
          {lesson.title}
          {!lesson.docs && <span className={styles.soon}>Tezliklə</span>}
        </span>
        <span className={styles.rowTags}>{lesson.tags.join(" · ")}</span>
      </span>
      <LevelPill level={lesson.level} />
      <span className={styles.rowMeta}>{lesson.problems} problems</span>
      <span className={styles.rowMetaSmall}>{lesson.duration}</span>
    </>
  );

  return lesson.docs ? (
    <Link className={styles.row} to={lesson.docs}>{inner}</Link>
  ) : (
    <div className={styles.rowDisabled}>{inner}</div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { isDone, toggle } = useProgress();
  const doneCount = lessons.filter((l) => isDone(l.id)).length;
  const next = lessons.find((l) => !isDone(l.id) && l.docs);

  return (
    <Layout title={siteConfig.title} description="Competitive Programming Kampı">
      <main className={styles.wrap}>
        <aside className={styles.sidebar}>
          <div className={styles.progressBlock}>
            <div className={styles.sideLabel}>Your progress</div>
            <div className={styles.progressRow}>
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: (doneCount / lessons.length) * 100 + "%" }}
                />
              </div>
              <span className={styles.progressCount}>{doneCount}/{lessons.length}</span>
            </div>
          </div>
          <nav className={styles.sideNav}>
            {sections.map((sec) => {
              const d = sec.lessons.filter((l) => isDone(l.id)).length;
              return (
                <a key={sec.id} href={"#" + sec.id} className={styles.sideLink}>
                  {sec.title}
                  <span>{d}/{sec.lessons.length}</span>
                </a>
              );
            })}
          </nav>
        </aside>

        <div className={styles.main}>
          <section className={styles.heroCard}>
            <h1>"Həll saatı" kampı</h1>
            <p>
              “Addım-addım dərindən öyrən”: 28 həll saatı: qeydlər, kod nümunələri
              və hər mövzu üzrə seçilmiş məsələlər.
            </p>
            <div className={styles.heroButtons}>
              {next && (
                <Link className={styles.primaryBtn} to={next.docs}>
                  Davam et: {next.title} →
                </Link>
              )}
              {/* <Link className={styles.secondaryBtn} to="/roadmap">Roadmap</Link> */}
              <a
                className={styles.secondaryBtn}
                href="https://discord.gg/Md5KZVYBS8"
                target="_blank"
                rel="noreferrer"
              > Discord
              </a>
              <a
                className={styles.secondaryBtn}
                href="https://www.youtube.com/playlist?list=PLqUiUWvHaN-CWHsHxtA0-_nAGkhUi3Xc2"
                target="_blank"
                rel="noreferrer"
              > Videolar
              </a>
            </div>
          </section>

          {sections.map((sec) => (
            <section key={sec.id} id={sec.id} className={styles.section}>
              <div className={styles.sectionHead}>
                <h2>{sec.numeral}. {sec.title}</h2>
                <span>
                  {sec.lessons.length} lessons · {sec.lessons.reduce((a, l) => a + l.problems, 0)} problems
                </span>
              </div>
              <div className={styles.rows}>
                {sec.lessons.map((l) => (
                  <LessonRow key={l.id} lesson={l} isDone={isDone} toggle={toggle} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
}
