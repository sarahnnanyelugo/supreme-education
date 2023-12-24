import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Icon1 from "../../assets/images/inq.svg";
import Icon2 from "../../assets/images/map.svg";
import Icon3 from "../../assets/images/apply2.svg";
import Search from "../../assets/images/search.png";
import MenuItems from "../../components/Navbar/Menu";
export const NewsMain = () => {
  return (
    <>
      <div className="col-md-10 offset-md-1 flexy main-news">
        <Link to={"/"} className="col-md-1 small-logo">
          <img src={Logo} alt="icon" className="" width="86px" height="94px" />
        </Link>
        <ul className="list-unstyled list-inline ">
          <li className="list-inline-item">
            <Link to={"/enquire"}>
              <img alt="icon" src={Icon1} width="24px" height="24px" />
              Inquire
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/enquire"}>
              <img alt="icon" src={Icon2} width="24px" height="24px" />
              Visit
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/enquire"}>
              <img alt="icon" src={Icon3} width="24px" height="24px" />
              Apply
            </Link>
          </li>
        </ul>{" "}
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
            height="20px"
          />
          <p style={{ marginRight: "10px" }}>Menu</p>
          <MenuItems />
        </div>
      </div>
    </>
  );
};
