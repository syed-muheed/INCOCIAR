"use client";
import React, { useRef } from "react";
import img1 from "@/public/images/thThree.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Card3 = () => {
  const ref = useRef();
  const inView = useInView(ref);
  const details = [
    "Flexible payment options - EMI solutions and payment schemes from leading financial partners",
    "No hidden costs - Transparent costing without last-minute additions.",
    "Flexible payment options - EMI solutions and payment schemes from leading financial partners",
    "No hidden costs - Transparent costing without last-minute additions.",
  ];
  return (
    <div
      ref={ref}
      className=" h-[400px] md:h-[500px] lg:h-[400px] xl:h-[500px] w-[300px] md:w-[400px] lg:w-[300px] xl:w-[380px] bg-[#7A2100] relative  "
    >
      <motion.div
        className=" absolute z-10 top-[20px] left-[50%] -translate-x-1/2 w-[90%] "
        initial={{
          height: "90%",
        }}
        animate={{
          height: inView ? "150px" : "90%",
        }}
        transition={{
          duration: 0.66,
          delay: 0.3,
        }}
      >
        <Image src={img1} className=" object-cover h-full w-full   " alt="" />
      </motion.div>

      {inView && (
        <motion.div
          className=" pt-[180px] flex flex-col px-4 gap-2 xl:gap-4 "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          {details.map((item, index) => (
            <div
              key={index}
              className=" flex gap-2 text-[12px]  xl:text-[16px] text-[white] "
            >
              <div className=" min-h-[6px] min-w-[6px] max-w-[6px] max-h-[6px] rounded-full bg-white relative top-[7px] "></div>
              <div>{item}</div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Card3;
