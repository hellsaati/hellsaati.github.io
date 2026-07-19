import React from "react";
import {useDoc} from "@docusaurus/plugin-content-docs/client";
import ProblemCard from "@site/src/components/ProblemCard/ProblemCard";

export default function Problems(){

    const {frontMatter}=useDoc();

    if(!frontMatter.problems) return null;

    return(

        <>

            <h2>Practice</h2>

            <div
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
                    gap:20
                }}
            >

                {frontMatter.problems.map(problem=>

                    <ProblemCard
                        key={problem.name}
                        {...problem}
                    />

                )}

            </div>

        </>

    );

}