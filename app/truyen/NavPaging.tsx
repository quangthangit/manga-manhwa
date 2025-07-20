import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

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
  return (
    <div className="flex justify-center mt-10">
      <nav className="inline-flex items-center space-x-1 rounded-xl p-1 shadow-sm bg-gray-700 text-gray-200 text-sm md:text-base">
        <button
          onClick={() => goToPageclick(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-3 py-2 rounded-lg hover:bg-gray-400 disabled:opacity-50 disabled:pointer-events-none active:bg-gray-500"
        >
          <ArrowLeftCircleIcon />
        </button>
        {currentPage > 3 && (
          <>
            <button
              onClick={() => goToPageclick(1)}
              className={`px-3 py-2 active:bg-gray-500 rounded-lg hover:bg-gray-400 ${
                currentPage === 1 ? "bg-gray-300 font-bold text-black" : ""
              }`}
            >
              1
            </button>
            {currentPage > 4 && <span className="px-2">...</span>}
          </>
        )}
        {Array.from({ length: totalPage }, (_, i) => i + 1)
          .filter(
            (page) =>
              page >= currentPage - 2 &&
              page <= currentPage + 2 &&
              page !== 1 &&
              page !== totalPage
          )
          .map((page) => (
            <button
              key={page}
              onClick={() => goToPageclick(page)}
              className={`px-3 py-2 active:bg-gray-500 rounded-lg hover:bg-gray-400 ${
                currentPage === page ? "bg-gray-300 font-bold text-black" : ""
              }`}
            >
              {page}
            </button>
          ))}
        {currentPage < totalPage - 2 && (
          <>
            {currentPage < totalPage - 3 && <span className="px-2">...</span>}
            <button
              onClick={() => goToPageclick(totalPage)}
              className={`px-3 py-2 active:bg-gray-500 rounded-lg hover:bg-gray-400 ${
                currentPage === totalPage
                  ? "bg-gray-300 font-bold text-black"
                  : ""
              }`}
            >
              {totalPage}
            </button>
          </>
        )}
        <button
          onClick={() => goToPageclick(currentPage + 1)}
          disabled={currentPage >= totalPage}
          className="px-3 py-2 active:bg-gray-500 rounded-lg hover:bg-gray-400 disabled:opacity-50 disabled:pointer-events-none"
        >
          <ArrowRightCircleIcon />
        </button>
      </nav>
    </div>
  );
};
