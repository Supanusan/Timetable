import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const navigate = useNavigate();

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

  const FNavigation = () => {
    navigate("/Zoomlink");
  };

  return (
    <div className="flex flex-col items-center w-full h-[100px] py-6 px-3  ">
      <h1 className="font-extrabold text-4xl text-blue-600 w-full text-center ">
        RUSL 2022 /2023 TIMETABLE
      </h1>
      <div className="w-[200px] h-[100px] flex flex-col justify-evenly md:hidden">
        <span className=" w-[40px] h-6 my-2 bg-black"></span>
        <span className=" w-[40px] h-6 my-2 bg-black"></span>
        <span className=" w-[40px]  h-6 my-2 bg-black"></span>
      </div>
      <div>
        <button
          className="bg-orange-600 py-3 px-8 text-white text-xl rounded-md mt-[7vh]"
          onClick={FNavigation}
        >
          To get Zoom Link
        </button>
        <div className=" absolute right-0 mt-6 w-[50%] hidden justify-evenly px-4 md:flex">
          {link.map((data, index) => (
            <Link
              key={index}
              to={data.TO}
              className="linkstyle"
              smooth={true}
              spy={true}
            >
              {data.Name}
            </Link>
          ))}
        </div>
        {/* Mobile Responsive */}

        <div className=" absolute right-0 mt-2  justify-evenly px-4 sm:flex md:hidden flex flex-col items-center bg-slate-200 w-full h-screen">
          {link.map((data, index) => (
            <Link
              key={index}
              to={data.TO}
              className="linkstyle"
              smooth={true}
              spy={true}
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
