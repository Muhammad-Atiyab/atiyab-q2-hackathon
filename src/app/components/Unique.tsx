import React from "react";
import Image from "next/image";
import sofa from "../assets/uniquesofa.png";

const Unique = () => {
  return (
    <div>
      <div className="flex justify-center bg-footerbg w-full gap-2 mt-4">
        <div className=" hidden sm:block w-[40%] py-16">
          <Image src={sofa} alt="lamp" className="w-full h-full object-cover" />
        </div>

        <div className="w-[40%] flex flex-col gap-10 items-start justify-center">
          <h2 className="text-5xl text-text ">
            Unique Features of Latest and Trending Products
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 text-grey-500 items-center">
              <div className="h-[12px] w-[15px] bg-pinky rounded-full"></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur, laboriosam dolor dignissimos vero hic eveniet.
              </p>
            </div>

            <div className="flex gap-2 text-grey-500 items-center">
              <div className="h-[12px] w-[15px] bg-blue-700 rounded-full"></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur, laboriosam dolor dignissimos vero hic eveniet.
              </p>
            </div>
          <div className="flex gap-2 text-grey-500 items-center">
            <div className="h-[12px] w-[15px] bg-teal-500 rounded-full"></div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, laboriosam dolor dignissimos vero hic eveniet.
            </p>
          </div>
          </div>
        <button className="bg-pinky w-[50%] text-white px-8 py-4">
          Shop Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default Unique;
