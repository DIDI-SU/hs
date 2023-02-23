import React from "react";

const BigCard = () => {
  return (
    <div className=" my-5">
      <img src="./articleimg/article.JPG" className=" w-72 rounded-md  h-52" />
      <div className=" absolute w-72 ">
        <div className=" relative bottom-[39px] w-full   bg-black rounded-b-md opacity-[0.5]">
          <p className="p-2 text-white  font-semibold  text-opacity-[1]">
            늘 항상 언제나 응원해
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
