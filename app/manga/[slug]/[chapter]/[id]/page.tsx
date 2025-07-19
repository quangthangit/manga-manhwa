import MangaPageChapter from "./MangaPageChapter";

type Props = {
  params: Promise<{ chapter: string; id: string; slug: string }>;
};

export default async function Page({ params }: Props) {
  const { chapter } = await params;
  const { id } = await params;
  const { slug } = await params;
  return <MangaPageChapter chapter={chapter} id={id} slug={slug} />;
}
