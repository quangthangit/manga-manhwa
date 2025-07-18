"use client";

import { useEffect, useState } from "react";
import { ComicItem } from "../types/manga";
import { fetchLatestMangas } from "../api/fetchLatestMangas";

export const useLatestMangas = () => {
  const [mangas, setMangas] = useState<ComicItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMangas = async () => {
      try {
        setLoading(true); 
        const items = await fetchLatestMangas();
        setMangas(items);
      } catch (err) {
        console.error("Lỗi khi fetch dữ liệu:", err);
      } finally {
        setLoading(false); 
      }
    };

    loadMangas();
  }, []);

  return { mangas, loading };
};
