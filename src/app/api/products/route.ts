import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    title: "chair",
    price: 252,
    image: "/images/product/product1.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 2,
    title: "kanape ",
    price: 150,
    image: "/images/product/product2.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 3,
    title: "teeth",
    price: 350,
    image: "/images/product/product3.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 4,
    title: "cup",
    price: 80,
    image: "/images/product/product4.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 5,
    title: "chair",
    price: 23,
    image: "/images/product/product5.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 6,
    title: "glass",
    price: 281,
    image: "/images/product/product6.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 7,
    title: "cup",
    price: 75,
    image: "/images/product/product7.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 8,
    title: "chair",
    price: 18,
    image: "/images/product/product8.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
];

export async function GET() {
  return Response.json(products);
}

export async function POST(request:Request){
const newProduct = await request.json()
  if (!newProduct.id) {
    newProduct.id = products.length > 0 
      ? Math.max(...products.map(p => p.id)) + 1 
      : 1;
  }
products.push(newProduct)
return NextResponse.json(newProduct, {status:201})
}