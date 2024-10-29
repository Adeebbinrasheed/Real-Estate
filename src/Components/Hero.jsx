import React from "react";
import { Parallax } from "react-parallax";
import bgimage from "../assets/bghouse.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Select from "react-select";

const Hero = () => {
  const options = [
    { value: "all-cities", label: "All Cities" },
    { value: "chicago", label: "Chicago" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "miami", label: "Miami" },
    { value: "new-york", label: "New York" },
  ];
  return (
    <div>
      <Parallax
        bgImage={bgimage}
        strength={400}
        bgImageStyle={{ objectFit: "cover" }}
      >
        <div className="h-screen flex items-center bg-black bg-opacity-30 justify-center text-white">
          <div className="space-y-5 text-center px-4 md:px-8 lg:px-16">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif">
              Discover your place to live
            </h1>
            <p className="mt-4  md:text-xl font-thin font-sans">
              GET STARTED IN FEW CLICK
            </p>
            <div>
              <Tabs>
                <TabList className="border-b-0  text-green-500 ">
                  <Tab>All</Tab>
                  <Tab>For Rent</Tab>
                  <Tab>For Sale</Tab>
                </TabList>

                <TabPanel className="border-none">
                  <div className="flex flex-col md:flex-row bg-white text-black justify-center rounded-md md:items-center p-2 gap-4">
                    <Select
                      options={options}
                      defaultValue={options[0]}
                      className="md:w-24  "
                      classNamePrefix="react-select"
                    />

                    <input
                      type="text"
                      placeholder="Enter keyword..."
                      className="border p-2 md:pr-56 pr-10 outline-none rounded-md"
                    />
                    <button className="bg-[#1ac311] p-2 px-8 rounded-md text-white">
                      Search
                    </button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-col md:flex-row bg-white text-black justify-center rounded-md md:items-center p-2 gap-4">
                    <Select
                      options={options}
                      defaultValue={options[0]}
                      className="md:w-24  "
                      classNamePrefix="react-select"
                    />

                    <input
                      type="text"
                      placeholder="Enter keyword..."
                      className="border p-2 md:pr-56 pr-10 outline-none rounded-md"
                    />
                    <button className="bg-[#1ac311] p-2 px-8 rounded-md text-white">
                      Search
                    </button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-col md:flex-row bg-white text-black justify-center rounded-md md:items-center p-2 gap-4">
                    <Select
                      options={options}
                      defaultValue={options[0]}
                      className="md:w-24  "
                      classNamePrefix="react-select"
                    />

                    <input
                      type="text"
                      placeholder="Enter keyword..."
                      className="border p-2 md:pr-56 pr-10 outline-none rounded-md"
                    />
                    <button className="bg-[#1ac311] p-2 px-8 rounded-md text-white">
                      Search
                    </button>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
