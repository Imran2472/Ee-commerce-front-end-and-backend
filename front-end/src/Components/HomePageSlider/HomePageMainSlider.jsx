import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeMainPageData } from './HomemainPageData';

const items = HomeMainPageData.map((item)=> (
    <div key={item.Image} className=''>
        <img src={item.Image} alt="Home Main Page Slider Image" className='w-full h-[100vh] back bg-left-top'/>
    </div>
 ));

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={3000}
        animationType="fadeout"
        infinite
    />
);

export default MainCarousel;