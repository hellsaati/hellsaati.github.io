import React from "react";
import styles from "./Stat.module.css";

export default function Stat({
  number,
  label,
  icon,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <div className={styles.number}>
        {number}
      </div>

      <div className={styles.label}>
        {label}
      </div>
    </div>
  );
}