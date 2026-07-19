import React from "react";
import styles from "./styles.module.css";

export default function Header({ language }) {
  return (
    <div className={styles.header}>
      <div className={styles.dots}>
        <span />
        <span />
        <span />
      </div>

      <div className={styles.language}>
        {language || "text"}
      </div>
    </div>
  );
}