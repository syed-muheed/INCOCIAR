import React from "react";
import img1 from "@/public/images/thOne.png";
import Image from "next/image";

const Card3 = () => {
  return (
    <div className=" h-[500px] w-[380px]  ">
      <Image src={img1} className=" object-cover " alt="" />
    </div>
  );
};

export default Card3;
