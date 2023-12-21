import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/news.png";
import Img from "../../assets/images/act2.png";
import Img2 from "../../assets/images/fac2.png";
import Img3 from "../../assets/images/fac3.png";
import Img4 from "../../assets/images/fac4.png";
import Dot from "../../assets/images/dot2.png";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { media } from "../../TestData";
import "./activities.scss";
export const News = () => {
  return (
    <div className="activity-div">
      <Banner
        pageTitle="News & Events"
        banner={LandingImg}
        links={media}
        mainpage="MEDIA"
      />
      <div className=" col-md-10 offset-md-1 mt7 ">
        <div className="flexy">
          <div className=" col-md-6 right"></div>
          <div className="col-md-6">
            {" "}
            <img src={Img2} width="100%" alt="pics" />
          </div>
        </div>
      </div>
    </div>
  );
};
