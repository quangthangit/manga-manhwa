type ChapterResponse = {
  domain_cdn: string;
  item: {
    chapter_path: string;
    chapter_image: {
      image_page: number;
      image_file: string;
    }[];
  };
};

export const ChapterViewer = ({ data }: { data: ChapterResponse }) => {
  const { domain_cdn, item } = data;
  const { chapter_path, chapter_image } = item;

  if (!chapter_image || chapter_image.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        Không có ảnh cho chapter này.
      </div>
    );
  }

  return (
    <div className="w-full mx-auto mt-[80px]">
      {chapter_image.map((img) => (
        <img
          key={img.image_page}
          src={`${domain_cdn}/${chapter_path}/${img.image_file}`}
          alt={`Trang ${img.image_page}`}
          className="block mx-auto"
        />
      ))}
    </div>
  );
};
