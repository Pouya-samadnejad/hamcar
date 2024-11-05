import React from "react";
import Image from "next/image";
import latinHamcarLogo from "@/app/public/latinHamcarLogo.png";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
function MobileNav({ click }) {
  return (
    <div className="lg:hidden flex items-center justify-between h-[72px] px-4 w-full fixed z-50 bg-white/60 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button
          onClick={click}
          className="bg-[#F7F7F7] flex items-center justify-center h-10 w-10 rounded-xl"
        >
          <RxHamburgerMenu />
        </button>
        <button className="bg-[#F7F7F7] flex items-center justify-center h-10 w-10 rounded-xl">
          <PiMagnifyingGlassLight />
        </button>
      </div>

      <Image src={latinHamcarLogo} alt="hamcar logo with latin alphabet" />
    </div>
  );
}

export default MobileNav;
