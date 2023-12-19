import React from "react";

export const Banner = (props) => {
  return (
    <div className="banner-div">
      <img src={props.banner} alt="sch-imgs" width="100%" />
    </div>
  );
};
