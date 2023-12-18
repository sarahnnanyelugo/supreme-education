import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/images/call.png";
import Message from "../../assets/images/sms.png";
import Search from "../../assets/images/search.png";
import MenuItems from "./Menu";

export const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="col-md-10 offset-md-1 flexy">
          <div style={{ flexGrow: 1 }} className="flexy flexyM">
            {" "}
            <img src={Phone} alt="icon" />
            <a href="#">+(234) 8182984015</a>
            <img src={Message} alt="icon" style={{ marginLeft: "40px" }} />
            <a href="#">info@supremeeducation.com</a>
          </div>
          <div className="flexy">
            {" "}
            <img
              src={Search}
              alt="icon"
              style={{
                marginRight: "30px",
                borderRight: "solid 2px black",
                paddingRight: "20px",
              }}
              height="28px"
            />
            <p style={{ marginRight: "10px" }}>Menu</p>
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
