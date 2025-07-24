import { fetchMangaDetails } from "@/app/api/fetchMangaDetails";
import formatTimeAgo from "@/app/until/formatTimeAgo";
import { Clock, Download } from "lucide-react";
import Image from "next/image";
import { Group } from "./Group";
import Link from "next/link";

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
          className="bg-gradient-to-r from-gray-200 to-gray-100 rounded-t-lg relative overflow-hidden mb-8 sm:mb-16"
          style={{
            backgroundImage:
              "url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/178869-ZFn0hKphaLtk.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative -mt-24 sm:-mt-40 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative z-10 flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
              <Image
                src={`https://img.otruyenapi.com/uploads/comics/${manga?.thumb_url}`}
                width={120}
                height={160}
                alt="Manga Cover"
                className="shadow-sm rounded-lg border-2 border-white w-[180px] h-[240px] object-cover"
              />
            </div>
            <div className="flex-1 pt-0 sm:pt-25 text-center sm:text-left w-full">
              <p className="text-sm text-gray-600 mb-1">{manga?.author[0]}</p>
              <h1 className="text-xl sm:text-2xl font-bold text-[#1f2937] mb-2">
                {manga?.name}
              </h1>
              <div className="flex items-center justify-center sm:justify-start text-[#1f2937] mb-4">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">
                  {formatTimeAgo(manga?.updatedAt!)}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
                <button className="bg-[rgb(209,213,219)] hover:bg-gray-300 font-bold p-2 text-sm rounded-sm text-[#1f2937] w-full sm:w-auto">
                  ĐĂNG NHẬP ĐỂ THEO DÕI
                </button>
                <button className="bg-[rgb(209,213,219)] hover:bg-gray-300 font-bold p-2 text-sm rounded-sm text-[#1f2937] w-full sm:w-auto">
                  ĐỌC TỪ CHƯƠNG 1
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgb(209,213,219)] mb-6 rounded-sm mx-4 mt-3 sm:mx-6">
          <div className="p-4">
            <div className="flex items-start space-x-3">
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
        <div className="space-y-3 max-h-100 overflow-y-auto px-4 sm:px-6">
          {manga?.chapters[0]?.server_data.map((prev, index) => (
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
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-[#1f2937] truncate">
                  Chương {prev.chapter_name}
                </h4>
                <p className="text-sm text-gray-400 truncate sm:truncate-none">
                  một tháng trước • 203 lượt xem • 4 bình luận
                </p>
              </div>
              <div className="text-gray-400 hidden sm:block">
                <span className="text-sm">Không cần gọi điện á?</span>
              </div>
              <Download className="w-4 h-4 text-gray-400 ml-2" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
