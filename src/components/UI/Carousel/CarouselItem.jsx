import React from "react";

const CarouselItem = ({ item }) => {
  const { url, alt } = item;
  return (
    <div className="carousel-item w-full ">
      <img src={`http://localhost:1337${url}`} alt={alt} className="w-full" />
    </div>
  );
};

export default CarouselItem;
