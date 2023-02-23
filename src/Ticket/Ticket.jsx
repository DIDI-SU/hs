import React from "react";
import FinalInfo from "../components/FinalInfo/FinalInfo";

const TICKET_TEXT = ["편안한 관람을 위해 두손은 가볍게 방문해주세요"];

const Ticket = () => {
  return (
    <main className="max-w-2xl make-center   mx-auto my-[20px]">
      <article className="bg-white p-6 rounded-md w-3/5">
        <section className=" border-b-2 my-2 ">
          <div>
            <h1 className=" text-[14px] text-black font-semibold">
              모바일 티켓
            </h1>
            <h2 className=" text-[8px] my-1">HS800325-</h2>
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
            <p>참여자이름</p>
          </div>
        </section>
        <section>
          <button className="btn w-full  bg-[#494d72]">입장확인</button>
        </section>
      </article>
      <article>
        <section className="border border-whit/50  w-3/5 rounded-md p-4  make-center   mx-auto  my-4">
          <FinalInfo data={TICKET_TEXT} />
        </section>
      </article>
      <article className="w-3/5">
        <div className=" flex flex-row border boreder-1  rounded-md  ">
          <button className=" btn bg-transparent border-0 border-r-[1px] border-white rounded-none flex items-center  w-1/2 ">
            <p>공유하기</p>
          </button>
          <button className=" btn bg-transparent border-0  border-white rounded-none flex items-center  w-1/2 ">
            <p>위치안내</p>
          </button>
        </div>
      </article>
    </main>
  );
};

export default Ticket;
