"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/images/hrlogo.png";
import hero from "@/public/images/hero1.png";
import hero2 from "@/public/images/hero2.png";
import { useEffect, useState } from "react";
import Textanimation from "@/components/textanimation";
import { syne } from "@/components/fonts";
import Servicemarquee from "../services/servicemarquee";

const Hero = () => {
    
  return (
    <div className="relative top-[2rem] md:top-[-5.2rem] lg:top-[-6rem]">
      <div className=" flex justify-start md:justify-end px-[1rem]  md:px-[2rem] xl:px-[3rem]">
        <div className=" text-[16px] w-[20rem] lg:text-[17px] leading-[1.8rem] lg:w-[25rem]">
          Transform your space into a reflection of who you are. At Incociar, we
          create interiors that enhance your lifestyle and inspire your daily
          moments.
        </div>
      </div>
      <div className=" pt-[2rem] lg:flex h-[50rem] md:h-[60rem] lg:h-[35rem] ">
        <div className={` lg:w-[68%] ${syne.className} text-[#ffffffca] font-medium text-[2rem] bg-center pl-[1.2rem] md:pl-0 lg:pl-[1.2rem] md:text-[2.3rem] flex items-center justify-center  lg:text-[3.1rem] bg-cover h-[52%] lg:h-full`} style={{ backgroundImage: "url(/images/hero1.png)" }}>
        <div className="pt-2 ">
        <Textanimation content={"Connecting People With Their Lifestyle"}  />
        </div>
        </div>
        <div className=" lg:w-[32%] bg-cover h-[48%] bg-center  md:hidden lg:flex lg:h-full" style={{ backgroundImage: "url(/images/hero2.png)" }}>
        </div>
        <div className="  bg-cover hidden md:flex lg:hidden md:h-[48%]" style={{ backgroundImage: "url(/images/hero2ipad.png)" }}></div>
      </div>
      <Servicemarquee q1={"BESPOKE LUXURY"} q2={"HANDCRAFTED DETAILS"} q3={"CURATED SPACES"} q4={"CRAFTED PERFECTION"} q5={"AESTHETIC LOOK"} q6={"TAILORED DESIGNS"} />
    </div>
  );
};

export default Hero;
