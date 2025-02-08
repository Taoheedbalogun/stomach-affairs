import React from "react";
import "../styles/menu.css";
import data1 from "../data1.json";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="content">
        <h1 className="title">Menu</h1>
        <p className="sub">Explore Our Best Food</p>
        <p className="desc">Below you can see our best selling meals!</p>
      </div>

      <div className="section">
        {data1.map(({ image, name, price, about, id }) => (
          <div key={id} className="card">
            <img src={image} className="image" />
            <div className="items">
              <div className="name">{name}</div>
              <div className="price">{price}</div>
            </div>
            <div className="about">{about}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
