"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiHeart } from "react-icons/ci";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { FiShoppingBag } from "react-icons/fi";
export default function Navbar() {
  const x = usePathname();
  const { data: session, status } = useSession();
  function logout() {
    signOut({ callbackUrl: "/login" });
  }
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-50/70 backdrop-blur-sm px-4 py-6   z-40 border-b border-green-950">
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
              href="/wishlist"
              className={`active-link  ${x === "/wishlist" ? " before:w-16! text-green-900" : ""}
  `}
            >
              wishlist
            </Link>
          </li>
        </ul>
        <ul className="flex items-center justify-center gap-4 ">
          <li>
            <Link href={"/cart"}>
              <FiShoppingBag size={23} />
            </Link>
          </li>
          {!session && (
            <>
              <li>
                <Link
                  href={"/login"}
                  className={
                    "bg-green-900 text-green-100 rounded-sm px-4 py-1 self-start hover:bg-green-950 transition duration-300"
                  }
                >
                  login
                </Link>
              </li>
              <li>
                <Link
                  href={"/register"}
                  className={
                    "bg-green-900 text-green-100 rounded-sm px-4 py-1 self-start hover:bg-green-950 transition duration-300"
                  }
                >
                  register
                </Link>
              </li>
            </>
          )}

          {session && <li>hi , {session.user.name ?? "Guest"}</li>}
          {status === "authenticated" && (
            <li>
              <Button
                className={
                  "bg-green-900 text-green-100 rounded-sm px-4 py-1 self-start hover:bg-green-950 transition duration-300"
                }
                onClick={logout}
              >
                sign out
              </Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
