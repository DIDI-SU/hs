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
  const userLogin = async (values) => {
    console.log(API + values.id);
    try {
      const response = await fetch(`${API}${values.id}}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(response);

      if (data?.error) {
        throw data?.error;
      } else {
        if (data.data[0].attributes.guestid === values.id) {
          setParticipate(data.data[0].attributes);
          nav("/ticket");
        } else {
          nav("/");
        }
      }
    } catch (error) {
      setError(error?.message ?? "Something went wrong!");
    } finally {
    }
  };

  return (
    <>
      <label
        htmlFor="my-modal-4"
        className="btn bg-[#5788C8] border-0  hover:bg-[#5883b7]  btn-disabled"
      >
        D-3에 만나요!
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
                setUsersInput((prve) => {
                  return { ...prve, id: e.target.value };
                });
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
