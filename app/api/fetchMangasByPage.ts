import { ComicItem } from "../types/manga";

export const fetchMangasByPage = async (page: number): Promise<{
  items: ComicItem[];
  totalPages: number;
}> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/danh-sach?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Lỗi khi fetch danh sách truyện");
  }

  const json = await res.json();
  const items: ComicItem[] = json.data.items;
  const totalItems: number = json.data.params.pagination.totalItems;
  const totalPages = Math.floor(totalItems / 24) || 1;

  return { items, totalPages };
};
