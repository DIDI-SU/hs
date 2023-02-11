import React from "react";

const TEXT_DATA = [
  { title: "개봉", content: "2023년 3월 25일(예정)" },
  { title: "장소", content: "윤떤남자" },
  { title: "장르", content: "로맨스 코미디/125분" },
  { title: "등급", content: "청소년관람불가" },
  { title: "감독", content: "윤떤남자" },
];

const InfoTable = () => {
  return TEXT_DATA.map(({ title, content }) => (
    <span className=" text-right  flex-row  justify-evenly">
      <p className=" w-1/5 text-center text-[#D0D0D0]/50  my-1">{title}</p>
      <p className=" w-2/5 text-start my-1 text-white">{content}</p>
    </span>
  ));
};

export default InfoTable;
