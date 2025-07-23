import axios from "axios";
import { ChapterResponse } from "../types/manga";

export const fetchChapter = async (id: string): Promise<ChapterResponse | undefined> => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL2}/chapter/${id}`;

    try {
        const res = await axios.get(apiUrl);
        return res.data?.data ?? undefined;
    } catch (error) {
        console.error("fetchChapter error:", error);
        return undefined;
    }
};
