import type { Metadata } from "next";
import "./globals.css";
//components
import Header from "@/app/components/layout/Header";
// import Footer from "@/app/components/layout/Footer";
//context
import { CartProvider } from "@/context/CartContext";
//redux
import { Providers } from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
    <html lang="en">
      <body className="">
        <Providers>
          <CartProvider>
            <Header />
            {children}
            {/* <Footer /> */}
          </CartProvider>
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
