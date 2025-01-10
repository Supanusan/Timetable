import React from "react";

const All_LinkPage = () => {
  const AllclassLink = [
    {
      sub: "P6",
      link: "https://learn.zoom.us/j/97766539926?pwd=OK0bDQnFHWZcIrz3WKo6sWVMlVGAdJ.1",
    },
    {
      sub: "maths",
      link: "https://learn.zoom.us/j/97766539926?pwd=OK0bDQnFHWZcIrz3WKo6sWVMlVGAdJ.1",
    },
    {
      sub: "circuit",
      link: "https://learn.zoom.us/j/99455840762?pwd=8YulbEM1bValbHYt2xi9ox7R0anYBs.1",
    },
    {
      sub: "productivity",
      link: "https://learn.zoom.us/j/97766539926?pwd=OK0bDQnFHWZcIrz3WKo6sWVMlVGAdJ.1",
    },
    {
      sub: "Programming",
      link: "https://learn.zoom.us/j/96703061039?pwd=yAjb0BBhGRuhpTVnhuP9894RZpmXEf.1",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <ul>
        {AllclassLink.map((each, index) => (
          <a href={each.link} key={index}>
            <li className="bg-gradient-to-r from-white to-slate-500 text-orange-600 m-10 p-10 font-semibold text-2xl flex justify-center items-center rounded-lg underline">
              {each.sub}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default All_LinkPage;
