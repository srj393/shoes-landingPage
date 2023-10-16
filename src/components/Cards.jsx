import React from 'react'



const Cards = () => {
    return (
        <div className=' '>
           
        <div className="flex min-h-screen items-center justify-center">
     
          
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 m-3">
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                         src="https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white ">Sports</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-cyan-600">See More</button>
                    </div>
                </div>
                {/* <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">Beyond Builder</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div> */}
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OUwE_9tQ6lU69m4K9HvUdglXdYPMf-GKwg&usqp=CAU" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">Snekers</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-cyan-600" >See More</button>
                    </div>
                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RzmilH73li9e07kXmLYFSCRonkNIR46hdQ&usqp=CAU" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">loafers</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-cyan-600" >See More</button>
                    </div>
                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                         src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">Formal</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-cyan-600" >See More </button>
                    </div>
                    
                    
                </div>
              
             
            </div>
        
        </div>
        </div>

    )
}

export default Cards