import Image from "next/image";
import React from "react";
import { syne } from "./fonts";

const Testimonialcard = ({ item }) => {
  return (
    <div className=" px-[50px] ">
      <div className=" flex flex-col gap-4 ">
        <div className=" text-[#595959] text-[18px] font-medium w-[320px] ">
          {item.message}
        </div>
        <div className=" flex items-center gap-2 ">
          <Image
            alt=""
            src={item.src}
            className=" min-h-[50px] max-h-[50px] max-w-[50px] min-w-[50px] rounded-full "
          />
          <div className=" flex flex-col gap-0 ">
            <div
              className={` ${syne.className} font-semibold text-[18px] text-[#25231F]  `}
            >
              {item.name}
            </div>
            <div className={`   text-[14px] text-[#595959]  `}>
              {item.subRole}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonialcard;
