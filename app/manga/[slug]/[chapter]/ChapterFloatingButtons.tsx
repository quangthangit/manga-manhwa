"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Bookmark, Eye, HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import ButtonBanner from "@/app/components/button/ButtonBanner";

const ChapterFloatingButtons = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (diff > 20 && currentScrollY > 50) {
        setVisible(false);
      }

      if (diff < -50) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-gray-700 w-full fixed bottom-0 left-1/2 justify-center p-1 -translate-x-1/2 flex gap-2 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
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
