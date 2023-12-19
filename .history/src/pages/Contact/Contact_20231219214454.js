import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/contact.png";

import { about } from "../../TestData";
import "./founder.scss";
export const Contact = () => {
  return (
    <div className="founder-div">
      <Banner
        pageTitle="Contact us"
        banner={LandingImg}
        links={about}
        mainpage="About Us"
        currentPage="Contact us"
      />{" "}
      <div className="col-md-10 offset-md-1 mt5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2296025830005!2d3.3776691106994474!3d6.6183730933481355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a84416230b%3A0xc5baa26ec7dcd095!2sSupreme%20Education%20Foundation%20Schools!5e0!3m2!1sen!2sng!4v1703018630440!5m2!1sen!2sng"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
