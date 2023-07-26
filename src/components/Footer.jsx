import React from "react";
import { Link } from "react-router-dom";

import whitelogo from "../assets/logo/png/asm-logo-white.png";

const navigation = [
  { name: "Products", link: "/products" },
  { name: "Our Values", link: "/values" },
  { name: "Open Roles", link: "/openroles" },
  { name: "Blog", link: "/blog" },
];

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer class="bg-gray-100 dark:bg-gray-900">
      <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 sm:p-3 lg:p-4"
            href="#MainContent"
            onClick={handleScrollToTop}
          >
            <span class="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div class="lg:flex lg:items-end lg:justify-between">
          <div>
            <a href="#">
              <span className="sr-only">ASMBYTE</span>
            </a>
            <img
              className="h-40 w-auto -mb-16 -mt-10 -ml-5"
              src={whitelogo}
              alt=""
            />
            <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left">
              Empowering businesses with unrivaled software solutions. Partner
              with us for a transformative digital journey.
            </p>
          </div>

          <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            {navigation.map((item) => (
              <li>
                <Link
                  key={item.name}
                  to={item.link}
                  class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p class="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
