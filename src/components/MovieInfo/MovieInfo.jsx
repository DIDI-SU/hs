import React, { useState } from "react";

import CarouselItem from "../UI/Carousel/CarouselItem";
import CarouselWapper from "../UI/Carousel/CarouselWapper";
import InfoTable from "./InfoTable/InfoTable";

const MOVIE_DATA = [
  { title: "개봉", content: "2023년 3월 25일(예정)" },
  { title: "장소", content: "D-14공개" },
  { title: "장르", content: "코미디/125분" },
  { title: "등급", content: "청소년관람불가" },
  { title: "감독", content: "윤떤남자" },
];

const GIFT_DATA = [
  { title: "엽서", content: "1매" },
  { title: "A4포스터", content: "1매" },
  { title: "소주라벨지", content: "1매" },
  { title: "키링", content: "1개" },
];

const GIFT = [
  { id: 1, url: "https://i.ibb.co/ZXTrFYV/key.png", alt: "컵안에 키링두개" },
  {
    id: 2,
    url: "https://i.ibb.co/0mb17Ry/all.png",
    alt: "포스터와 컵 그리고 키링두개",
  },
  {
    id: 3,
    url: "https://i.ibb.co/tHXSmyQ/cup.png",
    alt: "컵에 커피가 들어있다",
  },
];

const MovieInfo = () => {
  const [chosenTable, setChosenTable] = useState("movieInfo");
  const [images, steImages] = useState([]);

  return (
    <>
      <div className=" w-screen border border-[#D0D0D0]/50 border-x-0 border-y-0  ">
        <ul className=" flex  flex-row items-center justify-around border border-[#D0D0D0]/50 border-x-0  ">
          <li
            className={
              "px-2 text-white font-light hover:cursor-pointer flex-grow" +
              `${chosenTable === "movieInfo" && "border-white border-b-0"}`
            }
            id="movieInfo"
            onClick={(e) => {
              setChosenTable(e.target.id);
            }}
          >
            정보
          </li>
          <li
            className="px-2  text-white font-lighth hover:cursor-pointer"
            id="giftInfo"
            onClick={(e) => {
              setChosenTable(e.target.id);
            }}
          >
            특전정보
          </li>
        </ul>
        {chosenTable === "movieInfo" ? (
          <InfoTable data={MOVIE_DATA} />
        ) : (
          <>
            <InfoTable data={GIFT_DATA} />

            <section className=" flex  items-center justify-center">
              <CarouselWapper>
                {GIFT.map((items) => {
                  return <CarouselItem item={items} />;
                })}
              </CarouselWapper>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default MovieInfo;
