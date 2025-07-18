"use client";

import { useEffect, useState } from "react";
import { ComicItem } from "../types/manga";
import { fetchMangasByPage } from "../api/fetchMangasByPage";

export const useMangas = (page: number) => {
  const [mangas, setMangas] = useState<ComicItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState<number>(1);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const { items, totalPages } = await fetchMangasByPage(page);
        setMangas(items);
        setTotalPage(totalPages);
      } catch (err) {
        console.error("Lỗi khi fetch dữ liệu:", err);
        setMangas([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page]);

  return { mangas, loading, totalPage };
};
