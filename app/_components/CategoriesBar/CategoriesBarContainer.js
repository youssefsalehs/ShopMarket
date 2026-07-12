import { getCategories } from "@/services/apiCategories";
import CategoriesBar from "./CategoriesBar";

export default async function CategoriesBarContainer() {
  const data = await getCategories();

  return <CategoriesBar categories={data.data} />;
}
