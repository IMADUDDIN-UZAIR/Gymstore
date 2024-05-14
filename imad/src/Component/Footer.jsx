import React from 'react'
import p9 from '../pages/assets/Group 27.png'


const Footer = () => {
  return (
    <div className='bg-[#373737] flex justify-evenly'>
      <div className="1 space-y-5 justify-center">
        <div className="1 1">
    <img src={p9} alt=' ' />
        </div>
        <div className="1 2 font-Poppins text-base text-white">
        Exercise and fit yourself
This is Best Store For you
        </div>

      </div>
      <div className="2 font-Poppins text-2xl text-white space-y-5">
      INFORMATION
      <ul>
      <li className=' text-white text-base'>Home</li>
      <li className=' text-white text-base'>About Us</li>
      <li className=' text-white text-base'>Store</li>
      </ul>
      </div>
      <div className="3 font-Poppins text-2xl text-white space-y-5">
      SUPPORT
      <ul>
      <li className=' text-white text-base'>Blog</li>
      <li className=' text-white text-base'>Reviews</li>
      <li  className='text-white text-base' >Products</li>
      </ul>
      </div>
      <div className="4  space-y-5">
        <div className="1 12 font-Poppins text-2xl text-white">
        NEWSLETTER
        </div>
    <div className="1 font-Poppins text-sm text-white">
      Subscribe to our newsletter and amazing new updates
      </div>
     
      {/* <div className="inpt h-10 w-72 p-3 rounded-xl bg-white text-gray-500 items-center">
      Your email address
      <div className="btn h-10 w-28 p3 bg-[#FEE715] font-averia-serif-libre rounded-xl text-black ml-40 mb-60">Subscribe</div>
      </div> */}
      <div class="flex justify-center -space-x-28">
  <div class="h-10 w-72 p-3 rounded-xl bg-white text-gray-500 items-center ">Your email address</div>
  <div class="mix-blend-multiply h-8  w-28 p3 bg-[#FEE715] font-averia-serif-libre rounded-xl text-black ml-40 mb-20 flex items-center justify-center">Subscribe</div>
</div>
        
       
      </div>
     
    </div>
  )
}

export default Footer
