import React from "react";
import Marquee from "react-fast-marquee";
import { syne } from "./fonts";

const Offermarquee = ({ left, className }) => {
  return (
    <div className={className}>
      <Marquee direction={left ? "left" : "right"} speed={200}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={` ${syne.className} font-normal text-[#E2E2E2] text-[64px] px-[60px]  `}
          >
            What we Offer
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Offermarquee;
