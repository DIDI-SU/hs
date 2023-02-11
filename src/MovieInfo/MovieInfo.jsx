import React from "react";
import InfoTable from "./InfoTable/InfoTable";
//text-[#D0D0D0]/70

const MovieInfo = () => {
  return (
    <>
      <div className=" w-screen border border-[#D0D0D0]/50 border-x-0 border-y-0  ">
        <ul className=" flex  flex-row items-center justify-around border border-[#D0D0D0]/50 border-x-0  ">
          <li className=" px-2 text-white font-light">정보</li>
          <li className="px-2  text-white font-light">특전정보</li>
        </ul>
        <InfoTable />
      </div>
    </>
  );
};

export default MovieInfo;
