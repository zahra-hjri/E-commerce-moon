let products = [
  {
    id: 1,
    name: "اپل",
    price: 2000000,
    image: "/images/product/product1.1.png",
  },
  {
    id: 2,
    name: "گوشی موبایل",
    price: 15000000,
    image: "/images/product/product1.1.png",
  },
  {
    id: 3,
    name: "هدفون",
    price: 5000000,
    image: "/images/product/product1.1.png",
  },
];

export async function GET() {
    return Response.json(products, { headers: { 'Cache-Control': 'no-store' } });
  }

export async function POST(req) {
  try {
    const body = await req.json();
    const newProduct = { id: Date.now(), ...body };
    products.push(newProduct);
    return Response.json(newProduct, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Invalid data" }, { status: 400 });
  }
}
