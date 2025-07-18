"use client";

import { useEffect, useState } from "react";
import { fetchMangaDetails } from "@/app/api/fetchMangaDetails";
import { ComicItem } from "../types/manga";

export const useMangaDetails = (slug: string) => {
  const [manga, setManga] = useState<ComicItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadManga = async () => {
      setLoading(true);
      const data = await fetchMangaDetails(slug);
      setManga(data);
      setLoading(false);
    };

    if (slug) loadManga();
  }, [slug]);

  return { manga, loading };
};
