import React from 'react'
import AccountCard from './AccountCard'
import FiltersCard from './FiltersCard'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function AccountOrderMainPage() {
  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-3 gap-3 lg:px-20 px-[1rem] py-[3rem] max-[760px]:grid-cols-2 max-[650px]:grid-cols-1'>
        <div className='col-span-2 max-[765px]:col-span-1'>
        <AccountCard/>
        </div>
        <div>
        <FiltersCard/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default AccountOrderMainPage
