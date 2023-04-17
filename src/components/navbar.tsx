import { FaBars } from "react-icons/fa";
import { Logo } from "./logo";
import { Searchbar } from "./searchbar";
import { Login } from "./login";
import { useState } from "react";
import { listItems } from "./listItems";

function ToggleMenu() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="md:hidden relative">
      <button
        onClick={() => setToggle(!toggle)}
        className="block rounded p-2.5 bg-gray-800/75 transition hover:text-white"
      >
        <FaBars />
      </button>
      <ul
        className="absolute p-2 end-0 z-10 mt-3 center w-fit text-gray-100 bg-gray-900/90 rounded-lg border shadow-lg"
        style={{ display: toggle ? "block" : "none" }}
      >
        <li className="col space-y-3 px-8">
          {listItems} <Login />
        </li>
      </ul>
    </nav>
  );
}

export function Navbar() {
  return (
    <header className="bg-gray-900/90 sticky top-0 text-md">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-3 px-4 sm:px-6">
        <Logo />
        <div className="flex flex-1 center">
          <nav className="hidden md:block">
            <ul>
              <li className="flex px-6 gap-6">{listItems}</li>
            </ul>
          </nav>
          <div className="flex w-full items-center justify-end gap-4">
            <Searchbar />
            <div className="hidden md:block sm:gap-4">
              <Login />
            </div>
            <ToggleMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
