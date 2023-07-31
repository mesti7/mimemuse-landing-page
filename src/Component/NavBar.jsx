import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/style.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="navBar flex justify-between items-center px-12 pt-8 bg-gray-900">
      <div className="logoDiv">
        <h1 className="logo text-[25px] bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text">
          The<strong>Term</strong>Time
        </h1>
      </div>
      <div>
        <nav className="menu flex gap-12 pt-11 " ref={navRef}>
          <Link to="/">
            <li className="menuList text-lg bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text hover:text-white">
              Home
            </li>
          </Link>

          <Link to="/Blog">
            <li className="menuList text-lg bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text hover:text-white">
              Blog
            </li>
          </Link>

          <Link to="/News">
            <li className="menuList text-lg bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text hover:text-white">
              News&Updates
            </li>
          </Link>

          <Link to="/aboutus">
            <li className="menuList text-lg bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text hover:text-white">
              About Us
            </li>
          </Link>
          <Link to="/contactus">
            <li className="menuList text-lg bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text hover:text-white">
              Contact Us
            </li>
          </Link>

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
