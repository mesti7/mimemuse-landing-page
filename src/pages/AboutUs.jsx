import React from "react";
import bg from "../Assets/TopRightOrange.png";
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
    <div className="bg-white-900">
      
      <header
        className="w-full h-screen pt-4 pb-7 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" bg-gray-900 rounded-full p-9">
          <div className=" text-center text-transparent text-4xl md:text-5xl font-bold bg-gradient-to-br from-red-500  to-orange-500 bg-clip-text ">
            About Us
          </div>
        </div>
      </header>
    </div>
  );
}

export default AboutUs;







