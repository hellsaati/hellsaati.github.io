import React, { useEffect } from "react";
import Layout from "@theme/Layout";

export default function Search() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/pagefind/pagefind-ui.js";
    script.onload = () => {
      new window.PagefindUI({
        element: "#search",
        showSubResults: true,
        resetStyles: false,
      });
    };
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/pagefind/pagefind-ui.css";
    document.head.appendChild(link);
  }, []);

  return (
    <Layout title="Search">
      <div style={{ maxWidth: "900px", margin: "3rem auto" }}>
        <h1>Search</h1>
        <div id="search"></div>
      </div>
    </Layout>
  );
}