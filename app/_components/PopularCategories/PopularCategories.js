import Image from "next/image";
import Link from "next/link";

export default async function PopularCategories() {
  const res = await fetch(`${process.env.APP_URL}/api/categories`);
  const data = await res.json();
  console.log(data.data[0]);
  return (
    <div className="flex flex-col gap-2 w-[90%] md:w-[80%] mx-auto p-4 border border-slate-200 rounded mt-8">
      <h2 className="font-semibold border-b border-slate-200 mb-4 pb-2 text-xl">
        Popular Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.data.slice(2, 6).map((c) => (
          <div
            key={c._id}
            className="flex gap-4 items-center border border-slate-100 p-4 bg-slate-100"
          >
            <Link
              href={"/categories"}
              className="w-20 h-20 relative border border-slate-300 overflow-hidden"
            >
              <Image
                src={c.image}
                fill
                alt={c.name}
                className="object-cover p-2 hover:scale-115 transition duration-300"
              />
            </Link>

            <p className="font-semibold">{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
