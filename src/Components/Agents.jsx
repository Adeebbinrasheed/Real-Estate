import React from "react";
import house1 from "../assets/house2.jpg";

const Agents = () => {
  return (
    <div className="flex flex-col justify-center items-start mt-10 bg-gray-100 px-3 lg:px-44 py-16 ">
      <div className=" max-w-xl space-y-2">
        <h1 className="text-4xl text-center md:text-start font-serif">Meet Our Agents</h1>
        <p className=" text-gray-400 text-transform: uppercase">
          Choose from different listing templates and lay them out as lists or
          grids, full-width or boxed
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 pt-10 ">
      <div className="flex flex-col justify-center items-center bg-white px-10  space-y-5 py-10 transition transform hover:-translate-y-1 hover:shadow-lg">
            <img src={house1} alt="" className="w-48 h-48 rounded-full " />
          <div className="flex flex-col items-center spac">
            <h1 className="text-lg">samuel melson</h1>
            <h1 className="font-medium">Fouder&ceo of,Realty Properties</h1>
          </div>
          <div>
            <p className="text-sm text-center line-clamp-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              alias voluptas temporibus suscipit error? Dolorum veritatis qui
              optio iste nam. Animi magnam officia quasi, obcaecati quam laborum
              facilis inventore eos.
            </p>
          </div>
          <h1>View Profile</h1>
        </div>

        <div className="flex flex-col justify-center items-center bg-white px-10  space-y-5 py-10 transition transform hover:-translate-y-1 hover:shadow-lg">
            <img src={house1} alt="" className="w-48 h-48 rounded-full " />
          <div className="flex flex-col items-center spac">
            <h1 className="text-lg">samuel melson</h1>
            <h1 className="font-medium">Fouder&ceo of,Realty Properties</h1>
          </div>
          <div>
            <p className="text-sm text-center line-clamp-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              alias voluptas temporibus suscipit error? Dolorum veritatis qui
              optio iste nam. Animi magnam officia quasi, obcaecati quam laborum
              facilis inventore eos.
            </p>
          </div>
          <h1>View Profile</h1>
        </div>

        <div className="flex flex-col justify-center items-center bg-white px-10  space-y-5 py-10 transition transform hover:-translate-y-3 hover:shadow-lg">
            <img src={house1} alt="" className="w-48 h-48 rounded-full " />
          <div className="flex flex-col items-center spac">
            <h1 className="text-lg">samuel melson</h1>
            <h1 className="font-medium">Fouder&ceo of,Realty Properties</h1>
          </div>
          <div>
            <p className="text-sm text-center line-clamp-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              alias voluptas temporibus suscipit error? Dolorum veritatis qui
              optio iste nam. Animi magnam officia quasi, obcaecati quam laborum
              facilis inventore eos.
            </p>
          </div>
          <h1>View Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default Agents;
