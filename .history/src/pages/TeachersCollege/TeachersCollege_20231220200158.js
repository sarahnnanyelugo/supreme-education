import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/teacher1.png";
import Img from "../../assets/images/teach.png";
import Img2 from "../../assets/images/eyfs4.png";
import Img3 from "../../assets/images/eyfs5.png";
import Img4 from "../../assets/images/ola.png";
import Dot from "../../assets/images/dot2.png";
import { academicss } from "../../TestData";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { academics } from "../../TestData";
import "./eyfs.scss";
export const TeachersCollege = () => {
  return (
    <div className="eyfs-div">
      <Banner
        pageTitle="Teachers College"
        banner={LandingImg}
        links={academics}
        mainpage="Academics"
      />
      <div className=" col-md-10 offset-md-1 mt flexy">
        <div className=" col-md-8">
          <p>
            Supreme Teacher’s College is an education training institute that
            provides training and continuing professional development in
            virtually all dsciplines, but particularly for professionals (school
            owners, teachers, school heads, middle managers, school support
            staff and other stakeholders in education) in both the private and
            public sector in education.
          </p>
          <h3>Our Services</h3>
          <ul className="list-unstyled">
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Training and Workshop
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Learning Camp
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Curriculum Development
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Summer Retreat
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Strategic Planning & Implementation
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              SEF Family Enrichment Programme
            </li>{" "}
          </ul>
          <button className="app-btn">Download Training Calendar</button>
        </div>
        <div className="col-md-4">
          {" "}
          <img src={Img} width="100%" alt="pics" />
        </div>
      </div>
    </div>
  );
};
