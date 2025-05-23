import React, { useEffect, useState } from "react";
import { TopScrollIcon } from "./Icons";
import { motion } from "framer-motion";

const TopScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={handleScrollToTop}
          className="fixed bottom-16 right-1"
          animate={{ scale: [1, 1.1] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "linear",
            repeatType: "reverse",
          }}
        >
          <TopScrollIcon className={"w-10 h-auto"} />
        </motion.button>
      )}
    </>
  );
};

export default TopScrollButton;
