"use client";
import Plus from "@/public/icons/plus";
import React from "react";
import { motion } from "framer-motion";

const Faqcard = ({ question, answer, index, click }) => {
  return (
    <div className=" flex flex-col p-3 rounded-lg border border-[#E6E8EC] relative overflow-hidden ">
      <div className=" text-[#000] text-[17px] w-[90%] md:w-[80%]   ">
        {question}
      </div>

      <motion.div
        className=" text-[#9A969A] text-[15px] w-[90%] md:w-[80%]    "
        initial={{
          height: 0,
        }}
        animate={{
          height: click == index ? "fit-content" : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: click == index ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className=" pt-2 "
        >
          {answer}
        </motion.div>
      </motion.div>

      <motion.div
        className=" absolute right-3 top-4  "
        animate={{
          rotate: click == index ? "135deg" : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <Plus />
      </motion.div>
    </div>
  );
};

export default Faqcard;
