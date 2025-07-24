export interface data {
    spotlight_mangas: spotlightMangas[],
    new_chapter_mangas: newChapterMangas[]
}

export interface spotlightMangas {
    id: string,
    name: string,
    panorama_url: string,
    panorama_mobile_url: string,
    panorama_dominant_color: string,
    panorama_dominant_color_2: string,
    description: string,
}

export interface newChapterMangas {
    id: string,
    name: string,
    cover_url: string,
    cover_mobile_url: string,
    newest_chapter_number: string,
    newest_chapter_id: string,
    newest_chapter_created_at: string,
}