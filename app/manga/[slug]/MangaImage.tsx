import Image from "next/image";

type BannerProps = {
  imageUrl: string;
};

export const MangaImage = ({ imageUrl }: BannerProps) => (
  <div className="w-full md:w-1/6 shrink-0">
    <Image
      src={imageUrl}
      alt="Manga Cover"
      width={300}
      height={400}
      className="rounded-lg w-full aspect-[2/3] object-cover shadow-xl"
    />
  </div>
);
