import React from 'react'
import Prograssive_bar from './Prograssive_bar';

function Reviews_cart() {

    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

return (
<>
<div className="raviews_cart lg:px-20 px-[1rem] pt-4 pb-10">
<div className="heading_title py-3 border-b-[1px] border-gray-200 text-xl font-semibold cursor-pointer">Recent Reviews & Rating</div>
    <div className="row grid lg:grid-cols-2 lg:gap-4 gap-[3rem] items-center">
    <div className="col_review">
            {/* Review and Rating */}
<div className="reviews flex flex-col gap-4 mt-4">

<div className="review_card flex items-center gap-4">
<div className="user_img">
<img src="https://via.placeholder.com/70" alt="User Image" className='rounded-full  h-[70px] w-[70px] max-[400px]:h-[50px] max-[400px]:w-[50px]'/>
</div>
<div className="review_content">
<div className="user_name text-[14px] font-medium max-[400px]:text-[12px]">Imran Khan</div>
<div className="date_current text-xs font-semibold text-gray-400 py-[2px] max-[400px]:text-[10px]">{`${day} ${month} ${year}`}</div>
<div className="rating text-yellow-500 text-xs max-[400px]:text-[10px]">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fa-solid fa-star-half-stroke"></i>
    </div>
    <div className="message text-gray-500 text-[15px] font-normal max-[400px]:text-[13px]">
        Nice Product i Love This Shirt
    </div>
    </div>
    </div>


<div className="review_card flex items-center gap-4">
<div className="user_img">
<img src="https://via.placeholder.com/70" alt="User Image" className='rounded-full h-[70px] w-[70px] max-[400px]:h-[50px] max-[400px]:w-[50px]'/>
</div>
<div className="review_content">
<div className="user_name text-[14px] font-medium max-[400px]:text-[12px]">Imran Khan</div>
<div className="date_current text-xs font-semibold text-gray-400 py-[2px] max-[400px]:text-[10px]">{`${day} ${month} ${year}`}</div>
<div className="rating text-yellow-500 text-xs max-[400px]:text-[10px]">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fa-solid fa-star-half-stroke"></i>
    </div>
    <div className="message text-gray-500 text-[15px] font-normal max-[400px]:text-[13px]">
        Nice Product i Love This Shirt
    </div>
    </div>
    </div>


<div className="review_card flex items-center gap-4">
<div className="user_img">
<img src="https://via.placeholder.com/70" alt="User Image" className='rounded-full h-[70px] w-[70px] max-[400px]:h-[50px] max-[400px]:w-[50px]'/>
</div>
<div className="review_content">
<div className="user_name text-[14px] font-medium max-[400px]:text-[12px]">Imran Khan</div>
<div className="date_current text-xs font-semibold text-gray-400 py-[2px] max-[400px]:text-[10px]">{`${day} ${month} ${year}`}</div>
<div className="rating text-yellow-500 text-xs max-[400px]:text-[10px]">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fa-solid fa-star-half-stroke"></i>
    </div>
    <div className="message text-gray-500 text-[15px] font-normal max-[400px]:text-[13px]">
        Nice Product i Love This Shirt
    </div>
    </div>
    </div>


</div>
    </div>
    <div className="col_prograssive_line">
        <Prograssive_bar/>
    </div>
    </div>

</div>
</>
)
}

export default Reviews_cart
