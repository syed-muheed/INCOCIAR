import React from "react";
import Padding from "./padding";
import Image from "next/image";
import logo from "@/public/images/logo.png"
import Link from "next/link";


const Navbar = () => {
  return (
    <div className=" sticky top-0 z-20">
    <Padding
      className={
        " flex justify-between items-center  h-[4rem] relative bg-white"
      }
    >
        <div className=" h-[2rem] invisible "><Image alt="logo" className=" h-full w-full " src={logo}/></div>
      <div className=" flex gap-8 justify-center items-center text-[#78777B]">
        <Link href={"/"}><div>Home</div></Link>
        <Link href={"/"}><div>About</div></Link>
        <Link href={"/services"}><div>Services</div></Link>
        <Link href={"/"}><div>Locations</div></Link>
        
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
