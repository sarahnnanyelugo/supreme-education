import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/banner.png";
import FounderImg from "../../assets/images/founder.png";
import { about } from "../../TestData";
export const Founder = () => {
  return (
    <div className="founder-div">
      <Banner banner={LandingImg} links={about} />
      <div className="flexy container">
        <div className="col-md-8">
          <p></p>
          <p></p>
        </div>
        <div className="col-md-4">
          <img src={FounderImg} alt="pic" width="100%" />
        </div>
      </div>
    </div>
  );
};
