import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  bg-white h-28 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>

              <li>
                <Link to="/menu"></Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case h-24 w-32">
            <img className="h-24 w-20 " src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/cart">
            <HiShoppingCart className="mr-2 w-6 h-6" />
          </Link>

          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
