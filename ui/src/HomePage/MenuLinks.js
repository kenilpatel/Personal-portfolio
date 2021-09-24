import React from "react";
import "./css/HomePageStyle.css";
import { Link } from "react-router-dom";
import constants from "../UI_constatns";

const MenuLinks = () => {
  return (
    <div className="big-font menu float-left">
      <ul className="nav justify-content-left">
        <li className="nav-item">
          <Link to={constants.HOME}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to={constants.BOOK_REVIEW}>Book reviews</Link>
        </li>
        <li className="nav-item">
          <Link to={constants.WRITE_REVIEW}>Write a review</Link>
        </li>
        <li className="nav-item">
          <Link to={constants.UPCOMING_READING}>Upcoming readings</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuLinks;
