"use client";
import Inconewsvg from "@/public/icons/inconewsvg";
import Incosvg from "@/public/icons/incosvg";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Startanimation = () => {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setShow(false);
    }, 2000);

    setInterval(() => {
      setHide(true);
    }, 3000);
  }, []);

  return (
    <div
      className={` fixed top-0 left-0 w-full h-screen z-[2000] ${
        show ? "bg-white" : "bg-transparent"
      }   ${hide ? "hidden " : "flex "} items-center justify-center  `}
    >
      <AnimatePresence>
        {show && (
          <motion.div
            className=" w-fit  h-full flex items-center justify-center bg-black "
            initial={{
              height: 0,
              borderRadius: "999px",
              width: "fit-content",
            }}
            animate={{
              height: "100%",
              borderRadius: "0px",
              width: "100%",
            }}
            exit={{
              height: 0,
              width: 0,
              borderRadius: "999px",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <div className=" px-6 md:px-12 w-[300px] md:w-[400px] ">
              {/* <Incosvg /> */}
              <Inconewsvg />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Startanimation;
