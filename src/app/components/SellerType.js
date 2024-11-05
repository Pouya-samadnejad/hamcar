import React from "react";
import { GoDotFill } from "react-icons/go";

function SellerType() {
  return (
    <div className="w-full p-6 rounded-[18px] shadow-md my-2 ">
      <div className="flex justify-start items-center gap-2 mb-5">
        <h3 className="font-semibold text-base">فروشنده</h3>
        <GoDotFill className="text-[#FF9500] w-[6px] h-[6px]" />
      </div>
      <div className="bg-[#F0EFEF] border-solid border-2 w-full mx-auto rounded-xl flex ">
        <button className="bg-white active:bg-[#F0EFEF] hover:bg-[#F0EFEF] transition-all duration-500 rounded-r-lg py-2 px-3 w-full ">
          همه
        </button>
        <button className="bg-white active:bg-[#F0EFEF] hover:bg-[#F0EFEF] transition-all duration-500 py-2 px-3 w-full ">
          شخصی
        </button>
        <button className="bg-white active:bg-[#F0EFEF] hover:bg-[#F0EFEF] transition-all duration-500 rounded-l-lg py-2 px-3 w-full ">
          نمایشگاه
        </button>
      </div>
    </div>
  );
}

export default SellerType;
