import { MangaSearchPage } from "./MangaSearchPage";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;

  const keywordParam = resolvedSearchParams.keyword;
  const pageParam = resolvedSearchParams.page;

  const keyword = typeof keywordParam === "string" ? keywordParam : "";
  const page = typeof pageParam === "string" ? pageParam : "1";

  return <MangaSearchPage keyword={keyword} page={page} />;
}
