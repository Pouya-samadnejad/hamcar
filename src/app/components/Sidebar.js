import FilterSelection from "./FilterSelection";
import SelectedFIlters from "./SelectedFIlters";
import SellerType from "./SellerType";

function Sidebar({ children }) {
  return (
    <div className="w-1/4 hidden lg:block">
      <SelectedFIlters />
      <div className="w-full px-6 py-2 rounded-[18px] shadow-md my-2 divide-y-[1px]">
        <FilterSelection>برند</FilterSelection>
        <FilterSelection>مدل </FilterSelection>
        <FilterSelection>سال تولید</FilterSelection>
      </div>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        قیمت
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        کارکرد
      </FilterSelection>
      <SellerType />
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        شهر
      </FilterSelection>
      <form className="w-full py-3 px-6 rounded-[18px] shadow-md my-2 divide-y-[1px]">
        <div className="flex justify-between h-[69px] items-center">
          <label htmlFor="check">عکس دار</label>
          <input type="checkbox" id="cjeck" />
        </div>
        <div className="flex justify-between items-center h-[69px] ">
          <label htmlFor="check">قیمت دار</label>
          <input type="checkbox" id="cjeck" />
        </div>
      </form>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        رنگ
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        شاسی
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        گیربکس
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        وضعیت بدنه
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        سوخت
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        تعداد سیلندر
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        حجم موتور
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        دیفرانسیل
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        تولید
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        کشور سازنده
      </FilterSelection>
      <FilterSelection className="rounded-[18px] shadow-md py-1 px-6 ">
        موارد خاص
      </FilterSelection>
    </div>
  );
}

export default Sidebar;
