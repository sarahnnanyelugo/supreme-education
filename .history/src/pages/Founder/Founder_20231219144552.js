import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/banner.png";
import { about } from "../../TestData";
export const Founder = () => {
  return (
    <div className="founder-div">
      <Banner banner={LandingImg} links={about} />
      <div className="flexy"></div>
    </div>
  );
};
