import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/images/call.png";
import Message from "../../assets/images/sms.png";

export const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="col-md-10 offset-md-1 flexy">
          <img src={Phone} alt="icon" />
          +(234)818298984015 <img src={Message} alt="icon" />
          +(234)818298984015
        </div>
      </div>
      <center>
        <img src={Logo} alt="icon" />
      </center>
    </>
  );
};
