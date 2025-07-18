"use client";

import Image from "next/image";
import { BookOpen, Calendar, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ButtonBanner from "./components/button/ButtonBanner";
import { LatestUpdates } from "./components/home/LatestUpdates/LatestUpdates";

export default function FullscreenCarousel() {
  return (
    <div className="w-full">
      <Carousel>
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 w-full">
              <div className="w-full">
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
                    style={{
                      backgroundImage: `url("https://img.otruyenapi.com/uploads/comics/hoi-quy-nhung-the-gioi-van-binh-yen-thumb.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 backdrop-blur-[2px]" />
                  <div className="relative z-10 flex items-center py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto w-full">
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                        <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-80">
                          <div className="relative group">
                            <Image
                              src="https://img.otruyenapi.com/uploads/comics/hoi-quy-nhung-the-gioi-van-binh-yen-thumb.jpg"
                              alt="JUJUTSU KAISEN Manga Cover"
                              width={160}
                              height={240}
                              className="w-[80%] mx-auto aspect-[2/3] object-cover rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                        <div className="flex-1 text-center lg:text-left max-w-2xl">
                          <div className="space-y-6">
                            <div>
                              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight mb-2">
                                JUJUTSU KAISEN
                              </h1>
                              <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-5 h-5 fill-current"
                                  />
                                ))}
                                <span className="text-white/80 ml-2">
                                  (4.8)
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-300">
                                <span className="text-white/60 text-sm uppercase tracking-wider">
                                  Artist:
                                </span>
                                <span className="text-lg font-medium">
                                  りーちゃん
                                </span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-300">
                                <span className="text-white/60 text-sm uppercase tracking-wider">
                                  Author:
                                </span>
                                <span className="text-lg font-medium">
                                  Yamamoto Koudai
                                </span>
                              </div>
                            </div>

                            {/* Genres */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                              {[
                                "Action",
                                "Supernatural",
                                "School",
                                "Shounen",
                              ].map((genre) => (
                                <span
                                  key={genre}
                                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                                >
                                  {genre}
                                </span>
                              ))}
                            </div>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-white/80">
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                <span>250 Chapters</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Ongoing</span>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                              <ButtonBanner
                                bg="bg-blue-600"
                                hover="hover:bg-blue-700"
                                icon={<BookOpen />}
                                text="Read Now"
                              />
                              <button className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-sm backdrop-blur-sm rounded-lg transition-all duration-200 hover:scale-105 bg-transparent">
                                Add to Library
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <section className="bg-transparent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-2xl font-bold text-white">
              Vừa cập nhập
            </h2>
            <button className="text-gray-400 hover:text-white">View All</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6">
            <LatestUpdates />
          </div>
        </div>
      </section>
      <section className="bg-transparent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-2xl font-bold text-white">
              Phổ biến
            </h2>
            <button className="text-gray-400 hover:text-white">View All</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6">
            <LatestUpdates />
          </div>
        </div>
      </section>
    </div>
  );
}
