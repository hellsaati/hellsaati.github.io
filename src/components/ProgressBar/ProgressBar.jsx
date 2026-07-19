import React from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({

current,

total

}){

const percent=current/total*100;

return(

<div className={styles.wrapper}>

<div
className={styles.bar}
style={{
width:`${percent}%`
}}
/>

</div>

);

}