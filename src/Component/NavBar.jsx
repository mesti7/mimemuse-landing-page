import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/style.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="navBar flex justify-between items-center px-8 pt-8 pb-8">
      <div className="logoDiv">
        <div className=" w-12 h-12">
        <img className=" place-self-center" src={logo} />
        </div>
        {/* <h1 className="logo text-[25px] sm:text-white lg:text-white xl:bg-gradient-to-br from-red-500 to-orange-500 xl:text-transparent xl:bg-clip-text">
          MimeMuse
        </h1> */}
      </div>
      <div>
        <nav className="menu flex gap-8 lg:gap-8 pt-11 " ref={navRef}>
          <Link to="/">
            <li className="menuList text-lg lg:text-white hover:text-white ">
              Home
            </li>
          </Link>
          <Link to="/">
            <li className="menuList text-lg lg:text-white hover:text-white">
              About Us
            </li>
          </Link>
          <Link to="/">
            <li className="menuList text-lg lg:text-white hover:text-white">
              Features
            </li>
          </Link>
          <Link to="/">
            <li className="menuList text-lg lg:text-white hover:text-white">
              Screenshot
            </li>
          </Link>
          <Link to="/ContactUs">
            <li className="menuList text-lg lg:text-white hover:text-white">
              Contact Us
            </li>
          </Link>
          <button className=" lg:bg-white rounded-full bg-orange-500 p-2">
            <div className="text-white lg:bg-gradient-to-br from-red-500 to-orange-500 lg:text-transparent lg:bg-clip-text px-4">
            Download
            </div>
          </button>

          <button className=" nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className=" nav-btn " onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
