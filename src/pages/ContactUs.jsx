import React from "react";
import hero from "../Assets/TopRightOrange.png";
import NavBar from "../Component/NavBar";
import FormPage from "../Component/FormPage";
import FooterDiv from "../Component/FooterDiv";

function ContactUs() {
  return (
    <>
      <div className=" bg-white">
        <header
          className="w-full h-screen  p-2 md:p-8 bg-right-top justify-center items-center bg-no-repeat"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <NavBar />
          <FormPage/>
          <FooterDiv/>
        </header>
      </div>
    </>
  );
}

export default ContactUs;


{/* <div className="  bg-white rounded-full my-40 p-9 w-96">
<div className=" text-center text-transparent text-4xl md:text-5xl font-bold bg-gradient-to-br from-red-500  to-orange-500 bg-clip-text">
  Contact Us
</div>
</div> */}