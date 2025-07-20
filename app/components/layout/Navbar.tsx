"use client";

import { Menu, SearchIcon, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div
      className={`fixed w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${atTop ? "bg-transparent" : "bg-gray-700"}`}
    >
      <div className="relative z-10 py-3 px-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-extrabold text-gray-300 hover:text-white transition">
              TRUYENHAY
            </h1>
          </Link>
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-300">
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden flex flex-col space-y-2 text-sm font-semibold text-gray-300 px-2">
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
