const products = [
  {
    id: 1,
    name: "chair",
    price: 25000000,
    image: "/images/product/product1.png",
  },
  {
    id: 2,
    name: "kanape ",
    price: 15000000,
    image: "/images/product/product2.png",
  },
  {
    id: 3,
    name: "teeth",
    price: 3500000,
    image: "/images/product/product3.png",
  },
  {
    id: 4,
    name: "cup",
    price: 800000,
    image: "/images/product/product4.png",
  },
  {
    id: 5,
    name: "chair",
    price: 2300000,
    image: "/images/product/product5.png",
  },
  {
    id: 6,
    name: "glass",
    price: 2800000,
    image: "/images/product/product6.png",
  },
  {
    id: 7,
    name: "cup",
    price: 7000000,
    image: "/images/product/product7.png",
  },
  {
    id: 8,
    name: "هدفون",
    price: 18000000,
    image: "/images/product/product8.png",
  },
];

export async function GET() {
  return Response.json(products);
}
