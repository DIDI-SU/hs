import React from "react";

const Main = ({ children }) => {
  return (
    <main
      className="flex flex-col items-center justify-center   mx-auto  
      bg-gradient-to-b from-[#4C495E]/[.30] via-[#4C495E]/[.99] to-[#4C495E] z-1 "
    >
      <article className="max-w-xl flex flex-col items-center justify-center  pb-28  ">
        {children}
      </article>
    </main>
  );
};

export default Main;
