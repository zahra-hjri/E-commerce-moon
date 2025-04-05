"use client";

import { menulists } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../../public/images/common/logo.png";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
  IoMenuOutline,
  IoClose,
} from "react-icons/io5";
import Badge from "@/app/components/ui/Badge";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenuToggle = () => {
    setIsOpenMenu((prev) => !prev);
  };
 
  return (
    <div>
      <header
        className={
        `header bg-white-100 relative px-4 lg:px-12 py-3 z-20 `
            
        }
      >
        <nav className="p-4 flex items-center justify-between relative">
          <div className="flex items-center gap-14">
            <div
              className="logo cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image src={logo} alt="logo" width={140} height={90} />
            </div>
            <ul className="hidden lg:flex items-center justify-between gap-10">
              {menulists.map((item) => (
                <li
                  key={item.id}
                  className={`uppercase ${pathname === item.href ? "text-primary-green" : ""}`}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`flex items-center gap-10`}>
            <div className="uppercase hidden lg:flex items-center">
              <SignInButton mode="modal" />
              <span>/</span>
              <span>register</span>
            </div>
            <div className="icons flex items-center gap-8">
              <IoSearchOutline size="24" className="cursor-pointer" />
              <div className="relative z-20 cursor-pointer">
                <div className="absolute -top-2 -right-2">
                  <Badge color="bg-primary-green">0</Badge>
                </div>
                <IoHeartOutline size="24" />
              </div>
              <div className="relative z-20 cursor-pointer">
                <div className="absolute -top-2 -right-2">
                  <Badge color="bg-primary-green">0</Badge>
                </div>
                <IoCartOutline size="24" />
              </div>
              <button
                onClick={handleMenuToggle}
                className="lg:hidden bg-black text-white w-10 h-10 flex items-center justify-center"
              >
                {isOpenMenu ? (
                  <IoClose size={24} />
                ) : (
                  <IoMenuOutline size={24} />
                )}
              </button>
              <UserButton />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
