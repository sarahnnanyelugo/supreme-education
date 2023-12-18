import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/images/call.png";
import Message from "../../assets/images/sms.png";
import Search from "../../assets/images/search.png";
import Menu from "../../assets/images/menu.png";
import MenuItems from "./Menu";

export const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="col-md-10 offset-md-1 flexy">
          <div style={{ flexGrow: 1 }}>
            {" "}
            <img src={Phone} alt="icon" />
            +(234)818298984015 <img src={Message} alt="icon" />
            +(234)818298984015
          </div>
          <div className="flexy">
            {" "}
            <img src={Search} alt="icon" />
            <h6>Menu</h6>
            <MenuItems />
          </div>
        </div>
      </div>
      <center>
        <img src={Logo} alt="icon" className="logo" />
      </center>
    </>
  );
};
