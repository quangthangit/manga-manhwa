import React from "react";

import { ChapterViewer } from "./ChapterViewer";
import { fetchChapter } from "@/app/api/fetchChapter";
import ChapterFloatingButtons from "./ChapterFloatingButtons";
type Props = {
  params: Promise<{ chapter: string }>;
};
export default async function Page({ params }: Props) {
  const { chapter } = await params;
  const manga = await fetchChapter(chapter);

  return (
    <>
      <ChapterFloatingButtons />
      <ChapterViewer data={manga} />
    </>
  );
}
