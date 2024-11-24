import React from 'react'

function FiltersCard() {
  return (
    <div>
      <div className="filters border rounded-xl shadow-lg sticky top-0 p-5">
        <h1 className="heading text-lg text-gray-600 font-semibold ">Filters</h1>
        <div className="order_status text-base text-gray-500 font-semibold py-2">Order Status</div>
        <ul className='flex flex-col gap-2'>
            <li className='flex items-center gap-3'>
                <input type="checkbox" id="ontheway" name="order_status" value="ontheway" checked/>
                <label htmlFor="ontheway" className='text-[14px] text-gray-600 font-medium cursor-pointer'>On The Way</label>
            </li>
            <li className='flex items-center gap-3'>
                <input type="checkbox" id="Delivered" name="order_status" value="Delivered" />
                <label htmlFor="Delivered" className='text-[14px] text-gray-600 font-medium cursor-pointer'>Delivered</label>
            </li>
            <li className='flex items-center gap-3'>
                <input type="checkbox" id="Cancelled" name="order_status" value="Cancelled" />
                <label htmlFor="Cancelled" className='text-[14px] text-gray-600 font-medium cursor-pointer'>Cancelled</label>
            </li>
            <li className='flex items-center gap-3'>
                <input type="checkbox" id="Returned" name="order_status" value="Returned" />
                <label htmlFor="Returned" className='text-[14px] text-gray-600 font-medium cursor-pointer'>Returned</label>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default FiltersCard
