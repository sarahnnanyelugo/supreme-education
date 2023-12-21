import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/act1.png";
import Img from "../../assets/images/act2.png";
import Img2 from "../../assets/images/act3.png";
import Img3 from "../../assets/images/act4.png";
import Img4 from "../../assets/images/act5.png";
import Dot from "../../assets/images/dot2.png";
import { academicss } from "../../TestData";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { studentLife } from "../../TestData";
import "./activities.scss";
export const Activities = () => {
  return (
    <div className="eyfs-div">
      <Banner
        pageTitle="Co-curricular Activities"
        banner={LandingImg}
        links={studentLife}
        mainpage="STUDENT LIFE"
      />
      <div className=" col-md-10 offset-md-1 mt flexy">
        <div className=" col-md-8">
          <p>
            Our students are given the opportunity to nurture, utilize and
            improve upon their talents in areas other than academics.
            <br />
            <br /> Clubs available include:
          </p>
          <ul className="list-unstyled">
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              JETS
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              ICT
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Math
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Literary & Debating
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Chef
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Board games
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              amongst others
            </li>
          </ul>
          <p>
            We provide Coding and Robotics classes for our students in order to
            equip them for the ever developing world of technology. There are
            several opportunities for field trips within and outside Nigeria to
            enable students explore wider horizons that impact their learning.
          </p>
        </div>
        <div className="col-md-4">
          {" "}
          <img src={Img} width="100%" alt="pics" />
        </div>
      </div>
      <div className="row-cols-1 row-cols-lg-3 g-2 g-lg-3 row col-md-10 offset-md-1 mt4">
        <div className="col">
          {" "}
          <img src={Img2} width="100%" alt="students" />
        </div>{" "}
        <div className="col">
          {" "}
          <img src={Img3} width="100%" alt="students" />
        </div>{" "}
        <div className="col">
          {" "}
          <img src={Img4} width="100%" alt="students" />
        </div>{" "}
      </div>
    </div>
  );
};
