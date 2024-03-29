import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/images/slide1.png";
import Slider2 from "../../assets/images/slide2.png";
import Slider3 from "../../assets/images/slide3.png";
import Slider4 from "../../assets/images/slide4.png";
import Slider5 from "../../assets/images/slide5.png";
import Img1 from "../../assets/images/music.png";
import Img2 from "../../assets/images/award.png";
import Img3 from "../../assets/images/cook.png";
import Img4 from "../../assets/images/recite.png";
import Img5 from "../../assets/images/dance.png";
import Img6 from "../../assets/images/eyfs.png";
import Img7 from "../../assets/images/junior.png";
import Img8 from "../../assets/images/high.png";
import Img9 from "../../assets/images/boarding.png";
import Img10 from "../../assets/images/med.png";
import Img11 from "../../assets/images/lib.png";
import Img12 from "../../assets/images/sports.png";
import Img13 from "../../assets/images/sch.png";
import Img14 from "../../assets/images/doc.png";
import Img15 from "../../assets/images/teacher.png";
import Img16 from "../../assets/images/people.png";
import Img17 from "../../assets/images/oluchi.png";
import Img18 from "../../assets/images/q1.png";
import Img19 from "../../assets/images/q2.png";
import Img20 from "../../assets/images/grouped.png";
import CountUp from "react-countup";

