import React, { useEffect, useState } from "react";
import { RefreshIcon } from "./Icons";
import { motion } from "framer-motion";

const ReloadButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleReload = () => {
    window.location.reload();
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
          onClick={handleReload}
          className="fixed bottom-28 right-1"
          animate={{ scale: [1, 1.1] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "linear",
            repeatType: "reverse",
          }}
        >
          <RefreshIcon className={"w-10 h-auto"} />
        </motion.button>
      )}
    </>
  );
};

export default ReloadButton;
