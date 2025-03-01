import Craft from "@/sections/home/craft";
import Hero from "@/sections/home/hero";
import Servicemarquee from "@/sections/services/servicemarquee";


export default function Home() {
  return (
    <div className="pt-[5rem] ">
      <Hero/>
      <Servicemarquee q1={"BESPOKE LUXURY"} q2={"HANDCRAFTED DETAILS"} q3={"CURATED SPACES"} q4={"CRAFTED PERFECTION"} q5={"AESTHETIC LOOK"} q6={"TAILORED DESIGNS"} />
      <Craft/>
    </div>
  );
}
