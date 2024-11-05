import { IoMdSunny } from "react-icons/io";

function DarkModeToggle() {
  return (
    <div className="mr-12">
      <label
        htmlFor="check"
        className=" flex relative w-12 h-6 rounded-full bg-[#F0EFEF]  p-[2px] cursor-pointer "
      >
        <input type="checkbox" id="cjeck" className="sr-only peer" />
        <span className="w-5 h-5 rounded-full  absolute peer-checked:right-6 bg-white flex justify-center items-center ">
          <IoMdSunny />
        </span>
      </label>
    </div>
  );
}

export default DarkModeToggle;
