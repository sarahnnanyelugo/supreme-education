import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/images/slide1.png";
import Slider2 from "../../assets/images/slide2.png";
import Slider3 from "../../assets/images/slide3.png";
import Slider4 from "../../assets/images/slide4.png";
import Slider5 from "../../assets/images/slide5.png";
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
          <div className="col-md-3">
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
    </>
  );
};
