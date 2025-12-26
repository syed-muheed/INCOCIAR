"use client"
import Designcard from "@/components/designcard";
import Padding from "@/components/padding";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import src1 from "@/public/images/ourservices1.png";
import src2 from "@/public/images/ourservices2.png";
import src3 from "@/public/images/ourservices3.png";
import src4 from "@/public/images/ourservices4.png";
import Design2 from "@/components/design2";
import Star from "@/public/icons/star";
import { syne } from "@/components/fonts";
import { useInView } from "framer-motion";
const Ourservices = () => {

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);

  const inView1 = useInView(image1Ref, { threshold: 0.5 });
  const inView2 = useInView(image2Ref, { threshold: 0.5 });
  const inView3 = useInView(image3Ref, { threshold: 0.5 });
  const inView4 = useInView(image4Ref, { threshold: 0.5 });

  useEffect(() => {
    if (inView1) setActiveImage('01');
    if (inView2) setActiveImage('02');
    if (inView3) setActiveImage('03');
    if (inView4) setActiveImage('04');
  }, [inView1, inView2, inView3,inView4]);
  const [activeImage, setActiveImage] = useState('01');
  return (
    <div className="max-w-[1500px] mx-auto py-28">
      <Padding>
        <div className=" font-medium  text-[2rem] text-[#1F1F21] pb-12 ">
          <div className={` ${syne.className} flex gap-3 items-start`}>
            <div className="pt-3">
              <Star />
            </div>
            <div className=" ">
              <div>Our Services</div>
              <div className=" font-normal text-[1.3rem] w-[27rem]">
                Transforming homes with personalized designs and end-to-end
                interior solutions.
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex">
          <div className={` ${syne.className} flex sticky top-20 h-screen w-fit  text-[5rem] gap-2`}>
            <div>0</div>
            <div className="max-h-[8rem] w-[2.5rem] relative overflow-hidden">
              <div
                className={`transition-transform duration-500 ${
                  activeImage === "01" ? "translate-y-0" : "-translate-y-full"
                }`}
              >
                1
              </div>
              <div
                className={`absolute transition-transform duration-500 ${
                  activeImage === "02" ? "-translate-y-full" : "translate-y-full "
                }`}
              >
                2
              </div>
              <div
                className={`absolute transition-transform duration-500 ${
                  activeImage === "03" ? "-translate-y-full" : "translate-y-0 "
                }`}
              >
                3
              </div>
              <div
                className={`absolute transition-transform duration-500 ${
                  activeImage === "04" ? "-translate-y-full" : "translate-y-0 "
                }`}
              >
                4
              </div>
            </div>
            <div>\</div>
          </div>
          <div className="space-y-96 w-full">
        <div ref={image1Ref} className="h-screen flex gap-5 justify-center">
          <Image className="h-[30rem] lg:h-[40rem] w-fit object-contain" src={src1} alt="s"/>
          <div className=" space-y-2">
            <div className="text-[1.1rem]">1. End-to-End Interiors</div>
            <div className="text-[#595959] w-[20rem]">From concept to completion, we handle every detail of your interior project.</div>
          </div>
        </div>
        <div ref={image2Ref} className="h-screen flex gap-5  justify-center">
          <Image className="h-[30rem]  lg:h-[40rem] w-fit object-contain" src={src2} alt="s"/>
          <div className=" space-y-2">
            <div className="text-[1.1rem]">2. Turnkey Interior Projects</div>
            <div className="text-[#595959] w-[20rem]">Hassle-free execution with all materials, labor, and design managed by us.</div>
          </div>
        </div>
        <div ref={image3Ref} className="h-screen flex  gap-5 justify-center">
          <Image className="h-[30rem] lg:h-[40rem] w-fit object-contain" src={src3} alt="s"/>
          <div className=" space-y-2">
            <div className="text-[1.1rem]">3. Luxury Interiors & Renovation</div>
            <div className="text-[#595959] w-[20rem]">Transform your space with premium designs and high-quality finishes.</div>
          </div>
        </div>
        <div ref={image4Ref} className="h-screen flex gap-5  justify-center">
          <Image className="h-[30rem] lg:h-[40rem] w-fit object-contain" src={src4} alt="s"/>
          <div className=" space-y-2">
            <div className="text-[1.1rem]">4. Modular & Semi-Modular Solutions</div>
            <div className="text-[#595959] w-[20rem]">Smart, space-saving, and customizable furniture for modern living.</div>
          </div>
        </div>
      </div>
        </div>
      </Padding>
    </div>
  );
};

export default Ourservices;
