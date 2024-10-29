import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import image from "../assets/bghouse.jpg";
import { cardGallery } from "../data";
import { LiaBedSolid } from "react-icons/lia";
import { BiShower } from "react-icons/bi";
import { IoCarSportOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";

import "swiper/swiper-bundle.css";

const Featured = () => {
  const [next, setNext] = useState(3);
  const imagePerRow = 3;

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-9">
      <div className="flex flex-col justify-center items-center max-w-xl text-center">
        <h1 className=" text-3xl md:text-5xl font-serif">
          Our Featured Exclusives
        </h1>
        <p className="text-gray-500 text-center text-transform: uppercase">
          Choose from different listing templates and lay them out as lists or
          grids, full-width or boxed.
        </p>
      </div>

      {/* Grid container */}
      <div className="w-full flex justify-center items-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] md:w-[80%] lg:w-[70%]">
          {cardGallery?.slice(0, next).map((data, index) => (
            <div key={index} className="w-full bg-white pb-5 rounded-lg">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="flex justify-center items-center w-full h-80 "
              >
                <SwiperSlide>
                  <img
                    src={data.img1}
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
              </Swiper>

              <div className="flex flex-col justify-center items-center space-y-3 pt-5">
                <h1 className="text-xl line-clamp-2 text-center">
                  {data.name}
                </h1>
                <h1 className="text-lg">{data.price}</h1>
                <h1 className="text-sm text-transform: uppercase">{data.category}</h1>
                <div className="flex space-x-3 font-light">
                  <h1 className="flex justify-center items-center gap-2 ">
                    <LiaBedSolid className="text-xl" />4
                  </h1>
                  <h1 className="flex justify-center items-center gap-2 ">
                    <BiShower className="text-xl" />2
                  </h1>
                  <h1 className="flex justify-center items-center gap-2 ">
                    <IoCarSportOutline className="text-xl" />1
                  </h1>
                  <h1 className="flex justify-center items-center gap-2 ">
                    <TfiRulerAlt2 className="text-xl" />
                    1200 m²
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load more button */}
      {next < cardGallery?.length && (
        <div className="flex justify-center mt-6">
          <button
            className="  border-green-500 border text-green-500 hover:bg-green-500 hover:text-white py-2 px-4 rounded"
            onClick={handleMoreImage}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Featured;
