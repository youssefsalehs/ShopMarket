export async function GET() {
  console.log("entered here");
  try {
    const res = await fetch(`${process.env.BACKEND}/categories?limit=40`);
    if (!res.ok) {
      return Response.json(
        { message: "Failed to fetch categories" },
        { status: res.status },
      );
    }

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
