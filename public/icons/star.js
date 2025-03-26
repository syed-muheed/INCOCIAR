"use client"
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Star = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
        ref={ref}
        initial={{ rotate: 0 }}
        animate={isInView ? { rotate: 2520 } : {}} // 5 full rotations (360 * 5)
        transition={{ duration: 1.5, ease: "easeOut",type:"spring" }}>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.655227 11.319C-0.150688 11.0704 -0.150686 9.92961 0.655229 9.68104L6.73748 7.80507C7.00828 7.72154 7.22028 7.50956 7.30382 7.23877L9.18069 1.15553C9.42934 0.349602 10.5702 0.349747 10.8186 1.15574L12.6937 7.23856C12.7772 7.50947 12.9892 7.72156 13.2601 7.80509L19.344 9.68102C20.15 9.92955 20.15 11.0705 19.344 11.319L13.2601 13.1949C12.9892 13.2784 12.7772 13.4905 12.6937 13.7614L10.8186 19.8443C10.5702 20.6503 9.42934 20.6504 9.18069 19.8445L7.30382 13.7612C7.22028 13.4904 7.00828 13.2785 6.73748 13.1949L0.655227 11.319Z"
          fill="#B38F78"
        />
      </svg>
      </motion.div>
  );
};

export default Star;
