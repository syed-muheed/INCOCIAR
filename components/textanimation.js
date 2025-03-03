"use client";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import clsx from "clsx";

export default function Textanimation({
  content,
  lasttext,
  color,
  duration,
  stagger,
}) {
  const phrase = content;

  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "bounce.out",
      stagger: stagger || 0.03,
      duration: duration || 0.5,
    });
  };

  const splitWords = (phrase) => {
    let words = phrase.split(" ");
    return words.map((word, i) => (
      <p
        className={clsx("inline", {
          [color ? color : "text-[#015AF0]"]:
            i === words.length - 1 && lasttext,
        })}
        key={word + "_" + i}
      >
        {splitLetters(word)}
      </p>
    ));
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className=" opacity-0"
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div ref={container} className=" inline-flex z-20">
      <div ref={body} className={clsx(" flex flex-wrap gap-x-2 md:gap-x-3 ")}>
        {splitWords(phrase)}
      </div>
    </div>
  );
}
