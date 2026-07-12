"use server";
export async function getBrands() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands");
  if (!res.ok) {
    throw new Error("Failed to fetch brands");
  }

  return res.json();
}
