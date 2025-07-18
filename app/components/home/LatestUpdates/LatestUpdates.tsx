"use client";

import Link from "next/link";
import { useLatestMangas } from "@/app/hooks/useLatestMangas";
import Image from "next/image";
import formatTimeAgo from "@/app/until/formatTimeAgo";

export const LatestUpdates = () => {
  const { loading, mangas } = useLatestMangas();

  return (
    <>
      {loading
        ? Array.from({ length: 16 }).map((_, idx) => (
            <div
              key={idx}
              className="h-54 p-4 bg-gray-800 rounded-lg animate-pulse"
            ></div>
          ))
        : mangas.map((manga, index) => (
            <Link href={`/manga/${manga.slug}`} key={index}>
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
                    {
                      manga.chaptersLatest!=null ? <>Ch. {manga.chaptersLatest[0].chapter_name}</> : <>Ch...</>
                    }
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
