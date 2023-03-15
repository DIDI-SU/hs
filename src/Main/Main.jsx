import React from "react";

const Main = ({ children }) => {
  return (
    <main
      className="flex flex-col items-center justify-center   mx-auto  
bg-[#4C495E] "
    >
      <article className="max-w-xl flex flex-col items-center justify-center  pb-28  ">
        {children}
      </article>
    </main>
  );
};

export default Main;
