import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type NavPagingTypes = {
  currentPage: number;
  totalPage: number;
  goToPageclick: (page: number) => void;
};

export const NavPaging = ({
  currentPage,
  totalPage,
  goToPageclick,
}: NavPagingTypes) => {
  const renderPages = () => {
    const pages = [];
    const maxPages = 5;
    const half = Math.floor(maxPages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPage, start + maxPages - 1);

    if (end - start < maxPages - 1) {
      start = Math.max(1, end - maxPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={(e) => {
              e.preventDefault();
              goToPageclick(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-10">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) goToPageclick(currentPage - 1);
              }}
            />
          </PaginationItem>

          {renderPages()}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPage) goToPageclick(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
