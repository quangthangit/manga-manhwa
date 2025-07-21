"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { NavPaging } from "../components/NavPaging";
import { ListManga } from "../truyen/ListManga";
import { useMangasByKey } from "../hooks/useMangasByKey";
type MangaSearchPageTypes = {
  page?: string;
  keyword?: string;
};
export function MangaSearchPage({
  keyword = "",
  page = "1",
}: MangaSearchPageTypes) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { loading, mangas, totalPage } = useMangasByKey(keyword, page);
  const currentPage = parseInt(page, 10);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.push(`?${params.toString()}`, { scroll: true });
    }
  };

  if (loading || !mangas)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-10 mt-[70px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg lg:text-xl font-bold text-white">
            Truyện theo từ khóa '{keyword}'
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6">
          <ListManga mangas={mangas} />
        </div>
      </div>

      <NavPaging
        currentPage={currentPage}
        goToPageclick={goToPage}
        totalPage={totalPage}
      />
    </div>
  );
}
