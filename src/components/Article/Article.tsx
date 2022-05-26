import React from "react";
import { IPost } from "src/interfaces";

const Article = ({ title, body, date }: IPost) => {
  return (
    <article>
      <h1>{title}</h1>
      <h1>{body}</h1>
      <h1>{date.toLocaleDateString("hu")}</h1>
    </article>
  );
};

export default Article;
