import React from "react";

type ItemSearchTypes = {
  thumb_url?: string;
  name?: string;
  author?: string;
};

export const ItemSearch = ({ author = "", name, thumb_url }: ItemSearchTypes) => {
  return (
    <div className="flex items-center gap-4 p-3 hover:bg-gray-100 cursor-pointer transition">
      <img
        src={`https://img.otruyenapi.com/uploads/comics/${thumb_url}`}
        alt={thumb_url}
        className="w-12 h-12 object-cover rounded-md"
      />
      <div>
        <h4 className="text-sm font-medium text-gray-900">{name}</h4>
        <p className="text-xs text-gray-500">{author}</p>
      </div>
    </div>
  );
};
