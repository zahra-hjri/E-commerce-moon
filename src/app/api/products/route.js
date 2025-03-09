let products = [
  { id: 1, name: "هدفون", price: 25000000, image: "/images/airpods-max.jpg" },
  { id: 2, name: "ایرپاد ", price: 15000000, image: "/images/airpods.jpg" },
  { id: 3, name: "بیتز", price: 3500000, image: "/images/beats.jpg" },
  { id: 4, name: "کریو", price: 800000, image: "/images/creative.jpg" },
  { id: 5, name: "هدفون", price: 2300000, image: "/images/philips.jpg" },
  { id: 6, name: "هدفون", price: 2800000, image: "/images/razer.jpg" },
  { id: 7, name: "هدفون", price: 7000000, image: "/images/rode.jpg" },
  { id: 8, name: "هدفون", price: 18000000, image: "/images/sony.jpg" },
];

export async function GET() {
  return Response.json(products);
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
