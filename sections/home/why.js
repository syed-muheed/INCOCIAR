import React from "react";
import src from "../../public/images/why1.png";
import { syne } from "@/components/fonts";

const Why = () => {
  return (
    <div className={` ${syne.className}`}>
      <div className=" md:flex h-[100rem] md:h-[56rem]">
        <div className=" h-full md:w-[73.5%] ">
          <div className=" h-[35%] md:flex">
            <div
              style={{ backgroundImage: "url(/images/why1.png)" }}
              className=" bg-cover text-[#00000046]  flex text-center pt-[1.5rem] justify-center text-[1.3rem] font-medium md:w-[35%] "
            >
              Excellence in Every Detail
            </div>
            <div className=" bg-[#A3886E] text-[5rem] leading-[5rem] md:w-[65%] font-medium text-center flex items-center justify-center  text-[#7A2100] ">
              <div>
                Why Choose <span className=" text-[white]"> Incociar ?</span>
              </div>
            </div>
          </div>
          <div className="h-[65%] md:flex">
            <div
              style={{ backgroundImage: "url(/images/why3.png)" }}
              className=" bg-cover flex relative items-center justify-center text-[2rem] font-medium text-black md:w-[60%] h-full "
            ><div className="pt-4">Personalized Approach</div>
                
              
              <div className=" absolute flex gap-2.5 top-5 right-5">
                <div className=" text-[white] border border-[#c5c5c5] px-4 py-1.5 rounded-full text-[11px]">
                  Non-generic
                </div>
                <div className=" text-[white] border border-[#c5c5c5] px-4 py-1.5 rounded-full text-[11px]">
                  Unique
                </div>
                <div className=" text-[white] border border-[#c5c5c5] px-4 py-1.5 rounded-full text-[11px]">
                  Tailored
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: "url(/images/why4.png)" }}
              className=" bg-cover text-[white] relative flex items-center justify-center text-[2rem] font-medium md:w-[40%] h-full"
            ><div className="pt-4">Quality Guaranteed</div>
              
              <div className=" absolute md:flex gap-2.5 bottom-5 left-5">
                <div className=" text-[white] border border-[#c5c5c5] px-4 py-1.5 rounded-full text-[11px]">
                  Premium
                </div>
                <div className=" text-[white] border border-[#c5c5c5] px-4 py-1.5 rounded-full text-[11px]">
                  Exceptional
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full md:w-[26.5%] ">
          <div
            style={{ backgroundImage: "url(/images/why2.png)" }}
            className=" bg-cover text-[white] relative flex items-center justify-center text-[2rem] font-medium h-[57%]"
          >
            Expert Team
            <div className=" absolute flex gap-2.5 bottom-5 left-5">
                <div className=" text-[white] border border-[#c5c5c5] px-4 py-1.5 rounded-full text-[11px]">
                  Designers
                </div>
                <div className=" text-[white] border border-[#c5c5c5] px-4 py-1.5 rounded-full text-[11px]">
                  Experience
                </div>
                <div className=" text-[white] border border-[#c5c5c5] px-4 py-1.5 rounded-full text-[11px]">
                  Crafting
                </div>
              </div>
          </div>
          <div className=" bg-[#7A2100] text-[white] relative flex items-center justify-center text-[2rem] font-medium h-[43%]">
            Timely Delivery
            <div className=" absolute flex gap-2.5 top-5 left-5">
                <div className=" text-[white] border border-[#c5c5c5] px-4 py-1.5 rounded-full text-[11px]">
                  Schedules
                </div>
                <div className=" text-[white] border border-[#c5c5c5] px-4 py-1.5 rounded-full text-[11px]">
                  Deliver
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
