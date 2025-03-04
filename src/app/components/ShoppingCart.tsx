import { useSelector } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
const ShoppingCart = () => {
    const {handleOpenCart}=useCart()
    const cart = useSelector(state => state.cart);
  return (
    <div className=" p-5"> 
       <div className="flex justify-between">
       <div className="cursor-pointer" onClick={handleOpenCart}>
        <IoIosCloseCircleOutline size={30} />
        </div>
    <p>سبد خرید</p>
       </div>

 <ul className="my-10 w-full lg:w-[80%] mx-auto">
 {cart.map((item) => (
                <li key={item.id} className="w-full py-4 flex gap-10 justify-evenly items-center border-b border-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="bg-rose-600 w-[20px] h-[20px] rounded-[5px] flex items-center justify-center">+</span>
                    <span>1</span>
                    <span className="bg">-</span>
                  </div>
                  <p className="w-[20%]">{item.name}</p>
                  <span className="w-[20%]">{item.price.toLocaleString('fa-IR')}</span>
                  <Image className="w-[15%]" src={item.image} alt={item.name} width={50} height={50} />
                  </li>
            ))}
 </ul>
    </div>
  )
}

export default ShoppingCart