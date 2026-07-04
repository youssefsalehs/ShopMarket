import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function ShopByBrands() {
  const res = await fetch(`${process.env.APP_URL}/api/brands`);
  const data = await res.json();
  return (
    <div className="flex flex-col gap-2 w-[90%] md:w-[80%] mx-auto p-4 border border-slate-200 rounded my-8">
      <div className="border-b border-slate-200 mb-4 pb-2 flex justify-between items-center ">
        <h2 className="font-semibold  text-xl">Shop by brands</h2>
        <Button
          className={
            " bg-transparent hover:bg-transparent  text-green-950 cursor-pointer font-bold"
          }
        >
          View all
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        {data.data.slice(6, 15).map((b) => (
          <div
            key={b._id}
            className="flex gap-4 items-center hover:-translate-y-1 hover:shadow transition duration-300"
          >
            <Link
              href={"/shop"}
              className="w-28 h-18 relative bg-slate-200 overflow-hidden"
            >
              <Image
                src={b.image}
                fill
                alt={b.name}
                className="object-cover p-2 "
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
