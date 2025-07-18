import { Bookmark, BookOpen, Flag, MoreVertical, Upload } from "lucide-react";
import formatTimeAgo from "@/app/until/formatTimeAgo";
import ButtonBanner from "@/app/components/button/ButtonBanner";

type MangaInfoProps = {
  name?: string;
  category?: {
    name: string;
  }[];
  content?: string;
  updatedAt?: string;
};

export const MangaInfo = ({
  category,
  content,
  name,
  updatedAt,
}: MangaInfoProps) => (
  <div className="flex-1 z-10">
    <h2 className="text-2xl md:text-3xl font-bold leading-snug">{name}</h2>
    <div className="flex flex-wrap gap-2 mt-3">
      {category?.map((cat, index) => (
        <span
          key={index}
          className="bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-[10px] shadow-sm"
        >
          {cat.name}
        </span>
      ))}
    </div>
    <div className="flex flex-wrap gap-2 mt-3">
      {content ? (
        content
      ) : (
        <>
          {" "}
          The Hyper Onee-sama, forged by hard work vs. submit first!?Kureha Sara
          is the reigning "Super Onee-sama" of an elite ladies' academy, a
          position she's earned through nothing but relentless effort. Her
          status is suddenly challenged by Mareshino Rui, an effortlessly
          perfect beauty who proposes a secret contest to determine who is truly
          fit to get on top.With the school-wide popularity poll just two months
          away, they need a way to settle the score, just the two of them. Rui's
          method is... quite unexpected."So, that's why... you're going to be my
          girlfriend.""Huh...?"The rules of their new relationship are simple:
          the first one to make the other completely submit proves she is worthy
          of ruling the school! And so begins a secret war of seduction, with
          each girl launching an all-out offensive to make the other fall for
          them first. In this heated battle, whose heart—and body—will be the
          first to surrender? And who will be the one to conquer them? Prepare
          to be dominated by this romantic comedy showdown between two pretty
          girls!
        </>
      )}
    </div>
    <p className="mt-4 text-sm leading-relaxed text-blue-50 max-w-2xl">
      {updatedAt ? <>Cập nhập {formatTimeAgo(updatedAt)}</> : null}
    </p>
    <div className="flex flex-wrap md:flex-nowrap gap-2 mt-2 rounded-lg">
      <ButtonBanner
        bg="bg-[#f7633c]"
        hover="hover:bg-[#e4572e]"
        icon={<Bookmark size={18} />}
        text="Add To Library"
      />
      <ButtonBanner
        bg="bg-gray-700"
        hover="hover:bg-gray-600"
        icon={<BookOpen size={18} />}
        text="Start Reading"
      />
      <ButtonBanner
        bg="bg-gray-700"
        hover="hover:bg-gray-600"
        icon={<Flag size={18} />}
        text="Report"
      />
      <ButtonBanner
        bg="bg-gray-700"
        hover="hover:bg-gray-600"
        icon={<Upload size={18} />}
        text="Upload Chapter"
      />
      <ButtonBanner
        bg="bg-gray-700"
        hover="hover:bg-gray-600"
        icon={<MoreVertical size={18} />}
        hiden="md:hidden"
      />
    </div>
  </div>
);
