import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import LimitedProduct from './components/LimitedProduct'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <LimitedProduct />
      <div>
        <h1 className='text-3xl font-semibold mt-11'>Exlusive for Men</h1>
        <ProductCard />
      </div>
      <div>
        <h1 className='text-3xl font-semibold mt-11'>Exlusive for Women</h1>
        <ProductCard />
      </div>
   
   <div className='mt-20'>
     <Footer />
    </div>
    </>
  )
}

export default App
