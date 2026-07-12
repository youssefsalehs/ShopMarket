import Details from "@/app/_components/Product/Details";
import Gallery from "@/app/_components/Product/Gallery";
import { getProduct } from "@/services/apiProducts";
export default async function ProductDetails({ params }) {
  const { productId } = await params;

  const res = await getProduct(productId);
  const product = res.data;

  return (
    <div className="w-[90%] md:w-[80%] my-8 mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
      <Gallery images={product.images} imageCover={product.imageCover} />
      <Details product={product} />
    </div>
  );
}
