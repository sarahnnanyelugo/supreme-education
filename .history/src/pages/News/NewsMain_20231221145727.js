import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export const NewsMain = () => {
  return (
    <>
      <div className="col-md-10 offset-md-1 flexy">
        <Link to={"/"} className="col-md-1">
          <img src={Logo} alt="icon" className="" width="86px" height="94px" />
        </Link>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <Link to={"/enquire"}></Link>
          </li>
        </ul>
      </div>
    </>
  );
};
