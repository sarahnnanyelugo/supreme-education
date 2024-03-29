import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/images/call.png";
import Message from "../../assets/images/sms.png";
import MenuItems from "./Menu";
import { Link, useLocation } from "react-router-dom";
import { Search } from "../Search/Search";

export const Navbar = () => {
  const prevUrlRef = useRef(null);

  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    const currentUrl = window.location.pathname;
    if (prevUrlRef.current !== currentUrl) {
      prevUrlRef.current = currentUrl;
      console.log(currentUrl);
      setTimeout(() => {
        switch (currentUrl) {
          case "/main-news":
            setShowNav(false);
            break;

          default:
            setShowNav(true);
            break;
        }
        localStorage.setItem("showNav", showNav);
      }, 200);
    }
  });
  return (
    <>
      <div className={`${showNav ? "" : "hide"} `}>
        {" "}
        <div className="nav-container ">
          <div className="col-md-10 offset-md-1 flexy">
            <div style={{ flexGrow: 1 }} className="flexy flexyM">
              {" "}
              <img src={Phone} alt="icon" height="24px" />
              <a href="#">+(234) 8182984015</a>
              <div className="flexy flexyM">
                {" "}
                <img
                  src={Message}
                  alt="icon"
                  height="24px"
                  className="message-icon"
                />
                <a href="#">info@supremeeducation.com</a>
              </div>
            </div>
            <div className="flexy flexyM menu-holder">
              {" "}
              <div className="search-icon">
                {/* <img
                  src={Search}
                  alt="icon"
                  style={{
                    marginRight: "30px",

                    paddingRight: "20px",
                  }}
                  height="28px"
                /> */}
                <Search />
              </div>
              <p style={{ marginRight: "10px", marginLeft: "20px" }}>Menu</p>
              <MenuItems />
            </div>
          </div>
        </div>
        <center>
          <Link to={"/"}>
            <img src={Logo} alt="icon" className="logo" />
          </Link>
        </center>
      </div>
    </>
  );
};
