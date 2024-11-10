import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { AiFillTikTok } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import logoImg from '../../assets/logo2.png'


const Footer = () => {
  return (
    <div className='container-fluid bg-rose-900 mt-10  py-10'>
      <div className='container'>
        <div className='text-white grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 md:gap-y-10 '>
          {/* logo section */}
          <div className=''>
            <h1 data-aos="fade-up" className='text-2xl font-bold'>Cosmetic Shop</h1>
            <img data-aos="zoom-in-up" src={logoImg} alt=""  className='w-[220px] h-[200px] object-cover'/>
          </div>
          {/* Information section */}
          <div>
            <h1 className='text-xl font-bold' data-aos="fade-up">Information</h1>
            <ul className='mt-5 grid gap-y-2'>
              <li className='hover:translate-x-1 duration-200 hover:underline' data-aos="fade-up"><a href="">About Us</a></li>
              <li className='hover:translate-x-1 duration-200 hover:underline' data-aos="fade-up"><a href="">Delivery Information</a></li>
              <li className='hover:translate-x-1 duration-200 hover:underline' data-aos="fade-up"><a href="">Shipping</a></li>
              <li className='hover:translate-x-1 duration-200 hover:underline' data-aos="fade-up"><a href="">Private Policy</a></li>
            </ul>
          </div>
          {/*  */}
          <div>
            <h1 className='text-xl font-bold' data-aos="fade-up">Information</h1>
            <ul className='mt-5 grid gap-y-2'>
              <li className='hover:translate-x-1 duration-200 hover:underline' data-aos="fade-up"><a href="">About Us</a></li>
              <li className='hover:translate-x-1 duration-200 hover:underline' data-aos="fade-up"><a href="">Delivery Information</a></li>
              <li className='hover:translate-x-1 duration-200 hover:underline' data-aos="fade-up"><a href="">Shipping</a></li>
              <li className='hover:translate-x-1 duration-200 hover:underline' data-aos="fade-up"><a href="">Private Policy</a></li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h1 className='text-xl font-bold' data-aos="fade-up">Follow Us</h1>
            <div className='flex gap-3 mt-5 hover:text-rose-500 text-white' data-aos="fade-up">
              <a href="#" className='hover:text-white'>
                <FaInstagram className='text-2xl' />
              </a>
              <a href="#" className='hover:text-white'>
                <FaFacebook className='text-2xl' />
              </a>
              <a href="#" className='hover:text-white'>
                <FaLinkedin className='text-2xl' />
              </a>
              <a href="#" className='hover:text-white'><AiFillTikTok className='text-2xl'/></a>
            </div>
            <div className='mt-3' data-aos="fade-up">
              <p>Subcribe to our website to get about special discount </p>
              <div className='relative'>
              <input 
                type="email" 
                placeholder='Your Email'
                className='mt-3 w-full rounded-full px-5 py-2 focus:outline-none text-black absolute'
              />
              <FiSend className='text-gray-400 absolute text-2xl right-4 top-5 cursor-pointer'/>

              </div>
              
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer