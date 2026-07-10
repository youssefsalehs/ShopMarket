import CategoriesBarContainer from "./_components/CategoriesBar/CategoriesBarContainer";
import Hero from "./_components/Hero/Hero";
import PopularCategories from "./_components/PopularCategories/PopularCategories";
import ShopByBrands from "./_components/PopularCategories/ShopByBrands";
export const metadata = {
  description:
    "ShopMarket is a modern e-commerce web application built with Next.js, React, and Tailwind CSS. It features product browsing, advanced filtering, authentication, wishlist and shopping cart functionality, responsive design, and seamless API integration to deliver a fast and user-friendly shopping experience.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesBarContainer />
      <PopularCategories />
      <ShopByBrands />
    </>
  );
}
