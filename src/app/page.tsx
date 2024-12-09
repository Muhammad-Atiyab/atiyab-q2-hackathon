import React from 'react'
import Products from './components/ProductCards'
import Blog from './components/Blog'
import Update from './components/Update'
import Promotional from './components/Promotional'
import Unique from './components/Unique'
import Discount from './components/Discount'
import Category from './components/Category'
const Home = () => {
  return (
    <div>
      {/* hero section (promotional) */}
      <Promotional/>
      
      {/* Products Section */}
      <Products/>

      {/* Unique section  */}
      <Unique/>

      {/* category section  */}
      <Category/>

      {/* Discount section  */}
      <Discount/>

      {/* subscribe update */}
      <Update/>

      {/* blog section  */}
      <Blog/>
      
    </div>
  )
}

export default Home