import React from 'react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";
import image from '../assets/bghouse.jpg'
import image1 from '../assets/bghouse2.jpg'
import { Link } from 'react-router-dom';
import Hero from './Hero';

const Banner = () => {
  return (
    <div className="relative w-full h-screen mt-11">
      <Swiper
        modules={[Autoplay,EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="absolute w-full h-full"
      >
        <SwiperSlide>
          <img src={image} alt="Homes" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="Homes" className="w-full h-full object-cover" />
        </SwiperSlide>

      </Swiper>

      <div className="absolute z-10 left-0 top-0 h-screen w-1/3 bg-white bg-opacity-40"></div> 
      <div className="absolute z-10 inset-0 flex items-center justify-start ml-[10%] pr-2 "> 
        <div className="bg-green-400 text-white py-10 px-3 max-w-md">
          <h1 className="text-4xl font-serif mb-5">Discover Our Finest Selection</h1>
          <p className="text-lg mb-5">
            Choose from different listing templates and lay them out as lists or grids, full-width or boxed.
          </p>
          <button className="bg-white text-green-500 font-bold px-6 py-2 rounded hover:bg-gray-100">
           <Link to='/'>Discover</Link> 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner