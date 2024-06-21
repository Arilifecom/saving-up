import React from "react";
import { Icon, Logo } from "./Icons";

const Header = () => {
  return (
    <header>
      <nav className=" flex items-center justify-center h-10  bg-blue">
        <p className="text-light text-xs font-light">
          オーストラリアで日本円貯金を頑張る人の計算サイト
        </p>
      </nav>
      <div className="bg-wave-shape-xs bg-cover pb-12 w-full grid place-items-center md:bg-wave-shape-xl md:bg-cover md:pb-24">
        <Icon
          className={
            "w-[70px] h-[70px] -mb-3 md:w-[100px] md:h-[100px] md:mb-0"
          }
        />
        <Logo className={"w-44 md:w-52"} />
      </div>
    </header>
  );
};

export default Header;
