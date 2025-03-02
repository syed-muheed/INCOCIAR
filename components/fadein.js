"use client";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
const Fadein = ({ children, delay, top, y, className }) => {
  const ref = useRef(null);
  const isinview = useInView(ref, { amount: "some", once: true });
  return (
    <div className={clsx(" h-max ", className)} ref={ref}>
      <motion.div
        initial={{
          translateY: y || "100px",
          opacity: 0,
        }}
        animate={{
          translateY: isinview ? 0 : y || "100px",
          opacity: isinview ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0, 0.99, 1, 1],
          delay: delay,
        }}
        className={clsx("   ")}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Fadein;
