import React from "react";
import { FiFilter } from "react-icons/fi";

function FiltetBtn() {
  return (
    <div className="lg:hidden w-full flex justify-center ">
      <button className="text-white bg-[#0F0F10] py-4 flex items-center justify-center w-4/5 font-bold gap-2 rounded-full fixed z-50 bottom-2 ">
        <FiFilter />
        اعمال فیلتر آگهی
      </button>
    </div>
  );
}

export default FiltetBtn;
