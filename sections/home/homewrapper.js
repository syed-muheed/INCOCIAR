"use client"
import React from 'react'
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/hrlogo.png"
import Padding from "@/components/padding";
import Craft from "@/sections/home/craft";
import Hero from "@/sections/home/hero";
import Servicemarquee from "@/sections/services/servicemarquee";
import { motion } from "framer-motion";

const Homewrapper = () => {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <motion.div
      initial={{ height: 100 }}
      animate={{ height: Math.max(33, 100 - scrollY * 0.55) }}
      transition={{ duration: 0.1, ease: "easeOut" }} className=" w-fit px-[1rem] md:px-[2rem] xl:px-[3rem]  sticky top-[1.1rem] z-30 "><Image alt="logo" className=" h-full w-full object-contain" src={logo}/></motion.div>
        

        <Hero/>
        <Servicemarquee q1={"BESPOKE LUXURY"} q2={"HANDCRAFTED DETAILS"} q3={"CURATED SPACES"} q4={"CRAFTED PERFECTION"} q5={"AESTHETIC LOOK"} q6={"TAILORED DESIGNS"} />
        <Craft/>
    </div>
  )
}

export default Homewrapper
