"use client";
import { useState } from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function NavbarStart() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const t = useTranslations("navbar");

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="lg:hidden">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={handleDropdownToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/" onClick={handleLinkClick}>
                  {t("main")}
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="hidden lg:flex">
        <Link className="btn btn-ghost text-xl" href="/">
          {t("main")}
        </Link>
      </div>
    </>
  );
}
