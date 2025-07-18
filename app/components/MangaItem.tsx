import formatTimeAgo from "@/app/until/formatTimeAgo";
import Image from "next/image";

type MangaItemType = {
  thumb_url: string;
  name: string;
  updatedAt: string;
};
export const MangaItem = ({ name, thumb_url, updatedAt }: MangaItemType) => {
  return (
    <div className="bg-gray-600 hover:bg-gray-500 rounded-lg shadow p-4 flex gap-4">
      <Image
        height={100}
        width={100}
        src={`https://img.otruyenapi.com/uploads/comics/${thumb_url}`}
        alt={thumb_url}
        className="w-20 h-28 object-cover rounded-md"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-white line-clamp-2">
            {name}
          </h3>
          {/* <p className="text-xs text-gray-400">
            Thể loại : {comicItem.category[0].name || "unknow"}
          </p> */}
          {/* <p className="text-xs text-gray-400">{comicItem.status || "unknow"}</p> */}
        </div>
        <p className="text-xs text-gray-400">
          {formatTimeAgo(updatedAt)}
        </p>
      </div>
    </div>
  );
};
