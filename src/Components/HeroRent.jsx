import React from 'react'
import { Parallax } from 'react-parallax'
import house from '../assets/house2.jpg'

const HeroRent = () => {
  return (
    <div className='h-auto'>
       <Parallax
        bgImage={house}
        strength={500}
        bgImageStyle={{ objectFit: "cover" }}
        className=""
      >
        <div className="flex justify-center items-center h-[400px] md:h-[600px] relative">
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="relative flex flex-col text-white items-center gap-4 justify-center">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-serif ">
             Our Properties For Rent
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-center font-light">
              DISCOVER EXCLUSIVE PLACE TO LIVE
            </p>
          </div>
        </div>
      </Parallax>
      <div>
        <input type="text"  placeholder='Enter Keyword'/>
      </div>

    </div>
  )
}

export default HeroRent