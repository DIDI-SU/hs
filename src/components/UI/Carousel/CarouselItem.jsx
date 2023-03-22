import React from "react";
const CarouselItem = ({ item }) => {
  const { url, alt, id } = item;

  return (
    <div className="carousel-item w-full " key={alt + id}>
      <img src={url} alt={alt} className="w-full" />
    </div>
  );
};

export default CarouselItem;
