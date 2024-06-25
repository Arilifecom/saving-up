import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex h-[60px] items-center justify-between px-4 bg-blue text-bg_pink text-xs md:justify-center md:gap-8">
      <span>{new Date().getFullYear()} &copy; All Rights reserved.</span>
      <div className="flex items-center">
        build Width <span className="text-primary text-2xl px-1">&#9825;</span>
        by&nbsp;
        <Link
          href="/"
          className="underline
            underline-offset-2
            "
          target={"_blank"}
        >
          Ari
        </Link>
      </div>
    </div>
  );
};

export default Footer;
