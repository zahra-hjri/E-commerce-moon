import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/productList";





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
        className='container'
      >
        <Navbar />
        <ProductList />
        {children}
      </body>
    </html>
  );
}
