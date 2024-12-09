import { MdSend } from 'react-icons/md'; // Importing the send icon
import { FaRegCopyright } from 'react-icons/fa'; // Importing the copyright icon

export default function Footer() {
  return (
    <footer className="bg-footerbg text-footertext">
      {/* Main footer */}
      <div className="flex flex-col gap-4 py-16 px-28">
        <div className="grid grid-cols-1 gap-x-3 justify-center md:grid-cols-2 lg:grid-cols-4 sm:gap-10">
          {/* Exclusive Section */}
          <div className=" flex flex-col gap-6">
            <h3 className="font-bold text-black text-2xl">Hekto</h3>
            <div className="flex items-center justify-start py-2">
              <input className=' bg-bottombg p-2 rounded' type="text" placeholder='Enter Email Address' />
              <button className='bg-pinky p-2 text-white rounded '> Sign Up </button>
            </div>
            <div className='text-left'>
            <label className="text-lg">Contact info</label>
            <p className='text-base'> 17 Princess road, London, Greater London NW1 8Jr, 5Rw.</p>
            </div>
          </div>

          {/* Support Section */}
          <div className="flex flex-col gap-6">
            <p className="font-medium text-black text-xl">Categories</p>
            <div className="flex flex-col gap-2">
              <label> Laptops and computers</label>
              <label>Camera and Photography</label>
              <label>Smart Phones and Tablets</label>
              <label> WaterProof HeadPhones</label>
              <label> Furniture </label>
            </div>
          </div>

          {/* Account Section */}
          <div className="flex flex-col gap-6">
            <p className="font-medium text-black text-xl">Customer Care</p>
            <div className="flex flex-col gap-2">
              <label>My Account</label>
              <label>Discount</label>
              <label>Cart</label>
              <label>Wishlist</label>
              <label> Order Tracking</label>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-6">
            <p className="font-medium text-black text-xl">Pages</p>
            <div className="flex flex-col gap-2">
              <label>Blog</label>
              <label>Browse the Shop</label>
              <label>Category</label>
              <label>Pre-built Pages</label>
              <label> WanCommerce Pages </label>
            </div>
          </div>
          </div>
          </div>

      {/* Bottom footer */}

        <div className="flex h-12 bg-bottombg text-bottomtext justify-center items-center">
          <FaRegCopyright />
          <p className="text-base">Copyright Rimel 2022. All rights reserved</p>
        </div>
      
    </footer>
  );
}