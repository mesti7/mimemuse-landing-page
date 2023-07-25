import React from "react";
import c1 from "../Assets/c1.jpg";
// import intensiveenglish from "../Assets/intensiveenglish.jpg";
// import superintensiveenglish from "../Assets/superintensiveenglish.jpg";
// import businessenglish from "../Assets/businessenglish.jpg";
// import ieltspreparation from "../Assets/ieltspreparation.jpg";
// import professionalenglish from "../Assets/professionalenglish.jpg";
// import academicenglish from "../Assets/academicenglish.jpg";
// import juniorsummerschool from "../Assets/juniorsummerschool.jpg";

function Courses() {
  return (
    <div className=" bg-gray-900">
      <div className="max-w-[1240px] m-auto">
        <br />
        <br />
        <div className=" flex grid-cols-4 gap-4 sm:grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 align-middle">
          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-5">
            <div style={{ backgroundImage: `url(${c1})`}} className="rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-lg text-gray-900 text-center p-20">
              General English
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-5">
            <div style={{ backgroundImage: `url(${c1})` }} className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-lg text-gray-900 text-center p-20">
              General English
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-5">
            <div style={{ backgroundImage: `url(${c1})` }} className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-lg text-gray-900 text-center p-20">
              General English
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-5">
            <div style={{ backgroundImage: `url(${c1})` }} className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-lg text-gray-900 text-center p-20">
              General English
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
