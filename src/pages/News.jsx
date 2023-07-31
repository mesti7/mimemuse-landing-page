import React from "react";
import hero from "../Assets/contacthero.png";
import NavBar from "../Component/NavBar";
import FooterDiv from "../Component/FooterDiv";

const News = () => {
  return (
    <div className="bg-gray-900">
        <NavBar/>
      <header
        className="w-full h-screen pt-4 pb-7 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className=" bg-gray-900 rounded-full p-9">
          <div className=" text-center text-transparent text-4xl md:text-5xl font-bold bg-gradient-to-br from-red-500  to-blue-500 bg-clip-text">
            News and Updates
          </div>
          <div className="mt-3 opacity-70 font-semibold text-xl">
            Coming Soon!
        </div>
        </div>
      </header>
      <FooterDiv/>
    </div>
  );
};

export default News;
