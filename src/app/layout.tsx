import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";





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
        <Navbar />
        <ProductList />
        {children}
      </body>
    </html>
  );
}
