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
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"favorites" | "cart" | null>(null);

  const Carts = useSelector((state: RootState) => state.crm.Carts);
  const FavoritProducts = useSelector((state: RootState) => state.crm.FavoritProducts);

  const handleMenuToggle = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <div>
      <header className={`header bg-white-100 px-4 lg:px-12 py-3 z-20 sticky`}>
        <nav className="p-4 flex items-center justify-between relative">
          <div className="flex items-center gap-14">
            <div className="logo cursor-pointer" onClick={() => router.push("/")}>
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
              <span className="cursor-pointer">login</span>
              <span>/</span>
              <span className="cursor-pointer">register</span>
            </div>
            <div className="icons flex items-center gap-8">
              <IoSearchOutline size="24" className="cursor-pointer" />

              <div
                className="relative z-20 cursor-pointer"
                onClick={() => {
                  setIsDrawerOpen(true);
                  setActiveTab("favorites");
                }}
              >
                <div className="absolute -top-2 -right-2">
                  <Badge color="bg-primary-green">{FavoritProducts.length}</Badge>
                </div>
                <IoHeartOutline size="24" />
              </div>

              <div
                className="relative z-20 cursor-pointer"
                onClick={() => {
                  setIsDrawerOpen(true);
                  setActiveTab("cart");
                }}
              >
                <div className="absolute -top-2 -right-2">
                  <Badge color="bg-primary-green">{Carts.length}</Badge>
                </div>
                <IoCartOutline size="24" />
              </div>

              <button
                onClick={handleMenuToggle}
                className="lg:hidden bg-black text-white w-10 h-10 flex items-center justify-center"
              >
                {isOpenMenu ? <IoClose size={24} /> : <IoMenuOutline size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* === ANIMATED DRAWER === */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-xl z-50 p-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  {activeTab === "favorites" ? "Favorite Products" : "Cart Items"}
                </h2>
                <button onClick={() => setIsDrawerOpen(false)} className="text-xl">
                  &times;
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {activeTab === "favorites" &&
                  FavoritProducts.map((item: any) => (
                    <div key={item.id} className="flex items-center gap-4 border p-3 rounded">
                      <Image src={item.image} alt={item.name} width={50} height={50} />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-gray-600 text-sm">{item.price}$</p>
                      </div>
                    </div>
                  ))}

                {activeTab === "cart" &&
                  Carts.map((item: any) => (
                    <div key={item.id} className="flex items-center gap-4 border p-3 rounded">
                      <Image src={item.image} alt={item.name} width={50} height={50} />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-gray-600 text-sm">{item.price}$</p>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
