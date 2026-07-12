"use server";
import getMyToken from "@/utilities/getMyToken";

export async function addToWishlist(productId) {
  try {
    console.log("BACKEND:", process.env.BACKEND);

    const token = await getMyToken();
    console.log("TOKEN EXISTS:", !!token);

    if (!token) {
      throw new Error("No token");
    }

    const res = await fetch(`${process.env.BACKEND}/wishlist`, {
      method: "POST",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    console.log("STATUS:", res.status);

    const data = await res.json();
    console.log("DATA:", data);

    if (!res.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  } catch (err) {
    console.error("Wishlist error:", err);
    throw err;
  }
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
