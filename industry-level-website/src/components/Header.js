import React from "react";
// import logo from "../images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-container"></div>{" "}
      <nav className="nav-menu">
        <ul>
          <li>
            {" "}
            <a href="#home"> Home </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#services"> Services </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#contributions"> Contributions </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#about"> About </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#contact"> Contact </a>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </header>
  );
}

export default Header;
