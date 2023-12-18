import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./news.scss";
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
      <div className="panels">
        <div className={`panel ${checkActive(1, "active3")}`}>1</div>
        <div className={`panel ${checkActive(2, "active3")}`}>2</div>
        <div className={`panel ${checkActive(3, "active3")}`}>3</div>
      </div>
    </div>
  );
};
