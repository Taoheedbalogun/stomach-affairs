import React from "react";
import logo from "../assets/logo.jpg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <div className="footer-image-holder">
        <div className="footer-image-viewer">
          <div className="footer-image-wrapper">
            <img src={logo} className="footer-image" />
          </div>
        </div>
      </div>
      <div className="footer-navigation">
        <div className="footer-nav">
          <span href="about" className="footer-nav-list">
            About us
          </span>
          <a href="https://web.facebook.com/taoheed.balogun/" target="_blank">
            <FaFacebook className="footer-icon" />
          </a>
        </div>
        <div className="footer-nav">
          <span href="menu" className="footer-nav-list">
            Menu
          </span>
          <a href="">
            <FaTwitter className="footer-icon" />
          </a>
        </div>
        <div className="footer-nav">
          <span href="contact" className="footer-nav-list">
            Contact
          </span>
          <a href="">
            <FaInstagram className="footer-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
