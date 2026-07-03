import CategoriesBar from "./CategoriesBar";

export default async function CategoriesBarContainer() {
  const res = await fetch(`${process.env.APP_URL}/api/categories`);
  const data = await res.json();

  return <CategoriesBar categories={data.data} />;
}
