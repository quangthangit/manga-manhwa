"use client";

import { createContext, useState, type ReactNode } from "react";

interface ChapterData {
  chapter_name: string;
  chapter_api_data: string;
}

interface ChapterContextType {
  chapters: ChapterData[];
  getAllChapter: (data: ChapterData[]) => void;
  loading: boolean;
}

export const ChapterContext = createContext<ChapterContextType | undefined>(
  undefined
);

export const ChapterProvider = ({ children }: { children: ReactNode }) => {
  const [chapters, setChapters] = useState<ChapterData[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllChapter = (data: ChapterData[]) => {
    setLoading(true);
    try {
      setChapters(data);
    } catch (error) {
      console.error("Error setting chapters:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChapterContext.Provider value={{ chapters, getAllChapter, loading }}>
      {children}
    </ChapterContext.Provider>
  );
};
