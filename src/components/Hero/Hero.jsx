import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blur1}/>
      <div className={styles.blur2}/>

      <h1>Competitive Programming</h1>

      <p>
        Learn from beginner level to IOI through structured lessons,
        notes and practice.
      </p>
    </section>
  );
}