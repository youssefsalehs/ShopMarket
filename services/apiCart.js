"use server";
import getMyToken from "@/utilities/getMyToken";

export async function addToCart(productId) {
  const token = await getMyToken();

  if (!token) throw new Error("not allowed login first");
  const res = await fetch(`${process.env.BACKEND}/cart`, {
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

export async function getCart() {
  const token = await getMyToken();

  if (!token) throw new Error("not allowed login first");
  const res = await fetch(`${process.env.BACKEND}/cart`, {
    method: "GET",
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function deleteFromCart(productId) {
  const token = await getMyToken();

  if (!token) throw new Error("not allowed login first");
  const res = await fetch(`${process.env.BACKEND}/cart/${productId}`, {
    method: "DELETE",
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
export async function updateCart(productId, val) {
  const token = await getMyToken();

  if (!token) throw new Error("not allowed login first");
  const res = await fetch(`${process.env.BACKEND}/cart/${productId}`, {
    method: "Put",
    body: JSON.stringify({ count: val }),
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
}
export async function clearCart() {
  const token = await getMyToken();

  if (!token) throw new Error("not allowed login first");
  const res = await fetch(`${process.env.BACKEND}/cart`, {
    method: "DELETE",
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
