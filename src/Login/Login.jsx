import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../App";
import { UserContext } from "../context/UserContext";

const Login = (data) => {
  const { usersInput, setUsersInput } = data;
  const { setParticipate, isParticipate, handleParticipate } =
    useContext(UserContext);
  const [error, setError] = useState("");
  const nav = useNavigate();

  const userLogin = (input) => {
    fetch("https://20seki-hs.netlify.app/data/userData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (data.filter((item) => item.name === input).length > 0) {
            setParticipate(data.filter((item) => item.name === input));
            nav("/ticket");
          } else {
            alert("아이디를 다시 입력해주세요");
          }
        }
      });
  };

  return (
    <>
      <label
        htmlFor="my-modal-4"
        className="btn bg-[#5788C8] border-0  hover:bg-[#5883b7]  "
      >
        티켓확인하기
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative  bg-[#5883b7]" htmlFor="">
          <div className=" make-center">
            <h3 className="text-lg font-bold  text-black ">티켓 확인</h3>
          </div>
          <div className=" make-center">
            <input
              type="text"
              onChange={(e) => {
                setUsersInput(e.target.value.trim());
              }}
              className=" p-2 m-1 rounded-md bg-[#B6C6D3] text-black"
            />
            <button
              className="btn  p-2   w-48  m-1"
              onClick={() => {
                userLogin(usersInput);
              }}
            >
              티켓 확인하기
            </button>
          </div>
        </label>
      </label>
    </>
  );
};

export default Login;
