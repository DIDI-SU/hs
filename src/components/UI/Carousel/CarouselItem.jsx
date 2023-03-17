import React from "react";
import { IMAGE } from "../../../App";

const CarouselItem = ({ item }) => {
  const { url, alt, name, id } = item;

  return (
    <div className="carousel-item w-full " key={alt + 1}>
      <img
        src={`https://hs-backs.herokuapp.com${url}`}
        alt={alt}
        className="w-full"
      />
    </div>
  );
};

export default CarouselItem;
