import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/act1.png";
import Img from "../../assets/images/act1.png";
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
