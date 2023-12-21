import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/calendar.png";
import Img from "../../assets/images/download2.svg";
import Img2 from "../../assets/images/curr3.png";
import Img3 from "../../assets/images/curr4.png";
import Img4 from "../../assets/images/ola.png";
import Dot from "../../assets/images/dot2.png";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { academics } from "../../TestData";
import "./eyfs.scss";
export const BoardingSchool = () => {
  return (
    <div className="eyfs-div">
      <Banner
        pageTitle="Boarding School"
        banner={LandingImg}
        links={academics}
        mainpage="STUDENT LIFE"
      />
      <div className=" col-md-10 offset-md-1 mt flexy">
        <div className=" col-md-8">
          <h4>Boarding in Supreme is an amazing School Life Experience</h4>
        </div>
      </div>
    </div>
  );
};
