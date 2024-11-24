import React from 'react'

function ProductCard({ data }) {
  return (
    <>
    
      <div className="card-col">
      <div className="cards border cursor-pointer shadow-md p-5 hover:shadow-2xl max-[400px]:p-2">
            <div className="image-card flex justify-center items-center">
                <img src={data.imageSrc} alt="" className='w-[150px] h-[140px] bg-fixed bg-cover bg-no-repeat rounded-xl max-[400px]:w-[100%] max-[400px]:h-[100%]'/>
            </div>
            <div className="details pt-2 relative max-[400px]:p-3">
              <p className='text-[12px] font-medium text-slate-500 py-1 max-[365px]:text-[10px] home_Pages_slider_discription'>{data.category}</p>
                <h5 className='sub-title font-medium text-slate-600
                home_Pages_slider_title lg:text-lg max-[400px]:text-[10px] max-[400px]:py-2'>{data.title}</h5>
                <p className='text-[12px] font-medium text-slate-500 py-1 max-[365px]:text-[10px] home_Pages_slider_discription'>{data.description}</p>
                <div className="price">
                    <span className=' text-base font-medium max-[365px]:text-[12px]'>${data.price}</span>
                </div>
                
                </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
