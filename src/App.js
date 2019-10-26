import { hot } from "react-hot-loader/root";
import React from "react";
import "./assets/app.css";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default hot(App);
