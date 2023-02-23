import React from "react";

const InfoTable = ({ data }) => {
  return data.map(({ title, content }) => (
    <span className=" flex items-center justify-center  flex-row  my-2">
      <p className=" w-3/5 text-center text-[#D0D0D0]/50  my-1">{title}</p>
      <p className=" w-3/5 text-center my-1 text-white">{content}</p>
    </span>
  ));
};

export default InfoTable;
