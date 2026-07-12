"use client";

import { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import { getProducts } from "@/services/apiProducts";

export default function Products({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const params = new URLSearchParams();
  params.set("limit", 8);
  params.append("category[in]", selectedCategory);
  useEffect(() => {
    async function getProductsApi() {
      const res = await getProducts(params);
      setProducts(res.data);
    }

    getProductsApi();
  }, [selectedCategory, params]);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto grid items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      {products.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
}
