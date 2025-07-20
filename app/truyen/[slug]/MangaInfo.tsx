import { Bookmark, BookOpen, Flag, MoreVertical, Upload } from "lucide-react";
import formatTimeAgo from "@/app/until/formatTimeAgo";
import ButtonBanner from "@/app/components/button/ButtonBanner";

type MangaInfoProps = {
  name?: string;
  category?: {
    name: string;
  }[];
  content?: string;
  updatedAt?: string;
};

export const MangaInfo = ({
  category,
  content,
  name,
  updatedAt,
}: MangaInfoProps) => (
  <div className="flex flex-1 z-10 flex-col justify-between">
    <div>
      <h2 className="text-2xl md:text-3xl font-bold leading-snug">{name}</h2>
      <div className="flex flex-wrap gap-2 mt-3">
        {category?.map((cat, index) => (
          <span
            key={index}
            className="bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-[10px] shadow-sm"
          >
            {cat.name}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {content}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-blue-50 max-w-2xl">
        {updatedAt ? <>Cập nhập {formatTimeAgo(updatedAt)}</> : null}
      </p>
    </div>
    <div className="flex flex-wrap md:flex-nowrap gap-2 mt-2 rounded-lg">
      <ButtonBanner
        bg="bg-[#f7633c]"
        hover="hover:bg-[#e4572e]"
        icon={<Bookmark size={18} />}
        text="Add To Library"
      />
      <ButtonBanner
        bg="bg-gray-700"
        hover="hover:bg-gray-600"
        icon={<BookOpen size={18} />}
        text="Start Reading"
      />
      <ButtonBanner
        bg="bg-gray-700"
        hover="hover:bg-gray-600"
        icon={<Flag size={18} />}
        text="Report"
      />
      <ButtonBanner
        bg="bg-gray-700"
        hover="hover:bg-gray-600"
        icon={<Upload size={18} />}
        text="Upload Chapter"
      />
      <ButtonBanner
        bg="bg-gray-700"
        hover="hover:bg-gray-600"
        icon={<MoreVertical size={18} />}
        hiden="md:hidden"
      />
    </div>
  </div>
);
