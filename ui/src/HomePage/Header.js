import React from "react";
import "./css/HomePageStyle.css";

const Header = () => {
  const userName = "Kenil Maheshbhai Patel";
  const appInfo = "Personal portfolio";
  return (
    <div className="header">
      <h1 className="username">{userName}</h1>
      <h2 className="app-info">{appInfo}</h2>
    </div>
  );
};

export default Header;
