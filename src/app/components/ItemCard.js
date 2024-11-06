import React from "react";
import Image from "next/image";
import VerifiedBadge from "@/app/public/Verified Badge.png";
import HamcarBadge from "@/app/public/Hamcar Badge.png";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlineCamera } from "react-icons/hi2";
import { BsShop } from "react-icons/bs";

function ItemCard({ image, alt }) {
  return (
    <div className="w-full  rounded-[18px] shadow-md mb-4">
      <div className="  flex gap-3  ">
        <div className=" h-fit w-1/3 sm:m-4 relative">
          <div className="sm:flex items-center rounded-full absolute bg-[#FFFFFF] text-[#606066] text-sm gap-2 px-2 top-2 right-2 font-light hidden">
            <HiOutlineCamera />
            <span className="pt-[3px]">۵</span>
          </div>
          <Image
            src={image}
            alt={alt}
            className="rounded-xl sm:hidden  "
            width={120}
            height={96}
          />
          <Image
            src={image}
            alt={alt}
            className="rounded-xl hidden sm:block "
          />
        </div>
        <div className=" w-2/3 sm:my-5 my-1 flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center gap-[19px] justify-between w-full sm:gap-6 sm:mb-4">
                <h3 className="font-semibold text-sm sm:text-base">
                  آئودی ، R8
                </h3>
                <span className="bg-[#F7F7F7] rounded-md sm:px-2 px-1 py-1 text-[12px] text-[#85858F]sm:block hidden">
                  ۱۰ دقیقه پیش
                </span>
                <span className="bg-[#F7F7F7] rounded-md sm:px-2 px-1 py-1 text-[10px] text-[#85858F] ">
                  دقایقی پیش
                </span>
                <div className="flex items-center  gap-2 sm:hidden mr-3">
                  <Image
                    src={VerifiedBadge}
                    alt="verified badge"
                    width={16}
                    height={16}
                  />
                  <Image
                    src={HamcarBadge}
                    alt="hamcar badge"
                    width={16}
                    height={36}
                  />
                </div>
              </div>
              <div className="flex w-fit">
                <p className="sm:text-sm text-[12px] border-l sm:pl-4 pl-1">
                  مدل ۲۰۱۹
                </p>
                <p className="sm:text-sm text-[12px] border-l sm:px-4 px-1 ">
                  ۳۴,۰۰۰ کیلومتر
                </p>
                <p className="sm:text-sm text-[12px] sm:pr-4 pr-1">اتوماتیک</p>
              </div>
            </div>
            <div className="sm:flex items-center  gap-4 hidden">
              <Image src={VerifiedBadge} alt="verified badge" />
              <Image src={HamcarBadge} alt="hamcar badge" />
            </div>
          </div>
          <div className="flex items-center bg-[#F7F7F7] sm:text-[12px] text-[10px] text-[#85858F] gap-2 p-1 w-fit rounded-lg mt-1">
            <BsShop />
            <p>نمایشگاه</p>
          </div>

          <div className="sm:flex w-full items-center justify-between mt-5 pl-4 hidden">
            <div className="flex items-center gap-2">
              <HiOutlineMapPin className="w-4 h-4" />
              <p className="lg:text-sm text[12px] text-[#0F0F10]">
                تهران,فلان منطقه
              </p>
            </div>
            <div className="flex items-center">
              <p className="lg:text-xl font-semibold text-[#0F0F10]">
                ۱,۶۰۰,۰۰۰,۰۰۰
              </p>
              <span className="text-[#0F0F10]">تومان</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex w-full items-center justify-between -mt-2 pb-2 pl-4 px-4 ">
        <div className="flex items-center gap-2">
          <HiOutlineMapPin className="w-3 h-3" />
          <p className="text-[12px] text[12px] text-[#0F0F10]">
            تهران,فلان منطقه
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-[#0F0F10] ">۱,۶۰۰,۰۰۰,۰۰۰</p>
          <span className="text-[#0F0F10] text[12px]">تومان</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
