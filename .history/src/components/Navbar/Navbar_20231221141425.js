import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/images/call.png";
import Message from "../../assets/images/sms.png";
import Search from "../../assets/images/search.png";
import MenuItems from "./Menu";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const prevUrlRef = useRef(null);
  //  const [stick, setStick] = useState(true);
  //  const [themeSet, setTheme] = useState("");
  //  const [themeSet2, setTheme2] = useState("");
  //  const [themeSet3, setTheme3] = useState("");
  //  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    const currentUrl = window.location.pathname;
    if (prevUrlRef.current !== currentUrl) {
      prevUrlRef.current = currentUrl;
      console.log(currentUrl);
      setTimeout(() => {
        switch (currentUrl) {
          case "/main-new":
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
      <div className={`nav-container2 ${showNav ? "" : "hide"} `}>
        <div className="col-md-10 offset-md-1 flexy">
          <div style={{ flexGrow: 1 }} className="flexy flexyM">
            {" "}
            <img src={Phone} alt="icon" height="24px" />
            <a href="#">+(234) 8182984015</a>
            <img
              src={Message}
              alt="icon"
              style={{ marginLeft: "40px" }}
              height="24px"
            />
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
        <Link to={"/"}>
          <img src={Logo} alt="icon" className="logo" />
        </Link>
      </center>
    </>
  );
};
