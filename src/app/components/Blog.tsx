import React from 'react'
import { FaPenNib } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Image from "next/image";
import card1 from "../assets/blog1.png";
import card2 from "../assets/blog2.png";
import card3 from "../assets/blog3.png";

const Blog = () => {
  return (
    <div>

    <div className="flex justify-center w-full">
    <div className="flex flex-col gap-5 sm:gap-10 py-6 sm:py-10">
      {/* Heading */}
    <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text text-center">
            Latest Blog
          </h3>
        </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-20">

        {/* Blog1 */}
      <div className="flex flex-col h-[500px] shadow-lg ">
        <div className="flex flex-col w-[100%] h-[50%]">
          <Image
            src={card1}
            alt="Blog"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col text-left gap-4 pr-3 sm:pr-4 md:pr-6 pl-3 pt-4 pb-2">
        <div className='flex justify-between text-xs'>
                <div className="flex gap-2"> <SlCalender className='text-sky-blue' /> 22 Aug 2022</div>
                <div className="flex gap-2"> <FaPenNib className='text-green' /> Comments </div>
              </div>
              <h4 className="text-text text-base sm:text-lg md:text-xl  hover:text-pinky">
                Top Essential Trends in 2021
              </h4>
              <p className="text-grey-text text-xs sm:text-sm">
                We focus on ergonomics and meeting you where you work. Its
                only a keystroke away.
              </p>
              
              <div className='flex gap-2 mt-4 hover:text-pinky'>
                <button> Read More </button>
              </div>
        </div>
      </div>       

        {/* Blog2 */}
        <div className="flex flex-col h-[500px] shadow-lg ">
        <div className="flex flex-col w-[100%] h-[50%]">
          <Image
            src={card2}
            alt="Blog"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col text-left gap-4 pr-3 sm:pr-4 md:pr-6 pl-3 pt-4 pb-2">
        <div className='flex justify-between text-xs'>
                <div className="flex gap-2"> <SlCalender className='text-sky-blue' /> 22 Aug 2022</div>
                <div className="flex gap-2"> <FaPenNib className='text-green' /> Comments </div>
              </div>
              <h4 className="text-text text-base sm:text-lg md:text-xl  hover:text-pinky">
                Top Essential Trends in 2021
              </h4>
              <p className="text-grey-text text-xs sm:text-sm">
                We focus on ergonomics and meeting you where you work. Its
                only a keystroke away.
              </p>
              
              <div className='flex gap-2 mt-4 hover:text-pinky'>
                <button> Read More </button>
              </div>
        </div>
      </div> 

        {/* Blog3 */}
        <div className="flex flex-col h-[500px] shadow-lg ">
        <div className="flex flex-col w-[100%] h-[50%]">
          <Image
            src={card3}
            alt="Blog"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col text-left gap-4 pr-3 sm:pr-4 md:pr-6 pl-3 pt-4 pb-2">
        <div className='flex justify-between text-xs'>
                <div className="flex gap-2"> <SlCalender className='text-sky-blue' /> 22 Aug 2022</div>
                <div className="flex gap-2"> <FaPenNib className='text-green' /> Comments </div>
              </div>
              <h4 className="text-text text-base sm:text-lg md:text-xl  hover:text-pinky">
                Top Essential Trends in 2021
              </h4>
              <p className="text-grey-text text-xs sm:text-sm">
                We focus on ergonomics and meeting you where you work. Its
                only a keystroke away.
              </p>
              
              <div className='flex gap-2 mt-4 hover:text-pinky'>
                <button> Read More </button>
              </div>
        </div>
      </div>    

      </div>

      </div>
      </div>

      </div>
);
};
export default Blog