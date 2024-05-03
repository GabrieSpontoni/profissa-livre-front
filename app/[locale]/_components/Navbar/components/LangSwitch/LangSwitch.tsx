"use client";
import { Link, usePathname } from "@/navigation";
import { useLocale } from "next-intl";

import { BsGlobe } from "react-icons/bs";
export default function LangSwitch() {
  const pathName = usePathname();
  const locale = useLocale();

  const getLocaleClassNames = (lang: string) => {
    return lang === locale ? "active" : "";
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} className="m-4 cursor-pointer">
        <BsGlobe
          style={{
            width: "25px",
            height: "25px",
          }}
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link
            href={pathName}
            locale="pt"
            className={getLocaleClassNames("pt")}
          >
            BR
          </Link>
        </li>
        <li>
          <Link
            href={pathName}
            locale="en"
            className={getLocaleClassNames("en")}
          >
            EN
          </Link>
        </li>
      </ul>
    </div>
  );
}
