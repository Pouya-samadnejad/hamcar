import Link from "next/link";

function NavItem() {
  return (
    <nav>
      <ul className="lg flex gap-12 text-xl items-center h-9 text-[#0F0F10]">
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

export default NavItem;
