export const fetchChapter = async (chapter: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL2}/chapter/${chapter}`);
    const json = await res.json();
    console.log(json.data)
    return json?.data || undefined;
};
