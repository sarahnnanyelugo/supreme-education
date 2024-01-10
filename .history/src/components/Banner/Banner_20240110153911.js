import React from "react";
import { NavLink } from "react-router-dom";
import "./banner.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export const Banner = (props) => {
  return (
    <div className="banner-div">
      <div className="banner-holder">
        <img src={props.banner} alt="sch-imgs" width="100%" />
        <div className="title-overlay">
          <h1>{props.pageTitle}</h1>
        </div>
      </div>
      <div className="page-links offset-md-1">
        {props.links.map((link, index) => (
          <li key={index} className="list-unstyled">
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
      <Breadcrumb className="offset-md-1 mt2">
        <Breadcrumb.Item href="/" className="b-home">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>{props.mainpage}</Breadcrumb.Item>
        <Breadcrumb.Item>{props.pageTitle}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
