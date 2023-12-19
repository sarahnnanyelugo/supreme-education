import React from "react";
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
      <div className="page-links"></div>
    </div>
  );
};
