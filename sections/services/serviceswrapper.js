import React from "react";
import Servicehero from "./servicehero";
import Servicemarquee from "./servicemarquee";

const Serviceswrapper = () => {
  return (
    <div className=" w-full bg-white ">
      <Servicehero />
      <Servicemarquee />
    </div>
  );
};

export default Serviceswrapper;
