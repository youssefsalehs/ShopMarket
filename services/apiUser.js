"use server";

import getMyToken from "@/utilities/getMyToken";

export async function changePassword(data) {
  try {
    const token = await getMyToken();

    const res = await fetch(`${process.env.BACKEND}/users/changeMyPassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    return await res.json();
  } catch (error) {
    return {
      message: "Internal Server Error",
    };
  }
}
