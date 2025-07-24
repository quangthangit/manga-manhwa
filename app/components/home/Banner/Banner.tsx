"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { fetchHome } from "@/app/api/cuutruyen/fetchHome";
import { data } from "@/app/types/cuutruyen/homeTypes";

export const Banner = () => {
  const [homeData, setHomeData] = useState<data | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType>();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchHome();
      if (res) {
        setHomeData(res);
      }
    };
    loadData();
  }, []);

  const onSelect = useCallback((embla: EmblaCarouselType) => {
    setCurrentIndex(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!homeData || !homeData.spotlight_mangas?.length) {
    return (
      <div className="text-center py-10 text-gray-400">
        Đang tải dữ liệu banner...
      </div>
    );
  }

  const spotlight = homeData.spotlight_mangas;
  const totalSlides = spotlight.length;

  const getSlideState = (index: number) => {
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentIndex + 1) % totalSlides;

    if (index === currentIndex) return "active";
    if (index === prevIndex || index === nextIndex) return "side";
    return "hidden";
  };

  const currentItem = spotlight[currentIndex];

  return (
    <div className="w-full">
      {/* Gradient background */}
      <div
        className="transition-colors duration-700 ease-in-out w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${currentItem.panorama_dominant_color_2}, ${currentItem.panorama_dominant_color})`,
        }}
      />

      {/* Carousel */}
      <Carousel
        className="relative z-10 mt-[-100px] sm:mt-[-200px] md:mt-[-300px] w-full mx-auto"
        opts={{ align: "center", loop: true, containScroll: false }}
        setApi={setEmblaApi}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {spotlight.map((item, index) => {
            const slideState = getSlideState(index);
            const isActive = slideState === "active";
            const isSide = slideState === "side";

            return (
              <CarouselItem
                key={index}
                className={`pl-2 md:pl-4 transition-all duration-700 ease-out ${
                  isActive
                    ? "basis-4/5 md:basis-1/2"
                    : isSide
                    ? "basis-1/5 md:basis-1/4"
                    : "basis-0"
                }`}
              >
                <div
                  className={`relative w-full h-[250px] sm:h-[400px] md:h-[500px] overflow-hidden transition-all duration-700 ease-out ${
                    isActive
                      ? "blur-none opacity-100 scale-100 z-20"
                      : isSide
                      ? "blur-sm opacity-40 scale-90 z-10"
                      : "opacity-0 scale-75 z-0"
                  }`}
                >
                  <div className="absolute top-1 left-1 right-1 bottom-1">
                    <div
                      className="w-full h-full bg-cover bg-center rounded-lg transition-all duration-700"
                      style={{ backgroundImage: `url(${item.panorama_url})` }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg transition-opacity duration-700 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                  {isActive && (
                    <div className="absolute hidden sm:block bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 z-30 m-3 transition-all duration-700 opacity-100 translate-y-0">
                      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div className="max-w-2xl">
                          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                            {item.name}
                          </h1>
                          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-lg drop-shadow-md">
                            {item.description}
                          </p>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-lg">
                          XEM THÔNG TIN
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Slide indicator */}
      <div className="text-center mt-4 text-sm text-gray-600">
        Slide hiện tại: {currentIndex + 1} / {totalSlides}
      </div>
    </div>
  );
};
