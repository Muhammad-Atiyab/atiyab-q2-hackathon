import React from 'react'
import Image from 'next/image'
import bg from '../assets/Rectangle 102.png'
import logo from '../assets/logos.png'

const Update = () => {
  return (
    <div className='flex flex-col'>

    <div className='relative w-full h-[300px]' >

         <div><Image src={bg} alt='background' className='h-full w-full object-cover'/></div>

        <div className='absolute inset-0 w-full items-center flex flex-col px-10 gap-10 sm:py-4 md:py-8 py-12'> 
            <h2 className=' text-2xl md:text-4xl text-text text-center '>Get Latest News by Subscribing <br />Our NewsLetter</h2>
        <button className='bg-pinky wd-[10%] md:w-[20%] text-white px-2 md:px-8 py-2 md:py-4'> Subscribe Now </button></div>
    </div>

    <div className='px-72 w-full h-24'>
    <Image src={logo} alt='logos' className='h-full w-full object-cover'/>
    </div>
    </div>
  )
}

export default Update