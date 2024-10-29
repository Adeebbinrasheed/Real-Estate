import React from "react";
import house1 from "../assets/house1.jpeg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.webp";

const Category = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-11">
      <div className="text-center max-w-lg space-y-3">
        <h1 className="text-4xl font-serif">Explore The Neightborhood</h1>
        <p className="text-gray-500 text-sm">
          THERE ARE DIFFERENT PROPERTY OPTIONS TO CHOOSE FROM, EACH SERVING A
          PURPOSE TO HELP YOU BUILD A FINISHED SITE.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-14 gap-5 justify-items-center">
        <div class="relative rounded-lg w-72 h-72 sm:w-80 sm:h-80 overflow-hidden shadow-lg ">
          <img class="w-full h-full object-cover" src={house1} alt="New York" />
          <div class="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-20 flex flex-col p-4">
            <span class="text-white font-bold text-sm">10 Properties</span>
            <span class="text-white text-lg font-bold">New York</span>
          </div>
        </div>

        <div class="relative rounded-lg w-72 h-72 sm:w-80 sm:h-80 md:h-full overflow-hidden shadow-lg lg:row-span-2 ">
          <img class="w-full h-full object-cover" src={house2} alt="Apartment" />
          <div class="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-20 flex flex-col  p-4">
            <span class="text-white font-bold text-sm">30 Properties</span>
            <span class="text-white text-lg font-bold">Apartment</span>
          </div>
        </div>

        <div class="relative rounded-lg w-72 h-72 sm:w-80 sm:h-80  overflow-hidden shadow-lg">
          <img class="w-full h-full object-cover" src={house3} alt="Miami" />
          <div class="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-20 flex flex-col  p-4">
            <span class="text-white font-bold text-sm">15 Properties</span>
            <span class="text-white text-lg font-bold">Miami</span>
          </div>
        </div>

        <div class="relative rounded-lg w-72 h-72 sm:w-80 sm:h-80 md:h-full  overflow-hidden shadow-lg lg:row-span-2">
          <img
            class="w-full h-full object-cover"
            src={house4}
            alt="Single Family Home"
          />
          <div class="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-20 flex flex-col p-4">
            <span class="text-white font-bold text-sm">11 Properties</span>
            <span class="text-white text-lg font-bold">Single Family Home</span>
          </div>
        </div>

        <div class="relative rounded-lg w-72 h-72 sm:w-80 sm:h-80 overflow-hidden shadow-lg">
          <img
            class="w-full h-full object-cover"
            src={house1}
            alt="Los Angeles"
          />
          <div class="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-20  flex flex-col p-4">
            <span class="text-white font-bold text-sm">14 Properties</span>
            <span class="text-white text-lg font-bold">Los Angeles</span>
          </div>
        </div>

        <div class="relative rounded-lg w-72 h-72 sm:w-80 sm:h-80 overflow-hidden shadow-lg">
          <img
            class="w-full h-full object-cover"
            src={house2}
            alt="Los Angeles"
          />
          <div class="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-20  flex flex-col p-4">
            <span class="text-white font-bold text-sm">14 Properties</span>
            <span class="text-white text-lg font-bold">Los Angeles</span>
          </div>
        </div>

        <div class="relative rounded-lg w-72 h-72 sm:w-80 sm:h-80 overflow-hidden shadow-lg">
          <img
            class="w-full h-full object-cover"
            src={house4}
            alt="Los Angeles"
          />
          <div class="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-20  flex flex-col  p-4">
            <span class="text-white font-bold text-sm">14 Properties</span>
            <span class="text-white text-lg font-bold">Los Angeles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
