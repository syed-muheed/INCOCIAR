import React from 'react'
import Image from "next/image";
import logo from "@/public/images/hrlogo.png"
import hero from "@/public/images/hero.png"

const Hero = () => {
  return (
    <div>
      <div className=" flex justify-between px-[1rem] md:px-[2rem] xl:px-[3rem]">
        <div className=" h-[6rem] "><Image alt="logo" className=" h-full w-full " src={logo}/></div>
        <div className=" text-[17px] leading-[1.8rem] w-[24rem]">Transform your space into a reflection of who you are. At Incociar, we create interiors that enhance your lifestyle and inspire your daily moments.</div>
      </div>
      <div className=" pt-[2rem] "><Image alt="logo" className=" h-full w-full " src={hero}/></div>
    </div>
  )
}

export default Hero
