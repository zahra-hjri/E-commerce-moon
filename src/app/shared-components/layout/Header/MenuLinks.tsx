import Link from "next/link";
import { usePathname } from "next/navigation";
import { menulists } from "@/data/data";

const MenuLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex items-center gap-10">
      {menulists.map((item) => (
        <li key={item.id} className={`uppercase ${pathname === item.href ? "text-primary-green" : ""}`}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
