"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { PaginationDemo } from "../_components/Pagination/Pagination";
import Products from "../_components/Shop/Products/Products";
import ShopFilters from "../_components/Shop/ShopFilters/ShopFilters";

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [metaData, setMetaData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getCategories();
  }, []);
  useEffect(() => {
    async function getBrands() {
      try {
        const res = await fetch("/api/brands");
        const data = await res.json();
        setBrands(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getBrands();
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedBrand]);

  useEffect(() => {
    getProducts();
  }, [selectedCategory, selectedBrand, currentPage]);

  async function getProducts() {
    try {
      const params = new URLSearchParams();

      params.set("limit", 9);
      params.set("page", currentPage);

      if (selectedCategory) {
        params.append("category[in]", selectedCategory);
      }
      if (selectedBrand) {
        params.set("brand", selectedBrand);
      }

      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();

      setProducts(data.data);
      setMetaData(data.metadata);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto ">
      <div className="flex justify-between border-b border-stone-500 pb-4 ">
        <h3 className="text-xl md:text-xl  ">Get the products as your needs</h3>
        <Button
          className={
            "bg-green-900 text-green-100 rounded-sm px-4 py-1 self-start hover:bg-green-950 transition duration-300"
          }
          onClick={() => {
            setSelectedBrand("");
            setSelectedCategory("");
          }}
        >
          Clear filters
        </Button>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-8 gap-6 ">
        <ShopFilters
          categories={categories}
          brands={brands}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="md:col-span-6 p-4 max-h-[100vh] overflow-y-scroll hide-scrollbar">
          <Products products={products} />

          <div className="mt-8 flex justify-center">
            <PaginationDemo
              metaData={metaData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
