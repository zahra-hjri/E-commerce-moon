import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { CartProvider } from "@/context/CartContext";



export const metadata: Metadata = {
  title: "my store",
  description: "e-commerce by next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartProvider>
      <body
        className='container bg-black text-white'
      >
        <Navbar />
        <ProductList />
        {children}
      </body>
      </CartProvider>
    </html>
  );
}
