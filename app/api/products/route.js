export async function GET(request) {
  try {
    const url = new URL(`${process.env.BACKEND}/products`);

    request.nextUrl.searchParams.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    const res = await fetch(url.toString(), {
      cache: "no-store",
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
