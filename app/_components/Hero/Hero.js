import { bannerImg } from "@/app/_assets/assets";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-green-50 w-[90%] md:w-[80%] mx-auto flex justify-between items-center rounded-md px-6 md:px-12 overflow-hidden">
      <div className="py-12 md:py-20 flex flex-col gap-4 max-w-md">
        <p className="font-bold text-green-900 text-2xl md:text-3xl leading-snug">
          Grab Up to 50% Off on Selected Headphones
        </p>
        <Link
          href={"/shop"}
          className="bg-green-900 text-green-100 rounded-sm px-4 py-2 self-start hover:bg-green-950 transition duration-300"
        >
          Buy Now
        </Link>
      </div>
      <Image
        src={bannerImg}
        width={400}
        height={400}
        className="hidden sm:block w-[160px] md:w-[400px] h-auto"
        sizes="(max-width: 768px) 160px, 400px"
        alt="Woman wearing headphones"
        priority
      />
    </div>
  );
}
