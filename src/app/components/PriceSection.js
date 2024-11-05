import React from "react";
import Image from "next/image";
function PriceSection({
  carName,
  carType,
  time,
  imageChart,
  priceRate,
  price,
  year,
  priceType,
  rateIcon,
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        <p className="text-base text-[#0F0F10]">{carName}</p>
        <span className="text-base text-[#85858F]">
          {carType}، {year}
        </span>
      </div>
      <p>
        {priceType} - {time}
      </p>
      <div className="flex items-center gap-2 justify-between w-32">
        <Image src={imageChart} alt="price chart" />
        <span>{priceRate}%</span>
        <span>{rateIcon}</span>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-base text-[#0F0F10] font-semibold">{price}</p>
        <span className="text-[#85858F] text-base font-normal">تومان</span>
      </div>
    </div>
  );
}

export default PriceSection;
