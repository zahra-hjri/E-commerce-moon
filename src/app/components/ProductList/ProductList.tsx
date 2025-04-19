"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,addToFavorit } from "@/redux/crmSlice";
import { RootState } from "@/redux/store";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductsList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const Carts = useSelector((state: RootState) => state.crm.Carts);
  console.log(Carts.length);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            className="w-full h-40 object-contain"
          />
          <h2 className="font-bold mt-2">{product.name}</h2>
          <p className="text-green-600">
            {product.price.toLocaleString()} $
          </p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-orange-500 rounded-lg py-1 px-3 text-white"
          >
            add to card
          </button>
          <button
            onClick={() => dispatch(addToFavorit(product))}
            className="bg-rose-300 rounded-lg py-1 px-3 text-white"
          >
            add to favorite
          </button>
        </div>
      ))}
    </div>
  );
}
