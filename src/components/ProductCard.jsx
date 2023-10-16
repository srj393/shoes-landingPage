import React from 'react'
import Slider from "react-slick";


const ProductCard = () => {
  var settings = {
    dots: true,
   
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:true,
    autoplay:true,
    autoplaySpeed:2000,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      
      <div>
      <div className=''>
        <Slider {...settings}>

     
            <div class="rounded-md border m-2">
              <img
                src="data:image/jpeg;base64,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"
                alt="Laptop"
                class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                  shoee Airmax v2
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <div class="mt-4">
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <div class="mt-3 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Colors : </span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                </div>
                <div class="mt-5 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Size : </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div class="rounded-md border m-2">
              <img
                src="data:image/jpeg;base64,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"
                alt="Laptop"
                class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                  Nike Airmax v3
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <div class="mt-4">
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <div class="mt-3 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Colors : </span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                </div>
                <div class="mt-5 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Size : </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>


            <div class="rounded-md border m-2">
              <img
                src="data:image/jpeg;base64,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"
                alt="Laptop"
                class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                  Nike Airmax v2
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <div class="mt-4">
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <div class="mt-3 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Colors : </span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                </div>
                <div class="mt-5 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Size : </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>


            <div class="rounded-md border m-2">
              <img
                src="data:image/jpeg;base64,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"
                alt="Laptop"
                class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                  Nike Airmax v2
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <div class="mt-4">
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <div class="mt-3 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Colors : </span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                </div>
                <div class="mt-5 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Size : </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>


            <div class="rounded-md border m-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEGyvIsZxSeXU4keraXBTeLOeDDxIcRocXw&usqp=CAU"
                alt="Laptop"
                class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                  Nike Airmax v2
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <div class="mt-4">
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <div class="mt-3 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Colors : </span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                </div>
                <div class="mt-5 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Size : </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>


            <div class="rounded-md border m-2">
              <img
                src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Laptop"
                class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                  Nike Airmax v2
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <div class="mt-4">
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <div class="mt-3 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Colors : </span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                </div>
                <div class="mt-5 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Size : </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>


            <div class="rounded-md border m-2">
              <img
                src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Laptop"
                class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                  Nike Airmax v2
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <div class="mt-4">
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <div class="mt-3 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Colors : </span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                </div>
                <div class="mt-5 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Size : </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div class="rounded-md border m-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEGyvIsZxSeXU4keraXBTeLOeDDxIcRocXw&usqp=CAU"
                alt="Laptop"
                class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                  Nike Airmax v2
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <div class="mt-4">
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <div class="mt-3 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Colors : </span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                </div>
                <div class="mt-5 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Size : </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div class="rounded-md border">
              <img
                src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Laptop"
                class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                  Nike Airmax v2
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <div class="mt-4">
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <div class="mt-3 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Colors : </span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                </div>
                <div class="mt-5 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Size : </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div class="rounded-md border">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEGyvIsZxSeXU4keraXBTeLOeDDxIcRocXw&usqp=CAU"
                alt="Laptop"
                class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                  Nike Airmax v2
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <div class="mt-4">
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <div class="mt-3 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Colors : </span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                  <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                </div>
                <div class="mt-5 flex items-center space-x-2">
                  <span class="block text-sm font-semibold">Size : </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    8 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    9 UK
                  </span>
                  <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    10 UK
                  </span>
                </div>
                <button
                  type="button"
                  class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
           
        </Slider>
      </div>
      </div>
    </div>
  )
}

export default ProductCard