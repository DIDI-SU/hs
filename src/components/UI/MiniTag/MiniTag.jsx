import React from "react";

const MiniTag = ({ title }) => {
  return (
    <div className="border border-[#D0D0D0]/95  mr-1 rounded-xl">
      <p className=" text-xs  text-[#D0D0D0]/95  p-1">#{title}</p>
    </div>
  );
};

export default MiniTag;
