"use client";

import { Menu, SearchIcon, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { SearchForm } from "../search/SearchForm";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY < 10);

      const scrollDiff = lastScrollY.current - currentScrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      }

      if (scrollDiff > 10) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
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
        className={`fixed w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${atTop ? "bg-transparent" : "bg-gray-800"}`}
      >
        <div className="relative z-10 py-3 px-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/">
              <h1 className="text-xl font-extrabold text-gray-300 hover:text-white transition">
                TRUYENHAY
              </h1>
            </Link>
            <nav className="flex flex-row space-x-3 text-sm font-semibold text-gray-300">
              <button
                onClick={() => setIsOpenSearch(true)}
                className="w-8 h-8 md:w-10 md:h-10 bg-white/15 p-2 rounded-full hover:text-gray-100 transition flex items-center justify-center"
              >
                <SearchIcon size={16} />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="w-8 h-8 md:w-10 md:h-10 bg-white/15 p-2 rounded-full hover:text-gray-100 transition flex items-center justify-center"
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
