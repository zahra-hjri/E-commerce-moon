"use client";

import axios from "axios";
import { useState } from "react";
import InputField from "../shared-components/ui/InputField";

const NewProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const handlePostProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/products", {
        ...product,
        price: Number(product.price),
        id: product.id ? Number(product.id) : undefined,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setProduct(prev => ({ ...prev, [name]: value }));
};
  return (
    <div className="bg-white-100 w-full h-screen flex justify-center pt-20">
      <form onSubmit={handlePostProduct} className="flex-col gap-4 w-[60%]">
        <InputField
          label="id"
          type="text"
          name="name"
          value={product.id}
          onChange={handleChange}
        />
        <InputField
          label="name"
          type="text"
          name="name"
          value={product.title}
          onChange={handleChange}
        />
        <InputField
          label="price"
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <textarea
          placeholder="description"
          value={product.description}
          onChange={handleChange}
          className="rounded-xl bg-gray-50 border border-gray-300 shadow-inner w-full h-[200px] p-2 focus:outline-none focus:ring-2 focus:ring-green-600 mt-4"
        />
        <button
          className="w-full bg-yellow-400 hover:bg-green-800 transition-colors text-white font-bold py-2 rounded-xl shadow-lg mt-6"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
