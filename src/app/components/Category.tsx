import React from "react";
import Image from "next/image";
import card1 from "../assets/product3.png";
import card3 from "../assets/image 1171.png";
import card4 from "../assets/image 1172.png";
import card2 from "../assets/product1.png";


const Category = () => {
  return (

    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 ">  

        {/* heading */}
        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text text-center">
            Top Categories
          </h3>
        </div>



        {/* Caterogy cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-16">
          
          {/* Category1 */}
          <div className="group flex flex-col h-[350px]">
            {/* image */}
            <div className="flex flex-col items-center justify-center w-100% h-[80%] rounded-full bg-cardbg group-hover:border-b-8 group-hover:border-b-indigo-600">
              <Image
                src={card1}
                alt="card"
                className="w-[70%] h-full object-contain"
              />
            </div>
            {/* text */}
            <div className="flex flex-col text-text text-center h-[20%] gap-2 p-3 relative">
              <h5 className="font-josefin text-xl">Mini LCW Chair</h5>
              <p className="font-josefin text-base">$56.00</p>
              <button className="absolute bottom-28 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#08D15F] text-white font-semibold rounded opacity-0 group-hover:opacity-100 transition duration-300">
        View Details
      </button>
            </div>
          </div>


          {/* Category2 */}
          <div className="group flex flex-col h-[350px]">
            {/* image */}
            <div className="flex flex-col items-center justify-center w-100% h-[80%] rounded-full bg-cardbg group-hover:border-b-8 group-hover:border-b-indigo-600">
              <Image
                src={card2}
                alt="card"
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
            {/* text */}
            <div className="flex flex-col text-text text-center h-[20%] gap-2 p-3 relative">
              <h5 className="font-josefin text-xl">Mini LCW Chair</h5>
              <p className="font-josefin text-base">$56.00</p>
              <button className="absolute bottom-28 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#08D15F] text-white font-semibold rounded opacity-0 group-hover:opacity-100 transition duration-300">
        View Details
      </button>
            </div>
          </div>

          {/* Category3 */}
          <div className="group flex flex-col h-[350px]">
            {/* image */}
            <div className="flex flex-col items-center justify-center w-100% h-[80%] rounded-full bg-cardbg group-hover:border-b-8 group-hover:border-b-indigo-600">
              <Image
                src={card3}
                alt="card"
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
            {/* text */}
            <div className="flex flex-col text-text text-center h-[20%] gap-2 p-3 relative">
              <h5 className="font-josefin text-xl">Mini LCW Chair</h5>
              <p className="font-josefin text-base">$56.00</p>
              <button className="absolute bottom-28 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#08D15F] text-white font-semibold rounded opacity-0 group-hover:opacity-100 transition duration-300">
        View Details
      </button>
            </div>
          </div>

          {/* Category4 */}
          <div className="group flex flex-col h-[350px]">
            {/* image */}
            <div className="flex flex-col items-center justify-center w-100% h-[80%] rounded-full bg-cardbg group-hover:border-b-8 group-hover:border-b-indigo-600">
              <Image
                src={card4}
                alt="card"
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
            {/* text */}
            <div className="flex flex-col text-text text-center h-[20%] gap-2 p-3 relative">
              <h5 className="font-josefin text-xl">Mini LCW Chair</h5>
              <p className="font-josefin text-base">$56.00</p>
              <button className="absolute bottom-28 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#08D15F] text-white font-semibold rounded opacity-0 group-hover:opacity-100 transition duration-300">
        View Details
      </button>
            </div>
          </div>

        </div>

      </div>
    </div>

  );
};

export default Category;
