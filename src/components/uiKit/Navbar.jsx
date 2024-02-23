import { Link, NavLink } from "react-router-dom";
import Images from "../../assets/Images";
import { CiLogout } from "react-icons/ci";
import FollowUs from "./FollowUs";
import Button from "./Button";
import { getCurrentUser } from "../../services/apiServers";

const Navbar = () => {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location = "/sign-in";
  };
  return (
    <>
      <header className="fixed top-0 w-full z-10">
        <nav className="  w-full p-1 bg-gray-100 shadow-md">
          <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-40">
                    <Link
                      to={"/"}
                      className="text-blue-400 font-semibold text-xl "
                    ></Link>
                    <img src={Images.logo} alt="" />
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink
                      to={"/"}
                      activeclassname="active"
                      className=" text-gray-400 hover:text-blue-400  font-semibold text-md "
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to={"/cart"}
                      activeclassname="active"
                      className=" text-gray-400 hover:text-blue-400  font-semibold text-md "
                    >
                      Cart
                    </NavLink>
                    <NavLink
                      to={"/products"}
                      activeclassname="active"
                      className=" text-gray-400 hover:text-blue-400  font-semibold text-md "
                    >
                      Products
                    </NavLink>
                    <NavLink
                      to={"/categories"}
                      activeclassname="active"
                      className=" text-gray-400 hover:text-blue-400  font-semibold text-md "
                    >
                      Categories
                    </NavLink>
                    <NavLink
                      to={"/brands"}
                      activeclassname="active"
                      className=" text-gray-400 hover:text-blue-400  font-semibold text-md "
                    >
                      Brands
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mr-5">
                <FollowUs />
                {getCurrentUser() ? (
                  <>
                    <span className="mr-3">Logged User</span>
                    <Button handleClick={logOut}>
                      <span>Logout</span>
                    </Button>
                  </>
                ) : (
                  <Link to="/sign-in">
                    <Button>
                      <span>Login</span>
                    </Button>
                  </Link>
                )}

                {/* <Button>
                  <CiLogout size={26} strokeWidth="1" />
                  <span className="ml-1">Logout</span>
                </Button> */}
              </div>
              <div className="md:hidden sm:flex -mr-2 ">
                <button
                  type="button"
                  className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={`hidden w-72 absolute right-44 `}
          style={{ top: "4.031rem" }}
          id="mobile-menu"
        >
          <div className="bg-gray-800 px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <NavLink
              to={"/"}
              activeclassname="active"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
