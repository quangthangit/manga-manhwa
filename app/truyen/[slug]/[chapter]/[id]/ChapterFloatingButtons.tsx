"use client";
import { useEffect, useState, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpToLineIcon,
  Bookmark,
  Eye,
  HomeIcon,
  Search,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import ButtonBanner from "@/app/components/button/ButtonBanner";
import { useMangaDetails } from "@/app/hooks/useMangaDetails";
import type { ComicItem } from "@/app/types/manga";

type SlugType = {
  slug: string;
  chapter: string;
  id: string;
};

export const ChapterFloatingButtons = ({ slug, chapter, id }: SlugType) => {
  const [visible, setVisible] = useState(true);
  const [showList, setShowList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const lastScrollY = useRef(0);
  const [chapters, setChapters] = useState<ComicItem | null>(null);
  const router = useRouter();
  const { loading, manga } = useMangaDetails(slug);

  useEffect(() => {
    if (!loading && manga) {
      setChapters(manga);
    }
  }, [loading, manga]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;
      if (diff > 20 && currentScrollY > 50) {
        setVisible(false);
        setShowList(false);
      }
      if (diff < -50) {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showList && !(event.target as Element).closest(".chapter-dropdown")) {
        setShowList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showList]);

  const handlePrev = () => {
    const prevChapter: number = Number(chapter) - 1;
    const data = manga?.chapters[0].server_data.find(
      (data) => data.chapter_name == prevChapter
    );
    if (data) {
      router.push(
        `/truyen/${slug}/${prevChapter}/${data.chapter_api_data
          .split("/")
          .pop()}`
      );
    }
  };

  const handleNext = () => {
    const nextChapter: number = Number(chapter) + 1;
    const data = manga?.chapters[0].server_data.find(
      (data) => data.chapter_name == nextChapter
    );
    if (data) {
      router.push(
        `/truyen/${slug}/${nextChapter}/${data.chapter_api_data
          .split("/")
          .pop()}`
      );
    }
  };

  const handleScoll = () => {
    window.scrollTo(0, 0);
  };

  const handleChapterSelect = (chapNum: number, chapId: string) => {
    setShowList(false);
    setSearchTerm("");
    router.push(`/truyen/${slug}/${chapNum}/${chapId}`);
  };

  const filteredChapters =
    manga?.chapters[0].server_data.filter((chap) =>
      chap.chapter_name.toString().includes(searchTerm)
    ) || [];

  const currentChapterIndex =
    manga?.chapters[0].server_data.findIndex(
      (chap) => chap.chapter_name.toString() === chapter
    ) ?? -1;

  return (
    <>
      {showList && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-200"
          onClick={() => setShowList(false)}
        />
      )}
      <div
        className={`bg-gray-800/95 backdrop-blur-md w-full mx-auto fixed bottom-0 left-1/2 justify-center p-3 -translate-x-1/2 flex gap-2 z-50 transition-all duration-300 border-t border-gray-600 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ButtonBanner
          onClick={() => router.push("/")}
          bg="bg-gray-600/80"
          hover="hover:bg-gray-500"
          icon={<HomeIcon size={16} />}
        />
        <ButtonBanner
          text="Trước"
          bg="bg-gray-600/80"
          hover="hover:bg-gray-500"
          icon={<ArrowLeft size={16} />}
          onClick={handlePrev}
        />
        <ButtonBanner
          text={`Ch. ${chapter}`}
          bg="bg-blue-600/90"
          hover="hover:bg-blue-500"
          icon={<Eye size={16} />}
          onClick={() => setShowList((prev) => !prev)}
        />
        <ButtonBanner
          text="Sau"
          bg="bg-gray-600/80"
          hover="hover:bg-gray-500"
          icon={<ArrowRight size={16} />}
          onClick={handleNext}
        />
        <ButtonBanner
          bg="bg-gray-600/80"
          hover="hover:bg-gray-500"
          icon={<ArrowUpToLineIcon size={16} />}
          onClick={handleScoll}
        />
        <ButtonBanner
          bg="bg-orange-600/90"
          hover="hover:bg-orange-500"
          icon={<Bookmark size={16} />}
        />
      </div>
      {showList && (
        <div className="chapter-dropdown fixed bottom-20 left-1/2 -translate-x-1/2 w-[95vw] max-w-md z-50 animate-in slide-in-from-bottom-4 duration-200">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Chọn Chapter</h3>
                <button
                  onClick={() => setShowList(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Tìm chapter..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {filteredChapters.length > 0 ? (
                <div className="p-2">
                  {filteredChapters.map((chap, index) => {
                    const isCurrentChapter =
                      chap.chapter_name.toString() === chapter;
                    return (
                      <div
                        key={chap.chapter_api_data}
                        className={`group cursor-pointer rounded-xl p-3 mb-2 transition-all duration-200 ${
                          isCurrentChapter
                            ? "bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent"
                        }`}
                        onClick={() =>
                          handleChapterSelect(
                            Number(chap.chapter_name),
                            chap.chapter_api_data.split("/").pop()!
                          )
                        }
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold ${
                                isCurrentChapter
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 group-hover:bg-blue-500 group-hover:text-white"
                              }`}
                            >
                              {chap.chapter_name}
                            </div>
                            <div>
                              <p
                                className={`font-medium ${
                                  isCurrentChapter
                                    ? "text-blue-700 dark:text-blue-300"
                                    : "text-gray-900 dark:text-gray-100"
                                }`}
                              >
                                Chapter {chap.chapter_name}
                              </p>
                              {isCurrentChapter && (
                                <p className="text-sm text-blue-600 dark:text-blue-400">
                                  Đang đọc
                                </p>
                              )}
                            </div>
                          </div>
                          {isCurrentChapter && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <Search size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Không tìm thấy chapter nào</p>
                </div>
              )}
            </div>
            {manga && (
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>
                    Tổng cộng: {manga.chapters[0].server_data.length} chapters
                  </span>
                  {currentChapterIndex >= 0 && (
                    <span>
                      {currentChapterIndex + 1} /{" "}
                      {manga.chapters[0].server_data.length}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
