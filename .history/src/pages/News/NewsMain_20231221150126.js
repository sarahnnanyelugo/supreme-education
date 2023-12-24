import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import icon1 from "../../assets/images/inq.svg";
import icon2 from "../../assets/images/map.svg";
import icon3 from "../../assets/images/apply2.svg";

export const NewsMain = () => {
  return (
    <>
      <div className="col-md-10 offset-md-1 flexy">
        <Link to={"/"} className="col-md-1">
          <img src={Logo} alt="icon" className="" width="86px" height="94px" />
        </Link>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <Link to={"/enquire"}><img alt="icon" src={}  width="24px" height="24px" /></Link>
          </li> <li className="list-inline-item">
            <Link to={"/enquire"}><img alt="icon" src={}  width="24px" height="24px" /></Link>
          </li> <li className="list-inline-item">
            <Link to={"/enquire"}><img alt="icon" src={}  width="24px" height="24px" /></Link>
          </li>
        </ul>
      </div>
    </>
  );
};
