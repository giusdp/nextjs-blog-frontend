import React from "react";
import Link from "next/link";
import CATEGORIES_QUERY from "../apollo/queries/category/categories";
import { useQuery } from "@apollo/react-hooks";

const Nav = () => {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY);

  if (loading) return <div />;
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <nav id="header" className="fixed w-full z-10 top-0 shadow-lg">
        <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div className="pl-4">
            <Link
              href={{
                pathname: "/",
              }}
            >
              <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">
                Home
              </a>
            </Link>
          </div>

          <div className="block md:hidden pr-4">
            <button
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

          <div
            className="w-full flex-grow md:flex md:items-center md:w-auto hidden md:block mt-2 md:mt-0 bg-gray-100 md:bg-transparent z-20"
            id="nav-content"
          >
            <ul className="list-reset md:flex justify-end flex-1 items-center">
              {data.categories.map((category, i) => {
                return (
                  <li key={category.id} className="mr-3">
                    <Link
                      href={{
                        pathname: "category",
                        query: { id: category.id },
                      }}
                    >
                      <a
                        className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                        // className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                      >
                        {category.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
