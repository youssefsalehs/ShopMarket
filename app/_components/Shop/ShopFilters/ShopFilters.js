"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ShopFilters({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateParam(key, value) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.delete("page");

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="col-span-5 md:col-span-2 md:border-r border-stone-500 max-h-[100vh] overflow-y-scroll hide-scrollbar p-4">
      <div className="">
        <h3 className="mb-4 text-xl ">categories</h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="all"
              name="category"
              value=""
              checked={selectedCategory === ""}
              onChange={(e) => updateParam("category", e.target.value)}
              className="h-5 w-5 appearance-none rounded border-2 border-gray-400 checked:border-green-900 checked:bg-green-900"
            />
            <label htmlFor="all">All Categories</label>
          </div>

          {categories.map((category) => (
            <div key={category._id} className="flex items-center gap-2">
              <input
                type="radio"
                id={category._id}
                name="category"
                value={category._id}
                checked={selectedCategory === category._id}
                onChange={(e) => updateParam("category", e.target.value)}
                className="h-5 w-5 appearance-none rounded border-2 border-gray-400 checked:border-green-900 checked:bg-green-900"
              />

              <label htmlFor={category._id}>{category.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="mb-4 text-xl">Brands</h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="allB"
              name="brand"
              value=""
              checked={selectedBrand === ""}
              onChange={(e) => updateParam("brand", e.target.value)}
              className="h-5 w-5 appearance-none rounded border-2 border-gray-400 checked:border-green-900 checked:bg-green-900"
            />
            <label htmlFor="allB">all brands</label>
          </div>

          {brands.map((brand) => (
            <div key={brand._id} className="flex items-center gap-2">
              <input
                type="radio"
                id={brand._id}
                name="brand"
                value={brand._id}
                checked={selectedBrand === brand._id}
                onChange={(e) => updateParam("brand", e.target.value)}
                className="h-5 w-5 appearance-none rounded border-2 border-gray-400 checked:border-green-900 checked:bg-green-900"
              />

              <label htmlFor={brand._id}>{brand.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
