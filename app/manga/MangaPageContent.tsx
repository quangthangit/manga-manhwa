"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useMangas } from "../hooks/useMangas"
import { ListManga } from "./ListManga"
import { NavPaging } from "./NavPaging"

export default function MangaPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Number.parseInt(searchParams.get("page") || "1", 10)
  const { loading, mangas, totalPage } = useMangas(currentPage)

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      router.push(`?page=${page}`, { scroll: true })
    }
  }

  if (loading || !mangas) {
    return (
      <div className="min-h-screen bg-gray-900 px-4 py-10 mt-[70px]">
        <div className="max-w-7xl mx-auto">
          <div className="h-6 bg-gray-700 rounded w-96 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[2/3] bg-gray-700 rounded-lg mb-2"></div>
                <div className="h-4 bg-gray-700 rounded mb-1"></div>
                <div className="h-3 bg-gray-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

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
      <NavPaging currentPage={currentPage} goToPageclick={goToPage} totalPage={totalPage} />
    </div>
  )
}
