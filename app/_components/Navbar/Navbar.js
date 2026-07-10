"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import MobileNav from "./MobileNav";
export default function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const profileRef = useRef(null);
  const toggleProfile = () => {
    setOpenProfile((s) => !s);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
          {status === "authenticated" && (
            <div className="relative">
              <FaRegCircleUser
                size={25}
                className="cursor-pointer"
                onClick={toggleProfile}
              />

              {openProfile && (
                <div
                  className="absolute top-5 right-0 mt-2 w-48 rounded-lg border border-green-200 bg-green-50 shadow-lg z-50 w-fit overflow-hidden"
                  ref={profileRef}
                >
                  <div className="flex flex-col gap-2 px-3 py-2 bg-green-800 text-green-50">
                    {" "}
                    <p>hi, {session.user.name}</p>
                    <p className="text-sm">{session.user.email}</p>
                  </div>

                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">
                      <Link href={"/change-password"}>change password</Link>
                    </li>

                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">
                      <span onClick={logout}>sign out</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}
