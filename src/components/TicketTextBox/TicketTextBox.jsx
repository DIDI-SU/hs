import React from "react";

const TicketTextBox = ({ name, content, isRow }) => {
  return (
    <div className="flex flex-col  items-center justify-center ">
      <p className=" text-[8px] ">{name}</p>
      <p className=" text-xs text-black">{content}</p>
    </div>
  );
};

export default TicketTextBox;
