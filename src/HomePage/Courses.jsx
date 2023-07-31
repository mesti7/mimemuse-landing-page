import React from "react";
import c1 from "../Assets/c1.jpg";
import c2 from "../Assets/c2.avif";
import c3 from "../Assets/c3.avif";
import c4 from "../Assets/c4.avif";
import c5 from "../Assets/c5.avif";
import c6 from "../Assets/c6.avif";
import c7 from "../Assets/c7.avif";
import c8 from "../Assets/c8.avif";

function Courses() {
  return (
    <div className=" bg-gray-900">
      <div className="max-w-[1240px] m-auto">
        
        <h1
          className=" pl-6 pr-6 text-4xl pb-[.5rem] font-bold mt-12 bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text"
          data-aos="fade-down"
        >
          Courses
        </h1>
        <h2
          className=" pr-6 pl-6 text-2xl font-semibold text-white"
          data-aos="fade-down"
        >
          Our Recommended Courses
        </h2>

        <br />
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mx-5">
          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${c1})` }}
              className=" hover:scale-y-105 rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                General English
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${c2})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                Super Intensive English
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${c3})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                IELTS Preparation
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${c4})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                Professional English
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${c5})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                Academic English
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${c6})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                Junior Summerschool
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${c7})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                Professional English
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${c8})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                Professional English
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

{
  /* <div className="grid gap-[1rem] xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 items-center">
          <div className="singleGrid rounded-[10px] hover:bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem] items-center">
            <div className=" flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                  <img src={simple} alt="" />
                </div>
              <span className=" font-semibold text-white text-[18px] items-center">
                className="generalenglish hover:scale-y-105 "
                <img className=" object-contain w-full h-full items-center" src={generalenglish} alt="generalenglish"/>
                General English
              </span>
            </div>
          </div>

          <div className="singleGrid rounded-[10px] hover:bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
            <div className=" flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                  <img src={simple} alt="" />
                </div>
              <span className=" font-semibold text-white text-[18px]">
                <img src={intensiveenglish} alt="intensiveenglish" />
                Intensive English
              </span>
            </div>
          </div>

          <div className="singleGrid rounded-[10px] hover:bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
            <div className=" flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                  <img src={social} alt="" />
                </div>
              <span className=" font-semibold text-white text-[18px]">
                <img
                  src={superintensiveenglish}
                  alt="superintensiveenglish"
                />
                Super Intensive English
              </span>
            </div>
          </div>

          <div className="singleGrid rounded-[10px] hover:bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
            <div className=" flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
            <img src={simple} alt="" />
            </div>
              <span className=" font-semibold text-white text-[18px]">
                <img
                  src={businessenglish}
                  alt="businessenglish"
                />
                Business English
              </span>
            </div>
          </div>

          <div className="singleGrid rounded-[10px] hover:bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
            <div className=" flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" />
            </div>
              <span className=" font-semibold text-white text-[18px]">
                <img
                  src={ieltspreparation}
                  alt="ieltspreparation"
                />
                IELTS Preparation
              </span>
            </div>
          </div>

          <div className="singleGrid rounded-[10px] hover:bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
            <div className=" flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={social} alt="" />
            </div>
              <span className=" font-semibold text-white text-[18px]">
                <img
                  src={professionalenglish}
                  alt="professionalenglish"
                />
                Professional English
              </span>
            </div>
          </div>

          <div className="singleGrid rounded-[10px] hover:bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
            <div className=" flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" />
            </div>
              <span className=" font-semibold text-white text-[18px]">
                <img
                  src={academicenglish}
                  alt="academicenglish"
                />
                Academic English
              </span>
            </div>
          </div>

          <div className="singleGrid rounded-[10px] hover:bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
            <div className=" flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" />
            </div>
              <span className=" font-semibold text-white text-[18px]">
                <img
                  src={juniorsummerschool}
                  alt="juniorsummerschool"
                />
                Junior Summer School
              </span>
            </div>
          </div>

        </div> */
}
