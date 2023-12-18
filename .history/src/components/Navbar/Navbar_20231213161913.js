import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/images/call.png";

export const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="col-md-10 offset-md-1 flexy">
          <img src={Phone} alt="icon" />
        </div>
      </div>
    </>
  );
};
