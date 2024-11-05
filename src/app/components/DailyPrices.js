import { MdKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";
import amicoLogo from "@/app/public/amicoLogo.png";
import PriceSection from "./PriceSection";
import greenChart from "@/app/public/greenChart.png";
import { IoCaretUpOutline } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";
import redChart from "@/app/public/redChart.png";

function DailyPrices() {
  return (
    <div className=" lg:block w-full p-6 rounded-[18px] shadow-md space-y-4 hidden">
      <div className="flex items-center justify-between mb-4 h-8 w-full">
        <div className="flex justify-between items-centers gap-4 ">
          <Image src={amicoLogo} alt="amico Logo" />
          <p className="text-base font-semibold">فیلترهای انتخاب شده</p>
        </div>
        <button className=" text-[#EF3838] text-sm w-fit flex items-center">
          مشاهده لیست قیمت
          <MdKeyboardArrowLeft />
        </button>
      </div>
      <PriceSection
        carName="آمیکو دو کابین آسنا"
        carType="دنده‌ای"
        year="۱۴۰۱"
        priceType="قیمت بازار"
        time="۳ روز پیش"
        imageChart={greenChart}
        priceRate="۵.۸"
        rateIcon={<IoCaretUpOutline className="text-[#02C7BE] w-4 h-4" />}
        price="۱۲۳,۴۵۶,۷۸۹"
      />
      <PriceSection
        carName="آمیکو دو کابین آسنا"
        carType="اتوماتی "
        year="۱۴۰۰"
        priceType="قیمت کارخانه  "
        time="۳ روز پیش"
        imageChart={redChart}
        priceRate="۸.۲"
        rateIcon={<IoCaretDown className="text-[#EF3838] w-4 h-4" />}
        price="۱۲۳,۴۵۶,۷۸۹"
      />
      <PriceSection
        carName="آمیکو دو کابین آسنا"
        carType="دنده‌ای"
        year="۱۴۰۱"
        priceType="قیمت بازار"
        time="۳ روز پیش"
        imageChart={greenChart}
        priceRate="۵.۸"
        rateIcon={<IoCaretUpOutline className="text-[#02C7BE] w-4 h-4" />}
        price="۱۲۳,۴۵۶,۷۸۹"
      />
    </div>
  );
}

export default DailyPrices;
