"use client";

import { ChapterFloatingButtons } from "./ChapterFloatingButtons";
import { ChapterViewer } from "./ChapterViewer";
import { useChapter } from "@/app/hooks/useChapter";

type Props = {
  slug: string;
  id: string;
  chapter: string;
};

export default function MangaPageChapter({ chapter, id, slug }: Props) {
  const { data, loading } = useChapter(id);

  if (loading || !data)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );

  return (
    <>
      <ChapterFloatingButtons id={id} slug={slug} chapter={chapter} />
      <ChapterViewer data={data} />
    </>
  );
}
