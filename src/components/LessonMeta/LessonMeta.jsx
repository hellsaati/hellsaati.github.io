import React from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { lessons } from "@site/src/data/lessons";
import { useProgress } from "@site/src/lib/progress";
import styles from "./LessonMeta.module.css";

// Shown at the top of every lesson doc: meta line + "mark completed" toggle.
export default function LessonMeta() {
  const { metadata } = useDoc();
  const { isDone, toggle } = useProgress();

  const permalink = metadata.permalink.replace(/\/$/, "");
  const lesson = lessons.find((l) => l.docs === permalink);
  if (!lesson) return null;

  const done = isDone(lesson.id);

  return (
    <div className={styles.bar}>
      <span>Lesson {lesson.num}</span>
      <span className={styles.dot}>·</span>
      <span>{lesson.duration}</span>
      <span className={styles.dot}>·</span>
      <span className={styles.pill} data-level={lesson.level}>{lesson.level}</span>
      <button
        className={done ? styles.toggleDone : styles.toggle}
        onClick={() => toggle(lesson.id)}
      >
        {done ? "✓ Completed" : "○ Mark completed"}
      </button>
    </div>
  );
}
