import React from "react";
import { MangaImage } from "./MangaImage";
import { MangaInfo } from "./MangaInfo";

type ManagaBannerType = {
  thumb_url?: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  }[];
  content?: string;
  name?: string;
  updatedAt?: string;
};

export const ManagaBanner = ({
  category,
  content,
  name,
  thumb_url,
  updatedAt,
}: ManagaBannerType) => {
  return (
    <div>
      <div
        className="relative bg-transparent text-white bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url("https://img.otruyenapi.com/uploads/comics/${thumb_url}")`,
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-black/70 transition-opacity duration-1000 pointer-events-none" />
        <div className="relative py-4 px-4">
          <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
            <MangaImage
              imageUrl={`https://img.otruyenapi.com/uploads/comics/${thumb_url}`}
            />
            <MangaInfo
              category={category}
              content={content}
              name={name}
              updatedAt={updatedAt}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

