import Main from "./\bMain/Main";
import Poster from "./Poster/Poster";
import MovieTitle from "./\bMovieTitle/\bMovieTitle";
import Script from "./Script/Script";
import BigCard from "./BigCard/BigCard";
import MovieInfo from "./MovieInfo/MovieInfo";
import FinalInfo from "./FinalInfo/FinalInfo";

function App() {
  return (
    <>
      <Main>
        <article className="max-w-xl make-center">
          <Poster />
          <MovieTitle />
          <section className="make-center  mb-8 relative bottom-[120px]">
            <Script />
            <BigCard />
          </section>
          <section className=" max-w-xl make-center relative bottom-[120px]">
            <MovieInfo />
          </section>
        </article>
        <section className="   max-w-xl make-center relative bottom-[90px] border border-whit/50 m-4 rounded-md p-4 ">
          <FinalInfo />
        </section>
      </Main>
      <footer className=" w-full bg-[#5788C8] fixed bottom-0  p-4 flex items-center justify-center  hover:cursor-pointer hover:bg-[#5883b7] ">
        <label
          htmlFor="my-modal-4"
          className="btn bg-[#5788C8] border-0  hover:bg-[#5883b7] "
        >
          예매하기
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <div className=" make-center">
              <h3 className="text-lg font-bold">로그인</h3>
            </div>
            <div className=" make-center">
              <input type="text" className=" p-2 m-1 rounded-md" />
              <input type="password" className=" p-2 m-1 rounded-md" />
              <button className="btn  p-2   w-48  m-1">로그인하기</button>
            </div>
          </label>
        </label>
      </footer>
    </>
  );
}

export default App;
