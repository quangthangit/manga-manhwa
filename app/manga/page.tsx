import { Suspense } from "react"
import MangaPageContent from "./MangaPageContent"

function MangaPageLoading() {
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

export default function Page() {
  return (
    <Suspense fallback={<MangaPageLoading />}>
      <MangaPageContent />
    </Suspense>
  )
}
