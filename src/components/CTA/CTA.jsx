import React from "react";
import Link from "@docusaurus/Link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>

      <h2>Hazırsan?</h2>

      <p>
        Dərslərə başla və informatika olimpiadalarına
        sistemli şəkildə hazırlaş.
      </p>

      <div className={styles.buttons}>

        <Link
          to="/roadmap"
          className={styles.primary}
        >
          Roadmap
        </Link>

        <a
          href="https://discord.gg/qa3taU99E"
          target="_blank"
          rel="noreferrer"
          className={styles.secondary}
        >
          Discord
        </a>

      </div>

    </section>
  );
}