"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { syne } from "@/components/fonts";
import Star from "@/public/icons/star";
import Padding from "@/components/padding";

const Journey = () => {
  const [bgImage, setBgImage] = useState("/images/aboutus.png"); // Default image

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setBgImage("/images/journey.png"); // Large screens
      } else if (width >= 768) {
        setBgImage("/images/journeytab.png"); // Tablets
      } else {
        setBgImage("/images/journeyphone.png"); // Mobile
      }
    };

    updateBackground(); // Initial set
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);
  return (
    <div>
      <Padding className={` lg:flex  items-start`}>
        
        <div className={`${syne.className}  text-[1.5rem] md:text-[2rem] gap-3 leading-0 lg:w-[35%] flex items-center`} >
        <div className="">
          <Star />
        </div>
          <div>Our Journey</div>
          
        </div>
        <div className="lg:w-[65%]">

        <div className="text-[#595959] pt-3.5 lg:pt-0 lg:w-[44rem]">
        What began as a passion for transforming spaces has evolved into Incociar, a full-service interior design studio dedicated to creating environments that reflect and enhance our clients' lifestyles. Founded in [Year] by [Founder Name], our journey has been guided by one fundamental belief: your space should be an authentic expression of who you are.
          </div>
        </div>
      </Padding>
      <div
        className={` mt-[2rem] h-[33rem] flex justify-center items-center ${syne.className} text-[48px]  md:text-[64px] lg:text-[80px] text-white font-bold ${syne.className} bg-center bg-cover`}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
       <Padding className={` lg:flex pt-[4rem] md:pt-[6rem] lg:pt-[8rem] items-start`}>
        
        <div className={`${syne.className}  text-[1.5rem] md:text-[2rem] gap-3 leading-0 lg:w-[35%] flex items-center`} >
        <div className="">
          <Star />
        </div>
          <div>Our Philosophy</div>
          
        </div>
        <div className="lg:w-[65%]">

        <div className="text-[#595959] pt-3.5 lg:pt-0 lg:w-[44rem]">
        At Incociar, we don't just design spaces – we craft experiences. Our name, derived from "connecting" and "interior," represents our core mission: connecting people with interiors that complement their lifestyle. We believe that truly successful design goes beyond aesthetics; it's about creating harmony between space, function, and personal identity.
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Journey;
