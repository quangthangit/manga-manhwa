import { fetchChapter } from "@/app/api/fetchChapter";
export const ChapterViewer = async({id} : {id : string}) => {
  const data = await fetchChapter(id)
  return (
    <div className="w-full mx-auto mt-[80px]">
      {data?.item.chapter_image.map((img) => (
        <img
          key={img.image_page}
          src={`${data.domain_cdn}/${data.item.chapter_path}/${img.image_file}`}
          alt={`Trang ${img.image_page}`}
          className="block mx-auto"
        />
      ))}
    </div>
  );
};
