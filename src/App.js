function App() {
  return (
    <>
      <main className=" flex flex-col items-center justify-center   mx-auto bg-[#4C495E]          ">
        <article className="max-w-xl flex flex-col items-center justify-center  pb-28 ">
          <section className="flex flex-col items-center justify-center  ">
            <img src="./poster/example.jpeg" className="w-full h-100" />
          </section>
          <section className="   flex flex-col items-center justify-center my-3  bg-[#4C495E] ">
            <h1 className=" font-bold text-lg  text-[#F8F8FA] opacity-100">
              20세기소년들:24th
            </h1>
            <h2 className=" text-sm font-light  text-[#F8F8FA]  opacity-100">
              20世紀少年
            </h2>
          </section>
          <section className="flex flex-col items-center justify-center ">
            <div className=" flex flex-col items-start  my-5 w-full">
              <p className=" mx-2  text-[#F8F8FA] text-xs">
                "호영아 내가 사랑하는 호영아고마워.다시 형으로 받아주고 나에게
                다시 god를 할 수 있게 기회를 줘서"
              </p>
              <p className=" mx-2   my-1 text-[#F8F8FA] text-xs font-light">
                24년 동안의 사랑이야기를 그린 영화
              </p>
            </div>
            <div className=" my-5">
              <img
                src="./articleimg/article.JPG"
                className=" w-72 rounded-md  h-52"
              />
              <div className=" absolute w-72 ">
                <div className=" relative bottom-[39px] w-full   bg-black rounded-b-md opacity-[0.5]">
                  <p className="p-2 text-white  font-semibold  text-opacity-[1]">
                    늘 항상 언제나 응원해
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className=" w-full  border border-[#D0D0D0]/50 border-x-0  border-t-0 px-5">
              <ul className=" flex items-start ">
                <li className=" px-2">정보</li>
                <li className="px-2">특전정보</li>
              </ul>
            </div>
            <div>
              <span className=" flex items-start my-1">
                <p className=" mx-2">개봉</p>
                <p>2023.3.25(예정)</p>
              </span>
              <span className=" flex items-start   my-1">
                <p className=" mx-2">장르</p>
                <p>로맨틱 코미디/120분</p>
              </span>
              <span className=" flex items-start  my-1">
                <p className=" mx-2">등급</p>
                <p>19세미만 관람금지</p>
              </span>
              <span className=" flex items-start   my-1">
                <p className=" mx-2">감독</p>
                <p>윤떤남자</p>
              </span>
            </div>
          </section>
          <section></section>
        </article>
      </main>
      <footer className=" w-full bg-[#E7E1AE] fixed bottom-0  p-4 flex items-center justify-center">
        <button>예매하기</button>
      </footer>
    </>
  );
}

export default App;
