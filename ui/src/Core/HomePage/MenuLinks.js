import React from "react";
import "./css/HomePageStyle.css";
import constants from "../../Common/UI_constatns";
import { NavLink } from "react-router-dom";

const MenuLinks = () => {
  return (
    <div className="big-font menu float-left">
      <ul className="nav justify-content-left">
        <li className="nav-item">
          <NavLink to={constants.HOME}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={constants.BOOK_REVIEW}>Book reviews</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={constants.WRITE_REVIEW}>Write a review</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={constants.UPCOMING_READING}>Upcoming readings</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuLinks;
