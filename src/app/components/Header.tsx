"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { GoChevronDown, GoHeart } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      {/* top */}
      <nav className="bg-topbg hidden sm:block h-10 border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-evenly mx-auto">
          {/* div1 */}
          <div className=" hidden max-w-screen-xl md:flex flex-wrap items-center justify-between mx-auto">
            <p className=" py-2 px-3 text-toptext font-josefinsans font-semibold flex items-center">
              <MdOutlineMailOutline className="mr-1" />
              mhhasanul@gmail.com
            </p>
            <p className=" py-2 px-3 text-toptext font-josefinsans font-semibold flex items-center">
              <LuPhoneCall className="mr-1" /> H(12345)67890
            </p>
          </div>
          {/* div2 */}
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <p className=" py-2 px-3 text-toptext font-josefinsans font-semibold flex items-center">
              English <GoChevronDown className="ml-1" />
            </p>
            <p className=" py-2 px-3 text-toptext font-josefinsans font-semibold flex items-center">
              USD <GoChevronDown className="ml-1" />
            </p>
            <a
              href="#"
              className=" py-2 px-3 font-sans text-toptext font-josefinsans font-semibold flex items-center"
              aria-current="page"
            >
              Login <RxPerson className="ml-1" />
            </a>
            <a
              href="#"
              className=" py-2 px-3 text-toptext font-semibold flex items-center"
              aria-current="page"
            >
              Wishlist <GoHeart className="ml-1" />
            </a>
            <a
              href="#"
              className=" py-2 px-3 text-toptext font-josefinsans font-semibold flex items-center"
              aria-current="page"
            >
              <FiShoppingCart className="ml-1" />
            </a>
          </div>
        </div>
      </nav>

      {/* main-Navbar */}

      <div>
        <div className="mt-5 flex flex-col gap-4  items-center justify-center md:flex-row md:justify-evenly w-full">
          {/* hekto */}
          <div className="font-bold text-[#0D0E43] text-4xl">
            <h3>Hekto</h3>
          </div>

          {/* nav */}
          <div className="">
            <ul className=" flex flex-col gap-2 md:flex-row md:gap-4 w-auto text-[#0D0E43] ">
              <li>
                <Link href="/" className="flex hover:text-pinky">
                  
                  Home
                  <GoChevronDown className="ml-1 mt-[6px]" />
                </Link>
              </li>
              <li>
                <Link href="/pages" className="hover:text-pinky">
                  
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-pinky">
                  
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-pinky">
                  
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-pinky">
                  
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pinky">
                  
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 w-[25 0px] md:w-[317px] border-2 border-[#E7E6EF] rounded">
            <input
              className="opacity-40 w-full"
              placeholder="What are you looking for?"
            />
            <div className="text-2xl p-2 bg-pinky text-gray-900">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
