import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/calendar.png";
import Img from "../../assets/images/curr2.png";
import Img2 from "../../assets/images/curr3.png";
import Img3 from "../../assets/images/curr4.png";
import Img4 from "../../assets/images/ola.png";
import Dot from "../../assets/images/dot2.png";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { academics } from "../../TestData";
import "./eyfs.scss";
export const AcademicCalendar = () => {
  return (
    <div className="eyfs-div">
      <Banner
        pageTitle="Academic Calendar"
        banner={LandingImg}
        links={academics}
        mainpage="Academics"
      />
      <div className=" col-md-10 offset-md-1 mt flexy">
        <div className=" col-md-8">
          <h5>Key dates for Harvest Term 2023/2024 Academic Session</h5>
          <div className="card">
            <div className="flexy flexyM">
              <div className="col-md-7">
                <input type="search" placeholder="search" />
              </div>
              <div className="col-md-2 offset-md-3">
                <button>Download</button>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left">
                <h6>Date</h6>
              </div>
              <div className="col-md-6 right">
                <h6>Event</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left">
                <h6>Date</h6>
              </div>
              <div className="col-md-6 right">
                <h6>Monday, September 4th</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left">
                <h6>Virtual Resumption</h6>
              </div>
              <div className="col-md-6 right">
                <h6>Sunday, September 10th</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left">
                <h6>Date</h6>
              </div>
              <div className="col-md-6 right">
                <h6>Event</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left">
                <h6>Date</h6>
              </div>
              <div className="col-md-6 right">
                <h6>Event</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left">
                <h6>Date</h6>
              </div>
              <div className="col-md-6 right">
                <h6>Event</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left">
                <h6>Date</h6>
              </div>
              <div className="col-md-6 right">
                <h6>Event</h6>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
