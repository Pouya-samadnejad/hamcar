import React from "react";
import { FiHome } from "react-icons/fi";
import { GoChevronLeft } from "react-icons/go";

function PageTab() {
  return (
    <>
      <div className="lg:h-24 h-10"></div>
      <div className="lg:flex items-center text-sm gap-3 pt-3 hidden ">
        <div className="flex">
          <FiHome className="w-[14px] h-[14px]" />
          <span>همکار</span>
        </div>
        <GoChevronLeft className="text-[#ABADB2]" />
        <span>همه آگهی ها</span>
        <GoChevronLeft className="text-[#ABADB2]" />
        <span className="text-[#ABADB2]">خودرو</span>
      </div>
    </>
  );
}

export default PageTab;
