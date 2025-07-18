export const fetchLatestMangas = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`);
    const json = await res.json();
    return json.data.items.slice(0, 12);
};
