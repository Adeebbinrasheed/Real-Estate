import React from "react";
import { Parallax } from "react-parallax";
import house from "../assets/bghouse2.jpg";
import { serviceData } from "../data";
const HeroAbout = () => {
  return (
    <div className="h-screen">
      <Parallax
        bgImage={house}
        strength={-200}
        bgImageStyle={{ objectFit: "cover" }}
        className="relative"
      >
        <div className="flex justify-center items-center h-[400px] relative">
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="relative flex flex-col text-white items-center gap-2 justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif">
              About Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-center">
              Welcome to Houzez Real Estate Theme
            </p>
          </div>
        </div>
      </Parallax>

      <div className=" absolute bottom-14 bg-white shadow-2xl flex flex-col mx-44 justify-center items-center space-y-5  md:items-start py-11 px-5 lg:px-11">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 ">
          {serviceData.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 py-2 pr-2 ">
              <img src={item.image} alt="Service Icon" width={35} />
              <div className="flex flex-col space-y-2">
                <h1 className="font-semibold text-lg">{item.name}</h1>
                <p className="text-sm opacity-50">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
