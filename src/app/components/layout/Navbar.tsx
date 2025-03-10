"use client";

import Link from "next/link";
/* Data */
import { navbarMenu } from "@/data/Data";
/*Icons */
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
/*Components */
import ShoppingCart from "@/app/components/ui/ShoppingCart";
/*Context */
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { handleOpenCart, isOpenCart } = useCart();
  return (
    <nav className="flex gap-10 min-h-[80px] px-20 py-8 justify-between sticky top-0 z-20 bg-white-100 shadow-xl">
      <Link href="/">
        <h2 className="text-4xl font-normal">miniture</h2>
      </Link>
      <ul className="flex gap-5 text-[18px] font-medium">
        {navbarMenu.map((item) => (
          <li key={item.id}>
            <Link className="hover:text-orange-600" href={item.src}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-5 items-center">
        <div className="relative cursor-pointer" onClick={handleOpenCart}>
          <div className="w-[25px] h-[25px] text-white rounded-full absolute bg-orange-500 flex items-center justify-center -top-2 -right-2">
            0
          </div>
          <div>
            <CiShoppingCart size={35} />
          </div>
        </div>
        <div className="cursor-pointer">
          <IoPersonOutline size={30} />
        </div>
        <div className="cursor-pointer">
          <GrFavorite size={30} />
        </div>
      </div>

      {isOpenCart && (
        <div className="fixed right-0 top-0 z-20 bg-gray-100 w-[50%] lg:w-[30%] min-h-full">
          <ShoppingCart />{" "}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
