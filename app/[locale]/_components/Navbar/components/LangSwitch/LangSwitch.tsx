"use client";
import { Link } from "@/navigation";
import { usePathname } from "@/navigation";
export default function LangSwitch() {
  const pathName = usePathname();

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost text-xl">
        Lang
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={pathName} locale="pt">
            pt
          </Link>
        </li>
        <li>
          <Link href={pathName} locale="en">
            en
          </Link>
        </li>
      </ul>
    </div>
  );
}
