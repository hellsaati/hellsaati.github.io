import React, { useEffect, useState } from "react";
import styles from "./ReadingProgress.module.css";

export default function ReadingProgress() {

    const [progress,setProgress]=useState(0);

    useEffect(()=>{

        const update=()=>{

            const h=document.documentElement;

            const max=h.scrollHeight-window.innerHeight;

            setProgress(window.scrollY/max*100);

        };

        update();

        window.addEventListener("scroll",update);

        return()=>window.removeEventListener("scroll",update);

    },[]);

    return(

        <div
            className={styles.bar}
            style={{
                width:`${progress}%`
            }}
        />

    );

}