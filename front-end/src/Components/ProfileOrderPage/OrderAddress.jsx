import React from 'react'

function OrderAddress() {
  return (
    <div className='py-6'>
    <div className="col_address_form max-[723px]:w-[100%] border-[1px] border-gray-200 rounded-xl shadow-lg pb-10">
          <div className="content flex flex-col gap-2">
              <div className="boxes p-5 border-b-[1px] border-gray-200">
                 <div className="text-[22px] font-semibold text-gray-800 mb-3">Delivery Address</div>
                  <div className="name text-[15px] font-medium text-gray-800">imran</div>
                  <div className="address text-[13px] text-gray-400 font-medium py-[3px]">House No 49 Sector No 1 Street No 04 Pakhtoonabad Karachi Pakistan</div>
                  <div className="num_title text-[13px] text-gray-800 font-semibold">Phone Number</div>
                  <div className="phone text-[12px] text-gray-500 font-medium pt-[3px]">+92 300 2472740</div>
              </div>
              
          </div>
      </div>
  </div>
  )
}

export default OrderAddress
