import React from 'react'
import 'flowbite'
import hero from '../Assets/TopRightOrange.png'
import NavBar from '../Component/NavBar'
import FooterDiv from '../Component/FooterDiv'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import mobile from '../Assets/TopRightMobile.png'
import f1 from '../Assets/IntractiveEditing.png'
import f2 from '../Assets/No1Circle.png'
import f3 from '../Assets/BottomMobileSlantingOption.png'
import f5 from '../Assets/LabelsForEditor.png'
import f6 from '../Assets/RealtimeEditor.png'
import f7 from '../Assets/No2Circle.png'
import f8 from '../Assets/No3Circle.png'
import f11 from '../Assets/AppleLogo.png'
import f12 from '../Assets/PlayStore.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import slide_image_1 from '../Assets/carosal2.png'
import slide_image_2 from '../Assets/carosal3.png'
import slide_image_3 from '../Assets/carosal4.png'
import slide_image_4 from '../Assets/carosal5.png'
import slide_image_5 from '../Assets/carosal6.png'
import slide_image_6 from '../Assets/carosal7.png'
import slide_image_7 from '../Assets/carosal8.png'
import ContactForm from '../Component/contactForm/contactForm'

export const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1900,
      offset: 100,
    })
  }, [])
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
            <div className=" flex gap-8">
              <button className=" text-orange-500 lg:text-white items-center w-20 h-8 rounded-[100px] bg-white lg:bg-gradient-to-br from-red-500 to-orange-500">
                New
              </button>
              <div className=" pt-1 lg:text-black text-white">
                Best Mobile App
              </div>
            </div>
            <div className=" grid py-5 text-4xl font-medium">
              <div className=" text-white lg:text-black">
                Create. Laugh. Share.{' '}
                <text className=" text-white lg:bg-gradient-to-br from-red-500 to-orange-500 lg:text-transparent lg:bg-clip-text">
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
          <div className=" md:pt-12 lg:pt-0">
            <img src={mobile} />
          </div>
        </div>
        <div
          id="about"
          className=" text-center pt-10 text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text"
        >
          About Mimemuse
        </div>
        <div class=" max-w-3xl mx-auto p-8">
          <div class=" text-base text-slate-900 dark:text-white font-semibold select-none">
            At Mime Muse, we're dedicated to revolutionizing the way you create
            and share laughter. Our app isn't just a tool – it's a catalyst for
            creativity, empowering you to transform ordinary moments into
            extraordinary laughs effortlessly.
          </div>
          <br />
          <div class=" text-base text-slate-900 dark:text-white font-semibold select-none">
            Crafting Laughter with Mime Muse: A Revolution Begins{' '}
          </div>
          <div class=" text-base text-slate-900 dark:text-white font-semibold select-none">
            Mime Muse is more than just an app; it's a meme revolution designed
            to empower your wit and humor like never before. With our
            award-worthy features, you'll discover a world of endless
            possibilities for meme-making mastery.
          </div>
        </div>
        <br />
        <br />
        <br />
        <div
          id="about"
          className=" text-center pt-10 text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text"
        >
          Our mission
        </div>
        <div class=" max-w-3xl mx-auto p-8">
          <div class=" text-base text-slate-900 dark:text-white font-semibold select-none">
            At Mime Muse, we believe in the power of laughter to bring people
            together and brighten up even the dullest of days. Our journey began
            with a simple idea: to revolutionize the way memes are created and
            shared, making humor accessible to all.
          </div>
        </div>
        <div
          id="features"
          className=" text-center text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text pt-7"
        >
          Features
        </div>
        <div className=" text-3xl py-7 items-center text-center">
          <div className=" grid md:grid-cols-3 px-8 py-8 lg:px-16 items-center">
            <div className=" grid text-base ">
              <img className=" place-self-center" src={f1} />
              Interactive Editing
              <img className=" h-24 place-self-center" src={f2} />
            </div>
            <div className=" grid text-base ">
              <img className=" place-self-center" src={f5} />
              Labels For Editors
              <img className=" h-24 place-self-center" src={f7} />
            </div>
            <div className=" grid text-base">
              <img className=" place-self-center" src={f6} />
              Realtime Editing
              <img className=" h-24 place-self-center" src={f8} />
            </div>
          </div>
        </div>
        <div
          id="screenshots"
          className=" text-center text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text"
        >
          Screens
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img
              src={slide_image_1}
              alt="mimemuse social media app- laugh, fun"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_2}
              alt="mimemuse social media app - laugh, fun"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_3}
              alt="mimemuse social media app - laugh, fun"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_4}
              alt="mimemuse social media app - laugh, fun"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_5}
              alt="mimemuse social media app - laugh, fun"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_6}
              alt="mimemuse social media app - laugh, fun"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_7}
              alt="mimemuse social media app - laugh, fun"
            />
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
        </Swiper>
        <div className=" text-center pt-10 text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text">
          FAQ
        </div>
        <div>
          <div class=" max-w-3xl mx-auto p-8">
            <div className=" pb-2">
              <details
                class="bg-white ring-1 ring-black/5 open:shadow-lg p-5 rounded-lg"
                open
              >
                <summary class=" text-base text-slate-900 dark:text-white font-semibold select-none">
                  What is MimeMuse?
                </summary>
                <div class="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  <p>
                    Depending on one's sense of humor, MimeMuse is a platform
                    that makes it easier to consistently create, edit, and share
                    relatable memes with friends, family, and coworkers, keeping
                    them connected. Content created by users includes trending
                    photos or video memes. These Memes can be searched on the
                    MimeMuse platform, shared with your followers, and posted on
                    your profile.
                  </p>
                </div>
              </details>
            </div>
            <div className=" pb-2">
              <details
                class="bg-white dark:open:bg-slate-900 ring-1 ring-black/5 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-5 rounded-lg"
                open
              >
                <summary class=" text-base text-slate-900 dark:text-white font-semibold select-none">
                  How to Register?
                </summary>
                <div class="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  <p>
                    All you need is an internet connection, a smartphone, and an
                    email address. To begin, enter your email address and
                    register! We'll send you recommendations for entertaining
                    accounts as soon as you sign up. Browse each profile, then
                    follow the ones whose posts make you laugh. With the help of
                    our easy-to-use inbuilt editing tool, publish your first
                    meme on MimeMuse.
                  </p>
                </div>
              </details>
            </div>
            <div className=" pb-2">
              <details
                class="bg-white dark:open:bg-slate-900 ring-1 ring-black/5 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-5 rounded-lg"
                open
              >
                <summary class=" text-base text-slate-900 dark:text-white font-semibold select-none">
                  What is an Edited Meme?
                </summary>
                <div class="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  <p>
                    An Edited meme is a meme that you modify using our
                    user-friendly editing tool after gathering ideas and merging
                    another user's meme.  In other words, using other people's
                    memes to create your own. When you publish this meme, you
                    will receive a badge showing that it is modified, which
                    others may view by clicking the post options (the 3 dots on
                    the top right corner of your meme).
                  </p>
                </div>
              </details>
            </div>
            <div className=" pb-2">
              <details
                class="bg-white dark:open:bg-slate-900 ring-1 ring-black/5 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-5 rounded-lg"
                open
              >
                <summary class=" text-base text-slate-900 dark:text-white font-semibold select-none">
                  What is a Created Meme?
                </summary>
                <div class="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  <p>
                    A meme that you created with our editing tool that uses a
                    photo or a template from your collection contains your
                    original ideas, or is based on true real-life occurrences in
                    your life will be referred to as a created Meme. In other
                    words, you will be creating memes using your templates from
                    your phone. When you publish this meme, you will receive a
                    badge showing that it is a Created-Meme, which others may
                    view by clicking the post options (the 3 dots on the top
                    right corner of your meme).
                  </p>
                </div>
              </details>
            </div>
            <div className=" pb-2">
              <details
                class="bg-white dark:open:bg-slate-900 ring-1 ring-black/5 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-5 rounded-lg"
                open
              >
                <summary class=" text-base text-slate-900 dark:text-white font-semibold select-none">
                  How to Post My Memes?
                </summary>
                <div class="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  <p>
                    After making your Edited memes or Created memes, you can
                    post them yourself by simply clicking the Upload icon in the
                    editing tool. You can write a brief description, and select
                    a few suitable categories, before posting it. Or, share it
                    with your friends across different platforms by clicking the
                    sharing icon.
                  </p>
                </div>
              </details>
            </div>
            <div className=" pb-2">
              <details
                class="bg-white dark:open:bg-slate-900 ring-1 ring-black/5 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-5 rounded-lg"
                open
              >
                <summary class=" text-base text-slate-900 dark:text-white font-semibold select-none">
                  What are other things I can Do?
                </summary>
                <div class="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  <p>
                    You can like, share, and command any memes that have been
                    published on the platform. On your profile page, you can
                    view your followers and individuals who you follow. On the
                    feed page, you may see memes from your followers as well as
                    suggested memes.  The top memes will be shown on the feed
                    page and updated daily. You're open to a variety of other
                    memes on the Explore pages.  You may also search for your
                    friends or other users, view their memes, and follow or chat
                    with them. You may report the memes using the Report Post
                    icon.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div
          id="download"
          className=" text-center pt-10 text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text"
        >
          Download
        </div>
        <div className=" grid lg:grid-cols-2 px-8 gap-6 ">
          <img src={f3} />
          <div className=" lg:pt-48 text-xl md:text-3xl">
            Easy and Perfect Platform For Your Meme Creativity
            <div className=" flex pt-7 gap-2 pb-16">
              <button
                className=" bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl h-8 flex w-36 md:w-40 text-white text-base items-center"
                style={{ display: 'none' }}
              >
                <img className=" h-6 pl-5 p-0.5" src={f11} />
                App Store
              </button>
              <a href="https://play.google.com/apps/testing/com.mime.mimemuse">
                <button className=" bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl h-8 flex w-36 md:w-40 text-white text-base items-center">
                  <img className=" h-6 pl-5 p-0.5" src={f12} />
                  Google Play
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          id="contact"
          className=" text-center pt-10 text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text"
        >
          Contact Us
        </div>
        <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          <ContactForm />
        </div>
      </div>
      <FooterDiv />
    </div>
  )
}
