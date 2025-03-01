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

const Servicescroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const at = useTransform(scrollYProgress, [0, 1], [0, 9]);
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
    <motion.div ref={ref} className=" h-[600vh] w-full relative ">
      <div className=" h-screen flex flex-col w-full sticky top-0 left-0 ">
        <div className=" flex w-full items-center justify-around  pt-[60px] h-[200px]  ">
          <div className=" text-[36px] text-[#25231F] w-[500px] ">
            Transforming Spaces, Enhancing Lives
          </div>
          <div className=" text-[18px] text-[#595959] w-[500px]  ">
            Our comprehensive design services are tailored to meet your unique
            needs, whether you're reimagining your home, creating an inspiring
            workplace, or developing a commercial space.
          </div>
        </div>
        <div>
          {details.map((item, index) => (
            <motion.div
              key={index}
              className={`text-black  my-4  w-full flex items-center justify-around ${
                scrollValue >= index + 1 && scrollValue < index + 2
                  ? index % 2 == 0
                    ? " flex-row-reverse "
                    : " flex "
                  : "hidden"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity:
                  scrollValue >= index + 1 && scrollValue < index + 2 ? 1 : 0,
                y: scrollValue >= index + 1 && scrollValue < index + 2 ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className=" flex flex-col  ">
                <div className="text-2xl font-semibold">{item.title}</div>
                <div className=" grid grid-cols-2 ">
                  {item.options.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              </div>
              <div className=" min-h-[400px] max-h-[400px] max-w-[350px] min-w-[350px]  ">
                <Image
                  src={item.src}
                  alt=""
                  className=" min-h-[400px] max-h-[400px] max-w-[350px] min-w-[350px] object-cover "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Servicescroll;
