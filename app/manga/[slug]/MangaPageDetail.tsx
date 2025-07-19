"use client";

import { useMangaDetails } from "@/app/hooks/useMangaDetails";
import { useParams } from "next/navigation";
import { MangaDetail } from "./MangaDetail";
import { ManagaBanner } from "./ManagaBanner";

export default function MangaPageDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const { loading, manga } = useMangaDetails(slug);

  if (loading || !manga)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  return (
    <>
      <ManagaBanner
        category={manga?.category}
        content={manga?.content}
        name={manga?.name}
        thumb_url={manga?.thumb_url}
        updatedAt={manga?.updatedAt}
      />
      <MangaDetail comicItem={manga} />
    </>
  );
}
