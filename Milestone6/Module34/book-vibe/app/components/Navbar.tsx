import Link from "next/link";
import React from "react";
import logo from "@/app/assets/book.ico";
import Image from "next/image";

const Navbar = () => {
  const navitem = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/listed-books"}>Listed Books</Link>
      </li>
      <li>
        <Link href={"/page-read"}>Pages to Read</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar container mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navitem}
            </ul>
          </div>
          <div className="">
            <Link href={"/"} className=" text-xl flex items-center gap-2 font-bold">
              <Image src={logo} width={20} height={20} alt="logo"></Image>
              Book Vibe
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navitem}</ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn btn-success text-white">Sign In</a>
          <a className="btn btn-error text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
