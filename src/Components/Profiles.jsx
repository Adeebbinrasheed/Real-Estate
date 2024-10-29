import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiHomeLine, RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import man from "../assets/man.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import image from "../assets/bghouse.jpg";
import Select from "react-select/base";
import { FiFacebook } from "react-icons/fi";
import { PiWhatsappLogo } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";


const Profiles = () => {
  return (
    <>
    <div className="bg-gray-400 hidden md:block w-full h-20">

    </div>
    <div className="flex justify-center pt-14 py-10">
      <div className="flex flex-col justify-center gap-5 w-[90%] md:w-[80%] lg:w-[75%]">
        <div className="flex gap-1 font-light text-sm">
          <h1 className="flex justify-center items-center gap-2 text-[#269c11]">
            <RiHomeLine />
            <Link to="/"> Home</Link>
          </h1>
          <h1 className="flex justify-center items-center gap-2">
            <IoIosArrowForward />
            Our Agents
          </h1>
        </div>
        <h1 className="text-3xl font-serif">Our Agents</h1>
        <div className=" flex flex-col justify-center  md:flex-row gap-6">
          <div className="flex flex-col gap-6 w-full">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-md md:gap-7 p-5 space-y-3 md:space-y-0"
              >
                <img
                  src={man}
                  alt=""
                  className="object-cover h-64 w-full md:w-64 rounded-md"
                />
                <div className="flex flex-col w-full gap-5">
                  <div className="space-y-2">

                  <h1 className="font-serif text-lg md:text-xl">
                    Michelle Ramirez
                  </h1>
                  <p className="font-light text-sm md:text-base">
                    Company Agent at <span className="text-green-500">Realtory Inc.</span>
                  </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <h1 className="font-semibold">Office</h1>
                      <h1>7854985955</h1>
                    </div>
                    <hr />
                    <div className="flex justify-between ">
                      <h1 className="font-semibold">Mobile</h1>
                      <h1>7854985955</h1>
                    </div>
                    <hr />
                    <div className="flex justify-between ">
                      <h1 className="font-semibold">Fax</h1>
                      <h1>6434985955</h1>
                    </div>
                    <hr />
                    <div className="flex justify-between ">
                      <h1 className="font-semibold">Email</h1>
                      <h1>9884268155</h1>
                    </div>
                    <hr />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between space-y-4">
                    <div className="flex gap-4 text-lg">
                      <a href="#" aria-label="Facebook">
                        <FiFacebook />
                      </a>
                      <a href="#" aria-label="Twitter">
                        <RiTwitterXLine />
                      </a>
                      <a href="#" aria-label="WhatsApp">
                        <PiWhatsappLogo />
                      </a>
                      <a href="#" aria-label="LinkedIn">
                        <SlSocialLinkedin />
                      </a>
                    </div>
                    <div>
                      <h1 className="text-green-600">View Listings</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/4">
            <div className=" flex flex-col justify-center sticky top-14 gap-5">
              <div className="bg-white flex rounded-md flex-col space-y-6 p-5 py-6">
                <h1 className="text-2xl font-serif">Find Agent</h1>
                <input
                  type="text"
                  className="border rounded-md p-2"
                  placeholder="Enter Agent Name"
                />
                <Select
                  // options={options}
                  // defaultValue={options[0]}

                  classNamePrefix="react-select"
                />
                <Select
                  // options={options}
                  // defaultValue={options[0]}
                  className="  "
                  classNamePrefix="react-select"
                />
                <button className="bg-green-500 p-2">Search Agent</button>
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
    </>
  );
};

export default Profiles;
