import React from "react";
import { twMerge } from "tailwind-merge";

function FilterSelection({ children, className }) {
  return (
    <form className={twMerge("w-full", className)}>
      <select className="w-full py-4  " id="sorts ">
        <option value="">{children}</option>
      </select>
    </form>
  );
}

export default FilterSelection;
