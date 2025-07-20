import { ComicItem } from "../types/manga";

export const fetchMangaDetails = async (slug: string): Promise<ComicItem | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/truyen-tranh/${slug}`);
    const json = await res.json();
    return json.data?.item || null;
  } catch (error) {
    return null;
  }
};
