import React from "react";
import logo from "../assets/logo.jpg";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="box">
          {/* <Logo></Logo> */}
          <div className="time">Today 12pm - 9pm</div>
          <div className="note">Working Hours</div>
        </div>
        <div className="box">
          {/* <Logo></Logo> */}
          <div className="time">Piastowska 4, Cracow</div>
          <div className="note">Find us</div>
        </div>
        <div className="box">
          {/* <Logo></Logo> */}
          <div className="time">503 204 176</div>
          <div className="note">Call to Us</div>
        </div>
        <div className="image-holder">
          <div className="image-viewer">
            <div className="image-wrapper">
              <img src={logo} className="image" />
            </div>
          </div>
        </div>
        <div className="navigation">
          <div className="nav">
            <span>About us</span>
            <a>
              <FaFacebook />
            </a>
          </div>
          <div className="nav">
            <span>Menu</span>
            <a>
              <FaTwitter />
            </a>
          </div>
          <div className="nav">
            <span>Contact</span>
            <a>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
