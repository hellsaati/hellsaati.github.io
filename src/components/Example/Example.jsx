import React from "react";
import styles from "./Example.module.css";

export default function Example({

title="Example",

children

}){

return(

<div className={styles.example}>

<div className={styles.header}>
💡 {title}
</div>

<div className={styles.body}>
{children}
</div>

</div>

);

}