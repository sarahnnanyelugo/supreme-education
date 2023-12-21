import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/boarding1.png";
import Img from "../../assets/images/boarding2.png";
import Img2 from "../../assets/images/boarding3.png";
import Img3 from "../../assets/images/boarding4.png";
import Img4 from "../../assets/images/boarding5.png";
import Img5 from "../../assets/images/boarding6.png";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/boarding7.png";
import Img7 from "../../assets/images/tour.png";
import { academics } from "../../TestData";
import "./eyfs.scss";
export const BoardingSchool = () => {
  return (
    <div className="eyfs-div">
      <Banner
        pageTitle="Boarding School"
        banner={LandingImg}
        links={academics}
        mainpage="STUDENT LIFE"
      />
      <div className=" col-md-10 offset-md-1 mt flexy">
        <div className=" col-md-8">
          <h4>Boarding in Supreme is an amazing School Life Experience</h4>
          <p>
            The school provides comfortable hostel accommodation under the
            supervision of experienced hostel parents. Students are taught to be
            independent as well as co-exist with one another. Boys and girls are
            housed in separate hostels. Each floor of the hostels has a common
            room, adequate sanitary facilities, and a hostel parent’s apartment.
            We have taken special care to ensure that the hostels are homes
            where students feel secure and happy.
          </p>
        </div>
        <div className="flexy">
          <div className="col-md-8"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};
