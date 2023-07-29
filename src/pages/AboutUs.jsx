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
          <div className=" text-center text-transparent text-6xl font-bold bg-gradient-to-br from-red-500  to-blue-500 bg-clip-text ">
            About Us
          </div>
        </div>
              
      </header>
      <div className="max-w-[1240px] m-auto">
        <div
          className="text-4xl text-white py-5 m-5 font-bold"
          data-aos="zoom-out"
        >
          About TheTermTime
        </div>
        <h1 className="text-3xl py-[2rem] pb-[3rem] font-bold w-[400px] block mt-12 ml-6 bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text ">
          What’s TheTermTime?
        </h1>
        <div className="text-xl font-normal text-white ml-5 ">
          An app who connects students to English language schools abroad and
          helps them from application to attending classes in-person at their
          preferred destination. An app that supports students in joining
          English language schools from application to attending classes
          in-person at their preferred destination. An app that supports
          students in joining English language schools from application to
          graduation at their preferred destination.
        </div>
        <h2
          className="text-3xl py-[2rem] pb-[3rem] font-bold w-[400px] block mt-12 ml-6 bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text "
        >
          Description
        </h2>
        <div className="text-xl font-normal text-white gap-2 ml-5">
          <p>
            Are you a student who wants to learn English abroad? If so, you're
            in the right place.
          </p>

          <p className="mt-5">
            One app, one goal: learning English. Are you an international
            student looking to learn the English language, TheTermTime is here
            to help. We've made it easier than ever to find the right school and
            get started on your journey.
          </p>

          <p className="mt-5">
            What's the biggest challenge with learning English abroad? It's not
            getting the right classes or teachers. It's not being overwhelmed
            with all the different things you have to do, from scheduling
            classes to booking travel to getting accommodation.
          </p>

          <p className="mt-5">
            {" "}
            At TheTermTime, we know that it's time-consuming, frustrating, and
            stressful—and we're here to help. Our super-app allows you to find
            your perfect English language school and get started on your study
            abroad journey without any hassle. We'll guide you through every
            step of the process, so you can focus on what matters most: learning
            English to propel your future!
          </p>

          <p className="mt-5">
            Have you ever wanted to learn to speak, read and write English? Now
            you can with TheTermTime!.
          </p>

          <p className="mt-3">
            With TheTermTime, you can choose from a list of English schools best
            suited for you. You don't have to worry about checking through
            multiple tabs or websites to find out how to start or where to end.
            You'll also have complete clarity on the process of learning English
            abroad.
          </p>

          <p className="mt-5">Learning English is a breeze.</p>

          <p className="mt-3">
            It's time to take the plunge, because you've got this. We've got
            your back, and we're here to support you every step of the way— from
            application to graduation. We'll help you find the school that's
            best for you, so you can get started on your path to fluency in no
            time at all.
          </p>

          <p className="mt-5">Learning English is easy, with TheTermTime!</p>

          <p className="mt-3">
            TheTermTime is the app that makes learning to speak, read, and write
            English as easy as A-B-C. You can choose from a selection of English
            schools best suited for you and get step-by-step instructions on how
            to apply, schedule classes and more. Plus, we have everything you
            need in one place—so there's no more searching through multiple tabs
            or apps to reach your goal.
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
          className="text-4xl text-white py-5 m-5 font-bold"
          data-aos="zoom-out"
        >
          Mission & Vision
          <div className="grid gap-5 md:grid-cols-2 items-center grid-cols-1 px-7  max-w-7xl pt-14">
            <div
              className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem] pb-8"
              data-aos="zoom-in"
            >
              <div className="flex items-center ">
                {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={social} alt="" />
              </div> */}
                <span className=" font-semibold text-white text-2xl">
                  Our Mission
                </span>
              </div>
              <p className=" text-xl text-white opacity-[.7] py-[1rem] font-semibold">
                Our mission is to make English accessible to everyone. We
                believe language is must not be a limit in achieving one’s
                dream, rather a leverage to propel them further in their life!
                Because you see the pain of anyone who wants to speak English
                but is a beginner. Language does not limit your dreams, learn to
                propel.{" "}
              </p>
            </div>

            <div
              className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem] pb-8 "
              data-aos="zoom-in"
            >
              <div className=" flex items-center  ">
                {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={trust} alt="" />
              </div> */}
                <span className=" font-semibold text-white text-3xl pt-6">
                  Our Vision
                </span>
              </div>
              <p className=" text-xl text-white opacity-[.7] py-[1rem] font-semibold">
                Our vision is to help 1 billion students read, speak and write
                the most used language in the world by a super-app which guides
                step-by-step for a non-English speaker from application to the
                English language school to completing the cours
              </p>
            </div>
          </div>
        </div>
        <div
          className="text-4xl text-white py-5 m-5 font-bold"
          data-aos="zoom-out"
        >
          Features & Benefits
          <div className="grid gap-5 md:grid-cols-2 items-center grid-cols-1 px-7  max-w-7xl pt-14">
            <div
              className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem] pb-8"
              data-aos="zoom-in"
            >
              <div className="flex items-center ">
                {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={social} alt="" />
              </div> */}
                <span className=" font-semibold text-white text-2xl">
                  Features
                </span>
              </div>
              <p className=" text-xl text-white opacity-[.7] py-[1rem] font-semibold">
                <p>
                  • Selection of English Schools best suited for you are
                  available in-app.
                </p>
                <p>
                  • Step by Step guide on the process of learning English
                  abroad.
                </p>
                <p>
                  • Super app with all services needed to start from application
                  to graduating the course, including scheduling classes,
                  booking travel, accommodation and more.
                </p>
              </p>
            </div>

            <div
              className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem] pb-8 "
              data-aos="zoom-in"
            >
              <div className=" flex items-center  ">
                {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={trust} alt="" />
              </div> */}
                <span className=" font-semibold text-white text-3xl ">
                  Benefits
                </span>
              </div>
              <p className=" text-xl text-white opacity-[.7] py-[1rem] font-semibold">
                <p>
                  • Save time by choosing only from the schools best suited for
                  you (No hassle of checking through multiple tabs)
                </p>
                <p>
                  • Complete clarity from A to Z on how to start learning
                  English. (No confusion on how to start and where to end)
                </p>
                <p>
                  • Stress-free studying (No overwhelm with having separate apps
                  to reach one goal)
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterDiv />
    </div>
  );
}

export default AboutUs;
