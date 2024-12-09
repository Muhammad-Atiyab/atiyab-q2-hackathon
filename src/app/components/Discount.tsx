import React from 'react'
import Image from 'next/image'
import sofa from '../assets/discountsofa.png'
import { FaCheck } from "react-icons/fa6";

const Discount = () => {
  return (
    <div className='flex flex-col gap-5 py-12'>
    

    {/* heading */}
        <div className='flex flex-col gap-8 justify-center text-center' >
            <h2 className='text-text text-5xl'>Discount Item</h2>
            <div className='flex gap-4 justify-center'>
                <a href="#" className='text-text text-base hover:text-pinky hover:underline'> Wooden Chair </a>
                <a href="#" className='text-text text-base hover:text-pinky hover:underline'> Plastic Chair </a>
                <a href="#" className='text-text text-base hover:text-pinky hover:underline'> Sofa Collection</a>
            </div>
        </div>

        <div className="flex gap-4 w-full justify-center">

        <div className="w-[40%] flex flex-col gap-10 items-start justify-center">
          <h2 className="text-5xl text-text ">
            20% Discount of all Products
          </h2>
          <h5 className="text-pinky font-bold text-sm">
            Eams Sofa Compact
          </h5>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            laboriosam dolor dignissimos vero hic eveniet.
          </p>
          <div className='flex gap-4'>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2'>
                <FaCheck/>
                <p>Material expose like Metals</p>
                </div>
                <div className='flex gap-2'>
                <FaCheck/>
                <p>Simple neutral colors</p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
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
          <button className="bg-pinky w-[50%] text-white px-8 py-4">
            
            Shop Now
          </button>
        </div>
      

      <div className="hidden sm:block  w-[40%] py-12">
        <Image src={sofa} alt="sofa" className="w-full h-full object-cover" />
      </div>
    </div>
    </div>
  )
}

export default Discount