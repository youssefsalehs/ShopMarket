import getMyToken from "@/utilities/getMyToken";
import Link from "next/link";

import { FiShoppingBag } from "react-icons/fi";

export default async function Cart() {
  const token = await getMyToken();
  const products = [];
  if (products?.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-16 px-6 max-w-md mx-auto">
        <span className=" text-slate-800/50 hover:text-green-800 hover:bg-green-200/80 p-4 bg-slate-200/50 rounded-full cursor-pointer duration-300 transition mb-3">
          <FiShoppingBag size={25} />
        </span>

        <h3 className="text-lg font-medium mb-2">Your Cart is empty</h3>
        <p className="text-sm text-stone-500 mb-6 ">
          Save items you love and find them here later. Tap the heart icon on
          any product to add it.
        </p>

        <Link
          href="/shop"
          className={
            "bg-green-900 text-green-100 rounded-sm px-4 py-1  hover:bg-green-950 transition duration-300"
          }
        >
          Start browsing
        </Link>
      </div>
    );
  }
  return <div className="w-[90%] md:w-[80%] mx-auto">Cart</div>;
}
