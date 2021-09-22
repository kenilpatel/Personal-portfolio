import React from "react";
import "./css/HomePageStyle.css";

const MainMenu = () => {
  return (
    <div className="big-font menu float-left">
      <ul className="nav justify-content-left">
        <li className="nav-item">
          <a href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a href="/book-reviews">Book reviews</a>
        </li>
        <li className="nav-item">
          <a href="/write-review">Write a review</a>
        </li>
        <li className="nav-item">
          <a href="/upcoming-reading">Upcoming readings</a>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
