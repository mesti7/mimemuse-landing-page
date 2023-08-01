import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import hero from "../Assets/contacthero.png";
import NavBar from "../Component/NavBar";
import FooterDiv from "../Component/FooterDiv";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e7wcnes",
        "template_z5dqnf4",
        form.current,
        "l9Ahz8mB-4kQwwfD_"
      )
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        setIsMessageSent(true);
        setTimeout(() => {
          form.current.reset();
          setIsMessageSent(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <NavBar />
      <div className="bg-gray-900">
        <header
          className="w-full h-screen pt-4 pb-7 bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className=" bg-gray-900 rounded-full p-9">
            <div className=" text-center text-transparent text-4xl md:text-5xl font-bold bg-gradient-to-br from-red-500  to-blue-500 bg-clip-text">
              Contact Us
            </div>
          </div>
        </header>
        <br />
        <div className="bg-gray-900 min-h-screen w-full flex-1 md:grid place-items-center">
          <div className="bg-white rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 m-10">
            {/* contact information */}
            <div
              className="bg-gradient-to-br from-red-500 to-blue-500 p-8 md:hover:scale-y-110 rounded-md transition px-6 py-4"
              id="contact_info"
            >
              <div className="grid justify-between">
                {/* page title */}
                <h2 className="text-white text-2xl">Contact Information</h2>
              </div>
              <div className="mt-6">
                <div>
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-white text-xl">Email: </h2>
                  <p className="text-white text-lg">people@thetermtime.com</p>
                </div>
              </div>
              <div className="mt-6 ">
                <div>
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-6 h-6 text-white mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-white text-xl">Phone:</h2>
                  <p className="text-white text-lg">+44 7767 197516</p>
                </div>
              </div>
              <div className="social-links mt-8 ">
                <div className="second-text text-xl text-white">
                  Connect with us:
                </div>
                <div className="icons gap-4 py-[1rem] pb-[30px] flex">
                  <AiFillInstagram className=" p-[8px] h-[40px] w-[40px] rounded-full icon hover:text-gray-800 text-white opacity-80 bg-gradient-to-t" />
                  <BsLinkedin className=" p-[8px] h-[40px] w-[40px] rounded-full icon hover:text-gray-800 text-white opacity-80 bg-gradient-to-t" />
                </div>
              </div>
            </div>

            {/* contact us form */}
            <div id="contact_us" className="px-6 py-4">
              <div>
                <div className="grid justify-between">
                  {/* page title */}
                  <h2 className="gradient-bg text-3xl">Get In Touch</h2>
                </div>
              </div>
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid lg:flex justify-between gap-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="user_first_name"
                      className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="user_last_name"
                      className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                    />
                  </div>

                  <div className="grid lg:flex justify-between gap-2 mt-2">
                    <input
                      type="text"
                      placeholder="Your Email"
                      name="user_email"
                      className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="user_phone_number"
                      className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                    />
                  </div>
                  <div className="grid lg:flex justify-between m-2">
                    <div className="text-md text-slate-600">Gender:</div>
                  </div>
                  <div className="p-1 m-2 mr-10 lg:mr-64 ">
                    <div className="flex justify-between gap-2 text-sm">
                      <input type="radio" name="user_gender" value="Male" />
                      <label htmlFor="Male">Male</label>
                      <input type="radio" name="user_gender" value="Female" />
                      <label htmlFor="Female">Female</label>
                    </div>
                  </div>
                  <div className=" grid mr-5 lg:mr-0">
                    <input
                      type="text"
                      placeholder="Your City"
                      name="user_city"
                      className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                    />
                  </div>
                  <div className="grid lg:flex justify-between gap-2">
                    <select
                      name="user_country"
                      placeholder="Select Category"
                      id="country_id"
                      className="form-control w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm resize-none"
                    >
                      <option>Select Countries</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>American Samoa</option>
                      <option>Andorra</option>
                      <option>Angola</option>
                      <option>Anguilla</option>
                      <option>Antarctica</option>
                      <option>Antigua And Barbuda</option>
                      <option>Austria</option>
                      <option>Azerbaijan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                      <option>Belarus</option>
                      <option>Belgium</option>
                      <option>Belize</option>
                      <option>Benin</option>
                      <option>Bhutan</option>
                      <option>Bolivia</option>
                      <option>Bosnia And Herzegovina</option>
                      <option>Botswana</option>
                      <option>Brazil</option>
                      <option>Brunei</option>
                      <option>Bulgaria</option>
                      <option>Burkina Faso</option>
                      <option>Burundi</option>
                      <option>Cabo Verde</option>
                      <option>Cambodia</option>
                      <option>Cameroon</option>
                      <option>Canada</option>
                      <option>Central African Republic</option>
                      <option>Chad</option>
                      <option>Chile</option>
                      <option>China</option>
                      <option>Colombia</option>
                      <option>Comoros</option>
                      <option>Congo (Brazzaville)</option>
                      <option>Congo (Kinshasa)</option>
                      <option>Costa Rica</option>
                      <option>Croatia</option>
                      <option>Cuba</option>
                      <option>Cyprus</option>
                      <option>Czech Republic</option>
                      <option>Denmark</option>
                      <option>Djibouti</option>
                      <option>Dominica</option>
                      <option>Dominican Republic</option>
                      <option>Ecuador</option>
                      <option>Egypt</option>
                      <option>El Salvador</option>
                      <option>Equatorial Guinea</option>
                      <option>Eritrea</option>
                      <option>Estonia</option>
                      <option>Ethiopia</option>
                      <option>Fiji</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>Gabon</option>
                      <option>Gambia</option>
                      <option>Georgia</option>
                      <option>Germany</option>
                      <option>Ghana</option>
                      <option>Greece</option>
                      <option>Grenada</option>
                      <option>Guatemala</option>
                      <option>Guinea</option>
                      <option>Guinea-Bissau</option>
                      <option>Guyana</option>
                      <option>Haiti</option>
                      <option>Holy See</option>
                      <option>vHonduras</option>
                      <option>Hungary</option>
                      <option>Iceland</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Iran</option>
                      <option>Iraq</option>
                      <option>Ireland</option>
                      <option>Israel</option>
                      <option>Italy</option>
                      <option>Jamaica</option>
                      <option>Japan</option>
                      <option>Jordan</option>
                      <option>Kazakhstan</option>
                      <option>Kenya</option>
                      <option>Kiribati</option>
                      <option>Korea, North</option>
                      <option>Korea, South</option>
                      <option>Kosovo</option>
                      <option>Kuwait</option>
                      <option>Kyrgyzstan</option>
                      <option>Laos</option>
                      <option>Latvia</option>
                      <option>Lebanon</option>
                      <option>Lesotho</option>
                      <option>Liberia</option>
                      <option>Libya</option>
                      <option>Liechtenstein</option>
                      <option>Lithuania</option>
                      <option>Luxembourg</option>
                      <option>Madagascar</option>
                      <option>Malawi</option>
                      <option>Malaysia</option>
                      <option>Maldives</option>
                      <option>Mali</option>
                      <option>Malta</option>
                      <option>Marshall Islands</option>
                      <option>Mauritania</option>
                      <option>Mauritius</option>
                      <option>Mexico</option>
                      <option>Micronesia</option>
                      <option>Moldova</option>
                      <option>Monaco</option>
                      <option>Mongolia</option>
                      <option>Montenegro</option>
                      <option>Morocco</option>
                      <option>Mozambique</option>
                      <option>Myanmar</option>
                      <option>Namibia</option>
                      <option>Nauru</option>
                      <option>Nepal</option>
                      <option>Netherlands</option>
                      <option>New Zealand</option>
                      <option>Nicaragua</option>
                      <option>Niger</option>
                      <option>Nigeria</option>
                      <option>North Macedonia</option>
                      <option>Norway</option>
                      <option>Oman</option>
                      <option>Pakistan</option>
                      <option>Palau</option>
                      <option>Palestine</option>
                      <option>Panama</option>
                      <option> Papua New Guinea</option>
                      <option>Paraguay</option>
                      <option>Peru</option>
                      <option>Philippines</option>
                      <option>Poland</option>
                      <option>Portugal</option>
                      <option>Qatar</option>
                      <option>Romania</option>
                      <option>Russia</option>
                      <option>Rwanda</option>
                      <option>Saint Kitts And Nevis</option>
                      <option>Saint Lucia</option>
                      <option>Saint Vincent And The Grenadines</option>
                      <option>Samoa</option>
                      <option>San Marino</option>
                      <option>Sao Tome And Principe</option>
                      <option>Saudi Arabia</option>
                      <option>Senegal</option>
                      <option>Serbia</option>
                      <option>Seychelles</option>
                      <option>Sierra Leone</option>
                      <option>Singapore</option>
                      <option>Slovakia</option>
                      <option>Slovenia</option>
                      <option>Solomon Islands</option>
                      <option>Somalia</option>
                      <option>South Africa</option>
                      <option>South Sudan</option>
                      <option>Spain</option>
                      <option>Sri Lanka</option>
                      <option>Sudan</option>
                      <option>Suriname</option>
                      <option>Swaziland</option>
                      <option>Sweden</option>
                      <option>Switzerland</option>
                      <option>Syria</option>
                      <option>Taiwan</option>
                      <option>Tajikistan</option>
                      <option>Tanzania</option>
                      <option>Thailand</option>
                      <option>Timor-Leste</option>
                      <option>Togo</option>
                      <option>Tonga</option>
                      <option>Trinidad And Tobago</option>
                      <option>Tunisia</option>
                      <option>Turkey</option>
                      <option>Turkmenistan</option>
                      <option>Tuvalu</option>
                      <option>Uganda</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Uruguay</option>
                      <option>Uzbekistan</option>
                      <option>Vanuatu</option>
                      <option>Venezuela</option>
                      <option>Vietnam</option>
                      <option>Yemen</option>
                      <option>Zambia</option>
                      <option>Zimbabwe</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Nationality"
                      name="user_nationality"
                      className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                    />
                  </div>
                  <textarea
                    placeholder="Enter your Message here"
                    name="message"
                    className="w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none"
                  ></textarea>
                  <br />
                  <input
                    type="submit"
                    value="send"
                    className="bg-gray-900 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"
                  />
                  {isMessageSent && (
                    <div className="text-green-500 text-xl mt-4">
                      Message sent successfully!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <FooterDiv />
      </div>
    </>
  );
}

export default ContactUs;
