import React from "react";
import "../styles/header.css";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" />
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
