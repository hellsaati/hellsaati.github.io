import React from "react";
import { lessons } from "../../data/lessons";
import styles from "./Overview.module.css";

export default function Overview() {

    const completed =
        lessons.filter(x=>x.completed).length;

    const problems =
        lessons.reduce(
            (a,b)=>a+b.problems,
            0
        );

    return(

        <div className={styles.wrapper}>

            <div>

                <h2>{lessons.length}</h2>

                <span>Lessons</span>

            </div>

            <div>

                <h2>{completed}</h2>

                <span>Completed</span>

            </div>

            <div>

                <h2>{problems}</h2>

                <span>Problems</span>

            </div>

        </div>

    );

}