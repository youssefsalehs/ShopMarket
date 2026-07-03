"use client";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import MobileNav from "./MobileNav";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-50 backdrop-blur-2xl px-4 py-6 text-lg text-green-900">
      <div className="w-full md:w-[80%] mx-auto flex items-center justify-between">
        <MobileNav />

        <ul className="hidden md:flex items-center justify-center gap-8 ">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/categories"}>Categories</Link>
          </li>
          <li>
            <Link href={"/brands"}>Brands</Link>
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
