import { LinearProgress } from '@mui/material'
import React from 'react'

function Prograssive_bar() {
 
  return (
    <div className='prograssive_bar grid gap-4'>
      
      <div className="grid grid-cols-8 items-center gap-4 max-[505px]:flex">
      <div className="info text-[14px] font-medium text-gray-500 max-[400px]:text-[12px]">Excellent</div>
      <div className="line col-span-6 mt-1 w-full">
      <LinearProgress
      sx={{height: 6, borderRadius:5,}}
      variant="determinate"
      value={80}
      color="success"
      className='w-[100%]'
    />
      </div>
      <div className="total_reviews text-[13px] text-gray-500 font-medium max-[400px]:text-[12px]">3029</div>
      </div>  
      
      <div className="grid grid-cols-8 items-center gap-4 max-[505px]:flex">
      <div className="info text-[14px] font-medium text-gray-500 max-[400px]:text-[12px]">Very Good</div>
      <div className="line col-span-6 mt-1 w-full">
      <LinearProgress
      sx={{height: 6, borderRadius:5,}}
      variant="determinate"
      value={70}
      color="success"
      className='w-[100%]'
    />
      </div>
      <div className="total_reviews text-[13px] text-gray-500 font-medium max-[400px]:text-[12px]">3029</div>
      </div>  
      
      <div className="grid grid-cols-8 items-center gap-4 max-[505px]:flex">
      <div className="info text-[14px] font-medium text-gray-500 max-[400px]:text-[12px]">Good</div>
      <div className="line col-span-6 mt-1 w-full">
      <LinearProgress
      sx={{height: 6, borderRadius:5,}}
      variant="determinate"
      value={55}
      color="primary"
      className='w-[100%]'
    />
      </div>
      <div className="total_reviews text-[13px] text-gray-500 font-medium max-[400px]:text-[12px]">3029</div>
      </div>  
      
      <div className="grid grid-cols-8 items-center gap-4 max-[505px]:flex">
      <div className="info text-[14px] font-medium text-gray-500 max-[400px]:text-[12px]">Avarage</div>
      <div className="line col-span-6 mt-1 w-full">
      <LinearProgress
      sx={{height: 6, borderRadius:5,}}
      variant="determinate"
      value={40}
      color="warning"
      className='w-[100%]'
    />
      </div>
      <div className="total_reviews text-[13px] text-gray-500 font-medium max-[400px]:text-[12px]">3029</div>
      </div>  
      
      <div className="grid grid-cols-8 items-center gap-4 max-[505px]:flex">
      <div className="info text-[14px] font-medium text-gray-500 max-[400px]:text-[12px]">Avarage</div>
      <div className="line col-span-6 mt-1 w-full">
      <LinearProgress
      sx={{height: 6, borderRadius:5,}}
      variant="determinate"
      value={30}
      color="warning"
      className='w-[100%]'
    />
      </div>
      <div className="total_reviews text-[13px] text-gray-500 font-medium max-[400px]:text-[12px]">3029</div>
      </div>  

    </div>
  )
}

export default Prograssive_bar
