import React from "react";
import styles from "./Tag.module.css";

export default function Tag({children}){

return(

<div className={styles.tag}>
{children}
</div>

);

}