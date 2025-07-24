import { Suspense } from "react";
import SkeletoMangaDetailPage from "@/app/components/Skeleto/SkeletoMangaDetailPage";
import MangaPageDetail from "./MangaPageDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  return (
    <Suspense
      fallback={
        <>
          <SkeletoMangaDetailPage />
        </>
      }
    >
      <div className="max-w-7xl rounded-lg  bg-white rounded-t-lg mx-auto text-[#1f2937] mt-20">
         <MangaPageDetail params={params} />
      </div>
    </Suspense>
  );
}
