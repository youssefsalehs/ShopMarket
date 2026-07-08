import { bannerImg } from "@/app/_assets/assets";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-green-50 w-[90%] md:w-[80%]  mx-auto flex justify-center md:justify-between items-center rounded-md">
      <div className="px-20 py-20 flex flex-col gap-4">
        <p className="font-bold text-green-900 text-3xl">
          Grab Up to 50% Off on <br />
          Selected headphone
        </p>
        <Link
          href={"/shop"}
          className={
            "bg-green-900 text-green-100 rounded-sm px-4 py-1 self-start hover:bg-green-950 transition duration-300"
          }
        >
          Buy Now
        </Link>
      </div>
      <Image
        src={bannerImg}
        width={400}
        className="hidden md:block"
        alt="girl wearing headphones"
      />
    </div>
  );
}
