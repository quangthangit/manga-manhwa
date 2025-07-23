import { Suspense } from "react";
import SkeletoMangaDetailPage from "@/app/components/Skeleto/SkeletoMangaDetailPage";
import MangaPageDetail from "./MangaPageDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const slug = await params;

  return (
    <Suspense
      fallback={
        <>
          <SkeletoMangaDetailPage />
        </>
      }
    >
      <div className="max-w-7xl bg-white rounded-t-sm mx-auto text-[#1f2937] mt-20">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MangaPageDetail params={params} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
