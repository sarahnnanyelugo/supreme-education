import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/high1.png";
import Img from "../../assets/images/high2.png";
import Img2 from "../../assets/images/high3.png";
import Img3 from "../../assets/images/high4.png";
import Img4 from "../../assets/images/yusuf.png";
import Dot from "../../assets/images/dot2.png";
import { academicss } from "../../TestData";
import { Link } from "react-router-dom";
import Slider1 from "../../assets/images/uni.png";
import Img7 from "../../assets/images/tour.png";
import { academics } from "../../TestData";
import "./senior.scss";
import Carousel from "react-bootstrap/Carousel";

export const SeniorSchool = () => {
  return (
    <div className="senior-div">
      <Banner
        pageTitle="High School"
        banner={LandingImg}
        links={academics}
        mainpage="Academics"
      />
      <div className=" col-md-10 offset-md-1 mt flexy">
        <div className=" col-md-8">
          <p>
            We are a co-educational private school located within a residential
            estate. The school welcomed its first set of students in October
            1991. The school has thrived for more than three decades and
            celebrates continuous improvement. Supreme Schools currently enrols
            over 700 students across the primary, middle, and high schools from
            within and outside Nigeria.
          </p>
          <br />
          <p>
            {" "}
            Our academic programs are organized on a trimester schedule. Our
            students offered subjects such as
          </p>
          <div className="flexy">
            <ul className="list-unstyled col-md-3">
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Mathematics
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                English
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Physics
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Chemistry
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Biology
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Economics
              </li>{" "}
            </ul>{" "}
            <ul className="list-unstyled">
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                French
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Photography
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Food & Nutrition
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Civic Education
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Global Perspectives
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                and others
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
      <div className="flexy col-md-10 offset-md-1">
        <div className="col-md-6">
          <p>
            {" "}
            We run a blended curriculum that is centered on both the Nigerian
            and British curriculum. Hence, our students write Cambridge
            Checkpoint and BECE external examinations in Year 9. Supreme
            students typically graduate at the end of Year 12 after sitting for
            West African Senior School Certificate Examination (WASSCE)while few
            would proceed to A level schools across the globe. IGCSE and SAT are
            optional examinations.
          </p>
        </div>
        <div className="col-md-6">
          {" "}
          <img src={Img} width="100%" alt="pics" />
        </div>
      </div>
      <div className="flexy col-md-10 offset-md-1">
        {" "}
        <div className="col-md-6 math">
          {" "}
          <img src={Img2} width="90%" alt="pics" />
        </div>
        <div className="col-md-6 mt7">
          <h2>High Schools’ Curriculum</h2>
          <p>
            {" "}
            A blend of Nigerian and British curricula which prepare and equip
            students for higher education and entry into advanced level
            undergraduate programmes across the world.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 mt7 flexy">
        <div className="col-md-6">
          <p>
            Volleyball, Football, Table tennis, Badminton, Swimming, Dance,
            Basketball, Phonics, Music, Taekwondo, Athletics, Golf,
            Cheerleading, Igbo, Yoruba, Drama, French, Reading, Football, Chess,
            Robotics, Steam, Music, Go Techy (Animation), Athletics, ICT, STEAM,
            Coding, Fashion Club, Scrabble, Basketball, Public Speaking/Literary
            & Debating, Reading, Cooking Club, Model African Union,
            Phonics/Elocution, Young Writer’s Workshop, among others.
          </p>
          <p>
            {" "}
            Our students have participated in programs like the Duke of
            Edinburgh Awards (International Award for Young People in Nigeria),
            Yale Young Global Scholars (YYGS), Yale Young African Scholars
            (YYAS) program, African Leadership Academy Model African Union
            (ALAMAU), Ashesi Innovation Experience, Junior Achievement
            Enterprise Challenge, TechGirls, Leadership camps, community service
            as well as individually driven social projects.
          </p>
          <br />
          <h2>College Application Policy</h2>
          <p>
            Students are well enlightened about the college application
            processes and expectations. Universities and colleges that receive
            applications can be assured that applicants have a good sense of
            what is expected of them.
          </p>
          <h3 className="mt4">Principal, High School</h3>
          <div className="col-md-5">
            {" "}
            <img src={Img4} width="100%" alt="pics" />
            <h6>Mr. Yusuf Abubakar</h6>
          </div>
        </div>
        <div className="col-md-6">
          <img src={Img3} width="100%" alt="pics" />
        </div>
      </div>{" "}
      <center>
        <div className="col-md-5 mt">
          <h1>University Destinations</h1>

          <p>
            Supreme has a proud record of producing graduates who have been
            admitted into prestigious universities around the world
          </p>
        </div>{" "}
      </center>
      <div className="uni-images col-md-10 offset-md-1">
        <Carousel fade>
          <Carousel.Item>
            <img src={Slider1} alt="sch-images" width="100%" />
          </Carousel.Item>
          <Carousel.Item>
            {/* <img src={Slider2} alt="sch-images" width="100%" /> */}
          </Carousel.Item>
          <Carousel.Item>
            {/* <img src={Slider3} alt="sch-images" width="100%" /> */}
          </Carousel.Item>{" "}
        </Carousel>
      </div>
    </div>
  );
};
