import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/curr1.png";
import Img from "../../assets/images/curr2.png";
import Img2 from "../../assets/images/curr3.png";
import Img3 from "../../assets/images/curr4.png";
import Img4 from "../../assets/images/ola.png";
import Dot from "../../assets/images/dot2.png";
import { academicss } from "../../TestData";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { academics } from "../../TestData";
import "./eyfs.scss";
export const SchoolCurriculum = () => {
  return (
    <div className="eyfs-div">
      <Banner
        pageTitle="School Curriculum"
        banner={LandingImg}
        links={academics}
        mainpage="Academics"
      />
      <div className=" col-md-10 offset-md-1 mt flexy">
        <div className=" col-md-8">
          <p>
            We provide opportunities for students to study the broadest possible
            range of subjects and to acquire a variety of important practical
            and academic skills.
          </p>
          <p>
            <strong>Dedicated Study to Encourage Successful Learning</strong>
          </p>
          <p>
            At Supreme Senior, we ensure all students follow a broad study
            programme, carefully designed to meet the requirements of the
            National Curriculum of England and Wales. Through our programme, we
            prepare our students for successful completion of their secondary
            education at IGCSE, AS and A level.
          </p>
          <p>
            At the end of Year 9, students sit the Key Stage 3 National Test
            Papers in selected core subjects – English, Mathematics and Science,
            providing the school with a useful benchmark in assessing the
            students’ progress. IGCSE selection.
          </p>
          <p>
            These courses are carefully tailored to suit individual student
            needs and subjects offered may include: Art and Design, Biology
            ,Business Studies, Chemistry, Economics, English Language , English
            Literature, French, Geography, History, Mathematics, Information
            Technology , Music , Physics, Physical Education
          </p>

          <div className="flexy flexyM">
            <ul className="list-unstyled col-md-4">
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Art and Design
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Biology
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
            </ul>{" "}
            <ul className="list-unstyled col-md-4">
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
          </div>
          <button className="app-btn">
            {" "}
            <img src={Img2} width="" alt="pics" />
            Download Training Calendar
          </button>
        </div>
        <div className="col-md-4">
          {" "}
          <img src={Img} width="100%" alt="pics" />
        </div>
      </div>
    </div>
  );
};
