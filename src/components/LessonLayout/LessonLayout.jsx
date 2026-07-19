import React from "react";
import Link from "@docusaurus/Link";
import styles from "./LessonLayout.module.css";

export default function LessonLayout({
    title,
    difficulty,
    time,
    children,
    previous,
    next,
    problems = []
}) {

    const colors = {
        beginner: "#22c55e",
        intermediate: "#f59e0b",
        advanced: "#ef4444"
    };

    return (
        <>

            <header className={styles.header}>

                <div
                    className={styles.badge}
                    style={{
                        background: colors[difficulty]
                    }}
                >
                    {difficulty}
                </div>

                <h1>{title}</h1>

                <div className={styles.info}>

                    <div>
                        ⏱ {time}
                    </div>

                    <div>
                        📝 {problems.length} Problems
                    </div>

                </div>

            </header>

            <article className={styles.content}>
                {children}
            </article>

            {problems.length > 0 && (

                <section className={styles.practice}>

                    <h2>Practice</h2>

                    <div className={styles.problemGrid}>

                        {problems.map((p) => (

                            <a
                                key={p.name}
                                href={p.link}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.problem}
                            >
                                <strong>{p.name}</strong>

                                <span>{p.site}</span>

                            </a>

                        ))}

                    </div>

                </section>

            )}

            <footer className={styles.footer}>

                {previous ? (

                    <Link to={previous}>
                        ← Previous
                    </Link>

                ) : <span />}

                {next && (

                    <Link to={next}>
                        Next →
                    </Link>

                )}

            </footer>

        </>
    );

}