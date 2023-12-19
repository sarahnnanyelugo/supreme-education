import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/about.png";
import FounderImg from "../../assets/images/about2.png";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { about } from "../../TestData";
import "./who-we-are.scss";
export const WhoWeAre = () => {
  return (
    <div className="about-div">
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
          <br />
          <p>
            The School is located in Magodo G.R.A Phase 2, Lagos; about 30
            minutes’ drive from the Murtala Mohammed International Airport. The
            serene setting provides a stimulating environment for learning.
            Established in 1991, the school is co-educational and
            multi-cultural, providing access to day, partial and full boarding
            options for students.
          </p>
          <br />
          <p>
            Supreme Education Foundation School is a centre of excellence
            designed to provide world-class education in an exciting learning
            environment for students between the ages of 3 months to 18 years.
            Our structure begins with the Junior School comprising of the
            Crèche; the Early Years Foundation Stage, Key Stages 1 & 2. The High
            School comprises of Key Stages 3 & 4 (Years 7 – 12).
          </p>
          <h1>Mission</h1>
          <p>
            To model an educational system that collaborates with various
            stakeholders to discover, develop and deploy positive influencers
            who transform societies.
          </p>
          <h1>Our Vision</h1>
          <p>
            To raise a tribe of positive influencers who transform every culture
            in service to God and humanity.
          </p>
        </div>
        <div className="col-md-4 offset-md-1 mt7">
          <img src={FounderImg} alt="pic" width="100%" />
        </div>
      </div>
      <div className="creed col-md-10 offset-md-1">
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
      <div className="col-md-6 offset-md-1 flexy flexyM ">
        <div className="col-md-7">
          <h1>Our School Anthem</h1>
          <h6>Anthem</h6>
          <p>
            Lord of life one voice we raise For our dear school we give you
            praise. Strength for the challenges of our days And light to guide
            our path we pray. No other foundation can be laid Supreme Education
            Foundation.
          </p>
        </div>
        <div className="col-md-4 offset-md-1 mt">
          <h6>Choros</h6>
          <p>
            Supreme!,
            <br /> Supreme! <br />
            Supreme Education Foundation <br /> Supreme!,
            <br />
            Supreme! <br /> Supreme Education Foundation
          </p>
        </div>
      </div>
    </div>
  );
};
