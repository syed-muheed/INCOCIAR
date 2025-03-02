"use client";
import React, { useRef } from "react";
import img1 from "@/public/images/thTwo.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { syne } from "./fonts";

const Card2 = () => {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div className=" h-[400px] md:h-[500px] lg:h-[400px] xl:h-[500px] w-[300px] md:w-[400px] lg:w-[300px] xl:w-[380px] relative  ">
      <Image
        ref={ref}
        src={img1}
        className=" h-[400px] md:h-[500px] lg:h-[400px] xl:h-[500px] w-[300px] md:w-[400px] lg:w-[300px] xl:w-[380px] object-cover "
        alt=""
      />
      <div className=" absolute w-full top-0 left-0 p-3 flex flex-col gap-2 ">
        <motion.div
          className={` text-[white] text-[24px] md:text-[32px] lg:text-[24px] xl:text-[32px] leading-[1.4] font-medium ${syne.className} capitalize `}
          initial={{
            filter: "blur(20px)",
            opacity: 0,
          }}
          animate={{
            filter: inView ? "blur(0px)" : "blur(20px)",
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          10-year warranty on modular products.
        </motion.div>
        <motion.div
          className={` text-[white] text-[24px] md:text-[32px] lg:text-[24px] xl:text-[32px] leading-[1.4] font-medium ${syne.className} capitalize `}
          initial={{
            filter: "blur(20px)",
            opacity: 0,
          }}
          animate={{
            filter: inView ? "blur(0px)" : "blur(20px)",
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          1-year warranty on services.
        </motion.div>
      </div>
    </div>
  );
};

export default Card2;
