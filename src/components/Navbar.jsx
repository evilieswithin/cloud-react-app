import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items center w-full h-full ">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>
              <Link
                onClick={handleClose}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                to="about"
                offset={-200}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                to="support"
                offset={-50}
                smooth={true}
                duration={500}
              >
                support
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                to="platforms"
                offset={-100}
                smooth={true}
                duration={500}
              >
                Platforms
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                to="pricing"
                offset={-50}
                smooth={true}
                duration={500}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li>
          <Link
            className="border-b-2 border-zinc-300 w-full"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="border-b-2 border-zinc-300 w-full"
            to="about"
            offset={-200}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="border-b-2 border-zinc-300 w-full"
            to="support"
            offset={-50}
            smooth={true}
            duration={500}
          >
            support
          </Link>
        </li>
        <li>
          <Link
            className="border-b-2 border-zinc-300 w-full"
            to="platforms"
            offset={-100}
            smooth={true}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li>
          <Link
            className="border-b-2 border-zinc-300 w-full"
            to="pricing"
            offset={-50}
            smooth={true}
            duration={500}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
