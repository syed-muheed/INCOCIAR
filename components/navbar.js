import React from "react";
import Padding from "./padding";
import Image from "next/image";
import logo from "@/public/images/logo.png"


const Navbar = () => {
  return (
    <div className=" sticky top-0">
    <Padding
      className={
        " flex justify-between items-center  h-[4rem] relative bg-white"
      }
    >
        <div className=" h-[2rem] "><Image alt="logo" className=" h-full w-full " src={logo}/></div>
      <div className=" flex gap-8 justify-center items-center text-[#78777B]">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Locations</div>
      </div>
      <div className=" p-[1.6px]   shadow-md rounded-full contactbtn  ">
        <div className=" px-4 py-1.5  bg-white rounded-full ">
          <span className="linear-text-gradient">Contact us</span>
        </div>
      </div>
    </Padding>
    </div>
  );
};

export default Navbar;
