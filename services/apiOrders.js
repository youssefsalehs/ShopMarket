"use server";

import getMyToken from "@/utilities/getMyToken";

export async function createOrder(cartId, shippingAddress) {
  const token = await getMyToken();

  const res = await fetch(`${process.env.BACKEND}/orders/${cartId}`, {
    method: "POST",
    headers: {
      token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shippingAddress }),
  });

  if (!res.ok) {
    throw new Error("Failed to create order");
  }

  return res.json();
}
