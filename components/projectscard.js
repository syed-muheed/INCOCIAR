import Image from "next/image";
import React from "react";
import Widthanimation from "./widthanimation";
import Fadeinx from "./fadeinx";
import Padding from "./padding";
import clsx from "clsx";

const Projectscard = ({ src, tittle, desc, h, w, delay }) => {
  return (
    <div className=" w-full  ">
      <div className=" w-full">
        <Widthanimation delay={delay} w={w}>
          <Image className={clsx(` object-cover `, h)} src={src} alt="" />
        </Widthanimation>
      </div>
      <div className="pt-2  px-[1rem] md:px-0">
        <div className=" font-circular -tracking-[0.05rem]   text-[1.5rem] pt-5 font-medium  leading-[1.9rem] ">
          <Fadeinx delay={0.1}>{tittle}</Fadeinx>
        </div>
        <div className=" font-gilroy text-[0.95rem] font-medium text-[#808080] w-max ">
          <Fadeinx delay={0.1}>{desc}</Fadeinx>
        </div>
      </div>
    </div>
  );
};

export default Projectscard;
