"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`fixed w-full bg-center bg-no-repeat z-15 ${scrolled ? "bg-gray-700" : "bg-transparent"} mb-3`}>
      <div className="relative z-10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-extrabold text-gray-300 hover:text-white transition">
              TRUYENHAY
            </h1>
          </Link>
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-300">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/manga" className="hover:text-white transition">
              All Manga
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
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
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/manga" className="hover:text-white transition">
              All Manga
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
