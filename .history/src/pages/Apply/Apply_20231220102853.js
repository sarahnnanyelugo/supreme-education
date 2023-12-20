import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/apply.png";
import { admissions } from "../../TestData";
import { LinkRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
export const Apply = () => {
  return (
    <div className="founder-div">
      <Banner
        pageTitle="How to Apply"
        banner={LandingImg}
        links={admissions}
        mainpage="Admissions"
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
          <h2>Steps on how to apply</h2>
          <h6 className="mt4">Step 1: Make payment online</h6>
          <ul className="list-unstyled">
            <li>Early Years Foundation Stage (EYFS) : N10,000</li>
            <li>Junior School (Primary Section): N15, 000 </li>
            <li>High School (Secondary Section): N20, 000</li>
          </ul>
          <h6>
            Step 2: The following hard copies should be submitted to Admissions
            office or scanned to admissions
            <br />
            <Link to={"#"}>@supremeeducation.com</Link>
          </h6>
          <ul>
            <li>2 recent Passport Photographs</li>
            <li>Birth certificate </li>
            <li>Immunization records</li>
            <li>Last result from present school.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
