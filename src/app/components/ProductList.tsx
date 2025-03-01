'use client';

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
    fetch('/api/products', { cache: 'no-store' })
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(err => console.error('خطا:', err));
      console.log('داده‌های محصولات:', products); 
  }, []);
    return (
        <ul className='grid grid-cols-1 gap-5 py-20'>
        {products.map(item=><li key={item.id} className='p-2 rounded-[10px] flex  items-center'>
          <Image src={item.image} alt={item.name} width={550} height={350} unoptimized />
          <div>
          <p className='mt-5'>{item.name}</p>
          <p className='mt-5'>{item.price}</p>
          </div>
          <button className='bg-gray-700 text-white p-3 rounded-md text-[12px]'>افزودن به سبد خرید</button>
        </li>)}

        
    </ul>
  )
}

export default ProductList