import Image from "next/image";
import modiranKhodro from "@/app/public/11 4.png";
import { FaAngleDown } from "react-icons/fa6";
import { IoCaretUpOutline } from "react-icons/io5";

function MobileDailyPrice() {
  return (
    <div className="bg-[#F7F7F7] round-[14px] lg:hidden p-4 space-y-2 rounded-[14px] mx-2 relative pb-12">
      <div className="flex w-full items-center justify-between mb-7">
        <p className="text-sm font-semibold">قیمت روز مدیران خودرو</p>
        <Image src={modiranKhodro} alt="" />
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-light">22,اتوماتیک اسپرت لاکچری</p>
        <div className="flex items-center gap-1">
          <p className="text-[14px] font-semibold">۲,۸۰۰,۰۰۰,۰۰۰</p>
          <span className="text-sm font-light">تومان</span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-1 ">
            <span className="pl-2 text-sm font-light border-l ">۱۴۰۰</span>
            <p className="text-sm font-light">مدیران خودرو</p>
          </div>

          <div className="flex items-center">
            <span className="text-[#02C7BE] text-sm font-light">۵.۸%</span>
            <IoCaretUpOutline className="text-[#02C7BE] " />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-sm text-[#85858F]">۸ ساعت پیش</p>
        <p className="text-sm text-[#85858F]">قیمت بازار</p>
      </div>
      <span className=" absolute right-1/2 bottom-2">
        <FaAngleDown />
      </span>
    </div>
  );
}

export default MobileDailyPrice;
