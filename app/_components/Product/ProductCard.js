"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { addToWishlist } from "@/services/apiWishlist";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { IoMdHeart } from "react-icons/io";

export default function ProductCard({ product }) {
  const handleAddToWishlist = async (productId) => {
    const res = await addToWishlist(productId);
    if (res?.status === "success") {
      toast.success("Product added to wishlist successfully!", { icon: "❤️" });
    } else {
      toast.error(res?.message || "Something went wrong.");
    }
  };
  return (
    <Card className="w-full max-w-sm overflow-hidden pt-0 group">
      <CardHeader className="p-0">
        <div className="flex justify-center p-0 overflow-hidden relative  h-[250px] w-full ">
          <Image
            src={product.imageCover}
            fill
            alt={product.title}
            className="object-cover object-center group-hover:scale-105 transition duration-300 "
          />
          <span
            className="absolute top-2 right-2 text-slate-800/50 hover:text-green-800 hover:bg-green-200/80 p-2 bg-slate-200/50 rounded-full cursor-pointer duration-300 transition"
            onClick={() => handleAddToWishlist(product?._id)}
          >
            <IoMdHeart size={20} />
          </span>
        </div>
      </CardHeader>
      <Link href={`/shop/${product._id}`}>
        <CardContent className="space-y-2">
          {product?.subcategory.map((s) => (
            <p key={s?._id} className="text-slate-400">
              {s?.name}
            </p>
          ))}
          <h3 className="text-lg font-semibold line-clamp-1">
            {product.title}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
          <span className="text-sm font-bold">
            in stock {product?.quantity}
          </span>

          <div className="flex justify-between items-center text-sm">
            <span className="font-bold">$ {product.price}</span>

            <span className="text-yellow-500">⭐ {product.ratingsAverage}</span>
          </div>
        </CardContent>
      </Link>
      <CardFooter className={"mt-auto"}>
        <Button className="bg-green-900 text-green-100 rounded-sm  hover:bg-green-950 transition duration-300 w-full cursor-pointer">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
