import React from "react";
import img1 from "@/public/images/thTwo.png";
import Image from "next/image";

const Card2 = () => {
  return (
    <div className=" h-[500px] w-[380px]  ">
      <Image src={img1} className=" object-cover " alt="" />
    </div>
  );
};

export default Card2;
