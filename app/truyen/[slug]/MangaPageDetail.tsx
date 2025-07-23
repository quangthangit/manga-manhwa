import { fetchMangaDetails } from "@/app/api/fetchMangaDetails";
import formatTimeAgo from "@/app/until/formatTimeAgo";
import { Badge, Clock, Download, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Group } from "./Group";
import Link from "next/link";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function MangaPageDetail({ params }: Props) {
  const { slug } = await params;
  const manga = await fetchMangaDetails(slug);

  return (
    <>
      <div className="lg:col-span-2">
        <div
          className="bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg p-6 mb-6 relative overflow-hidden"
          // style={{
          //   backgroundImage:
          //     "url(https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx103738-lx4SWO07qRs1.jpg)",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
           {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/20 z-0" /> */}
          <div className="absolute inset-0"></div>
          <div className="relative z-10">
            <div className="flex items-start space-x-4">
              <Image
                src={`https://img.otruyenapi.com/uploads/comics/${manga?.thumb_url}`}
                width={120}
                height={160}
                alt="Manga Cover"
                className="shadow-lg"
              />
              <div className="flex-1">
                <p className="text-sm text-[#1f2937]-100 mb-1">
                  {manga?.author[0]}
                </p>
                <h1 className="text-2xl font-bold text-[#1f2937] mb-2">
                  {manga?.name}
                </h1>
                <div className="flex items-center text-[#1f2937] mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">
                    {formatTimeAgo(manga?.updatedAt!)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {manga?.category.map((category, index) => (
                    <div
                      className="bg-gray-400 font-bold hover:bg-gray-300 text-gray-600 rounded-sm px-3 py-1 text-sm"
                      key={index}
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mb-6">
          <button className="bg-[rgb(209,213,219)] hover:bg-gray-300 font-bold p-2 text-sm rounded-sm text-[#1f2937]">
            ĐĂNG NHẬP ĐỂ THEO DÕI
          </button>
          <button className="bg-[rgb(209,213,219)] hover:bg-gray-300 font-bold p-2 text-sm rounded-sm text-[#1f2937]">
            ĐỌC TỪ CHƯƠNG 1
          </button>
        </div>
        <div className="bg-[rgb(209,213,219)] mb-6 rounded-sm">
          <div className="p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1f2937] font-bold">
                C
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#1f2937] mb-1">
                  {manga?.name} Fandom
                </h3>
                <p className="text-[#1f2937] text-sm leading-relaxed">
                  {manga?.content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {manga?.chapters[0].server_data.map((prev, index) => (
            <Link
              href={`/truyen/${manga.slug}/${
                prev.chapter_name
              }/${prev.chapter_api_data.substring(
                prev.chapter_api_data.lastIndexOf("/") + 1
              )}`}
              key={index}
              className="flex items-center justify-between p-3 bg-[#f9fafb] rounded-sm hover:bg-gray-300 transition-colors cursor-pointer relative pl-4"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[rgb(209,213,219)] rounded-l" />

              <div>
                <h4 className="font-medium text-[#1f2937]">
                  Chương {prev.chapter_name}
                </h4>
                <p className="text-sm text-gray-400">
                  một tháng trước • 203 lượt xem • 4 bình luận
                </p>
              </div>
              <div className="text-gray-400">
                <span className="text-sm">Không cần gọi điện á?</span>
              </div>
              <Download className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
      <Group />
    </>
  );
}
