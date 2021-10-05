import React from "react";
import ReactDOM from "react-dom";
import "./Common/index.css";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Core/HomePage/HomePage";

ReactDOM.render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
  document.getElementById("root")
);
