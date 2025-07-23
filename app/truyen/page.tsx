import { Suspense } from "react";
import { MangaPageContent } from "./MangaPageContent";
import SkeletoMangaHomePage from "../components/Skeleto/SkeletoMangaHomePage";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page;
  const pageNumber = typeof page === "string" ? page : "1";

  return (
    <div className="w-full select-none">
      <section className="text-[#1f2937] bg-transparent py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Suspense
            fallback={
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 lg:gap-6">
                {Array.from({ length: 24 }).map((_, idx) => (
                  <SkeletoMangaHomePage key={idx} />
                ))}
              </div>
            }
          >
            <MangaPageContent pageParam={pageNumber} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
