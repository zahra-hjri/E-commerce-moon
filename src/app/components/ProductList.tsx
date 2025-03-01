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
    fetch('/api/products')
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(err => console.error('خطا:', err));
  }, []);
    return (
        <div>
        {products.map(item=><li key={item.id}>{item.name}
          <Image src={item.image} alt={item.name} width={450} height={450} unoptimized />
          {/* <img src={item.image} alt={item.name} /> */}
        </li>)}
    </div>
  )
}

export default ProductList