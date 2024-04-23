import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import hero from '../Assets/TopRightOrange.png'
import NavBar from '../Component/NavBar'
import FooterDiv from '../Component/FooterDiv'
import emailjs from '@emailjs/browser'

function ContactUs() {
  const form = useRef()
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [countryCode, setCountryCode] = useState('+')
  const [PhoneNumber, setPhoneNumber] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_e7wcnes',
        'template_z5dqnf4',
        form.current,
        'l9Ahz8mB-4kQwwfD_'
      )
      .then((result) => {
        console.log(result.text)
        console.log('message sent')
        setIsMessageSent(true)
        setTimeout(() => {
          form.current.reset()
          setIsMessageSent(false)
          window.location.reload()
        }, 2000)
      })
      .catch((error) => {
        console.log(error.text)
      })
  }

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value)
  }
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  return (
    <>
      <div className=" bg-white">
        <div className=" flex-auto">
          <NavBar />
        </div>
        <header
          className="w-full h-screen  p-2 md:p-8 bg-right-top flex justify-center items-center bg-no-repeat"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="  bg-white rounded-full my-40 p-9 w-96">
            <div className=" text-center text-transparent text-4xl md:text-5xl font-bold bg-gradient-to-br from-red-500  to-orange-500 bg-clip-text">
              Contact Us
            </div>
          </div>
        </header>
        <body>
          <div>Cons</div>
          <div>Con</div>
        </body>
      </div>
    </>
  )
}

export default ContactUs
