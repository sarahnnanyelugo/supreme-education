import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/contact.png";
import locate from "../../assets/images/location.svg";
import Call from "../../assets/images/call.svg";
import Sms from "../../assets/images/sms.svg";

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
        <p>
          For any inquiry, please visit us today. You may also contact us via
          email or give us a call.
        </p>
        <center>
          <h1 className="mt4">SUPREME EDUCATION FOUNDATION SCHOOLS</h1>
        </center>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2296025830005!2d3.3776691106994474!3d6.6183730933481355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a84416230b%3A0xc5baa26ec7dcd095!2sSupreme%20Education%20Foundation%20Schools!5e0!3m2!1sen!2sng!4v1703018630440!5m2!1sen!2sng"
          width="100%"
          height="650"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flexy col-md-10 offset-md-1 mt4">
        <div className="col-md-4">
          <center>
            <img src={Call} alt="icon" />
            <p>
              23, Emmanuel Keshi Road, Magodo G.R.A. Phase 2, Lagos, Nigeria.
            </p>
          </center>
        </div>
        <div className="col-md-4 d">
          <center>
            <img src={Call} alt="icon" />
            <ul className="list-unstyled">
              <li>
                <a href="#">+(234) 8182984015</a>
              </li>
              <li>
                <a href="#">+(234) 8112390403</a>
              </li>
              <li>
                <a href="#">+(234) 8182983143</a>
              </li>
            </ul>
          </center>
        </div>
        <div className="col-md-4">
          <center>
            <img src={Sms} alt="icon" />
            <p>info@supremeeducation.com</p>
          </center>
        </div>
      </div>
    </div>
  );
};
