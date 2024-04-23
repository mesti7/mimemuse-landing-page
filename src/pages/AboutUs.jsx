import React from 'react'
import bg from '../Assets/TopRightOrange.png'
import NavBar from '../Component/NavBar'
import FooterDiv from '../Component/FooterDiv'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function AboutUs() {
  useEffect(() => {
    Aos.init({
      duration: 1900,
      offset: 100,
    })
  }, [])
  return (
    <div className="bg-white-900">
      <header
        className="w-full h-screen pt-4 pb-7 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" bg-gray-900 rounded-full p-9">
          <div className=" text-center text-transparent text-4xl md:text-5xl font-bold bg-gradient-to-br from-red-500  to-orange-500 bg-clip-text ">
            About Mime Muse
          </div>
        </div>
      </header>

      <div className=" text-center text-transparent text-4xl md:text-1xl font-bold bg-gradient-to-br from-red-500  to-orange-500 bg-clip-text ">
        Welcome to Mime Muse – the ultimate destination for meme enthusiasts and
        creators! 🎭
      </div>
      <div className=" text-center text-transparent text-4xl md:text-3xl font-bold bg-gradient-to-br from-red-500  to-orange-500 bg-clip-text ">
        At Mime Muse, we believe in the power of laughter to bring people
        together and brighten up even the dullest of days. Our journey began
        with a simple idea: to revolutionize the way memes are created and
        shared, making humor accessible to all.
      </div>

      <div className=" text-center text-transparent text-4xl md:text-1xl font-bold bg-gradient-to-br from-red-500  to-orange-500 bg-clip-text ">
        Crafting Laughter
      </div>

      <div className=" text-center text-transparent text-4xl md:text-3xl font-bold bg-gradient-to-br from-red-500  to-orange-500 bg-clip-text ">
        We embarked on a mission to empower users with the tools they need to
        turn everyday moments into unforgettable laughs. With Mime Muse,
        meme-making is not just a hobby – it's an art form. Our app is
        meticulously designed to spark creativity and ignite the imagination,
        allowing users to express themselves through humor like never before. 🌟
      </div>
    </div>
  )
}

export default AboutUs
