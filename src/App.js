import Main from "./\bMain/Main";
import Poster from "./components/UI/Poster/Poster";
import MovieTitle from "./components/\bMovieTitle/\bMovieTitle";
import Script from "./components/Script/Script";

import BigCard from "./components/Card/BigCard/BigCard";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import FinalInfo from "./components/FinalInfo/FinalInfo";
import Login from "./Login/Login";
import Ticket from "./Ticket/Ticket";
import { useState } from "react";

const TEXT = [
  "특전의 경우 주최자의 상황에따라 변경될 수있습니다",
  "이 모임은 정말 재미를 위해 진행되오니 가벼운 마음으로 참여부탁드립니다",
  "호영의 생일이벤트에 따라 모임시간이 변경될 수 있습니다",
  "뒷풀이가 있을경우 🇰🇷🐓에서 진행됩니다",
  "포스터는 lily(@suicideroom4two)님의 커미션으로 제작되었습니다",
];

export const API = "http://localhost:1337/api/guest";
export const IMAGE = "http://localhost:1337/api/upload/files";

function App() {
  const [usersInput, setUsersInput] = useState({ id: "", pw: "" });

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
          <FinalInfo data={TEXT} />
        </section>
      </Main>
      <footer className=" w-full bg-[#5788C8] fixed bottom-0  p-4 flex items-center justify-center  hover:cursor-pointer hover:bg-[#5883b7] ">
        <Login usersInput={usersInput} setUsersInput={setUsersInput} />
      </footer>
    </>
  );
}

export default App;
