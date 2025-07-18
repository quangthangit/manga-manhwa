"use client";

import Link from "next/link";
import { useLatestMangas } from "@/app/hooks/useLatestMangas";
import { LatestUpdateItem } from "./LatestUpdateItem";

export const LatestUpdates = () => {
  const { loading, mangas } = useLatestMangas();

  return (
    <>
      {loading
        ? Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="h-28 p-4 bg-gray-800 rounded-lg animate-pulse"
            ></div>
          ))
        : mangas.map((manga, index) => (
            <Link href={`/manga/${manga.slug}`} key={index}>
              <LatestUpdateItem
                name={manga.name}
                thumb_url={manga.thumb_url}
                updatedAt={manga.updatedAt}
              />
            </Link>
          ))}
    </>
  );
};
