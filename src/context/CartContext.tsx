"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  isOpenCart: boolean;
  handleOpenCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleOpenCart = () => {
    setIsOpenCart((prev) => !prev);
  };



  return (
    <CartContext.Provider value={{ cart, isOpenCart, handleOpenCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart باید داخل CartProvider استفاده شود.");
  }
  return context;
};
