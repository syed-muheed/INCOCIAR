"use client"
import React, { useState } from "react";
import Padding from "./padding";
import Image from "next/image";
import logo from "@/public/images/logo.png"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const [close,setclose]=useState(false)
    const pathname=usePathname()
  return (
    <div className=" sticky top-0 z-20">
    <Padding
      className={
        " flex justify-between items-center  h-[4rem] relative bg-white"
      }
    >
        <Padding className={` absolute  text-[2.5rem] md:text-[3rem] top-0 space-y-6 left-0 w-screen bg-white text-black transition-all duration-500 ease-out overflow-hidden ${close ? "h-screen" : "h-0"}  z-40`}>
        <div className=" h-[5rem] flex items-center w-fit "><Image alt="logo" className=" h-[2rem] w-full " src={logo}/></div>
       
            
            <div className="  min-h-full">
        <Link  href={"/"}><div className="pb-4">Home</div></Link>
        <Link href={"/aboutus"}><div className="pb-4">About</div></Link>
        <Link href={"/services"}><div className="pb-4">Services</div></Link>
        <Link href={"/"}><div className="pb-4">Locations</div></Link>
        <Link href={"/"}><div className="pb-4">Contact us</div></Link>
        </div>
        </Padding>
        <div className={` h-[2rem]  ${pathname == "/" ? "invisible" : ""}  `}><Image alt="logo" className=" h-full w-full " src={logo}/></div>
      <div className=" lg:flex gap-8 hidden justify-center items-center text-[#78777B]">
        <Link href={"/"}><div>Home</div></Link>
        <Link href={"/aboutus"}><div>About</div></Link>
        <Link href={"/services"}><div>Services</div></Link>
        <Link href={"/"}><div>Locations</div></Link>
        
      </div>
      <div onClick={()=>setclose(!close)} className=" relative z-50 lg:hidden space-y-2">
        <div className={`w-[25px] h-[1.5px] rounded-full transition-all duration-150  relative ${close ? "rotate-45 top-[5px]": ""}  bg-black`}></div>
        <div className={`w-[25px] h-[1.5px] rounded-full transition-all duration-150 ${close ? "-rotate-45 -top-[5px]": ""} relative  bg-black`}></div>
      </div>
      <Link className=" hidden lg:flex" href={"/contactus"}><div className=" p-[1.6px] hidden lg:flex  shadow-md rounded-full contactbtn  ">
        <div className=" px-4 py-1.5  bg-white rounded-full ">
          <span className="linear-text-gradient">Contact us</span>
        </div>
      </div></Link>
      
    </Padding>
    </div>
  );
};

export default Navbar;
