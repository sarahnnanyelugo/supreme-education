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
                <hr />
                <p>Monday, September 4th</p> <hr />
                <p>Sunday, September 10th</p> <hr />
                <p>Monday, September 11th</p>
                <hr />
                <p>Friday, September 22nd</p>
                <hr />
                <p>Saturday, September 23rd</p>
                <hr />
                <p>Friday, September 29th</p>
                <hr />
                <p>Monday, October 9th-18th</p>
                <hr />
                <p>Friday, October 20th</p>
                <hr />
                <p>
                  Monday, October 23rd -Friday, <br />
                  October 27th
                </p>
                <hr />
                <p>Sunday, October 29th</p>
                <hr />
                <p>Monday, October 30th</p>
                <hr />
                <p>Saturday, November 11th</p>
                <hr />
                <p>Friday, November 17th</p>
                <hr />
                <p>Thursday, November 23rd</p>
                <hr />
                <p>
                  Several Days
                  <br /> November 27th - December 6th
                </p>
                <hr />
                <p>
                  Several Days
                  <br /> December 4th - December 7th
                </p>
                <hr />
                <p>Thursday, December 14th</p>
                <hr />
                <p>Friday, December 15th</p>
                <hr />
              </div>
              <div className="col-md-6 right">
                <h6>Event</h6>
                <hr />
                <p>Virtual Resumption</p>
                <hr />
                <p>Boarders Resumes</p>
                <hr /> <p>Junior School SRC Swearing In Ceremony</p>
                <hr /> <p>Supreme Parenting Program 1</p>
                <hr /> <p>Independence Assembly</p>
                <hr /> <p>1st C.A.</p>
                <hr /> <p>PTC</p>
                <hr /> <p>Mid-Term Break</p>
                <hr /> <p>Boardeers Resumes from Mid-Term Break</p>
                <hr /> <p>Whole School Resumes from Mid-Term Break</p>
                <hr /> <p>Parenting Program 2</p>
                <hr /> <p></p>
                <hr /> <p></p>
                <hr /> <p></p>
                <hr /> <p></p>
                <hr /> <p></p>
                <hr /> <p></p>
                <hr /> <p></p>
                <hr /> <p></p>
                <hr />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
