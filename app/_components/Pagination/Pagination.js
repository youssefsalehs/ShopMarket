"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo({ metaData, currentPage }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!metaData?.numberOfPages) return null;

  const { numberOfPages } = metaData;

  function goToPage(page) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <Pagination className={""}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) {
                goToPage(currentPage - 1);
              }
            }}
          />
        </PaginationItem>

        {Array.from({ length: numberOfPages }, (_, index) => {
          const page = index + 1;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            className={
              currentPage === numberOfPages
                ? "pointer-events-none opacity-50"
                : ""
            }
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < numberOfPages) {
                goToPage(currentPage + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
