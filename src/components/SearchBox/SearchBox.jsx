import React,{useState} from "react";

import {lessons} from "../../data/lessons";

import Link from "@docusaurus/Link";

import styles from "./SearchBox.module.css";

export default function SearchBox(){

const[q,setQ]=useState("");

const filtered=lessons.filter(x=>

x.title.toLowerCase().includes(q.toLowerCase())||

x.tags.some(tag=>

tag.toLowerCase().includes(q.toLowerCase())

)

);

return(

<div className={styles.wrapper}>

<input

placeholder="Search lessons..."

value={q}

onChange={e=>setQ(e.target.value)}

/>

{q.length>0&&(

<div className={styles.results}>

{filtered.map(l=>(

<Link
key={l.id}
to={l.docs}
className={styles.result}
>

<strong>{l.title}</strong>

<span>{l.difficulty}</span>

</Link>

))}

</div>

)}

</div>

);

}