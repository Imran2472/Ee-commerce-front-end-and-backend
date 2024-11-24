import React from 'react'

function HomePageCard({product}) {
  return (
        <>
           <div className="card_main px-3 w-full cursor-pointer">
           <div className="card border-[1px]">
            <figure className='pt-5'>
                <img
                src={product.imageSrc} className='w-[180px] h-[180px] bg-cover bg-no-repeat bg-center max-[400px]:w-[100px] max-[400px]:h-[100px]'/>
            </figure>
            <div className="p-5 max-[400px]:p-3 max-[400px]:pt-3">
            <div className="cat text-sm font-medium text-gray-400 m-0 pt-2 ">{product.category}</div>
                <h2 className="card-title home_Pages_slider_title text-sm font-semibold max-[400px]:text-[12px] pt-2 text-slate-600">{product.title}</h2>
            </div>
            </div>
           </div>
        </>
  )
}

export default HomePageCard
