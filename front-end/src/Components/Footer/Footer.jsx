import React from 'react'

function Footer() {
  return (
   <>
   <div className="container_footer bg-slate-700 lg:px-20 px-[1rem] py-8">
    <div className="row grid grid-cols-4 gap-2 max-[759px]:grid-cols-3 max-[759px]:gap-5 max-[500px]:grid-cols-2 max-[380px]:grid-cols-1">
        <div className="col_footer">
            <h1 className='text-white text-xl font-normal py-4'>Company</h1>
            <ul className="text-white text-xs font-normal grid grid-cols-1 gap-2 capitalize">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Partners</a></li>
            </ul>
        </div>
        <div className="col_footer">
            <h1 className='text-white text-xl font-normal py-4'>Solution</h1>
            <ul className="text-white text-xs font-normal grid grid-cols-1 gap-2 capitalize">
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Commerce</a></li>
                <li><a href="#">Inisight</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Partners</a></li>
            </ul>
        </div>
        <div className="col_footer">
            <h1 className='text-white text-xl font-normal py-4'>Documentation</h1>
            <ul className="text-white text-xs font-normal grid grid-cols-1 gap-2 capitalize">
                <li><a href="#">Guides</a></li>
                <li><a href="#">API Status</a></li>
            </ul>
        </div>
        <div className="col_footer">
            <h1 className='text-white text-xl font-normal py-4'>legal</h1>
            <ul className="text-white text-xs font-normal grid grid-cols-1 gap-2 capitalize">
                <li><a href="#">claim</a></li>
                <li><a href="#">privacy</a></li>
                <li><a href="#">terms Condition</a></li>
                <li><a href="#">privacy policy</a></li>
            </ul>
        </div>
    </div>
    <div className="creater_user pt-6 text-center">
        <div className="copy_right text-base font-medium text-white max-[500px]:text-[11px]">
        &copy; 2024 Companay . All rights reserved
        </div>
        <div className="made_in text-base font-medium text-white mt-2 max-[500px]:text-[11px]">
            Made with Imran khan website developed
        </div>

    </div>
   </div>
   </>
  )
}

export default Footer
