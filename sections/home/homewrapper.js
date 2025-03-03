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
import Process from './process';
import Why from './why';

const Homewrapper = () => {
    const [scrollY, setScrollY] = useState(0);

    const [set1, isSet1] = useState(100);
  const [set2, isSet2] = useState(false);
  const [set3, isSet3] = useState(false);
  const [set4, isSet4] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      isSet1(100);
      isSet2(0.55);
      
    } else if (window.innerWidth >= 700) {
      isSet1(80);
      isSet2(0.4);
      
    } else if (window.innerWidth < 700) {
      isSet1(60);
      isSet2(0.35);
      
    }
  }, []);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <motion.div
      initial={{ height: set1 }}
      animate={{ height: Math.max(33, set1 - scrollY * set2) }}
      transition={{ duration: 0.1, ease: "easeOut" }} className=" w-fit px-[1rem] md:px-[2rem] xl:px-[3rem]  sticky top-[1.1rem] z-30 "><Image alt="logo" className=" h-full w-full object-contain" src={logo}/></motion.div>
        

        <Hero/>
        
        <Craft/>
        <Process/>
        <Why/>
    </div>
  )
}

export default Homewrapper
