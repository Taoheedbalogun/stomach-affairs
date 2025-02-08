import React from "react";
import logo from "../assets/logo.jpg";
import food1 from "../assets/food1.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Delicious Food & Snacks Delivered to You</h1>
        <p>Order your favorite meals and snacks from the best in town</p>
        <button className="cta-button">
          Check Menu <span>&rarr;</span>
        </button>
      </div>

      <div className="image-holder">
        <div className="image-viewer">
          <img src={food1} className="food1" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
