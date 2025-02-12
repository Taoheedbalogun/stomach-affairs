import React from "react";
import food1 from "../assets/food1.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-imageHolder">
        <div className="about-imageViewer">
          <img src={food1} className="about-image" />
        </div>
      </div>
      <div className="about-content">
        <h1 className="about-title">About us</h1>
        <p className="about-sub">Few words about us</p>
        <p className="about-desc">
          We are not ordinary food truck. We create a place overflowing with
          positive energy that it expresses important to us values. Get to know
          them specifically.
        </p>
        <button className="about-btn">
          Learn More
          <span className="about-span">
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default About;
