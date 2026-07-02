"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
export default function Navbar() {
  const [openMob, setOpenMob] = useState(false);
  function toggleMob() {
    setOpenMob((s) => !s);
  }
  return (
    <nav className="bg-green-50 backdrop-blur-2xl px-4 py-6 text-lg text-green-900">
      {openMob && (
        <>
          <div className="absolute bg-green-950 inset-0 h-screen w-[80%] z-20 text-green-50">
            <div className="p-8 ">
              <div className=" flex items-center justify-between text-xl">
                <Link href={"/"} className="font-bold ">
                  ShopMarket
                </Link>
                <IoCloseCircle onClick={toggleMob} />
              </div>
              <ul className="flex flex-col  gap-8  mt-8">
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
            </div>
          </div>
          <div
            className="absolute bg-green-950/40 inset-0 h-screen w-full"
            onClick={toggleMob}
          ></div>
        </>
      )}
      <div className="w-full md:w-[80%] mx-auto flex items-center justify-between">
        <div className="flex gap-2 items-center ">
          {" "}
          <FiMenu className="md:hidden" onClick={toggleMob} />
          <Link href={"/"} className="font-bold">
            ShopMarket
          </Link>
        </div>

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
