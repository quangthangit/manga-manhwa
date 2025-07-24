"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const data = [
  {
    backgroundImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/178869-ZFn0hKphaLtk.jpg",
    overlayImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178869-ZFn0hKphaLtk.jpg",
    title: "Sousou no Frieren",
    description:
      "Nữ pháp sư Elf - Frieren bất tử và hành trình khám phá bản thân cảm thấy thỏa mãn với đời.",
    color: "from-blue-900 to-blue-400",
  },
  {
    backgroundImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg",
    overlayImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178025-cWJKEsZynkil.jpg",
    title: "Suzuki Yuto",
    description:
      "Một câu chuyện hài hước về cuộc sống hàng ngày của Suzuki Yuto và những người bạn xung quanh.",
    color: "from-red-800 to-red-400",
  },
  {
    backgroundImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/178754-pzQw3EJ0DYO9.jpg",
    overlayImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178869-ZFn0hKphaLtk.jpg",
    title: "Sousou no Frieren",
    description:
      "Nữ pháp sư Elf - Frieren bất tử và hành trình khám phá bản thân cảm thấy thỏa mãn với đời.",
    color: "from-green-800 to-green-400",
  },
  {
    backgroundImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
    overlayImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178025-cWJKEsZynkil.jpg",
    title: "Suzuki Yuto",
    description:
      "Một câu chuyện hài hước về cuộc sống hàng ngày của Suzuki Yuto và những người bạn xung quanh.",
    color: "from-pink-800 to-pink-400",
  },
  {
    backgroundImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",
    overlayImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178869-ZFn0hKphaLtk.jpg",
    title: "Sousou no Frieren",
    description:
      "Nữ pháp sư Elf - Frieren bất tử và hành trình khám phá bản thân cảm thấy thỏa mãn với đời.",
    color: "from-gray-800 to-gray-400",
  },
  {
    backgroundImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg",
    overlayImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178025-cWJKEsZynkil.jpg",
    title: "Suzuki Yuto",
    description:
      "Một câu chuyện hài hước về cuộc sống hàng ngày của Suzuki Yuto và những người bạn xung quanh.",
    color: "from-yellow-600 to-yellow-300",
  },
  {
    backgroundImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/178869-ZFn0hKphaLtk.jpg",
    overlayImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178869-ZFn0hKphaLtk.jpg",
    title: "Sousou no Frieren",
    description:
      "Nữ pháp sư Elf - Frieren bất tử và hành trình khám phá bản thân cảm thấy thỏa mãn với đời.",
    color: "from-red-800 to-red-400",
  },
  {
    backgroundImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg",
    overlayImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178025-cWJKEsZynkil.jpg",
    title: "Suzuki Yuto",
    description:
      "Một câu chuyện hài hước về cuộc sống hàng ngày của Suzuki Yuto và những người bạn xung quanh.",
    color: "from-red-800 to-red-400",
  },
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType>();

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setCurrentIndex(emblaApi.selectedScrollSnap());
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

  const getSlideState = (index: number) => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    const nextIndex = (currentIndex + 1) % data.length;

    if (index === currentIndex) {
      return "active";
    } else if (index === prevIndex || index === nextIndex) {
      return "side";
    } else {
      return "hidden";
    }
  };

  return (
    <div className="w-full">
      <div
        className={`transition-colors duration-700 ease-in-out w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-b ${data[currentIndex].color}`}
      />
      <Carousel
        className="relative z-10 mt-[-100px] sm:mt-[-200px] md:mt-[-300px] w-full mx-auto"
        opts={{
          align: "center",
          loop: true,
          containScroll: false,
        }}
        setApi={setEmblaApi}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {data.map((item, index) => {
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
                      style={{
                        backgroundImage: `url(${item.backgroundImage})`,
                      }}
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
                          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                            {item.title}
                          </h1>
                          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-lg drop-shadow-md">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-lg">
                            XEM THÔNG TIN
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Debug info */}
      <div className="text-center mt-4 text-sm text-gray-600">
        Current slide: {currentIndex + 1} / {data.length}
      </div>
    </div>
  );
};
