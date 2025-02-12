import React from "react";
import "../styles/contact.css";

const contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="box">
        <div className="time">Mon-Sun 8am - 9pm</div>
        <div className="note">Working Hours</div>
      </div>
      <div className="box">
        <div className="time">Ikorodu 4, Ikorodu</div>
        <div className="note">Find us</div>
      </div>
      <div className="box">
        <div className="time">0810 766 8248</div>
        <div className="note">Call to Us</div>
      </div>
    </div>
  );
};

export default contact;
