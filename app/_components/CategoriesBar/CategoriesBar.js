"use client";

import { useState } from "react";
import Link from "next/link";
import CategoryBtn from "./CategoryBtn";
import Products from "./Products";

export default function CategoriesBar({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[1].name);

  const shownCategories = categories.slice(1, 3);

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
          className="border border-green-900 text-green-900 px-6 py-2 rounded-full ml-auto"
        >
          Shop All
        </Link>
      </div>
      <Products selectedCategory={selectedCategory} />
    </>
  );
}
