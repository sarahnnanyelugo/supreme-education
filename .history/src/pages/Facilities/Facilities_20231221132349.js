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
            <h4>Medical</h4>
            <p>
              On admission into Supreme, new entrants are given the Student
              Medical Record form, to be completed by the parents; and the
              Physical Examination form, to be completed by a physician.
              Continuing students are required to update these records at the
              beginning of every session. This is essential for a thorough
              monitoring of the health condition of all our students. The school
              operates a clinic managed by qualified resident nurses. Severe
              cases are referred to the hospital, and parents promptly informed.
            </p>
          </div>
        </div>{" "}
        <div className="flexy mt3">
          <div className=" col-md-6">
            <h4>Sports</h4>
            <p>
              We recognize the impact of sports and exercise on the total mental
              and physical well-being of an individual. Therefore, sports is an
              integral part of the learning experience we offer. The first phase
              of our sports complex provided for a standard soccer pitch, a
              swimming pool, multi- court facility for basketball, lawn tennis
              and volleyball. The second phase will provide a tartan finish to
              the athletics track and a spectator stand. Our annual inter-house
              athletics competition has been a breeding ground for acclaimed
              talents in track and field.
            </p>
          </div>
          <div className="col-md-6">
            {" "}
            <img src={Img3} width="100%" alt="pics" />
          </div>
        </div>
      </div>
    </div>
  );
};
