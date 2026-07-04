import React from "react";
import ProductCard from "../../Product/ProductCard";
import { LuLoaderCircle } from "react-icons/lu";

export default function Products({ products }) {
  return (
    <div className=" grid items-center justify-center sm:grid-cols-2  lg:grid-cols-3 gap-4 ">
      {products?.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
      {products.length === 0 && (
        <div className="flex flex-col gap-4 justify-center items-center col-span-full my-auto">
          <h3 className="text-2xl font-semibold">No Product Available</h3>
          <p>
            We&apos;re sorry, but there are no products matching on criteria at
            the moment.
          </p>
          <p className="flex gap-1 items-center">
            <LuLoaderCircle className="animate-spin" />
            <span>We&apos;re restocking shortly</span>
          </p>
          <span>
            Please check back later or explore our other product categories.
          </span>
        </div>
      )}
    </div>
  );
}
