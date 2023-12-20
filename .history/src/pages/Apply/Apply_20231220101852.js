import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/ceo-landing.png";
import FounderImg from "../../assets/images/ceo.png";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { academics } from "../../TestData";
export const Apply = () => {
  return (
    <div className="apply-div">
      <Banner
        pageTitle="How to Apply"
        banner={LandingImg}
        links={academics}
        mainpage="Academics"
      />
    </div>
  );
};