import "./home.scss";
import { News } from "./News/News";
import { Link } from "react-router-dom";
import { PageModal } from "../../components/Modal/Modal";
export const Home = () => {
  return (
    <>
      <div className="landing-images">
        {" "}
        <Carousel fade>
          <Carousel.Item>
            <img src={Slider1} alt="sch-images" />
            <Carousel.Caption>
              <h1>
                A Place of Care <br />
                and Excellence
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slider2} alt="sch-images" />
            <Carousel.Caption>
              <h1>
                A Place of Care <br />
                and Excellence
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slider3} alt="sch-images" />
            <Carousel.Caption>
              <h1>
                A Place of Care <br />
                and Excellence
              </h1>
            </Carousel.Caption>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img src={Slider4} alt="sch-images" />
            <Carousel.Caption>
              <h1>
                A Place of Care <br />
                and Excellence
              </h1>
            </Carousel.Caption>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img src={Slider5} alt="sch-images" />
            <Carousel.Caption>
              <h1>
                A Place of Care <br />
                and Excellence
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <center>
          {" "}
          <h1 className="mt">Welcome to Supreme</h1>
        </center>
        <center>
          <div className="col-md-5 mt1 welcome-div">
            {" "}
            <p>
              Supreme Education Foundation School is a centre of excellence
              designed to provide world-class education in an exciting learning
              environment for students between the ages of 3 months to 18 years.{" "}
            </p>
            <Link to={"/founder"} className="app-btn">
              {" "}
              Learn more
            </Link>
          </div>
        </center>
      </div>
      <center>
        <div className="col-md-9 mt">
          {" "}
          <img src={Img20} alt="sch-images" width="100%" />
        </div>
      </center>
      <div className="lifetime-div mt">
        <div className="flexy">
          <div className="col-md-5 mt5">
            <h1>A lifetime learning environment</h1>
            <p className="mt4 col-md-9">
              Your child will embark on an exciting journey with an Alex
              education. She will excitedly arrive at school at three, carrying
              her bag. She will be begging for her own space when she is twelve.
              She'll take on the world at eighteen.
            </p>
          </div>
          <div className="col-md-5 offset-md-1 eyfs">
            {" "}
            <img
              src={Img6}
              alt="sch-images"
              width="100%"
              className="col-md-11"
            />
            <div className="overlay">
              {" "}
              <h1>EYFS</h1>
              <p>
                EYFS at Supreme Education Foundation School ensures that every
                child's individual needs are met, fostering holistic development
                accross various domains-physical, social, emotional and
                cognitive.
              </p>
              <Link to={"/eyfs"}>
                {" "}
                <button>Learn more</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flexy col-md-9 offset-md-2 mt5">
          <div className="col-md-6  eyfs mvt">
            {" "}
            <img
              src={Img7}
              alt="sch-images"
              width="100%"
              className="col-md-11"
            />
            <div className="overlay">
              {" "}
              <h1>Junior School</h1>
              <p>
                EYFS at Supreme Education Foundation School ensures that every
                child's individual needs are met, fostering holistic development
                accross various domains-physical, social, emotional and
                cognitive.
              </p>
              <button>Learn more</button>
            </div>
          </div>{" "}
          <div className="col-md-6  eyfs mvt">
            {" "}
            <img
              src={Img8}
              alt="sch-images"
              width="100%"
              className="col-md-11"
            />
            <div className="overlay">
              {" "}
              <h1>High School</h1>
              <p>
                EYFS at Supreme Education Foundation School ensures that every
                child's individual needs are met, fostering holistic development
                accross various domains-physical, social, emotional and
                cognitive.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt flexy col-md-10 offset-md-1 facilities">
        <div className="col-md-4 explore">
          <h1>Explore Supreme Education</h1>
          <div className="second-title">
            {" "}
            <h1>Explore all Supreme facilities</h1>
          </div>
        </div>
        <div className="col-md-4 mvt">
          <div className="facs col-md-12">
            {" "}
            <img
              src={Img9}
              alt="sch-images"
              width="100%"
              className="col-md-11"
            />
            <div className="overlay2">
              {" "}
              <h1>Boarding</h1>
            </div>
          </div>{" "}
          <br />
          <div className="facs col-md-12">
            {" "}
            <img
              src={Img11}
              alt="sch-images"
              width="100%"
              className="col-md-11 "
            />{" "}
            <div className="overlay2">
              <h1>Library</h1>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="facs col-md-12 mvt">
            {" "}
            <img
              src={Img10}
              alt="sch-images"
              width="100%"
              className="col-md-11"
            />{" "}
            <div className="overlay2">
              <h1>Medical</h1>
            </div>
          </div>
          <br />{" "}
          <div className="facs col-md-12">
            {" "}
            <img
              src={Img12}
              alt="sch-images"
              width="100%"
              className="col-md-11"
            />{" "}
            <div className="overlay2">
              <h1>Sport</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt glance">
        <center>
          <h1>Supreme Education at a glance</h1>
        </center>
        <div className="flexy mt5  container">
          <div className="col-md-3 sch">
            <center>
              <img src={Img13} alt="sch-images" height="96px" width="96px" />{" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={4}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix=""
                  enableScrollSpy={true}
                />
              </h1>
              <h6>Certified schools</h6>
            </center>
          </div>{" "}
          <div className="col-md-3 std">
            <center>
              <img src={Img14} alt="sch-images" height="96px" width="96px" />{" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={1491}
                  duration={3}
                  decimal=","
                  prefix=" "
                  suffix="+"
                  enableScrollSpy={true}
                />
              </h1>
              <h6>Students enrolled to date</h6>
            </center>
          </div>{" "}
          <div className="col-md-3 uni">
            <center>
              <img src={Img15} alt="sch-images" height="96px" width="96px" />{" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix="%"
                  enableScrollSpy={true}
                />
              </h1>
              <h6>Passing to universities</h6>
            </center>
          </div>{" "}
          <div className="col-md-3 parents">
            <center>
              <img src={Img16} alt="sch-images" height="96px" width="96px" />{" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix="%"
                  enableScrollSpy={true}
                />
              </h1>
              <h6>Satisfied parents</h6>
            </center>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-8 offset-md-2 stories">
        <center>
          {" "}
          <h1>Supreme Stories</h1>
        </center>
        <div className="flexy flexyM">
          {" "}
          <div className="col-md-2">
            {" "}
            <img src={Img18} alt="sch-images" />
          </div>
          <center>
            {" "}
            <p className="col-md-">
              Supreme is a great school! The teachers here are super about
              encouraging students to do their very best.
            </p>
          </center>
          <div className="col-md-2 offset-md-1">
            {" "}
            <img src={Img19} alt="sch-images" />
          </div>
        </div>
        <center>
          {" "}
          <img src={Img17} alt="sch-images" />
          <h6>Oluchi</h6>
        </center>
      </div>
      <div className="mt">
        {" "}
        <center>
          <h1>News at Supreme</h1>
        </center>
        <News />
      </div>
      <PageModal />
    </>
  );
};
