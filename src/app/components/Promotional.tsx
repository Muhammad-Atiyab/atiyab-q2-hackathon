import React from "react";
import Image from "next/image";
import lamp from "../assets/lamp.png";
import sofa from "../assets/sofa promotional header.png";
const Promotional = () => {
  return (
    <div>
      <div className="flex gap-4 bg-bottombg w-full mt-2">
        <div className=" w-[20%] h-[300px]">
          <Image src={lamp} alt="lamp" className="w-full h-full object-cover" />
        </div>

        <div className="w-[40%] flex flex-col gap-10 items-start justify-center">
          <h5 className="text-pinky font-bold text-xs">
            Best Furniture for Your Castle
          </h5>
          <h2 className="text-5xl text-text ">
            
            New Furniture Collection Trends In 2020
          </h2>
          <p className="text-gray-500">
            
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            laboriosam dolor dignissimos vero hic eveniet.
          </p>
          <button className="bg-pinky w-[50%] text-white px-8 py-4">
            
            Shop Now
          </button>
        </div>
      

      <div className=" hidden sm:block w-[40%] py-12">
        <Image src={sofa} alt="sofa" className="w-full h-full object-cover" />
      </div>
    </div>
    </div>
  );
};

export default Promotional;
