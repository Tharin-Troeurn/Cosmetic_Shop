import React from 'react'
import { categoryList } from '../../data/data.js'
import Slider from 'react-slick'

const CategoryShop = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
    ]
  }
  return (
    <div className='container-fluid mt-5'>
      <div className='container'>
        {/* header section */}
        <div className='p-4 text-center mb-6' data-aos="fade-up">
          <h1 className='text-xl font-bold'>Shop By Category</h1>
        </div>
        {/* body section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {
              categoryList.map((data) => (

                <div key={data.id}>
                  <a href="#" className="no-outline">
                    <img
                      src={data.image}
                      alt={data.name}
                      className='w-[80px] h-[80px] object-cover mx-auto bg-gray-100 
                          rounded-full p-3 hover:scale-105'
                    />
                    <p className='text-sm font-bold text-nowrap text-center'>{data.name}</p>
                  </a>
                  
                </div>
               
              ))
            }
            
          </Slider>
        </div>
        
      </div>
    </div>
  )
}

export default CategoryShop;
