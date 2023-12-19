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
      <div className="col-md-10 offset-md-1 mt">
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
