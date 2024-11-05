import { IoCloseOutline } from "react-icons/io5";

function SelectedFilter({ children }) {
  return (
    <>
      <span className=" flex items-center justify-between gap-2 border-solid border-[1px] border-[#007AFF] rounded-full bg-[#E6F2FF] text-[#007AFF] px-3 py-1 w-fit">
        {children}
        <button>
          <IoCloseOutline />
        </button>
      </span>
    </>
  );
}

export default SelectedFilter;
