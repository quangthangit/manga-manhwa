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
          <MangaPageContent pageParam={pageNumber} />
        </div>
      </section>
    </div>
  );
}
