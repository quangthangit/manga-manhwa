"use client";

import { useEffect, useState } from "react";
import { fetchChapter } from "@/app/api/fetchChapter";
import { ChapterResponse } from "../types/manga";

export const useChapter = (chapterId: string) => {
  const [data, setData] = useState<ChapterResponse | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMangas = async () => {
      try {
        setLoading(true);
        const items = await fetchChapter(chapterId);
        setData(items);
      } catch (err) {
        console.error("Lỗi khi fetch dữ liệu:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMangas();
  }, []);

  return { data, loading };
};
