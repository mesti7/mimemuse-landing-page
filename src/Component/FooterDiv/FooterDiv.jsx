import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const FooterDiv = () => {
  return (
    <div className=" bg-gray-900 pt-10 pb-10">
    <div className="footer flex-1 sm:flex sm:flex-row p-9 mx-10 bg-gradient-to-br from-red-500 to-blue-500 rounded-[10px] gap-14 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-2">
            <strong>Term</strong>Time
          </h1>
        </div>
        <p className=" text-white pb-[13px] opacity-70 leading-7">
          We always make Students to find the best countries and college to
          enhance the Bachelor and Higher studies
        </p>
      </div>

      {/* <div className='grid'>
          <span className=' divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
            Company
          </span>
          <div className=' grid gap-3'>
            <li className=' text-white opacity-[.7] hover:opacity-[1]'>Product</li>
            <li className=' text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
            <li className=' text-white opacity-[.7] hover:opacity-[1]'>Form</li>
          </div>
        </div> */}

      <div className="grid">
        <span className=" divTitle text-[18px] font-semibold pb-2 text-white">
          Contact Info
        </span>
        <small className=" grid gap-3 text-[14px] text-white">
          people@thetermtime.com
        </small>
        <div className="icons flex gap-4 py-[1rem]">
          <AiFillInstagram className=" p-[8px] h-[40px] w-[40px] rounded-full icon text-white bg-gradient-to-tr" />
          <BsFacebook className=" bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-white bg-gradient-to-tr" />
          <AiOutlineTwitter className=" bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-white bg-gradient-to-tr" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default FooterDiv;
