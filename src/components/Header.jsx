import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

import blacklogo from "../assets/logo/png/asm-logo-black.png";
import whitelogo from "../assets/logo/png/asm-logo-white.png";

const navigation = [
  { name: "Products", link: "/products" },
  { name: "Our Values", link: "/values" },
  { name: "Open Roles", link: "/openroles" },
  { name: "Blog", link: "/blog" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="py-16 bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between px-6 md:px-10 lg:px-16"
          aria-label="Global"
        >
          <Link to="/asmbyte">
            <span className="sr-only">ASMBYTE</span>
            <img
              className="h-64 w-auto -mb-16 -mt-16 -ml-5"
              src={whitelogo}
              alt=""
            />
          </Link>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex items-center hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </Link>
            ))}

            <Link to="/contact">
              <a class="block w-full rounded border border-blue-700 bg-blue-700 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                Contact us
              </a>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-8 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-36 w-auto -ml-4 -mb-12 -mt-12"
                  src={blacklogo}
                  alt=""
                  // width={200}
                  // height={200}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div class="py-7">
                    <Link
                      to="/contact"
                      className="text-white hover:text-gray-300"
                    >
                      <a class="block  flex justify-center rounded border border-blue-600 bg-blue-600 px-20 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                        Contact us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};
