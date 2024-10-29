import React from 'react';
import house from '../assets/house2.jpg';
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaPinterest, FaGoogle } from "react-icons/fa";
import man from '../assets/man.jpg'

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 xl:px-10 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif">Meet Our Team</h1>
        <p className="text-lg sm:text-xl text-gray-500">You are only an email away from our support</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:px-36">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative group w-full max-w-xs h-96 overflow-hidden rounded-sm shadow-md">
           
            <img src={man} alt="Team Member" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-90 p-4 space-y-3 transform translate-x-full transition-transform duration-300 group-hover:translate-x-0">
              <h2 className="text-xl font-semibold">Kathryn Wallace</h2>
              <p className="text-gray-500 text-sm">Chair Manager</p>
              <p className="text-gray-600 text-xs">
                Intelligent, ambitious, energetic and proactive perfectionist. Working with Kathryn Wallace is a signature of success.
              </p>
              <div className="flex gap-3 mt-2 text-gray-700">
                <FiFacebook />
                <FiTwitter />
                <FiLinkedin />
                <FaPinterest />
                <FaGoogle />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
