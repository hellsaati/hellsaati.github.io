import React from "react";
import styles from "./ProblemCard.module.css";

const colors = {
  Easy: "#22c55e",
  Medium: "#f59e0b",
  Hard: "#ef4444",
};

export default function ProblemCard({
  name,
  platform,
  difficulty,
  url,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <div className={styles.header}>
        <h3>{name}</h3>

        <span
          className={styles.badge}
          style={{
            background: colors[difficulty] || "#3b82f6",
          }}
        >
          {difficulty}
        </span>
      </div>

      <p>{platform}</p>

      <span className={styles.link}>
        Solve →
      </span>
    </a>
  );
}