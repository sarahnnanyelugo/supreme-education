import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/apply.png";
import Dot from "../../assets/images/dot.svg";
import { admissions } from "../../TestData";
import { LinkRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./apply.scss";
export const Enquiry = () => {
  return (
    <div className="apply-div">
      <Banner
        pageTitle="Enquiry"
        banner={LandingImg}
        links={admissions}
        mainpage="Admissions"
      />
      <div className=" col-md-6 offset-md-3 mt">
        <div className="card">
          <center>
            <h4>Kindly drop your information</h4>
          </center>
          <input />
        </div>
      </div>
    </div>
  );
};
