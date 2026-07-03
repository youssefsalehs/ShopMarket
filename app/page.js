import CategoriesBarContainer from "./_components/CategoriesBar/CategoriesBarContainer";
import Hero from "./_components/Hero/Hero";
import PopularCategories from "./_components/PopularCategories/PopularCategories";
import ShopByBrands from "./_components/PopularCategories/ShopByBrands";

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
