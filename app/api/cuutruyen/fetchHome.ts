import { data } from "@/app/types/cuutruyen/homeTypes";
import axios from "axios";

export const fetchHome = async (): Promise<data | undefined> => {
    try {
        const res = await axios.get("/api/cuutruyen/proxy");
        return await res.data?.data;
    } catch (error) {
        console.error("fetchHome error:", error);
        return undefined;
    }
};
