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
      <footer className=" w-full bg-[#5788C8] fixed bottom-0  p-4 flex items-center justify-center  ">
        <button>D-14부터 가능해요</button>
      </footer>
    </>
  );
}

export default App;
