import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./news.scss";
import Img1 from "../../../assets/images/class-std.png";
import Img2 from "../../../assets/images/leverage.png";
import Img3 from "../../../assets/images/export.svg";
import Img4 from "../../../assets/images/fb-live.png";
import Img5 from "../../../assets/images/fb-live2.png";
import Img6 from "../../../assets/images/ig-live.png";
import Img7 from "../../../assets/images/ig-live2.png";

export const News = () => {
  const [activeIndex2, setActiveIndex2] = useState(1);
  const handleClick = (index) => setActiveIndex2(index);

  const checkActive = (index, className) =>
    activeIndex2 === index ? className : "";

  return (
    <div className="news-tab">
      <div className="tabs2 offset-md-3 col-md-6 mt5">
        <button
          className={`tab2 ${checkActive(1, "active3")}`}
          onClick={() => handleClick(1)}
        >
          Latest News
        </button>
        <button
          className={`tab2 ${checkActive(2, "active3")}`}
          onClick={() => handleClick(2)}
        >
          Facebook
        </button>
        <button
          className={`tab2 ${checkActive(3, "active3")}`}
          onClick={() => handleClick(3)}
        >
          Instagram
        </button>
        <button to={""} className="tab2">
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fiamsupremesch"
            target="_blank"
          >
            {" "}
            X(Twitter)
          </a>
        </button>
        <button className="tab2">
          <a
            href="https://www.youtube.com/channel/UCS8z8ciwQSZmxAwTyxk2bOQ"
            target="_blank"
          >
            {" "}
            Youtube
          </a>
        </button>
      </div>
      <div className="panels col-md-10 offset-md-1">
        <div className={`panel ${checkActive(1, "active3")}`}>
          <div className="flexy">
            {" "}
            <div className="col-md-6 tab-overlay">
              {" "}
              <img src={Img1} alt="sch-images" width="100%" />
              <div className="overlayed offset-md-1 col-md-10  flexy flexyM">
                <p className="col-md-10">
                  2022 Supreme Education Foundation Scholarship Entrance
                  Examination into Year 7
                </p>
                <img
                  src={Img3}
                  alt="sch-images"
                  width="20px"
                  height="20px"
                  className="offset-md-1"
                />
              </div>
            </div>{" "}
            <div className="col-md-6 tab-overlay mvt">
              {" "}
              <img src={Img2} alt="sch-images" width="100%" />
              <div className="overlayed offset-md-1 col-md-10 flexy flexyM">
                <p>Supreme Leverage Every Friday by 5:00pm</p>
                <img
                  src={Img3}
                  alt="sch-images"
                  width="20px"
                  height="20px"
                  className="offset-md-3"
                />
              </div>
            </div>
          </div>
          <center>
            {" "}
            <button className=" mt5">View all news</button>
          </center>
        </div>
        <div className={`panel ${checkActive(2, "active3")}`}>
          {" "}
          <div className="flexy">
            {" "}
            <div className="col-md-4 tab-overlay">
              {" "}
              <img src={Img4} alt="sch-images" width="100%" />
            </div>{" "}
            <div className="col-md-3 tab-overlay mvt card">
              {" "}
              <p>
                Taekwondo Club had their annual promotion and grading ceremony
                where children were rewarded for their hard work and resilience
                during the academic session .
              </p>
              <Link to={"/"}>
                #Supremecares, #iamsupremesch, #Bestschoolinlagos,
                #Bestschoolinnigeria, #Britishcurriculum, #Nigeriancurriculum,
                #Schoolsinlagos, #Schoolsinnigeria, #playmatters,
                #playbasedlearning, #earlychildhood, #earlychildhoodeducation,
                #earlylearning, #childcare, #learning,#eyfsideas,
                #childdevelopment
              </Link>
            </div>
            <div className="col-md-3 tab-overlay">
              {" "}
              <img src={Img5} alt="sch-images" width="100%" />
            </div>
            <div className="col-md-3 tab-overlay mvt card">
              {" "}
              <p>
                We had our very own student at Business Morning. .#Supremecares,
                #iamsupremesch, #Bestschoolinlagos, #Bestschoolinnigeria,
                #Britishcurriculum, #Nigeriancurriculum, #Schoolsinlagos,
                #Schoolsinnigeria, #playmatters, #playbasedlearning,
                #earlychildhood, #earlychildhoodeducation, #earlylearning,
                #childcare, #learning,#eyfsideas, #childdevelopment
              </p>
            </div>{" "}
          </div>
        </div>
        <div className={`panel ${checkActive(3, "active3")}`}>3</div>
      </div>
    </div>
  );
};
