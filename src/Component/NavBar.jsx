import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../style/style.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const NavBar = () => {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
  return (
    <header className="navBar flex justify-between items-center px-8 pt-8 pb-8 bg-transparent">
      <div className="logoDiv">
        <h1 className="logo text-[25px] sm:text-white lg:text-white xl:bg-gradient-to-br from-red-500 to-orange-500 xl:text-transparent xl:bg-clip-text">
          MimeMuse
        </h1>
      </div>
      <div>
        <nav className="menu flex gap-8 lg:gap-8 pt-11 " ref={navRef}>
          <Link to="/">
            <li className="menuList text-lg lg:text-white hover:text-white ">
              Home
            </li>
          </Link>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuList text-lg lg:text-white hover:text-white"
            style={{ cursor: 'pointer' }}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="features"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuList text-lg lg:text-white hover:text-white"
            style={{ cursor: 'pointer' }}
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="screenshots"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuList text-lg lg:text-white hover:text-white"
            style={{ cursor: 'pointer' }}
          >
            Screenshots
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuList text-lg lg:text-white hover:text-white"
            style={{ cursor: 'pointer' }}
          >
            Contact us
          </ScrollLink>

          <ScrollLink
            to="download"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuList text-lg lg:bg-white rounded-full bg-orange-500 p-2"
            style={{ cursor: 'pointer' }}
          >
            Download
          </ScrollLink>

          <button className=" nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className=" nav-btn " onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  )
}

export default NavBar
