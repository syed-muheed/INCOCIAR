"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, px, useScroll, useTransform } from "framer-motion";
import logo from "@/public/images/hrlogo.png";
import Hero from "@/sections/home/hero";
import Craft from "@/sections/home/craft";
import Process from "./process";
import Why from "./why";
import Startanimation from "@/components/startanimation";
import Lenis1 from "@/components/lenis1";
import Ourservices from "./ourservices";
import Navigate from "../services/navigate";
import Testimonials from "../services/testimonials";
import Faqs from "../services/faqs";
import Readytotransform from "./readytotransform";
import Footer from "./footer";

const Homewrapper = () => {
  const ref = useRef(null);

  // Get the scroll progress
  const { scrollYProgress } = useScroll();
  const [set1, isSet1] = useState(100);
  const [set2, isSet2] = useState(false);
  
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      isSet1("100px");
      isSet2(0.01);
      
    } else if (window.innerWidth >= 700) {
      isSet1("80px");
      isSet2(0.01);
      
    } else if (window.innerWidth < 700) {
      isSet1("60px");
      isSet2(0.01);
      
    }
  }, []);

  // Transform height based on scroll progress
  const logoHeight = useTransform(scrollYProgress, [0, set2], [set1, "33px"]);


  return (
    <>
      <Startanimation/>
      <Lenis1>
    <div ref={ref}>
      <motion.div 
        style={{ height: logoHeight }}
        className="w-fit px-[1rem] md:px-[2rem] xl:px-[3rem] sticky top-[1.1rem] z-30"
      >
        <Image alt="logo" className="h-full w-full object-contain" src={logo} />
      </motion.div>

      <Hero />
      <Ourservices/>
      <Craft />
      <Process />
      {/* <Why /> */}
      <Navigate />
          <Testimonials />
          <Faqs />
          <Readytotransform />
          <Footer />
    </div>
      </Lenis1>

    </>
  );
};

export default Homewrapper;
