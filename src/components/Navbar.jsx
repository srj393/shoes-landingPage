import React from 'react'

const Navbar = () => {
  return (
    <div className="relative w-full bg-white">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <div className="inline-flex items-center space-x-2">
        <span>
        
        </span>
        <span className="font-bold">Shoee</span>
      </div>
      <div className="hidden lg:block">
        <ul className="ml-12 inline-flex space-x-8">
          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-red-400"
            >
              Home
             
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-red-400"
            >
              Men
              
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-red-400"
            >
              Women
              
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-red-400"
            >
              About
              
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-red-400"
            >
              Contact
              
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semiboldanimate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent 
               font-black  animate-text"
            >
              %Offers%
              
            </a>
          </li>
        </ul>
      </div>
      <div className="flex grow justify-end ">
      <div className=' animate-rotate-y animate-duration-[3000ms] animate-infinite'>
        
         <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png?ga=GA1.1.901286760.1697292927" alt=""
       width={50} height={550}
        />
       </div>
        
       
      </div>
     
    </div>
  </div>
  
  )
}

export default Navbar