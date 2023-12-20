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
      <div className="flexy col-md-10 offset-md-1">
        <div className="col-md-8">
          <p>
            Admission is strictly by merit, without bias of sex, religion,
            ethnic or cultural background. Entry age into our crèche is from 3
            months, Play Group is from 18 months, Nursery is from 2 years, Year
            1 is from 5 years and Year 7 at least 10 years old as at December
            31st of the admission year.
          </p>
        </div>
      </div>
    </div>
  );
};
