import React from 'react'
import { products } from '../../data/data'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const TrendingProducts = () => {
  return (
    <div className='mt-10'>
      <div className='container'>
        {/* header section */}
        <div className='p-4 text-center mb-6' data-aos="fade-up">
          <h1 className='text-xl font-bold'>Trending Product</h1>
        </div>
        {/* body section */}
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 
            gap-10 '>
          {
            products.map((data) => (

              <div key={data.id} className=' relative' data-aos="fade-up"
                data-aos-delay={data.aosDelay}>
                <Link to={'/product-detail'}>
                  {/* image section */}
                  <div className=' border border-gray-500 overflow-hidden
                    xl:h-[250px] lg:h-[200px] md:h-[200px] sm:h-[220px] h-[200px]'>
                    <img
                      src={data.image}
                      alt=""
                      className='w-full h-full hover:scale-105 duration-100 object-cover '
                    />
                  </div>
                  {/* detail section */}
                  <div className='text-center mt-3 p-2'>
                    <div className='flex text-yellow-500 justify-center items-center'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStarHalfStroke />
                    </div>
                    <h1 className='font-bold my-2'>{data.name}</h1>
                    <div>
                      <span className='text-red-600 me-5 font-bold'>${data.price}</span>
                      {
                        data.oldPrice ? (
                          <span><del>${data.oldPrice}</del></span>
                        ) : null
                      }

                    </div>
                  </div>
                  {/* discount */}
                  {
                    data.discount ? (
                      <div className='bg-rose-400 text-white w-12 absolute top-0 left-0 text-center'>
                        <span>{data.discount}</span>
                      </div>
                    ) : null
                  }
                </Link>

              </div>
            ))
          }
        </div>

        <div className='mt-6 flex justify-center' data-aos="fade-up">
          <Link to={'/shop'}>
            <button className='bg-gradient-to-r from-red-600 to-rose-900 rounded-full 
                            px-4 py-1 text-white hover:scale-105'>
              View all Product
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default TrendingProducts