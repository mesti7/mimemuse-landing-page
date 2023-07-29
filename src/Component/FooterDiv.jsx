import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const FooterDiv = () => {
  return (
    <div className=" bg-gray-900 pt-10 pb-10">
      <div className="footer flex-1 md:flex md:flex-row p-9 mx-12 bg-gradient-to-br from-red-500 to-blue-500 rounded-[10px] gap-24 m-auto items-center justify-center">
        <div>
          <div className="logoDiv">
            <h1 className="logo text-[25px] text-white pb-[.5rem] pt-[30px]">
              The<strong>Term</strong>Time
            </h1>
          </div>
          <p className=" text-white lg:pb-[30px] opacity-70 leading-7">
            we know that it's time-consuming, frustrating, and stressful—and
            we're here to help. Our super-app allows you to find your perfect
            English language school and get started on your study abroad journey
            without any hassle. We'll guide you through every step of the
            process, so you can focus on what matters most: learning English to
            propel your future!
          </p>
        </div>

        <div className="grid">
          <span className=" divTitle text-[18px] font-semibold pb-[.5rem] text-white pt-[30px]">
            Company
          </span>
          <div className=" grid gap-3">
            <li className=" text-white hover:text-gray-900 opacity-70 leading-7">
              Blog
            </li>
            <li className=" text-white hover:text-gray-900 opacity-70 leading-7">
              About Us
            </li>
            <li className=" text-white hover:text-gray-900 opacity-70 leading-7 pb-[30px]">
              Contact Us
            </li>
          </div>
        </div>

        <div className="grid">
          <span className=" divTitle text-[18px] font-semibold pb-[.5rem] text-white ">
            Contact Info
          </span>
          <small className=" grid gap-3 text-base text-white opacity-70">
            people@thetermtime.com
          </small>
          <div className="icons flex gap-4 py-[1rem] pb-[30px]">
            <AiFillInstagram className=" p-[8px] h-[40px] w-[40px] rounded-full icon hover:text-gray-800 text-white opacity-80 bg-gradient-to-t" />
            <BsLinkedin className=" p-[8px] h-[40px] w-[40px] rounded-full icon hover:text-gray-800 text-white opacity-80 bg-gradient-to-t" />
            {/* <AiOutlineTwitter className=" bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-white bg-gradient-to-tr" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDiv;
