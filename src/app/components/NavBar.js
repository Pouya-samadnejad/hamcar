"use client";
import Image from "next/image";
import Vector from "@/app/public/Vector.png";
import NavItem from "./NavItem";
import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";
import HeaderBtn from "./HeaderBtn";
import MobileNav from "./MobileNav";
import MobileMenuItems from "./MobileMenuItems";
import { useState } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((opn) => !opn);
  }

  return (
    <>
      <header className=" hidden lg:flex items-center py-4 justify-between h-[88px] px-7 bg-white/60 backdrop-blur-lg border-b-2 w-full fixed z-50 mb-44 ">
        <Image src={Vector} alt="Logo of hamcar" className="h-9 ml-20" />
        <NavItem />
        <DarkModeToggle />
        <span className=" h-6 w-[2px] bg-[#DCDDE0] mr-12"></span>
        <SearchBar />
        <HeaderBtn>ثبت نام | ورود</HeaderBtn>
        <HeaderBtn className="bg-[#007AFF] text-white">ثبت آگهی</HeaderBtn>
      </header>
      <MobileNav click={handleOpen} />
      {isOpen && <MobileMenuItems click={handleOpen} />}
    </>
  );
}

export default NavBar;
