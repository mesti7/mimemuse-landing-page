import React from "react";
import hero from "../Assets/hero.png";
import { space } from "postcss/lib/list";

export const Home = () => {
  return (
    <div className=" bg-gray-900">
      <div

        className="  w-full h-screen bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1 className=" px-6 text-center text-4xl md:text-6xl font-bold pt-48 bg-gradient-to-tl  from-red-500 to-blue-500 text-transparent bg-clip-text ">
          Ready to Study Aboard
        </h1>
        <h3 className=" text-center pt-5 text-white ">
          Lets get started
        </h3>
      </div>
      {/* <script>AOS.init();</script> */}
      {/* <div className=" w-full h-auto flex flex-col justify-between">
        <div className=" grid md grid-cols-2 max-w-[1240px] m-auto">
          <div className=" relative flex flex-col justify-center md:items-start w-full px-2 py-8">
            <h1 className=" font-bold text-5xl my-4 bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text">
              Ready to Study
            </h1>
            <h1 className=" font-bold text-5xl bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text">
              Abroad
            </h1>
            <h5 className=" my-4 text-white">Lets get started</h5>
            <button className=" bg-gradient-to-br from-red-500 to-blue-500 rounded-xl py-3 px-6 ">
              Download App
            </button>
          </div>
          <div>
            <div className=" relative w-full max-w-lg ">
              <div className="absolute top-56 left-32 w-60 h-60 bg-purple-300 rounded-full filter blur-3xl opacity-50"></div>
              <div className="absolute top-10 left-14 w-60 h-60 bg-yellow-300 rounded-full filter blur-3xl opacity-50 "></div>
              <div className="absolute top-10 w-60 h-60 bg-pink-400 rounded-full filter blur-3xl opacity-50 "></div>
            </div>
            <img className=" w-full mix-blend-screen" src={Hero} alt="" />
          </div>
        </div>
      </div> */}

      {/* <div class="max-w-5xl mx-auto mb-10">
        <h1 class="text-center mb-8 text-gray-400 font-medium">
          Trusted by 500+ Universities Worldwide
        </h1>
        <div class="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
          <img
            class="h-24 w-24"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png"
            alt="New"
          />
          <img
            class="h-24 w-24"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGsCxmWHZ0YGOdq1JexN3fPQRypGgoysgrcNenJi4wqgaY-aSF4-7c1k1hvtxttAIjxc&usqp=CAU"
            alt="New"
          />
          <img
            class="h-24 w-24"
            src="https://s3.ap-south-1.amazonaws.com/leverageedu/school-logo/us/2019-12-16_47_university-of-phoenix-1-logo-png-transparent.png"
            alt="New"
          />
          <img
            class="h-24 w-24 transform translate-y-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/640px-Columbia_University_shield.svg.png"
            alt="New"
          />
          <img
            class="h-24 w-36"
            src="http://nus.edu.sg/images/default-source/logo/white-1200x630.jpg"
            alt="New"
          />
          <img
            class="h-24 w-36"
            src="https://logos-world.net/wp-content/uploads/2021/10/Stanford-Emblem.png"
            alt="New"
          />
        </div>
      </div> */}

      <div className="max-w-[1240px] m-auto">
        <h1
          className=" pl-6 pr-6 text-4xl py-[2rem] pb-[3rem] font-bold bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text"
          data-aos="fade-down"
        >
          The values that holds us true
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 items-center">
          <div className="mx-8 singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
            <div className=" flex items-center gap-3">
              {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={simple} alt="" />
              </div> */}
              <span className=" font-semibold text-white text-[18px]">
                Simplicity
              </span>
            </div>
            <p className=" text-sm md:text-[16px] text-white opacity-[.7] py-[1rem] font-semibold">
              Things beinf made beautiful simple are at the heart of everything
              we do
            </p>
          </div>

          <div className="mx-8 singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
            <div className=" flex items-center gap-3">
              {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={social} alt="" />
              </div> */}
              <span className=" font-semibold text-white text-[18px]">
                Social Good
              </span>
            </div>
            <p className="text-sm md:text-[16px] text-white opacity-[.7] py-[1rem] font-semibold" >
              we believe in making things better for everyone, even if just by a
              little bit!
            </p>
          </div>

          <div className="mx-8 singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
            <div className=" flex items-center gap-3">
              {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={trust} alt="" />
              </div> */}
              <span className=" font-semibold text-white text-[18px]">
                Trust
              </span>
            </div>
            <p className=" text-sm md:text-[16px]  text-white opacity-[.7] py-[1rem] font-semibold">
              We work on the basis of creating trust which can be nurtured
              through authenticity and transparency
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] m-auto">
        <h1
          className=" pl-6 pr-6 text-4xl pb-[.5rem] font-bold mt-12 bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text"
          data-aos="fade-down"
        >
          Courses
        </h1>
        <h2 className=" pr-6 pl-6 text-2xl font-semibold text-white" data-aos="fade-down">
          Our Recommended Courses
        </h2>
      </div>

      {/* <div className="card max-w-[1240px] m-auto mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className=" bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text text-[30px] font-bold">
            Ready to switch a career
          </h1>
          <h2 className=" text-textColor text-[25px] font-bold">
            Lets get started!
          </h2>
        </div>
        <button className=" border-[2px]  rounded-[10px] py-[2px] px-[30px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor ">
          Download App
        </button>
      </div> */}
    </div>
  );
};
