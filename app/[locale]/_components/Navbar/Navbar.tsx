import Image from "next/image";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import NavbarStart from "./components/Routes/Routes";
import LangSwitch from "./components/LangSwitch/LangSwitch";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <NavbarStart />
      </div>
      <div className="navbar-center hidden md:flex">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-96 rounded-3xl"
          />
        </div>
      </div>
      <div className="navbar-end">
        <ThemeSwitch />
        <LangSwitch />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                width={40}
                height={40}
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
