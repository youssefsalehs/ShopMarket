"use server";
export async function getCategories() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
