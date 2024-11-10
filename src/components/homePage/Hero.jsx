import React from 'react'
import Slider from 'react-slick'
import { heroImageList } from '../../data/data';

const Hero = () => {
 

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  };

  return (
    <div className='container-fluid relative h-[500px] lg:mt-[105px] md:mt-[105px] sm:mt-[62px] mt-[64px]'>
      {/* hero background */}
      <div className='w-full  bg-orange-100 h-full absolute'></div>
      {/* hero section */}
      <div className='flex justify-center '>
        <div className='container absolute'>
          <Slider {...settings}>
            {
              heroImageList.map((data) => (
                <div key={data.id}>
                  <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1
                    items-center lg:gap-20 lg:py-20 md:py-20 sm:py-10 py-10 px-5'>
                    {/* //  text content section  */}
                    <div className='lg:text-left md:text-left sm:text-center text-center'>
                      <p className='text-xl text-gray-600' data-aos="zoom-in">{data.title_discount}</p>
                      <h1 className='font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl mt-2' data-aos="zoom-in">{data.title}</h1>
                      <p className='text-gray-700 text-sm mt-3' data-aos="zoom-in">{data.description}</p>
                      <div className='mt-6' data-aos="fade-up">
                        <button className='bg-gradient-to-r from-red-600 to-rose-900 rounded-full 
                          px-4 py-1 text-white hover:scale-105'>
                          Shop Now
                        </button>
                      </div>
                    </div>
                    {/* // image section  */}
                    <div data-aos="fade-up">
                      <img
                        src={data.image}
                        alt=""
                        className='lg:w-[350px] lg:h-[350] md:w-[350px] md:h-[350] 
                          sm:w-[250px] sm:h-[250px] w-[250px] h-[250px] object-cover
                          mx-auto '
                      />
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero