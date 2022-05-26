import React from "react";
import { Post } from "src/interfaces";

const Article = ({ title, body, date, shared }: Post) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{date.toLocaleDateString("hu")}</p>
      <p>{`megosztva: ${shared}`}</p>
    </article>
  );
};

export default Article;
