import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Article from "./components/Article";

import { IPost } from "./interfaces";
import { getPosts } from "./services";

import "./style.css";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.map((p) => (
        <Article key={p.date.toISOString()} {...p} />
      ))}
    </div>
  );
}

render(<App />, document.getElementById("root"));
