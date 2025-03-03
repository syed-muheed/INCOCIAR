import React from "react";
import Marquee from "react-fast-marquee";

const Servicemarquee = ({q1,q2,q3,q4,q5,q6}) => {
  return (
    <div className="w-full py-5   text-[14px] md:text-[18px]">
      <Marquee speed={200}>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q1}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q2}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q3}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q4}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q5}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q6}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q1}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q2}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q3}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q4}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q5}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q6}
        </div>
        <div className="  py-4 px-5 md:px-12 lg:px-28 text-black ">
          {q1}
        </div>
        <div className="  px-5 md:px-12 lg:px-28 text-black ">{q2}</div>
        <div className="  px-5 md:px-12 lg:px-28 text-black ">{q3}</div>
      </Marquee>
    </div>
  );
};

export default Servicemarquee;
