"use client";
import Padding from "@/components/padding";
import Projectscard from "@/components/projectscard";
import React, { useEffect, useRef } from "react";
import src from "../../public/images/craft1.png";
import src0 from "../../public/images/Craftt.png";
import src1 from "../../public/images/craft2.png";
import src2 from "../../public/images/craft3.png";
import localFont from "next/font/local";
import Image from "next/image";

const syne = localFont({
  src: [
    {
      path: "../../public/fonts/Syne/Syne-Bold.woff2",
      weight: 'bold',
      style: 'normal'
    },
    {
      path: "../../public/fonts/Syne/Syne-Medium.woff2",
      weight: '500',
      style: 'normal'
    },
    {
      path: "../../public/fonts/Syne/Syne-Regular.woff2",
      weight: 'normal',
      style: 'normal'
    },
    {
      path: "../../public/fonts/Syne/Syne-SemiBold.woff2",
      weight: '600',
      style: 'normal'
    },
  ]
})

const Craft = () => {
  const containerRef = useRef(null);
  const tittleRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef && tittleRef) {
        const container = containerRef?.current;
        const containerTop = container?.offsetTop;
        const containerHeight = container?.clientHeight - window.innerHeight; // Subtract 100vh
        const scrollTop = window.scrollY;
        const relativeScroll = scrollTop - containerTop;
        let progress = relativeScroll / containerHeight;
        // Ensure progress stays within 0 to 1
        progress = Math.min(Math.max(progress, 0), 1);
        tittleRef.current.style.scale = progress * 0.1 + 1;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="py-28 md:pt-0 lg:py-40    "
      ref={containerRef}
    >
      <div
        ref={tittleRef}
        className={` ${syne.className} text-black pb-20 md:pb-0 leading-tight  font-extrabold text-center  md:sticky md:h-[100vh] top-0 flex items-center   `}
      >
        <Image className="h-full w-full object-contain" src={src0} alt="craft"/>
      </div>
      <div className={" md:px-[2rem] lg:px-[3rem] relative z-50  "}>
        <div className=" grid gap-20 lg:gap-20 xl:gap-36 ">
          <div className=" lg:flex gap-20   lg:gap-28 xl:gap-40  ">
            <div className="md:pt-32 lg:pt-0  ">
              <Projectscard
                delay={0.4}
                w={" md:w-[500px] lg:w-[350px] xl:w-[545px] "}
                h={" h-[500px] lg:h-[650px] xl:h-[767px]"}
                src={src}
                tittle={"Interiors"}
                
              />
            </div>
            <div>
              <div className="w-full md:flex md:justify-end lg:justify-start md:pr-10 pt-8 lg:pt-[39rem] xl:pt-[43rem] 2xl:pt-[45rem]  h-full">
                <div className=" pt-10 md:pt-0  lg:w-[25%]">
                  <Projectscard
                    delay={0.3}
                    w={" md:w-[370px] lg:w-[350px] xl:w-[465px] "}
                    h={" h-[500px] md:h-[600px] lg:h-[351px]"}
                    src={src1}
                    tittle={"Workspaces"}
                    
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:flex-row-reverse  lg:gap-28 xl:gap-40 ">
            <div className="w-full md:flex md:justify-center lg:justify-start ">
              <div className=" md:w-[45%]  md:pt-20 lg:pt-0 ">
                <Projectscard
                  delay={0.2}
                  w={" md:w-full lg:w-[350px] xl:w-[517px] "}
                  h={" h-[500px] lg:h-[550px] xl:h-[720px]"}
                  src={src2}
                  tittle={"Wallpapers"}
                  
                />
              </div>
            </div>
          </div>
          
        </div>
        <div className="bg-[#F0F1F2]  font-circular font-medium -tracking-[0.04rem] w-max text-[0.95rem] rounded-full px-5 mt-20 mx-auto py-3 hidden md:block lg:hidden  ">
          See all projects
        </div>
        <div className=" md:h-[100vh] "></div>
      </div>
    </div>
  );
};

export default Craft;
