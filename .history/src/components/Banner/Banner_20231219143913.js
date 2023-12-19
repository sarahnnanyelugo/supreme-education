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
        {props.links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              activeClassName="active"
              className="page-navs"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </div>
    </div>
  );
};
