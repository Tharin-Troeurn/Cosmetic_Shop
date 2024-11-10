import React from 'react'
import { categoryList, products } from '../../data/data'
import { Link } from 'react-router-dom'
import { FaRegStarHalfStroke, FaStar } from 'react-icons/fa6'

const ShopPage = () => {
    return (
        <div className='lg:mt-[150px] md:mt-[150px] sm:mt-[100px] mt-[100px]'>
            <div className='container'>
                <div className='flex justify-between lg:gap-20 md:gap-10 sm:gap-10 gap-10'>
                    {/* detail section */}
                    <div>
                        {/* category */}
                        <div>
                            <h1 className='text-xl font-bold'>Category</h1>
                            <ul>
                                {
                                    categoryList.map((data) => (
                                        <li className='ms-4 hover:text-red-700 mt-2 text-nowrap'>
                                            <Link to={''}>{data.name}</Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                        {/* Price */}
                        <div className='mt-8'>
                            <h1 className='text-xl font-bold'>Price</h1>
                            <div className='mt-3'>
                                <button className='bg-rose-900 text-white rounded-md px-3 py-1 hover:bg-rose-800'>Hight</button>
                                <button className='bg-rose-900 text-white rounded-md px-3 py-1 ms-3 hover:bg-rose-800'>Low</button>
                            </div>

                        </div>
                        {/* Discount */}
                        <div className='mt-8'>
                            <h1 className='text-xl font-bold'>Promotion</h1>
                            <button className='bg-rose-900 text-white rounded-md px-3 py-1 mt-3 text-nowrap hover:bg-rose-800'>Discount Product</button>
                        </div>
                    </div>
                    {/* product section */}
                    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
                        gap-10'>
                        {
                            products.map((data) => (

                                <div key={data.id} className=' relative' data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}>
                                    <Link to={'/product-detail'}>
                                        {/* image section */}
                                        <div className=' border border-gray-500 overflow-hidden
                                            xl:h-[250px] lg:h-[200px] md:h-[200px] sm:h-[220px] h-[230px]'>
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

                </div>
            </div>
        </div>
    )
}

export default ShopPage