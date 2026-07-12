"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import {
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: HiOutlineHome },
  { href: "/shop", label: "Shop", icon: HiOutlineShoppingBag },
  { href: "/wishlist", label: "Wishlist", icon: HiOutlineHeart },
];

export default function MobileNav() {
  const [openMob, setOpenMob] = useState(false);
  const pathname = usePathname();

  function toggleMob() {
    setOpenMob((s) => !s);
  }

  function closeMob() {
    setOpenMob(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenMob(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openMob ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMob]);

  return (
    <>
      <div className="flex gap-2 items-center z-50">
        <FiMenu className="md:hidden" onClick={toggleMob} size={25} />
        <Link
          href={"/"}
          className="font-bold text-xl text-green-800 flex gap-1 items-center"
        >
          <CiShoppingBasket size={25} />
          ShopMarket
        </Link>
      </div>

      <div
        className={`fixed inset-0 h-screen w-full bg-black/50 z-40 transition-opacity duration-300 ${
          openMob
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMob}
      />
      <div
        className={`fixed top-0 left-0 h-screen w-[80%] max-w-xs bg-green-950 text-green-50 z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          openMob ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between text-xl border-b border-green-800 pb-4">
            <Link
              href={"/"}
              onClick={closeMob}
              className="font-bold flex items-center gap-1"
            >
              <CiShoppingBasket size={25} /> ShopMarket
            </Link>
            <IoCloseCircle
              onClick={toggleMob}
              size={26}
              className="cursor-pointer hover:text-green-300 transition-colors"
            />
          </div>

          <ul className="flex flex-col gap-2 mt-8">
            {NAV_LINKS.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMob}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-green-800 text-white font-medium"
                        : "text-green-100 hover:bg-green-900"
                    }`}
                  >
                    <Icon size={20} />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
