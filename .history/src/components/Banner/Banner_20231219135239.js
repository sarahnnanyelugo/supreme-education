import React from "react";

export const Banner = (props) => {
  return (
    <div className="banner-div">
      <div>
        <img src={props.banner} alt="sch-imgs" width="100%" />
        <div className="overlay">
          <h2>Our Founder</h2>
        </div>
      </div>
      <div className="page-links"></div>
    </div>
  );
};
