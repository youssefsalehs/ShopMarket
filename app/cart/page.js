import getMyToken from "@/utilities/getMyToken";

export default async function Cart() {
  const token = await getMyToken();
  return <div>Cart</div>;
}
