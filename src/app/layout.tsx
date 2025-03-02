

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { CartProvider } from "@/context/CartContext";
import { Providers } from "./Providers";



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
      <body
        className='container bg-black text-white'
        >
          <Providers >
        <CartProvider>
        <Navbar />
        <ProductList />
        {children}
      </CartProvider>
      </Providers>
      </body>
    </html>
  );
}
