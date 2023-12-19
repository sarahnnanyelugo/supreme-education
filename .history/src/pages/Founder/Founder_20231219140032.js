import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/banner.png";

export const Founder = () => {
  return (
    <div className="founder-div">
      <Banner banner={LandingImg} />
    </div>
  );
};
