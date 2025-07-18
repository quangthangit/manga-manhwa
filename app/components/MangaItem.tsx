import Image from "next/image";

type MangaItemType = {
  name?: string;
  image?: string;
  title?: string;
  team?: string;
  description?: string;
  chapter?: number;
  clickHandle?: () => void;
};

export const MangaItem = ({
  clickHandle,
  name,
  image,
  title = "Hiện tại mình chưa update",
  team,
  description = "Hiện tại mình chưa update, xin lỗi nhaaaaa!!!!!",
  chapter,
}: MangaItemType) => {
  return (
    <div
      onClick={clickHandle}
      className="group cursor-pointer flex flex-col rounded-[10px] overflow-hidden"
    >
      <div className="relative aspect-[2/3] w-full">
        <Image
          src={`https://img.otruyenapi.com/uploads/comics/${image}` || ""}
          alt={title || "No image"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 200px"
        />
        <div className="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-start px-3 text-white text-sm">
          <p className="font-semibold">Ch. {chapter}</p>
          <p className="text-xs mt-1">{team}</p>
          <p className="text-xs mt-1 italic line-clamp-3">{description}</p>
          <button
            type="button"
            className="bg-gray-100 text-black hover:bg-gray-200 mt-4 py-2 px-4 rounded-md text-sm font-medium"
          >
            Đọc ngay
          </button>
        </div>
      </div>
      <h3 className="mt-2 px-1 text-sm text-left text-white dark:text-white font-semibold line-clamp-2">
        {name}
      </h3>
    </div>
  );
};
