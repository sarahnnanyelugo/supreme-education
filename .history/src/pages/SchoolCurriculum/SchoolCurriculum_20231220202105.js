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
                Business Studies
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Chemistry
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Economics
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                English Language
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                English Literature
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                French
              </li>{" "}
            </ul>{" "}
            <ul className="list-unstyled col-md-4">
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Geography
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                History
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Mathematics
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Information Technology
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Music
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Physics
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Physical Education
              </li>{" "}
            </ul>
          </div>
          <img src={Img} width="100%" alt="pics" />
          <br />
          <br />
          <p>
            <strong>AS and A Level Selection</strong>
          </p>
          <p>
            AS and A level courses are offered to students in Years 12 and 13
            who have achieved a minimum of five C grades in their equivalent
            IGCSE subjects. These courses are tailored to suit student needs and
            subjects offered may include: Art and Design, Biology, Business
            Studies, Chemistry, Economics, English Language , English
            Literature, French, Geography, History, Mathematics, Information
            Technology , Music , Physics and Physical Education.
          </p>
          <p>
            Students buy their IGCSE text books through the school; this ensures
            resources are available for reference and revision while at the same
            time facilitating learning.
          </p>
          <p>
            <strong>Extra-Curricular Activities</strong>
            <br />
          </p>
          <p>
            At Supreme Senior we recognise strong academic performance alone is
            not enough. Which is why we invest in extra-curricula activities
            that help our students to develop and stimulate creativity, build
            confidence, learn life skills and create social awareness.
            Activities include dance, drama, computer, chess and music. Students
            are also encouraged to take part in community activities such as
            visiting ages and fund-raising for charity.
          </p>
          <div className="flexy">
            {" "}
            <div className="col-md-6">
              {" "}
              <img src={Img2} width="96%" alt="pics" />
            </div>
            <div className="col-md-6">
              {" "}
              <img src={Img3} width="96%" alt="pics" />
            </div>
          </div>
          <p>
            <strong>School Trips</strong>
          </p>
          <p>
            Student tours and excursions are also part of the Supreme School
            experience, with past locations ranging from places to places.
          </p>{" "}
          <p>
            <strong>Arts & Culture</strong>
            <br />
          </p>
          <p>
            Along with our excellent selection of clubs, sporting opportunities
            and organised day trips, we also encourage an appreciation of the
            Arts. Students are expected to engage in cultural activities during
            each academic term, with stimulating drama productions at special
            celebrations throughout the year.
          </p>
        </div>
        <div className="col-md-4"> </div>
      </div>
    </div>
  );
};
