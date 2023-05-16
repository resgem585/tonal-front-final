import logo from '../../assets/logo.png';

const Navbar = () => {
  
    return (
<header aria-label="Site Header" className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
          <span className="sr-only">Home</span>
          <a href="/home">
          <img
            className="h-11"
            src={logo}
            alt="Logo"
          />
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
      <a className="text-white" href="">About</a>
      <a className="text-white" href="">Blog</a>
      <a className="text-white" href="">Projects</a>
      <a className="text-white" href="">Contact</a>



    </nav>

    <div className="hidden items-center gap-4 lg:flex">

      <a
        href="#"
        className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white"
      >
        Log out
      </a>
    </div>
  </div>

  <div className="border-t border-gray-100 lg:hidden">
    <nav
      className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
    >
      <a className="shrink-0 px-4 text-gray-900" href="">About</a>
      <a className="shrink-0 px-4 text-gray-900" href="">Blog</a>
      <a className="shrink-0 px-4 text-gray-900" href="">Projects</a>
      <a className="shrink-0 px-4 text-gray-900" href="">Contact</a>
    </nav>
  </div>
  </div>
</header>
      );
  };
  export default Navbar