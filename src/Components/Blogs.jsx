import React from 'react'
import house from '../assets/house4.jpg'

const Blogs = () => {
  return (
    <div className="flex flex-col justify-center items-start  bg-gray-100 px-3 lg:px-44 py-16 ">
    <div className=" max-w-xl space-y-2">
      <h1 className="text-4xl text-center md:text-start font-serif">Updates From Our blog</h1>
      <p className="text-xl text-gray-400 ">
        Choose from different listing templates and lay them out as lists or
        grids, full-width or boxed
      </p>
    </div>
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 pt-10 ">
    <div className="flex flex-col  bg-white  p-3 space-y-4 transition transform hover:-translate-y-3 hover:shadow-lg">
          <img src={house} alt="" className="h-48" />
          <div className='flex space-x-2'>
            <h1>March9,2010</h1>
            <h1>Real Estate</h1>
          </div>
        
          <h1 className="text-lg">15 Best Blogs To Follow About Real Estate</h1>
          
       
        <div>
          <p className="text-sm  line-clamp-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            alias voluptas temporibus suscipit error? Dolorum veritatis qui
            optio iste nam. Animi magnam officia quasi, obcaecati quam laborum
            facilis inventore eos.
          </p>
        </div>
        <h1>Continue reading</h1>
        <hr/>
        <h1>by martin john</h1>
      </div>
      <div className="flex flex-col  bg-white  p-3 space-y-4 transition transform hover:-translate-y-3 hover:shadow-lg">
          <img src={house} alt="" className="h-48" />
          <div className='flex space-x-2'>
            <h1>March9,2010</h1>
            <h1>Real Estate</h1>
          </div>
        
          <h1 className="text-lg">15 Best Blogs To Follow About Real Estate</h1>
          
       
        <div>
          <p className="text-sm  line-clamp-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            alias voluptas temporibus suscipit error? Dolorum veritatis qui
            optio iste nam. Animi magnam officia quasi, obcaecati quam laborum
            facilis inventore eos.
          </p>
        </div>
        <h1>Continue reading</h1>
        <hr/>
        <h1>by martin john</h1>
      </div>

      <div className="flex flex-col  bg-white  p-3 space-y-4 transition transform hover:-translate-y-3 hover:shadow-lg">
          <img src={house} alt="" className="h-48" />
          <div className='flex space-x-2'>
            <h1>March9,2010</h1>
            <h1>Real Estate</h1>
          </div>
        
          <h1 className="text-lg">15 Best Blogs To Follow About Real Estate</h1>
          
       
        <div>
          <p className="text-sm  line-clamp-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            alias voluptas temporibus suscipit error? Dolorum veritatis qui
            optio iste nam. Animi magnam officia quasi, obcaecati quam laborum
            facilis inventore eos.
          </p>
        </div>
        <h1>Continue reading</h1>
        <hr/>
        <h1>by martin john</h1>
      </div>
      <div className="flex flex-col  bg-white  p-3 space-y-4 transition transform hover:-translate-y-3 hover:shadow-lg">
          <img src={house} alt="" className="h-48" />
          <div className='flex space-x-2'>
            <h1>March9,2010</h1>
            <h1>Real Estate</h1>
          </div>
        
          <h1 className="text-lg">15 Best Blogs To Follow About Real Estate</h1>
          
       
        <div>
          <p className="text-sm  line-clamp-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            alias voluptas temporibus suscipit error? Dolorum veritatis qui
            optio iste nam. Animi magnam officia quasi, obcaecati quam laborum
            facilis inventore eos.
          </p>
        </div>
        <h1>Continue reading</h1>
        <hr/>
        <h1>by martin john</h1>
      </div>
    </div>
  </div>
  )
}

export default Blogs