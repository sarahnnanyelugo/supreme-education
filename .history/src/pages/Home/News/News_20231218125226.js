import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./news.scss";
import Img1 from "../../../assets/images/class-std.png";
import Img2 from "../../../assets/images/leverage.png";

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
        <Link to={""} className="tab2">
          X(Twitter)
        </Link>
        <Link to={""} className="tab2">
          Youtube
        </Link>
      </div>
      <div className="panels col-md-10 offset-md-1">
        <div className={`panel ${checkActive(1, "active3")}`}>
          <div className="flexy">
            {" "}
            <div className="col-md-6 tab-overlay">
              {" "}
              <img src={Img1} alt="sch-images" width="97%" />
              <div className="overlayed col-md-10 offset-md-1"></div>
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <img src={Img2} alt="sch-images" width="100%" />
            </div>
          </div>
        </div>
        <div className={`panel ${checkActive(2, "active3")}`}>2</div>
        <div className={`panel ${checkActive(3, "active3")}`}>3</div>
      </div>
    </div>
  );
};
