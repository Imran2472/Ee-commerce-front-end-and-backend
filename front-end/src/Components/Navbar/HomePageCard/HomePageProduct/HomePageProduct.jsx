// Import Swiper React components
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useContext, useState } from 'react';
import AliceCarousel, { Link } from 'react-alice-carousel';
import HomePageCard from '../HomePageCard.jsx'
import AppContext from '../../../../../context/AppContext';

function HomePageProduct({SectionName}) {
  const { product } = useContext(AppContext)
  const items = product.map((product)=> <div key={product._id} className='mb-10'>
    <a href={`product/${product._id}`}>
    <HomePageCard product={product}/>
    </a>
    </div>
    )
        const [ActiveIndex, SetActiveIndex] = useState(0);
        const slidePrev = ()=>{
          SetActiveIndex(ActiveIndex - 1)
        };
        const slideNext = ()=>{
          SetActiveIndex(ActiveIndex + 1)
        };
        // console.log(ActiveIndex)
        const SyncActiveIndex=(items)=>{
          SetActiveIndex(items)
        };

  const responsive = {
    0: { items: 2 },
    400: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
};





  return (
    <>

    <div className="sliderr lg:px-20 relative">
      <div className="headiing-buttons flex justify-between items-center px-[8px]">
        <div className="heading max-[400px]:pl-[9px]">
      <h1 className='text-2xl text-[var(--dark-white--)] font-medium max-[400px]:text-[14px] max-[400px]:font-bold'>{SectionName}</h1>
        </div>
        <div className="buttons_nav flex items-center gap-3">
        <button className='bg-primary text-[var(--white-main--)] text-2xl w-[25px] h-[25px] flex justify-center items-center rounded-full max-[400px]:w-[20px] max-[400px]:h-[20px]' onClick={slidePrev}>< ChevronLeftIcon className='text-[var(--white-main--)]'/></button>

        <button className='bg-primary text-[var(--white-main--)] text-2xl w-[25px] h-[25px] flex justify-center items-center rounded-full max-[400px]:w-[20px] max-[400px]:h-[20px]' onClick={slideNext}>< ChevronRightIcon className='text-[var(--white-main--)]'/></button>
        </div>
      
      </div>

        {/* /////////Slider area///////////////////// */}

<div className="Product_slider">
  <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayStrategy="none"
        infinite
        autoPlayInterval={2000}
        items={items}
        responsive={responsive}
        onSlideChanged={SyncActiveIndex}
        activeIndex={ActiveIndex}
        disableButtonsControls
        disableDotsControls
    />

</div>
 
    </div>
    
    </>
  )
}

export default HomePageProduct
