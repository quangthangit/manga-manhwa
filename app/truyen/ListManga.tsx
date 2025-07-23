import { ComicItem } from "../types/manga";
import Link from "next/link";
import { MangaItem } from "../components/MangaItem";

export const ListManga = ({ mangas }: { mangas: ComicItem[] }) => {
  return (
    <>
      {mangas.map((manga, index) => (
        <Link href={`/truyen/${manga.slug}`} key={index}>
          <MangaItem commicItem={manga}/>
        </Link>
      ))}
    </>
  );
};
