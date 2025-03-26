"use client"
import React, { useEffect, useState } from 'react'
import { syne } from '@/components/fonts';
import Servicemarquee from '../services/servicemarquee';

const Aboutus = () => {
    const [bgImage, setBgImage] = useState("/images/aboutus.png"); // Default image

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setBgImage("/images/aboutus.png"); // Large screens
      } else if (width >= 768) {
        setBgImage("/images/aboutustab.png"); // Tablets
      } else {
        setBgImage("/images/aboutusphone.png"); // Mobile
      }
    };

    updateBackground(); // Initial set
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <div>
        <div className={` mt-[2rem] h-[33rem] flex justify-center items-center ${syne.className} text-[48px]  md:text-[64px] lg:text-[80px] text-white font-bold ${syne.className} bg-center bg-cover`} style={{backgroundImage: `url(${bgImage})`}}>
      About Us
    </div>
    <Servicemarquee
            q1={"BESPOKE LUXURY"}
            q2={"HANDCRAFTED DETAILS"}
            q3={"CURATED SPACES"}
            q4={"CRAFTED PERFECTION"}
            q5={"AESTHETIC LOOK"}
            q6={"TAILORED DESIGNS"}
          />
    </div>
    
  )
}

export default Aboutus
