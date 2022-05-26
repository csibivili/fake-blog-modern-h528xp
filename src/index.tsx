import React, { useEffect } from "react";
import { render } from "react-dom";

import { getPosts } from "./services";

import "./style.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      console.log(posts);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Start editing to see magic happen</p>
    </div>
  );
}

render(<App />, document.getElementById("root"));
