import React from 'react'
import { products } from '../../data/data'
import { Link } from 'react-router-dom'
import { FaRegStarHalfStroke, FaStar, FaRegHeart } from 'react-icons/fa6'
import { IoCart } from "react-icons/io5";
import Slider from 'react-slick'

const ProductDetail = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className='lg:mt-[160px] md:mt-[160px] sm:mt-[120px] mt-[105px]'>
            <div className='container '>
                {/* detail product */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1'>
                    {/* image section */}
                    <div className='flex gap-5'>
                        <div>
                            <img
                                src="https://i.pinimg.com/736x/60/fc/e1/60fce1d92be2a1fe2f601586b28fa0ad.jpg"
                                alt=""
                                className='w-[90px] h-[120px] object-cover mb-4'
                            />
                            <img
                                src="https://i.pinimg.com/736x/60/fc/e1/60fce1d92be2a1fe2f601586b28fa0ad.jpg"
                                alt=""
                                className='w-[90px] h-[120px] object-cover mb-4'
                            />
                            <img
                                src="https://i.pinimg.com/736x/60/fc/e1/60fce1d92be2a1fe2f601586b28fa0ad.jpg"
                                alt=""
                                className='w-[90px] h-[120px] object-cover mb-4'
                            />

                        </div>
                        <div>
                            <img
                                src="https://i.pinimg.com/564x/02/27/fc/0227fc700f3c8aec48c34afd7cd3c713.jpg"
                                alt=""
                                className=' lg:w-[400px] lg:h-[500px] md:w-[500px] md:h-[400px] sm:w-[400px] sm:h-[450px] w-[400px] h-[400px] object-cover'
                            />
                        </div>


                    </div>
                    {/* detail section */}
                    <div className='xl:ms-0 lg:ms-10 md:ms-5 sm:ms-0 lg:mt-0 md:mt-0 sm:mt-20 ms-0 mt-10'>
                        <div className='flex gap-4'>
                            <span className='text-red-600 font-bold'>US 12.45</span>
                            <span><del>US 20.44</del></span>
                            <span>discount: 20%</span>
                        </div>
                        <div className='mt-5'>
                            <div className='flex gap-16'>
                                <h1 className='text-2xl font-bold'>Product Name</h1>
                                <span className='flex items-center gap-2 cursor-pointer'>
                                    <FaRegHeart className='hover:text-red-700' /> Add to Wishlist
                                </span>
                            </div>
                        </div>
                        <div className='mt-5 flex gap-4 items-center'>
                            <p className='text-lg font-bold '>Size :</p>
                            <p className=' text-gray-600 mt-1'> 500ml</p>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-lg font-bold mb-2'>Key Ingredients:</h1>
                            <p className='mt-3 text-gray-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium dolorem atque
                                natus molestiae optio ullam totam quam repellendus recusandae dolores eius,
                                vitae sequi voluptas minima nihil! Animi, necessitatibus praesentium.
                            </p>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-lg font-bold mb-2'>Quantity:</h1>
                            <div className='flex gap-3'>
                                <button className='bg-gray-300 rounded-md px-5 py-2 font-bold hover:scale-105'>-</button>
                                <button className='font-bold'>1</button>
                                <button className='rounded-md px-4 py-2 font-bold bg-red-900 text-white hover:scale-105'>+</button>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <button className='bg-rose-900 text-white rounded-md w-60 py-2 flex justify-center gap-2 hover:bg-red-800'>
                                Add to Cart <IoCart className='text-2xl' />

                            </button>
                        </div>

                    </div>

                </div>

                {/* relative product */}
                <div className='mt-5'>
                    <div>
                        {/* header section */}
                        <div className='p-4 text-center mb-6' data-aos="fade-up">
                            <h1 className='text-xl font-bold'>Relative Product</h1>
                        </div>

                    </div>
                    <div>
                        <Slider {...settings}>
                            {
                                products.map((data) => (
                                    <div key={data.id}>
                                        <div className=' relative mx-4' data-aos="fade-up"
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
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ProductDetail