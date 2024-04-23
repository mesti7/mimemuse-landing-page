import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import f9 from '../Assets/MailLogo.png'
import f10 from '../Assets/WebsiteLogo.png'
import f4 from '../Assets/BottomOrange.png'
import { Link } from 'react-router-dom'

const FooterDiv = () => {
  return (
    <div
      className="w-full h-96 pt-4 pb-7 bg-center flex justify-center bg-no-repeat"
      style={{ backgroundImage: `url(${f4})` }}
    >
      <div className=" grid grid-cols-2 lg:grid-cols-4 text-white gap-4 lg:gap-40">
        <div className=" place-self-center text-xl lg:text-2xl">
          <div className=" underline">About</div>
          <div className=" text-sm lg:text-lg ">Home</div>
          <div className=" text-sm lg:text-lg ">About</div>
        </div>
        <div className=" place-self-center text-xl lg:text-2xl">
          <div className=" underline">Quick Link</div>
          <Link to="/termsandconditions">
            {' '}
            <div className=" text-sm lg:text-lg">Terms&Conditions</div>{' '}
          </Link>
          <Link to="/privacypolicy">
            {' '}
            <div className=" text-sm lg:text-lg">Privacy Policy</div>{' '}
          </Link>
          <Link to="/cookies">
            {' '}
            <div className=" text-sm lg:text-lg">Cookies</div>{' '}
          </Link>
        </div>
        <div className=" place-self-center text-xl lg:text-2xl">
          <div className=" underline">Follow Us</div>
          <div className=" text-sm lg:text-lg">FaceBook</div>
          <div className=" text-sm lg:text-lg">Instagarm</div>
          <div className=" text-sm lg:text-lg">Twitter</div>
        </div>
        <div className=" place-self-center text-xl lg:text-2xl">
          <div className=" underline">Contact Us</div>
          <img className="  pt-2 h-10" src={f9} />
          <img className=" pt-2 h-10" src={f10} />
        </div>
      </div>
    </div>
  )
}

export default FooterDiv
