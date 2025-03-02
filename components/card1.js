"use client";
import React, { useRef } from "react";
import img1 from "@/public/images/thOne.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Incosvg from "@/public/icons/incosvg";

const Card1 = () => {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div className=" h-[400px] md:h-[500px] lg:h-[400px] xl:h-[500px] w-[300px] md:w-[400px] lg:w-[300px] xl:w-[380px] relative  ">
      <motion.div
        className=" w-[95%] absolute left-[50%] -translate-x-1/2 top-[10px] bg-[#A3886E]  flex flex-col gap-4 overflow-hidden  "
        initial={{
          height: 0,
        }}
        animate={{
          height: inView ? "fit-content" : 0,
        }}
        transition={{
          duration: 0.66,
          ease: "easeInOut",
        }}
      >
        <div className=" flex gap-3 px-[10px] pt-[10px]  ">
          <div className=" min-h-[6px] min-w-[6px] max-w-[6px] max-h-[6px] rounded-full bg-white relative top-[7px] "></div>
          <div className=" text-white text-[12px] xl:text-[14px]  ">
            Flexible payment options - EMI solutions and payment schemes from
            leading financial partners
          </div>
        </div>
        <div className=" flex gap-3 px-[10px] pb-[10px]  ">
          <div className=" min-h-[6px] min-w-[6px] max-w-[6px] max-h-[6px] rounded-full bg-white relative top-[7px] "></div>
          <div className=" text-white text-[12px] xl:text-[14px]  ">
            No hidden costs - Transparent costing without last-minute additions.
          </div>
        </div>
      </motion.div>
      <Image
        src={img1}
        className=" h-[400px] md:h-[500px] lg:h-[400px] xl:h-[500px] w-[300px] md:w-[400px] lg:w-[300px] xl:w-[380px] object-cover "
        alt=""
      />
      <div
        ref={ref}
        className=" w-[80%] absolute left-[50%] -translate-x-1/2 bottom-[30px] "
      >
        <Incosvg />
      </div>
    </div>
  );
};

export default Card1;
