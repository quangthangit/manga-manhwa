import React from "react";

type ButtonBannerType = {
  text?: string;
  bg: string;
  hover: string;
  icon: React.ReactNode;
  hiden?: string;
  onClick?: () => void;
};

const ButtonBanner = ({
  text,
  bg,
  hover,
  icon,
  hiden,
  onClick,
}: ButtonBannerType) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-4 ${bg} ${hover} ${hiden} text-white font-semibold px-4 py-2 rounded-md transition md:w-auto`}
    >
      {icon}
      {text ? <span className="hidden sm:inline">{text}</span> : null}
    </button>
  );
};

export default ButtonBanner;
