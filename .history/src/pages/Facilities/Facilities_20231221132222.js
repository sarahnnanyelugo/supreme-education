import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/fac1.png";
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
export const Facilities = () => {
  return (
    <div className="eyfs-div">
      <Banner
        pageTitle="Facilities"
        banner={LandingImg}
        links={studentLife}
        mainpage="STUDENT LIFE"
      />
      <div className=" col-md-10 offset-md-1 mt7 ">
        <div className="flexy">
          <div className=" col-md-6">
            <h4>Library</h4>
            <p>
              The Information Centre / Library in Supreme Education Foundation
              School is a storehouse of knowledge and diverse fields, definitely
              one of the best libraries in Lagos.Other than books, online
              resources covering science and technology, humanities and the
              social sciences, there are research materials and bibliographies
              chronicling different eras.
            </p>
            <p>
              {" "}
              National and international dailies, magazines/periodicals, guides
              and reference services are available for students, staff and
              parents.
            </p>
          </div>
          <div className="col-md-6">
            {" "}
            <img src={Img} width="100%" alt="pics" />
          </div>
        </div>
        <div className="flexy mt3">
          <div className="col-md-6">
            {" "}
            <img src={Img2} width="100%" alt="pics" />
          </div>
          <div className=" col-md-6">
            <h4>Library</h4>
            <p>
              The Information Centre / Library in Supreme Education Foundation
              School is a storehouse of knowledge and diverse fields, definitely
              one of the best libraries in Lagos.Other than books, online
              resources covering science and technology, humanities and the
              social sciences, there are research materials and bibliographies
              chronicling different eras.
            </p>
            <p>
              {" "}
              National and international dailies, magazines/periodicals, guides
              and reference services are available for students, staff and
              parents.
            </p>
          </div>
        </div>{" "}
        <div className="flexy mt3">
          <div className="col-md-6">
            {" "}
            <img src={Img2} width="100%" alt="pics" />
          </div>
          <div className=" col-md-6">
            <h4>Library</h4>
            <p>
              The Information Centre / Library in Supreme Education Foundation
              School is a storehouse of knowledge and diverse fields, definitely
              one of the best libraries in Lagos.Other than books, online
              resources covering science and technology, humanities and the
              social sciences, there are research materials and bibliographies
              chronicling different eras.
            </p>
            <p>
              {" "}
              National and international dailies, magazines/periodicals, guides
              and reference services are available for students, staff and
              parents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
