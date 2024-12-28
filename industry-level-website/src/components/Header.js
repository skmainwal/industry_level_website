import React, { useState } from "react";
// import logo from "../images/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container"> </div>{" "}
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span> </span> <span> </span> <span> </span>{" "}
      </div>{" "}
      <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={toggleMenu}>
              {" "}
              Home{" "}
            </a>{" "}
          </li>{" "}
          <li>
            <a href="#services" onClick={toggleMenu}>
              {" "}
              Our Services{" "}
            </a>{" "}
          </li>{" "}
          <li>
            <a href="#serviced" onClick={toggleMenu}>
              {" "}
              Served Industry{" "}
            </a>{" "}
          </li>{" "}
          <li>
            <a href="#about" onClick={toggleMenu}>
              {" "}
              About Us{" "}
            </a>{" "}
          </li>{" "}
          <li>
            <a href="#contact" onClick={toggleMenu}>
              {" "}
              Contact Us{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </header>
  );
}

export default Header;
