import Link from "next/link";
import { Suspense } from "react";
import LatestUpdates from "./components/home/LatestUpdates/LatestUpdates";
import { Banner } from "./components/home/Banner/Banner";
import SkeletoMangaHomePage from "./components/Skeleto/SkeletoMangaHomePage";

export default function HomePage() {
  return (
    <div className="w-full select-none">
      <div className="relative">
        <Banner />
      </div>
      <section className="text-[#1f2937] bg-transparent py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg lg:text-xl font-bold">Vừa cập nhật</h2>
            <Link href="/truyen">
              <button className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                Xem tất cả
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 lg:gap-6">
            <Suspense
              fallback={Array.from({ length: 16 }).map((_, idx) => (
                <SkeletoMangaHomePage key={idx} />
              ))}
            >
              <LatestUpdates />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
