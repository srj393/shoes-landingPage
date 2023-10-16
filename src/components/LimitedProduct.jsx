import React, { useState, useEffect }  from 'react'

const LimitedProduct = () => {
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          // You can add code to execute when the countdown reaches zero here.
        } else {
          if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds - 1);
          }
        }
      }, 1000);
  
      return () => clearInterval(timer); // Cleanup on unmount
    }, [minutes, seconds]);
  return (
    <div class="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
        <h1 className='text-3xl font-semibold '>Limited Deals <span className='bg-red-600 rounded-md p-1 text-white'> 
             {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
             </span>
              </h1>
              
        
    <div class="overflow-hidden">
      <div class="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
        <div class="items-start justify-between lg:flex lg:space-x-8">
          <div class="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
            <div class="w-full xl:flex xl:flex-row-reverse">
              <div class="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                <div class="relative flex items-center justify-center">
                  <img
                    alt="Product gallery 1"
                    src="https://images-na.ssl-images-amazon.com/images/I/41hYp%2BtAQRL.jpg"
                    width="650"
                    height="590"
                    class="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                  />
                </div>
                <div class="absolute top-2/4 z-10 flex w-full items-center justify-between">
                 
                </div>
              </div>
              <div class="flex gap-2 xl:flex-col">
                <div class="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 ">
                  <img
                    alt="Product 0"
                    src="https://m.media-amazon.com/images/I/511SRMFF+aL._AC_UY300_.jpg"
                    decoding="async"
                    loading="lazy"
                    class="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                  />
                </div>
                <div class="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 ">
                  <img
                    alt="Product 1"
                    src="https://m.media-amazon.com/images/I/51VRUERJ0vL._AC_UY1000_.jpg"
                    decoding="async"
                    loading="lazy"
                    class="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                  />
                </div>
                <div class="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 ">
                  <img
                    alt="Product 2"
                    src="https://images-na.ssl-images-amazon.com/images/I/41HncS1GY7L.SS700.jpg"
                    decoding="async"
                    loading="lazy"
                    class="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
            <div class="pb-5">
              <h2 class="text-lg font-semibold md:text-xl xl:text-2xl">
              Shoee JS Wings 3.0 Gold
              </h2>
              <p class="mt-4 font-semibold">$2499</p>
            </div>
            <div class="mb-2 pt-0.5">
              <h4 class="text-15px mb-3 font-normal capitalize text-opacity-70">
                available in:
              </h4>
              <ul class="flex flex-wrap space-x-2">
                <li class="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10 hover:bg-red-200">
                  8 UK
                </li>
                <li class="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10  hover:bg-red-200">
                  9 UK
                </li>
                <li class="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10  hover:bg-red-200">
                  10 UK
                </li>
              </ul>
            </div>
            <div class="pb-2"></div>
            <div class="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
              <button
                type="button"
                class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add To Cart
              </button>
              <div class="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-3"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                  <span class="block">Wishlist</span>
                </button>
                <div class="relative">
                  <button
                    type="button"
                    class="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="mr-3"
                    >
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                      <polyline points="16 6 12 2 8 6"></polyline>
                      <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                    <span class="block">Share</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="pt-6 xl:pt-8">
              <h3 class="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                Product Details:
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque voluptatibus optio ipsam. Suscipit maxime blanditiis incidunt voluptatibus laborum. Officiis vel omnis provident cum quibusdam modi voluptate distinctio impedit esse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default LimitedProduct