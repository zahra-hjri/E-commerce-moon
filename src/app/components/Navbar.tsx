"use client";

import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { IoLogoElectron } from "react-icons/io5";

const Navbar = () => {
  
  return (
    <nav className="flex gap-10 min-h-[80px] pt-8 uppercase justify-between bg-gray-900">
      <IoLogoElectron className='text-orange-500' size={55}/>
       <div className='relative'>
        <div className='w-[25px] h-[25px] rounded-full absolute bg-green-500 flex items-center justify-center -top-2 -right-2'>14</div>
       <CiShoppingCart size={35}/>
       </div>
    </nav>
  )
}

export default Navbar