import React from "react";

const CarouselWapper = ({ children }) => {
  return (
    <div className="carousel rounded-box max-w-lg m-[20px]">{children}</div>
  );
};

export default CarouselWapper;
