import { MangaPageContent } from "./MangaPageContent"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams
  const page = resolvedSearchParams.page
  const pageNumber = typeof page === "string" ? page : "1"

  return <MangaPageContent pageParam={pageNumber} />
}
