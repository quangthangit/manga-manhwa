import { useRouter } from "next/navigation";
import { MangaItem } from "../components/MangaItem";
import { ComicItem } from "../types/manga";
import Image from "next/image";

export const ListManga = ({ mangas }: { mangas: ComicItem[] }) => {
  const router = useRouter();
  return (
    <>
      {mangas.map((item, index) => (
        <MangaItem
          key={index}
          description={item?.content}
          image={item?.thumb_url}
          name={item?.name}
          title={item.content}
          chapter={item.chaptersLatest[0].chapter_name}
          clickHandle={() => router.push(`/manga/${item.slug}`)}
        />
      ))}
      {/* {mangas.map((item, index) => (
        <div key={index} className="group cursor-pointer">
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2">
            <Image
              src={`https://img.otruyenapi.com/uploads/comics/${item.thumb_url}` || ""}
              alt={`Popular manga ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
          <h3 className="text-white text-sm font-medium truncate group-hover:text-blue-400 transition-colors">
            Manga Title {index + 1}
          </h3>
          <p className="text-gray-400 text-xs">Chapter {20 + index}</p>
        </div>
      ))} */}
    </>
  );
};
