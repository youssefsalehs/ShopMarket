import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiShoppingBasket } from "react-icons/ci";
import Link from "next/link";
export default async function Footer() {
  const res = await fetch(`${process.env.APP_URL}/api/categories`);
  const data = await res.json();
  const categories = data.data;
  return (
    <div className="mt-auto border-t border-stone-200 bg-stone-50/40">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-wrap justify-between gap-4  border-b border-stone-200">
        <Card
          icon={IoLocationOutline}
          title="Visit Us"
          desc="New Orleans, USA"
        />

        <Card icon={IoCallOutline} title="Call Us" desc="+12 958 648 597" />

        <Card
          icon={FiClock}
          title="Working Hours"
          desc="Mon - Sat: 10:00 AM - 7:00 PM"
        />

        <Card icon={HiOutlineMail} title="Email Us" desc="Shopcart@gmail.com" />
      </div>

      <div className="w-[90%] lg:w-[80%] mx-auto py-10 flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-1/3  lg:text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xl font-bold text-green-800"
          >
            <CiShoppingBasket size={28} />
            ShopMarket
          </Link>

          <p className="mt-4 text-stone-600 leading-7">
            Discover curated furniture collections at ShopMarket, blending style
            and comfort to elevate your living spaces.
          </p>
        </div>

        <div className="w-full lg:w-1/3">
          <iframe
            className="w-full h-56"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56637063.65566047!2d-161.806640625!3d29.954934549656144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sen!2seg!4v1783298193917!5m2!1sen!2seg"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="w-full lg:w-1/4  lg:text-left">
          <h3 className="font-semibold text-lg mb-4">Categories</h3>

          <ul className="space-y-2">
            {categories.map((c) => (
              <li key={c._id}>
                <Link
                  className="text-sm text-stone-600 hover:text-green-800 transition"
                  href={`/shop?category=${c._id}`}
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="w-[90%] lg:w-[80%] mx-auto border-t py-5 text-center text-sm text-stone-600">
        © {new Date().getFullYear()}
        <span className="font-bold text-green-800"> ShopMarket</span>. All
        rights reserved.
      </footer>
    </div>
  );
}
function Card({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 w-full sm:w-[48%] lg:w-[23%] p-3  hover:bg-stone-100 transition">
      <Icon size={25} className="text-green-800 shrink-0" />

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-stone-500">{desc}</p>
      </div>
    </div>
  );
}
