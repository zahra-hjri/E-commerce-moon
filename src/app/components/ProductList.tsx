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
        <ul className='grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20'>
        {products.map(item=><li key={item.id} className=' border-[1px] border-white p-5 text-red-700'>{item.name}
          <Image src={item.image} alt={item.name} width={450} height={450} unoptimized />
        </li>)}

        
    </ul>
  )
}

export default ProductList