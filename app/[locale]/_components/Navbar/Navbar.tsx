import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import NavbarStart from "./components/Routes/Routes";
import LangSwitch from "./components/LangSwitch/LangSwitch";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="navbar max-w-screen-xl px-0">
          <div className="navbar-start z-10">
            <NavbarStart />
          </div>

          <div className="navbar-end z-10">
            <ThemeSwitch />
            <LangSwitch />
          </div>
        </div>
      </div>
      <div className="divider m-0 h-0"></div>
    </div>
  );
}
