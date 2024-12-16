import React from 'react'
import Image from 'next/image'
import sofa from '../assets/discountsofa.png'
import { FaCheck } from "react-icons/fa6";

const Discount = () => {
  return (
    <div className='flex flex-col gap-2 sm:gap-3 py-8 sm:py-10'>

    {/* heading and category */}
        <div className='flex flex-col gap-6 justify-center text-center' >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-text text-center'>Discount Item</h2>
            <div className='flex gap-4 justify-center'>
                <a href="#" className='text-text text-base hover:text-pinky hover:underline'> Wooden Chair </a>
                <a href="#" className='text-text text-base hover:text-pinky hover:underline'> Plastic Chair </a>
                <a href="#" className='text-text text-base hover:text-pinky hover:underline'> Sofa Collection</a>
            </div>
        </div>

    {/* content */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">

      {/* text */}
        <div className="w-[80%] sm:w-[40%] flex flex-col gap-2 sm:gap-4 md:gap-5 lg:gap-6 items-start justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text ">
            20% Discount of all Products
          </h2>
          
          <h5 className="text-pinky font-bold text-sm sm:text-base md:text-lg">
            Eams Sofa Compact
          </h5>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            laboriosam dolor dignissimos vero hic eveniet.
          </p>

          <div className='flex gap-4 text-gray-500 text-xs sm:text-sm md:text-base'>

            <div className='flex flex-col gap-2 md:gap-4'>
                <div className='flex gap-2'>
                <FaCheck/>
                <p>Material expose like Metals</p>
                </div>
                <div className='flex gap-2'>
                <FaCheck/>
                <p>Simple neutral colors</p>
                </div>
            </div>

            <div className='flex flex-col gap-2 md:gap-4'>
                <div className='flex gap-2'>
                <FaCheck/>
                <p>Clear lines and Geometric Figure</p>
                </div>
                <div className='flex gap-2'>
                <FaCheck/>
                <p>Material expose like Metals</p>
                </div>
            </div>
          </div>

          <button className="bg-pinky md:w-[50%] text-white px-2 py-2 md:px-8 md:py-4">
            Shop Now
          </button>
        </div>
      
      {/* Image */}
      <div className=" w-[80%] sm:w-[40%] sm:py-12">
        <Image src={sofa} alt="sofa" className="w-full h-full object-contain" />
      </div>

    </div>

    
    </div>
  )
}

export default Discount