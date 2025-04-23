"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorit } from "@/redux/crmSlice";
import axios from "axios";
import Modal from "../ui/Modal";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductsList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 py-12 px-4 lg:px-12">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-6 rounded shadow-2xl bg-gray-100 flex flex-col items-center"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="w-full h-60 object-contain"
          />
          <div className="flex justify-between items-center w-full my-6">
            <div className="flex flex-col items-start gap-1">
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-gray-600">
                {product.price.toLocaleString()} $
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => dispatch(addToCart(product))}
                className="transform transition-all duration-300 hover:scale-125"
              >
                <IoCartOutline size={30} />
              </button>
              <button
                onClick={() => dispatch(addToFavorit(product))}
                className="transform transition-all duration-300 hover:scale-125"
              >
                <IoHeartOutline size={30} />
              </button>
            </div>
          </div>
          <button onClick={() => setSelectedProduct(product)} className="mt-4 ">
            Show More
          </button>
        </div>
      ))}

      {selectedProduct && (
        <Modal onClose={() => setSelectedProduct(null)}>
          <div className="text-center">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-700 mb-2">
              price: {selectedProduct.price.toLocaleString()} $
            </p>
            <p className="text-gray-500">{selectedProduct.description}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
