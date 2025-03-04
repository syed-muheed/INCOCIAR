"use client";
import Lenis from "lenis";
import React, { useEffect } from "react";

const Lenis1 = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      // console.log(e)
    });

    //lenis scrolling
    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};

export default Lenis1;
