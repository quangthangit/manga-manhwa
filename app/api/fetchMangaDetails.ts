import axios from "axios";
import { ComicItem } from "../types/manga";

export const fetchMangaDetails = async (slug: string): Promise<ComicItem | undefined> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/truyen-tranh/${slug}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    if (response.status === 200 && response.data?.data?.item) {
      return response.data.data.item;
    } else {
      console.warn("Dữ liệu không hợp lệ:", response.data);
      return undefined;
    }
  } catch (error: any) {
    console.error("Lỗi khi gọi API:", error.message || error);
    return undefined;
  }
};
