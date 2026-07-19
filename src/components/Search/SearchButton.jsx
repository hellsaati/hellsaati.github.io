import React, { useEffect, useState } from "react";
import SearchModal from "./SearchModal";
import styles from "./Search.module.css";

// Mounted in the navbar via src/theme/NavbarItem/ComponentTypes.js ("custom-search").
export default function SearchButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listener = (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      const typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <>
      <button className={styles.searchButton} onClick={() => setOpen(true)} aria-label="Search">
        <span className={styles.searchIcon}>&#8981;</span>
        <span className={styles.searchLabel}>Search</span>
        <kbd className={styles.kbd}>Ctrl K</kbd>
      </button>
      {open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  );
}
