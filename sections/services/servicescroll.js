"use client";
import React, { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import mod from "@/public/images/modular.png";
import Image from "next/image";
import { syne } from "@/components/fonts";
import Brownbtn from "@/components/brownbtn";

const Servicescroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const at = useTransform(scrollYProgress, [0, 1], [0, 9.7]);
  const at2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [scrollValue, setScrollValue] = useState(0);

  useMotionValueEvent(at, "change", (latest) => {
    setScrollValue(latest);
  });

  const details = [
    {
      title: "Modular Interiors",
      options: [
        "Property Inspection",
        "Damage Assessment",
        "Leak Detection",
        "Structural Checks",
        "Emergency Repairs",
        "Detailed Report",
        "Expert Recommendations",
      ],
      src: mod,
      bottontext: "Request Consultation",
    },
    {
      title: "Kitchen",
      options: [
        "Property Inspection",
        "Damage Assessment",
        "Leak Detection",
        "Structural Checks",
        "Emergency Repairs",
        "Detailed Report",
        "Expert Recommendations",
      ],
      src: mod,
      bottontext: "Request Consultation",
    },
    {
      title: "Wardrobe",
      options: [
        "Property Inspection",
        "Damage Assessment",
        "Leak Detection",
        "Structural Checks",
        "Emergency Repairs",
        "Detailed Report",
        "Expert Recommendations",
      ],
      src: mod,
      bottontext: "Request Consultation",
    },
    {
      title: "Luxury Interiors",
      options: [
        "Property Inspection",
        "Damage Assessment",
        "Leak Detection",
        "Structural Checks",
        "Emergency Repairs",
        "Detailed Report",
        "Expert Recommendations",
      ],
      src: mod,
      bottontext: "Request Consultation",
    },
    {
      title: "Storage",
      options: [
        "Property Inspection",
        "Damage Assessment",
        "Leak Detection",
        "Structural Checks",
        "Emergency Repairs",
        "Detailed Report",
        "Expert Recommendations",
      ],
      src: mod,
      bottontext: "Request Consultation",
    },
    {
      title: "Complete Home Interiors",
      options: [
        "Property Inspection",
        "Damage Assessment",
        "Leak Detection",
        "Structural Checks",
        "Emergency Repairs",
        "Detailed Report",
        "Expert Recommendations",
      ],
      src: mod,
      bottontext: "Request Consultation",
    },
    {
      title: "Commercial Interiors Services",
      options: [
        "Property Inspection",
        "Damage Assessment",
        "Leak Detection",
        "Structural Checks",
        "Emergency Repairs",
        "Detailed Report",
        "Expert Recommendations",
      ],
      src: mod,
      bottontext: "Request Consultation",
    },
    {
      title: "Offices",
      options: [
        "Property Inspection",
        "Damage Assessment",
        "Leak Detection",
        "Structural Checks",
        "Emergency Repairs",
        "Detailed Report",
        "Expert Recommendations",
      ],
      src: mod,
      bottontext: "Request Consultation",
    },
    {
      title: "Other Interior Designing Services",
      options: [
        "Property Inspection",
        "Damage Assessment",
        "Leak Detection",
        "Structural Checks",
        "Emergency Repairs",
        "Detailed Report",
        "Expert Recommendations",
      ],
      src: mod,
      bottontext: "Request Consultation",
    },
  ];

  return (
    <>
      <div className=" flex flex-col lg:flex-row w-full items-center justify-center gap-[30px] lg:justify-around  lg:gap-0  h-[200px] pt-[100px] lg:pt-[46px]  ">
        <div
          className={` text-[28px] md:text-[32px]  xl:text-[42px] text-[#25231F] w-[300px] md:w-[400px] lg:w-[400px]  xl:w-[500px] ${syne.className} font-medium `}
        >
          Transforming Spaces, Enhancing Lives
        </div>
        <div className=" md:text-[16px]  xl:text-[18px] text-[#595959] w-[300px] md:w-[400px]  xl:w-[500px]  ">
          Our comprehensive design services are tailored to meet your unique
          needs, whether you're reimagining your home, creating an inspiring
          workplace, or developing a commercial space.
        </div>
      </div>
      <motion.div ref={ref} className=" h-[900vh] w-full relative ">
        <div className=" h-screen flex items-center justify-center  w-full sticky top-0 left-0 ">
          <div className=" absolute top-0 left-0 h-screen w-[7px] md:w-[10px]   ">
            <motion.div
              className=" w-full brownbtn rounded-b-full  "
              style={{
                height: at2,
              }}
            ></motion.div>
          </div>
          <div>
            {details.map((item, index) => (
              <AnimatePresence key={index}>
                {scrollValue >= index + 1.2 && scrollValue < index + 1.8 && (
                  <motion.div
                    key={index}
                    className={`text-black  my-4  w-full flex items-center gap-[60px] md:gap-[120px] xl:gap-[160px] justify-around ${
                      +index % 2 == 0
                        ? " flex flex-col-reverse lg:flex-row-reverse lg:flex "
                        : " flex flex-col lg:flex-row "
                    }`}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className=" flex flex-col  ">
                      <div
                        className={` ${syne.className} font-medium pb-8 text-[32px] md:text-[36px] w-[270px] md:w-[400px] leading-[1.1] `}
                      >
                        {item.title}
                      </div>
                      <div className=" grid grid-cols-2 gap-y-5 gap-x-0 md:gap-x-2 pb-6 md:pb-16 ">
                        {item.options.map((item, index) => (
                          <div
                            className=" flex items-center gap-2 "
                            key={index}
                          >
                            <div className=" min-h-1.5 max-h-1.5 min-w-1.5 max-w-1.5 bg-[#595959] rounded-full   "></div>
                            <div className=" text-[#595959] text-[14px]  ">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Brownbtn text={"Request Consultation"} />
                    </div>
                    <div className=" min-h-[300px] max-h-[300px] md:min-h-[400px] xl:min-h-[500px] xl:max-h-[500px]  md:max-h-[400px] min-w-[300px] md:max-w-[350px] max-w-[300px] md:min-w-[350px]  ">
                      <Image
                        src={item.src}
                        alt=""
                        className="  min-h-[300px] max-h-[300px] md:min-h-[400px] xl:min-h-[500px] xl:max-h-[500px] md:max-h-[400px] min-w-[300px] md:max-w-[350px] max-w-[300px] md:min-w-[350px] object-cover "
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
          <div className=" absolute top-0 right-0 h-screen w-[7px] md:w-[10px]   ">
            <motion.div
              className=" w-full brownbtn rounded-b-full  "
              style={{
                height: at2,
              }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Servicescroll;
