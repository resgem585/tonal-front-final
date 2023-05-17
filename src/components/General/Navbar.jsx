import logo from '../../assets/logo.png';
import React from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const showDropdown = () => {
    setIsDropdownOpen(true);
  };

  const hideDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header aria-label="Site Header" className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <span className="sr-only">Home</span>
            <a href="/home">
              <img className="h-11" src={logo} alt="Logo" />
            </a>
          </div>

          <form className="mb-0 hidden lg:flex">
            <div className="relative">
              <input
                className="h-10 w-64 rounded-lg border-gray-200 pe-10 text-sm placeholder-gray-300 focus:z-100"
                placeholder="Buscar..."
                type="text"
              />

              <button
                type="submit"
                className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
              >
                <span className="sr-only">Submit Search</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>

          <div className="flex w-0 flex-1 justify-end lg:hidden">
            <button className="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
              <span className="sr-only">Menu</span>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
          >
            <a className="text-white" href="">
              About
            </a>
            <a className="text-white" href="">
              Services
            </a>
            <a className="text-white" href="">
              Pricing
            </a>
            <a className="text-white" href="">
              Blog
            </a>
            <div
              className="relative"
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <div className="inline-flex items-center overflow-hidden rounded-md border bg-black dark:border-gray-800 dark:bg-gray-900">
                <a
                  href="#"
                  className="border-e px-4 py-2 text-sm/none text-white hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  Edit
                </a>

                <button className="h-full p-2 text-white hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                  <span className="sr-only">Menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-gray-700 shadow-lg dark:border-gray-800 dark:bg-gray-900"
                  role="menu"
                >
                  <div className="p-2">
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      role="menuitem"
                    >
                      View on Storefront
                    </a>

                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      role="menuitem"
                    >
                      View Warehouse Info
                    </a>

                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      role="menuitem"
                    >
                      Duplicate Product
                    </a>

                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      role="menuitem"
                    >
                      Unpublish Product
                    </a>

                    <form method="POST" action="#">
                      <button
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                        role="menuitem"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete Product
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
