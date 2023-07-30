import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import hero from "../Assets/abouthero.png";
import NavBar from "../Component/NavBar";
import FooterDiv from "../Component/FooterDiv";

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gray-900 h-screen w-full grid place-items-center">
        <header
          className="w-full h-screen pt-4 pb-7 bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className=" bg-gray-900 rounded-full p-9">
            <div className=" text-center text-transparent text-6xl font-bold bg-gradient-to-br from-red-500  to-blue-500 bg-clip-text ">
              Contact Us
            </div>
          </div>
        </header>
        <br />
        <div className="bg-gray-900 min-h-screen w-full grid place-items-center">
          <div className="bg-white rounded-md shadow-md flex flex-col md:flex-row">
            {/* contact information */}
            <div
              className="bg-gradient-to-br from-red-500 to-blue-500 p-8 md:hover:scale-y-110 rounded-md transition px-6 py-4"
              id="contact_info"
            >
              <div className="flex justify-between">
                {/* page title */}
                <h2 className="text-white text-2xl">Contact Information</h2>
              </div>
              <div className="mt-6 flex-row">
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
              <div className="mt-6 flex-row">
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
                <div className="social-links mt-8 flex-row ">
                  <span className="second-text text-xl text-white">
                    Connect with us:
                  </span>
                  <div className="icons flex gap-4 py-[1rem] pb-[30px]">
                    <AiFillInstagram className=" p-[8px] h-[40px] w-[40px] rounded-full icon hover:text-gray-800 text-white opacity-80 bg-gradient-to-t" />
                    <BsLinkedin className=" p-[8px] h-[40px] w-[40px] rounded-full icon hover:text-gray-800 text-white opacity-80 bg-gradient-to-t" />
                  </div>
                </div>
              </div>
            </div>

            {/* contact us form */}
            <div id="contact_us" className="px-6 py-4">
              <div>
                <div className="flex justify-between">
                  {/* page title */}
                  <h2 className="gradient-bg text-3xl">Get In Touch</h2>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between gap-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full text-xs px-3 h-8 my-4 outline-none rounded-md border focus:shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full text-xs px-3 h-8 my-4 outline-none rounded-md border focus:shadow-sm"
                  />
                </div>

                <div className="flex justify-between gap-2">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                  />
                </div>
                <div className="flex justify-between m-2">
                  <div className="text-md text-slate-600">Gender:</div>
                </div>
                <div className="p-1 m-2">
                  <div className="flex justify-between gap-2 text-sm">
                    <input type="radio" name="Gender" value="Male" />
                    <label htmlFor="Male">Male</label>
                    <input type="radio" name="Gender" value="Female" />
                    <label htmlFor="Female">Female</label>
                    <input
                      type="text"
                      placeholder="Your City"
                      className="w-48 text-xs px-3 h-8 m-22 my-1 outline-none rounded-md border focus:shadow-sm"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <select
                    name="country"
                    placeholder="Select Category"
                    id="country_id"
                    className="form-control w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm resize-none"
                  >
                    <option value="0">Select Countries</option>
                    <option value={1}>Afghanistan</option>
                    <option value={2}>Albania</option>
                    <option value={3}>Algeria</option>
                    <option value={4}>American Samoa</option>
                    <option value={5}>Andorra</option>
                    <option value={6}>Angola</option>
                    <option value={7}>Anguilla</option>
                    <option value={8}>Antarctica</option>
                    <option value={9}>Antigua And Barbuda</option>
                    <option value={10}>Austria</option>
                    <option value={11}>Azerbaijan</option>
                    <option value={12}>Bahamas</option>
                    <option value={13}>Bahrain</option>
                    <option value={14}>Bangladesh</option>
                    <option value={15}>Barbados</option>
                    <option value={16}>Belarus</option>
                    <option value={17}>Belgium</option>
                    <option value={18}>Belize</option>
                    <option value={19}>Benin</option>
                    <option value={20}>Bhutan</option>
                    <option value={21}>Bolivia</option>
                    <option value={22}>Bosnia And Herzegovina</option>
                    <option value={23}>Botswana</option>
                    <option value={24}>Brazil</option>
                    <option value={25}>Brunei</option>
                    <option value={26}>Bulgaria</option>
                    <option value={27}>Burkina Faso</option>
                    <option value={28}>Burundi</option>
                    <option value={29}>Cabo Verde</option>
                    <option value={30}>Cambodia</option>
                    <option value={31}>Cameroon</option>
                    <option value={32}>Canada</option>
                    <option value={33}>Central African Republic</option>
                    <option value={34}>Chad</option>
                    <option value={35}>Chile</option>
                    <option value={36}>China</option>
                    <option value={37}>Colombia</option>
                    <option value={38}>Comoros</option>
                    <option value={39}>Congo (Brazzaville)</option>
                    <option value={40}>Congo (Kinshasa)</option>
                    <option value={41}>Costa Rica</option>
                    <option value={42}>Croatia</option>
                    <option value={43}>Cuba</option>
                    <option value={44}>Cyprus</option>
                    <option value={45}>Czech Republic</option>
                    <option value={46}>Denmark</option>
                    <option value={47}>Djibouti</option>
                    <option value={48}>Dominica</option>
                    <option value={49}>Dominican Republic</option>
                    <option value={50}>Ecuador</option>
                    <option value={51}>Egypt</option>
                    <option value={52}>El Salvador</option>
                    <option value={53}>Equatorial Guinea</option>
                    <option value={54}>Eritrea</option>
                    <option value={55}>Estonia</option>
                    <option value={56}>Ethiopia</option>
                    <option value={57}>Fiji</option>
                    <option value={58}>Finland</option>
                    <option value={59}>France</option>
                    <option value={60}>Gabon</option>
                    <option value={61}>Gambia</option>
                    <option value={62}>Georgia</option>
                    <option value={63}>Germany</option>
                    <option value={64}>Ghana</option>
                    <option value={65}>Greece</option>
                    <option value={66}>Grenada</option>
                    <option value={67}>Guatemala</option>
                    <option value={68}>Guinea</option>
                    <option value={69}>Guinea-Bissau</option>
                    <option value={70}>Guyana</option>
                    <option value={71}>Haiti</option>
                    <option value={72}>Holy See</option>
                    <option value={73}>Honduras</option>
                    <option value={74}>Hungary</option>
                    <option value={75}>Iceland</option>
                    <option value={76}>India</option>
                    <option value={77}>Indonesia</option>
                    <option value={78}>Iran</option>
                    <option value={79}>Iraq</option>
                    <option value={80}>Ireland</option>
                    <option value={81}>Israel</option>
                    <option value={82}>Italy</option>
                    <option value={83}>Jamaica</option>
                    <option value={84}>Japan</option>
                    <option value={85}>Jordan</option>
                    <option value={86}>Kazakhstan</option>
                    <option value={87}>Kenya</option>
                    <option value={88}>Kiribati</option>
                    <option value={89}>Korea, North</option>
                    <option value={90}>Korea, South</option>
                    <option value={91}>Kosovo</option>
                    <option value={92}>Kuwait</option>
                    <option value={93}>Kyrgyzstan</option>
                    <option value={94}>Laos</option>
                    <option value={95}>Latvia</option>
                    <option value={96}>Lebanon</option>
                    <option value={97}>Lesotho</option>
                    <option value={98}>Liberia</option>
                    <option value={99}>Libya</option>
                    <option value={100}>Liechtenstein</option>
                    <option value={101}>Lithuania</option>
                    <option value={102}>Luxembourg</option>
                    <option value={103}>Madagascar</option>
                    <option value={104}>Malawi</option>
                    <option value={105}>Malaysia</option>
                    <option value={106}>Maldives</option>
                    <option value={107}>Mali</option>
                    <option value={108}>Malta</option>
                    <option value={109}>Marshall Islands</option>
                    <option value={110}>Mauritania</option>
                    <option value={111}>Mauritius</option>
                    <option value={112}>Mexico</option>
                    <option value={113}>Micronesia</option>
                    <option value={114}>Moldova</option>
                    <option value={115}>Monaco</option>
                    <option value={116}>Mongolia</option>
                    <option value={117}>Montenegro</option>
                    <option value={118}>Morocco</option>
                    <option value={119}>Mozambique</option>
                    <option value={120}>Myanmar</option>
                    <option value={121}>Namibia</option>
                    <option value={122}>Nauru</option>
                    <option value={123}>Nepal</option>
                    <option value={124}>Netherlands</option>
                    <option value={125}>New Zealand</option>
                    <option value={126}>Nicaragua</option>
                    <option value={127}>Niger</option>
                    <option value={128}>Nigeria</option>
                    <option value={129}>North Macedonia</option>
                    <option value={130}>Norway</option>
                    <option value={131}>Oman</option>
                    <option value={132}>Pakistan</option>
                    <option value={133}>Palau</option>
                    <option value={134}>Palestine</option>
                    <option value={135}>Panama</option>
                    <option value={136}>Papua New Guinea</option>
                    <option value={137}>Paraguay</option>
                    <option value={138}>Peru</option>
                    <option value={139}>Philippines</option>
                    <option value={140}>Poland</option>
                    <option value={141}>Portugal</option>
                    <option value={142}>Qatar</option>
                    <option value={143}>Romania</option>
                    <option value={144}>Russia</option>
                    <option value={145}>Rwanda</option>
                    <option value={146}>Saint Kitts And Nevis</option>
                    <option value={147}>Saint Lucia</option>
                    <option value={148}>
                      Saint Vincent And The Grenadines
                    </option>
                    <option value={149}>Samoa</option>
                    <option value={150}>San Marino</option>
                    <option value={151}>Sao Tome And Principe</option>
                    <option value={152}>Saudi Arabia</option>
                    <option value={153}>Senegal</option>
                    <option value={154}>Serbia</option>
                    <option value={155}>Seychelles</option>
                    <option value={156}>Sierra Leone</option>
                    <option value={157}>Singapore</option>
                    <option value={158}>Slovakia</option>
                    <option value={159}>Slovenia</option>
                    <option value={160}>Solomon Islands</option>
                    <option value={161}>Somalia</option>
                    <option value={162}>South Africa</option>
                    <option value={163}>South Sudan</option>
                    <option value={164}>Spain</option>
                    <option value={165}>Sri Lanka</option>
                    <option value={166}>Sudan</option>
                    <option value={167}>Suriname</option>
                    <option value={168}>Swaziland</option>
                    <option value={169}>Sweden</option>
                    <option value={170}>Switzerland</option>
                    <option value={171}>Syria</option>
                    <option value={172}>Taiwan</option>
                    <option value={173}>Tajikistan</option>
                    <option value={174}>Tanzania</option>
                    <option value={175}>Thailand</option>
                    <option value={176}>Timor-Leste</option>
                    <option value={177}>Togo</option>
                    <option value={178}>Tonga</option>
                    <option value={179}>Trinidad And Tobago</option>
                    <option value={180}>Tunisia</option>
                    <option value={181}>Turkey</option>
                    <option value={182}>Turkmenistan</option>
                    <option value={183}>Tuvalu</option>
                    <option value={184}>Uganda</option>
                    <option value={185}>Ukraine</option>
                    <option value={186}>United Arab Emirates</option>
                    <option value={187}>United Kingdom</option>
                    <option value={188}>United States</option>
                    <option value={189}>Uruguay</option>
                    <option value={190}>Uzbekistan</option>
                    <option value={191}>Vanuatu</option>
                    <option value={192}>Venezuela</option>
                    <option value={193}>Vietnam</option>
                    <option value={194}>Yemen</option>
                    <option value={195}>Zambia</option>
                    <option value={196}>Zimbabwe</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Nationality"
                    className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                  />
                </div>
                <textarea
                  placeholder="Enter your Message here"
                  className="w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none"
                ></textarea>
                <br />
                <input
                  type="submit"
                  value="send"
                  className="bg-gray-900 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
        <FooterDiv />
      </div>
    </>
  );
};

export default ContactUs;
