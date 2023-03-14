import React, { useEffect, useState } from "react";
import { IMAGE } from "../../App";
import CarouselItem from "../UI/Carousel/CarouselItem";
import CarouselWapper from "../UI/Carousel/CarouselWapper";
import InfoTable from "./InfoTable/InfoTable";

const MOVIE_DATA = [
  { title: "개봉", content: "2023년 3월 25일(예정)" },
  { title: "장소", content: "D-14공개" },
  { title: "장르", content: "로맨스 코미디/125분" },
  { title: "등급", content: "청소년관람불가" },
  { title: "감독", content: "윤떤남자" },
];

const GIFT_DATA = [
  { title: "엽서", content: "1매" },
  { title: "A4포스터", content: "1매" },
  { title: "소주라벨지", content: "1매" },
  { title: "키링", content: "1개" },
];

const MovieInfo = () => {
  const [chosenTable, setChosenTable] = useState("movieInfo");
  const [images, steImages] = useState([]);

  const userLogin = async () => {
    try {
      const response = await fetch(`${IMAGE}`, {
        method: "GET",
        headers: {
          "Content-Type": "image/jpeg",
        },
      });

      const data = await response.json();

      if (data?.error) {
        throw data?.error;
      } else {
        steImages([...data]);
      }
    } catch (error) {
      console.log(error?.message ?? "Something went wrong!");
    } finally {
    }
  };
  useEffect(() => {
    userLogin();
  }, []);

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
            <CarouselWapper>
              {images.map((items) => {
                return <CarouselItem item={items} />;
              })}
            </CarouselWapper>
          </>
        )}
      </div>
    </>
  );
};

export default MovieInfo;