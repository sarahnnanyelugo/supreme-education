import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Icon1 from "../../assets/images/inq.svg";
import Icon2 from "../../assets/images/map.svg";
import Icon3 from "../../assets/images/apply2.svg";

export const NewsMain = () => {
  return (
    <>
      <div className="col-md-10 offset-md-1 flexy">
        <Link to={"/"} className="col-md-1">
          <img src={Logo} alt="icon" className="" width="86px" height="94px" />
        </Link>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <Link to={"/enquire"}>
              <img alt="icon" src={Icon1} width="24px" height="24px" />
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/enquire"}>
              <img alt="icon" src={Icon2} width="24px" height="24px" />
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/enquire"}>
              <img alt="icon" src={Icon3} width="24px" height="24px" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
