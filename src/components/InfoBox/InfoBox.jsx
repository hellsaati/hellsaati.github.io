import React from "react";
import styles from "./InfoBox.module.css";

export default function InfoBox({
  title,
  children,
  type = "info",
}) {

  return (

    <div className={`${styles.box} ${styles[type]}`}>

      <div className={styles.title}>
        {title}
      </div>

      <div className={styles.content}>
        {children}
      </div>

    </div>

  );

}