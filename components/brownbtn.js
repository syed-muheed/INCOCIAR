import React from "react";

const Brownbtn = ({ text }) => {
  return (
    <div className=" brownbtn rounded-full px-4 py-2 text-white text-[15px] w-fit cursor-pointer hover:scale-105 transition-all duration-500 ">
      {text}
    </div>
  );
};

export default Brownbtn;
