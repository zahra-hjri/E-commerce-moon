import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-poppins',   
  display: 'swap',              
})
//components
import Header from "@/app/shared-components/layout/Header/Header";
// import Footer from "@/app/components/layout/Footer";
//context
import { CartProvider } from "@/context/CartContext";
//redux
import { Providers } from "./Providers";
// import { ClerkProvider } from "@clerk/nextjs";

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
    
    <html lang="en" className={poppins.variable}>
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
  
  );
}
