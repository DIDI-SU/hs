const Login = (data) => {
  const { usersInput, setUsersInput } = data;

  return (
    <>
      <label
        htmlFor="my-modal-4"
        className="btn bg-[#5788C8] border-0  hover:bg-[#5883b7] "
      >
        예매하기
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative  bg-[#5883b7]" htmlFor="">
          <div className=" make-center">
            <h3 className="text-lg font-bold  text-black ">로그인</h3>
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
            <input
              type="password"
              onChange={(e) => {
                setUsersInput((prve) => {
                  return { ...prve, pw: e.target.value };
                });
              }}
              className=" p-2 m-1 rounded-md bg-[#B6C6D3] text-black"
            />
            <button className="btn  p-2   w-48  m-1">로그인하기</button>
          </div>
        </label>
      </label>
    </>
  );
};

export default Login;
