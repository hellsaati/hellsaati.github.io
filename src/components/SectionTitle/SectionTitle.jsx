import React from "react";
import styles from "./SectionTitle.module.css";

export default function SectionTitle({
  title,
  subtitle,
  center = false,
}) {
  return (
    <div
      className={`${styles.wrapper} ${
        center ? styles.center : ""
      }`}
    >
      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}