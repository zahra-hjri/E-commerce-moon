"use client";

import React, { useEffect } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { IoLogoElectron } from "react-icons/io5";

const Navbar = () => {
  useEffect(() => {
    console.log("Test");
  }, []);
  
  
  return (
    <nav className="flex gap-10 min-h-[80px] pt-8 uppercase justify-between ">
      <IoLogoElectron className='text-primary-green font-bold' size={45}/>
      <div className="flex gap-5 items-center">
       <div>
        <span className='hover:text-primary-green cursor-pointer'>ثبت‌ نام</span>
        <span>/</span>
        <span className='hover:text-primary-green cursor-pointer'>ورود</span>
        </div>
      <div className='relative'>
        <div className='w-[25px] h-[25px] text-white rounded-full absolute bg-primary-green flex items-center justify-center -top-2 -right-2'>14</div>
       <CiShoppingCart size={35}/>
       </div>
      </div>
    </nav>
  )
}

export default Navbar