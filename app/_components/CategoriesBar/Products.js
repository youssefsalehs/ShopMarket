"use client";

import { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";

export default function Products({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const params = new URLSearchParams();
  params.set("limit", 8);
  params.append("category[in]", selectedCategory);
  console.log(selectedCategory);
  useEffect(() => {
    async function getProducts() {
      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();
      console.log(data);
      setProducts(data.data);
    }

    getProducts();
  }, [selectedCategory, params]);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      {products.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
}
