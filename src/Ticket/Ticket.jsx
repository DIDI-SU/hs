import React from "react";
import { useContext, useState } from "react";
import Map from "../components/Map/Map";
import { UserContext } from "../context/UserContext";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
const FINDROAD =
  "https://map.kakao.com/link/to/영등포구 도림로125길 6 2층,37.513314100557,126.895787743236";

const Ticket = () => {
  const { isParticipate, handleParticipate } = useContext(UserContext);
  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector(".card")).then((blob) => {
      saveAs(blob, "card.png");
    });
  };

  return (
    <main className="max-w-2xl make-center   mx-auto my-[50px]">
      <article className="card  bg-white p-6 rounded-md w-4/5">
        <section className=" border-b-2 my-2 ">
          <div>
            <h1 className=" text-[14px] text-black font-semibold">
              모바일 티켓
            </h1>
            <h2 className=" text-[8px] my-1">HS781220-800326</h2>
          </div>
        </section>
        <section className="  border-b-2   py-2">
          <div>
            <p className=" text-[14px] text-black font-semibold ">
              20세기소년(20世紀少年)
            </p>
            <p className=" text-[8px] my-1">디지털 | 청소년관람불가</p>
          </div>
        </section>
        <section className=" flex  border-b-2   py-2">
          <div className=" flex  text-[8px] justify-start my-1 flex-col">
            <p className=" mr-14 text-[#494d72]">상영일시</p>
            <p className="">2023-03-25(토)</p>
          </div>
          <div className="flex  text-[8px] justify-start my-1 flex-col">
            <p className="mr-2 text-[#494d72]">상영관</p>
            <p>서울내</p>
          </div>
        </section>
        <section className="flex  text-[8px] justify-start my-1 flex-col  py-2">
          <p className=" mr-14 text-[#494d72]">좌석정보</p>
          <div>
            <p>{isParticipate[0].name}</p>
          </div>
        </section>
        <section>
          <button
            className={`btn w-full  bg-[#494d72] btn ${
              isParticipate[0].participate && "btn-disabled"
            }`}
            onClick={(e) => {
              handleParticipate(e);
            }}
          >
            {isParticipate[0].participate ? "입장 완료" : "입장확인"}
          </button>
        </section>
      </article>
      <Map />
      <article className="w-3/5">
        <div className=" flex flex-row border boreder-1  rounded-md  mt-[20px]">
          <button
            className=" btn bg-transparent border-0 border-r-[1px] border-white rounded-none flex items-center  w-1/2 "
            onClick={() => {
              onDownloadBtn();
            }}
          >
            <p>공유하기</p>
          </button>
          <button
            className=" btn bg-transparent border-0  border-white rounded-none flex items-center  w-1/2 "
            onClick={() => {
              window.open(FINDROAD);
            }}
          >
            <p>가는길 검색하기</p>
          </button>
        </div>
      </article>
    </main>
  );
};

export default Ticket;
