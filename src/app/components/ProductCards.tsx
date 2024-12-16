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
import Sale from "../assets/L-Sale.png"
import lard1 from "../assets/LCard1.png"
import lard2 from "../assets/LCard2.png"
import lard3 from "../assets/product1.png"
import lard4 from "../assets/LCard4.png"
import lard5 from "../assets/LCard5.png"
import lard6 from "../assets/product4.png"


const Products = () => {
  return (
    // three sections in one component
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 ">



{/* 1-Featured Products */}
      {/* heading */}
        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text text-center">
            Featured Products
          </h3>
        </div>

      {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-16">

          {/* card1 */}
          <div className="group flex flex-col h-[400px] shadow-xl hover:border hover:bg-cardbghover hover:border-cardbghover">

            {/* image */}
            <div className="w-100% h-[70%] bg-cardbg">
              <Image
                src={card1}
                alt="card"
                className="w-full h-full object-contain"
              />
            </div>

            {/* text */}
            <div className="flex flex-col text-center h-[30%] gap-2 p-3 relative">
              <h3 className=" p-name text-lg font-bold text-pinky">Cantilever Chair</h3>

              <div className="flex gap-2 justify-center ">
                <div className="w-4 h-1 bg-[rgb(5,230,183)]"></div>
                <div className="w-4 h-1 bg-pinky"></div>
                <div className="w-4 h-1 bg-text group-hover:bg-cardlight3hover "></div>
              </div>

              <h5 className="text-text text-sm group-hover:text-white"> Code: Y593201</h5>
              <h5 className="text-text text-sm group-hover:text-white">$42.00</h5>
{/* Button (Hidden by default, shown on hover) */}
      <button className="absolute bottom-32 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#08D15F] text-white font-semibold rounded opacity-0 group-hover:opacity-100 transition duration-300">
        View Details
      </button>
            </div>

            

          </div>

          {/* card2 */}
          <div className="group flex flex-col h-[400px] shadow-xl hover:border hover:bg-cardbghover hover:border-cardbghover">

            {/* image */}
            <div className="w-100% h-[70%] bg-cardbg">
              <Image
                src={card2}
                alt="card"
                className="w-full h-full object-contain"
              />
            </div>

            {/* text */}
            <div className="flex flex-col text-center h-[30%] gap-2 p-3 relative">
              <h3 className=" p-name text-lg font-bold text-pinky">Cantilever Chair</h3>

              <div className="flex gap-2 justify-center ">
                <div className="w-4 h-1 bg-[rgb(5,230,183)]"></div>
                <div className="w-4 h-1 bg-pinky"></div>
                <div className="w-4 h-1 bg-text group-hover:bg-cardlight3hover "></div>
              </div>

              <h5 className="text-text text-sm group-hover:text-white"> Code: Y593201</h5>
              <h5 className="text-text text-sm group-hover:text-white">$42.00</h5>
{/* Button (Hidden by default, shown on hover) */}
      <button className="absolute bottom-32 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#08D15F] text-white font-semibold rounded opacity-0 group-hover:opacity-100 transition duration-300">
        View Details
      </button>
            </div>

            

          </div>

          {/* card3 */}
          <div className="group flex flex-col h-[400px] shadow-xl hover:border hover:bg-cardbghover hover:border-cardbghover">

            {/* image */}
            <div className="w-100% h-[70%] bg-cardbg">
              <Image
                src={card3}
                alt="card"
                className="w-full h-full object-contain"
              />
            </div>

            {/* text */}
            <div className="flex flex-col text-center h-[30%] gap-2 p-3 relative">
              <h3 className=" p-name text-lg font-bold text-pinky">Cantilever Chair</h3>

              <div className="flex gap-2 justify-center ">
                <div className="w-4 h-1 bg-[rgb(5,230,183)]"></div>
                <div className="w-4 h-1 bg-pinky"></div>
                <div className="w-4 h-1 bg-text group-hover:bg-cardlight3hover "></div>
              </div>

              <h5 className="text-text text-sm group-hover:text-white"> Code: Y593201</h5>
              <h5 className="text-text text-sm group-hover:text-white">$42.00</h5>
{/* Button (Hidden by default, shown on hover) */}
      <button className="absolute bottom-32 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#08D15F] text-white font-semibold rounded opacity-0 group-hover:opacity-100 transition duration-300">
        View Details
      </button>
            </div>

            

          </div>

          {/* card4 */}
          <div className="group flex flex-col h-[400px] shadow-xl hover:border hover:bg-cardbghover hover:border-cardbghover">

            {/* image */}
            <div className="w-100% h-[70%] bg-cardbg">
              <Image
                src={card4}
                alt="card"
                className="w-full h-full object-contain"
              />
            </div>

            {/* text */}
            <div className="flex flex-col text-center h-[30%] gap-2 p-3 relative">
              <h3 className=" p-name text-lg font-bold text-pinky">Cantilever Chair</h3>

              <div className="flex gap-2 justify-center ">
                <div className="w-4 h-1 bg-[rgb(5,230,183)]"></div>
                <div className="w-4 h-1 bg-pinky"></div>
                <div className="w-4 h-1 bg-text group-hover:bg-cardlight3hover "></div>
              </div>

              <h5 className="text-text text-sm group-hover:text-white"> Code: Y593201</h5>
              <h5 className="text-text text-sm group-hover:text-white">$42.00</h5>
{/* Button (Hidden by default, shown on hover) */}
      <button className="absolute bottom-32 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#08D15F] text-white font-semibold rounded opacity-0 group-hover:opacity-100 transition duration-300">
        View Details
      </button>
            </div>

            

          </div>

      </div>





{/* 2-Lastest Products */}
      {/* heading + category */}
      <div className="flex flex-col gap-10 items-center">
        {/* heading */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text text-center">
           Latest Product
          </h3>
          {/* category */}
          <div className="flex text-text text-xs sm:text-base gap-7 justify-center"> 
            <a href="#" className="hover:text-pinky hover:underline"> New Arrival</a>
            <a href="#" className="hover:text-pinky hover:underline">Best Seller</a>
            <a href="#" className="hover:text-pinky hover:underline"> Featured Products </a>
            <a href="#" className="hover:text-pinky hover:underline"> Latest </a>
          </div>
        </div>

       {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 px-16">

          {/* Lastest card1 */}
          <div className="group h-[360px] shadow-xl hover:border hover:border-gray-200">
          {/* image */}
            <div className=" bg-cardbg group-hover:bg-white w-100% h-[80%]">
              <Image
                src={lard1 ? lard1 : card1}
                alt="card"
                className="w-full h-full object-contain "
              />
            </div>
    
          {/* text */}
            <div className="text-center h-[20%] gap-2 p-3 relative">
              <div className="flex justify-between">
                <h5 className="font-josefin">Comfort Handy Craft</h5>                
                <p>
                  <span className="text-text text-[14px]">$42.00 </span>
                  <span className="text-pinky line-through text-[12px]">$65.00</span>
                </p>
                {/* Sale tag (Hidden by default, shown on hover) */}
               <Image
                src={Sale}
                alt="sale"
                className="absolute w-[150px] h-[150px] bottom-56 left-[15%] transform -translate-x-1/2 py-2 opacity-0 group-hover:opacity-100 transition duration-300"
              />
              </div>
            </div>

          </div>




          {/* Lastest card2 */}
          <div className="group h-[360px] shadow-xl hover:border hover:border-gray-200">
          {/* image */}
            <div className=" bg-cardbg group-hover:bg-white w-100% h-[80%]">
              <Image
                src={lard2}
                alt="card"
                className="w-full h-full object-contain "
              />
            </div>
    
          {/* text */}
            <div className="text-center h-[20%] gap-2 p-3 relative">
              <div className="flex justify-between">
                <h5 className="font-josefin">Comfort Handy Craft</h5>                
                <p>
                  <span className="text-text text-[14px]">$42.00 </span>
                  <span className="text-pinky line-through text-[12px]">$65.00</span>
                </p>
                {/* Sale tag (Hidden by default, shown on hover) */}
               <Image
                src={Sale}
                alt="sale"
                className="absolute w-[150px] h-[150px] bottom-56 left-[15%] transform -translate-x-1/2 py-2 opacity-0 group-hover:opacity-100 transition duration-300"
              />
              </div>
            </div>

          </div>

          {/* Lastest card3 */}
          <div className="group h-[360px] shadow-xl hover:border hover:border-gray-200">
          {/* image */}
            <div className=" bg-cardbg group-hover:bg-white w-100% h-[80%]">
              <Image
                src={lard3}
                alt="card"
                className="w-full h-full object-contain "
              />
            </div>
    
          {/* text */}
            <div className="text-center h-[20%] gap-2 p-3 relative">
              <div className="flex justify-between">
                <h5 className="font-josefin">Comfort Handy Craft</h5>                
                <p>
                  <span className="text-text text-[14px]">$42.00 </span>
                  <span className="text-pinky line-through text-[12px]">$65.00</span>
                </p>
                {/* Sale tag (Hidden by default, shown on hover) */}
               <Image
                src={Sale}
                alt="sale"
                className="absolute w-[150px] h-[150px] bottom-56 left-[15%] transform -translate-x-1/2 py-2 opacity-0 group-hover:opacity-100 transition duration-300"
              />
              </div>
            </div>

          </div>
          
          {/* Lastest card4 */}
          <div className="group h-[360px] shadow-xl hover:border hover:border-gray-200">
          {/* image */}
            <div className=" bg-cardbg group-hover:bg-white w-100% h-[80%]">
              <Image
                src={lard4}
                alt="card"
                className="w-full h-full object-contain "
              />
            </div>
    
          {/* text */}
            <div className="text-center h-[20%] gap-2 p-3 relative">
              <div className="flex justify-between">
                <h5 className="font-josefin">Comfort Handy Craft</h5>                
                <p>
                  <span className="text-text text-[14px]">$42.00 </span>
                  <span className="text-pinky line-through text-[12px]">$65.00</span>
                </p>
                {/* Sale tag (Hidden by default, shown on hover) */}
               <Image
                src={Sale}
                alt="sale"
                className="absolute w-[150px] h-[150px] bottom-56 left-[15%] transform -translate-x-1/2 py-2 opacity-0 group-hover:opacity-100 transition duration-300"
              />
              </div>
            </div>

          </div>

          {/* Lastest card5 */}
          <div className="group h-[360px] shadow-xl hover:border hover:border-gray-200">
          {/* image */}
            <div className=" bg-cardbg group-hover:bg-white w-100% h-[80%]">
              <Image
                src={lard5}
                alt="card"
                className="w-full h-full object-contain "
              />
            </div>
    
          {/* text */}
            <div className="text-center h-[20%] gap-2 p-3 relative">
              <div className="flex justify-between">
                <h5 className="font-josefin">Comfort Handy Craft</h5>                
                <p>
                  <span className="text-text text-[14px]">$42.00 </span>
                  <span className="text-pinky line-through text-[12px]">$65.00</span>
                </p>
                {/* Sale tag (Hidden by default, shown on hover) */}
               <Image
                src={Sale}
                alt="sale"
                className="absolute w-[150px] h-[150px] bottom-56 left-[15%] transform -translate-x-1/2 py-2 opacity-0 group-hover:opacity-100 transition duration-300"
              />
              </div>
            </div>

          </div>

          {/* Lastest card6 */}
          <div className="group h-[360px] shadow-xl hover:border hover:border-gray-200">
          {/* image */}
            <div className=" bg-cardbg group-hover:bg-white w-100% h-[80%]">
              <Image
                src={lard6}
                alt="card"
                className="w-full h-full object-contain "
              />
            </div>
    
          {/* text */}
            <div className="text-center h-[20%] gap-2 p-3 relative">
              <div className="flex justify-between">
                <h5 className="font-josefin">Comfort Handy Craft</h5>                
                <p>
                  <span className="text-text text-[14px]">$42.00 </span>
                  <span className="text-pinky line-through text-[12px]">$65.00</span>
                </p>
                {/* Sale tag (Hidden by default, shown on hover) */}
               <Image
                src={Sale}
                alt="sale"
                className="absolute w-[150px] h-[150px] bottom-56 left-[15%] transform -translate-x-1/2 py-2 opacity-0 group-hover:opacity-100 transition duration-300"
              />
              </div>
            </div>

          </div>

    </div>





{/*3- Shopex offer */}
      {/* heading*/}
    <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text text-center">
           What Shopex Offer!
          </h3>
    </div>

      {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-16">

          {/* Offer1 */}
          <div className="flex flex-col items-center h-[360px] gap-6 shadow-xl p-6">
            {/* Image */}
            <div className="flex flex-col w-[60%] h-[60%]">
              <Image
                src={icon1}
                alt="card"
                className="w-full h-full object-contain "
              />
            </div>
            {/* text */}
            <div className="flex flex-col gap-5 h-[50%] text-center">
              <h3 className=" text-text text-2xl font-bold">24/7 Support</h3>
              <p className="text-gray-500 font-bold text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, minus impedit.</p>
            </div>  
          </div>


          {/* Offer2 */}
          <div className="flex flex-col items-center h-[360px] gap-6 shadow-xl p-6">
            {/* Image */}
            <div className="flex flex-col w-[60%] h-[60%] ">
              <Image
                src={icon2}
                alt="card"
                className="w-full h-full object-contain "
              />
            </div>
            {/* text */}
            <div className="flex flex-col gap-5 h-[50%] text-center">
              <h3 className=" text-text text-2xl font-bold">24/7 Support</h3>
              <p className="text-gray-500 font-bold text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, minus impedit.</p>
            </div>  
          </div>

          {/* Offer3 */}
          <div className="flex flex-col items-center h-[360px] gap-6 shadow-xl p-6">
            {/* Image */}
            <div className="flex flex-col w-[60%] h-[60%] ">
              <Image
                src={icon3}
                alt="card"
                className="w-full h-full object-contain "
              />
            </div>
            {/* text */}
            <div className="flex flex-col gap-5 h-[50%] text-center">
              <h3 className=" text-text text-2xl font-bold">24/7 Support</h3>
              <p className="text-gray-500 font-bold text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, minus impedit.</p>
            </div>  
          </div>

          {/* Offer4 */}
          <div className="flex flex-col items-center h-[360px] gap-6 shadow-xl p-6">
            {/* Image */}
            <div className="flex flex-col w-[60%] h-[60%]">
              <Image
                src={icon4}
                alt="card"
                className="w-full h-full object-contain "
              />
            </div>
            {/* text */}
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
