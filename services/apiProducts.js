"use server";
export async function getProducts(searchParams) {
  const params = new URLSearchParams();

  params.set("limit", "9");
  params.set("page", searchParams.page || "1");

  if (searchParams.category) {
    params.append("category[in]", searchParams.category);
  }

  if (searchParams.brand) {
    params.set("brand", searchParams.brand);
  }

  const res = await fetch(
    `${process.env.BACKEND}/products?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProduct(productId) {
  const res = await fetch(`${process.env.BACKEND}/products/${productId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
