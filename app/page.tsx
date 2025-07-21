"use client"

import { LatestUpdates } from "./components/home/LatestUpdates/LatestUpdates"
import { Banner } from "./components/home/Banner/Banner"
import Link from "next/link"

export default function FullscreenCarousel() {
  return (
    <div className="w-full select-none">
      <div className="relative">
        <Banner />
      </div>

      <section className="bg-transparent py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg lg:text-xl font-bold text-white">Vừa cập nhật</h2>
            <Link href="/truyen">
              <button className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                Xem tất cả
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 lg:gap-6">
            <LatestUpdates />
          </div>
        </div>
      </section>

      <section className="bg-transparent py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg lg:text-xl font-bold text-white">Phổ biến</h2>
            <Link href="/truyen">
              <button className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                Xem tất cả
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 lg:gap-6">
            <LatestUpdates />
          </div>
        </div>
      </section>
    </div>
  )
}
