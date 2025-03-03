import Brownbtn from "@/components/brownbtn";
import { syne } from "@/components/fonts";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "@/public/images/home1.png";
import img2 from "@/public/images/home2.png";
import img3 from "@/public/images/home3.png";
import img4 from "@/public/images/home4.png";

const Homebudget = () => {
  return (
    <div className=" h-[100vh] xl:h-[120vh] w-full flex flex-col items-center justify-center relative  ">
      <div className=" absolute top-[0px] left-0  w-full ">
        <Marquee>
          <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[600px] flex justify-center items-center ">
            <Image
              src={img1}
              className=" h-[250px] md:h-[300px] w-[150px] md:w-[200px] "
              alt=""
            />
          </div>
          <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[600px] flex justify-center items-center ">
            <Image src={img2} className=" h-[200px] w-[150px] " alt="" />
          </div>
          <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[600px] flex justify-center items-center ">
            <Image
              src={img3}
              className=" h-[250px] md:h-[300px] w-[150px] md:w-[200px] "
              alt=""
            />
          </div>
          <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[600px] flex justify-center items-center ">
            <Image src={img4} className=" h-[200px] w-[150px] " alt="" />
          </div>
        </Marquee>
      </div>
      <div className=" flex flex-col items-center justify-center gap-4 relative z-50   ">
        <div className=" flex flex-col items-center justify-center rounded-4xl gap-4 bg-white/10 backdrop-blur-sm pt-3 ">
          <div
            className={` ${syne.className} font-semibold text-[28px] w-[300px] md:text-[48px] text-[#25231F] text-center md:w-[500px]  leading-[1.2]  rounded-b-full `}
          >
            Home For Everyone & Every Budget
          </div>
          <div className=" text-[#595959] text-[12px]  w-[320px] md:text-[14px] text-center md:w-[400px] pb-[10px]  ">
            We safeguard your holiday home with professional care and local
            expertise. From maintenance to security, our dedicated team ensures
            your property stays pristine and protected year-round, giving you
            complete peace of mind.
          </div>
        </div>
        <Brownbtn text={"Request Consultation"} />
      </div>
      <div className=" absolute bottom-[0px] left-0  w-full ">
        <Marquee direction="right">
          <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[600px] flex justify-center items-center ">
            <Image
              src={img1}
              className=" h-[250px] md:h-[300px] w-[150px] md:w-[200px] "
              alt=""
            />
          </div>
          <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[600px] flex justify-center items-center ">
            <Image src={img2} className=" h-[200px] w-[150px] " alt="" />
          </div>
          <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[600px] flex justify-center items-center ">
            <Image
              src={img3}
              className=" h-[250px] md:h-[300px] w-[150px] md:w-[200px] "
              alt=""
            />
          </div>
          <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[600px] flex justify-center items-center ">
            <Image src={img4} className=" h-[200px] w-[150px] " alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Homebudget;
