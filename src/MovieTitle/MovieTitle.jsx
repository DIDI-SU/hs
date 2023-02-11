import React from "react";
import MiniTag from "../MiniTag/MiniTag";
const TITLE = ["단독모임", "온리호상", "절찬영업"];

const MovieTitle = () => {
  return (
    <section className=" flex flex-col items-center justify-center my-3 relative bottom-[120px] ">
      <div className=" flex my-2">
        {TITLE.map((item) => (
          <MiniTag title={item} />
        ))}
      </div>
      <h1 className=" font-bold text-lg  text-[#F8F8FA] opacity-100">
        20세기소년들:24th
      </h1>
      <h2 className=" text-sm font-light text-[#D0D0D0]/70  opacity-100">
        20世紀少年
      </h2>
      <h2 className=" text-sm font-extrabold text-green-700">청소년관람불가</h2>
    </section>
  );
};

export default MovieTitle;
