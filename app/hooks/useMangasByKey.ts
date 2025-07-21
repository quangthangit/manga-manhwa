"use client";

import { useEffect, useState } from "react";
import { ComicItem } from "../types/manga";
import { fetchMangasByKeyWord } from "../api/fetchMangasByKeyWord";

export const useMangasByKey = (key: string, page: string) => {
  const [mangas, setMangas] = useState<ComicItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState<number>(1);

  useEffect(() => {
    if (!key.trim()) {
      setMangas([]);
      setTotalPage(1);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const { items, totalPages } = await fetchMangasByKeyWord(key, page);
        setMangas(items);
        setTotalPage(totalPages);
      } catch (err) {
        console.error("Lỗi khi fetch dữ liệu:", err);
        setMangas([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [key, page]);

  return { mangas, loading, totalPage };
};
