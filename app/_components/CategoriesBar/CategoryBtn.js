"use client";


export default function CategoryBtn({
  category,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div
      className={`${selectedCategory === category?._id ? "bg-green-900 border text-green-50 border-green-900" : "bg-green-50 border border-green-200"}  px-6 py-2 rounded-full cursor-pointer `}
      onClick={() => setSelectedCategory(category._id)}
    >
      {" "}
      {category.name}{" "}
    </div>
  );
}
