import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import man from "../assets/man.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import image from "../assets/bghouse.jpg";
import Select from "react-select/base";

// const details=[{
//     image:man,
//     name:'Michelle Ramirez',
//     company:' Realtory Inc.',
//     office:'789 456 3210',
//     fax:'126546165',
//     email:michelle@houzez.com,
// }]

const Profiles = () => {
  return (
    <div className="flex justify-center pt-20 py-10">
      <div className="flex flex-col justify-center gap-5 w-[90%] md:w-[80%] lg:w-[75%]">
        <div className="flex gap-1 font-light text-sm">
          <h1 className="flex justify-center items-center gap-2 text-[#269c11]">
            <RiHomeLine />
            <Link to="/"> Home</Link>
          </h1>
          <h1 className="flex justify-center items-center gap-2">
            <IoIosArrowForward />
            For Sale
          </h1>
        </div>
        <h1 className="text-3xl font-serif">For Sale</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row bg-white space-y-3 rounded-lg md:space-y-0 md:gap-7 p-4">
              <img src={man} alt="" className="object-cover h-60" />
              <div className="flex flex-col gap-2">
                <h1 className="font-serif">Michelle Ramirez</h1>
                <p className="font-light">Company Agent at Realtory Inc.</p>
                <div>
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Office</h1>
                    <h1 className="">7854985955</h1>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Mobile</h1>
                    <h1>7854985955</h1>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white space-y-3 md:space-y-0 md:gap-7 p-4">
              <img src={man} alt="" className="object-cover h-60" />
              <div className="flex flex-col gap-2">
                <h1 className="font-serif">Michelle Ramirez</h1>
                <p className="font-light">Company Agent at Realtory Inc.</p>
                <div>
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Office</h1>
                    <h1 className="">7854985955</h1>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Mobile</h1>
                    <h1>7854985955</h1>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className=" flex flex-col sticky top-0 gap-7">
              <div className="bg-white flex flex-col space-y-6 p-5 py-6">
                <h1 className="text-xl font-serif"></h1>
                <input
                  type="text"
                  className="border rounded-md p-2"
                  placeholder="Enter Agent Name"
                />
                <Select
                  // options={options}
                  // defaultValue={options[0]}
                  className="md:w-24  "
                  classNamePrefix="react-select"
                />
                <Select
                  // options={options}
                  // defaultValue={options[0]}
                  className="md:w-24  "
                  classNamePrefix="react-select"
                />
              </div>
              <div className="bg-white flex flex-col space-y-6 p-5 py-6">
                <h1 className="text-xl font-serif">Featured Properties</h1>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="flex justify-center items-center w-full"
                >
                  <SwiperSlide>
                    <img src={image} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
