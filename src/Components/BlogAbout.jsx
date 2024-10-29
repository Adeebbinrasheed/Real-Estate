import React from 'react'
import { LuUser2 } from "react-icons/lu";
import man from '../assets/man.jpg'

const BlogAbout = () => {
  return (
    <div className="flex flex-col justify-center bg-white items-center px-4 xl:px-10 mt-14 py-20 space-y-14">
    <div className="text-center space-y-3">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif">From Our Blog</h1>
      <p className="text-lg sm:text-xl text-gray-500">You are only an email away from our support</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-9  xl:px-36">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="relative w-full max-w-xs h-56 rounded-sm shadow-md">
         
          <img src={man} alt="Team Member" className="w-full h-full object-cover " />
          
          <div className="absolute flex flex-col justify-end pb-4 px-5 text-white  bg-black bg-opacity-20 hover:bg-opacity-5 inset-0">
            <h2 className="">March 9, 2016
            Business</h2>
            
            <div className="font-serif font-medium">
            Skills That You Can Learn In The Real Estate Market
            </div>
          </div>
          <h1 className='text-xs p-2 text-gray-600 flex gap-1  items-center'><LuUser2 />by Martin Moore</h1>
        </div>
      ))}
    </div>
  </div>
  )
}

export default BlogAbout