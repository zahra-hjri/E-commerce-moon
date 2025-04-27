"use client";

import { useRouter } from "next/navigation";
import MenuLinks from "./MenuLinks";
import AuthLinks from "./AuthLinks";
import IconWithBadge from "./IconWithBadge";
import Image from "next/image";
import DrawerContent from "./DrawerContent";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { RootState } from "@/redux/store";


const Header = () => {
  const logo = "/images/common/logo.png";
  const router = useRouter();
  const [isDrawerOpenFavorite, setIsDrawerOpenFavorite] = useState<boolean>(false);
  const [isDrawerOpenCarts, setIsDrawerOpenCarts] = useState<boolean>(false);
  const FavoritProducts = useSelector((state: RootState) => state.crm.FavoritProducts);
  const Carts = useSelector((state: RootState) => state.crm.Carts);

  const handleOpenDrawerFavorite = () => {
    setIsDrawerOpenFavorite((prev) => !prev);
  };

  const handleOpenDrawerCarts = () => {
    setIsDrawerOpenCarts((prev) => !prev);
  };

  return (
    <div>
      <header className={`header bg-white-100 px-4 lg:px-12 py-3 z-20 sticky`}>
        <nav className="p-4 flex items-center justify-between relative">
          <div className="flex items-center gap-14">
            <div
              className="logo cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image src={logo} alt="logo" width={140} height={90} />
            </div>
            <MenuLinks />
          </div>

          <div className={`flex items-center gap-10`}>
            <AuthLinks /> {/* Added AuthLinks component here */}
            <IconWithBadge
              icon={<IoHeartOutline size={30} />}
              count={FavoritProducts.length}
              onClick={handleOpenDrawerFavorite}
            />
            <IconWithBadge
              icon={<IoCartOutline size={30} />}
              count={Carts.length}
              onClick={handleOpenDrawerCarts}
            />
          </div>
        </nav>
      </header>

      {isDrawerOpenFavorite && (
        <DrawerContent
          items={FavoritProducts}
          title="Favorite Products"
          onClose={handleOpenDrawerFavorite}
          isOpen={isDrawerOpenFavorite}
        />
      )}

      {isDrawerOpenCarts && (
        <DrawerContent
          items={Carts}
          title="Cart Items"
          onClose={handleOpenDrawerCarts}
          isOpen={isDrawerOpenCarts}
        />
      )}
    </div>
  );
};

export default Header;
