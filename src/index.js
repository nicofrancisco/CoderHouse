import React, { Component } from "react";
import ReactDOM from "react-dom";
import Saludo from "./Saludo";

import "./styles.css";

function App() {
  const alumnos = ["carlos", "pablo", "nico"];

  return <div>{alumnos.map(i => <Saludo nombre={i} />)}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
