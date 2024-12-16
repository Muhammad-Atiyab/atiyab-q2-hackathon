import React from "react";
import Image from "next/image";
import lamp from "../assets/lamp.png";
import sofa from "../assets/sofa promotional header.png";
const Promotional = () => {
  return (
    <div>
      <div className=" flex gap-2 md:gap-4 h-autox sm:h-full bg-bottombg w-full mt-2">

{/* lamp */}
        <div className=" w-[30%] md:w-[20%] h-[300px] ">
          <Image src={lamp} alt="lamp" className="w-full h-full object-cover" />
        </div>

{/* text */}
        <div className="w-[70%] md:w-[40%] flex flex-col gap-2 sm:gap-4 items-start justify-center">
          <h5 className="text-pinky font-bold text-xs sm:text-sm">
            Best Furniture for Your Castle....
          </h5>
          <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text">
            New Furniture Collection Trends In 2020
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            laboriosam dolor dignissimos vero hic eveniet.
          </p>

          <button className="bg-pinky text-white px-6 py-2 rounded-sm md:px-8 md:py-4">
            
            Shop Now
          </button>
        </div>

{/* sofa */}
      <div className=" hidden sm:block w-[40%] py-12">
        <Image src={sofa} alt="sofa" className="w-full h-full object-cover" />
      </div>  
    </div>
    </div>
  );
};

export default Promotional;
