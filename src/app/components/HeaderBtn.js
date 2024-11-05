import React from "react";
import { twMerge } from "tailwind-merge";

function HeaderBtn({ children, className }) {
  return (
    <button className={twMerge("w-48 h-14 rounded-[14px]", className)}>
      {children}
    </button>
  );
}

export default HeaderBtn;
