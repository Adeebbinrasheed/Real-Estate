import React from "react";
import { serviceData } from "../data";

const Services = () => {
  return (
    <div className="flex flex-col bg-white justify-center items-center space-y-5  md:items-start py-28 px-5 lg:px-44">
      <h1 className="text-5xl font-serif mb-10">Our Services</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 ">
        {serviceData.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 py-2 pr-2 ">
            <img src={item.image} alt="Service Icon" width={40} />
            <div className="flex flex-col space-y-2">
              <h1 className="font-semibold text-xl">{item.name}</h1>
              <p className="text-sm opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
