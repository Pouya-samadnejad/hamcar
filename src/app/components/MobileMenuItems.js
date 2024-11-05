import React from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";

function MobileMenuItems({ click }) {
  return (
    <nav className="w-full h-full bg-white/60 backdrop-blur-xl absolute z-[100] p-4">
      <button onClick={click}>
        <MdClose className="text-5xl" />
      </button>

      <ul className="flex flex-col items-center justify-center gap-10 text-3xl h-full ">
        <li>
          <Link href="#">خودرو</Link>
        </li>
        <li>
          <Link href="#">موتور سیکلت</Link>
        </li>
        <li>
          <Link href="#">همکار من</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenuItems;
