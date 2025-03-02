import { syne } from "@/components/fonts";
import Padding from "@/components/padding";
import React from "react";
import muheed from "@/public/images/muheedbhai.png";
import Marquee from "react-fast-marquee";
import Testimonialcard from "@/components/testimonialcard";

const Testimonials = () => {
  const data = [
    {
      message:
        "“Incociar transformed our chaotic house into a thoughtfully designed home that finally works for our family. Worth every penny for the peace of mind alone!”",
      src: muheed,
      subRole: "Home Owner",
      name: "Syed Abdul Muheed",
    },
    {
      message:
        "“Incociar transformed our chaotic house into a thoughtfully designed home that finally works for our family. Worth every penny for the peace of mind alone!”",
      src: muheed,
      subRole: "Home Owner",
      name: "Syed Abdul Muheed",
    },
    {
      message:
        "“Incociar transformed our chaotic house into a thoughtfully designed home that finally works for our family. Worth every penny for the peace of mind alone!”",
      src: muheed,
      subRole: "Home Owner",
      name: "Syed Abdul Muheed",
    },
    {
      message:
        "“Incociar transformed our chaotic house into a thoughtfully designed home that finally works for our family. Worth every penny for the peace of mind alone!”",
      src: muheed,
      subRole: "Home Owner",
      name: "Syed Abdul Muheed",
    },
    {
      message:
        "“Incociar transformed our chaotic house into a thoughtfully designed home that finally works for our family. Worth every penny for the peace of mind alone!”",
      src: muheed,
      subRole: "Home Owner",
      name: "Syed Abdul Muheed",
    },
  ];
  return (
    <div className=" flex flex-col gap-16 py-16 ">
      <Padding>
        <div
          className={` w-full ${syne.className} leading-[1.2] font-semibold text-[#25231F] text-[24px] md:text-[36px] max-w-[200px] md:max-w-[300px] `}
        >
          See More Design Stories
        </div>
      </Padding>
      <Marquee speed={180} pauseOnHover={true}>
        {data.map((item, index) => (
          <Testimonialcard key={index} item={item} />
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
