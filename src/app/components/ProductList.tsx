'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ProductList = () => {
  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("/api/products", { headers: { "Cache-Control": "no-store" } })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("خطا:", err));
  }, []); 
  
    return (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
        {products.map(item=><li key={item.id} className='p-2 rounded-[10px] flex-col border-[1px] border-gray-700 items-center'>
          <Image src={item.image} alt={item.name} width={350} height={300} unoptimized className='mx-auto' />
          <div className='flex justify-between my-2 px-4'>
          <p className='mt-5 text-[12px]'>{item.name}</p>
          <p className='mt-5 text-[12px] text-primary-green'>{item.price}</p>
          </div>
          <button className='bg-gray-700 text-white p-2 my-6 rounded-md text-[12px] w-full px-4 hover:bg-gray-800'>افزودن به سبد خرید</button>
        </li>)}

        
    </ul>
  )
}

export default ProductList