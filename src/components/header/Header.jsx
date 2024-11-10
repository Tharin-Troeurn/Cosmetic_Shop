import React, { useState } from 'react'
import { FaBars, FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { menus } from '../../data/data'

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar=()=>{
    setIsNavbarOpen(!isNavbarOpen);
  }
  
  return (
    <>
      {/* top navbar */}
      <div className='container-fluid bg-rose-900 fixed top-0 left-0 z-50 w-full '>
        <div className='container'>
          
          <div className='h-[60px] flex justify-between items-center'>
            <div>
              <Link to='/'>
                <h1 className='text-2xl text-white font-bold'>Cosmetics Shop</h1>
              </Link>
            </div>
            <div className='flex items-center gap-4 '>
              <div className='relative lg:flex md:flex sm:hidden hidden'>
                <input 
                  type="text" 
                  placeholder='search...'
                  className='px-2 py-[2px] rounded-full focus:outline-none focus:border-red-400'
                />

                <IoIosSearch
                  className='text-gray-500 absolute top-1/2 -translate-y-1/2 right-3'
                />

              </div>
              
              <FaRegUser className='text-2xl cursor-pointer text-white'/>
              <div className='relative'>
                <FaShoppingCart className='text-2xl cursor-pointer text-white'/>
                <div className='bg-white text-rose-900 rounded-full w-5 h-5 flex 
                  justify-center items-center absolute -top-3 -right-3'>
                  <span >0</span>
                </div>
                
              </div>
              
              <div className='cursor-pointer text-white lg:hidden md:hidden sm:flex flex'>
                <FaBars className='text-xl' onClick={toggleNavbar}/>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* lower navbar */}
      <div 
        className={`container-fluid bg-white shadow-md py-3 lg:block md:block 
        ${isNavbarOpen ? "block" : "hidden"} fixed top-[60px] z-40 w-full`}
      >
        <div className='container '>
          <ul className='lg:flex md:flex sm:block  justify-center gap-8 sm:text-center text-center'>
            {
              menus.map((menu)=>(
                <li key={menu.id} className='hover:text-red-600 lg:py-0 md:py-0 sm:py-2 py-2'>
                  
                  <Link to={menu.link}> {menu.name} </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header