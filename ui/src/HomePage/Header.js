import React from "react";
import "./HomePageStyle.css";

const Header = () => {
  const userName = "Kenil Maheshbhai Patel";
  const appInfo = "Personal portfolio";
  return (
    <div className="text-center header">
      <h1 className="username">{userName}</h1>
      <h2 className="app-info">{appInfo}</h2>
    </div>
  );
};

export default Header;
