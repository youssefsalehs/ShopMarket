import getMyToken from "@/utilities/getMyToken";

export async function POST(request) {
  const { cartId, shippingAddress } = await request.json();
  const token = await getMyToken();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
    {
      method: "POST",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shippingAddress }),
    },
  );

  const data = await res.json();

  return Response.json(data);
}
