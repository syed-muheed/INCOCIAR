import React from "react";
import Servicehero from "./servicehero";
import Servicemarquee from "./servicemarquee";
import Servicescroll from "./servicescroll";

const Serviceswrapper = () => {
  return (
    <div className=" w-full bg-white ">
      <Servicehero />
      <Servicemarquee />
      <Servicescroll />
      <div className=" h-screen "></div>
    </div>
  );
};

export default Serviceswrapper;
