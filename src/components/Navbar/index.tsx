"use client";
import { useState } from "react";
import style from "./style.module.css";

const navbarLinks = [
  {
    text: "Home",
    link: "",
  },
  {
    text: "Expirence",
    link: "",
  },
  {
    text: "Tech",
    link: "",
  },
  {
    text: "Projects",
    link: "",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarOpentHandler = () => {
    setIsOpen((v) => !v);
  };

  return (
    <nav className="border-gray-200 bg-primary sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="text-2xl font-bold">
          <span className="text-dark-900">{"<"}</span>
          <span className="self-center text-white whitespace-nowrap">Harsh</span>
          <span className="text-dark-900">{" />"}</span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={navbarOpentHandler}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3L24.6274 25.6274" stroke="white" stroke-width="4" stroke-linecap="round" />
              <path d="M2.68628 25.3137L25.3137 2.6863" stroke="white" stroke-width="4" stroke-linecap="round" />
            </svg>
          ) : (
            <svg width="37" height="20" viewBox="0 0 37 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 2H34.5" stroke="white" stroke-width="4" stroke-linecap="round" />
              <path d="M2.5 18H34.5" stroke="white" stroke-width="4" stroke-linecap="round" />
            </svg>
          )}
        </button>
        <div
          className={`w-full md:w-auto md:block absolute bg-primary md:relative ${!isOpen && "hidden"} ${
            style.nav_menus
          }`}
        >
          <ul className="flex flex-col items-start md:items-center font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {navbarLinks.map((navItem, i) => {
              return (
                <li key={i}>
                  <a
                    href={navItem.link}
                    className="flex gap-3 items-center py-2 px-3 md:p-0 text-white rounded hover:text-dark md:hover:bg-transparent md:border-0 text-3xl md:text-base mb-7 md:mb-0"
                  >
                    {navItem.text}
                    <svg className="md:hidden" width="24" height="24" viewBox="0 0 55 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_244_129)">
                        <path
                          d="M0.115845 27.171V23.791H47.5948L26.8128 3.01799L29.1898 0.640991L54.0378 25.481L29.1898 50.321L26.8128 47.946L47.5958 27.171H0.115845Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_244_129">
                          <rect width="54" height="50" fill="white" transform="translate(0.115845 0.640991)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
