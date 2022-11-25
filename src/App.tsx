import React, { useEffect, useState } from "react";
import api from "./api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./App.css";

function App() {
  const [markdownToBeRendered, setMarkdownToBeRendered] = useState<string>("");
  useEffect(() => {
    setMarkdownToBeRendered(api.returnMarkdown());
  }, []);
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;
  return (
    <div className="App">
      <header className="App-header">Hackathon</header>
      <main className="app-main">
        <ReactMarkdown
          children={markdownToBeRendered}
          remarkPlugins={[remarkGfm]}
        />
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
      </main>
    </div>
  );
}

export default App;
