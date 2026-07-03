"use client";

import { useEffect, useState } from "react";

export default function Products({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  console.log(selectedCategory);
  useEffect(() => {
    async function getProducts() {
      const res = await fetch(`/api/products`);
      const data = await res.json();
      const products = data?.data.filter(
        (p) => p?.category.name === selectedCategory,
      );
      console.log(data?.data);
      setProducts(products);
    }

    getProducts();
  }, [selectedCategory]);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product._id}>{product.title}</div>
      ))}
    </div>
  );
}
