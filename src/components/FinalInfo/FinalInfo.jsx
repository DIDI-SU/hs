import React from "react";

const FinalInfo = ({ data }) => {
  return (
    <div className=" flex flex-col mx-4">
      <h3 className=" text-white font-semibold  mx-4">공지문</h3>

      {data.map((item) => (
        <span className=" flex  text-white/60 text-xs my-2">
          <p className=" mx-2  ">💙</p> {item}
        </span>
      ))}
    </div>
  );
};

export default FinalInfo;
