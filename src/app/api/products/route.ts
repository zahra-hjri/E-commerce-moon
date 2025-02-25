// src/app/api/products/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// اتصال به دیتابیس
const client = new MongoClient('mongodb://localhost:27017'); // این آدرس رو برای دیتابیس خود تغییر بده
const dbName = 'store'; // نام دیتابیس
const collectionName = 'products'; // نام کالکشن (مجموعه داده‌ها)

async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return collection;
}

// ایجاد محصول جدید
export async function POST(req: Request) {
  const body = await req.json();
  const { name, price, image, stock } = body;

  if (!name || !price || !image || stock === undefined) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    );
  }

  const collection = await connectToDatabase();
  
  const newProduct = {
    name,
    price,
    image,
    stock,
  };

  const result = await collection.insertOne(newProduct);

  return NextResponse.json(
    { message: 'Product added successfully', productId: result.insertedId },
    { status: 201 }
  );
}

// دریافت تمامی محصولات
export async function GET() {
  const collection = await connectToDatabase();
  const products = await collection.find().toArray();

  return NextResponse.json(products);
}
