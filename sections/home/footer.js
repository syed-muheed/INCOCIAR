"use client";
import Padding from "@/components/padding";
import Image from "next/image";
import React, { useRef } from "react";
import inco from "@/public/images/incoblack.png";
import { syne } from "@/components/fonts";
import Footsvg from "@/public/icons/footsvg";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div className=" bg-white w-full overflow-hidden h-[880px] md:h-[90vh]  xl:h-[650px] pt-[50px]  ">
      <Padding className={" w-full flex flex-col relative h-full "}>
        <div className=" w-full flex flex-col gap-12 md:gap-0 md:flex-row justify-between ">
          <div className=" w-[220px] ">
            <Image
              height={1000}
              width={1000}
              alt=""
              src={inco}
              className=" object-cover   "
            />
          </div>
          <div className=" flex flex-col lg:flex-row gap-16 lg:gap-24 ">
            <div className=" flex flex-col gap-4 ">
              <div
                className={` ${syne.className} text-[#7A2100] font-semibold text-[20px] `}
              >
                Address
              </div>
              <div className=" text-[16px] text-[#8C7E78] font-medium w-[200px]  ">
                Blumenstrasse 12, 8001 Zürich, Switzerland
              </div>
              <div className=" text-[16px] text-[#8C7E78] font-medium w-[200px]  ">
                Blumenstrasse 12, 8001 Zürich, Switzerland
              </div>
              <div className=" text-[16px] text-[#8C7E78] font-medium w-[200px]  ">
                Blumenstrasse 12, 8001 Zürich, Switzerland
              </div>
            </div>
            <div className=" flex flex-col gap-10 ">
              <div className=" flex gap-14 ">
                <div className=" flex flex-col gap-4 ">
                  <div
                    className={` ${syne.className} text-[#7A2100] font-semibold text-[20px] `}
                  >
                    Links
                  </div>
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    Home
                  </div>
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    About
                  </div>
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    Services
                  </div>
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    Location
                  </div>
                </div>
                <div className=" flex flex-col gap-4 ">
                  <div
                    className={` ${syne.className} text-[#7A2100] font-semibold text-[20px] `}
                  >
                    Socials
                  </div>
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    Instagram
                  </div>
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    LinkedIn
                  </div>
                </div>
                <div className=" flex flex-col gap-4 ">
                  <div
                    className={` ${syne.className} text-[#7A2100] font-semibold text-[20px] `}
                  >
                    Legal
                  </div>
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    Imprint
                  </div>
                </div>
              </div>
              <div className=" flex items-end gap-16 ">
                <div className=" flex flex-col gap-4 ">
                  <div
                    ref={ref}
                    className={` ${syne.className} text-[#7A2100] font-semibold text-[20px] `}
                  >
                    Contact
                  </div>
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    Phone
                  </div>
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    2233444551
                  </div>
                </div>
                <div className=" flex flex-col gap-4 ">
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    Email
                  </div>
                  <div className=" text-[16px] text-[#8C7E78] font-medium  ">
                    INFO@ARCHSTUDIO.CH
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{
            y: 200,
          }}
          animate={{
            y: inView ? 0 : 200,
          }}
          transition={{
            duration: 0.66,
            ease: "easeInOut",
          }}
          className=" w-[95%] absolute bottom-0 left-[50%] -translate-x-1/2 "
        >
          <Footsvg />
        </motion.div>
      </Padding>
    </div>
  );
};

export default Footer;
