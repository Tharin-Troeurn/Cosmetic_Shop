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
      <div className='container-fluid bg-rose-900'>
        <div className='container py-4 '>
          
          <div className='flex justify-between items-center'>
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
              
              <FaRegUser className='text-xl cursor-pointer text-white'/>
              <FaShoppingCart className='text-xl cursor-pointer text-white'/>
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
        ${isNavbarOpen ? "block" : "hidden"}`}
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