"use client";

import { Menu, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SearchForm } from "../search/SearchForm";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isOpenSearch && (
        <SearchForm
          closeHanlde={() => setIsOpenSearch(false)}
          openHanlde={() => setIsOpenSearch(true)}
        />
      )}

      <div
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isHome ? (atTop ? "bg-transparent" : "bg-white/70 backdrop-blur-md") : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="relative z-10 py-3 px-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/">
              <h1
                className={`text-xl font-extrabold transition ${
                  isHome
                    ? atTop
                      ? "text-gray-300"
                      : "text-[#00000099]"
                    : "text-[#00000099]"
                }`}
              >
                TRUYENHAY
              </h1>
            </Link>
            <nav
              className={`flex flex-row space-x-3 text-sm font-semibold ${
                isHome
                  ? atTop
                    ? "text-gray-300"
                    : "text-[#00000099]"
                  : "text-[#00000099]"
              }`}
            >
              <button
                onClick={() => setIsOpenSearch(true)}
                className={`w-8 h-8 md:w-10 md:h-10 ${
                  isHome
                    ? atTop
                      ? "bg-white/15"
                      : "bg-[#0000001A]"
                    : "bg-[#0000001A]"
                } p-2 rounded-full hover:text-gray-100 transition flex items-center justify-center`}
              >
                <SearchIcon size={16} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={`w-8 h-8 md:w-10 md:h-10 ${
                  isHome
                    ? atTop
                      ? "bg-white/15"
                      : "bg-[#0000001A]"
                    : "bg-[#0000001A]"
                } p-2 rounded-full hover:text-gray-100 transition flex items-center justify-center`}
              >
                <Menu size={16} />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
