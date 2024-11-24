import React from 'react'
import Navbar from '../Navbar/Navbar'
import HomePageMainSlider from '../HomePageSlider/HomePageMainSlider'
import HomePageProduct from '../Navbar/HomePageCard/HomePageProduct/HomePageProduct'
import Footer from '../Footer/Footer'



function HomePage() {
  return (
    <>
    <Navbar />
    <HomePageMainSlider/>
    <HomePageProduct SectionName={"papular categories"}/>
    <HomePageProduct SectionName={"Men's Shoes"}/>
    <HomePageProduct SectionName={"Men's Shirt"}/>
    <HomePageProduct SectionName={"Women's Sare"}/>
    <HomePageProduct SectionName={"Women's Dress"}/>
    <Footer/>
    </>
  )
}

export default HomePage
