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
          <button></button>
        </div>
        <div className="col-md-4">
          {" "}
          <img src={Img} width="100%" alt="pics" />
        </div>
      </div>

      <div className="flexy col-md-9 offset-md-1">
        <div className="col-md-6">
          <img src={Img2} width="96%" alt="pics" />
        </div>
        <div className="col-md-6">
          {" "}
          <img src={Img3} width="96%" alt="pics" />
        </div>
      </div>
      <div className="col-md-8 offset-md-1 mt7">
        <p>
          In addition, as a parent at Supreme Education Foundation School, you
          are not left behind; we encourage active involvement from parents in
          their child’s learning journey and our signature events: Colour Day,
          Tea Party, and EYFS Production. Your role further keeps you grounded
          in our practices towards raising future leaders that will positively
          shape society. We keep you abreast of what’s happening in school via
          daily communication, parent-teacher conferences, and a family
          enrichment program to ensure a collaborative approach to your child’s
          education.
        </p>
        <p>
          We warmly encourage you to visit us today to experience for yourself
          the ambience around the school, the health facilities, and the quality
          of education given to all our children. Together, let’s build a strong
          foundation for your child’s success!
        </p>
        <p>
          We invite you to be a part of this transformative journey. Come, visit
          us, and let’s build the foundation for your child’s success together.
          We look forward to welcoming you into the Supreme Education Foundation
          School family, where every child’s potential is recognized,
          celebrated, and nurtured. Your child’s journey to success begins here.
        </p>
        <h3 className="mt4">Principal of EYFS</h3>
        <div className="col-md-4">
          {" "}
          <img src={Img4} width="100%" alt="pics" />
          <h6>Mrs. Olabisi Osibowale</h6>
        </div>
      </div>
    </div>
  );
};
