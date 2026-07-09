// app/api/products/[productId]/route.js

export async function GET(request, { params }) {
  try {
    const { productId } = await params;

    const res = await fetch(`${process.env.BACKEND}/products/${productId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return Response.json(
        { message: "Failed to fetch product" },
        { status: res.status },
      );
    }

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.error(error);

    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
