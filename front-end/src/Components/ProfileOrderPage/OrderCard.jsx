import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrderCard() {

const navigate = useNavigate()
  return (
    
    <div className="add_to_cart_row grid grid-cols-1 gap-4 pb-6">
        {/* 1st column  */}
    <div className="add_to_cart_col flex flex-col gap-4 cursor-pointer relative"
    onClick={()=> navigate(`/account/order/${5}`)}> 
        <div className='flex justify-between items-center border-[1px] border-gray-200 rounded-lg p-5 max-[380px]:pb-[2rem]' onClick={()=> navigate(`/account/order/${5}`)}>
        <div className='cart_item'>
        <div className="image_info flex items-center gap-4">
            <div className="image">
            <img src="https://img.freepik.com/free-psd/white-t-shirt-front-mockup_23-292935585.jpg?t=st=1723470649~exp=1723474249~hmac=7cc2842f9efacb113feebb38a1368f89177b5c0d7c4226855fe2dfa0d7e31a38&w=740" alt="" className='w-[120px] h-[120px] max-[380px]:h-[90px] max-[380px]:w-[90px]'/>
            </div>
            <div className="info_cart">
                <h1 className='title font-semibold text-slate-700 max-[380px]:text-[13px] max-[340px]:text-[12px]'>Men Slim Rise Black Jeans</h1>
                <div className="price flex items-center gap-3 pt-2 max-[380px]:pt-1">
                    <span className='text-gray-400 text-xs font-medium max-[380px]:text-[11px]'>Color : <span>Pink</span></span>
                    <span className='text-gray-400 text-xs font-medium max-[380px]:text-[11px]'>Size : <span>M</span></span>
                </div>
                <div className="text-[15px] max-[380px]:text-[13px] text-gray-600 font-medium py-1 flex items-center gap-2">
                    <span>Seller : </span>
                    <span>Imran Khan</span>
                </div>
                <div className="text-[13px] text-gray-400 font-medium max-[380px]:text-[11px]">RS 9500</div>

            </div>
        </div>
    </div>
    <div className="rate_stars max-[600px]:py-[0] max-[600px]:absolute bottom-2 right-2  bg-primary p-1 rounded-lg flex items-center gap-2 text-sm font-normal text-white cursor-pointer">
        <i className='fa-solid fa-star text-[9px] max-[600px]:text-[8px]'></i>
        <span className=' max-[600px]:text-[8px]'>Rate And Review Products</span>
    </div>
        </div>
    </div>

        {/* 2st column  */}
    <div className="add_to_cart_col flex flex-col gap-4 cursor-pointer relative"
    onClick={()=> navigate(`/account/order/${5}`)}> 
        <div className='flex justify-between items-center border-[1px] border-gray-200 rounded-lg p-5 max-[380px]:pb-[2rem]' onClick={()=> navigate(`/account/order/${5}`)}>
        <div className='cart_item'>
        <div className="image_info flex items-center gap-4">
            <div className="image">
            <img src="https://img.freepik.com/free-psd/white-t-shirt-front-mockup_23-292935585.jpg?t=st=1723470649~exp=1723474249~hmac=7cc2842f9efacb113feebb38a1368f89177b5c0d7c4226855fe2dfa0d7e31a38&w=740" alt="" className='w-[120px] h-[120px] max-[380px]:h-[90px] max-[380px]:w-[90px]'/>
            </div>
            <div className="info_cart">
                <h1 className='title font-semibold text-slate-700 max-[380px]:text-[13px] max-[340px]:text-[12px]'>Men Slim Rise Black Jeans</h1>
                <div className="price flex items-center gap-3 pt-2 max-[380px]:pt-1">
                    <span className='text-gray-400 text-xs font-medium max-[380px]:text-[11px]'>Color : <span>Pink</span></span>
                    <span className='text-gray-400 text-xs font-medium max-[380px]:text-[11px]'>Size : <span>M</span></span>
                </div>
                <div className="text-[15px] max-[380px]:text-[13px] text-gray-600 font-medium py-1 flex items-center gap-2">
                    <span>Seller : </span>
                    <span>Imran Khan</span>
                </div>
                <div className="text-[13px] text-gray-400 font-medium max-[380px]:text-[11px]">RS 9500</div>

            </div>
        </div>
    </div>
    <div className="rate_stars max-[600px]:py-[0] max-[600px]:absolute bottom-2 right-2  bg-primary p-1 rounded-lg flex items-center gap-2 text-sm font-normal text-white cursor-pointer">
        <i className='fa-solid fa-star text-[9px] max-[600px]:text-[8px]'></i>
        <span className=' max-[600px]:text-[8px]'>Rate And Review Products</span>
    </div>
        </div>
    </div>

        {/* 3st column  */}
    <div className="add_to_cart_col flex flex-col gap-4 cursor-pointer relative"
    onClick={()=> navigate(`/account/order/${5}`)}> 
        <div className='flex justify-between items-center border-[1px] border-gray-200 rounded-lg p-5 max-[380px]:pb-[2rem]' onClick={()=> navigate(`/account/order/${5}`)}>
        <div className='cart_item'>
        <div className="image_info flex items-center gap-4">
            <div className="image">
            <img src="https://img.freepik.com/free-psd/white-t-shirt-front-mockup_23-292935585.jpg?t=st=1723470649~exp=1723474249~hmac=7cc2842f9efacb113feebb38a1368f89177b5c0d7c4226855fe2dfa0d7e31a38&w=740" alt="" className='w-[120px] h-[120px] max-[380px]:h-[90px] max-[380px]:w-[90px]'/>
            </div>
            <div className="info_cart">
                <h1 className='title font-semibold text-slate-700 max-[380px]:text-[13px] max-[340px]:text-[12px]'>Men Slim Rise Black Jeans</h1>
                <div className="price flex items-center gap-3 pt-2 max-[380px]:pt-1">
                    <span className='text-gray-400 text-xs font-medium max-[380px]:text-[11px]'>Color : <span>Pink</span></span>
                    <span className='text-gray-400 text-xs font-medium max-[380px]:text-[11px]'>Size : <span>M</span></span>
                </div>
                <div className="text-[15px] max-[380px]:text-[13px] text-gray-600 font-medium py-1 flex items-center gap-2">
                    <span>Seller : </span>
                    <span>Imran Khan</span>
                </div>
                <div className="text-[13px] text-gray-400 font-medium max-[380px]:text-[11px]">RS 9500</div>

            </div>
        </div>
    </div>
    <div className="rate_stars max-[600px]:py-[0] max-[600px]:absolute bottom-2 right-2  bg-primary p-1 rounded-lg flex items-center gap-2 text-sm font-normal text-white cursor-pointer">
        <i className='fa-solid fa-star text-[9px] max-[600px]:text-[8px]'></i>
        <span className=' max-[600px]:text-[8px]'>Rate And Review Products</span>
    </div>
        </div>
    </div>
        </div>
  )
}

export default OrderCard
