import React from 'react'
import react from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Reviews_cart from '../Reviews_and_Prograssive_bar/Reviews_cart';
import AddtoCartBox from './AddtoCartBox';
function AddtoCart() {
  
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className="add_to_cart_container lg:px-20 px-[1rem]">
       <AddtoCartBox/>
    </div>
    <Reviews_cart/>
    <Footer/>
    </>
  )
}

export default AddtoCart
