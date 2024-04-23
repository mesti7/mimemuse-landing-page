import React from "react";
import "flowbite";
import hero from "../Assets/TopRightOrange.png";
import NavBar from "../Component/NavBar";
import FooterDiv from "../Component/FooterDiv";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import mobile from "../Assets/carosal1.png";
import f3 from "../Assets/BottomMobileSlantingOption.png";
import f11 from "../Assets/AppleLogo.png";
import f12 from "../Assets/PlayStore.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Screens from "./Screens";
import Features from "./Features";

export const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1900,
      offset: 100,
    });
  }, []);
  return (
    <div>
      <div
        className=" w-full h-full p-2 md:p-8 bg-right-top items-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <NavBar />
        <div className="grid md:grid-cols-2 p-8 gap-6 ">
          {/* col 1 */}
          <div className=" py-2 md:pt-36 lg:pt-44 lg:pl-24 pr-3">
            <div className=" grid py-5 text-4xl font-medium">
              <div className=" text-white md:text-black">
                Create. Laugh. Share.{" "}
                <text className=" text-white md:bg-gradient-to-br from-red-500 to-orange-500 md:text-transparent md:bg-clip-text">
                  Memeify!
                </text>
              </div>
            </div>
            <div className=" text-white md:text-black font-medium text-base">
              Fuel Your Creativity, Ignite Endless Laughter: Introducing Mime
              Muse our unique Meme Creating App!
            </div>
          </div>
          {/* col 2 */}
          <div className=" lg:pt-0 lg:ml-24 lg:w-2/3 items-center">
            <img className=" lg:-rotate-12 place-self-center" src={mobile} />
          </div>
        </div>
        <Features/>
        <Screens/>
        <Questions/>
        <div className=" text-center pt-10 text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text">
          About Mimemuse
        </div>
        <div className=" grid lg:grid-cols-2 px-8 gap-6 ">
          <img src={f3} />
          <div className=" lg:pt-48 text-xl md:text-3xl">
            Easy and Perfect Platform For Your Meme Creativity
            <div className=" flex pt-7 gap-2 pb-16">
              <button className=" bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl h-8 flex w-36 md:w-40 text-white text-base items-center">
                <img className=" h-6 pl-5 p-0.5" src={f11} />
                App Store
              </button>
              <button className=" bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl h-8 flex w-36 md:w-40 text-white text-base items-center">
                <img className=" h-6 pl-5 p-0.5" src={f12} />
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterDiv />
    </div>
  );
};


{/* <div className=" text-center text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text">
Screens
</div>
<Swiper
effect={"coverflow"}
grabCursor={true}
centeredSlides={true}
loop={true}
slidesPerView={"auto"}
coverflowEffect={{
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 2.5,
}}
pagination={{ el: ".swiper-pagination", clickable: true }}
navigation={{
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  clickable: true,
}}
modules={[EffectCoverflow, Pagination, Navigation]}
className="swiper_container"
>
<SwiperSlide>
  <img src={slide_image_1} alt="slide_image" />
</SwiperSlide>
<SwiperSlide>
  <img src={slide_image_2} alt="slide_image" />
</SwiperSlide>
<SwiperSlide>
  <img src={slide_image_3} alt="slide_image" />
</SwiperSlide>
<SwiperSlide>
  <img src={slide_image_4} alt="slide_image" />
</SwiperSlide>
<SwiperSlide>
  <img src={slide_image_5} alt="slide_image" />
</SwiperSlide>
<SwiperSlide>
  <img src={slide_image_6} alt="slide_image" />
</SwiperSlide>
<SwiperSlide>
  <img src={slide_image_7} alt="slide_image" />
</SwiperSlide>

<div className="slider-controler">
  <div className="swiper-button-prev slider-arrow">
    <ion-icon name="arrow-back-outline"></ion-icon>
  </div>
  <div className="swiper-button-next slider-arrow">
    <ion-icon name="arrow-forward-outline"></ion-icon>
  </div>
  <div className="swiper-pagination"></div>
</div>
</Swiper> */}