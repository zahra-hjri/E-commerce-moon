"use client";

import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  
  return (
    <nav className="flex gap-10 min-h-[80px] pt-8 uppercase justify-between bg-gray-900">
      <h3 className='uppercase font-bold text-2xl'>logo</h3>
       <CiShoppingCart size={35}/>
    </nav>
  )
}

export default Navbar