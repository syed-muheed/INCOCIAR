import React from "react";
import { motion } from "framer-motion";
import Offermarquee from "@/components/offermarquee";
import Card1 from "@/components/card1";
import Card2 from "@/components/card2";
import Card3 from "@/components/card3";

const Threebox = () => {
  return (
    <div className=" h-fit w-full flex flex-col ">
      <Offermarquee className={"relative top-[48px]"} />
      <div className=" flex items-center justify-center relative z-30   ">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <Offermarquee className={"relative bottom-[48px]"} left={true} />
    </div>
  );
};

export default Threebox;
