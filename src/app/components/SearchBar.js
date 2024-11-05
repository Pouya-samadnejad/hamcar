import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <div>
      <label className="flex items-center gap-3 mr-12">
        <HiOutlineMagnifyingGlass className="text-[#ABADB2] w-[22.96px] h-[22.96px]" />

        <input type="search" placeholder="جستجو..." className="p-1 h-9" />
      </label>
    </div>
  );
}

export default SearchBar;
