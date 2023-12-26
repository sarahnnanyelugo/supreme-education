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
      <div className="col-md-10 offset-md-1 mt5 inner-page-content">
        <p>Take a quick Tour through Supreme Education Foundation Schools.</p>
        <iframe
          width="100%"
          height="578"
          src="https://www.youtube.com/embed/pDHC9D_YEB0"
          title="SUPPORTING YOUR CHILD THROUGH PUBERTY"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="creed col-md-10 offset-md-1 mt">
        <center>
          {" "}
          <div className="col-md-8">
            <h4>Creed</h4>
            <p>
              ``I am a symbol of creative intelligence because i influence
              positively. I collaborate to serve with competence and integrity,
              because i care. I am Supreme! and I am the standard.``
            </p>
          </div>
        </center>
      </div>
      <div className="col-md-10 offset-md-1 mt inner-page-content">
        <iframe
          width="100%"
          height="578"
          src="https://www.youtube.com/embed/isd9WTj8GoE"
          title="WHEEL OF PROGRESS"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
