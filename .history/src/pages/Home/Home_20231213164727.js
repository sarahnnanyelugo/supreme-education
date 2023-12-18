import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/images/slide1.png";
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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slider1} alt="sch-images" width="100%" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slider1} alt="sch-images" width="100%" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
