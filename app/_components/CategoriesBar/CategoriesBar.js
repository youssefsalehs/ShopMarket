"use client";

import { useState } from "react";
import Link from "next/link";
import CategoryBtn from "./CategoryBtn";
import Products from "./Products";

export default function CategoriesBar({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[1]._id);

  const shownCategories = categories.slice(1, 4);

  return (
    <>
      <div className="flex gap-4 flex-wrap w-[90%] md:w-[80%] mx-auto mt-6 font-semibold">
        {shownCategories.map((category) => (
          <CategoryBtn
            key={category._id}
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}

        <Link
          href="/shop"
          className="border border-green-900 text-green-900 px-6 py-2 rounded-full ml-0 md:ml-auto hover:bg-green-900 hover:text-green-50 transition duration-300"
        >
          Shop All
        </Link>
      </div>
      <Products selectedCategory={selectedCategory} />
    </>
  );
}
