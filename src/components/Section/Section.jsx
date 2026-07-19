import React from "react";
import styles from "./Section.module.css";

export default function Section({

title,

children

}){

return(

<section className={styles.section}>

<h2>{title}</h2>

<div>

{children}

</div>

</section>

);

}