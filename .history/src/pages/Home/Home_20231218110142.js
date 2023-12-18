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
import CountUp from "react-countup";

import "./home.scss";
export const Home = () => {
  return (
    <>
      <div className="landing-images">
        {" "}
        <Carousel fade>
          <Carousel.Item>
            <img src={Slider1} alt="sch-images" width="100%" />
            <Carousel.Caption>
              <h1>
                A Place of Care <br />
                and Excellence
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slider2} alt="sch-images" width="100%" />
            <Carousel.Caption>
              <h1>
                A Place of Care <br />
                and Excellence
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slider3} alt="sch-images" width="100%" />
            <Carousel.Caption>
              <h1>
                A Place of Care <br />
                and Excellence
              </h1>
            </Carousel.Caption>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img src={Slider4} alt="sch-images" width="100%" />
            <Carousel.Caption>
              <h1>
                A Place of Care <br />
                and Excellence
              </h1>
            </Carousel.Caption>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img src={Slider5} alt="sch-images" width="100%" />
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
          <div className="col-md-5 mt welcome-div">
            {" "}
            <h1>Welcome to Supreme</h1>
            <p>
              Supreme Education Foundation School is a centre of excellence
              designed to provide world-class education in an exciting learning
              environment for students between the ages of 3 months to 18 years.{" "}
            </p>
            <button className="app-btn">Learn more</button>
          </div>
        </center>
      </div>
      <div className="col-md-6 flexy offset-md-3 mt">
        <div className="col-md-6 " style={{ marginTop: "160px" }}>
          {" "}
          <img src={Img1} alt="sch-images" width="95%" />
        </div>
        <div className="col-md-6">
          {" "}
          <img src={Img2} alt="sch-images" width="100%" />
        </div>
      </div>
      <div className="col-md-8 offset-md-2 flexy mt6">
        {" "}
        <div className="col-md-4">
          {" "}
          <img src={Img3} alt="sch-images" width="100%" className="col-md-11" />
        </div>
        <div className="col-md-4">
          {" "}
          <img src={Img4} alt="sch-images" width="100%" className="col-md-11" />
        </div>
        <div className="col-md-4">
          {" "}
          <img src={Img5} alt="sch-images" width="100%" className="col-md-11" />
        </div>
      </div>
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
            {/* <div className="overlay">
              {" "}
              <h1>EYFS</h1>
            </div> */}
          </div>
        </div>
        <div className="flexy col-md-9 offset-md-2 mt5">
          <div className="col-md-6  eyfs">
            {" "}
            <img
              src={Img7}
              alt="sch-images"
              width="100%"
              className="col-md-11"
            />
            {/* <div className="overlay">
              {" "}
              <h1>EYFS</h1>
            </div> */}
          </div>{" "}
          <div className="col-md-6  eyfs">
            {" "}
            <img
              src={Img8}
              alt="sch-images"
              width="100%"
              className="col-md-11"
            />
            {/* <div className="overlay">
              {" "}
              <h1>EYFS</h1>
            </div> */}
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
        <div className="col-md-4">
          <div className="facs col-md-12">
            {" "}
            <img
              src={Img9}
              alt="sch-images"
              width="100%"
              className="col-md-11"
            />
            <div className="overlay2"> {/* <h1>EYFS</h1> */}</div>
          </div>{" "}
          <br />
          <div className="facs col-md-12">
            {" "}
            <img
              src={Img10}
              alt="sch-images"
              width="100%"
              className="col-md-11 "
            />{" "}
            <div className="overlay2"></div>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="facs col-md-12">
            {" "}
            <img
              src={Img11}
              alt="sch-images"
              width="100%"
              className="col-md-11"
            />{" "}
            <div className="overlay2"></div>
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
            <div className="overlay2"></div>
          </div>
        </div>
      </div>
      <div className="mt glance">
        <center>
          <h1>Supreme Education at a glance</h1>
        </center>
        <div className="flexy">
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
                  suffix="+"
                  enableScrollSpy={true}
                />
              </h1>
              <h6>Certified schools</h6>
            </center>
          </div>{" "}
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
                  suffix="+"
                  enableScrollSpy={true}
                />
              </h1>
              <h6>Certified schools</h6>
            </center>
          </div>{" "}
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
                  suffix="+"
                  enableScrollSpy={true}
                />
              </h1>
              <h6>Certified schools</h6>
            </center>
          </div>{" "}
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
                  suffix="+"
                  enableScrollSpy={true}
                />
              </h1>
              <h6>Certified schools</h6>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};
