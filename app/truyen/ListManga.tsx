import { ComicItem } from "../types/manga";
import Image from "next/image";
import Link from "next/link";
import formatTimeAgo from "../until/formatTimeAgo";

export const ListManga = ({ mangas }: { mangas: ComicItem[] }) => {
  return (
    <>
      {mangas.map((manga, index) => (
        <Link href={`/truyen/${manga.slug}`} key={index}>
          <div className="group cursor-pointer">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2">
              <Image
                src={`https://img.otruyenapi.com//uploads/comics/${manga.thumb_url}`}
                alt={`Popular manga`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <h3 className="text-white text-sm font-medium truncate group-hover:text-blue-400 transition-colors">
              {manga.name}
            </h3>
            <div className="flex justify-between">
              <p className="text-gray-400 text-xs">
                {manga.chaptersLatest != null ? (
                  <>Ch. {manga.chaptersLatest[0].chapter_name}</>
                ) : (
                  <>Ch. 0</>
                )}
              </p>
              <p className="text-gray-400 text-xs">
                {formatTimeAgo(manga.updatedAt)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
