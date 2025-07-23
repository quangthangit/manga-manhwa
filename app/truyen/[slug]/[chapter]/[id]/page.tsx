import { Suspense } from "react";
import { ChapterFloatingButtons } from "./ChapterFloatingButtons";
import { ChapterViewer } from "./ChapterViewer";

type Props = {
  params: Promise<{ chapter: string; id: string; slug: string }>;
};

export default async function Page({ params }: Props) {
  const { chapter } = await params;
  const { id } = await params;
  const { slug } = await params;
  return (
    <>
      <ChapterFloatingButtons id={id} slug={slug} chapter={chapter} />
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          </div>
        }
      >
        <ChapterViewer id={id} />
      </Suspense>
    </>
  );
}
