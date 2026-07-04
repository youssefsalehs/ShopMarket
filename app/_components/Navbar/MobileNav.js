"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";

export default function MobileNav() {
  const [openMob, setOpenMob] = useState(false);
  function toggleMob() {
    setOpenMob((s) => !s);
  }
  return (
    <>
      <div className="flex gap-2 items-center z-50">
        {" "}
        <FiMenu className="md:hidden" onClick={toggleMob} size={25} />
        <Link
          href={"/"}
          className="font-bold text-xl text-green-800 flex gap-1 items-center"
        >
          <CiShoppingBasket size={25} />
          ShopMarket
        </Link>
      </div>
      {openMob && (
        <>
          <div className="absolute bg-green-950 inset-0 h-screen w-[80%] z-50! text-green-50">
            <div className="p-8 ">
              <div className=" flex items-center justify-between text-xl">
                <Link href={"/"} className="font-bold flex items-center gap-1">
                  <CiShoppingBasket size={25} /> ShopMarket
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
    </>
  );
}
