const products = [
  {
    id: 1,
    name: "chair",
    price: 252,
    image: "/images/product/product1.png",
  },
  {
    id: 2,
    name: "kanape ",
    price: 150,
    image: "/images/product/product2.png",
  },
  {
    id: 3,
    name: "teeth",
    price: 350,
    image: "/images/product/product3.png",
  },
  {
    id: 4,
    name: "cup",
    price: 80,
    image: "/images/product/product4.png",
  },
  {
    id: 5,
    name: "chair",
    price: 23,
    image: "/images/product/product5.png",
  },
  {
    id: 6,
    name: "glass",
    price: 281,
    image: "/images/product/product6.png",
  },
  {
    id: 7,
    name: "cup",
    price: 75,
    image: "/images/product/product7.png",
  },
  {
    id: 8,
    name: "هدفون",
    price: 18,
    image: "/images/product/product8.png",
  },
];

export async function GET() {
  return Response.json(products);
}
