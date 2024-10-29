import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { PiWhatsappLogo } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col py-10 space-y-10">
        
        <div className="flex flex-col lg:flex-row justify-center px-6 gap-10 lg:gap-36">
         
          <div className="max-w-md space-y-3">
            <h1 className="text-3xl font-bold">Housez</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              incidunt ipsam earum perspiciatis, nam quia a aliquam cumque eveniet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:flex lg:flex-row lg:gap-36">
            <div className="space-y-7">
              <h1 className="text-xl font-serif">Discover</h1>
              <div className="flex flex-col gap-2">
                {["Miami", "Los Angeles", "Chicago", "New York"].map((city) => (
                  <Link key={city}>
                    <div className="flex gap-1 items-center">
                      <IoIosArrowForward />
                      <h1>{city}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-7">
              <h1 className="text-xl font-serif">Lifestyle</h1>
              <div className="flex flex-col gap-2">
                {["Apartment", "Single Family Home", "Villa", "Loft"].map((type) => (
                  <Link key={type}>
                    <div className="flex gap-1 items-center">
                      <IoIosArrowForward />
                      <h1>{type}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-around px-6 space-y-3 md:space-y-0 lg:space-x-60">
          <h1 className="text-center md:text-left">&copy; Houzez - All rights reserved</h1>
          <div className="flex gap-4 text-lg">
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="Twitter"><RiTwitterXLine /></a>
            <a href="#" aria-label="WhatsApp"><PiWhatsappLogo /></a>
            <a href="#" aria-label="LinkedIn"><SlSocialLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
