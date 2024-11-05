import SelectedFilter from "./SelectedFilter";

function SelectedFIlters() {
  return (
    <div className="w-full p-6 rounded-[18px] shadow-md">
      <div className="flex items-center justify-between mb-4">
        <p className="text-base font-semibold">فیلترهای انتخاب شده</p>
        <button className=" text-[#EF3838] text-sm">حذف همه</button>
      </div>
      <div className="flex flex-col gap-1">
        <SelectedFilter>فروشنده: شخصی</SelectedFilter>
        <SelectedFilter>برند: آلفا رومئو</SelectedFilter>
        <SelectedFilter>شهر:چهار محال و بختیاری</SelectedFilter>
        <SelectedFilter>شاسی: سدان</SelectedFilter>
      </div>
    </div>
  );
}

export default SelectedFIlters;
