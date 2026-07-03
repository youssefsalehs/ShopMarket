export async function GET(request) {
  try {
    // Create backend URL
    const url = new URL(`${process.env.BACKEND}/products`);

    // Copy all query parameters from the incoming request
    request.nextUrl.searchParams.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    // Fetch products from the backend
    const res = await fetch(url.toString(), {
      cache: "no-store", // Optional: always fetch fresh data
    });

    if (!res.ok) {
      return Response.json(
        { message: "Failed to fetch products" },
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
