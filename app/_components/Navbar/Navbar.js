"use client";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const x = usePathname();
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-50 backdrop-blur-2xl px-4 py-6   z-40">
      <div className="w-full md:w-[80%] mx-auto flex items-center justify-between">
        <MobileNav />

        <ul className="hidden md:flex items-center justify-center gap-8 ">
          <li>
            <Link
              href="/"
              className={`active-link  ${x === "/" ? " before:w-12! text-green-900" : ""}
  `}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className={`active-link  ${x === "/shop" ? " before:w-10! text-green-900" : ""}
  `}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className={`active-link  ${x === "/categories" ? " before:w-22! text-green-900" : ""}
  `}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/brands"
              className={`active-link  ${x === "/brands" ? " before:w-14! text-green-900" : ""}
  `}
            >
              Brands
            </Link>
          </li>
        </ul>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <IoMdSearch />
          </li>
          <li>
            <Link href={"/cart"}>
              <LuShoppingBag />
            </Link>
          </li>
          <li>
            <Link href={"/wishlist"}>
              <CiHeart />
            </Link>
          </li>
          <li>
            <Link href={"/login"}>login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
