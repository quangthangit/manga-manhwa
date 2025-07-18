"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Bookmark, Eye, HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import ButtonBanner from "@/app/components/button/ButtonBanner";

const ChapterFloatingButtons = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShow(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-gray-700 w-full fixed bottom-0 left-1/2 justify-center p-1 -translate-x-1/2 flex gap-2 z-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ButtonBanner
        onClick={() => router.push("/")}
        bg="bg-gray-500"
        hover="hover:bg-gray-600"
        icon={<HomeIcon size={15} />}
      />
      <ButtonBanner
        text="Chap trước"
        bg="bg-gray-500"
        hover="hover:bg-gray-600"
        icon={<ArrowLeft size={15} />}
      />
      <ButtonBanner
        text="Xem chap"
        bg="bg-gray-500"
        hover="hover:bg-gray-600"
        icon={<Eye size={15} />}
      />
      <ButtonBanner
        text="Chap sau"
        bg="bg-gray-500"
        hover="hover:bg-gray-600"
        icon={<ArrowRight size={15} />}
      />
      <ButtonBanner
        bg="bg-[#f7633c]"
        hover="hover:bg-[#e4572e]"
        icon={<Bookmark size={15} />}
      />
    </div>
  );
};

export default ChapterFloatingButtons;
