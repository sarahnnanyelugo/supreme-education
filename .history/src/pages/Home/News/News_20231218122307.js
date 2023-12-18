import React, { useState } from "react";

export const News = () => {
  const [activeIndex2, setActiveIndex2] = useState(1);
  const handleClick = (index) => setActiveIndex2(index);

  const checkActive = (index, className) =>
    activeIndex2 === index ? className : "";

  return (
    <div>
      <div className="tabs2 offset-md-1">
        <button
          className={`tab2 ${checkActive(1, "active3")}`}
          onClick={() => handleClick(1)}
        >
          Monthly
        </button>
        <button
          className={`tab2 ${checkActive(2, "active3")}`}
          onClick={() => handleClick(2)}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};
