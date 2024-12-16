import React, { useEffect, useState } from "react";

const Zoomlink = () => {
  const date = new Date().getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const data = [
    {
      day: "Monday",
      links: [
        {
          type: "frist class link",
          link: "https://learn.zoom.us/j/97766539926?pwd=OK0bDQnFHWZcIrz3WKo6sWVMlVGAdJ.1",
          time: "10.00 -12.00",
        },
        {
          type: "second class link",
          link: "https://learn.zoom.us/j/97766539926?pwd=OK0bDQnFHWZcIrz3WKo6sWVMlVGAdJ.1",
          time: "1.00 -3.00",
        },
      ],
    },
    {
      day: "Tuesday",
      links: [
        {
          type: "frist class link",
          link: "https://learn.zoom.us/j/94092201240?pwd=1xaLwpYaNNP2bqhMtc3ou2ZjdF1A0x.1",
          time: "10.00 -12.00",
        },
        {
          type: "second class link",
          link: "https://learn.zoom.us/w/92439581786?tk=cUHiUtsrHor2DCOn-FvOZIcaOsykbHvOjq948F1eTy4.DQcAAAAVhdQUWhZvX2E3Tm1kVVRSLWg1LWR1NFY3M3NnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&pwd=KCwNMZsgcA5nOK9Fh6EZGHTY5GOzJl.1",
          time: "1.00 -3.00",
        },
      ],
    },
    {
      day: "Wednesday",
      links: [
        {
          type: "frist class link",
          link: "https://learn.zoom.us/j/97766539926?pwd=OK0bDQnFHWZcIrz3WKo6sWVMlVGAdJ.1",
          time: "10.00 -12.00",
        },
        {
          type: "second class link",
          link: "https://learn.zoom.us/j/99455840762?pwd=8YulbEM1bValbHYt2xi9ox7R0anYBs.1",
          time: "1.00 -3.00",
        },
      ],
    },
    {
      day: "Thursday",
      links: [
        {
          type: "frist class link",
          link: "https://learn.zoom.us/j/97766539926?pwd=OK0bDQnFHWZcIrz3WKo6sWVMlVGAdJ.1",
          time: "8.00 -9.00",
        },
        {
          type: "second class link",
          link: "https://learn.zoom.us/j/97766539926?pwd=OK0bDQnFHWZcIrz3WKo6sWVMlVGAdJ.1",
          time: "10.00 -12.00",
        },
        {
          type: "third class link",
          link: "https://learn.zoom.us/j/96703061039?pwd=yAjb0BBhGRuhpTVnhuP9894RZpmXEf.1#success",
          time: "1.00 -4.00",
        },
      ],
    },
    {
      day: "Friday",
      links: [
        {
          type: "frist class link",
          link: "https://learn.zoom.us/j/97766539926?pwd=OK0bDQnFHWZcIrz3WKo6sWVMlVGAdJ.1",
          time: "10.00 -12.00",
        },
        // {
        //     type: 'second class link',
        //     link: '',
        //     time: '1.00 -3.00'
        // },
      ],
    },
  ];
  const [Hour, setHour] = useState("00");
  const [Min, setMin] = useState("00");
  const [Sec, setSec] = useState("00");

  const [Isapproved, setIsapproved] = useState(false);
  useEffect(() => {
    const approved = localStorage.getItem("valid");
    if (approved === "authorizeduser") {
      setIsapproved(true);
    }
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      const hour = new Date().getHours().toString().padStart(2,0);
      setHour(hour);
      const min = new Date().getMinutes().toString().padStart(2,0);
      setMin(min);
      const sec = new Date().getSeconds().toString().padStart(2,0);
      setSec(sec);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [Sec]);

  const today = weekdays[date];

  const findToday = data.find((item, index) => item.day === today);

  return (
    <div>
      {Isapproved && (
        <div className="flex flex-col items-center pt-10 w-full h-screen">
          <div className="flex">
            <h1 className="font-extrabold  text-2xl text-blue-600 md:text-4xl">
  
              {findToday.day} Classes Link
            </h1>
          </div>
          <ul className="py-24 md:py-10  w-full h-screen">
            {findToday.links.map((link, index) => (
              <a className="flex flex-col items-center" id={index} href={link.link}>
                <li className=" w-3/4 py-6 px-6 text-xl md:text-3xl flex bg-slate-400 my-2 rounded-md text-white justify-center">
                  <h1 className="underline"> {link.type} </h1>
                  <h1 className="font-semibold text-orange-600 px-4">
                    -{link.time}
                  </h1>
                </li>
              </a>
            ))}
          </ul>
          <div className="absolute text-xl font-semibold top-24 right-3 md:top-6 md:right-10 md:px-10 md:py-10 md:text-4xl md:font-bold">
            {Hour}:{Min}:{Sec}
          </div>
        </div>
      )}
    </div>
  );
};

export default Zoomlink;
