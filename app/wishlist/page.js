import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export default async function Wishlist() {
  const x = await getServerSession(authOptions);
  console.log(x);
  return <div></div>;
}
