import React from 'react'
import OrderAddress from './OrderAddress'
import StepperOrder from './StepperOrder'
import OrderCard from './OrderCard'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


function OrderMainPage() {
  return (
    <>
    <Navbar/>
       <div className='lg:px-20 px-[1rem]'>
    <OrderAddress/>
    <StepperOrder/>
    <OrderCard/>
    </div>
    <Footer/>
    </>
  )
}

export default OrderMainPage
