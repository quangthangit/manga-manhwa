"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ListManga } from "./ListManga";
import { NavPaging } from "../components/NavPaging";
import { useMangas } from "../hooks/useMangas";
import SkeletoMangaHomePage from "../components/Skeleto/SkeletoMangaHomePage";

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

  const { mangas, totalPage, loading } = useMangas(currentPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.push(`?${params.toString()}`, { scroll: true });
    }
  };
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 lg:gap-6">
        {Array.from({ length: 24 }).map((_, idx) => (
          <SkeletoMangaHomePage key={idx} />
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 lg:gap-6">
        <ListManga mangas={mangas} />
      </div>
      <NavPaging
        currentPage={currentPage}
        totalPage={totalPage}
        goToPageclick={goToPage}
      />
    </>
  );
}
