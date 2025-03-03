"use client";
import Faqcard from "@/components/faqcard";
import { syne } from "@/components/fonts";
import Padding from "@/components/padding";
import React, { useState } from "react";

const Faqs = () => {
  const [click, setClick] = useState(-1);
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide interior design services for homes, offices, and commercial spaces, including space planning, furniture selection, lighting design, and complete renovations.",
    },
    {
      question: "How much does an interior design project cost?",
      answer:
        "The cost depends on the project size, design complexity, and materials used. Contact us for a personalized quote.",
    },
    {
      question: "Do you offer consultations before starting a project?",
      answer:
        "Yes! We offer initial consultations to understand your requirements, style preferences, and budget before designing your space.",
    },
    {
      question: "How long does an interior design project take?",
      answer:
        "The timeline varies based on project scope. Small projects may take a few weeks, while full renovations can take several months.",
    },
    {
      question: "Can I see samples of your past projects?",
      answer:
        "Yes! You can explore our portfolio section on our website to view our previous work.",
    },
    {
      question:
        "Do you work with a specific style, or can you design as per my preference?",
      answer:
        "We design according to your style preferences, whether modern, contemporary, classic, minimalist, or a custom blend.",
    },
    // {
    //   question: "Do you handle renovations and remodeling?",
    //   answer:
    //     "Yes, we manage complete home and office renovations, including structural changes, layout redesign, and decor enhancements.",
    // },
    // {
    //   question: "Can you work within my budget?",
    //   answer:
    //     "Absolutely! We customize designs to fit your budget while maintaining quality and aesthetics.",
    // },
    // {
    //   question: "Do you provide 3D design previews before execution?",
    //   answer:
    //     "Yes, we offer 3D visualizations to help you see the final design before implementation.",
    // },
    // {
    //   question: "How do I get started with my interior design project?",
    //   answer:
    //     "Simply contact us through our website, call us, or visit our office to discuss your project and get started.",
    // },
  ];

  return (
    <Padding>
      {" "}
      <div className=" w-full flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between ">
        <div
          className={` ${syne.className} text-[#25231F] font-semibold text-[20px] md:text-[36px] w-[200px] md:w-[400px] leading-[1.2]  `}
        >
          Frequently Asked Questions
        </div>

        <div className=" flex flex-col w-full lg:w-[70%] xl:w-[60%] gap-4 ">
          {faqs.map((item, index) => (
            <div
              key={index}
              className=" w-full lg:w-[95%] cursor-pointer "
              onClick={() => {
                setClick(index);
              }}
            >
              <Faqcard
                key={index}
                index={index}
                click={click}
                question={item.question}
                answer={item.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </Padding>
  );
};

export default Faqs;
