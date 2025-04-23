const products = [
  {
    id: 1,
    name: "chair",
    price: 252,
    image: "/images/product/product1.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 2,
    name: "kanape ",
    price: 150,
    image: "/images/product/product2.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 3,
    name: "teeth",
    price: 350,
    image: "/images/product/product3.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 4,
    name: "cup",
    price: 80,
    image: "/images/product/product4.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 5,
    name: "chair",
    price: 23,
    image: "/images/product/product5.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 6,
    name: "glass",
    price: 281,
    image: "/images/product/product6.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 7,
    name: "cup",
    price: 75,
    image: "/images/product/product7.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
  {
    id: 8,
    name: "chair",
    price: 18,
    image: "/images/product/product8.png",
    description: "This ceramic cup features a minimal design and warm tones, perfect for starting your day. With a comfortable handle and just the right capacity it's ideal for both coffee and tea lovers. Great for everyday use or as a thoughtful gift for someone special."

  },
];

export async function GET() {
  return Response.json(products);
}
