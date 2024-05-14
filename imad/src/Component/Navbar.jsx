import React from 'react'
import logo2 from './Group 27.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,
  faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div className='flex justify-between h-14  items-center p-5 text-white '>
    <div>
  <img className="h-14 py-1" src={logo2} alt=''/>
    </div>
    <div className=''>
        <ul className='flex justify-center space-x-4'>
    <li className='text-[#FEE715]'><NavLink exact to= "./"> Home</NavLink></li>
            <li  className='hover:text-[#FEE715]'><NavLink to= "./store" >Store</NavLink></li>
            <li  className='hover:text-[#FEE715]'><NavLink to= "./blog" >Blog</NavLink></li>
        </ul>
    </div>
    <div className='flex'>
        <form>
            <input className=' border-2  rounded-full ' type='search' name='search' />
        </form>
        <FontAwesomeIcon className='size-7 text-[#FEE715] ' icon={faSearch} />
    </div>
  <div className=' border-4 rounded-full ...  w-12 flex justify-center items-center h-8'>
   
  <FontAwesomeIcon icon={faShoppingCart} />
  </div>
  
</div>
  )
}

export default Navbar
