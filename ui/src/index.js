import React from "react";
import ReactDOM from "react-dom";
import "./common/index.css";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./core/HomePage/HomePage";

ReactDOM.render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
  document.getElementById("root")
);
