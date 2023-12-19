import React from "react";
import { NavLink } from "react-router-dom";
import "./banner.scss";
export const Banner = (props) => {
  return (
    <div className="banner-div">
      <div className="banner-holder">
        <img src={props.banner} alt="sch-imgs" width="100%" />
        <div className="title-overlay">
          <h1>Our Founder</h1>
        </div>
      </div>
      <div className="page-links">
        <ul className="list-inline list-unstyled">
          <li className="list-inline-item">
            <NavLink to={props.url1}>{props.link1}</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
