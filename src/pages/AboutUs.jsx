import React from "react";
import bg from "../Assets/abouthero.png";
import NavBar from "../Component/NavBar";
import FooterDiv from "../Component/FooterDiv";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    Aos.init({
      duration: 1900,
      offset: 100,
    });
  }, []);
  return (
    <div className="bg-gray-900">
      <NavBar />
      <header
        className="w-full h-screen pt-4 pb-7 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" bg-gray-900 rounded-full p-9">
          <div className=" text-center text-transparent text-4xl md:text-5xl font-bold bg-gradient-to-br from-red-500  to-blue-500 bg-clip-text ">
            About Us
          </div>
        </div>
      </header>
      <div className="max-w-[1240px] m-auto p-8">
        <div
          className="text-4xl text-white mt-8 font-semibold opacity-[.7]"
          data-aos="fade-down"
        >
          About TheTermTime
        </div>
        <div className=" text-3xl py-[2rem] font-semibold bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text">
          What’s The Term Time?
        </div>
        <div className=" text-base text-white opacity-[.7] leading-loose text-[19px] ">
          An app who connects students to English language schools abroad and
          helps them from application to attending classes in-person at their
          preferred destination.
        </div>
        <h2 className="text-3xl py-[2rem] font-semibold bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text ">
          Description
        </h2>
        <div className="text-base text-white opacity-[.7] leading-loose text-[19px]">
          <p>
            TheTermTime is the ultimate solution for international students
            seeking to learn English abroad. With one app and one goal in mind –
            learning English – it has never been easier to embark on your
            language journey. The app addresses the most significant challenges
            faced by students abroad, sparing them from the frustration and
            stress of managing multiple tasks, such as class scheduling, travel
            arrangements, and accommodation booking. At TheTermTime, they
            understand the complexities involved in studying abroad and are
            dedicated to providing unparalleled support. Their super-app
            streamlines the process, allowing students to find the perfect
            English language school without any hassle. With step-by-step
            guidance, you can confidently navigate from application to
            graduation, focusing on the core objective – mastering the English
            language to shape your future. TheTermTime offers a diverse
            selection of English schools tailored to your individual needs. The
            convenience of having everything in one place eliminates the need to
            scour through numerous tabs or websites, granting clarity on the
            entire learning process. Learning English is now an enjoyable
            experience, thanks to TheTermTime. Take the plunge and trust that
            they've got your back, providing unwavering support throughout your
            journey. Whether you aspire to speak, read, or write English
            fluently, TheTermTime is the app that simplifies the process, making
            it as easy as A-B-C. Don't miss this opportunity to make learning
            English abroad a breeze. Embrace TheTermTime and unlock your
            potential for a successful language learning adventure.
          </p>

          <p className="mt-3">
            If you want to get started learning English, all you have to do is
            download{" "}
            <spam className="font-bold bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text">
              TheTermTime
            </spam>{" "}
            today.
          </p>
        </div>
        <div
          className="text-4xl text-white mt-8 mb-5 font-semibold opacity-[.7]"
          data-aos="fade-down"
        >
          Mission & Vision
        </div>
        <div className="grid gap-5 md:grid-cols-2 items-center grid-cols-1 px-7 mt-8">
          <div className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem] pb-8 h-auto lg:h-64">
            <div className="flex items-center ">
              {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={social} alt="" />
              </div> */}
              <span className=" font-semibold text-white text-xl items-start ">
                Our Mission
              </span>
            </div>
            <p className=" text-base text-white opacity-[.7] py-[1rem] items-start ">
              Our mission is to make English accessible to everyone. We believe
              language is must not be a limit in achieving one’s dream, rather a
              leverage to propel them further in their life! Because you see the
              pain of anyone who wants to speak English but is a beginner.
              Language does not limit your dreams, learn to propel.{" "}
            </p>
          </div>

          <div className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem] pb-8 h-auto lg:h-64 ">
            <div className=" flex items-start  ">
              {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={trust} alt="" />
              </div> */}
              <span className=" text-white text-xl font-semibold items-start ">
                Our Vision
              </span>
            </div>
            <p className=" text-base text-white opacity-[.7] py-[1rem] items-start ">
              Our vision is to help 1 billion students read, speak and write the
              most used language in the world by a super-app which guides
              step-by-step for a non-English speaker from application to the
              English language school to completing the cours
            </p>
          </div>
        </div>

        <div
          className="text-4xl text-white mt-8 mb-5 font-semibold opacity-[.7]"
          data-aos="fade-down"
        >
          Features & Benefits
        </div>
        <div className="mt-8">
          {/* <div className="flex items-center ">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={social} alt="" />
              </div>
            </div> */}
          <p className=" text-base text-white opacity-[.7] items-center text-[19px]">
            <p className="leading-relaxed flex gap-2">
              <div className="flex">•</div>Selection of English Schools best suited for you are available
              in-app.
            </p>

            <p className="mt-3 leading-relaxed flex gap-2">
            <div className="flex">•</div>Step by Step guide on the process of learning English abroad.
            </p>
            <p className="mt-3 leading-relaxed flex gap-2">
            <div className="flex">•</div>Super app with all services needed to start from application to
              graduating the course, including scheduling classes, booking
              travel, accommodation and more.
            </p>
            <p className="mt-3 leading-relaxed flex gap-2">
            <div className="flex">•</div>Save time by choosing only from the schools best suited for you
              (No hassle of checking through multiple tabs)
            </p>
            <p className="mt-3 leading-relaxed flex gap-2">
            <div className="flex">•</div>Complete clarity from A to Z on how to start learning English.
              (No confusion on how to start and where to end)
            </p>
            <p className="mt-3 leading-relaxed flex gap-2">
            <div className="flex">•</div>Stress-free studying (No overwhelm with having separate apps to
              reach one goal)
            </p>
          </p>
        </div>
        <br />
      </div>
      <FooterDiv />
    </div>
  );
}

export default AboutUs;
