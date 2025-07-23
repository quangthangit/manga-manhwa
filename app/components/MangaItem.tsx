import formatTimeAgo from "@/app/until/formatTimeAgo";
import Image from "next/image";
import { ComicItem } from "../types/manga";

export const MangaItem = ({ commicItem }: { commicItem: ComicItem }) => {
  return (
    <div className="group cursor-pointe text-[#00000099]">
      <div className="relative aspect-[2/3] rounded-sm overflow-hidden mb-2">
        <Image
          src={`https://img.otruyenapi.com//uploads/comics/${commicItem.thumb_url}`}
          alt={commicItem.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      <h3 className="text-[#1f2937] text-sm font-medium truncate group-hover:text-blue-400 transition-colors">
        {commicItem.name}
      </h3>
      <div className="text-[#374151] flex justify-between">
        <p className="text-xs">
          {commicItem.chaptersLatest?.[0]?.chapter_name
            ? `Ch. ${commicItem.chaptersLatest[0].chapter_name}`
            : "Updated.."}
        </p>
        <p className="text-xs">
          {formatTimeAgo(commicItem.updatedAt)}
        </p>
      </div>
    </div>
  );
};
