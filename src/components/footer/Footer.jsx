import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { AiFillTikTok } from "react-icons/ai";
import { FiSend } from "react-icons/fi";


const Footer = () => {
  return (
    <div className='container-fluid bg-rose-900 mt-10  py-10'>
      <div className='container'>
        <div className='text-white grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:gap-y-10 '>
          {/* logo section */}
          <div className=''>
            <h1 className='text-2xl font-bold'>Cosmetic Shop</h1>
            <img src="" alt="" />
          </div>
          {/* Information section */}
          <div>
            <h1 className='text-xl font-bold'>Information</h1>
            <ul className='mt-5 grid gap-y-2'>
              <li><a href="">About Us</a></li>
              <li><a href="">Delivery Information</a></li>
              <li><a href="">Shipping</a></li>
              <li><a href="">Private Policy</a></li>
            </ul>
          </div>
          {/*  */}
          <div>
            <h1 className='text-xl font-bold'>Information</h1>
            <ul className='mt-5 grid gap-y-2'>
              <li><a href="">About Us</a></li>
              <li><a href="">Delivery Information</a></li>
              <li><a href="">Shipping</a></li>
              <li><a href="">Private Policy</a></li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h1 className='text-xl font-bold'>Follow Us</h1>
            <div className='flex gap-3 mt-5 hover:text-rose-500'>
              <a href="#">
                <FaInstagram className='text-2xl' />
              </a>
              <a href="#">
                <FaFacebook className='text-2xl' />
              </a>
              <a href="#">
                <FaLinkedin className='text-2xl' />
              </a>
              <a href="#"><AiFillTikTok className='text-2xl'/></a>
            </div>
            <div className='mt-3'>
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