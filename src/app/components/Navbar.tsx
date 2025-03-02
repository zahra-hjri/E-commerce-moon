"use client";

import { CiShoppingCart } from "react-icons/ci";
import { IoLogoElectron } from "react-icons/io5";
import ShoppingCart from "./ShoppingCart";
import { useCart } from "@/context/CartContext";

const Navbar = () => {

  const { handleOpenCart,isOpenCart } = useCart();
  return (
    <nav className="flex gap-10 min-h-[80px] pt-8 uppercase justify-between ">
      <IoLogoElectron className='text-primary-green font-bold' size={45}/>
      <div className="flex gap-5 items-center">
       <div>
        <span className='hover:text-primary-green cursor-pointer'>ثبت‌ نام</span>
        <span>/</span>
        <span className='hover:text-primary-green cursor-pointer'>ورود</span>
        </div>
      <div className='relative cursor-pointer' onClick={handleOpenCart}>
        <div className='w-[25px] h-[25px] text-white rounded-full absolute bg-primary-green flex items-center justify-center -top-2 -right-2'>14</div>
       <CiShoppingCart size={35}/>
       </div>
      </div>

      {isOpenCart && <ShoppingCart /> }
    </nav>
  )
}

export default Navbar