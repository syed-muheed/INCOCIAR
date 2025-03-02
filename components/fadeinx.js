"use client";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
const Fadeinx = ({ children, delay, right, className, duration }) => {
  const ref = useRef(null);
  const isinview = useInView(ref, { amount: "some", once: true });
  return (
    <div className={clsx(className, " ")} ref={ref}>
      <motion.div
        initial={{
          translateX: right ? "30px" : "-30px",
          opacity: -100,
        }}
        animate={{
          translateX: isinview ? 0 : right ? "30px" : "-30px",
          opacity: isinview ? 1 : -100,
        }}
        transition={{
          duration: duration || 0.5,
          ease: [0.3, 1.08, 0.24, 0.89],
          delay: delay,
        }}
        className={clsx(" h-full  ")}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Fadeinx;
