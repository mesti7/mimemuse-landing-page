import React from "react";
import s1 from "../Assets/s1.jpg";
import s2 from "../Assets/s2.jpg";
import s3 from "../Assets/s3.jpeg";
import s4 from "../Assets/s4.jpg";
import s5 from "../Assets/s5.jpg";
import s6 from "../Assets/s6.jpg";

function Countries() {
  return (
    <div className=" bg-gray-900">
      <div className="max-w-[1240px] m-auto">

        <h1
          className=" pl-6 pr-6 text-4xl pb-[.5rem] font-bold mt-12 bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text"
          data-aos="fade-down"
        >
          Countries
        </h1>
        <h2
          className=" pr-6 pl-6 text-2xl font-semibold text-white"
          data-aos="fade-down"
        >
          Our Recommended Courses
        </h2>

        <br />
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 mx-5">
          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${s1})` }}
              className="rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                General English
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${s2})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                super intensive english
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${s3})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                ielts preparation
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${s4})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                professional english
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${s5})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                academic english
              </div>
            </div>
          </div>

          <div className=" hover:bg-gradient-to-br from-red-500 to-blue-500 rounded-tl-3xl rounded-br-3xl p-4">
            <div
              style={{ backgroundImage: `url(${s6})` }}
              className=" rounded-tl-3xl rounded-br-3xl bg-center bg-cover bg-no-repeat text-sm md:text-base text-white text-center pt-40 h-56"
            >
              <div className=" bg-gray-900 mx-4 rounded-full p-2 bg-opacity-60">
                junior summerschool
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countries;

// function Countries() {
//   return (

//     <div className=' bg-gray-900'>
//       <div className="max-w-[1240px] m-auto">

//           <h1 className="text-4xl py-[2rem] pb-[3rem] font-bold w-[400px] block mt-12 bg-gradient-to-br from-red-500 to-blue-500 text-transparent bg-clip-text ">

//            Countries
//           </h1>
//           <h2 className=' text-white pb-10 ' >Top Destinations To Study</h2>
//            <div className="grid gap-[10rem] grid-cols-3 items-center pb-10">

//               <div className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500   p-[1.5rem]">
//                <img className=' w-full' src={usa} alt="" />
//                <div className=" flex items-center gap-3">
//                  {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
//                    <img src={simple} alt="" />
//                  </div> */}
//                   <span className=" font-semibold text-white text-[18px] ">

//                    📍USA
//                   </span>
//                </div>
//               </div>

//               <div className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
//               <img className='usa w-full' src={uk} alt="" />
//                <div className=" flex items-center gap-3">
//                 {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
//                   <img src={simple} alt="" />
//                 </div> */}
//                 <span className=" font-semibold text-white text-[18px]">
//                 📍UK
//                 </span>
//               </div>
//               </div>

//               {/* <div className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
//                <img className='usa' src={ireland} alt="" />
//                 <div className=" flex items-center gap-3">
//                  {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
//                    <img src={social} alt="" />
//                  </div> */}
//                   <span className=" font-semibold text-white text-[18px]">
//                  📍IRELAND
//                 </span>
//                  </div>
//                </div>
//               </div>

//            <div className="grid gap-[10rem] grid-cols-3 items-center">
//            <div className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
//             <img className='usa' src={canada} alt="" />
//              <div className=" flex items-center gap-3">
//               {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
//              <img src={simple} alt="" />
//              </div> */}
//              <span className=" font-semibold text-white text-[18px]">
//               📍CANADA
//              </span>
//              </div>
//             </div>

//           <div className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
//               <img className='usa' src={australia} alt="" />
//              <div className=" flex items-center gap-3">
//               {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
//               <img src={simple} alt="" />
//               </div> */}
//               <span className=" font-semibold text-white text-[18px]">
//                📍AUSTRALIA
//               </span>
//             </div>
//           </div>

//            <div className="singleGrid rounded-[10px] bg-gradient-to-br from-red-500 to-blue-500 p-[1.5rem]">
//             <img className='usa' src={newzealand} alt="" />
//              <div className=" flex items-center gap-3">
//               {/* <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
//                 <img src={social} alt="" />
//               </div> */}
//               <span className=" font-semibold text-white text-[18px]">
//              📍NEW ZEALAND
//              </span>
//            </div>
//          </div>
//       </div>

//       </div>
//     </div>
//   )
// }

// export default Countries */}
