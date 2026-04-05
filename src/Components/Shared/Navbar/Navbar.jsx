import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const list = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive && "border-b-3 border-green-300 text-green-600"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive && "border-b-3 border-green-300 text-green-600"
          }
          to={"books"}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive && "border-b-3 border-green-300 text-green-600"
          }
          to={"pages-to-read"}
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <section className="shadow-sm">
      <div className="navbar bg-base-100  max-w-7xl w-full mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex flex-row gap-x-4">
            {list}
          </ul>
        </div>
        <div className="navbar-end flex flex-row gap-x-3 text-white">
          <button className=" bg-[#23BE0A] text-base font-semibold py-1 px-3 md:py-2 md:px-7 rounded  md:rounded-xl cursor-pointer">
            Sign In
          </button>
          <a className="bg-[#59C6D2] text-base font-semibold py-1 px-3 md:py-2 md:px-7 rounded  md:rounded-xl cursor-pointer">
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
