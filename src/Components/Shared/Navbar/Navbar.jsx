import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const list = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive && "text-[#b794f4] border-b-2 border-[#b794f4] font-bold"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " text-[#b794f4] border-b-2 border-[#b794f4] font-bold"
              : ""
          }
          to={"listed-books"}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive && " text-[#b794f4] border-b-2 border-[#b794f4] font-bold"
          }
          to={"pages-to-read"}
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <section className="shadow-sm bg-[#111827] text-white sticky top-0 z-50">
      <div className="navbar bg-[#111827]  max-w-7xl w-full mx-auto">
        <div className="navbar-start">
          <div className="dropdown space-x-4">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <div className=" text-xl font-bold flex flex-col justify-center items-center">
            <p className="text-2xl">
              <span>Book</span> <span className="text-[#b794f4]">Vibe</span>
            </p>
            <p className="text-[10px] font-normal hidden lg:flex text-[#b794f4]">
              YOUR READING WORLD
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex flex-row gap-x-4 text-white">
            {list}
          </ul>
        </div>
        <div className="navbar-end flex flex-row gap-x-3 text-white">
          <button className="border border-[#F5A623] text-[#F5A623] bg-transparent font-semibold py-1 px-3 md:py-2 md:px-7 rounded  md:rounded-xl cursor-pointer hover:bg-[#F5A623] hover:text-[#020508] transition-colors duration-200">
            Sign In
          </button>
          <button className="bg-[#F5A623] text-[#020508]  font-semibold py-1 px-3 md:py-2 md:px-7 rounded  md:rounded-xl cursor-pointer hover:bg-[#d4891a] transition-colors duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
