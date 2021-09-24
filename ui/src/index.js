import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage/HomePage";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
  document.getElementById("root")
);
