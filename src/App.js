import React from "react";
import "./App.css";
import Info from "./Info";
import Stats from "./stats";
import Author from './author';


function App() {
  return (
    <div className="App">
      <Info />
      <Stats />
      <div className="line"></div>
      <Author />

    </div>
  );
}

export default App;
