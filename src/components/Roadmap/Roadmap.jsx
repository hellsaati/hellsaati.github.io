import React, { useMemo, useState } from "react";
import { lessons } from "../../data/lessons";
import LessonCard from "../LessonCard/LessonCard";
import styles from "./Roadmap.module.css";

const filters = [
  "all",
  "beginner",
  "intermediate",
  "advanced",
];

export default function Roadmap() {

  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {

    if (filter === "all") return lessons;

    return lessons.filter(
      lesson => lesson.difficulty === filter
    );

  }, [filter]);

  return (

    <>

      <div className={styles.filters}>

        {filters.map(f => (

          <button
            key={f}
            className={
              filter === f
                ? styles.active
                : ""
            }
            onClick={() => setFilter(f)}
          >
            {f}
          </button>

        ))}

      </div>

      <div className={styles.grid}>

        {visible.map(lesson => (

          <LessonCard
            key={lesson.id}
            lesson={lesson}
          />

        ))}

      </div>

    </>

  );

}