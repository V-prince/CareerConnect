import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { TopHeader } from "./TopHeader";
import { useAuth } from "../store/UserContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const { user } = useAuth();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handelScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handelScroll)

    return () => window.removeEventListener("scroll", handelScroll)

  }, [location.pathname])

  const showWhiteBg = !isHomePage || isScrolled;

  return (
    <header className={`w-full sticky top-0 z-50 ${showWhiteBg ? "bg-white/70 shadow-lg border-b border-gray-200  backdrop-blur-xl" : "bg-white md:bg-transparent border-b border-transparent shadow-none"}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-15 px-5 sm:px-8 lg:px-10">
        <Link to={"/"}>
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-32 sm:w-36 lg:w-40 object-contain"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `pb-1 border-b-2 transition-all duration-300 ${isActive
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-700 hover:border-indigo-600 hover:text-indigo-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/jobs"}
            className={({ isActive }) =>
              `pb-1 border-b-2 transition-all duration-300 ${isActive
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-700 hover:border-indigo-600 hover:text-indigo-600"
              }`
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `pb-1 border-b-2 transition-all duration-300 ${isActive
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-700 hover:border-indigo-600 hover:text-indigo-600"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `pb-1 border-b-2 transition-all duration-300 ${isActive
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-700 hover:border-indigo-600 hover:text-indigo-600"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link to={"/user/profile"}  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-100/70 backdrop-blur-xl transition-all duration-200 cursor-pointer">


                <span
                  className="block lg:hidden cursor-pointer p-1 rounded-lg hover:bg-zinc-200"
                  onClick={() => setIsOpen(true)}
                >
                  <Menu size={22} />
                </span>


                <div className="flex items-center gap-3">
                  <img
                    src={user?.photo || "/images/profile.png"}
                    alt="Profile"
                    className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover border-2 border-white shadow-sm"
                  />

                  <div className="leading-tight">
                    <h2 className="font-semibold text-sm text-zinc-800 capitalize">
                      {user?.fullname || "Guest User"}
                    </h2>

                    <p className="text-xs text-zinc-500 mt-1 capitalize">
                      {user?.role || "Candidate"}
                    </p>
                  </div>
                </div>

              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 border border-zinc-300 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 border-t" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col px-5 py-4 gap-4 font-medium bg-white">
          <li className="cursor-pointer hover:text-indigo-600">Home</li>
          <li className="cursor-pointer hover:text-indigo-600">Jobs</li>
          <li className="cursor-pointer hover:text-indigo-600">About Us</li>
          <li className="cursor-pointer hover:text-indigo-600">Contact</li>

          <hr />

          {user ?
            <>
              <Link to={"/user/profile"} className="flex items-center gap-2">
                <img
                  src={user?.photo || "/images/profile.png"}
                  alt="Profile"
                  className="h-9 w-9 rounded-full object-cover border border-zinc-200"
                />

                <div className="leading-tight">
                  <h2 className="font-semibold text-sm text-zinc-800">
                    {user?.fullname || "Guest User"}
                  </h2>

                  <p className="text-[11px] text-zinc-500 capitalize">
                    {user?.role || "candidate"}
                  </p>
                </div>
              </Link>

            </>
            :
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full border border-zinc-300 rounded-lg py-2 text-center hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="w-full bg-indigo-600 text-white rounded-lg py-2 text-center hover:bg-indigo-700"
              >
                Register
              </Link>
            </>

          }


        </ul>
      </div>
    </header>
  );
};
