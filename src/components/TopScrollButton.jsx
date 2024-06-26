import React from "react";
import { TopScrollIcon } from "./Icons";
import { motion } from "framer-motion";

const TopScrollButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={handleScrollToTop}
      className="fixed bottom-16 right-1 bg-lgith border-[3px] p-2 border-headline text-headline rounded-full shadow-lg"
      animate={{ scale: [1, 1.1] }}
      transition={{
        repeat: Infinity,
        duration: 0.8,
        ease: "linear",
        repeatType: "reverse",
      }}
    >
      <TopScrollIcon className={"w-7 h-auto"} />
    </motion.button>
  );
};

export default TopScrollButton;
