import React from 'react'
import { bannerList } from '../../data/data'

export const Banner = () => {
    

    return (
        <div className='container mt-20'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2  gap-10'>
                {
                    bannerList.map((data) => (
                        <div className='bg-orange-100 rounded-sm p-5 flex justify-between
                            items-center' key={data.id}>
                            {/* text section */}
                            <div>
                                <p className='text-[18px] text-gray-600' data-aos="zoom-in">{data.title_discount}</p>
                                <h1 className='font-bold lg:text-3xl md:text-2xl sm:text-xl text-xl mt-2' data-aos="zoom-in">{data.title}</h1>
                                
                                <div className='mt-6' data-aos="fade-up">
                                    <button className='bg-gradient-to-r from-red-600 to-rose-900 rounded-full 
                                        px-4 py-1 text-white hover:scale-105'>
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                            {/* image section */}
                            <div data-aos="fade-up">
                                <img 
                                    src={data.image} 
                                    alt="" 
                                    className=' w-[150px] h-[200px] object-cover'
                                />
                            </div>
                        </div>
                    ))
                }
                
            </div>
           
        </div>

    )
}
