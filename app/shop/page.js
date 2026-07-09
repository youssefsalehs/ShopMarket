import { PaginationDemo } from "../_components/Pagination/Pagination";
import ClearFiltersButton from "../_components/Shop/ClearFiltersButton/ClearFiltersButton";
import Products from "../_components/Shop/Products/Products";
import ShopFilters from "../_components/Shop/ShopFilters/ShopFilters";
async function getCategories() {
  const res = await fetch(`${process.env.NEXT_URL}/api/categories`, {
    cache: "no-store", // or "force-cache" / revalidate, depending on your needs
  });
  return res.json();
}

async function getBrands() {
  const res = await fetch(`${process.env.NEXT_URL}/api/brands`, {
    cache: "no-store",
  });
  return res.json();
}

async function getProducts(searchParams) {
  const params = new URLSearchParams();
  params.set("limit", 9);
  params.set("page", searchParams.page || 1);

  if (searchParams.category) {
    params.append("category[in]", searchParams.category);
  }
  if (searchParams.brand) {
    params.set("brand", searchParams.brand);
  }

  const res = await fetch(
    `${process.env.NEXT_URL}/api/products?${params.toString()}`,
    { cache: "no-store" },
  );
  return res.json();
}

export default async function Page({ searchParams }) {
  const params = await searchParams;

  const [categoriesData, brandsData, productsData] = await Promise.all([
    getCategories(),
    getBrands(),
    getProducts(params),
  ]);

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
      <div className="flex justify-between border-b border-stone-500 pb-4">
        <h3 className="text-xl md:text-xl">Get the products as your needs</h3>
        <ClearFiltersButton />
      </div>

      <div className="flex flex-col md:grid md:grid-cols-8 gap-6">
        <ShopFilters
          categories={categoriesData.data}
          brands={brandsData.data}
          selectedCategory={params.category || ""}
          selectedBrand={params.brand || ""}
        />

        <div className="md:col-span-6 p-4 max-h-[100vh] overflow-y-scroll hide-scrollbar">
          <Products products={productsData.data} />

          <div className="mt-8 flex justify-center">
            <PaginationDemo
              metaData={productsData.metadata}
              currentPage={Number(params.page) || 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
