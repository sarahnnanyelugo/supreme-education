import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/enquiry.png";
import { admissions } from "../../TestData";
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
          <h6>First and Last Name *</h6>
          <input type="text" />
          <h6>Email address *</h6>
          <input type="text" /> <h6>Mobile number *</h6>
          <input type="tel" />
        </div>
      </div>
    </div>
    
  );
};
