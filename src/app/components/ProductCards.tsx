import React from "react";
import Image from "next/image";
import card1 from "../assets/product1.png";
import card2 from "../assets/product2.png";
import card3 from "../assets/product3.png";
import card4 from "../assets/product4.png";
import icon1 from "../assets/offericon1.png";
import icon2 from "../assets/offericon2.png"
import icon3 from "../assets/offericon3.png"
import icon4 from "../assets/offericon4.png"

const Products = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-20 py-20 ">
        <div>
          <h3 className="text-5xl text-blue-950 text-center">
            Featured Products
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-16">


          <div className="flex flex-col h-[500px] shadow-xl">
            <div className="flex flex-col w-100% h-[70%]">
              <Image
                src={card1}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center h-[30%] hover:bg-blue-700 gap-2 p-3">
              <h3 className="text-2xl font-bold text-pinky">Cantilever Chair</h3>
              <div className="flex gap-2 justify-center ">
                <div className="w-16 h-1 bg-[rgb(5,230,183)]"></div>
                <div className="w-16 h-1 bg-pinky"></div>
                <div className="w-16 h-1 bg-text"></div>
              </div>
              <h5 className="text-text text-sm "> Code: Y593201</h5>
              <h5 className="text-text text-sm ">$42.00</h5>
            </div>
          </div>


          <div className="flex flex-col h-[500px] shadow-xl">
            <div className="flex flex-col w-100% h-[70%]">
              <Image
                src={card2}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center h-[30%] hover:bg-blue-700 gap-2 p-3">
              <h3 className="text-2xl font-bold text-pinky">Cantilever Chair</h3>
              <div className="flex gap-2 justify-center ">
                <div className="w-16 h-1 bg-[#05e6b7]"></div>
                <div className="w-16 h-1 bg-pinky"></div>
                <div className="w-16 h-1 bg-text"></div>
              </div>
              <h5 className="text-text text-sm "> Code: Y593201</h5>
              <h5 className="text-text text-sm ">$42.00</h5>
            </div>
          </div>


          <div className="flex flex-col h-[500px] shadow-xl">
            <div className="flex flex-col w-100% h-[70%]">
              <Image
                src={card3}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center h-[30%] hover:bg-blue-700 gap-2 p-3">
              <h3 className="text-2xl font-bold text-pinky">Cantilever Chair</h3>
              <div className="flex gap-2 justify-center ">
                <div className="w-16 h-1 bg-[#05e6b7]"></div>
                <div className="w-16 h-1 bg-pinky"></div>
                <div className="w-16 h-1 bg-text"></div>
              </div>
              <h5 className="text-text text-sm "> Code: Y593201</h5>
              <h5 className="text-text text-sm ">$42.00</h5>
            </div>
          </div>


          <div className="flex flex-col h-[500px] shadow-xl">
            <div className="flex flex-col w-100% h-[70%]">
              <Image
                src={card4}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center h-[30%] hover:bg-blue-700 gap-2 p-3">
              <h3 className="text-2xl font-bold text-pinky">Cantilever Chair</h3>
              <div className="flex gap-2 justify-center ">
                <div className="w-16 h-1 bg-[#05e6b7]"></div>
                <div className="w-16 h-1 bg-pinky"></div>
                <div className="w-16 h-1 bg-text"></div>
              </div>
              <h5 className="text-text text-sm "> Code: Y593201</h5>
              <h5 className="text-text text-sm ">$42.00</h5>
            </div>
          </div>

      </div>



      <div className="flex flex-col gap-10 items-center">
          <h3 className="text-5xl text-blue-950 text-center">
           Latest Product
          </h3>
          <div className="flex text-text gap-7 justify-center"> 
            <a href="#" className="hover:text-pinky hover:underline"> New Arrival</a>
            <a href="#" className="hover:text-pinky hover:underline">Best Seller</a>
            <a href="#" className="hover:text-pinky hover:underline"> Featured Products </a>
            <a href="#" className="hover:text-pinky hover:underline"> Latest </a>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-x-12 gap-y-20 px-16">


          <div className="flex flex-col h-[450px] shadow-xl">
            <div className="flex flex-col bg-gray-300 hover:bg-white w-100% h-[80%]">
              <Image
                src={card3}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center h-[20%] gap-2 p-3">
              <div className="flex justify-between">
                <h5>Comfort Handy Craft</h5>
                <p>
                  <span className="text-text">$42.00 </span>
                  <span className="text-pinky line-through">  $65.00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[450px] shadow-xl">
            <div className="flex flex-col bg-gray-300 hover:bg-white w-100% h-[80%]">
              <Image
                src={card1}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center h-[20%] gap-2 p-3">
              <div className="flex justify-between">
                <h5>Comfort Handy Craft</h5>
                <p>
                  <span className="text-text">$42.00 </span>
                  <span className="text-pinky line-through">  $65.00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[450px] shadow-xl">
            <div className="flex flex-col bg-gray-300 hover:bg-white w-100% h-[80%]">
              <Image
                src={card4}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center h-[20%] gap-2 p-3">
              <div className="flex justify-between">
                <h5>Comfort Handy Craft</h5>
                <p>
                  <span className="text-text">$42.00 </span>
                  <span className="text-pinky line-through">  $65.00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[450px] shadow-xl">
            <div className="flex flex-col bg-gray-300 hover:bg-white w-100% h-[80%]">
              <Image
                src={card1}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center h-[20%] gap-2 p-3">
              <div className="flex justify-between">
                <h5>Comfort Handy Craft</h5>
                <p>
                  <span className="text-text">$42.00 </span>
                  <span className="text-pinky line-through">  $65.00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[450px] shadow-xl">
            <div className="flex flex-col bg-gray-300 hover:bg-white w-100% h-[80%]">
              <Image
                src={card2}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center h-[20%] gap-2 p-3">
              <div className="flex justify-between">
                <h5>Comfort Handy Craft</h5>
                <p>
                  <span className="text-text">$42.00 </span>
                  <span className="text-pinky line-through">  $65.00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[450px] shadow-xl">
            <div className="flex flex-col bg-gray-300 hover:bg-white w-100% h-[80%]">
              <Image
                src={card4}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center h-[20%] gap-2 p-3">
              <div className="flex justify-between">
                <h5>Comfort Handy Craft</h5>
                <p>
                  <span className="text-text">$42.00 </span>
                  <span className="text-pinky line-through">  $65.00</span>
                </p>
              </div>
            </div>
          </div>

    </div>


    <div>
          <h3 className="text-5xl text-text text-center">
           What Shopex Offer!
          </h3>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-20">


          <div className="flex flex-col items-center h-[350px] gap-10 shadow-xl p-10">
            <div className="flex flex-col w-[32%] h-[45%]">
              <Image
                src={icon1}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 h-[50%] text-center">
              <h3 className=" text-text text-2xl font-bold">24/7 Support</h3>
              <p className="text-gray-500 font-bold text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, minus impedit.</p>
            </div>
          </div>


          <div className="flex flex-col items-center h-[350px] gap-10 shadow-xl p-10">
            <div className="flex flex-col text-center w-[32%] h-[45%]">
              <Image
                src={icon2}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 h-[50%] text-center">
              <h3 className=" text-text text-2xl font-bold">24/7 Support</h3>
              <p className="text-gray-500 font-bold text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, minus impedit.</p>
            </div>
          </div>


          <div className="flex flex-col items-center h-[350px] gap-10 shadow-xl p-10">
            <div className="flex flex-col text-center w-[32%] h-[45%]">
              <Image
                src={icon3}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 h-[50%] text-center">
              <h3 className=" text-text text-2xl font-bold">24/7 Support</h3>
              <p className="text-gray-500 font-bold text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, minus impedit.</p>
            </div>
          </div>


          <div className="flex flex-col items-center h-[350px] gap-10 shadow-xl p-10">
            <div className="flex flex-col text-center w-[32%] h-[45%]">
              <Image
                src={icon4}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 h-[50%] text-center">
              <h3 className=" text-text text-2xl font-bold">24/7 Support</h3>
              <p className="text-gray-500 font-bold text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, minus impedit.</p>
            </div>
          </div>
    </div>



      </div>
    </div>
  );
};

export default Products;
