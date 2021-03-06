import React, { useState } from "react";
import Link from "next/link";

const toggleMenu = (bool) => {
  if (bool)
    return "w-full flex-grow md:flex md:items-center md:w-auto block md:block mt-2 md:mt-0 bg-gray-100 md:bg-transparent z-20";
  else
    return "w-full flex-grow md:flex md:items-center md:w-auto hidden md:block mt-2 md:mt-0 bg-gray-100 md:bg-transparent z-20";
};

const Nav = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <nav
      id="header"
      className="fixed w-full z-10 top-0 shadow-lg bg-gray-100 bg-opacity-75"
    >
      <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <Link
            href={{
              pathname: "/",
            }}
          >
            <a className="font-bold text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">
              Home
            </a>
          </Link>
        </div>

        {/* <div className="block md:hidden pr-4">
          <button
            onClick={() => setisMenuOpen(!isMenuOpen)}
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={toggleMenu(isMenuOpen)} id="nav-content">
          <ul className="list-reset md:flex justify-end flex-1 items-center"></ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;
