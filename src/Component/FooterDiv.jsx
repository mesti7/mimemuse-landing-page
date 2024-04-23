import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import f9 from "../Assets/MailLogo.png";
import f10 from "../Assets/WebsiteLogo.png";
import f4 from "../Assets/BottomOrange.png";

const FooterDiv = () => {
  return (
    <div
      className="w-full h-96 pt-4 pb-7 bg-center flex justify-center bg-no-repeat"
      style={{ backgroundImage: `url(${f4})` }}
    >
      <div className=" grid grid-cols-2 md:grid-cols-4 text-white gap-10 lg:gap-24">
        <div className=" place-self-center text-xl lg:text-2xl">
          <div className=" underline">Pages</div>
          <div className=" text-sm lg:text-lg ">Home</div>
          <div className=" text-sm lg:text-lg ">About</div>
          <div className=" text-sm lg:text-lg ">Features</div>
          <div className=" text-sm lg:text-lg ">ScreenShots</div>
          <div className=" text-sm lg:text-lg ">Contacts</div>
        </div>
        <div className=" place-self-center text-xl lg:text-2xl">
          <div className=" underline">Quick Link</div>
          <div className=" text-sm lg:text-lg">Terms & Conditions</div>
          <div className=" text-sm lg:text-lg">Privacy Policy</div>
          <div className=" text-sm lg:text-lg">Cookies</div>
        </div>
        <div className=" place-self-center text-xl lg:text-2xl">
          <div className=" underline">Follow Us</div>
          <div className=" text-sm lg:text-lg">FaceBook</div>
          <div className=" text-sm lg:text-lg">Instagarm</div>
          <div className=" text-sm lg:text-lg">Twitter</div>
        </div>
        <div className=" place-self-center text-xl lg:text-2xl">
          <div className=" underline">Contact Us</div>
          <div className=" text-sm lg:text-lg">mimemuse@gmail.com</div>
          {/* <img className=" pt-2 h-10" src={f10} />  */}
        </div>
      </div>
    </div>
  );
};

export default FooterDiv;
