import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const navigate = useNavigate();
  const [isEnable, setIsEnable] = useState(false);
  const link = [
    {
      Name: "Semi-Timetable",
      TO: "main",
    },
    {
      Name: "ICT Timetable",
      TO: "ict",
    },
    {
      Name: "ET-Timetable",
      TO: "et",
    },
    {
      Name: "BST-Timetable",
      TO: "bst",
    },
  ];

  const handelClick = () => {
    setIsEnable(!isEnable);
  };

  const FNavigation = () => {
    navigate("/Zoomlink");
  };

  return (
    <div className="flex flex-col items-center w-full h-[100px] py-10 px-3 relative ">
      <h1 className="font-extrabold text-xl md:text-4xl text-blue-600 w-full text-center ">
        RUSL 2022 /2023 TIMETABLE
      </h1>
      <div
        onClick={handelClick}
        className="w-fit h-fit flex flex-col justify-evenly md:hidden absolute top-20 right-[7%]"
      >
        <span className=" w-[30px] h-1 my-1 bg-black" />
        <span className=" w-[30px] h-1  bg-black" />
        <span className=" w-[30px]  h-1 mt-1 bg-black" />
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <div className="">
          <button
            className="bg-orange-600 py-2 px-4 text-white text-x rounded-md  animate-blink-animation"
            onClick={FNavigation}
          >
            To get Zoom Link
          </button>
        </div>
        <button
          className="bg-white border-orange-600 border-2 py-2 px-1  md:px-10 text-orange-600 text-x rounded-md absolute right-7  md:top-24 md:right-36  font-bold hover:bg-orange-600 hover:text-white duration-700 "
          onClick={() => navigate("/AllLink")}
        >
          All Links
        </button>
        <div
          className={`w-screen h-lvh bg-orange-200 flex-col justify-evenly px-4 md:flex md:flex-row md:bg-transparent ${
            isEnable ? "block" : "hidden"
          }`}
        >
          {link.map((data, index) => (
            <Link
              key={index}
              to={data.TO}
              className="linkstyle"
              smooth={true}
              spy={true}
              onClick={() => {
                setIsEnable(false);
              }}
            >
              {data.Name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
