export const fetchChapter = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL2}/chapter/${id}`);
    const json = await res.json();
    return json?.data || undefined;
};
