import React from 'react'
import { MY_SLIDER_LIST } from '../../utils/helper'
import Slider from 'react-slick'
const MyBlogs = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className='max-w-[1215px] px-4 mx-auto pt-9'>
      <Slider {...settings}>
        {MY_SLIDER_LIST.map((obj, i) => (
          <div key={i} className='p-6 border border-black rounded max-sm:p-3'>
            <h2 className='text-3xl font-semibold pb-2 max-sm:text-2xl max-sm:pb-1'>{obj.title}</h2>
            <p className='text-base font-medium max-sm:font-normal'>{obj.description}</p>
          </div>
        ))}
      </Slider>
      <button className='mt-8 bg-darkBlue px-3 py-2 rounded-lg ml-2'>
        <a href="/" className='text-white'>Back to Home</a>
      </button>
    </div>
  )
}

export default MyBlogs