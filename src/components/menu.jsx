import React from "react";
import "../styles/menu.css";
import data1 from "../data1.json";

const Menu = () => {
  return (
    <div id="menu" className="menu-container">
      <div className="menu-content">
        <h1 className="menu-title">Menu</h1>
        <p className="menu-sub">Explore Our Best Food</p>
        <p className="menu-desc">Below you can see our best selling meals!</p>
      </div>

      <div className="menu-section">
        {data1.map(({ image, name, price, about, id }) => (
          <div key={id} className="menu-card">
            <img src={image} className="menu-image" />
            <div className="menu-items">
              <div className="menu-name">{name}</div>
              <div className="menu-price">{price}</div>
            </div>
            <div className="menu-about">{about}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

//   {
//     "id": "4",
//     "image": "packedBottledChips.jpg",
//     "name": "Chickpae's wrap",
//     "price": "3$",
//     "about": "Served with fires and drinks"
//   },
//   {
//     "id": "5",
//     "image": "servedPuff.jpg",
//     "name": "Chickpae's wrap",
//     "price": "3$",
//     "about": "Served with fires and drinks"
//   },
//   {
//     "id": "6",
//     "image": "smokedFish.jpg",
//     "name": "Chickpae's wrap",
//     "price": "3$",
//     "about": "Served with fires and drinks"
//   },
//   {
//     "id": "7",
//     "image": "meatpie.jpg",
//     "name": "Chickpae's wrap",
//     "price": "3$",
//     "about": "Served with fires and drinks"
//   },
//   {
//     "id": "8",
//     "image": "meats.jpg",
//     "name": "Chickpae's wrap",
//     "price": "3$",
//     "about": "Served with fires and drinks"
//   },
//   {
//     "id": "9",
//     "image": "packedNchips.jpg",
//     "name": "Chickpae's wrap",
//     "price": "3$",
//     "about": "Served with fires and drinks"
//   },
//   {
//     "id": "10",
//     "image": "packedTakeAway.jpg",
//     "name": "Chickpae's wrap",
//     "price": "3$",
//     "about": "Served with fires and drinks"
//   },
//   {
//     "id": "11",
//     "image": "singlebChips.jpg",
//     "name": "Chickpae's wrap",
//     "price": "3$",
//     "about": "Served with fires and drinks"
//   },
//   {
//     "id": "12",
//     "image": "smokedFish.jpg",
//     "name": "Chickpae's wrap",
//     "price": "3$",
//     "about": "Served with fires and drinks"
//   }
// ]
