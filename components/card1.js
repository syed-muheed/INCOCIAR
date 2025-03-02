import React from "react";
import img1 from "@/public/images/thOne.png";
import Image from "next/image";
import Incosvg from "@/public/icons/incosvg";

const Card1 = () => {
  return (
    <div className=" h-[500px] w-[380px] relative  ">
      <Image src={img1} className=" object-cover " alt="" />
      <div className=" w-[80%] absolute left-[50%] -translate-x-1/2 bottom-3 ">
        <Incosvg />
      </div>
    </div>
  );
};

export default Card1;
