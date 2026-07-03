import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";

export default function ProductCard({ product }) {
  return (
    <Card className="w-full max-w-sm overflow-hidden pt-0 group">
      <CardHeader className=" ">
        <div className="flex justify-center p-0 overflow-hidden relative  h-[250px] w-full ">
          <Image
            src={product.imageCover}
            fill
            alt={product.title}
            className="object-cover object-center group-hover:scale-105 transition duration-300 z-20"
          />
          <span className="absolute top-2 right-2 text-slate-800/50 hover:text-green-800 hover:bg-green-200/50 p-2 bg-slate-200/50 rounded-full cursor-pointer duration-300 transition">
            <IoMdHeart size={20} />
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        {product?.subcategory.map((s) => (
          <p key={s?._id} className="text-slate-400">
            {s?.name}
          </p>
        ))}
        <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        <span className="text-sm font-bold">in stock {product?.quantity}</span>

        <div className="flex justify-between items-center text-sm">
          <span className="font-bold">$ {product.price}</span>

          <span className="text-yellow-500">⭐ {product.ratingsAverage}</span>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="bg-green-900 text-green-100 rounded-sm  hover:bg-green-950 transition duration-300 w-full cursor-pointer">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
