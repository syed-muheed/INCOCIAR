import React from "react";
import Servicehero from "./servicehero";
import Servicemarquee from "./servicemarquee";
import Servicescroll from "./servicescroll";
import Threebox from "./threebox";

const Serviceswrapper = () => {
  return (
    <div className=" w-full bg-white ">
      {/* <Servicehero />
      <Servicemarquee
        q1={"BESPOKE LUXURY"}
        q2={"HANDCRAFTED DETAILS"}
        q3={"CURATED SPACES"}
        q4={"CRAFTED PERFECTION"}
        q5={"AESTHETIC LOOK"}
        q6={"TAILORED DESIGNS"}
      />
      <Servicescroll /> */}
      <Threebox />
    </div>
  );
};

export default Serviceswrapper;
