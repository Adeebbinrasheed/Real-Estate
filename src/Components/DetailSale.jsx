import React, { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import image from "../assets/bghouse.jpg";
import { cardGallery } from "../data";
import { LiaBedSolid } from "react-icons/lia";
import { BiShower } from "react-icons/bi";
import { IoCarSportOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { Pagination as MUIPagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const DetailSale = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(cardGallery.length / itemsPerPage);

  const currentItems = cardGallery.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-5 flex justify-center py-5">
      <div className="flex flex-col justify-center gap-5 w-[90%] md:w-[80%] lg:w-[83%]">
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
        
        <div className="relative flex flex-col-reverse md:flex-row gap-10">
          <div className="md:w-1/4">

          <div className=" flex flex-col sticky top-0 gap-7">
            <div className="bg-white flex flex-col space-y-6 p-5 py-6">
              <h1 className="text-xl font-serif">Property Type</h1>
              <div>
                <div className="flex justify-between">
                  <Link className="flex gap-1 items-center text-green-500">
                    <IoIosArrowForward className="text-sm" />
                    Apartment
                  </Link>
                  <h1>(30)</h1>
                </div>
                <div className="flex justify-between">
                  <Link className="flex gap-1 items-center text-green-500">
                    <IoIosArrowForward className="text-sm " />
                    Single Family Home
                  </Link>
                  <h1>(3)</h1>
                </div>
                <div className="flex justify-between">
                  <Link className="flex gap-1 items-center text-green-500">
                    <IoIosArrowForward className="text-sm " />
                    Villa
                  </Link>
                  <h1>(1)</h1>
                </div>
                <div className="flex justify-between">
                  <Link className="flex gap-1 items-center text-green-500">
                    <IoIosArrowForward className="text-sm "/>
                    Loft
                  </Link>
                  <h1>(6)</h1>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col space-y-6 p-5 py-6">
              <h1 className="text-xl font-serif">Featured</h1>
              <Swiper  modules={[Navigation, Pagination]}
                navigation
                
                pagination={{ clickable: true }}
                 className="flex justify-center items-center w-full">
                <SwiperSlide>
                  <img src={image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image} alt="" />
                </SwiperSlide>
              </Swiper>

            </div>
            <div className="bg-white flex flex-col space-y-6 p-5 py-6">
              <h1 className="text-xl font-serif">Property Status</h1>
            <div className="space-y-3">

              <div className="flex justify-between">
                  <Link className="flex gap-1 items-center text-green-500">
                    <IoIosArrowForward className="text-sm " />
                    For Sale
                  </Link>
                  <h1>(10)</h1>
                </div>
                <div className="flex justify-between">
                  <Link className="flex gap-1 items-center text-green-500">
                    <IoIosArrowForward className="text-sm " />
                    For Rent
                  </Link>
                  <h1>(20)</h1>
                </div>
            </div>
            </div>
          </div>
          </div>
          <div>
          <h1 className="text-lg font-light">
          {cardGallery.length} Properties
        </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
            {currentItems.map((data, index) => (
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
                  <h1 className="text-sm text-transform: uppercase">
                    {data.category}
                  </h1>
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
            <div className="flex justify-center pt-9 ">
              <Stack spacing={2}>
                <MUIPagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "green",

                      padding: "18px",
                      border: "1px solid ",
                      borderRadius: "5px",
                    },
                    "& .Mui-selected": {
                      color: "white",
                      backgroundColor: "green",
                      borderColor: "white",
                    },
                  }}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSale;
