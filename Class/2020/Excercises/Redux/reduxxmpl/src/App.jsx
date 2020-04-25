import React from "react";
import "./App.css";

import Posts from "./components/Posts.jsx";
import PostForm from "./components/Postform.jsx";

function App() {
  return (
    <div className='App'>
      <PostForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
