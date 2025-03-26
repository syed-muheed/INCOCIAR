import React from "react";
import { syne } from "@/components/fonts";
import Padding from "@/components/padding";
import src1 from "@/public/images/contact1.png"
import src2 from "@/public/images/contact2.png"
import Image from "next/image";

const Connect = () => {
  return (
    <Padding className={"pt-[3rem]"}>
      <div className={` text-[2.7rem] font-semibold ${syne.className}`}>
        <span className="text-[#7A2100]"> We’re Here to Help - </span> Let’s
        Connect
      </div>
      <div className="flex">
        <div className="w-[50%] pt-[3rem] flex gap-4">
            <Image className="h-[21rem] w-fit" src={src1} alt="img1"/>
            <Image className="h-[21rem] mt-[10rem] w-fit" src={src2} alt="img2"/>
        </div>
        <div className="w-[50%] pt-[3rem]">
            <div className={` text-[1.6rem] font-semibold ${syne.className}`}>Got questions?
           </div>
           <div className={` text-[1.6rem] font-semibold ${syne.className}`}> Need assistance with your interior project?</div>
           <div className="text-[#4F4F4F] pt-5 w-[30rem]">We’re just a call or a message away. Our team is ready to guide you at every step of your design journey.</div>
        </div>
      </div>
    </Padding>
  );
};

export default Connect;
