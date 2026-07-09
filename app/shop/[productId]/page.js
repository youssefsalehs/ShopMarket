import Details from "@/app/_components/Product/Details";
import Gallery from "@/app/_components/Product/Gallery";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
export default async function ProductDetails({ params }) {
  const { productId } = await params;

  const res = await fetch(`${process.env.NEXT_URL}/api/products/${productId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const product = data.data;
  console.log(product);

  return (
    <div className="w-[90%] md:w-[80%] my-8 mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
      <Gallery images={product.images} imageCover={product.imageCover} />
      <Details product={product} />
    </div>
  );
}
