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
    <div className="flex flex-col gap-20 py-28">
    <div>
          <h3 className="text-5xl text-blue-950 text-center">
            Featured Products
          </h3>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-20">
      <div className="flex flex-col h-[500px] shadow-lg">
        <div className="flex flex-col w-[100%] h-[50%]">
          <Image
            src={card1}
            alt="card1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-left gap-2 pr-10 pl-6 pt-6 pb-9">
        <div className='flex justify-between text-xs'>
                <div className="flex gap-2"> <SlCalender className='text-sky-blue' /> 22 Aug 2022</div>
                <div className="flex gap-2"> <FaPenNib className='text-green' /> Comments </div>
              </div>
              <h4 className="text-text text-xl  hover:text-pinky">
                Top Essential Trends in 2021
              </h4>
              <p className="text-grey-text text-sm">
                We focus on ergonomics and meeting you where you work. It's
                only a keystroke away.
              </p>
              
              <div className='flex gap-2 mt-5 hover:text-pinky'>
                <button> Read More </button>
              </div>
        </div>
      </div>       

      <div className="flex flex-col h-[500px] shadow-lg">
        <div className="flex flex-col w-[100%] h-[50%]">
          <Image
            src={card2}
            alt="card2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-left gap-2 pr-10 pl-6 pt-6 pb-9">
        <div className='flex justify-between text-xs'>
                <div className="flex gap-2"> <SlCalender className='text-sky-blue' /> 22 Aug 2022</div>
                <div className="flex gap-2"> <FaPenNib className='text-green' /> Comments </div>
              </div>
              <h4 className="text-text text-xl  hover:text-pinky">
                Top Essential Trends in 2021
              </h4>
              <p className="text-grey-text text-sm">
                We focus on ergonomics and meeting you where you work. It's
                only a keystroke away.
              </p>
             
              <div className='flex gap-2 mt-5 hover:text-pinky'>
                <button> Read More </button>
              </div>
        </div>
      </div>       


      <div className="flex flex-col h-[500px] shadow-lg">
        <div className="flex flex-col w-[100%] h-[50%]">
          <Image
            src={card3}
            alt="card3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-left gap-2 pr-10 pl-6 pt-6 pb-9">
        <div className='flex justify-between text-xs'>
                <div className="flex gap-2"> <SlCalender className='text-sky-blue' /> 22 Aug 2022</div>
                <div className="flex gap-2"> <FaPenNib className='text-green' /> Comments </div>
              </div>
              <h4 className="text-text text-xl  hover:text-pinky">
                Top Essential Trends in 2021
              </h4>
              <p className="text-grey-text text-sm">
                We focus on ergonomics and meeting you where you work. It's
                only a keystroke away.
              </p>
              
              <div className='flex gap-2 mt-5 hover:text-pinky'>
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