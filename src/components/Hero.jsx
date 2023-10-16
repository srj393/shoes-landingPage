import React from 'react'
import heroImg from '../assets/heroImg.png'

const Hero = () => {
  return (
<div className="relative w-full bg-purple-200">
  <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 
    lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
     
     <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl
       lg:text-6xl bg-gradient-to-r bg-clip-text  text-transparent 
       from-indigo-500 via-red-500 to-green-500
       animate-text  ">
        Shoee
      </h1>


      <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl
       lg:text-6xl animate-fade-right animate-infinite animate-duration-[5000ms]">
        Stylish Shoes For You
      </h1>
      <p className="mt-8 text-lg text-gray-700 animate-fade-right animate-infinite animate-duration-[5000ms] ">
      Every shoe has a story
      </p>

  <button
  className='p-4 text-3xl text-indigo-800 
   animate-wiggle-more animate-infinite animate-duration-[5000ms]'>Explore</button>
     
        
    </div>
  <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 top-20 ">
      <img
        className=" animate-bounce  "
        src={heroImg}
        alt=""
        
      />
    </div>
  </div>
</div>

  )
}

export default Hero