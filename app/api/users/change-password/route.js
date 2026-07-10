import getMyToken from "@/utilities/getMyToken";

export async function PUT(request) {
  try {
    const body = await request.json();
    const token = await getMyToken();
    const res = await fetch(`${process.env.BACKEND}/users/changeMyPassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return Response.json(data, {
      status: res.status,
    });
  } catch (error) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
