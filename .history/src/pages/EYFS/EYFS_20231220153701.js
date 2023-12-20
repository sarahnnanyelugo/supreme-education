import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/eyfs2.png";
import Img from "../../assets/images/eyfs3.png";
import Img2 from "../../assets/images/eyfs4.png";
import Img3 from "../../assets/images/eyfs5.png";
import Img4 from "../../assets/images/ola.png";
import Dot from "../../assets/images/dot2.png";
import { academicss } from "../../TestData";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { academics } from "../../TestData";
import "./apply.scss";
export const EYFS = () => {
  return (
    <div className="apply-div">
      <Banner
        pageTitle="EYFS"
        banner={LandingImg}
        links={academics}
        mainpage="Academics"
      />
      <div className=" col-md-10 offset-md-1 mt flexy">
        <div className=" col-md-8">
          <p>
            Our Early Years Foundation Stage is designed for children from three
            months to five years old, providing a structured approach to early
            childhood education. We focus on seven key areas of learning and
            development:
          </p>
          <ul className="list-unstyled">
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Personal, Social, and Emotional Development
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Communication and Language
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Physical Development
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Literacy
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Mathematics
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Understanding the World
            </li>{" "}
            <li>
              <img height="24px" width="24px" alt="icon" src={Dot} />
              Expressive Arts and Design
            </li>
          </ul>
          <p>
            EYFS at Supreme Education Foundation School ensures that every
            child’s individual needs are met, fostering holistic development
            across various domains—physical, social, emotional, and cognitive.
            Every child is unique, and our EYFS program acknowledges this
            diversity. Teachers at Supreme Education Foundation School create
            individualized learning plans, catering to each child’s specific
            strengths and areas for improvement.
          </p>
          <p>
            Recognizing the significance of play in a child’s development, our
            EYFS curriculum incorporates play-based learning strategies; hence,
            our beautiful environment for outdoor learning, which provides a
            natural and enjoyable way for children to explore, learn, and
            develop essential skills.
          </p>
          <div className="flexy">
            <div className="col-md-6">
              <img src={Img} width="100%" alt="pics" />
            </div>
            <div className="col-md-6">
              {" "}
              <img src={Img} width="100%" alt="pics" />
            </div>
          </div>
        </div>
      </div>

      <div className="flexy col-md-10 offset-md-1 founder-div">
        <div className="col-md-6 eyfs">
          {" "}
          <img src={Img6} alt="sch-images" width="100%" className="col-md-11" />
          <div className="overlay">
            {" "}
            <h2>Who we are</h2>
            <button>Learn more</button>
          </div>
        </div>
        <div className="col-md-6 eyfs">
          {" "}
          <img src={Img7} alt="sch-images" width="100%" className="col-md-11" />
          <div className="overlay">
            {" "}
            <h2>Take a virtual Tour</h2>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
