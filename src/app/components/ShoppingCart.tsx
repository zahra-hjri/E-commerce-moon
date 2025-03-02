import { useSelector } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useCart } from "@/context/CartContext";
const ShoppingCart = () => {
    const {handleOpenCart}=useCart()
    const cart = useSelector(state => state.cart);
  return (
    <div className="fixed right-0 top-0 z-20 bg-zinc-950 w-[30%] min-h-full flex justify-between p-5"> 
        <div className="cursor-pointer" onClick={handleOpenCart}>
        <IoIosCloseCircleOutline size={30} />
        </div>
    <p>سبد خرید</p>

    {cart.map((item, index) => (
                <p key={index}>{item.name}</p>
            ))}
    </div>
  )
}

export default ShoppingCart