import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const handleClick = () => {
    setIsopen(!isopen);
  };
  return (
    <div className="flex justify-around items-center p-4 pt-7 lg:bg-transparent lg:text-white bg-white text-black absolute top-0 left-0 w-full z-10">
      <button onClick={handleClick} className="lg:hidden text-2xl">
        {isopen ? <MdOutlineClose /> : <RiMenu2Fill />}
        <h1></h1>
      </button>
      <div>
        <Link to="/">
          <h1 className="text-3xl  font-semibold font-sans">Housez</h1>
        </Link>
      </div>
      <div className="hidden lg:block space-x-5 ">
        <Link to="/" className="hover:text-green-300 font-sans hover:font-semibold">
          HOME
        </Link>
        <Link to="/about" className="hover:text-green-300 font-san hover:font-semibold">
          ABOUT US
        </Link>
        <Link
          to="/forRent"
          className="hover:text-green-300 hover:font-semibold"
        >
          FOR RENT
        </Link>
        <Link
          to="/forSale"
          className="hover:text-green-300 hover:font-semibold"
        >
          FOR SALE
        </Link>
        <Link to='/ourAgents' className="hover:text-green-300 hover:font-semibold">
          OUR AGENTS
        </Link>
        <Link to='/blog' className="hover:text-green-300 hover:font-semibold">BLOG</Link>
        <Link to='/contact' className="hover:text-green-300 hover:font-semibold">
          CONTACT
        </Link>
      </div>

      {isopen && (
        <div className="absolute top-full left-0 w-full h-screen bg-white text-black flex flex-col items-center pt-20 space-y-10 py-5 md:hidden">
          <Link to="/" className="hover:text-green-300" onClick={handleClick}>
            HOME
          </Link>
          <Link
            to="/about"
            className="hover:text-green-300"
            onClick={handleClick}
          >
            ABOUT US
          </Link>
          <Link
            to="/forRent"
            className="hover:text-green-300"
            onClick={handleClick}
          >
            FOR RENT
          </Link>
          <Link
            to="/forSale"
            className="hover:text-green-300"
            onClick={handleClick}
          >
            FOR SALE
          </Link>
          <Link className="hover:text-green-300" onClick={handleClick}>
            OUR AGENTS
          </Link>
          <Link className="hover:text-green-300" onClick={handleClick}>
            BLOG
          </Link>
          <Link className="hover:text-green-300" onClick={handleClick}>
            CONTACT
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
