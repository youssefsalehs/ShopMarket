"use client";

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

export default function ClearFiltersButton() {
  const router = useRouter();
  const pathname = usePathname();

  function clearFilters() {
    router.push(pathname);
  }

  return (
    <Button
      className={
        "bg-green-900 text-green-100 rounded-sm px-4 py-1  hover:bg-green-950 transition duration-300"
      }
      onClick={clearFilters}
    >
      Clear Filters
    </Button>
  );
}
