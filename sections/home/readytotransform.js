"use client";
import Brownbtn from "@/components/brownbtn";
import { syne } from "@/components/fonts";
import Padding from "@/components/padding";
import Image from "next/image";
import React, { useRef } from "react";
import img from "@/public/images/readyship.png";
import { motion, useInView } from "framer-motion";

const Readytotransform = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <div className=" w-full bg-[#141313] h-[600px] xl:h-[500px] pt-[1rem] md:pt-[2rem] xl:pt-[3rem] overflow-hidden relative  ">
      <Padding className={" flex flex-col gap-4 "}>
        <div
          className={` ${syne.className} text-[#FFFFFF] font-semibold text-[20px] md:text-[36px] w-[210px] md:w-[450px] leading-[1.2]  `}
        >
          Ready to transform your space with us ?
        </div>

        <div
          ref={ref}
          className=" text-[#B7B7B7] text-[14px] w-[300px] md:w-[460px] "
        >
          Does your home need a fresh, modern touch? Whether it’s updating your
          facade, redesigning your interiors, or enhancing your outdoor spaces,
          we’re here to bring your vision to life
        </div>

        <Brownbtn text={"Request Consultation"} />
      </Padding>
      <motion.div
        className=" absolute left-0 top-[350px] md:top-[200px] lg:top-[100px] xl:top-[0px] w-full "
        initial={{
          rotate: "-20deg",
          translateY: "500px",
          opacity: 0,
        }}
        animate={{
          rotate: inView ? "0deg" : "-20deg",
          translateY: inView ? "0px" : "500px",
          opacity: inView ? 1 : 0,
        }}
        transition={{
          duration: 0.66,
          ease: "easeInOut",
        }}
      >
        <Image
          alt=""
          src={img}
          className=" w-[100%] scale-200 md:scale-110  "
        />
      </motion.div>
    </div>
  );
};

export default Readytotransform;
