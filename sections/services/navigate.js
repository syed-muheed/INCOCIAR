"use client";
import { syne } from "@/components/fonts";
import Padding from "@/components/padding";
import Leftarrow from "@/public/icons/leftarrow";
import Rightarrow from "@/public/icons/rightarrow";
import React, { useState } from "react";
import img from "@/public/images/exp.png";
import muheed from "@/public/images/muheedbhai.png";
import Zoomcard from "@/components/zoomcard";

const Navigate = () => {
  const exp = [
    {
      img: img,
      name: "Syed Abdul Muheed",
      surRole: "Home Owner",
      src: muheed,
    },
    {
      img: img,
      name: "Syed Abdul Muheed",
      surRole: "Home Owner",
      src: muheed,
    },
    {
      img: img,
      name: "Syed Abdul Muheed",
      surRole: "Home Owner",
      src: muheed,
    },
    {
      img: img,
      name: "Syed Abdul Muheed",
      surRole: "Home Owner",
      src: muheed,
    },
    {
      img: img,
      name: "Syed Abdul Muheed",
      surRole: "Home Owner",
      src: muheed,
    },
  ];

  const [tab, setTab] = useState(0);

  const handlenext = () => {
    if (tab < exp.length - 1) {
      setTab(tab + 1);
    }
  };
  const handleprev = () => {
    if (tab > 0) {
      setTab(tab - 1);
    }
  };
  return (
    <div className=" flex flex-col w-full pt-[40px] ">
      <Padding className={" flex w-full items-center justify-between "}>
        <div
          className={` w-full ${syne.className} leading-[1.2] font-semibold text-[#25231F] text-[20px] md:text-[36px] max-w-full md:max-w-[500px] `}
        >
          The Incociar Experience: In Our Clients' Words
        </div>
        <div className=" flex items-center gap-2 md:gap-8 ">
          <div
            className=" cursor-pointer hover:scale-110 transition-all duration-300 "
            onClick={() => {
              handleprev();
            }}
          >
            <Leftarrow tab={tab} />
          </div>
          <div
            className=" cursor-pointer hover:scale-110 transition-all duration-300 "
            onClick={() => {
              handlenext();
            }}
          >
            <Rightarrow tab={tab} len={exp.length} />
          </div>
        </div>
      </Padding>
      <div className=" min-w-full overflow-hidden h-[500px] md:h-[600px] flex items-center  ">
        <div
          className={` min-w-full hidden md:flex    transition-all duration-300 ease-in-out  `}
          style={{
            transform: `translateX(-${tab * 33}%)`,
          }}
        >
          <div className=" min-w-[35%] "></div>
          {exp.map((item, index) => (
            <div
              className=" min-w-[33%] flex items-center justify-center transition-all duration-300 ease-in-out "
              style={{
                scale: tab == index ? 1.4 : 0.8,
              }}
              key={index}
            >
              <Zoomcard
                src={item.src}
                img={item.img}
                name={item.name}
                subRole={item.surRole}
              />
            </div>
          ))}
        </div>
        <div
          className={` min-w-full md:hidden flex    transition-all duration-300 ease-in-out  `}
          style={{
            transform: `translateX(-${tab * 100}%)`,
          }}
        >
          {exp.map((item, index) => (
            <div
              className=" min-w-[100%] flex items-center justify-center transition-all duration-300 ease-in-out "
              style={{
                scale: tab == index ? 1.4 : 0.8,
              }}
              key={index}
            >
              <Zoomcard
                src={item.src}
                img={item.img}
                name={item.name}
                subRole={item.surRole}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigate;
