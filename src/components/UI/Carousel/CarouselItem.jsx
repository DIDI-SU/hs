import React from "react";
import { IMAGE } from "../../../App";
import { ROOT_API } from "../../../App";
const CarouselItem = ({ item }) => {
  const { url, alt, name, id } = item;

  return (
    <div className="carousel-item w-full " key={alt + 1}>
      <img src={ROOT_API + url} alt={alt} className="w-full" />
    </div>
  );
};

export default CarouselItem;
