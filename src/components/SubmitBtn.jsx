import React from "react";
import { stagger, useAnimate } from "framer-motion";
import { motion } from "framer-motion";

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const SubmitBtn = ({ onSubmit }) => {
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    onSubmit();
    const sparkles = Array.from({ length: 20 });
    const sparklesAnimation = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);

    const sparklesFadeOut = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.3,
        at: "<",
      },
    ]);

    const sparklesReset = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  };

  return (
    <div
      ref={scope}
      className="flex justify-center items-center min-w-[320px] pt-12 pb-3"
    >
      <motion.button
        onClick={onButtonClick}
        className="relative rounded-full text-light font-semibold bg-blue px-16 py-4 text-xl transition-colors z-[100]"
        whileHover={{ scale: 1.1 }}
      >
        <span className="sr-only">計算する</span>
        <span className="block h-8 overflow-hidden" aria-hidden>
          {["計", "算", "す", "る"].map((letter, index) => (
            <span
              data-letter={letter}
              className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 block sparkle-container -z-10"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <svg
              className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
              key={index}
              viewBox="0 0 122 117"
              width="10"
              height="10"
            >
              <path
                className="fill-blue"
                d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
              />
            </svg>
          ))}
        </span>
      </motion.button>
    </div>
  );
};

export default SubmitBtn;
