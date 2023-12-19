import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/v-tour.png";
import FounderImg from "../../assets/images/founder.png";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { about } from "../../TestData";
import "./founder.scss";
export const Tour = () => {
  return (
    <div className="founder-div">
      <Banner
        pageTitle="Virtual Tour"
        banner={LandingImg}
        links={about}
        mainpage="About Us"
        currentPage="Virtual Tour"
      />{" "}
      <div className="col-md-10 offset-md-1">
        {" "}
        <video
          width="100%"
          autoplay="false"
          loop="true"
          muted="false"
          playsinline="true"
          controls="true"
          src={"https://youtu.be/pDHC9D_YEB0?t=18"}
        ></video>
      </div>
    </div>
  );
};
