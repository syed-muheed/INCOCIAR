import React from "react";
import Servicehero from "./servicehero";
import Servicemarquee from "./servicemarquee";
import Servicescroll from "./servicescroll";
import Threebox from "./threebox";
import Testimonials from "./testimonials";
import Homebudget from "./homebudget";
import Navigate from "./navigate";
import Faqs from "./faqs";
import Readytotransform from "../home/readytotransform";
import Footer from "../home/footer";
import Startanimation from "@/components/startanimation";
import Lenis1 from "@/components/lenis1";

const Serviceswrapper = () => {
  return (
    <>
      <Startanimation />
      <div className=" w-full bg-white ">
        <Lenis1>
          <Servicehero />
          <Servicemarquee
            q1={"BESPOKE LUXURY"}
            q2={"HANDCRAFTED DETAILS"}
            q3={"CURATED SPACES"}
            q4={"CRAFTED PERFECTION"}
            q5={"AESTHETIC LOOK"}
            q6={"TAILORED DESIGNS"}
          />
          <Servicescroll />
          <Threebox />
          <Homebudget />
          <Navigate />
          <Testimonials />
          <Faqs />
          <Readytotransform />
          <Footer />
        </Lenis1>
      </div>
    </>
  );
};

export default Serviceswrapper;
