import React from 'react'
import Image from 'next/image'
import bg from '../assets/Rectangle 102.png'
import logo from '../assets/logos.png'

const Update = () => {
  return (
    <div className='flex flex-col gap-6 sm:gap-10 md:gap-14 lg:gap-20'>

    <div className=' w-full h-[400px] sm:h-auto' >

         <div className='relative top-0 w-full h-full'><Image src={bg} alt='background' className='h-[50%] w-full object-cover'/>
         
         <div className='absolute top-[10%] lg:top-[25%] w-full items-center flex flex-col px-10 sm:px-16 gap-2 sm:gap-3 md:gap-5  sm:py-4 md:py-8 py-3 '> 
            <h2 className=' text-lg sm:2xl md:3xl lg:text-4xl text-text text-center '>Get Latest News by Subscribing <br />Our NewsLetter</h2>

        <button className='bg-pinky wd-[10%] md:w-[20%] text-white px-2 md:px-8 py-2 md:py-4'> Subscribe Now </button></div>
         </div>

       
    </div>


    <div className=' w-full h-[100px]'>
    <Image src={logo} alt='logos' className='h-full w-full object-contain'/>
    </div>
    </div>
  )
}

export default Update