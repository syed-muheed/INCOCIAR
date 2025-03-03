import Image from "next/image";
import React from "react";
import { syne } from "./fonts";

const Zoomcard = ({ img, src, subRole, name }) => {
  return (
    <div className=" flex flex-col gap-4 ">
      <Image
        alt=""
        className=" h-[250px]  md:h-[200px] lg:h-[250px] w-[200px]  md:w-[160px]  lg:w-[200px] "
        src={img}
      />
      <div className=" flex items-center gap-2 ">
        <Image
          alt=""
          src={src}
          className=" min-h-[40px] max-h-[40px] min-w-[40px] max-w-[40px] lg:min-h-[50px] lg:max-h-[50px] lg:max-w-[50px] lg:min-w-[50px] rounded-full "
        />
        <div className=" flex flex-col gap-0 ">
          <div
            className={` ${syne.className} font-semibold text-[12px] lg:text-[14px] text-[#25231F]  `}
          >
            {name}
          </div>
          <div className={`  text-[12px]  md:text-[14px] text-[#595959]  `}>
            {subRole}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zoomcard;
