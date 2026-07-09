import { getWishlist } from "@/services/apiWishlist";
import WishlistCard from "../_components/Wishlist/WishlistCard";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";
export default async function Wishlist() {
  const res = await getWishlist();
  const products = res.data;
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-16 px-6 max-w-md mx-auto">
        <span className=" text-slate-800/50 hover:text-green-800 hover:bg-green-200/80 p-4 bg-slate-200/50 rounded-full cursor-pointer duration-300 transition mb-3">
          <IoMdHeart size={25} />
        </span>

        <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
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
  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      <h2 className="border-b  border-stone-500 pb-4 text-3xl font-semibold ">
        Wishlist ({products.length})
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8">
        {" "}
        {products.map((product) => (
          <WishlistCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
