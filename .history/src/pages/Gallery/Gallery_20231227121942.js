import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/news.png";
import Img1 from "../../assets/images/class-std.png";
import Img2 from "../../assets/images/leverage.png";
import Img3 from "../../assets/images/export.svg";
import Img4 from "../../assets/images/fac4.png";
import Dot from "../../assets/images/dot2.png";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { media } from "../../TestData";
import "./news.scss";
export const Gallery = () => {
  return (
    <div className="news-div">
      <Banner
        pageTitle="Gallery"
        banner={LandingImg}
        links={media}
        mainpage="MEDIA"
      />
      <div className=" col-md-10 offset-md-1 mt7  inner-page-content">
        <div className="flexy">
          {" "}
          <div className="col-md-6 tab-overlay right">
            {" "}
            <img src={Img1} alt="sch-images" className="col-12" />
            <div className="overlayed offset-md-1 col-md-10 ">
              <Link to={"/main-news"} className=" flexy flexyM">
                {" "}
                <p className="col-md-10">
                  2022 Supreme Education Foundation Scholarship Entrance
                  Examination into Year 7
                </p>
                <img
                  src={Img3}
                  alt="sch-images"
                  width="20px"
                  height="20px"
                  className="offset-md-1"
                />
              </Link>
            </div>
          </div>{" "}
          <div className="col-md-6 tab-overlay left mvt">
            {" "}
            <img src={Img2} alt="sch-images" className="col-12" />
            <div className="overlayed offset-md-1 col-md-10 ">
              <Link to={"/main-news"} className="flexy flexyM">
                {" "}
                <p>Supreme Leverage Every Friday by 5:00pm</p>
                <img
                  src={Img3}
                  alt="sch-images"
                  width="20px"
                  height="20px"
                  className="offset-md-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
