import { Link } from "react-router-dom";
import  userState  from "../config/userState";
import { useNavigate } from "react-router-dom";




  const Navbar = () => {
  const navigate = useNavigate();
  

  const destroyUserSession = userState((state) => state.removeSession);
  const getUserSession = userState((state) => state.session);
  

  

  
  return (
    <>
    {getUserSession.isValid && (
    <nav
     className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/home" className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Signo_Calli.png"
            className="h-6 mr-3 sm:h-16"
            alt="calli logo"
          />
        </Link>
        <form
              
              className='flex items-center ml-0 md:-ml-8 lg:-ml-11'
            >
              <label htmlFor='simple-search' className='sr-only'>
                Search
              </label>
              <div className='relative w-44 md:w-64 lg:w-80 xl:w-96'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    aria-hidden='true'
                    className='w-4 h-4 sm:w-5 sm:h-5 text-gray-300'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <input
                 
                  type='text'
                  id='simple-search'
                  className='border border-gray-300 text-gray-200 text-sm rounded-tl-md rounded-bl-md w-full pl-10 pr-3 py-2 sm:py-2.5 bg-transparent'
                  placeholder='Search'
                  required
                />
              </div>
              <button
                type='submit'
                className='p-2.5 text-sm font-medium text-white bg-sky-700 border hover:bg-blue-700'
              >
                <svg
                  className='w-4 h-4 sm:w-5 sm:h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
                <span className='sr-only'>Search</span>
              </button>
            </form>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              <li>
                <Link
                  to="/home"
                  className="block py-2 pl-3 pr-4 text-lg text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <button
                  onClick={async (e) => {
                    destroyUserSession();
                    navigate("/");
                  }}
                  type="button"
                  className="focus:outline-none
                 text-white bg-red-700
                  hover:bg-red-800 focus:ring-4 focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        
      </div>
    </nav>
    )}
    </>
  );
};

export default Navbar
