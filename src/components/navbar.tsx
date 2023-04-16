import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Logo } from "./logo";
import { Searchbar } from "./searchbar";
import { Login } from "./login";
import { useEffect, useState } from "react";

export const items: { path: string; title: string }[] = [
  {
    path: "/docs",
    title: "Docs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

const listItems = items.map((item, index) => {
  return (
    <Link
      className="block rounded-md px-4 py-2  hover:bg-gray-800"
      key={index}
      to={item.path}
    >
      {item.title}
    </Link>
  );
});

export function Navbar() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log("useEffect worked");
  });
  return (
    <header
      aria-label="Site Header"
      className="bg-gray-900/90 sticky top-0 mt-2 text-md"
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6">
        <Logo />
        <div className="flex flex-1 items-center">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">{listItems}</ul>
          </nav>

          <div className="flex w-full items-center justify-end gap-4">
            <Searchbar />
            <div className="sm:flex hidden sm:gap-4">
              <Login />
            </div>

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
                {listItems}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
