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
} from "react-icons/io5";
import Badge from "../ui/Badge";

{
  /* <div className="lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"> */
}

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div>
      <header className="header bg-white-100 relative px-12 py-3 z-20">
        <nav className="p-4 flex items-center justify-between relative">
          <div className="flex items-center gap-14">
            <div className="logo cursor-pointer" onClick={() => router.push("/")}>
              <Image src={logo} alt="logo" width={140} height={90} />
            </div>
            <ul className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((item) => (
                <li
                  key={item.id}
                  className={`uppercase font-medium text-[16px] ${pathname === item.href ? "text-primary-green" : ""}`}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-10">
            <div className="uppercase">
              <span>login</span>
              <span>/</span>
              <span>register</span>
            </div>
            <div className="icons flex items-center gap-8">
              <IoSearchOutline size="24" />
              <div className="relative z-20">
                <div className="absolute -top-2 -right-2">
                  <Badge color="bg-primary-green">0</Badge>
                </div>
                <IoHeartOutline size="24" />
              </div>
              <div className="relative z-20">
                <div className="absolute -top-2 -right-2">
                  <Badge color="bg-primary-green">0</Badge>
                </div>
                <IoCartOutline size="24" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
