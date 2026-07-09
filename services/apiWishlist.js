"use server";
import getMyToken from "@/utilities/getMyToken";

export async function addToWishlist(productId) {
  const token = await getMyToken();

  if (!token) throw new Error("not allowed login first");
  const res = await fetch(`${process.env.BACKEND}/wishlist`, {
    method: "POST",
    body: JSON.stringify({ productId }),
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function getWishlist() {
  const token = await getMyToken();

  if (!token) throw new Error("not allowed login first");
  const res = await fetch(`${process.env.BACKEND}/wishlist`, {
    method: "GET",
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function deleteFromWishlist(productId) {
  const token = await getMyToken();

  if (!token) throw new Error("not allowed login first");
  const res = await fetch(`${process.env.BACKEND}/wishlist/${productId}`, {
    method: "DELETE",
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
