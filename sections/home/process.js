import Designcard from "@/components/designcard";
import Padding from "@/components/padding";
import Image from "next/image";
import React from "react";
import src1 from "@/public/images/process1.png";
import src2 from "@/public/images/process2.png";
import src3 from "@/public/images/process3.png";
import src4 from "@/public/images/process4.png";
import Design2 from "@/components/design2";
import Star from "@/public/icons/star";
import { syne } from "@/components/fonts";
const Process = () => {
  return (
    <div className="max-w-[1500px] mx-auto py-28">
      <Padding>
        <div className=" font-medium  text-[2rem] text-[#1F1F21] pb-12 ">
          <div className={` ${syne.className} flex gap-3 items-start`}>
            <div className="pt-3">
            <Star/>
            </div>
            <div className=" ">
            <div>Our Process</div>
          <div className=" font-normal text-[1.3rem]">Your Journey to a Perfect Space</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:grid space-y-10 md:space-y-0 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-y-0 md:gap-y-10 lg:gap-y-6 2xl:gap-y-10 gap-x-10 lg:gap-x-6 2xl:gap-x-0">
          <div className="md:col-start-1 lg:col-start-2">
            <Design2
              delay={0.3}
              src={src1}
              className={" text-[#ffffff] border-[#ffffff]"}
              tag={"Discovery"}
              className2={"text-[#ffffff] border-[#ffffff]"}
              service={"We learn about your lifestyle, preferences, and how you envision using your space."}
              className3={" text-[#595959]"}
              no={"01"}
              className4={"text-[#ffffffb8]"}
            />
          </div>
          <div className="md:col-start-1 lg:col-start-3">
            <Design2
              delay={0.7}
              src={src2}
              className={" text-[#ffffff] border-[#ffffff]"}
              tag={"Design"}
              className2={"text-[#ffffff] border-[#ffffff]"}
              service={"Our team creates detailed concepts that align with your vision and practical needs"}
              className3={" text-[#595959]"}
              no={"02"}
              className4={"text-[#ffffffb8]"}
            />
          </div>
          <div className="md:col-start-2 md:row-start-3 lg:row-start-2 lg:col-start-2">
            <Design2
              delay={0.3}
              src={src3}
              className={"text-[#ffffff] border-[#ffffff]"}
              tag={"Crafting"}
              className2={"text-[#ffffff] border-[#ffffff]"}
              service={"We manage every detail, from material selection to contractor coordination."}
              className3={" text-[#595959]"}
              no={"03"}
              className4={"text-[#ffffffb8]"}
            />
          </div>
          <div className="md:col-start-2 md:row-start-4 lg:col-start-1 lg:row-start-3">
            <Design2
              delay={0.3}
              src={src1}
              className={" text-[#ffffff] border-[#ffffff]"}
              tag={"Refining"}
              className2={"text-[#ffffff] border-[#ffffff]"}
              service={"Watch your space transform as we bring the design to life, ensuring every detail meets our high standards."}
              className3={" text-[#595959]"}
              no={"04"}
              className4={"text-[#ffffffb8]"}
            />
          </div>
          <div className="md:col-start-1  md:row-start-5 lg:row-start-3 lg:col-start-2">
            <Design2
              delay={0.7}
              src={src4}
              className={"text-[#ffffff] border-[#ffffff]"}
              tag={"Finishing"}
              className2={"text-[#ffffff] border-[#ffffff]"}
              service={"Watch your space transform as we bring the design to life, ensuring every detail meets our high standards."}
              className3={" text-[#595959]"}
              no={"05"}
              className4={"text-[#ffffffb8]"}
            />
          </div>
          
          
         
          
          
          
        </div>
      </Padding>
    </div>
  );
};

export default Process;
