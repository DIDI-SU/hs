import React from "react";

const FinalInfo = ({ data }) => {
  return (
    <div className=" flex flex-col mx-4">
      <h3 className=" text-white font-semibold  mx-4">공지문</h3>
      {data.map(({ id, text }) => (
        <span className=" flex  text-white/60 text-xs my-2" key={"text" + id}>
          <p className=" mx-2  ">💙</p> {text}
        </span>
      ))}
    </div>
  );
};

export default FinalInfo;
