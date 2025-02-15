"use client";

import Link from "next/link";
import React from 'react'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname  = usePathname()
  return (
    <nav className="flex gap-10 min-h-[80px] pt-8 uppercase">
        <Link href="/" className={`${pathname === "/" ? "text-primary-green font-bold" :""}`}>home</Link>
        <Link href="/blog" className={`${pathname === "/blog" ? "text-primary-green font-bold" :""}`}>blog</Link>
        <Link href="/shop" className={`${pathname === "/shop" ? "text-primary-green font-bold" :""}`}>shop</Link>
        <Link href="/about" className={`${pathname === "/about" ? "text-primary-green font-bold" :""}`}>about</Link>
    </nav>
  )
}

export default Navbar