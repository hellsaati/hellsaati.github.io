import React, { useState } from "react";
import styles from "./CopyButton.module.css";

export default function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      className={styles.button}
      onClick={copy}
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}