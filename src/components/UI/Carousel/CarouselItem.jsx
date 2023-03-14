import React from "react";

const CarouselItem = ({ item }) => {
  // const { url, alt } = item;
  //http://localhost:1337${url}
  const { id, name, alt } = item;
  return (
    <div className="carousel-item w-full " key={id + name}>
      <img src={`./before/${name}.png`} alt={alt} className="w-full" />
    </div>
  );
};

export default CarouselItem;
