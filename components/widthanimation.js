"use client";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Widthanimation = ({ children, delay, w, y, className }) => {
  const ref = useRef(null);
  const isinview = useInView(ref, { amount: "some", once: true });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [ishovered, sethovered] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX + 20, y: e.clientY });
    };
    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  return (
    <div
      className={clsx(className, w, " overflow-x-hidden  cursor-none")}
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
      ref={ref}
    >
      <motion.div
        initial={{
          width: y || "0%",
        }}
        animate={{
          width: isinview ? "100%" : y || "0%",
        }}
        transition={{
          duration: 0.85,
          ease: [0.3, 1.08, 0.24, 0.89],
          delay: delay,
        }}
        className={clsx(" overflow-x-hidden ")}
      >
        <div className={clsx(" w-[100vw] px-[1rem]  md:px-0", w)}>{children}</div>
      </motion.div>
      <div
        className={clsx(
          "custom-cursor hidden lg:flex fixed transition-transform font-gilroy font-medium tracking-wide bg-black/50  backdrop-blur-sm text-white h-[130px] bg-blend-difference  justify-center items-center rounded-full w-[130px] ",
          ishovered ? "scale-100" : "scale-0"
        )}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      >
        <div className=" w-[80%] text-[0.9rem] text-center ">
          Curated Designs
        </div>
      </div>
    </div>
  );
};

export default Widthanimation;
