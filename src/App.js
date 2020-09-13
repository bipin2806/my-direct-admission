import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Movie from "./componets/movies";
import Header from "./componets/header";

function App() {
  return (
    <div>
      <Header />
      <Movie />
    </div>
  );
}

export default App;
