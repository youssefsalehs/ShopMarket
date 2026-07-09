import { Button } from "@/components/ui/button";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function Details({ product }) {
  return (
    <div className="flex flex-col gap-4 ">
      <p className="font-semibold text-lg">
        {product.brand.name} - {product.subcategory[0].name}
      </p>
      <h2 className="text-3xl">{product.title}</h2>
      <p className="flex items-center text-lg gap-2">
        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-500" size={25} />
          {product.ratingsAverage}
        </span>
        <span>.</span>
        <sub className="opacity-60">{product.ratingsQuantity} ratings</sub>
      </p>
      <div className="bg-green-50 border border-green-900 border-dashed w-fit p-4 text-2xl shadow">
        £{product.price}
        <sub className="text-sm opacity-60">EGP | {product.sold} sold</sub>
      </div>
      <div>
        <h4 className="text-xl font-semibold">Description</h4>
        <p className="text-sm">{product.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="border border-green-900 rounded-sm overflow-hidden">
          <Button className="bg-green-900 text-green-100 rounded-none border-0 px-4  hover:bg-green-950 transition duration-300 cursor-pointer">
            -
          </Button>
          <span className="mx-3">0</span>
          <Button className="bg-green-900 text-green-100  rounded-none border-0 px-4   hover:bg-green-950 transition duration-300 cursor-pointer">
            +
          </Button>
        </div>
        <Button className="flex-1 bg-green-900 text-green-100 rounded-sm px-4 py-4 border-green-900 self-start hover:bg-green-950 transition duration-300 cursor-pointer">
          Add To cart
        </Button>
      </div>
    </div>
  );
}
