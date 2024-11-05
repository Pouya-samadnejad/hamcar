import { FaRegClock } from "react-icons/fa6";
import HeaderBtn from "./HeaderBtn";
import { CiGrid2H } from "react-icons/ci";
import FilterSelection from "./FilterSelection";

function AdsNum() {
  return (
    <div className="flex items-center pt-10 text-right w-full mb-5 justify-between ">
      <div className="flex lg:w-3/4 justify-between ">
        <div className="flex items-center gap-2 ">
          <h2 className="lg:text-xl font-semibold">همه آگهی هاو فلان بیسار</h2>
          <span className="text-xl hidden lg:block">آگهی1234</span>
        </div>

        <div className="lg:flex text-base text-[#007AFF] items-center gap-1 hidden">
          <FaRegClock />
          <p>جست و جوهای اخیر من</p>
        </div>
      </div>
      <span className=" hidden lg:block h-6 w-[2px] bg-[#DCDDE0] mx-4"></span>
      <div className="flex items-center justify-end">
        <HeaderBtn className="lg:hidden w-10 h-10 bg-[#F7F7F7] p-3">
          <FaRegClock />
        </HeaderBtn>
        <HeaderBtn className="bg-[#F7F7F7] lg:w-14 lg:h-14 w-10 h-10 flex items-center justify-center mx-2 p-3">
          <CiGrid2H className="lg:text-2xl" />
        </HeaderBtn>

        <div className="lg:w-[296px] px-2  rounded-[10px] bg-[#F7F7F7]">
          <form>
            <select
              className="lg:w-full lg:h-14 h-10  rounded-[10px] bg-[#F7F7F7] w-full "
              id="sorts"
            >
              <option value="">ترتیب آگهی</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdsNum;
