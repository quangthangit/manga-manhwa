import { fetchLatestMangas } from "@/app/api/fetchLatestMangas";
import Image from "next/image";
import Link from "next/link";
import formatTimeAgo from "@/app/until/formatTimeAgo";
import { MangaItem } from "../../MangaItem";

export default async function LatestUpdates() {
  const mangas = await fetchLatestMangas();
  return (
    <>
      {mangas?.map((manga, index) => (
        <Link href={`/truyen/${manga.slug}`} key={index}>
          <MangaItem commicItem={manga} />
        </Link>
      ))}
    </>
  );
}
