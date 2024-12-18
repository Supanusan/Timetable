import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelValidtaion = async () => {
    if (username === "ITT2023115" && password === "rusl2023") {
      await localStorage.setItem("valid", "authorizeduser");
      navigate("/Main");
    }
  };

  useEffect(() => {
    const approved = localStorage.getItem("valid");
    if (approved === "authorizeduser") {
      navigate("/Main");
    }
  });
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className=" flex flex-col justify-center items-center w-3/4 h-1/2  md:w-1/2 md:h-1/3 rounded-lg shadow-lg z-10 bg-white  sm:text-center ">
        <input
          className="border-b-2 border-s-gray-500 py-2 text-xl px-4  focus:outline-none md:w-1/2 md:h-16"
          placeholder="Enter your user name !"
          multiple
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <input
          className="border-b-2 border-s-gray-500 mt-5 py-2 text-xl px-4  focus:outline-none md:w-1/2 md:h-16 "
          placeholder="Enter your user password !"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button
          onClick={handelValidtaion}
          className="bg-orange-500 px-8 py-2 font-medium  text-white  justify-center items-center  rounded-md mt-7 md:px-11 md:py-3 md:text-xl md:font-semibold active:transition-transform active:transform active:scale-90 "
        >
          <h1>Login</h1>
        </button>
      </div>
      {/* <div className="bg-orange-400 w-1/2 h-screen transform rotate-45 -top-96 absolute" /> */}
    </div>
  );
};

export default Login;
