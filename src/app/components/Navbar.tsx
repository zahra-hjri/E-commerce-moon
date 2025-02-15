import Link from "next/link";
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex gap-10">
        <Link href="/">HOME</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/shop">SHOP</Link>
        <Link href="/about">ABOUT</Link>
    </nav>
  )
}

export default Navbar