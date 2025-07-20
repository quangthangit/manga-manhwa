import { X } from "lucide-react";

type SearchFormType = {
  openHanlde: () => void;
  closeHanlde: () => void;
};
const mockResults = [
  {
    id: 1,
    image: "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/2536/cover/processed-3ccdb487cbf747c033b7c4a20f0e246d.jpg",
    title: "Truyện 1",
    description: "Một mô tả ngắn cho truyện 1.",
  },
  {
    id: 2,
    image: "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/2536/cover/processed-3ccdb487cbf747c033b7c4a20f0e246d.jpg",
    title: "Truyện 2",
    description: "Một mô tả ngắn cho truyện 2.",
  },
  {
    id: 3,
    image: "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/2536/cover/processed-3ccdb487cbf747c033b7c4a20f0e246d.jpg",
    title: "Truyện 3",
    description: "Một mô tả ngắn cho truyện 3.",
  },
];

export const SearchForm = ({ openHanlde, closeHanlde }: SearchFormType) => {
  return (
    <div className="fixed flex-col top-0 left-0 w-full h-full z-[150]">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 active:bg-black/60 transition"
        onClick={openHanlde}
      />
      <div className="relative z-20 w-full bg-white shadow-lg px-2 py-2 flex items-center justify-center animate-slideDown">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Tìm kiếm truyện..."
            className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-black transition"
            autoFocus
          />
          <button
            onClick={closeHanlde}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 active:scale-95 transition"
            aria-label="Đóng tìm kiếm"
          >
            <X size={22} />
          </button>
        </div>
      </div>
      <div className="relative z-20 w-full bg-white shadow-lg px-2 py-2 flex items-center justify-center animate-slideDown">
        <div className="relative w-full max-w-2xl">
          <div className="bg-white border rounded-md shadow-sm divide-y max-h-72 overflow-y-auto">
            {mockResults.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-3 hover:bg-gray-100 cursor-pointer transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
