import React, { useState } from "react";

export const News = () => {
  const [activeIndex2, setActiveIndex2] = useState(1);
  const handleClick = (index) => setActiveIndex2(index);

  const checkActive = (index, className) =>
    activeIndex2 === index ? className : "";

  return <div>News</div>;
};
