import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/calendar.png";
import Img from "../../assets/images/download2.svg";
import Img2 from "../../assets/images/curr3.png";
import Img3 from "../../assets/images/curr4.png";
import Img4 from "../../assets/images/ola.png";
import Dot from "../../assets/images/dot2.png";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import Calender from "../../assets/images/academic-calender.pdf";
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
      <div className=" col-md-10 offset-md-1 mt5 flexy inner-page-content">
        <div className=" col-md-8">
          <h5>Key dates for Harvest Term 2023/2024 Academic Session</h5>
          <div className="card">
            <div className="flexy flexyM">
              <div className="col-md-7 col-8">
                <input type="search" placeholder="search" />
              </div>
              <div className="col-md-2 offset-md-3 col-4">
                <a
                  href={Calender}
                  download="Example-PDF-document"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    <img src={Img} alt="icon" />
                    Download
                  </button>
                </a>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left col-6">
                <h5>Date</h5>
              </div>
              <div className="col-md-6 right  col-6">
                <h5>Event</h5>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Monday, September 4th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Virtual Resumption</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Sunday, September 10th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Boarders Resumes</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Monday, September 11th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Whole School Resumes</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Friday, September 22nd</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Junior School SRC Swearing In Ceremony</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Saturday, September 23rd</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Supreme Parenting Program 1</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Friday, September 29th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Independence Assembly</h6>
              </div>
            </div>
            <hr />{" "}
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Monday, October 9th-18th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>1st C.A.</h6>
              </div>
            </div>
            <hr />{" "}
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Friday, October 20th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>PTC</h6>
              </div>
            </div>
            <hr />{" "}
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>
                  Monday, October 23rd -<br />
                  Friday, October 27th
                </h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Mid-Term Break</h6>
              </div>
            </div>
            <hr />{" "}
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Sunday, October 29th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Boardeers Resumes from Mid-Term Break</h6>
              </div>
            </div>
            <hr />{" "}
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Monday, October 30th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Whole School Resumes from Mid-Term Break</h6>
              </div>
            </div>
            <hr />{" "}
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Saturday, November 11th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Parenting Program 2</h6>
              </div>
            </div>
            <hr />{" "}
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Friday, November 17th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>EYFS Colour Day</h6>
              </div>
            </div>
            <hr />{" "}
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Thursday, November 23rd</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Christmas Light On & Thanksgiving</h6>
              </div>
            </div>
            <hr />{" "}
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>
                  Several Days
                  <br /> November 27th - December 6th
                </h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>High School Exam</h6>
              </div>
            </div>
            <hr />{" "}
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>
                  Several Days
                  <br /> December 4th - December 7th
                </h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Junior School Exam</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Thursday, December 14th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>Christmas Concert</h6>
              </div>
            </div>
            <hr />
            <div className="flexy flexyM">
              <div className="col-md-6 left  col-6">
                <h6>Friday, December 15th</h6>
              </div>
              <div className="col-md-6 right  col-6">
                <h6>ARD/End of Term</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
