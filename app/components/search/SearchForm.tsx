"use client";

import { useState, useEffect } from "react";
import { useMangasByKey } from "@/app/hooks/useMangasByKey";
import { X } from "lucide-react";
import Link from "next/link";
import { ItemSearch } from "./ItemSearch";

type SearchFormType = {
  openHanlde: () => void;
  closeHanlde: () => void;
};

export const SearchForm = ({ openHanlde, closeHanlde }: SearchFormType) => {
  const [keyword, setKeyWord] = useState<string>("");
  const [debouncedKey, setDebouncedKey] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKey(keyword);
    }, 2000);

    return () => clearTimeout(timer);
  }, [keyword]);

  const { mangas, loading } = useMangasByKey(debouncedKey, "1");

  return (
    <div className="fixed flex-col top-0 left-0 w-full h-full z-[150]">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 active:bg-black/60 transition"
        onClick={closeHanlde}
      />

      <div className="relative z-20 w-full bg-white shadow-lg px-2 py-2 flex items-center justify-center animate-slideDown">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Tìm kiếm truyện..."
            onChange={(e) => setKeyWord(e.target.value)}
            className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-black transition"
            autoFocus
          />
          <button
            onClick={closeHanlde}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 active:scale-95 transition"
            aria-label="Đóng tìm kiếm"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      <div className="relative z-20 w-full bg-white shadow-lg px-2 py-2 flex items-center justify-center animate-slideDown">
        {mangas.length !== 0 && (
          <div className="relative w-full max-w-2xl">
            <div className="bg-white border rounded-md shadow-sm divide-y max-h-72 overflow-y-auto">
              {mangas.slice(0, 5).map((item,index) => (
                <Link
                  href={`/truyen/${item.slug}`}
                  key={index}
                  onClick={closeHanlde}
                >
                  <ItemSearch
                    author={item.author[0]}
                    name={item.name}
                    thumb_url={item.thumb_url}
                  />
                </Link>
              ))}
              {!loading && mangas.length !== 0 && (
                <Link
                  href={`/tim-kiem?keyword=${keyword}&page=${1}`}
                  onClick={closeHanlde}
                >
                  <div className="text-center py-4 text-sm text-gray-500">
                    Xem thêm....
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
