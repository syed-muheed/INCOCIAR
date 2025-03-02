"use client";
import React from "react";
import img from "@/public/images/serviceimg.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { syne } from "@/components/fonts";

const Servicehero = () => {
  return (
    <div className=" w-full h-screen relative ">
      <div className="h-full w-full relative overflow-hidden">
        <div className=" h-full w-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 zoomin ">
          <Image
            alt=""
            height={2000}
            width={2000}
            src={img}
            className=" h-full w-full object-cover "
          />
        </div>
      </div>

      <div className="absolute w-full flex justify-center top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  ">
        <motion.div
          initial={{
            y: 30,
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.47,
            ease: "easeInOut",
          }}
          className={` ${syne.className} text-[48px]  md:text-[64px] lg:text-[80px] text-white font-bold `}
        >
          Our Services
        </motion.div>
      </div>
    </div>
  );
};

export default Servicehero;
