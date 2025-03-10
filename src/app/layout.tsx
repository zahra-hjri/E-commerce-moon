import type { Metadata } from "next";
import "./globals.css";
//components
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
//context
import { CartProvider } from "@/context/CartContext";
//redux
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
      <body className="bg-white-100 text-black">
        <Providers>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
