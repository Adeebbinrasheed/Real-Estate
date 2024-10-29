import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center bg-white py-8 gap-10'>
        <div>
            <h1 className='text-3xl lg:text-4xl '>NEWSLETTER SIGN UP</h1>
        </div>
        <div className='flex justify-center items-center flex-col md:flex-row gap-5'>
            <input type="text"placeholder='Enter your email' className='border outline-none p-2 w-72 sm:w-80 lg:w-96 rounded-lg'/>
            <button className='bg-green-400 text-white p-2 rounded-lg px-5'>Submit</button>
        </div>
    </div>
  )
}

export default NewsLetter