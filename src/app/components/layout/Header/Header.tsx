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
  const logo = "/path/to/logo.png";
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const FavoritProducts = useSelector((state: RootState) => state.crm.FavoritProducts);
  const Carts = useSelector((state: RootState) => state.crm.Carts);

  const handleOpenDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
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
              onClick={handleOpenDrawer}
            />
            <IconWithBadge
              icon={<IoCartOutline size={30} />}
              count={Carts.length}
              onClick={handleOpenDrawer}
            />
          </div>
        </nav>
      </header>

      {isDrawerOpen && (
        <DrawerContent
          items={FavoritProducts}
          title="Favorite Products"
          onClose={handleOpenDrawer}
        />
      )}
    </div>
  );
};

export default Header;
