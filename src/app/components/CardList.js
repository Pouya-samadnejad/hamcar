import React from "react";
import Image from "next/image";
import ItemCard from "./ItemCard";
import car1 from "@/app/public/car1.jpg";
import car2 from "@/app/public/car2.jpg";
import car3 from "@/app/public/car3.jpg";
import car4 from "@/app/public/car4.jpg";
import car5 from "@/app/public/car5.jpg";
import car6 from "@/app/public/car6.jpg";
import car7 from "@/app/public/car7.jpg";
import car8 from "@/app/public/car8.jpg";
import banner from "@/app/public/banner 3.png";
import mobileBanner from "@/app/public/mobileBanner.png";
const images1 = [
  { image: car1, alt: "car1" },
  { image: car2, alt: "car2" },
  { image: car3, alt: "car3" },
  { image: car4, alt: "car4" },
];
const images2 = [
  { image: car5, alt: "car5" },
  { image: car6, alt: "car6" },
  { image: car7, alt: "car7" },
  { image: car8, alt: "car8" },
];

function CardList() {
  return (
    <>
      <div className="w-full px-3 lg:px-0">
        {images1.map((image) => (
          <ItemCard image={image.image} alt={image.alt} key={image.alt} />
        ))}
      </div>
      <div className="w-full my-4 sm:bg-gradient-to-r from-[#FFD600] to-[#FF9500] rounded-[18px] px-3 ">
        <Image src={mobileBanner} alt="mobile banner" className="sm:hidden " />
        <Image
          src={banner}
          height={144}
          alt="hamcar banner "
          className="hidden sm:block "
        />
      </div>
      <div className="w-full px-2 lg:px-0 ">
        {images2.map((image) => (
          <ItemCard image={image.image} alt={image.alt} key={image.alt} />
        ))}
      </div>
    </>
  );
}

export default CardList;
