"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMangas } from "../hooks/useMangas";
import { ListManga } from "./ListManga";
import { NavPaging } from "./NavPaging";

type MangaPageContentTypes = {
  pageParam?: string;
};

export function MangaPageContent({ pageParam }: MangaPageContentTypes) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number.parseInt(
    pageParam || searchParams.get("page") || "1",
    10
  );

  const { loading, mangas, totalPage } = useMangas(currentPage);

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
        <h2 className="text-sm font-bold text-gray-500 dark:text-gray-300 mb-4">
          TRUYENTRANH Chính thức - Đọc truyện tranh miễn phí
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
