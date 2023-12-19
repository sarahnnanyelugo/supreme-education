import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/about.png";
import FounderImg from "../../assets/images/about2o.png";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { about } from "../../TestData";
import "./who-we-are.scss";
export const WhoWeAre = () => {
  return (
    <div className="founder-div">
      <Banner
        pageTitle="Who we are"
        banner={LandingImg}
        links={about}
        mainpage="About Us"
        currentPage="Who we are"
      />
      <div className="flexy  col-md-10 offset-md-1">
        <div className="col-md-7 mt7" style={{ lineHeight: "35px" }}>
          <p>
            Supreme Education Foundation Schools is a centre of excellence
            designed to provide world-class education in an exciting learning
            environment for students between the ages of 3 months to 18 years.
            Our structure begins with the Junior School comprising of the
            Crèche; the Early Years Foundation Stage, Key Stages 1 & 2. The High
            School comprises of Key Stages 3 & 4 (Years 7 – 12).
          </p>
          <p>
            The School is located in Magodo G.R.A Phase 2, Lagos; about 30
            minutes’ drive from the Murtala Mohammed International Airport. The
            serene setting provides a stimulating environment for learning.
            Established in 1991, the school is co-educational and
            multi-cultural, providing access to day, partial and full boarding
            options for students.
          </p>
          <p>
            Supreme Education Foundation School is a centre of excellence
            designed to provide world-class education in an exciting learning
            environment for students between the ages of 3 months to 18 years.
            Our structure begins with the Junior School comprising of the
            Crèche; the Early Years Foundation Stage, Key Stages 1 & 2. The High
            School comprises of Key Stages 3 & 4 (Years 7 – 12).
          </p>
        </div>
        <div className="col-md-4 offset-md-1 mt7">
          <img src={FounderImg} alt="pic" width="100%" />
        </div>
      </div>
      <div className="flexy col-md-10 offset-md-1 founder-div">
        <div className="col-md-6 eyfs">
          {" "}
          <img src={Img6} alt="sch-images" width="100%" className="col-md-11" />
          <div className="overlay">
            {" "}
            <h2>Who we are</h2>
            <button>Learn more</button>
          </div>
        </div>
        <div className="col-md-6 eyfs">
          {" "}
          <img src={Img7} alt="sch-images" width="100%" className="col-md-11" />
          <div className="overlay">
            {" "}
            <h2>Take a virtual Tour</h2>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
