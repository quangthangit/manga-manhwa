import axios from "axios";
import { ComicItem } from "../types/manga";

export const fetchLatestMangas = async (): Promise<ComicItem[] | undefined> => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/home`;

    try {
        const res = await axios.get(apiUrl);
        const items = res.data?.data?.items;

        if (!Array.isArray(items)) {
            throw new Error("Invalid response format");
        }

        return items.slice(0, 16);
    } catch (err) {
        console.error("Failed to fetch latest mangas:", err);
        return undefined;
    }
};
