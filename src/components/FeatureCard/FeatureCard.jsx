import React from "react";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}