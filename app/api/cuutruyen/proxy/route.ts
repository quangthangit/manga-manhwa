import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const res = await axios.get("https://cuutruyen.net/api/v2/home_a");
        return NextResponse.json(res.data);
    } catch (error) {
        console.error("Proxy error:", error);
        return NextResponse.json({ error: "Proxy failed" }, { status: 500 });
    }
}
