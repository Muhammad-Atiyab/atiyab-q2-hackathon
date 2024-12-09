import React from "react";
import Image from "next/image";
import card3 from "../assets/image 1171.png";
import card4 from "../assets/image 1172.png";

const Category = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-20 py-20 ">
        <div>
          <h3 className="text-5xl text-blue-950 text-center">
            Top Categories
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-16">
          <div className="flex flex-col h-[350px]">
            <div className="flex flex-col bg-white w-100% h-[80%] rounded-full hover:border-b-8 hover:border-b-indigo-600">
              <Image
                src={card3}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-text text-center h-[20%] gap-2 p-3">
              <h5>Mini LCW Chair</h5>
              <p>$56.00</p>
            </div>
          </div>

          <div className="flex flex-col h-[350px]">
            <div className="flex flex-col bg-white w-100% h-[80%] rounded-full hover:border-b-8 hover:border-b-indigo-600">
              <Image
                src={card4}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-text text-center h-[20%] gap-2 p-3">
              <h5>Mini LCW Chair</h5>
              <p>$56.00</p>
            </div>
          </div>

          <div className="flex flex-col h-[350px]">
            <div className="flex flex-col bg-white w-100% h-[80%] rounded-full hover:border-b-8 hover:border-b-indigo-600">
              <Image
                src={card3}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-text text-center h-[20%] gap-2 p-3">
              <h5>Mini LCW Chair</h5>
              <p>$56.00</p>
            </div>
          </div>

          <div className="flex flex-col h-[350px]">
            <div className="flex flex-col bg-white w-100% h-[80%] rounded-full hover:border-b-8 hover:border-b-indigo-600">
              <Image
                src={card4}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-text text-center h-[20%] gap-2 p-3">
              <h5>Mini LCW Chair</h5>
              <p>$56.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
