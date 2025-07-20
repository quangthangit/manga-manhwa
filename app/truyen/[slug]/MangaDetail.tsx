"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Clock,
  User,
  Eye,
  MessageCircle,
  PaintbrushVerticalIcon,
  BookDashed,
  LucideSwatchBook,
  Clock5Icon,
} from "lucide-react";
import { ComicItem } from "@/app/types/manga";

export const MangaDetail = ({ comicItem }: { comicItem: ComicItem }) => {
  const [activeTab, setActiveTab] = useState<"chapters" | "comments" | "art">(
    "chapters"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  return (
    <div className="min-h-screen bg-gray-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex border-b border-gray-700 mb-6">
              <button
                onClick={() => setActiveTab("chapters")}
                className={`px-4 py-2 z-999 font-semibold ${
                  activeTab === "chapters"
                    ? "text-white border-b-2 border-orange-500"
                    : "text-gray-400"
                }`}
              >
                Chapters
              </button>
              <button
                onClick={() => setActiveTab("comments")}
                className={`px-4 py-2 font-semibold ${
                  activeTab === "comments"
                    ? "text-white border-b-2 border-orange-500"
                    : "text-gray-400"
                }`}
              >
                Comments (37)
              </button>
              <button
                onClick={() => setActiveTab("art")}
                className={`px-4 py-2 font-semibold ${
                  activeTab === "art"
                    ? "text-white border-b-2 border-orange-500"
                    : "text-gray-400"
                }`}
              >
                Art
              </button>
            </div>
            {activeTab === "chapters" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                      }
                      className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm"
                    >
                      {sortOrder === "desc" ? "Descending" : "Ascending"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 space-y-2">
                  {comicItem?.chapters[0] &&
                  comicItem.chapters[0].server_data.length > 0 ? (
                    [...comicItem.chapters[0].server_data]
                      .sort(
                        (a, b) =>
                          Number(b.chapter_name) - Number(a.chapter_name)
                      )
                      .map((chapter, index) => (
                        <Link
                          href={`/truyen/${comicItem.slug}/${
                            chapter.chapter_name
                          }/${chapter.chapter_api_data.substring(
                            chapter.chapter_api_data.lastIndexOf("/") + 1
                          )}`}
                          key={index}
                        >
                          <div className="bg-gray-800 active:bg-gray-700 hover:bg-gray-700 rounded-lg p-4 transition-colors">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-red-500 text-xs">
                                    <LucideSwatchBook/>
                                  </span>
                                  <span className="font-semibold">
                                    Ch. {chapter.chapter_name}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                  <User size={14} />
                                  <span>Thắng đẹp trai</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-1">
                                  <Clock5Icon size={14} />
                                  <span>12.12.2022</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <User size={14} />
                                  <span className="text-blue-400">{index}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Eye size={14} />
                                  <span>8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                  ) : (
                    <div className="text-gray-400">
                      No chapter data available.
                    </div>
                  )}
                </div>
              </div>
            )}
            {activeTab === "comments" && (
              <div className="text-center py-12">
                <MessageCircle
                  size={48}
                  className="mx-auto text-gray-600 mb-4"
                />
                <p className="text-gray-400">Comments will be displayed here</p>
              </div>
            )}
            {activeTab === "art" && (
              <div className="text-center py-12">
                <PaintbrushVerticalIcon
                  size={48}
                  className="mx-auto text-gray-600 mb-4"
                />
                <p className="text-gray-400">
                  Art gallery will be displayed here
                </p>
              </div>
            )}
          </div>
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Author</h3>
              <div className="flex flex-wrap gap-2">
                {comicItem?.author.map((prev, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-sm cursor-pointer"
                  >
                    {prev}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Tag</h3>
              <div className="flex flex-wrap gap-2">
                {comicItem?.category.map((prev, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-sm cursor-pointer"
                  >
                    {prev.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Status</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-sm cursor-pointer">
                  {comicItem?.status}
                </span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Demographic</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-sm cursor-pointer">
                  Adaptation
                </span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Read or Buy</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm transition-colors"
                >
                  📖 Official Raw
                </a>
                <a
                  href="#"
                  className="block bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm transition-colors"
                >
                  📚 Book☆Walker
                </a>
                <a
                  href="#"
                  className="block bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm transition-colors"
                >
                  🛒 Amazon
                </a>
                <a
                  href="#"
                  className="block bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm transition-colors"
                >
                  📱 eBookJapan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
